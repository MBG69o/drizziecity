'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { WebAuth, MAX_ATTEMPTS, MAX_CHALLENGES, MAX_TOKEN_FAILS } = require('../src/webauth');

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

test('limite de desafios por token na janela (anti-spam de código)', () => {
  const W = new WebAuth();
  for (let i = 0; i < MAX_CHALLENGES; i++) {
    const r = W.startChallenge({ serverId: 'EE-AAA' }, 100 * i);
    assert.ok(r.challengeId, `desafio ${i} deveria passar`);
  }
  // o próximo, ainda na janela, é barrado
  assert.strictEqual(W.startChallenge({ serverId: 'EE-AAA' }, 100 * MAX_CHALLENGES).error, 'rate');
  // passada a janela (10 min), libera de novo
  assert.ok(W.startChallenge({ serverId: 'EE-AAA' }, 10 * 60 * 1000 + 1).challengeId);
});

test('token trava após muitas falhas de código e volta depois da trava', () => {
  const W = new WebAuth();
  // gera falhas suficientes abrindo desafios novos (a cada 5 tentativas o desafio cai)
  let fails = 0;
  let t = 0;
  while (fails < MAX_TOKEN_FAILS) {
    const { challengeId } = W.startChallenge({ serverId: 'EE-LOCK' }, t);
    for (let a = 0; a < MAX_ATTEMPTS && fails < MAX_TOKEN_FAILS; a++) {
      W.verify(challengeId, '000000', t);
      fails++;
    }
    t += 11 * 60 * 1000; // avança além da janela de desafios para não bater no limite 'rate'
  }
  // agora o token deve estar travado: novo desafio retorna 'locked'
  assert.strictEqual(W.startChallenge({ serverId: 'EE-LOCK' }, t).error, 'locked');
  // passados 15 min da trava, libera
  assert.ok(W.startChallenge({ serverId: 'EE-LOCK' }, t + 15 * 60 * 1000 + 1).challengeId);
});

test('sessão respeita o prazo absoluto mesmo renovando', () => {
  const W = new WebAuth({ sessionTtl: 5000, sessionMax: 3000 });
  const { challengeId, code } = W.startChallenge({ serverId: 'EE-AAA' }, 0);
  const { sessionId } = W.verify(challengeId, code, 0);
  assert.ok(W.resolveSession(sessionId, 900));   // ok
  assert.ok(W.resolveSession(sessionId, 1800));  // ok (deslizante renova, mas limitado ao máximo)
  assert.ok(W.resolveSession(sessionId, 2900));  // ainda dentro do máximo absoluto
  assert.strictEqual(W.resolveSession(sessionId, 3001), null); // estourou o absoluto
});

test('revokeOwner derruba todas as sessões do dono', () => {
  const W = new WebAuth();
  const mk = (sid, t) => {
    const { challengeId, code } = W.startChallenge({ serverId: sid, ownerKey: 'dono1' }, t);
    return W.verify(challengeId, code, t).sessionId;
  };
  const s1 = mk('EE-1', 0);
  const s2 = mk('EE-2', 1000);
  // sessão de outro dono não deve ser afetada
  const other = (() => { const { challengeId, code } = W.startChallenge({ serverId: 'EE-9', ownerKey: 'dono2' }, 0); return W.verify(challengeId, code, 0).sessionId; })();
  assert.strictEqual(W.revokeOwner('dono1'), 2);
  assert.strictEqual(W.resolveSession(s1, 2000), null);
  assert.strictEqual(W.resolveSession(s2, 2000), null);
  assert.ok(W.resolveSession(other, 2000));
});
