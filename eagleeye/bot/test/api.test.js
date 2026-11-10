'use strict';

const { test, before, after } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Store } = require('../src/store');
const { startApi } = require('../src/api');
const { buildConfigResponse, isValidIPv4Pattern, sanitizeGameText, isValidNick } = require('../src/config-format');
const { PROTECTIONS, CATEGORIES, byCategory } = require('../src/protections');
const { commands } = require('../src/commands');
const { Permissions } = require('../src/permissions');

let server; let store; let base; let dir; const detections = [];
const quiet = { log() {}, error() {} };

// gera um token como o include faz (EE-XXXXXX-XXXX-XXXX-XXXX-XXXX)
const ALPHA = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const rnd = (n) => Array.from({ length: n }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');
const genToken = () => `EE-${rnd(6)}-${rnd(4)}-${rnd(4)}-${rnd(4)}-${rnd(4)}`;

/** Simula um servidor novo: gera o token, consulta o bot (WAIT) e o dono faz /ac login. */
async function register(host = 'Meu%20Servidor') {
  const token = genToken();
  const id = token.slice(0, 9);
  const wait = await (await fetch(`${base}/ac/config?id=${id}&token=${token}&v=0&players=3&max=50&port=7777&host=${host}`)).text();
  const login = store.loginWithToken(token);
  return { id, token, wait, login };
}

before(async () => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), 'eagleeye-'));
  store = new Store(dir).load();
  server = startApi({ store, host: '127.0.0.1', port: 0, onDetection: (s, d) => detections.push([s.id, d]), logger: quiet });
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

