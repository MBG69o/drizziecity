'use strict';

/**
 * SITE DE GERENCIAMENTO (completo).
 *
 * Login em 2 etapas (token -> código de 5 min) e, depois de logado, o cliente
 * ativa/desliga proteções, ajusta ação/tolerância/limite, liga/desliga o
 * anti-cheat, manda aviso no jogo e vê as detecções recentes e a reputação
 * dos jogadores — tudo no navegador.
 *
 * Este módulo cuida das rotas /app* e devolve true quando tratou a requisição.
 * A página é servida inteira (HTML+JS embutidos) e conversa com a API JSON.
 */

const { PROTECTIONS, CATEGORIES, ACTIONS, byKey } = require('./protections');
const { gradeLetter } = require('./dashboard');
const { sanitizeGameText } = require('./config-format');

function jsonBody(res, send, status, obj) {
  send(res, status, JSON.stringify(obj), { 'Content-Type': 'application/json; charset=utf-8' });
}
function clampInt(v, lo, hi, def) {
  const n = Number.parseInt(v, 10);
  if (!Number.isFinite(n)) return def;
  return n < lo ? lo : (n > hi ? hi : n);
}

const CATALOG = {
  categories: CATEGORIES,
  actions: ACTIONS,
  protections: PROTECTIONS.map((p) => ({ id: p.id, key: p.key, cat: p.cat, name: p.name, desc: p.desc, valueLabel: p.valueLabel })),
};

/** Servidores que a sessão pode gerenciar. */
function scopedServers(store, session) {
  const byOwner = [...store.servers.values()].filter((s) => s.owners.includes(session.ownerKey));
  if (byOwner.length) return byOwner;
  return (session.scope || []).map((id) => store.getServer(id)).filter(Boolean);
}

function serverView(store, security, trust, s) {
  const st = store.getStatus(s);
  const online = store.isServerOnline(s);
  const rep = security ? security.securityReport(store, s) : { grade: '-', score: null };
  const prot = {};
  for (const [k, v] of Object.entries(s.protections)) prot[k] = { enabled: !!v.enabled, action: v.action, tolerance: v.tolerance, value: v.value };
  return {
    id: s.id, name: s.name, online, activated: s.activated !== false, global: !!s.global,
    players: online ? (st.players || 0) : 0, maxPlayers: st.maxPlayers || 0, version: st.version || '?',
    grade: rep.grade, gradeLetter: gradeLetter(rep.score), score: rep.score,
    publicBadge: !!s.publicBadge, lastSeen: st.lastSeen || 0, protections: prot,
  };
}

/**
 * ctx: { store, webauth, trust, security, guard, ip, readBody, send, logger, onAuthCode }
 * Retorna true se tratou a rota.
 */
