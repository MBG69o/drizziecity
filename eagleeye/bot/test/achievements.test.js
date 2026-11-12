'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { compute } = require('../src/achievements');

const DAY = 24 * 3600 * 1000;
const now = 1_000_000_000_000;

const srv = (over = {}) => ({
  createdAt: now - 40 * DAY,
  bans: Array.from({ length: 60 }, (_, i) => ({ id: i, time: now - DAY })),
  protections: { a: { enabled: true }, b: { enabled: true } },
  ...over,
});

test('conquistas de dias protegido, bans e escudo total', () => {
  const r = compute(srv(), {}, [{ time: now - 2 * DAY }], now);
  const keys = r.earned.map((e) => e.key);
  assert.ok(keys.includes('d30'));        // 40 dias -> maior tier <=40 é 30
  assert.ok(keys.includes('b50'));        // 60 bans -> 50
  assert.ok(keys.includes('fullshield')); // todas ligadas
  assert.strictEqual(r.protectedDays, 40);
});

test('pega sempre o maior tier atingido, não todos', () => {
  const r = compute(srv(), {}, [{ time: now }], now);
  const banKeys = r.earned.filter((e) => e.key.startsWith('b')).map((e) => e.key);
  assert.deepStrictEqual(banKeys, ['b50']); // só o maior, não b10+b50
});

test('dias sem trapaça conta desde a última detecção', () => {
  const r = compute(srv(), {}, [{ time: now - 80 * 3600 * 1000 }], now); // 80h atrás
  assert.ok(r.earned.some((e) => e.key === 'c3')); // >=72h
  assert.strictEqual(r.cleanHours, 80);
});

test('escudo total não aparece se alguma proteção está desligada', () => {
  const r = compute(srv({ protections: { a: { enabled: true }, b: { enabled: false } } }), {}, [], now);
  assert.ok(!r.earned.some((e) => e.key === 'fullshield'));
});

test('próxima meta de dias', () => {
  const r = compute(srv({ createdAt: now - 3 * DAY }), {}, [], now);
  assert.strictEqual(r.next.key, 'd7'); // 3 dias -> próxima é 7
});
