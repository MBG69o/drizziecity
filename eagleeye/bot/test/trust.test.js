'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Trust, classify, effectiveScore } = require('../src/trust');

const mk = () => new Trust(fs.mkdtempSync(path.join(os.tmpdir(), 'trust-')));

test('jogador novo é confiável (100)', () => {
  const T = mk();
  const r = T.get('dono1', 'Fulano');
  assert.strictEqual(r.score, 100);
  assert.strictEqual(r.key, 'confiavel');
  assert.strictEqual(r.known, false);
});

test('detecções derrubam a nota conforme a ação', () => {
  const T = mk();
  const now = 1_000_000_000_000;
  T.record('dono1', 'Hacker', { action: 2, now });  // ban -25
  T.record('dono1', 'Hacker', { action: 1, now });  // kick -8
  const r = T.get('dono1', 'Hacker', now);
  assert.strictEqual(r.score, 100 - 25 - 8);
  assert.strictEqual(r.dets, 2);
  assert.strictEqual(r.bans, 1);
});

test('recupera 1 ponto por dia limpo', () => {
  const T = mk();
  const now = 1_000_000_000_000;
  T.record('dono1', 'Ze', { action: 2, now });       // 75
  const tenDays = now + 10 * 86400000;
  assert.strictEqual(T.get('dono1', 'Ze', tenDays).score, 85);
});

test('classificação por faixa', () => {
  assert.strictEqual(classify(95).key, 'confiavel');
  assert.strictEqual(classify(60).key, 'observacao');
  assert.strictEqual(classify(30).key, 'risco');
  assert.strictEqual(classify(5).key, 'critico');
});

test('worst lista os piores do dono', () => {
  const T = mk();
  const now = 1_000_000_000_000;
  T.record('dono1', 'A', { action: 0, now });        // -2 => 98
  T.record('dono1', 'B', { action: 2, now });        // -25 => 75
  T.record('dono1', 'B', { action: 2, now });        // -25 => 50
  const w = T.worst('dono1', 10, now);
  assert.strictEqual(w[0].name, 'B');
  assert.strictEqual(w.length, 2);
});

test('nota não passa de 0 nem de 100', () => {
  const T = mk();
  const now = 1_000_000_000_000;
  for (let i = 0; i < 10; i++) T.record('dono1', 'X', { action: 2, now });
  assert.strictEqual(T.get('dono1', 'X', now).score, 0);
  assert.ok(effectiveScore({ score: 0, lastDet: now }, now + 999 * 86400000) <= 100);
});

test('persiste e recarrega', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'trust-'));
  const now = 1_000_000_000_000;
  new Trust(dir).record('dono1', 'Persistente', { action: 1, now });
  const T2 = new Trust(dir);
  assert.strictEqual(T2.get('dono1', 'Persistente', now).score, 92);
});

test('é por dono (não mistura clientes)', () => {
  const T = mk();
  const now = 1_000_000_000_000;
  T.record('dono1', 'Mesmo', { action: 2, now });
  assert.strictEqual(T.get('dono2', 'Mesmo', now).score, 100);
});
