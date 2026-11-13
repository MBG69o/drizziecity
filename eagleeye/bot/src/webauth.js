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
 * Endurecimento:
 *  - limite de desafios por token numa janela (anti-spam de código / brute force);
 *  - bloqueio do token após muitas falhas;
 *  - sessão com prazo DESLIZANTE e também um prazo ABSOLUTO (não vive para sempre);
 *  - revogação de todas as sessões de um dono.
 *
 * Nada aqui é gravado em disco: códigos e sessões vivem em memória. Tudo é
 * testável injetando `now`.
 */

const CODE_TTL = 5 * 60 * 1000;         // 5 minutos
const SESSION_TTL = 2 * 60 * 60 * 1000; // 2 horas (deslizante)
const SESSION_MAX = 12 * 60 * 60 * 1000;// 12 horas (absoluto)
const MAX_ATTEMPTS = 5;                 // tentativas de código por desafio
const CHALLENGE_WINDOW = 10 * 60 * 1000;// janela do limite de desafios
const MAX_CHALLENGES = 4;               // desafios por token na janela
const MAX_TOKEN_FAILS = 10;             // falhas de código por token antes de travar
const TOKEN_LOCK = 15 * 60 * 1000;      // trava do token após estourar as falhas

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
  constructor({ codeTtl = CODE_TTL, sessionTtl = SESSION_TTL, sessionMax = SESSION_MAX } = {}) {
    this.codeTtl = codeTtl;
    this.sessionTtl = sessionTtl;
    this.sessionMax = sessionMax;
    this.challenges = new Map(); // challengeId -> { code, serverId, ownerKey, scope, name, expiresAt, attempts }
    this.sessions = new Map();   // sessionId  -> { ownerKey, scope, name, expiresAt, createdAt }
    this.tokenState = new Map(); // serverId   -> { stamps: number[], fails: number, lockedUntil: number }
  }

  prune(now = Date.now()) {
    for (const [k, c] of this.challenges) if (now > c.expiresAt) this.challenges.delete(k);
    for (const [k, s] of this.sessions) if (now > s.expiresAt || now - s.createdAt > this.sessionMax) this.sessions.delete(k);
    for (const [k, t] of this.tokenState) {
      t.stamps = t.stamps.filter((ts) => now - ts < CHALLENGE_WINDOW);
      if (!t.stamps.length && !t.fails && (!t.lockedUntil || now > t.lockedUntil)) this.tokenState.delete(k);
    }
  }

  _tok(serverId) {
    let t = this.tokenState.get(serverId);
    if (!t) { t = { stamps: [], fails: 0, lockedUntil: 0 }; this.tokenState.set(serverId, t); }
    return t;
  }

  /**
   * Cria o desafio (etapa 1).
   * @returns {{challengeId,code,expiresAt}} em caso de sucesso,
   *          ou {error:'locked'|'rate'} quando bloqueado/limitado.
   */
  startChallenge({ serverId, ownerKey, scope, name = '' }, now = Date.now()) {
    this.prune(now);
    const t = this._tok(serverId);
    if (t.lockedUntil && now < t.lockedUntil) return { error: 'locked' };
    t.stamps = t.stamps.filter((ts) => now - ts < CHALLENGE_WINDOW);
    if (t.stamps.length >= MAX_CHALLENGES) return { error: 'rate' };
    t.stamps.push(now);

    const code = sixDigits();
    const challengeId = id();
    this.challenges.set(challengeId, {
      code, serverId, ownerKey: ownerKey || serverId, scope: scope && scope.length ? scope : [serverId],
      name, expiresAt: now + this.codeTtl, attempts: 0,
    });
    return { challengeId, code, expiresAt: now + this.codeTtl };
  }

  /**
   * Confere o código (etapa 2).
   * @returns {{ok:true,sessionId,scope,ownerKey}|{ok:false,error,attemptsLeft?}}
   */
  verify(challengeId, code, now = Date.now()) {
    const c = this.challenges.get(challengeId);
    if (!c || now > c.expiresAt) { if (c) this.challenges.delete(challengeId); return { ok: false, error: 'expired' }; }
    const t = this._tok(c.serverId);
    if (t.lockedUntil && now < t.lockedUntil) { this.challenges.delete(challengeId); return { ok: false, error: 'locked' }; }
    if (c.attempts >= MAX_ATTEMPTS) { this.challenges.delete(challengeId); return { ok: false, error: 'blocked' }; }
    c.attempts += 1;
    if (!safeEq(c.code, String(code || '').trim())) {
      t.fails += 1;
      if (t.fails >= MAX_TOKEN_FAILS) { t.lockedUntil = now + TOKEN_LOCK; t.fails = 0; }
      const attemptsLeft = MAX_ATTEMPTS - c.attempts;
      if (attemptsLeft <= 0) this.challenges.delete(challengeId);
      return { ok: false, error: 'code', attemptsLeft: Math.max(0, attemptsLeft) };
    }
    // acertou: limpa o estado de falhas do token e abre a sessão
    this.challenges.delete(challengeId);
    t.fails = 0; t.lockedUntil = 0;
    const sessionId = id(24);
    this.sessions.set(sessionId, {
      ownerKey: c.ownerKey, scope: c.scope, name: c.name,
      expiresAt: now + this.sessionTtl, createdAt: now,
    });
    return { ok: true, sessionId, scope: c.scope, ownerKey: c.ownerKey };
  }

  /** Resolve a sessão. Renova o prazo deslizante, respeitando o prazo absoluto. */
  resolveSession(sessionId, now = Date.now()) {
    if (!sessionId) return null;
    const s = this.sessions.get(sessionId);
    if (!s) return null;
    if (now > s.expiresAt || now - s.createdAt > this.sessionMax) { this.sessions.delete(sessionId); return null; }
    s.expiresAt = Math.min(now + this.sessionTtl, s.createdAt + this.sessionMax);
    return { ownerKey: s.ownerKey, scope: s.scope, name: s.name };
  }

  destroySession(sessionId) {
    return this.sessions.delete(sessionId);
  }

  /** Revoga TODAS as sessões de um dono (ex.: botão "sair de tudo"). */
  revokeOwner(ownerKey) {
    let n = 0;
    for (const [k, s] of this.sessions) if (s.ownerKey === String(ownerKey)) { this.sessions.delete(k); n++; }
    return n;
  }
}

module.exports = { WebAuth, CODE_TTL, SESSION_TTL, SESSION_MAX, MAX_ATTEMPTS, MAX_CHALLENGES, MAX_TOKEN_FAILS };
