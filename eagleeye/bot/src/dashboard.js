'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

/**
 * DASHBOARD WEB AO VIVO.
 *
 * Um painel no navegador (servido pela mesma API da Discloud) onde o dono
 * acompanha, em tempo real, todos os seus servidores: online/offline,
 * jogadores, detecções recentes, nota de segurança e os piores jogadores
 * pela reputação. O acesso é por um link com token pessoal, gerado no Discord
 * com /ac painel. O token só dá acesso de LEITURA aos dados do próprio dono.
 *
 * Guardado em data/dashboard.json -> { "<token>": { ownerId, createdAt } }
 */

const TOKEN_TTL = 1000 * 60 * 60 * 24 * 30; // 30 dias

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

/** Letra A–F a partir da nota 0–100 (para as cores). */
function gradeLetter(score) {
  if (score == null) return 'F';
  if (score >= 90) return 'A';
  if (score >= 70) return 'B';
  if (score >= 50) return 'C';
  if (score >= 30) return 'D';
  return 'F';
}

class Dashboard {
  constructor(dir) {
    this.file = path.join(dir, 'dashboard.json');
    this.tokens = new Map(); // token -> { ownerId, createdAt }
    this.load();
  }

  load() {
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      for (const [tok, info] of Object.entries(raw)) {
        if (info && info.ownerId) this.tokens.set(tok, info);
      }
    } catch (_) { /* começa vazio */ }
    this.prune();
  }

  save() {
    const obj = {};
    for (const [tok, info] of this.tokens) obj[tok] = info;
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(obj));
    fs.renameSync(tmp, this.file);
  }

  prune(now = Date.now()) {
    let changed = false;
    for (const [tok, info] of this.tokens) {
      if (now - (info.createdAt || 0) > TOKEN_TTL) { this.tokens.delete(tok); changed = true; }
    }
    if (changed) this.save();
  }

  /** Emite um token novo para o dono (invalida o anterior dele). */
  issue(ownerId, now = Date.now()) {
    const owner = String(ownerId);
    for (const [tok, info] of this.tokens) if (info.ownerId === owner) this.tokens.delete(tok);
    const token = crypto.randomBytes(24).toString('hex');
    this.tokens.set(token, { ownerId: owner, createdAt: now });
    this.save();
    return token;
  }

  /** Resolve o token num ownerId, ou null. */
  resolve(token, now = Date.now()) {
    if (!token || typeof token !== 'string') return null;
    const info = this.tokens.get(token);
    if (!info) return null;
    if (now - (info.createdAt || 0) > TOKEN_TTL) { this.tokens.delete(token); this.save(); return null; }
    return info.ownerId;
  }

  revoke(ownerId) {
    let n = 0;
    for (const [tok, info] of this.tokens) if (info.ownerId === String(ownerId)) { this.tokens.delete(tok); n++; }
    if (n) this.save();
    return n;
  }
}

/**
 * Monta os dados do painel para um dono. Puro: recebe store/trust/security.
 */
function buildData(store, trust, security, ownerId, now = Date.now()) {
  const servers = [...store.servers.values()].filter((s) => s.owners.includes(String(ownerId)));
  const out = { generatedAt: now, servers: [], totals: { servers: 0, online: 0, players: 0, detections24h: 0 }, recent: [], worst: [] };
  let allRecent = [];
  for (const s of servers) {
    const st = store.getStatus(s);
    const online = store.isServerOnline(s);
    const prots = Object.values(s.protections);
    const active = prots.filter((p) => p.enabled).length;
    const rep = security ? security.securityReport(store, s) : null;
    const since = now - 24 * 3600 * 1000;
    const hist = store.getHistory(s).filter((d) => d.time >= since);
    out.servers.push({
      id: s.id,
      name: s.name,
      online,
      activated: s.activated !== false,
      global: s.global,
      players: online ? (st.players || 0) : 0,
      maxPlayers: st.maxPlayers || 0,
      version: st.version || '?',
      protActive: active,
      protTotal: prots.length,
      grade: rep ? rep.grade : '-',
      gradeLetter: rep ? gradeLetter(rep.score) : 'F',
      score: rep ? rep.score : null,
      detections24h: hist.length,
      lastSeen: st.lastSeen || 0,
    });
    out.totals.players += online ? (st.players || 0) : 0;
    out.totals.detections24h += hist.length;
    if (online) out.totals.online += 1;
    for (const d of hist) allRecent.push({ server: s.name, name: d.name, code: d.code, key: d.key, action: d.action, detail: d.detail, time: d.time });
  }
  out.totals.servers = servers.length;
  allRecent.sort((a, b) => b.time - a.time);
  out.recent = allRecent.slice(0, 40);
  if (trust) out.worst = trust.worst(ownerId, 10, now);
  return out;
}