function handleWebApp(req, res, url, ctx) {
  const { store, webauth, trust, security, send, readBody, logger, onAuthCode } = ctx;
  const path = url.pathname;
  if (path !== '/app' && !path.startsWith('/app/')) return false;

  // --- página (shell) ---
  if (req.method === 'GET' && (path === '/app' || path === '/app/')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(APP_PAGE);
    return true;
  }

  const session = () => {
    const h = String(req.headers['authorization'] || '').replace(/^Bearer\s+/i, '') || String(req.headers['x-ee-session'] || '');
    return webauth.resolveSession(h.trim());
  };

  // --- etapa 1: token -> envia código ---
  if (req.method === 'POST' && path === '/app/login/start') {
    readBody(req, res, 1024, (body) => {
      let token = '';
      try { token = String(JSON.parse(body).token || '').trim(); } catch { token = ''; }
      if (!token) return jsonBody(res, send, 400, { error: 'Informe o token.' });
      const r = store.loginWithToken(token);
      if (r.error) {
        const msg = {
          format: 'Token em formato inválido.',
          token: 'Token incorreto para esse servidor.',
          notseen: 'Esse servidor ainda não se conectou ao bot. Ligue o servidor e tente de novo.',
        }[r.error] || 'Token inválido.';
        return jsonBody(res, send, 401, { error: msg });
      }
      const server = r.server;
      const ownerKey = server.owners[0] || server.id;
      const scope = scopedServers(store, { ownerKey, scope: [server.id] }).map((s) => s.id);
      const { challengeId, expiresAt } = webauth.startChallenge({
        serverId: server.id, ownerKey, scope: scope.length ? scope : [server.id], name: server.name,
      });
      const challenge = webauth.challenges.get(challengeId);
      const code = challenge.code;
      // entrega o código: console do servidor (sempre) + DM no Discord (se houver dono)
      try { store.queueCommand(server, 'authcode', code); } catch (e) { logger.error('[webapp] queue authcode', e.message); }
      let dmed = false;
      if (onAuthCode) { try { dmed = !!onAuthCode(server, code); } catch (e) { logger.error('[webapp] onAuthCode', e.message); } }
      const online = store.isServerOnline(server);
      const vias = [];
      if (online) vias.push('no console do servidor');
      if (dmed) vias.push('na sua DM do Discord');
      let via = vias.join(' e ');
      if (!vias.length) via = 'no console do servidor assim que ele ficar online (ligue o servidor agora)';
      return jsonBody(res, send, 200, {
        ok: true, challengeId, via, expiresInMs: Math.max(0, expiresAt - Date.now()), online,
      });
    });
    return true;
  }

  // --- etapa 2: código -> sessão ---
  if (req.method === 'POST' && path === '/app/login/verify') {
    readBody(req, res, 1024, (body) => {
      let challengeId = ''; let code = '';
      try { const j = JSON.parse(body); challengeId = String(j.challengeId || ''); code = String(j.code || '').trim(); } catch { /* */ }
      const r = webauth.verify(challengeId, code);
      if (!r.ok) {
        const msg = {
          expired: 'Código expirado. Peça um novo.',
          blocked: 'Tentativas demais. Peça um novo código.',
          code: `Código incorreto. ${r.attemptsLeft ? `${r.attemptsLeft} tentativa(s) restante(s).` : 'Peça um novo código.'}`,
        }[r.error] || 'Código inválido.';
        return jsonBody(res, send, 401, { error: msg });
      }
      const sess = webauth.resolveSession(r.sessionId);
      return jsonBody(res, send, 200, { ok: true, session: r.sessionId, name: sess ? sess.name : '' });
    });
    return true;
  }

  // --- logout ---
  if (req.method === 'POST' && path === '/app/logout') {
    const h = String(req.headers['authorization'] || '').replace(/^Bearer\s+/i, '') || String(req.headers['x-ee-session'] || '');
    webauth.destroySession(h.trim());
    return jsonBody(res, send, 200, { ok: true }), true;
  }

  // --- estado completo (auth) ---
  if (req.method === 'GET' && path === '/app/api/state') {
    const sess = session();
    if (!sess) return jsonBody(res, send, 401, { error: 'sessão expirada' }), true;
    const servers = scopedServers(store, sess).map((s) => serverView(store, security, trust, s));
    const recent = [];
    for (const s of scopedServers(store, sess)) {
      const since = Date.now() - 24 * 3600 * 1000;
      for (const d of store.getHistory(s).filter((d2) => d2.time >= since)) {
        recent.push({ server: s.name, name: d.name, code: d.code, key: d.key, action: d.action, detail: d.detail, time: d.time });
      }
    }
    recent.sort((a, b) => b.time - a.time);
    const worst = trust ? trust.worst(sess.ownerKey, 10) : [];
    jsonBody(res, send, 200, { ok: true, owner: { name: sess.name || '' }, servers, recent: recent.slice(0, 50), worst });
    return true;
  }

  // helper: pega a sessão + servidor no escopo para rotas de escrita
  const writeTarget = (body) => {
    const sess = session();
    if (!sess) return { err: [401, 'sessão expirada'] };
    let j = {};
    try { j = JSON.parse(body); } catch { return { err: [400, 'json inválido'] }; }
    const server = store.getServer(String(j.serverId || ''));
    if (!server || !scopedServers(store, sess).some((s) => s.id === server.id)) return { err: [403, 'servidor fora do seu acesso'] };
    return { sess, server, j };
  };

  // --- muda uma proteção (auth) ---
  if (req.method === 'POST' && path === '/app/api/protection') {
    readBody(req, res, 1024, (body) => {
      const t = writeTarget(body);
      if (t.err) return jsonBody(res, send, t.err[0], { error: t.err[1] });
      const { server, j } = t;
      const meta = byKey.get(String(j.key || ''));
      if (!meta) return jsonBody(res, send, 400, { error: 'proteção inválida' });
      store.updateServer(server, (s) => {
        const p = s.protections[meta.key];
        if (typeof j.enabled === 'boolean') p.enabled = j.enabled;
        if (j.action != null) p.action = clampInt(j.action, 0, 2, p.action);
        if (j.tolerance != null) p.tolerance = clampInt(j.tolerance, 1, 100, p.tolerance);
        if (j.value != null) p.value = clampInt(j.value, 0, 1_000_000, p.value);
      });
      const p = server.protections[meta.key];
      logger.log(`[webapp] ${server.id} prot ${meta.key} -> ${JSON.stringify(p)}`);
      return jsonBody(res, send, 200, { ok: true, key: meta.key, protection: p });
    });
    return true;
  }

  // --- liga/desliga o anti-cheat inteiro (auth) ---
  if (req.method === 'POST' && path === '/app/api/global') {
    readBody(req, res, 512, (body) => {
      const t = writeTarget(body);
      if (t.err) return jsonBody(res, send, t.err[0], { error: t.err[1] });
      const { server, j } = t;
      const on = !!j.on;
      if (on && server.activated === false) return jsonBody(res, send, 409, { error: 'Confirme a ativação no Discord antes de ligar.' });
      store.updateServer(server, (s) => { s.global = on; });
      return jsonBody(res, send, 200, { ok: true, global: on });
    });
    return true;
  }

  // --- aviso no jogo (auth) ---
  if (req.method === 'POST' && path === '/app/api/announce') {
    readBody(req, res, 1024, (body) => {
      const t = writeTarget(body);
      if (t.err) return jsonBody(res, send, t.err[0], { error: t.err[1] });
      const { server, j } = t;
      const msg = sanitizeGameText(String(j.message || ''));
      if (!msg) return jsonBody(res, send, 400, { error: 'Mensagem vazia.' });
      if (!store.isServerOnline(server)) return jsonBody(res, send, 409, { error: 'O servidor está offline.' });
      store.queueCommand(server, 'aviso', msg);
      return jsonBody(res, send, 200, { ok: true });
    });
    return true;
  }

  // --- selo público (auth) ---
  if (req.method === 'POST' && path === '/app/api/badge') {
    readBody(req, res, 512, (body) => {
      const t = writeTarget(body);
      if (t.err) return jsonBody(res, send, t.err[0], { error: t.err[1] });
      const { server, j } = t;
      store.updateServer(server, (s) => { s.publicBadge = !!j.on; }, { bump: false });
      return jsonBody(res, send, 200, { ok: true, publicBadge: !!j.on });
    });
    return true;
  }

  return jsonBody(res, send, 404, { error: 'rota não encontrada' }), true;
}

