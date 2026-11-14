'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const net = require('net');
const { Guard } = require('../src/guard');
const { Store } = require('../src/store');
const { startApi } = require('../src/api');

const quiet = { log() {}, error() {} };
const ALPHA = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const rnd = (n) => Array.from({ length: n }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');
const genToken = () => `EE-${rnd(6)}-${rnd(4)}-${rnd(4)}-${rnd(4)}-${rnd(4)}`;

test('limite por IP: pico, recarga com o tempo e bloqueio de quem insiste', () => {
  let t = 0;
  const g = new Guard({ ratePerMin: 60, burst: 5, strikesToBlock: 3, blockMs: 60000, now: () => t });
  for (let i = 0; i < 5; i++) assert.ok(g.checkRequest('1.1.1.1').ok);
  assert.ok(!g.checkRequest('1.1.1.1').ok);           // estourou o pico
  assert.ok(g.checkRequest('2.2.2.2').ok);            // outro IP não é afetado
  t += 1000;                                          // 60/min = 1 por segundo
  assert.ok(g.checkRequest('1.1.1.1').ok);
  assert.ok(!g.checkRequest('1.1.1.1').ok);
  assert.ok(!g.checkRequest('1.1.1.1').ok);           // 3ª negada -> bloqueia
  const r = g.checkRequest('1.1.1.1');
  assert.ok(!r.ok && r.retryAfter >= 59);
  t += 61000;                                         // bloqueio expira
  assert.ok(g.checkRequest('1.1.1.1').ok);
});

test('tokens errados repetidos bloqueiam o IP; tokens novos são limitados por IP', () => {
  let t = 0;
  const g = new Guard({ authFailsToBlock: 3, authBlockMs: 1000, newTokensPerHour: 2, now: () => t });
  g.authFailed('9.9.9.9'); g.authFailed('9.9.9.9');
  assert.ok(g.checkRequest('9.9.9.9').ok);
  g.authFailed('9.9.9.9');
  assert.ok(!g.checkRequest('9.9.9.9').ok);
  assert.ok(g.allowNewToken('8.8.8.8') && g.allowNewToken('8.8.8.8'));
  assert.ok(!g.allowNewToken('8.8.8.8'));
  t += 3600001;
  assert.ok(g.allowNewToken('8.8.8.8'));
  g.prune();
  assert.strictEqual(g.blocked.size, 0);
});

async function api(guardOpts) {
  const store = new Store(fs.mkdtempSync(path.join(os.tmpdir(), 'eagleeye-g-'))).load();
  const server = startApi({ store, host: '127.0.0.1', port: 0, guard: new Guard(guardOpts), onDetection() {}, logger: quiet });
  await new Promise((r) => server.once('listening', r));
  return { store, server, base: `http://127.0.0.1:${server.address().port}` };
}

test('API: flood de requisições recebe 429 e o IP é bloqueado', async () => {
  const { server, base } = await api({ ratePerMin: 60, burst: 10, strikesToBlock: 5, blockMs: 60000 });
  const codes = [];
  for (let i = 0; i < 20; i++) codes.push((await fetch(`${base}/health`)).status);
  assert.deepStrictEqual(codes.slice(0, 10), Array(10).fill(200));
  assert.ok(codes.slice(10).every((c) => c === 429));
  const r = await fetch(`${base}/health`);
  assert.strictEqual(r.status, 429);
  assert.ok(Number(r.headers.get('retry-after')) > 30, 'IP bloqueado');
  server.closeAllConnections();
  server.close();
});

test('API: adivinhar tokens bloqueia o IP', async () => {
  const { server, base } = await api({ authFailsToBlock: 5, ratePerMin: 1e6, burst: 1e6 });
  const codes = [];
  for (let i = 0; i < 7; i++) {
    codes.push((await fetch(`${base}/ac/config?id=EE-AAAAAA&token=errado${i}&v=0`)).status);
  }
  assert.deepStrictEqual(codes.slice(0, 5), Array(5).fill(401));
  assert.strictEqual(codes[6], 429);
  server.closeAllConnections();
  server.close();
});

test('API: tokens inventados não enchem a memória', async () => {
  const { server, base, store } = await api({ newTokensPerHour: 3, ratePerMin: 1e6, burst: 1e6 });
  for (let i = 0; i < 20; i++) {
    const tok = genToken();
    const r = await fetch(`${base}/ac/config?id=${tok.slice(0, 9)}&token=${tok}&v=0`);
    assert.strictEqual(await r.text(), 'WAIT\nEND\n'); // a resposta não muda, mas nada é guardado
  }
  assert.strictEqual(store.pending.size, 3);
  server.closeAllConnections();
  server.close();
});

test('API: corpo grande, URL gigante e método estranho são recusados', async () => {
  const { server, base } = await api({ ratePerMin: 1e6, burst: 1e6 });
  assert.strictEqual((await fetch(`${base}/ac/report?id=x&token=x`, { method: 'POST', body: 'x'.repeat(100) })).status, 401);
  const big = await fetch(`${base}/${'a'.repeat(3000)}`);
  assert.strictEqual(big.status, 414);
  assert.strictEqual((await fetch(`${base}/health`, { method: 'DELETE' })).status, 405);
  server.closeAllConnections();
  server.close();
});

test('API: conexão lenta (slowloris) é encerrada pelo servidor', async () => {
  const { server } = await api({ ratePerMin: 1e6, burst: 1e6 });
  server.headersTimeout = 300;
  server.requestTimeout = 300;
  const port = server.address().port;
  const closed = await new Promise((resolve) => {
    const sock = net.connect(port, '127.0.0.1', () => sock.write('GET /health HTTP/1.1\r\nHost: x\r\n')); // nunca termina os cabeçalhos
    const timer = setTimeout(() => { sock.destroy(); resolve(false); }, 5000);
    sock.on('close', () => { clearTimeout(timer); resolve(true); });
    sock.on('data', () => {});
    sock.on('error', () => {});
  });
  assert.ok(closed, 'o servidor deve derrubar a conexão que não termina de enviar os cabeçalhos');
  server.closeAllConnections();
  server.close();
});