test('servidor novo: token do include fica aguardando e o /ac login o reconhece', async () => {
  const token = genToken();
  const id = token.slice(0, 9);
  // antes de qualquer conexão o login é recusado (ninguém pode "reservar" um token inventado)
  assert.strictEqual(store.loginWithToken(token).error, 'notseen');
  const res = await fetch(`${base}/ac/config?id=${id}&token=${token}&v=0&players=4&max=50&port=7777&host=Meu%20Servidor`);
  assert.strictEqual(res.status, 200);
  assert.strictEqual(await res.text(), 'WAIT\nEND\n');
  assert.strictEqual(store.getServer(id), null, 'sem login o bot não cria o servidor');
  const login = store.loginWithToken(token.toLowerCase().replace(/-/g, ' '));
  assert.ok(login.created && login.server.id === id);
  assert.strictEqual(login.server.name, 'Meu Servidor');
  assert.strictEqual(store.getStatus(login.server).players, 4);
  assert.notStrictEqual(login.server.tokenHash, token, 'o token não pode ser salvo em texto puro');
  assert.ok(fs.existsSync(path.join(dir, 'servers', `${id}.json`)));
  // depois do login o servidor passa a receber a configuração
  const text = await (await fetch(`${base}/ac/config?id=${id}&token=${token}&v=0`)).text();
  assert.match(text, /^EAGLE /);
  // novo login com o mesmo token (outro dono) funciona; token errado não
  assert.strictEqual(store.loginWithToken(token).created, false);
  assert.strictEqual(store.loginWithToken(`${id}-AAAA-BBBB-CCCC-DDDD`).error, 'token');
  assert.strictEqual(store.loginWithToken('lixo').error, 'format');
});
test('config exige token correto', async () => {
  const r = await register();
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=errado&v=0`)).status, 401);
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=${r.id}-AAAA-BBBB-CCCC-DDDD&v=0`)).status, 401);
  // ID do parâmetro diferente do ID do token
  assert.strictEqual((await fetch(`${base}/ac/config?id=EE-ZZZZZZ&token=${r.token}&v=0`)).status, 401);
});
test('config completa inclui todas as proteções', async () => {
  const r = await register();
  const text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0&players=5&max=100&ack=0`)).text();
  const lines = text.trim().split('\n');
  assert.strictEqual(lines[0], 'EAGLE 1 0 10'); // desligado até o dono confirmar
  assert.strictEqual(lines.filter((l) => l.startsWith('P ')).length, PROTECTIONS.length);
  assert.strictEqual(lines.at(-1), 'END');
  assert.strictEqual(store.getStatus(store.getServer(r.id)).players, 5);
});

test('servidores são independentes', async () => {
  const a = await register();
  const b = await register();
  const sa = store.getServer(a.id);
  store.updateServer(sa, (s) => { s.protections.jetpack.enabled = false; });
  const ta = buildConfigResponse(sa, 0, []);
  const tb = buildConfigResponse(store.getServer(b.id), 0, []);
  assert.match(ta, /\nP 8 0 1 1 0\n/);
  assert.match(tb, /\nP 8 1 1 1 0\n/);
  // token de A não abre B
  assert.strictEqual((await fetch(`${base}/ac/config?id=${b.id}&token=${a.token}&v=0`)).status, 401);
});

test('responde OK quando sincronizado e entrega comandos até o ack', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  const cmd = store.queueCommand(srv, 'unbanip', '1.2.3.4');
  let text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=${srv.version}&ack=0`)).text();
  assert.match(text, /^OK\n/);
  assert.match(text, new RegExp(`C ${cmd.id} unbanip 1\\.2\\.3\\.4`));
  text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=${srv.version}&ack=${cmd.id}`)).text();
  assert.strictEqual(text, 'OK\nEND\n');
});

test('relatório de detecção vai para o servidor certo', async () => {
  const r = await register();
  const body = new URLSearchParams({ id: '3', nome: 'Fulano_Silva', ip: '177.1.2.3', cod: '19', acao: '1', hits: '2', tol: '2', det: '6 tiros sem perder vida' });
  const res = await fetch(`${base}/ac/report?id=${r.id}&token=${r.token}`, { method: 'POST', body });
  assert.strictEqual(res.status, 200);
  const [sid, det] = detections.at(-1);
  assert.strictEqual(sid, r.id);
  assert.strictEqual(det.key, 'godmode');
  assert.strictEqual(store.getHistory(store.getServer(r.id)).at(-1).name, 'Fulano_Silva');
  assert.strictEqual((await fetch(`${base}/ac/report?id=${r.id}&token=x`, { method: 'POST', body })).status, 401);
});

test('novo token: enviado ao servidor e o antigo para de valer quando ele troca', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  const tok = store.rotateToken(srv);
  assert.ok(tok.startsWith(`${r.id}-`));
  // com o token antigo o servidor recebe a linha T com o novo
  const text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=${srv.version}`)).text();
  assert.match(text, new RegExp(`\\nT ${tok}\\n|^OK\\nT ${tok}\\n`));
  // o servidor passa a usar o novo: o antigo deixa de funcionar
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=${tok}&v=0`)).status, 200);
  assert.strictEqual(srv.pendingToken, null);
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0`)).status, 401);
  assert.strictEqual(store.loginWithToken(tok).server.id, r.id);
});
test('donos.json salva o IDF de cada servidor pelo ID do Discord do dono', async () => {
  const r = await register('Drizzie%20RP');
  const srv = store.getServer(r.id);
  srv.owners.push('294929472947294828472');
  store.setDono('294929472947294828472', srv);
  const file = JSON.parse(fs.readFileSync(path.join(dir, 'donos.json'), 'utf8'));
  assert.deepStrictEqual(file['294929472947294828472'], { servidor: 'Drizzie RP', IDF: r.id });
  assert.strictEqual(store.serverOfDono('294929472947294828472').id, r.id);
  assert.strictEqual(store.activeServerFor('294929472947294828472').id, r.id);
  // renomear atualiza o donos.json
  store.updateServer(srv, (s) => { s.name = 'Drizzie City'; }, { bump: false });
  assert.strictEqual(store.getDono('294929472947294828472').servidor, 'Drizzie City');
});

test('anti-cheat só liga depois que o dono confirma', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  assert.strictEqual(srv.activated, false);
  let text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0`)).text();
  assert.match(text, /^EAGLE \d+ 0 /, 'antes da confirmação o global vai desligado');
  store.activate(srv);
  text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0`)).text();
  assert.match(text, /^EAGLE \d+ 1 /);
});

