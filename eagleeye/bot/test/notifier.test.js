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

function setup({ owners = ['u1'], noDm = [], alertChannelId = null } = {}) {
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
  const notifier = createNotifier({ store, client, logger: { log() {}, error() {} }, now: () => t, alertChannelId });
  const online = () => store.status.set(server.id, { players: 10, maxPlayers: 100, lastSeen: Date.now(), configVersion: server.version });
  return { store, server, notifier, dms, chan, advance: (ms) => { t += ms; }, online };
}
const text = (m) => m.p.embeds[0].toJSON().description;
const title = (m) => m.p.embeds[0].toJSON().title;
const only = (list, t) => list.filter((m) => title(m) === t);

test('rajada de detecções: avisa que o ataque foi contido (e não repete em 30 min)', async () => {
  const { server, notifier, dms, chan, advance } = setup();
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: byKey.get('velocidade_pe').id, action: 1, name: `P${i}` });
  await flush();
  const attack = only(dms, '🚨 Suposto ataque detectado');
  assert.strictEqual(attack.length, 1);
  assert.match(text(attack[0]), /^Olá, <@u1>! Seu servidor \*\*Drizzie RP\*\* teve um suposto ataque detectado: \*\*15 detecções/);
  assert.match(text(attack[0]), /Conseguimos conter o ataque: \*\*15\*\* jogador/);
  assert.strictEqual(only(chan, '🚨 Suposto ataque detectado').length, 1, 'modo padrão: DM + canal');
  // 15 jogadores diferentes punidos pela mesma proteção: também avisa possível falso positivo
  assert.strictEqual(only(dms, '🤔 Possível falso positivo').length, 1);
  advance(60000);
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: 4, action: 1, name: 'X' });
  await flush();
  assert.strictEqual(only(dms, '🚨 Suposto ataque detectado').length, 1, 'cooldown de 30 min');
});

test('rajada só com avisos: não diz que conteve, sugere mudar para kick', async () => {
  const { server, notifier, dms } = setup();
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: 4, action: 0, name: 'P' });
  await flush();
  const m = only(dms, '🚨 Suposto ataque detectado')[0];
  assert.doesNotMatch(text(m), /Conseguimos conter/);
  assert.match(text(m), /modo \*\*aviso\*\*/);
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
  const c = only(a.chan, '🚨 Suposto ataque detectado');
  assert.strictEqual(c.length, 1);
  assert.strictEqual(c[0].p.content, '<@u1>');

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

test('IP do servidor mudou: avisa; trocando sem parar (token vazado): alerta de clonagem com botão', async () => {
  const { server, notifier, dms } = setup();
  notifier.onStatus(server, { address: '1.1.1.1' });
  notifier.onStatus(server, { address: '2.2.2.2' });
  await flush();
  assert.strictEqual(title(dms[0]), '🌐 Servidor conectado de outro IP');
  notifier.onStatus(server, { address: '1.1.1.1' });
  notifier.onStatus(server, { address: '2.2.2.2' });
  await flush();
  const clone = only(dms, '🚨 Token sendo usado em dois lugares');
  assert.strictEqual(clone.length, 1);
  assert.strictEqual(clone[0].p.components[0].toJSON().components[0].custom_id, `ee:secrot:${server.id}:0`);
});

test('include desatualizado e senha do RCON fraca', async () => {
  const { server, store, notifier, dms } = setup();
  store.activate(server);
  notifier.onStatus(server, { address: '1.1.1.1', version: '2.0.0', rconWeak: true });
  await flush();
  assert.ok(only(dms, '⬆️ Include desatualizado').length === 1);
  assert.match(text(only(dms, '🔑 Senha do RCON fraca')[0]), /rcon_password/);
  notifier.onStatus(server, { address: '1.1.1.1', version: require('../src/security').LATEST_INCLUDE, rconWeak: false });
  await flush();
  assert.strictEqual(dms.length, 2, 'versão atual e senha forte não geram aviso');
});

test('evasão de ban: IP banido voltou com outro nick (avisa o dono e os admins no jogo)', async () => {
  const { server, store, notifier, dms } = setup();
  store.addDetection(server, { time: Date.now(), code: 8, name: 'Cheater_1', action: 2, ip: '5.5.5.5', detail: '-' });
  notifier.onDetection(server, { code: 4, action: 0, name: 'Novo_Nick', ip: '5.5.5.5' });
  await flush();
  assert.match(text(only(dms, '🕵️ Possível evasão de ban')[0]), /Novo\\_Nick.*Cheater\\_1/s);
  assert.ok(server.commands.some((c) => c.type === 'adm' && /evasao_de_ban/.test(c.arg)));
});

