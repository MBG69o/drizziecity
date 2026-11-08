'use strict';

const { test, before, after } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Store } = require('../src/store');
const { startApi } = require('../src/api');
const { buildConfigResponse, isValidIPv4Pattern, sanitizeGameText, isValidNick } = require('../src/config-format');
const { PROTECTIONS } = require('../src/protections');
const { commands } = require('../src/commands');

const KEY = 'chave_de_teste_1234567890';
let server; let store; let base; const detections = [];

before(async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dcac-'));
  store = new Store(dir).load();
  server = startApi({ store, apiKey: KEY, host: '127.0.0.1', port: 0, allowedIps: [], onDetection: (d) => detections.push(d), logger: { log() {}, error() {} } });
  await new Promise((r) => server.once('listening', r));
  base = `http://127.0.0.1:${server.address().port}`;
});
after(() => server.close());

test('rejeita chave inválida', async () => {
  const r = await fetch(`${base}/ac/config?key=errada&v=0`);
  assert.strictEqual(r.status, 401);
});

test('envia configuração completa quando a versão é diferente', async () => {
  const r = await fetch(`${base}/ac/config?key=${KEY}&v=0&players=5&max=100&ack=0`);
  const text = await r.text();
  const lines = text.trim().split('\n');
  assert.strictEqual(lines[0], `DCAC ${store.state.version} 1 10`);
  assert.strictEqual(lines.filter((l) => l.startsWith('P ')).length, PROTECTIONS.length);
  assert.strictEqual(lines.at(-1), 'END');
  assert.strictEqual(store.server.players, 5);
});

test('responde OK quando já sincronizado e entrega comandos até o ack', async () => {
  const cmd = store.queueCommand('unbanip', '1.2.3.4');
  let text = await (await fetch(`${base}/ac/config?key=${KEY}&v=${store.state.version}&ack=0`)).text();
  assert.match(text, /^OK\n/);
  assert.match(text, new RegExp(`C ${cmd.id} unbanip 1\\.2\\.3\\.4`));
  text = await (await fetch(`${base}/ac/config?key=${KEY}&v=${store.state.version}&ack=${cmd.id}`)).text();
  assert.strictEqual(text, 'OK\nEND\n');
});

test('mudança de configuração incrementa a versão e reflete na resposta', () => {
  const v = store.state.version;
  store.update((s) => { s.protections.jetpack.enabled = false; s.whitelist.push('Admin_Teste'); });
  assert.strictEqual(store.state.version, v + 1);
  const text = buildConfigResponse(store.state, v, []);
  assert.match(text, /\nP 8 0 1 1 0\n/);
  assert.match(text, /\nW Admin_Teste\n/);
});

test('recebe relatório de detecção (form-urlencoded)', async () => {
  const body = new URLSearchParams({ id: '3', nome: 'Fulano_Silva', ip: '177.1.2.3', cod: '5', acao: '1', hits: '3', tol: '3', det: '420 km/h' });
  const r = await fetch(`${base}/ac/report?key=${KEY}`, { method: 'POST', body, headers: { 'content-type': 'application/x-www-form-urlencoded' } });
  assert.strictEqual(r.status, 200);
  assert.strictEqual(detections.at(-1).name, 'Fulano_Silva');
  assert.strictEqual(detections.at(-1).key, 'velocidade_veic');
  assert.strictEqual(store.history.at(-1).detail, '420 km/h');
});

test('relatório com código inválido é recusado', async () => {
  const r = await fetch(`${base}/ac/report?key=${KEY}`, { method: 'POST', body: 'cod=99' });
  assert.strictEqual(r.status, 400);
});

test('validações', () => {
  assert.ok(isValidIPv4Pattern('177.10.*.*'));
  assert.ok(!isValidIPv4Pattern('1.2.3.4; exit'));
  assert.ok(!isValidIPv4Pattern('300.1.1.1'));
  assert.strictEqual(sanitizeGameText('Olá, servidor reinicia às 20h! 100%'), 'Ola,_servidor_reinicia_as_20h!_100');
  assert.ok(isValidNick('Joao_Silva'));
  assert.ok(!isValidNick('a b'));
});

test('IDs das proteções são sequenciais e batem com o include Pawn', () => {
  const inc = fs.readFileSync(path.join(__dirname, '../../pawn/include/drizzie_ac.inc'), 'utf8');
  const max = Number(/#define DCAC_MAX\s+\((\d+)\)/.exec(inc)[1]);
  assert.strictEqual(PROTECTIONS.length, max);
  PROTECTIONS.forEach((p, i) => assert.strictEqual(p.id, i));
});

test('comando /ac é válido para o Discord', () => {
  const ac = commands[0];
  assert.strictEqual(ac.name, 'ac');
  assert.ok(ac.options.length <= 25);
});
