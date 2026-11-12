'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { WebAuth, MAX_ATTEMPTS } = require('../src/webauth');

test('fluxo feliz: token -> código -> sessão', () => {
  const W = new WebAuth();
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA', ownerKey: 'dono1', scope: ['EE-AAA', 'EE-BBB'] }, 0);
  assert.match(code, /^\d{6}$/);
  const r = W.verify(challengeId, code, 1000);
  assert.ok(r.ok);
  const sess = W.resolveSession(r.sessionId, 2000);
  assert.deepStrictEqual(sess.scope, ['EE-AAA', 'EE-BBB']);
  assert.strictEqual(sess.ownerKey, 'dono1');
});

test('código errado conta tentativa e bloqueia após o limite', () => {
  const W = new WebAuth();
  const { challengeId } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  for (let i = 1; i < MAX_ATTEMPTS; i++) {
    const r = W.verify(challengeId, '000000', 100);
    assert.strictEqual(r.error, 'code');
    assert.strictEqual(r.attemptsLeft, MAX_ATTEMPTS - i);
  }
  const last = W.verify(challengeId, '000000', 100);
  assert.strictEqual(last.error, 'code');
  assert.strictEqual(last.attemptsLeft, 0);
  // desafio já foi descartado
  assert.strictEqual(W.verify(challengeId, '000000', 100).error, 'expired');
});

test('código expira em 5 minutos', () => {
  const W = new WebAuth();
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  const r = W.verify(challengeId, code, 5 * 60 * 1000 + 1);
  assert.strictEqual(r.error, 'expired');
});

test('código é de uso único', () => {
  const W = new WebAuth();
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  assert.ok(W.verify(challengeId, code, 10).ok);
  assert.strictEqual(W.verify(challengeId, code, 20).error, 'expired');
});

test('sessão expira e é deslizante', () => {
  const W = new WebAuth({ sessionTtl: 1000 });
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  const { sessionId } = W.verify(challengeId, code, 0);
  assert.ok(W.resolveSession(sessionId, 500));      // renova para 1500
  assert.ok(W.resolveSession(sessionId, 1400));     // renova para 2400
  assert.strictEqual(W.resolveSession(sessionId, 3500), null); // passou do prazo
});

test('logout invalida a sessão', () => {
  const W = new WebAuth();
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  const { sessionId } = W.verify(challengeId, code, 0);
  assert.ok(W.destroySession(sessionId));
  assert.strictEqual(W.resolveSession(sessionId, 1), null);
});

test('challengeId inválido', () => {
  const W = new WebAuth();
  assert.strictEqual(W.verify('inexistente', '123456', 0).error, 'expired');
});
