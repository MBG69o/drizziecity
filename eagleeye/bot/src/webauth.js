'use strict';

const crypto = require('crypto');

/**
 * Autenticação do SITE de gerenciamento (login em 2 etapas).
 *
 *  1) O cliente informa o TOKEN do servidor. Geramos um CÓDIGO de 6 dígitos
 *     com validade de 5 minutos, entregue por um canal confiável (console do
 *     servidor e/ou DM no Discord do dono).
 *  2) O cliente informa o código. Se bater, abrimos uma SESSÃO do site.
 *
 * Nada aqui é gravado em disco: códigos e sessões vivem em memória (somem se o
 * bot reiniciar — o cliente só refaz o login). Tudo é testável injetando `now`.
 */

const CODE_TTL = 5 * 60 * 1000;        // 5 minutos
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 horas
const MAX_ATTEMPTS = 5;
const CHALLENGE_SWEEP = 10 * 60 * 1000;

function sixDigits() {
  return String(crypto.randomInt(0, 1_000_000)).padStart(6, '0');
}
function id(bytes = 18) {
  return crypto.randomBytes(bytes).toString('hex');
}
function safeEq(a, b) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

class WebAuth {
  constructor({ codeTtl = CODE_TTL, sessionTtl = SESSION_TTL } = {}) {
    this.codeTtl = codeTtl;
    this.sessionTtl = sessionTtl;
    this.challenges = new Map(); // challengeId -> { code, serverId, ownerKey, scope, expiresAt, attempts }
    this.sessions = new Map();   // sessionId  -> { ownerKey, scope, name, expiresAt }
  }

  prune(now = Date.now()) {
    for (const [k, c] of this.challenges) if (now > c.expiresAt) this.challenges.delete(k);
    for (const [k, s] of this.sessions) if (now > s.expiresAt) this.sessions.delete(k);
  }

  /**
   * Cria o desafio (etapa 1). scope = lista de serverIds que a sessão poderá
   * gerenciar; ownerKey identifica o cliente.
   * @returns {{challengeId:string, code:string, expiresAt:number}}
   */
  startChallenge({ serverId, ownerKey, scope, name = '' }, now = Date.now()) {
    this.prune(now);
    const code = sixDigits();
    const challengeId = id();
    this.challenges.set(challengeId, {
      code, serverId, ownerKey: ownerKey || serverId, scope: scope && scope.length ? scope : [serverId],
      name, expiresAt: now + this.codeTtl, attempts: 0,
    });
    return { challengeId, code, expiresAt: now + this.codeTtl };
  }

  /**
   * Confere o código (etapa 2). Em caso de acerto devolve a sessão.
   * @returns {{ok:true, sessionId:string, scope:string[], ownerKey:string}|{ok:false, error:'expired'|'blocked'|'code', attemptsLeft?:number}}
   */
  verify(challengeId, code, now = Date.now()) {
    const c = this.challenges.get(challengeId);
    if (!c || now > c.expiresAt) { this.challenges.delete(challengeId); return { ok: false, error: 'expired' }; }
    if (c.attempts >= MAX_ATTEMPTS) { this.challenges.delete(challengeId); return { ok: false, error: 'blocked' }; }
    c.attempts += 1;
    if (!safeEq(c.code, String(code || '').trim())) {
      const attemptsLeft = MAX_ATTEMPTS - c.attempts;
      if (attemptsLeft <= 0) this.challenges.delete(challengeId);
      return { ok: false, error: 'code', attemptsLeft: Math.max(0, attemptsLeft) };
    }
    this.challenges.delete(challengeId);
    const sessionId = id(24);
    this.sessions.set(sessionId, { ownerKey: c.ownerKey, scope: c.scope, name: c.name, expiresAt: now + this.sessionTtl });
    return { ok: true, sessionId, scope: c.scope, ownerKey: c.ownerKey };
  }

  /** Resolve a sessão a partir do token do cabeçalho. Renova o prazo. */
  resolveSession(sessionId, now = Date.now()) {
    if (!sessionId) return null;
    const s = this.sessions.get(sessionId);
    if (!s || now > s.expiresAt) { if (s) this.sessions.delete(sessionId); return null; }
    s.expiresAt = now + this.sessionTtl; // sessão deslizante
    return { ownerKey: s.ownerKey, scope: s.scope, name: s.name };
  }

  destroySession(sessionId) {
    return this.sessions.delete(sessionId);
  }
}

module.exports = { WebAuth, CODE_TTL, SESSION_TTL, MAX_ATTEMPTS };
