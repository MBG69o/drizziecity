'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { hourlyBuckets, dailyBuckets, topProtections, topOffenders } = require('../src/stats');

const HOUR = 3600 * 1000;
const DAY = 24 * HOUR;
const now = 1_000_000_000_000;

function det(tAgo, code, action, name) {
  return { time: now - tAgo, code, action, name: name || 'X' };
}

test('hourlyBuckets conta por hora e por ação', () => {
  const h = [det(30 * 60 * 1000, 0, 2), det(31 * 60 * 1000, 1, 1), det(90 * 60 * 1000, 2, 0)];
  const b = hourlyBuckets(h, now, 24);
  assert.strictEqual(b.length, 24);
  // última hora (índice 23): duas detecções (ban + kick)
  assert.strictEqual(b[23].count, 2);
  assert.strictEqual(b[23].ban, 1);
  assert.strictEqual(b[23].kick, 1);
  // 90min atrás cai no penúltimo bucket
  assert.strictEqual(b[22].count, 1);
  assert.strictEqual(b[22].warn, 1);
});

test('hourlyBuckets ignora fora da janela', () => {
  const b = hourlyBuckets([det(48 * HOUR, 0, 1)], now, 24);
  assert.strictEqual(b.reduce((s, x) => s + x.count, 0), 0);
});

test('dailyBuckets agrupa por dia', () => {
  const h = [det(2 * HOUR, 0, 1), det(1 * DAY + 2 * HOUR, 0, 1), det(1 * DAY + 3 * HOUR, 0, 1)];
  const b = dailyBuckets(h, now, 7);
  assert.strictEqual(b.length, 7);
  assert.strictEqual(b[6].count, 1);     // hoje
  assert.strictEqual(b[5].count, 2);     // ontem
});

test('topProtections ordena por frequência', () => {
  const h = [det(0, 33, 2), det(HOUR, 33, 2), det(HOUR, 0, 1)];
  const t = topProtections(h, now, DAY, 6);
  assert.strictEqual(t[0].code, 33);
  assert.strictEqual(t[0].count, 2);
  assert.ok(t[0].name); // resolve o nome da proteção
});

test('topOffenders conta detecções e bans por jogador', () => {
  const h = [det(0, 0, 2, 'Hacker'), det(HOUR, 1, 1, 'Hacker'), det(HOUR, 0, 0, 'Novato')];
  const t = topOffenders(h, now, DAY, 6);
  assert.strictEqual(t[0].name, 'Hacker');
  assert.strictEqual(t[0].count, 2);
  assert.strictEqual(t[0].bans, 1);
});
