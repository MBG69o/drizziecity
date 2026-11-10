'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Store, hashToken } = require('../src/store');
const { createNotifier } = require('../src/notifier');
const { byKey } = require('../src/protections');

const ALPHA = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
const rnd = (n) => Array.from({ length: n }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');
const genToken = () => `EE-${rnd(6)}-${rnd(4)}-${rnd(4)}-${rnd(4)}-${rnd(4)}`;
const flush = async () => { for (let i = 0; i < 20; i++) await new Promise((r) => setImmediate(r)); };

function setup({ owners = ['u1'], noDm = [] } = {}) {
  let t = Date.now();
  const store = new Store(fs.mkdtempSync(path.join(os.tmpdir(), 'eagleeye-n-'))).load();
  const tok = genToken();
  store.notePending(tok.slice(0, 9), hashToken(tok), { name: 'Drizzie RP', players: 10, maxPlayers: 100, port: 7777, address: '1.1.1.1' });
  const server = store.loginWithToken(tok).server;
  store.updateServer(server, (s) => { s.owners = [...owners]; s.logChannels = { G: 'C1' }; }, { bump: false });
  const dms = []; const chan = [];
  const client = {
    isReady: () => true,
    users: { fetch: async (id) => ({ send: async (p) => { if (noDm.includes(id)) throw new Error('DM fechada'); dms.push({ id, p }); } }) },
    channels: { fetch: async (id) => ({ isTextBased: () => true, send: async (p) => { chan.push({ id, p }); } }) },
  };
  const notifier = createNotifier({ store, client, logger: { log() {}, error() {} }, now: () => t });
  const online = () => store.status.set(server.id, { players: 10, maxPlayers: 100, lastSeen: Date.now() });
  return { store, server, notifier, dms, chan, advance: (ms) => { t += ms; }, online };
}
const text = (m) => m.p.embeds[0].toJSON().description;

test('rajada de detecções: avisa que o ataque foi contido (e não repete em 30 min)', async () => {
  const { server, notifier, dms, chan, advance } = setup();
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: byKey.get('velocidade_pe').id, action: 1, name: `P${i}` });
  await flush();
  assert.strictEqual(dms.length, 1);
  assert.match(text(dms[0]), /^Olá, <@u1>! Seu servidor \*\*Drizzie RP\*\* teve um suposto ataque detectado: \*\*15 detecções/);
  assert.match(text(dms[0]), /Conseguimos conter o ataque: \*\*15\*\* jogador/);
  assert.strictEqual(chan.length, 1, 'modo padrão: DM + canal');
  advance(60000);
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: 4, action: 1, name: 'X' });
  await flush();
  assert.strictEqual(dms.length, 1, 'cooldown de 30 min');
});

test('rajada só com avisos: não diz que conteve, sugere mudar para kick', async () => {
  const { server, notifier, dms } = setup();
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: 4, action: 0, name: 'P' });
  await flush();
  assert.doesNotMatch(text(dms[0]), /Conseguimos conter/);
  assert.match(text(dms[0]), /modo \*\*aviso\*\*/);
});

test('RCON brute force e flood de bots geram aviso de ataque contido', async () => {
  const a = setup();
  a.notifier.onDetection(a.server, { code: byKey.get('rcon').id, action: 1, name: 'x' });
  await flush();
  assert.match(text(a.dms[0]), /bloqueado por 1 hora/);

  const b = setup();
  for (let i = 0; i < 2; i++) b.notifier.onDetection(b.server, { code: byKey.get('reconexao').id, action: 1, name: 'bot' });
  await flush();
  assert.strictEqual(b.dms.length, 0, 'poucos eventos ainda não é ataque');
  b.notifier.onDetection(b.server, { code: byKey.get('reconexao').id, action: 1, name: 'bot' });
  await flush();
  assert.match(text(b.dms[0]), /suposto ataque detectado \(\*\*Flood de reconexão\*\*\)/);
  assert.match(text(b.dms[0]), /Conseguimos conter/);
});

test('tokens errados repetidos para o ID do servidor avisam o dono', async () => {
  const { server, notifier, dms } = setup();
  for (let i = 0; i < 9; i++) notifier.onAuthFail(server, '6.6.6.6');
  await flush();
  assert.strictEqual(dms.length, 0);
  notifier.onAuthFail(server, '6.6.6.6');
  await flush();
  assert.match(text(dms[0]), /10 tentativas/);
});

test('servidor desprotegido: só avisa depois de 30 min, com botão para ativar', async () => {
  const { server, store, notifier, dms, advance, online } = setup();
  online();
  notifier.checkProtection(); await flush();
  assert.strictEqual(dms.length, 0, 'acabou de fazer login: ainda não avisa');
  advance(31 * 60000); online();
  notifier.checkProtection(); await flush();
  assert.match(text(dms[0]), /se encontra \*\*desprotegido\*\* atualmente: o anti-cheat ainda não foi ativado\. Ative as proteções!/);
  assert.strictEqual(dms[0].p.components[0].toJSON().components[0].custom_id, `ee:secon:${server.id}:0`);
  // ativado mas desligado
  store.activate(server);
  store.updateServer(server, (s) => { s.global = false; });
  advance(31 * 60000); online(); notifier.checkProtection();
  advance(31 * 60000); online(); notifier.checkProtection(); await flush();
  assert.match(text(dms.at(-1)), /está \*\*desligado\*\*/);
});

test('DM fechada vai para o canal com menção; modo desligado não envia nada', async () => {
  const a = setup({ noDm: ['u1'] });
  for (let i = 0; i < 15; i++) a.notifier.onDetection(a.server, { code: 4, action: 1, name: 'P' });
  await flush();
  assert.strictEqual(a.dms.length, 0);
  assert.strictEqual(a.chan.length, 1);
  assert.strictEqual(a.chan[0].p.content, '<@u1>');

  const b = setup();
  b.store.updateServer(b.server, (s) => { s.notifyMode = 'desligado'; }, { bump: false });
  for (let i = 0; i < 15; i++) b.notifier.onDetection(b.server, { code: 4, action: 1, name: 'P' });
  await flush();
  assert.strictEqual(b.dms.length + b.chan.length, 0);
});

test('novo login avisa só os outros donos, sem apagar nenhum dono', async () => {
  const { server, store, notifier, dms } = setup({ owners: ['u1', 'u2'] });
  notifier.onLogin(server, 'u2', false);
  await flush();
  assert.deepStrictEqual(dms.map((d) => d.id), ['u1']);
  assert.match(text(dms[0]), /<@u2> acabou de fazer login/);
  const disk = JSON.parse(fs.readFileSync(path.join(store.serversDir, `${server.id}.json`), 'utf8'));
  assert.deepStrictEqual(disk.owners, ['u1', 'u2']);
  notifier.onTokenRotated(server, 'u1');
  await flush();
  assert.strictEqual(dms.at(-1).id, 'u2');
});
