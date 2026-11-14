'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { isValidWebhook, detectionPayload, shouldSend, send } = require('../src/webhooks');

test('aceita só webhooks do Discord', () => {
  assert.ok(isValidWebhook('https://discord.com/api/webhooks/123456789012345678/abcdefghijklmnopqrstuvwxyz0123456789'));
  assert.ok(isValidWebhook('https://discordapp.com/api/v10/webhooks/123456789012/abcdefghijklmnopqrstuvwxyz'));
  assert.ok(isValidWebhook('https://ptb.discord.com/api/webhooks/123456789012/abcdefghijklmnopqrstuvwxyz'));
  assert.ok(!isValidWebhook('https://evil.com/api/webhooks/1/abcdefghijklmnopqrstuv'));   // host errado
  assert.ok(!isValidWebhook('http://discord.com/api/webhooks/1/abcdefghijklmnopqrstuv')); // sem https
  assert.ok(!isValidWebhook('https://discord.com/api/webhooks/1/curto'));                 // token curto
  assert.ok(!isValidWebhook('não é url'));
});

test('monta payload de detecção do Discord', () => {
  const p = detectionPayload({ name: 'Meu RP', id: 'EE-AAA' }, { name: 'Hacker', playerId: 3, action: 2, code: 33, detail: '97%', time: 0 });
  assert.strictEqual(p.embeds.length, 1);
  assert.match(p.embeds[0].title, /Aimbot/);
  assert.match(p.embeds[0].description, /Hacker/);
  assert.strictEqual(p.embeds[0].color, 0xe74c3c); // ban = vermelho
  assert.ok(p.embeds[0].fields.some((f) => f.value === 'Meu RP'));
});

test('shouldSend respeita o mínimo de ação', () => {
  const wh = 'https://discord.com/api/webhooks/123456789012/abcdefghijklmnopqrstuvwxyz0123';
  const srv = { webhookUrl: wh, webhookMinAction: 1 };
  assert.ok(shouldSend(srv, { action: 2 }));  // ban
  assert.ok(shouldSend(srv, { action: 1 }));  // kick
  assert.ok(!shouldSend(srv, { action: 0 })); // aviso abaixo do mínimo
  assert.ok(!shouldSend({ webhookUrl: '' }, { action: 2 })); // sem webhook
});

test('send usa fetch injetado e não lança em erro', async () => {
  const wh = 'https://discord.com/api/webhooks/123456789012/abcdefghijklmnopqrstuvwxyz0123';
  let called = null;
  const okFetch = async (url, opts) => { called = { url, opts }; return { ok: true, status: 204 }; };
  const r = await send(wh, { a: 1 }, { fetchImpl: okFetch });
  assert.ok(r.ok && r.status === 204);
  assert.strictEqual(called.url, wh);
  assert.strictEqual(called.opts.method, 'POST');

  const r2 = await send(wh, {}, { fetchImpl: async () => { throw new Error('rede'); } });
  assert.ok(!r2.ok);

  const r3 = await send('https://evil.com/x', {}, { fetchImpl: okFetch });
  assert.ok(!r3.ok); // url inválida nem chega a chamar
});
