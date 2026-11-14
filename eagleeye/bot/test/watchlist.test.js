'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Watchlist } = require('../src/watchlist');
const { cleanlinessRanking } = require('../src/stats');

const mk = () => new Watchlist(fs.mkdtempSync(path.join(os.tmpdir(), 'wl-')));

test('adiciona, detecta (case-insensitive) e remove', () => {
  const W = mk();
  W.add('dono1', 'Suspeito', { note: 'relato de aimbot', by: 'adm' });
  assert.ok(W.isWatched('dono1', 'suspeito'));
  assert.strictEqual(W.get('dono1', 'SUSPEITO').note, 'relato de aimbot');
  assert.ok(W.remove('dono1', 'suspeito'));
  assert.ok(!W.isWatched('dono1', 'Suspeito'));
});

test('é por dono', () => {
  const W = mk();
  W.add('dono1', 'X');
  assert.ok(!W.isWatched('dono2', 'X'));
});

test('persiste', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'wl-'));
  new Watchlist(dir).add('dono1', 'Fulano', { note: 'n' });
  assert.ok(new Watchlist(dir).isWatched('dono1', 'fulano'));
});

test('ranking servidor mais limpo', () => {
  const r = cleanlinessRanking([
    { id: 'A', name: 'Alpha', score: 90, detections24h: 2, online: true },
    { id: 'B', name: 'Beta', score: 90, detections24h: 30, online: true },
    { id: 'C', name: 'Gama', score: 60, detections24h: 0, online: false },
  ]);
  assert.strictEqual(r[0].id, 'A');   // 90-2 = 88
  assert.strictEqual(r[0].cleanScore, 88);
  assert.strictEqual(r[2].id, 'B');   // 90-30 = 60, empata com C(60) mas B tem mais detecções -> fica atrás
});