test('permissões e servidor ativo por usuário', async () => {
  const a = store.getServer((await register()).id);
  const b = store.getServer((await register()).id);
  a.owners.push('u1'); a.admins.push('u2'); a.roles.push('r1');
  b.owners.push('u2');
  const perms = new Permissions({ botAdminIds: ['u9'] });
  const it = (id, roles = []) => ({ user: { id }, member: { roles } });
  assert.ok(perms.isOwner(a, it('u1')));
  assert.ok(!perms.isOwner(a, it('u2')));
  assert.ok(perms.isAllowed(a, it('u2')));
  assert.ok(perms.isAllowed(a, it('u3', ['r1'])));
  assert.ok(!perms.isAllowed(a, it('u3')));
  assert.ok(perms.isOwner(a, it('u9')));
  const ofU2 = store.serversOfUser('u2').map((s) => s.id).sort();
  assert.deepStrictEqual(ofU2, [a.id, b.id].sort());
  store.setDono('u2', b);
  assert.strictEqual(store.activeServerFor('u2').id, b.id);
  store.setSelection('u2', a);
  assert.strictEqual(store.activeServerFor('u2').id, a.id);
  store.clearSelection('u2');
  assert.strictEqual(store.activeServerFor('u2').id, b.id);
});

test('dados persistem após reiniciar o bot', async () => {
  const r = await register();
  store.setDono('u7', store.getServer(r.id));
  const again = new Store(dir).load();
  assert.ok(again.authServer(r.id, r.token).server);
  assert.strictEqual(again.serverOfDono('u7').id, r.id);
});

test('validações', () => {
  assert.ok(isValidIPv4Pattern('177.10.*.*'));
  assert.ok(!isValidIPv4Pattern('1.2.3.4; exit'));
  assert.ok(!isValidIPv4Pattern('300.1.1.1'));
  assert.strictEqual(sanitizeGameText('Olá, servidor reinicia às 20h! 100%'), 'Ola,_servidor_reinicia_as_20h!_100');
  assert.ok(isValidNick('Joao_Silva'));
  assert.ok(!isValidNick('a b'));
});