test('reincidente, bans em massa e mudança feita por outro dono', async () => {
  const { server, store, notifier, dms } = setup({ owners: ['u1', 'u2'] });
  for (let i = 0; i < 3; i++) {
    const d = { time: Date.now(), code: 4, name: 'Repetido', action: 1, ip: '', detail: '-' };
    store.addDetection(server, d);
    notifier.onDetection(server, d);
  }
  await flush();
  assert.match(text(only(dms, '🔁 Jogador reincidente')[0]), /Repetido.*3 vezes/s);
  for (let i = 0; i < 5; i++) notifier.onDetection(server, { code: 8, action: 2, name: `B${i}`, ip: `9.9.9.${i}` });
  await flush();
  assert.ok(only(dms, '🔨 Muitos bans em pouco tempo').length >= 1);
  const before = dms.length;
  notifier.onConfigChange(server, 'u2', 'desligou o anti-cheat inteiro');
  await flush();
  assert.deepStrictEqual(dms.slice(before).map((d) => d.id), ['u1']);
});

test('servidor fora do ar, proteções essenciais desligadas e sem canal de logs', async () => {
  const { server, store, notifier, dms, advance, online } = setup();
  store.activate(server);
  store.updateServer(server, (s) => { s.protections.dinheiro.enabled = false; s.protections.crasher.enabled = false; s.logChannels = {}; });
  online(); notifier.checkProtection();
  advance(31 * 60000); online(); notifier.checkProtection(); await flush();
  assert.match(text(only(dms, '⚠️ Proteções essenciais desligadas')[0]), /Dinheiro.*Crasher/s);
  assert.strictEqual(only(dms, '📭 Sem canal de logs').length, 1);
  // cai e fica 11 min sem contato
  store.status.set(server.id, { ...store.getStatus(server), lastSeen: Date.now() - 11 * 60000 });
  notifier.checkProtection(); await flush();
  assert.strictEqual(only(dms, '🔴 Servidor fora do ar').length, 1);
});

test('verificação de segurança: nota e itens', () => {
  const { securityReport } = require('../src/security');
  const { server, store } = setup();
  let r = securityReport(store, server);
  assert.ok(r.score < 50 && r.grade === 'Crítica', 'servidor não confirmado');
  store.activate(server);
  store.status.set(server.id, { lastSeen: Date.now(), configVersion: server.version, version: require('../src/security').LATEST_INCLUDE, rconWeak: false });
  for (const k of require('../src/security').CRITICAL) server.protections[k] = { ...server.protections[k], enabled: true, action: 1 };
  r = securityReport(store, server);
  assert.strictEqual(r.score, 100);
  assert.strictEqual(r.grade, 'Excelente');
});

test('versão mais recente do bot é a mesma do include', () => {
  const inc = fs.readFileSync(path.join(__dirname, '../../pawn/include/eagleeye.inc'), 'utf8');
  assert.strictEqual(/#define EE_VERSION "([^"]+)"/.exec(inc)[1], require('../src/security').LATEST_INCLUDE);
});

test('central de alertas recebe cópia de tudo (sem marcar ninguém), mesmo com o dono desligado', async () => {
  const { server, store, notifier, chan } = setup({ alertChannelId: 'ALERTAS' });
  for (let i = 0; i < 15; i++) notifier.onDetection(server, { code: 4, action: 1, name: 'P' });
  await flush();
  const central = chan.filter((m) => m.id === 'ALERTAS');
  assert.strictEqual(central.filter((m) => title(m) === '🚨 Suposto ataque detectado').length, 1);
  const c = central.find((m) => title(m) === '🚨 Suposto ataque detectado');
  assert.deepStrictEqual(c.p.allowedMentions, { parse: [] });
  assert.ok(c.p.embeds[0].toJSON().fields.some((f) => f.name === 'Servidor' && f.value.includes(server.id)));

  store.updateServer(server, (s) => { s.notifyMode = 'desligado'; }, { bump: false });
  const before = chan.length;
  notifier.onAuthFail(server, '6.6.6.6');
  for (let i = 0; i < 9; i++) notifier.onAuthFail(server, '6.6.6.6');
  await flush();
  const novos = chan.slice(before);
  assert.deepStrictEqual(novos.map((m) => m.id), ['ALERTAS'], 'dono desligado: só a central recebe');
});
