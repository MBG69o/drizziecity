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

async function register(host = 'Meu%20Servidor') {
  const text = await (await fetch(`${base}/ac/register?host=${host}&port=7777`)).text();
  const [, id, token, key] = text.split('\n')[0].split(' ');
  return { id, token, key, text };
}

before(async () => {
  dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dcac-'));
  store = new Store(dir).load();
  server = startApi({ store, host: '127.0.0.1', port: 0, registerLimit: 1000, onDetection: (s, d) => detections.push([s.id, d]), logger: quiet });
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

test('registro cria ID fixo, token e chave de login', async () => {
  const r = await register();
  assert.match(r.text, /^REG DC-[2-9A-Z]{6} [0-9a-f]{64} [2-9A-Z]{4}-[2-9A-Z]{4}-[2-9A-Z]{4}\nEND\n$/);
  const srv = store.getServer(r.id);
  assert.strictEqual(srv.name, 'Meu Servidor');
  assert.notStrictEqual(srv.tokenHash, r.token, 'o token não pode ser salvo em texto puro');
  assert.ok(fs.existsSync(path.join(dir, 'servers', `${r.id}.json`)));
});

test('config exige token correto e responde 410 para ID desconhecido', async () => {
  const r = await register();
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=errado&v=0`)).status, 401);
  assert.strictEqual((await fetch(`${base}/ac/config?id=DC-ZZZZZZ&token=${r.token}&v=0`)).status, 410);
});

test('config completa inclui chave de login e todas as proteções', async () => {
  const r = await register();
  const text = await (await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0&players=5&max=100&ack=0`)).text();
  const lines = text.trim().split('\n');
  assert.strictEqual(lines[0], 'DCAC 1 1 10');
  assert.strictEqual(lines[1], `K ${r.key}`);
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

test('chave de login: confere, ignora formatação e pode ser trocada', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  assert.ok(store.checkLoginKey(srv, r.key.toLowerCase().replace(/-/g, ' ')));
  assert.ok(!store.checkLoginKey(srv, 'AAAA-BBBB-CCCC'));
  const v = srv.version;
  const nova = store.rotateLoginKey(srv);
  assert.ok(!store.checkLoginKey(srv, r.key));
  assert.ok(store.checkLoginKey(srv, nova));
  assert.strictEqual(srv.version, v + 1, 'servidor recarrega para mostrar a chave nova');
});

test('novo token invalida o antigo', async () => {
  const r = await register();
  const tok = store.rotateToken(store.getServer(r.id));
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=${r.token}&v=0`)).status, 401);
  assert.strictEqual((await fetch(`${base}/ac/config?id=${r.id}&token=${tok}&v=0`)).status, 200);
});

test('vínculo com o Discord e permissões', async () => {
  const r = await register();
  const srv = store.getServer(r.id);
  store.linkGuild('g1', srv);
  assert.strictEqual(store.activeServer('g1').id, r.id);
  srv.owners.push('u1');
  srv.admins.push('u2');
  srv.roles.push('r1');
  const perms = new Permissions({ botAdminIds: ['u9'] });
  const it = (id, roles = []) => ({ user: { id }, member: { roles } });
  assert.ok(perms.isOwner(srv, it('u1')));
  assert.ok(!perms.isOwner(srv, it('u2')));
  assert.ok(perms.isAllowed(srv, it('u2')));
  assert.ok(perms.isAllowed(srv, it('u3', ['r1'])));
  assert.ok(!perms.isAllowed(srv, it('u3')));
  assert.ok(perms.isOwner(srv, it('u9')));
  store.unlinkGuild('g1', srv);
  assert.strictEqual(store.activeServer('g1'), null);
});

test('dados persistem após reiniciar o bot', async () => {
  const r = await register();
  store.linkGuild('g2', store.getServer(r.id));
  const again = new Store(dir).load();
  assert.ok(again.authServer(r.id, r.token).server);
  assert.strictEqual(again.activeServer('g2').id, r.id);
});

test('registro com chave obrigatória e limite por IP', async () => {
  const s2 = startApi({ store, host: '127.0.0.1', port: 0, registerKey: 'segredo123', onDetection() {}, logger: quiet });
  await new Promise((res) => s2.once('listening', res));
  const b2 = `http://127.0.0.1:${s2.address().port}`;
  assert.strictEqual((await fetch(`${b2}/ac/register`)).status, 403);
  const codes = [];
  for (let i = 0; i < 6; i++) codes.push((await fetch(`${b2}/ac/register?rk=segredo123`)).status);
  assert.deepStrictEqual(codes, [200, 200, 200, 200, 200, 429]);
  s2.close();
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
  const inc = fs.readFileSync(path.join(__dirname, '../../pawn/include/drizzie_ac.inc'), 'utf8');
  const max = Number(/#define DCAC_MAX\s+\((\d+)\)/.exec(inc)[1]);
  assert.strictEqual(PROTECTIONS.length, max);
  PROTECTIONS.forEach((p, i) => assert.strictEqual(p.id, i));
  // nomes do Pawn na mesma ordem
  const names = /gDCAC_Names\[DCAC_MAX\]\[\] =\s*\{([\s\S]*?)\};/.exec(inc)[1].match(/"[^"]+"/g);
  assert.strictEqual(names.length, max);
  // defaults do Pawn iguais aos do bot
  const defs = /gDCAC_Defaults\[DCAC_MAX\]\[E_DCAC_PROT\] =\s*\{([\s\S]*?)\n\};/.exec(inc)[1]
    .match(/\{(true|false),\s*DCAC_ACTION_(WARN|KICK|BAN),\s*(\d+),\s*(\d+)\}/g);
  assert.strictEqual(defs.length, max);
  defs.forEach((d, i) => {
    const [, en, act, tol, val] = /\{(true|false),\s*DCAC_ACTION_(WARN|KICK|BAN),\s*(\d+),\s*(\d+)\}/.exec(d);
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
