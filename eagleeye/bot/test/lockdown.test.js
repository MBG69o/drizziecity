'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { Lockdown, isUnderAttack, computeHardening } = require('../src/lockdown');

const det = (name, code) => ({ name, code, action: 1 });

test('isUnderAttack: por jogadores distintos ou por volume', () => {
  const many = [det('a', 0), det('b', 0), det('c', 0), det('d', 0)];
  assert.ok(isUnderAttack(many, { minUnique: 4, minTotal: 99 }));
  const volume = Array.from({ length: 12 }, () => det('a', 0));
  assert.ok(isUnderAttack(volume, { minUnique: 99, minTotal: 12 }));
  assert.ok(!isUnderAttack([det('a', 0), det('a', 0)], { minUnique: 4, minTotal: 12 }));
});

test('computeHardening: só endurece proteção abusada o bastante', () => {
  const list = [det('a', 5), det('b', 5), det('c', 5), det('x', 9)];
  const hard = computeHardening(list, { minHits: 3 });
  assert.ok(hard.has(5));
  assert.ok(!hard.has(9));            // só 1 ocorrência
  assert.strictEqual(hard.get(5).action, 2);   // BAN
  assert.strictEqual(hard.get(5).tolerance, 1);
});

test('Lockdown: entra, renova e expira', () => {
  const L = new Lockdown({ durationMs: 1000 });
  const attack = [det('a', 5), det('b', 5), det('c', 5), det('d', 5)];
  const r1 = L.evaluate(attack, 0, { minUnique: 4, minHits: 3 });
  assert.ok(r1.entered && r1.changed);
  assert.deepStrictEqual(r1.codes, [5]);
  assert.ok(L.active);

  // nova avaliação dentro do tempo: não "entra" de novo, mas renova o prazo
  const r2 = L.evaluate(attack, 500, { minUnique: 4, minHits: 3 });
  assert.ok(!r2.entered);

  // renovado em t=500 => expira em 1500
  assert.ok(!L.expired(1499));
  assert.ok(L.expired(1501));
  assert.deepStrictEqual(L.clear(), [5]);
  assert.ok(!L.active);
});

test('Lockdown: sem ataque não liga', () => {
  const L = new Lockdown();
  const r = L.evaluate([det('a', 5), det('a', 5)], 0, { minUnique: 4, minTotal: 12 });
  assert.ok(!r.changed && !L.active);
});
