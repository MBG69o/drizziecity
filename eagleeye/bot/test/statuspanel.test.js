'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { panelData, buildPanelEmbed } = require('../src/statuspanel');

const now = 1_000_000_000_000;

function mkStore() {
  const srvA = { id: 'EE-AAA', name: 'Drizzie City Roleplay', owners: ['dono1'], activated: true, bans: [{ id: 1, time: now - 1000 }] };
  const srvB = { id: 'EE-BBB', name: 'Vice Legacy', owners: [], activated: true, bans: [] };
  const status = new Map([
    ['EE-AAA', { players: 120, maxPlayers: 300, version: '2.8.0', lastSeen: now }],
    ['EE-BBB', { players: 0, maxPlayers: 100, version: '2.3.0', lastSeen: 0 }],
  ]);
  const hist = new Map([
    ['EE-AAA', [{ name: 'Nardyn', code: 33, action: 2, time: now - 2000 }, { name: 'GhostBR', code: 0, action: 1, time: now - 5000 }]],
    ['EE-BBB', []],
  ]);
  return {
    servers: new Map([['EE-AAA', srvA], ['EE-BBB', srvB]]),
    getStatus: (s) => status.get(s.id),
    isServerOnline: (s) => (status.get(s.id).lastSeen || 0) > now - 60000,
    getHistory: (s) => hist.get(s.id) || [],
  };
}

test('panelData agrega servidores, online, desatualizados e detecções', () => {
  const d = panelData(mkStore(), now);
  assert.strictEqual(d.totals.servers, 2);
  assert.strictEqual(d.totals.online, 1);           // só o A está online
  assert.strictEqual(d.totals.players, 120);
  assert.strictEqual(d.totals.outdated, 1);         // B está em 2.3.0 (< 2.8.0)
  assert.strictEqual(d.totals.unlinked, 1);         // B sem dono
  assert.strictEqual(d.totals.det24h, 2);
  // online primeiro
  assert.strictEqual(d.servers[0].name, 'Drizzie City Roleplay');
  // detecções recentes ordenadas, com jogador e servidor
  assert.strictEqual(d.recent[0].player, 'Nardyn');
  assert.strictEqual(d.recent[0].server, 'Drizzie City Roleplay');
});

test('buildPanelEmbed gera o embed no formato pedido', () => {
  const embed = buildPanelEmbed(mkStore(), { now, licensedCount: 1 });
  const json = embed.toJSON();
  assert.match(json.title, /EagleEYE — Status/);
  const recent = json.fields.find((f) => /Últimos jogadores detectados/.test(f.name));
  // formato: `Player` — **Server**
  assert.match(recent.value, /`Nardyn` — \*\*Drizzie City Roleplay\*\*/);
  const desc = json.description;
  assert.match(desc, /desatualizado/);
});

test('sem detecções mostra mensagem limpa', () => {
  const store = mkStore();
  store.getHistory = () => [];
  const embed = buildPanelEmbed(store, { now }).toJSON();
  const recent = embed.fields.find((f) => /Últimos jogadores/.test(f.name));
  assert.match(recent.value, /Nenhuma detecção/);
});