test('proteções: IDs sequenciais, batem com o include Pawn e cabem nos menus', () => {
  const inc = fs.readFileSync(path.join(__dirname, '../../pawn/include/eagleeye.inc'), 'utf8');
  const max = Number(/#define EE_MAX\s+\((\d+)\)/.exec(inc)[1]);
  assert.strictEqual(PROTECTIONS.length, max);
  PROTECTIONS.forEach((p, i) => assert.strictEqual(p.id, i));
  // nomes do Pawn na mesma ordem
  const names = /gEE_Names\[EE_MAX\]\[\] =\s*\{([\s\S]*?)\};/.exec(inc)[1].match(/"[^"]+"/g);
  assert.strictEqual(names.length, max);
  // defaults do Pawn iguais aos do bot
  const defs = /gEE_Defaults\[EE_MAX\]\[E_EE_PROT\] =\s*\{([\s\S]*?)\n\};/.exec(inc)[1]
    .match(/\{(true|false),\s*EE_ACTION_(WARN|KICK|BAN),\s*(\d+),\s*(\d+)\}/g);
  assert.strictEqual(defs.length, max);
  defs.forEach((d, i) => {
    const [, en, act, tol, val] = /\{(true|false),\s*EE_ACTION_(WARN|KICK|BAN),\s*(\d+),\s*(\d+)\}/.exec(d);
    const exp = PROTECTIONS[i].defaults;
    assert.deepStrictEqual([en === 'true', ['WARN', 'KICK', 'BAN'].indexOf(act), +tol, +val], [exp.enabled, exp.action, exp.tolerance, exp.value], PROTECTIONS[i].key);
  });
  for (const c of CATEGORIES) assert.ok(byCategory.get(c.key).length <= 25, c.key);
  assert.strictEqual(CATEGORIES.reduce((n, c) => n + byCategory.get(c.key).length, 0), PROTECTIONS.length);
});

test('comando /ac é válido para o Discord', () => {
  const ac = commands[0];
  assert.strictEqual(ac.name, 'ac');
  assert.ok(ac.options.length <= 25, `${ac.options.length} subcomandos`);
});

test('presets geram configurações válidas para todas as proteções', () => {
  const { PRESETS } = require('../src/presets');
  for (const [key, preset] of Object.entries(PRESETS)) {
    const st = preset.build();
    for (const p of PROTECTIONS) {
      const x = st[p.key];
      assert.ok(x, `${key}/${p.key}`);
      assert.ok([0, 1, 2].includes(x.action) && x.tolerance >= 1, `${key}/${p.key}`);
    }
  }
  assert.ok(Object.values(PRESETS.leve.build()).every((x) => x.action === 0));
  assert.strictEqual(PRESETS.rigoroso.build().jetpack.action, 2);
});

test('exportar e importar configuração (com validação)', async () => {
  const a = store.getServer((await register()).id);
  const b = store.getServer((await register()).id);
  store.updateServer(a, (s) => { s.protections.godmode.value = 9; s.whitelist = ['Staff_Um']; s.banHours = 24; });
  const data = JSON.parse(JSON.stringify(store.exportConfig(a)));
  data.protections.vida.action = 99;      // inválido -> padrão
  data.whitelist.push('nick invalido');   // inválido -> removido
  const v = b.version;
  store.importConfig(b, data);
  assert.strictEqual(b.protections.godmode.value, 9);
  assert.strictEqual(b.protections.vida.action, 1);
  assert.deepStrictEqual(b.whitelist, ['Staff_Um']);
  assert.strictEqual(b.banHours, 24);
  assert.ok(b.version > v);
  assert.throws(() => store.importConfig(b, { foo: 1 }), /não é uma configuração/);
});

test('bans: registrados no ban, desban manual e expiração automática', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  store.updateServer(srv, (s) => { s.banHours = 1; }, { bump: false });
  const body = new URLSearchParams({ id: '1', nome: 'Cheater_X', ip: '10.0.0.9', cod: '8', acao: '2', hits: '1', tol: '1', det: 'jetpack' });
  await fetch(`${base}/ac/report?id=${r.id}&token=${r.token}`, { method: 'POST', body });
  assert.strictEqual(store.activeBans(srv).length, 1);
  const ban = store.activeBans(srv)[0];
  assert.ok(ban.expiresAt > Date.now());
  assert.strictEqual(store.expireBans(srv).length, 0);
  const expired = store.expireBans(srv, Date.now() + 2 * 3600e3);
  assert.strictEqual(expired.length, 1);
  assert.strictEqual(store.activeBans(srv).length, 0);
  assert.ok(srv.commands.some((c) => c.type === 'unbanip' && c.arg === '10.0.0.9'));
  assert.strictEqual(store.playerInfo(srv, 'cheater_x').bans.length, 1);
});

test('lista de jogadores online via /ac/players', async () => {
  const r = await register();
  const body = 'p=0%2CFulano%2C45%2C10%3B3%2CJoao_%5BRP%5D%2C120%2C0%3B';
  const res = await fetch(`${base}/ac/players?id=${r.id}&token=${r.token}`, { method: 'POST', body });
  assert.strictEqual(res.status, 200);
  const snap = store.getPlayers(store.getServer(r.id));
  assert.deepStrictEqual(snap.list, [{ id: 0, name: 'Fulano', ping: 45, score: 10 }, { id: 3, name: 'Joao_[RP]', ping: 120, score: 0 }]);
});

test('estatísticas e auditoria', async () => {
  const srv = store.getServer((await register()).id);
  const now = Date.now();
  for (const [code, name] of [[5, 'A'], [5, 'A'], [19, 'B']]) store.addDetection(srv, { time: now, code, name, action: 0, ip: '', detail: '-' });
  store.addDetection(srv, { time: now - 10 * 24 * 3600e3, code: 3, name: 'Velho', action: 1, ip: '', detail: '-' });
  const st = store.stats(srv, 24 * 3600e3);
  assert.strictEqual(st.total, 3);
  assert.deepStrictEqual(st.topProtections[0], [5, 2]);
  assert.deepStrictEqual(st.topPlayers[0], ['A', 2]);
  assert.strictEqual(store.stats(srv, 30 * 24 * 3600e3).total, 4);
  store.addAudit(srv, 'u1', 'ativar jetpack');
  assert.strictEqual(store.getAudit(srv).at(-1).text, 'ativar jetpack');
});