/* ----------------------------- páginas HTML ----------------------------- */

const STYLE = `
:root{--bg:#0b0f14;--card:#121923;--line:#1f2a37;--fg:#e6edf3;--mut:#8b98a5;--ok:#2ecc71;--bad:#e74c3c;--warn:#f1c40f;--accent:#4aa3ff}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.5 system-ui,Segoe UI,Roboto,sans-serif}
a{color:var(--accent)}.wrap{max-width:1100px;margin:0 auto;padding:16px}
header{display:flex;align-items:center;gap:12px;padding:16px 0;border-bottom:1px solid var(--line);flex-wrap:wrap}
.logo{font-size:22px;font-weight:700}.logo small{color:var(--mut);font-weight:400;font-size:13px;margin-left:6px}
.pill{margin-left:auto;color:var(--mut);font-size:13px}
.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin:16px 0}
.kpi{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px}
.kpi b{display:block;font-size:30px;line-height:1.1}.kpi span{color:var(--mut);font-size:13px}
.card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
.card h2{margin:0 0 10px;font-size:15px;color:var(--mut);font-weight:600;text-transform:uppercase;letter-spacing:.04em}
table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:8px 6px;border-bottom:1px solid var(--line);font-size:14px}
th{color:var(--mut);font-weight:600}
.srv{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.dot{width:9px;height:9px;border-radius:50%;display:inline-block}.on{background:var(--ok)}.off{background:var(--bad)}
.badge{padding:2px 8px;border-radius:999px;font-size:12px;border:1px solid var(--line)}
.g-A{color:var(--ok)}.g-B{color:#a3e635}.g-C{color:var(--warn)}.g-D{color:#e67e22}.g-F{color:var(--bad)}
.a0{color:var(--warn)}.a1{color:#e67e22}.a2{color:var(--bad)}
.mut{color:var(--mut)}.foot{color:var(--mut);font-size:12px;text-align:center;padding:20px 0}
.login{max-width:420px;margin:8vh auto}.login input{width:100%;padding:12px;border-radius:10px;border:1px solid var(--line);background:#0e141b;color:var(--fg);margin:10px 0}
.btn{display:inline-block;background:var(--accent);color:#04121f;border:0;border-radius:10px;padding:12px 18px;font-weight:700;cursor:pointer;text-decoration:none}
.empty{color:var(--mut);padding:18px;text-align:center}
`;

