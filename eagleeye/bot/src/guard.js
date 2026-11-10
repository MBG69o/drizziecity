'use strict';

/**
 * Proteção da API contra abuso e DDoS de aplicação (camada HTTP).
 *
 * - Limite de requisições por IP (token bucket) e bloqueio temporário de quem insiste.
 * - Bloqueio de IPs que erram o token muitas vezes (tentativa de adivinhar tokens).
 * - Limite de tokens novos por IP (evita encher a memória com servidores falsos).
 * - Limite de requisições por servidor (relatórios em excesso).
 *
 * Inundações de rede muito grandes (volumétricas) precisam ser barradas antes de
 * chegar ao app, por exemplo na Cloudflare, que fica na frente da Discloud.
 */
const MAX_KEYS = 100000;

class Guard {
  constructor({
    ratePerMin = 120,          // requisições por minuto por IP
    burst = 60,                // pico permitido de uma vez
    strikesToBlock = 20,       // requisições negadas por minuto até bloquear o IP
    blockMs = 10 * 60 * 1000,  // tempo de bloqueio por excesso
    authFailsToBlock = 20,     // tokens errados em 10 min até bloquear
    authBlockMs = 30 * 60 * 1000,
    newTokensPerHour = 5,      // tokens novos (servidores aguardando login) por IP por hora
    serverRatePerMin = 180,    // requisições por minuto por servidor (token)
    now = () => Date.now(),
  } = {}) {
    Object.assign(this, {
      ratePerMin, burst, strikesToBlock, blockMs, authFailsToBlock, authBlockMs, newTokensPerHour, serverRatePerMin, now,
    });
    this.buckets = new Map();
    this.strikes = new Map();
    this.blocked = new Map();
    this.authFails = new Map();
    this.newTokens = new Map();
    this.stats = { allowed: 0, limited: 0, blockedHits: 0, blocks: 0 };
  }

  static capped(map) {
    if (map.size > MAX_KEYS) map.delete(map.keys().next().value);
  }

  /** Token bucket genérico: true se ainda há "fichas" para a chave. */
  take(map, key, perMin, burst) {
    const t = this.now();
    let b = map.get(key);
    if (!b) {
      b = { tokens: burst, last: t };
      map.set(key, b);
      Guard.capped(map);
    }
    b.tokens = Math.min(burst, b.tokens + ((t - b.last) / 60000) * perMin);
    b.last = t;
    if (b.tokens < 1) return false;
    b.tokens -= 1;
    return true;
  }

  /** Conta eventos numa janela de tempo e devolve o total atual. */
  count(map, key, windowMs) {
    const t = this.now();
    let e = map.get(key);
    if (!e || t - e.first > windowMs) {
      e = { first: t, n: 0 };
      map.set(key, e);
      Guard.capped(map);
    }
    e.n += 1;
    return e.n;
  }

  block(ip, ms) {
    this.blocked.set(ip, this.now() + ms);
    Guard.capped(this.blocked);
    this.stats.blocks += 1;
  }

  /** Milissegundos restantes de bloqueio (0 = liberado). */
  blockedFor(ip) {
    const until = this.blocked.get(ip);
    if (!until) return 0;
    const left = until - this.now();
    if (left <= 0) {
      this.blocked.delete(ip);
      return 0;
    }
    return left;
  }

  /**
   * Primeira checagem de toda requisição.
   * @returns {{ ok: boolean, retryAfter?: number }}
   */
  checkRequest(ip) {
    const left = this.blockedFor(ip);
    if (left) {
      this.stats.blockedHits += 1;
      return { ok: false, retryAfter: Math.ceil(left / 1000) };
    }
    if (this.take(this.buckets, ip, this.ratePerMin, this.burst)) {
      this.stats.allowed += 1;
      return { ok: true };
    }
    this.stats.limited += 1;
    if (this.count(this.strikes, ip, 60000) >= this.strikesToBlock) {
      this.block(ip, this.blockMs);
      return { ok: false, retryAfter: Math.ceil(this.blockMs / 1000) };
    }
    return { ok: false, retryAfter: 5 };
  }

  /** Token errado: muitos erros seguidos bloqueiam o IP (tentativa de adivinhar tokens). */
  authFailed(ip) {
    if (this.count(this.authFails, ip, 10 * 60000) >= this.authFailsToBlock) this.block(ip, this.authBlockMs);
  }

  /** Pode registrar mais um servidor "aguardando login" vindo deste IP? */
  allowNewToken(ip) {
    return this.count(this.newTokens, ip, 3600000) <= this.newTokensPerHour;
  }

  /** Limite por servidor (chave = ID do servidor). */
  allowServer(id) {
    return this.take(this.buckets, `srv:${id}`, this.serverRatePerMin, Math.ceil(this.serverRatePerMin / 2));
  }

  /** Remove entradas antigas para a memória não crescer. */
  prune() {
    const t = this.now();
    for (const [k, b] of this.buckets) if (t - b.last > 10 * 60000) this.buckets.delete(k);
    for (const map of [this.strikes, this.authFails, this.newTokens]) {
      for (const [k, e] of map) if (t - e.first > 3600000) map.delete(k);
    }
    for (const [k, until] of this.blocked) if (until <= t) this.blocked.delete(k);
  }
}

module.exports = { Guard };
