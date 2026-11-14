'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Dashboard, buildData, loginPage, dashboardPage, gradeLetter } = require('../src/dashboard');
const { badgeSvg, statusPage, stateOf } = require('../src/badge');

const mkDir = () => fs.mkdtempSync(path.join(os.tmpdir(), 'dash-'));

test('token: emite, resolve e revoga', () => {
  const D = new Dashboard(mkDir());
  const tok = D.issue('dono1');
  assert.match(tok, /^[0-9a-f]{48}$/);
  assert.strictEqual(D.resolve(tok), 'dono1');
  assert.strictEqual(D.resolve('inexistente'), null);
  assert.strictEqual(D.revoke('dono1'), 1);
  assert.strictEqual(D.resolve(tok), null);
});

test('emitir de novo invalida o token anterior', () => {
  const D = new Dashboard(mkDir());
  const t1 = D.issue('dono1');
  const t2 = D.issue('dono1');
  assert.strictEqual(D.resolve(t1), null);
  assert.strictEqual(D.resolve(t2), 'dono1');
});

test('token expira depois do TTL', () => {
  const D = new Dashboard(mkDir());
  const tok = D.issue('dono1', 0);
  assert.strictEqual(D.resolve(tok, 1), 'dono1');
  assert.strictEqual(D.resolve(tok, 40 * 86400000), null); // 40 dias > 30
});

test('persiste tokens em disco', () => {
  const dir = mkDir();
  const tok = new Dashboard(dir).issue('dono1');
  assert.strictEqual(new Dashboard(dir).resolve(tok), 'dono1');
});

test('gradeLetter mapeia nota', () => {
  assert.strictEqual(gradeLetter(95), 'A');
  assert.strictEqual(gradeLetter(75), 'B');
  assert.strictEqual(gradeLetter(55), 'C');
  assert.strictEqual(gradeLetter(35), 'D');
  assert.strictEqual(gradeLetter(10), 'F');
  assert.strictEqual(gradeLetter(null), 'F');
});

test('buildData só traz os servidores do dono', () => {
  const now = 1_000_000_000_000;
  const srvA = { id: 'AAA', name: 'Alpha', owners: ['dono1'], activated: true, global: true, protections: { a: { enabled: true }, b: { enabled: false } } };
  const srvB = { id: 'BBB', name: 'Beta', owners: ['dono2'], activated: true, global: true, protections: { a: { enabled: true } } };
  const store = {
    servers: new Map([['AAA', srvA], ['BBB', srvB]]),
    getStatus: () => ({ players: 5, maxPlayers: 50, version: '2.3.0', lastSeen: now }),
    isServerOnline: () => true,
    getHistory: () => ([{ time: now, name: 'X', code: 0, key: 'dinheiro', action: 1, detail: '-' }]),
  };
  const trust = { worst: () => ([{ name: 'X', score: 40, emoji: '🟠', label: 'Risco', dets: 3, bans: 1 }]) };
  const security = { securityReport: () => ({ grade: 'Boa', score: 75 }) };
  const data = buildData(store, trust, security, 'dono1', now);
  assert.strictEqual(data.servers.length, 1);
  assert.strictEqual(data.servers[0].name, 'Alpha');
  assert.strictEqual(data.servers[0].protActive, 1);
  assert.strictEqual(data.servers[0].protTotal, 2);
  assert.strictEqual(data.servers[0].gradeLetter, 'B');
  assert.strictEqual(data.totals.players, 5);
  assert.strictEqual(data.recent.length, 1);
  assert.strictEqual(data.worst.length, 1);
});

test('páginas HTML renderizam e escapam', () => {
  assert.match(loginPage(''), /EagleEYE/);
  assert.match(dashboardPage('abc123'), /abc123/);
  // token é injetado como string JSON segura
  assert.ok(dashboardPage('a"b').includes(JSON.stringify('a"b')));
});

test('badge SVG reflete o estado', () => {
  assert.strictEqual(stateOf(false, true), 'offline');
  assert.strictEqual(stateOf(true, false), 'desligado');
  assert.strictEqual(stateOf(true, true), 'protegido');
  assert.match(badgeSvg('protegido'), /<svg/);
  assert.ok(badgeSvg('protegido').includes('protegido'));
  assert.ok(badgeSvg('offline').includes('offline'));
});

test('status público não vaza dados sensíveis', () => {
  const html = statusPage({ name: 'Meu Server', id: 'AAA', online: true, acOn: true, grade: 'Boa', gradeLetter: 'B', players: 10, maxPlayers: 100 });
  assert.match(html, /Meu Server/);
  assert.match(html, /Protegido/);
  assert.ok(!/\d+\.\d+\.\d+\.\d+/.test(html)); // nenhum IP
});