test('formato do token do include é o mesmo que o bot aceita', () => {
  const inc = fs.readFileSync(path.join(__dirname, '../../pawn/include/eagleeye.inc'), 'utf8');
  assert.match(inc, /#define EE_TOKEN_LEN \(29\)/);
  assert.match(inc, /i == 9 \|\| i == 14 \|\| i == 19 \|\| i == 24/, 'traços nas mesmas posições');
  const { normalizeToken } = require('../src/store');
  const t = genToken();
  assert.strictEqual(t.length, 29);
  assert.strictEqual(normalizeToken(t), t);
  assert.deepStrictEqual([9, 14, 19, 24].map((i) => t[i]), ['-', '-', '-', '-']);
});

test('modo site: página inicial, /health e IP real atrás de proxy', async () => {
  const home = await fetch(`${base}/`);
  assert.strictEqual(home.status, 200);
  assert.match(await home.text(), /EagleEYE API/);
  assert.strictEqual(await (await fetch(`${base}/health`)).text(), 'OK');

  const s2 = startApi({ store, host: '127.0.0.1', port: 0, trustProxy: true, onDetection() {}, logger: quiet });
  await new Promise((r) => s2.once('listening', r));
  const b2 = `http://127.0.0.1:${s2.address().port}`;
  const token = genToken();
  const id = token.slice(0, 9);
  await fetch(`${b2}/ac/config?id=${id}&token=${token}&v=0`, { headers: { 'X-Forwarded-For': '177.10.20.30, 10.0.0.1' } });
  assert.strictEqual(store.getPending(id).address, '177.10.20.30');
  s2.close();
});

test('status do bot usa dados reais de todos os servidores', () => {
  const { collectStats, buildPresenceTexts } = require('../src/presence');
  const st = new Store(fs.mkdtempSync(path.join(os.tmpdir(), 'eagleeye-p-'))).load();
  // sem servidores
  assert.match(buildPresenceTexts(collectStats(st))[0], /Aguardando servidores/);

  const mk = (id, players, online, activated = true) => {
    const pend = genToken();
    const sid = pend.slice(0, 9);
    st.notePending(sid, require('../src/store').hashToken(pend), { name: id, players, maxPlayers: 100, port: 7777, address: '1.1.1.1' });
    const srv = st.loginWithToken(pend).server;
    if (activated) st.activate(srv);
    st.status.set(srv.id, { players, maxPlayers: 100, lastSeen: online ? Date.now() : Date.now() - 3600e3 });
    return srv;
  };
  const a = mk('A', 120, true);
  mk('B', 380, true);
  mk('C', 999, false);            // offline: não conta
  mk('D', 50, true, false);       // ainda não confirmado: não conta
  st.addDetection(a, { time: Date.now(), code: 8, name: 'X', action: 2, ip: '1.2.3.4', detail: '-' });
  st.addDetection(a, { time: Date.now() - 3 * 24 * 3600e3, code: 8, name: 'Y', action: 0, ip: '', detail: '-' });

  const stats = collectStats(st);
  assert.deepStrictEqual(
    { servers: stats.servers, players: stats.players, detections: stats.detections, bans: stats.bans, linked: stats.linked },
    { servers: 2, players: 500, detections: 1, bans: 1, linked: 4 },
  );
  const texts = buildPresenceTexts(stats);
  assert.ok(texts.includes('🦅 Vigiando 2 servidores'));
  assert.ok(texts.includes('👥 Analisando 500 jogadores simultaneamente'));
  assert.ok(texts.includes('🚨 1 ameaça detectada nas últimas 24h'));
  assert.ok(texts.includes('🔨 1 cheater banido nos últimos 30 dias'));
  assert.ok(texts.every((t) => t.length <= 128));
});