/* ======================= página do site (HTML + JS) ======================= */
const APP_PAGE = buildAppPage();
function buildAppPage() {
  const boot = JSON.stringify(CATALOG);
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>EagleEYE — Gerenciador</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@600;700&display=swap">
<style>
:root{--bg:#0b0f14;--panel:#121a24;--panel2:#0e151d;--line:#223041;--fg:#e8eef5;--mut:#8a98a7;--accent:#4aa3ff;--ok:#2ecc71;--warn:#f1c40f;--bad:#e74c3c;--orange:#e67e22;--lime:#a3e635;--fh:"Space Grotesk",system-ui,sans-serif;--fb:"Inter",system-ui,sans-serif;color-scheme:dark}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:var(--fb);line-height:1.5;background-image:radial-gradient(900px 500px at 85% -10%,rgba(74,163,255,.1),transparent 60%)}
.wrap{max-width:1040px;margin:0 auto;padding-block:18px;padding-left:max(16px,env(safe-area-inset-left,0px));padding-right:max(16px,env(safe-area-inset-right,0px))}
a{color:var(--accent)}button{font-family:inherit}
.logo{font-family:var(--fh);font-size:22px;font-weight:700}.logo .e{color:var(--accent)}
header{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding-block:4px 14px;border-bottom:1px solid var(--line)}
.sub{color:var(--mut);font-size:12px;letter-spacing:.06em;text-transform:uppercase}
.right{margin-left:auto;display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:16px;margin:14px 0;min-width:0}
.card h2{margin:0 0 12px;font-size:12px;color:var(--mut);font-weight:600;letter-spacing:.08em;text-transform:uppercase}
.login{max-width:440px;margin:7vh auto}
input,select,textarea{width:100%;padding:12px;border-radius:10px;border:1px solid var(--line);background:#0e141b;color:var(--fg);font-size:15px}
textarea{resize:vertical;min-height:62px}
.btn{background:var(--accent);color:#04121f;border:0;border-radius:10px;padding:12px 18px;font-weight:700;cursor:pointer}
.btn.sm{padding:8px 12px;font-size:13px}.btn.ghost{background:transparent;color:var(--fg);border:1px solid var(--line)}
.btn[disabled]{opacity:.55;cursor:not-allowed}
.code{letter-spacing:.5em;text-align:center;font-size:26px;font-family:var(--fh)}
.msg{font-size:14px;margin:10px 0;padding:10px 12px;border-radius:10px;border:1px solid var(--line)}
.msg.err{color:#ffd4d0;border-color:rgba(231,76,60,.4);background:rgba(231,76,60,.1)}
.msg.ok{color:#cdefd9;border-color:rgba(46,204,113,.4);background:rgba(46,204,113,.1)}
.mut{color:var(--mut)}.row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
.kpis{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(130px,1fr))}
.kpi{background:linear-gradient(180deg,var(--panel),var(--panel2));border:1px solid var(--line);border-radius:12px;padding:14px}
.kpi b{display:block;font-family:var(--fh);font-size:28px;font-variant-numeric:tabular-nums}.kpi span{color:var(--mut);font-size:13px}
.pill{display:inline-block;padding:2px 9px;border-radius:999px;font-size:12px;font-weight:600;border:1px solid var(--line)}
.g-A{color:var(--ok)}.g-B{color:var(--lime)}.g-C{color:var(--warn)}.g-D{color:var(--orange)}.g-F{color:var(--bad)}
.dot{width:9px;height:9px;border-radius:50%;display:inline-block;margin-right:6px}.on{background:var(--ok)}.off{background:var(--bad)}
.tabs{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 2px}
.tab{padding:8px 12px;border-radius:999px;border:1px solid var(--line);background:transparent;color:var(--mut);cursor:pointer;font-size:13px}
.tab.active{background:var(--accent);color:#04121f;border-color:transparent;font-weight:700}
.prot{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid var(--line);flex-wrap:wrap}
.prot:last-child{border-bottom:0}.prot .info{flex:1;min-width:200px}.prot .name{font-weight:600}
.prot .ctl{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.prot select,.prot input{width:auto;padding:7px 9px;font-size:13px}
.sw{position:relative;width:46px;height:26px;flex:0 0 auto}
.sw input{opacity:0;width:100%;height:100%;margin:0;cursor:pointer}
.sw span{position:absolute;inset:0;background:#2a3a4c;border-radius:999px;transition:.15s;pointer-events:none}
.sw span::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:.15s}
.sw input:checked+span{background:var(--ok)}.sw input:checked+span::after{transform:translateX(20px)}
table{width:100%;border-collapse:collapse;font-size:14px}th,td{text-align:left;padding:9px 7px;border-bottom:1px solid var(--line);white-space:nowrap}
th{color:var(--mut);font-size:12px;text-transform:uppercase;letter-spacing:.04em}
.a0{color:var(--warn)}.a1{color:var(--orange)}.a2{color:var(--bad);font-weight:600}
.scroll{overflow-x:auto}.when{color:var(--mut);font-size:12.5px}
.foot{color:var(--mut);font-size:12px;text-align:center;padding:20px 0}
.hide{display:none!important}
.toast{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);background:#0e151d;border:1px solid var(--line);border-radius:10px;padding:10px 16px;z-index:30;opacity:0;transition:.2s}
.toast.show{opacity:1}
</style></head><body>

<div class="wrap">
 <!-- LOGIN -->
 <section id="screen-login">
  <div class="login card">
   <div class="logo">🦅 Eagle<span class="e">EYE</span></div>
   <div class="sub">Gerenciador de servidores</div>
   <div id="step-token">
    <p class="mut">Informe o <b>token de acesso</b> do servidor (aparece no console ao ligar). Você receberá um código de 6 dígitos para confirmar.</p>
    <input id="token" placeholder="EE-XXXXXX-XXXX-XXXX-XXXX-XXXX" autocomplete="off" maxlength="40">
    <div id="m1"></div>
    <div class="row" style="margin-top:10px"><button class="btn" id="btn-start">Enviar código</button></div>
   </div>
   <div id="step-code" class="hide">
    <p class="mut">Enviamos um código <b id="via"></b>. Ele vale <b id="ttl">5:00</b>.</p>
    <input id="code" class="code" placeholder="000000" inputmode="numeric" maxlength="6" autocomplete="one-time-code">
    <div id="m2"></div>
    <div class="row" style="margin-top:10px"><button class="btn" id="btn-verify">Entrar</button><button class="btn ghost sm" id="btn-back">Trocar token</button></div>
   </div>
  </div>
  <div class="foot">EagleEYE Anti-Cheat</div>
 </section>

 <!-- APP -->
 <section id="screen-app" class="hide">
  <header>
   <div><div class="logo">🦅 Eagle<span class="e">EYE</span></div><div class="sub">Gerenciador</div></div>
   <div class="right">
    <select id="srvsel" style="width:auto"></select>
    <button class="btn ghost sm" id="btn-logout">Sair</button>
   </div>
  </header>

  <div class="card"><div class="kpis" id="kpis"></div></div>

  <div class="card">
   <div class="row" style="justify-content:space-between">
    <h2 style="margin:0">Anti-cheat</h2>
    <label class="row" style="gap:8px"><span id="globlbl" class="mut">—</span><span class="sw"><input type="checkbox" id="glob"><span></span></span></label>
   </div>
   <div id="actinfo" class="mut" style="font-size:13px;margin-top:6px"></div>
  </div>

  <div class="card">
   <h2>Proteções</h2>
   <div class="tabs" id="tabs"></div>
   <div id="prots"></div>
  </div>

  <div class="card">
   <h2>Aviso no jogo</h2>
   <div class="row"><input id="ann" placeholder="Mensagem para todos no servidor (sem acentos)" maxlength="120" style="flex:1"><button class="btn sm" id="btn-ann">Enviar</button></div>
  </div>

  <div class="card">
   <h2>Detecções recentes (24h)</h2>
   <div class="scroll"><table id="recent"><tbody></tbody></table></div>
  </div>

  <div class="card">
   <h2>Reputação dos jogadores</h2>
   <div class="scroll"><table id="worst"><tbody></tbody></table></div>
  </div>

  <div class="foot">EagleEYE Anti-Cheat · as mudanças chegam ao servidor em segundos</div>
 </section>
</div>
<div class="toast" id="toast"></div>

<script>
var CAT=${boot};
var S={session:localStorage.getItem('ee_sess')||'',challenge:'',ttl:0,cat:CAT.protections[0]?CAT.protections[0].cat:'jogador',data:null,cur:null,ttlTimer:0};
var $=function(id){return document.getElementById(id)};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function toast(t){var el=$('toast');el.textContent=t;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(function(){el.classList.remove('show')},2200)}
function api(path,opts){opts=opts||{};opts.headers=opts.headers||{};if(S.session)opts.headers['Authorization']='Bearer '+S.session;if(opts.body)opts.headers['Content-Type']='application/json';return fetch(path,opts).then(function(r){return r.json().then(function(j){return{status:r.status,j:j}})})}

/* ---- login ---- */
function showLogin(){$('screen-app').classList.add('hide');$('screen-login').classList.remove('hide')}
function showApp(){$('screen-login').classList.add('hide');$('screen-app').classList.remove('hide');load()}
$('btn-start').onclick=function(){
 var tok=$('token').value.trim();if(!tok){return}
 $('btn-start').disabled=true;$('m1').innerHTML='';
 api('/app/login/start',{method:'POST',body:JSON.stringify({token:tok})}).then(function(r){
  $('btn-start').disabled=false;
  if(r.status!==200){$('m1').innerHTML='<div class="msg err">'+esc(r.j.error)+'</div>';return}
  S.challenge=r.j.challengeId;$('via').textContent=r.j.via;
  $('step-token').classList.add('hide');$('step-code').classList.remove('hide');$('code').focus();
  startTtl(r.j.expiresInMs||300000);
 }).catch(function(){$('btn-start').disabled=false;$('m1').innerHTML='<div class="msg err">Falha de conexão.</div>'})
};
$('btn-back').onclick=function(){$('step-code').classList.add('hide');$('step-token').classList.remove('hide');clearInterval(S.ttlTimer)};
$('btn-verify').onclick=function(){
 var code=$('code').value.trim();if(code.length<6){return}
 $('btn-verify').disabled=true;$('m2').innerHTML='';
 api('/app/login/verify',{method:'POST',body:JSON.stringify({challengeId:S.challenge,code:code})}).then(function(r){
  $('btn-verify').disabled=false;
  if(r.status!==200){$('m2').innerHTML='<div class="msg err">'+esc(r.j.error)+'</div>';return}
  S.session=r.j.session;try{localStorage.setItem('ee_sess',S.session)}catch(e){}
  clearInterval(S.ttlTimer);showApp();
 }).catch(function(){$('btn-verify').disabled=false;$('m2').innerHTML='<div class="msg err">Falha de conexão.</div>'})
};
$('code').addEventListener('keydown',function(e){if(e.key==='Enter')$('btn-verify').click()});
$('token').addEventListener('keydown',function(e){if(e.key==='Enter')$('btn-start').click()});
function startTtl(ms){var end=Date.now()+ms;clearInterval(S.ttlTimer);S.ttlTimer=setInterval(function(){
 var left=Math.max(0,Math.round((end-Date.now())/1000));var m=Math.floor(left/60),s=left%60;
 $('ttl').textContent=m+':'+(s<10?'0':'')+s;if(left<=0){clearInterval(S.ttlTimer);$('m2').innerHTML='<div class="msg err">Código expirado. Volte e peça um novo.</div>'}
},500)}

/* ---- logout ---- */
$('btn-logout').onclick=function(){api('/app/logout',{method:'POST'});S.session='';try{localStorage.removeItem('ee_sess')}catch(e){}showLogin();location.hash=''};

/* ---- app ---- */
function load(){api('/app/api/state').then(function(r){
 if(r.status===401){S.session='';try{localStorage.removeItem('ee_sess')}catch(e){}showLogin();return}
 S.data=r.j;
 var sel=$('srvsel');var keep=S.cur;sel.innerHTML=r.j.servers.map(function(s){return '<option value="'+esc(s.id)+'">'+esc(s.name)+(s.online?'':' (offline)')+'</option>'}).join('');
 if(!r.j.servers.length){sel.innerHTML='<option>nenhum servidor</option>'}
 S.cur=(keep&&r.j.servers.some(function(s){return s.id===keep}))?keep:(r.j.servers[0]&&r.j.servers[0].id);
 if(S.cur)sel.value=S.cur;renderAll();
}).catch(function(){})}
$('srvsel').onchange=function(){S.cur=this.value;renderAll()};
function curServer(){return (S.data&&S.data.servers||[]).filter(function(s){return s.id===S.cur})[0]}

function renderAll(){var s=curServer();if(!s){$('kpis').innerHTML='<div class="kpi"><b>0</b><span>servidores</span></div>';return}
 $('kpis').innerHTML=[['<span class="dot '+(s.online?'on':'off')+'"></span>'+(s.online?'online':'offline'),'estado'],
  [s.online?s.players+'/'+s.maxPlayers:'—','jogadores'],
  ['<span class="pill g-'+esc(s.gradeLetter)+'">'+esc(s.grade)+'</span>','segurança'],
  [Object.values(s.protections).filter(function(p){return p.enabled}).length+'/'+Object.keys(s.protections).length,'proteções ativas']
 ].map(function(k){return '<div class="kpi"><b>'+k[0]+'</b><span>'+k[1]+'</span></div>'}).join('');
 $('glob').checked=!!s.global;$('globlbl').textContent=s.global?'ligado':'desligado';
 $('actinfo').textContent=s.activated?'':'⏳ Ative o servidor no Discord (/ac meuservidor) antes de ligar o anti-cheat.';
 renderTabs();renderProts();renderRecent();renderWorst();
}
function renderTabs(){$('tabs').innerHTML=CAT.categories.map(function(c){return '<button class="tab'+(c.key===S.cat?' active':'')+'" data-k="'+c.key+'">'+c.emoji+' '+esc(c.name)+'</button>'}).join('');
 Array.prototype.forEach.call($('tabs').children,function(b){b.onclick=function(){S.cat=b.getAttribute('data-k');renderTabs();renderProts()}})}
function renderProts(){var s=curServer();if(!s)return;
 var list=CAT.protections.filter(function(p){return p.cat===S.cat});
 $('prots').innerHTML=list.map(function(p){var st=s.protections[p.key]||{enabled:false,action:1,tolerance:1,value:0};
  return '<div class="prot"><label class="sw"><input type="checkbox" data-k="'+p.key+'" class="en"'+(st.enabled?' checked':'')+'><span></span></label>'+
   '<div class="info"><div class="name">'+esc(p.name)+'</div><div class="mut" style="font-size:13px">'+esc(p.desc)+'</div></div>'+
   '<div class="ctl"><select class="ac" data-k="'+p.key+'">'+CAT.actions.map(function(a,i){return '<option value="'+i+'"'+(st.action===i?' selected':'')+'>'+a+'</option>'}).join('')+'</select>'+
   '<input class="tol" data-k="'+p.key+'" type="number" min="1" max="100" value="'+st.tolerance+'" title="tolerância (detecções em 60s)" style="width:68px">'+
   (p.valueLabel?'<input class="val" data-k="'+p.key+'" type="number" min="0" value="'+st.value+'" title="'+esc(p.valueLabel)+'" style="width:84px">':'')+
   '</div></div>'}).join('');
 bind('.en','change',function(el){saveProt(el.getAttribute('data-k'),{enabled:el.checked})});
 bind('.ac','change',function(el){saveProt(el.getAttribute('data-k'),{action:parseInt(el.value,10)})});
 bind('.tol','change',function(el){saveProt(el.getAttribute('data-k'),{tolerance:parseInt(el.value,10)})});
 bind('.val','change',function(el){saveProt(el.getAttribute('data-k'),{value:parseInt(el.value,10)})});
}
function bind(sel,ev,fn){Array.prototype.forEach.call($('prots').querySelectorAll(sel),function(el){el.addEventListener(ev,function(){fn(el)})})}
function saveProt(key,patch){var body=Object.assign({serverId:S.cur,key:key},patch);
 api('/app/api/protection',{method:'POST',body:JSON.stringify(body)}).then(function(r){
  if(r.status!==200){toast('⚠️ '+(r.j.error||'erro'));load();return}
  var s=curServer();if(s)s.protections[key]=r.j.protection;toast('✅ salvo');renderProtsKpi()})}
function renderProtsKpi(){var s=curServer();if(s)$('kpis').children[3].querySelector('b').textContent=Object.values(s.protections).filter(function(p){return p.enabled}).length+'/'+Object.keys(s.protections).length}
$('glob').onchange=function(){var on=this.checked;
 api('/app/api/global',{method:'POST',body:JSON.stringify({serverId:S.cur,on:on})}).then(function(r){
  if(r.status!==200){toast('⚠️ '+(r.j.error||'erro'));$('glob').checked=!on;return}
  var s=curServer();if(s)s.global=on;$('globlbl').textContent=on?'ligado':'desligado';toast('✅ '+(on?'ligado':'desligado'))})}
$('btn-ann').onclick=function(){var m=$('ann').value.trim();if(!m)return;
 api('/app/api/announce',{method:'POST',body:JSON.stringify({serverId:S.cur,message:m})}).then(function(r){
  if(r.status!==200){toast('⚠️ '+(r.j.error||'erro'));return}$('ann').value='';toast('📢 enviado')})}
var ACT=['aviso','kick','ban'];
function renderRecent(){var rows=(S.data.recent||[]).slice(0,25);
 $('recent').querySelector('tbody').innerHTML=rows.length?('<tr><th>Quando</th><th>Jogador</th><th>Proteção</th><th>Ação</th><th>Servidor</th></tr>'+rows.map(function(r){
  return '<tr><td class="when">'+ago(r.time)+'</td><td>'+esc(r.name)+'</td><td>'+esc(r.key||r.code)+'</td><td class="a'+r.action+'">'+(ACT[r.action]||'?')+'</td><td class="when">'+esc(r.server)+'</td></tr>'}).join('')):'<tr><td class="mut" style="padding:16px">Nenhuma detecção nas últimas 24h. 🎉</td></tr>'}
function renderWorst(){var rows=S.data.worst||[];
 $('worst').querySelector('tbody').innerHTML=rows.length?('<tr><th>Jogador</th><th>Reputação</th><th>Situação</th><th>Det.</th><th>Bans</th></tr>'+rows.map(function(w){
  return '<tr><td>'+esc(w.name)+'</td><td>'+w.emoji+' '+w.score+'/100</td><td>'+esc(w.label)+'</td><td>'+w.dets+'</td><td>'+w.bans+'</td></tr>'}).join('')):'<tr><td class="mut" style="padding:16px">Sem histórico ainda.</td></tr>'}
function ago(ms){if(!ms)return'—';var s=Math.floor((Date.now()-ms)/1000);if(s<60)return s+'s';var m=Math.floor(s/60);if(m<60)return m+'min';var h=Math.floor(m/60);if(h<24)return h+'h';return Math.floor(h/24)+'d'}

/* boot */
if(S.session){showApp()}else{showLogin()}
setInterval(function(){if(S.session&&!$('screen-app').classList.contains('hide'))load()},10000);
</script></body></html>`;
}

module.exports = { handleWebApp, scopedServers, serverView, CATALOG };