function loginPage(err) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>EagleEYE — Painel</title><style>${STYLE}</style></head>
<body><div class="wrap"><div class="login card">
<div class="logo">🦅 EagleEYE <small>painel ao vivo</small></div>
${err ? `<p class="a2">${esc(err)}</p>` : ''}
<p class="mut">Cole o seu token de acesso ao painel. Gere um no Discord com <code>/ac painel</code>.</p>
<form method="GET" action="/painel"><input name="t" placeholder="token do painel" autocomplete="off" autofocus>
<button class="btn" type="submit">Entrar</button></form>
</div><div class="foot">EagleEYE Anti-Cheat</div></div></body></html>`;
}

function dashboardPage(token) {
  const t = esc(token);
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>EagleEYE — Painel</title><style>${STYLE}</style></head>
<body><div class="wrap">
<header><div class="logo">🦅 EagleEYE <small>painel ao vivo</small></div><div class="pill" id="upd">carregando…</div></header>
<div class="grid" id="kpis"></div>
<div class="card"><h2>Servidores</h2><div id="servers"></div></div>
<div class="card"><h2>Detecções recentes (24h)</h2><div id="recent"></div></div>
<div class="card"><h2>Jogadores com pior reputação</h2><div id="worst"></div></div>
<div class="foot">EagleEYE Anti-Cheat · atualiza sozinho a cada 8s</div>
</div>
<script>
var TOKEN=${JSON.stringify(token)};
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});}
function ago(ms){if(!ms)return '—';var s=Math.floor((Date.now()-ms)/1000);if(s<60)return s+'s';var m=Math.floor(s/60);if(m<60)return m+'min';var h=Math.floor(m/60);if(h<24)return h+'h';return Math.floor(h/24)+'d';}
var ACT=['aviso','kick','ban'];
function render(d){
 document.getElementById('upd').textContent='atualizado '+new Date().toLocaleTimeString();
 var t=d.totals;
 document.getElementById('kpis').innerHTML=
  kpi(t.servers,'servidores')+kpi(t.online,'online agora')+kpi(t.players,'jogadores')+kpi(t.detections24h,'detecções 24h');
 var sv=d.servers.map(function(s){
   return '<tr><td><span class="srv"><span class="dot '+(s.online?'on':'off')+'"></span><b>'+esc(s.name)+'</b></span><br><span class="mut">'+esc(s.id)+'</span></td>'+
   '<td>'+(s.online?s.players+'/'+s.maxPlayers:'<span class="mut">offline</span>')+'</td>'+
   '<td><span class="badge g-'+esc(s.gradeLetter||'F')+'">'+esc(s.grade)+'</span></td>'+
   '<td>'+s.protActive+'/'+s.protTotal+'</td>'+
   '<td>'+s.detections24h+'</td>'+
   '<td class="mut">'+ago(s.lastSeen)+'</td></tr>';
 }).join('');
 document.getElementById('servers').innerHTML=d.servers.length?'<table><tr><th>Servidor</th><th>Jogadores</th><th>Nota</th><th>Proteções</th><th>Det. 24h</th><th>Visto</th></tr>'+sv+'</table>':'<div class="empty">Nenhum servidor ainda. Faça /ac login no Discord.</div>';
 var rc=d.recent.map(function(r){
   return '<tr><td class="mut">'+ago(r.time)+'</td><td><b>'+esc(r.name)+'</b></td><td>'+esc(r.key||r.code)+'</td><td class="a'+r.action+'">'+(ACT[r.action]||'?')+'</td><td class="mut">'+esc(r.server)+'</td></tr>';
 }).join('');
 document.getElementById('recent').innerHTML=d.recent.length?'<table><tr><th>Quando</th><th>Jogador</th><th>Proteção</th><th>Ação</th><th>Servidor</th></tr>'+rc+'</table>':'<div class="empty">Nenhuma detecção nas últimas 24h. 🎉</div>';
 var wr=(d.worst||[]).map(function(w){
   return '<tr><td><b>'+esc(w.name)+'</b></td><td>'+w.emoji+' '+w.score+'/100</td><td>'+esc(w.label)+'</td><td>'+w.dets+'</td><td>'+w.bans+'</td></tr>';
 }).join('');
 document.getElementById('worst').innerHTML=(d.worst&&d.worst.length)?'<table><tr><th>Jogador</th><th>Reputação</th><th>Situação</th><th>Detecções</th><th>Bans</th></tr>'+wr+'</table>':'<div class="empty">Sem histórico de reputação ainda.</div>';
}
function kpi(v,l){return '<div class="kpi"><b>'+v+'</b><span>'+l+'</span></div>';}
function tick(){fetch('/painel/dados?t='+encodeURIComponent(TOKEN),{cache:'no-store'}).then(function(r){if(r.status===401){location.href='/painel';return null;}return r.json();}).then(function(d){if(d)render(d);}).catch(function(){});}
tick();setInterval(tick,8000);
</script></body></html>`;
}

module.exports = { Dashboard, buildData, loginPage, dashboardPage, esc, gradeLetter };
