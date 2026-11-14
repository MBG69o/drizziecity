'use strict';

/**
 * Sistema MODO ESCUDO (lockdown automático anti-ataque).
 *
 * Quando o EagleEYE vê uma rajada de detecções num servidor (muitos jogadores
 * ou muitas detecções em poucos minutos), ele pode endurecer temporariamente
 * as proteções que estão sendo abusadas: ação vira BAN e tolerância vira 1,
 * por alguns minutos, revertendo sozinho depois.
 *
 * Toda a lógica aqui é pura e testável: recebe as detecções recentes e devolve
 * o que endurecer. Quem aplica/reverte (fila de comandos, config) é o chamador.
 */

const BAN = 2;

/**
 * Há ataque em curso?
 *  - uniquePlayers: Nº de jogadores distintos punidos na janela
 *  - total: Nº total de detecções na janela
 */
function isUnderAttack(detections, { minUnique = 4, minTotal = 12 } = {}) {
  const players = new Set();
  for (const d of detections) if (d && d.name) players.add(String(d.name).toLowerCase());
  return players.size >= minUnique || detections.length >= minTotal;
}

/**
 * Quais proteções endurecer. Só entra uma proteção que apareça >= minHits vezes.
 * Devolve um Map code -> { action: BAN, tolerance: 1 }.
 */
function computeHardening(detections, { minHits = 3 } = {}) {
  const count = new Map();
  for (const d of detections) {
    if (!d || typeof d.code !== 'number') continue;
    count.set(d.code, (count.get(d.code) || 0) + 1);
  }
  const out = new Map();
  for (const [code, n] of count) {
    if (n >= minHits) out.set(code, { action: BAN, tolerance: 1 });
  }
  return out;
}

/**
 * Estado do modo escudo de um servidor. Puro: o chamador guarda e persiste.
 */
class Lockdown {
  constructor({ durationMs = 10 * 60 * 1000 } = {}) {
    this.durationMs = durationMs;
    this.active = false;
    this.until = 0;
    this.hardened = new Map(); // code -> {action,tolerance}
    this.savedProt = new Map(); // code -> {enabled,action,tolerance,value} original
  }

  /**
   * Avalia as detecções recentes. Se for ataque, liga/renova o escudo e
   * devolve { changed, entered, codes } com as proteções a endurecer agora.
   */
  evaluate(detections, now = Date.now(), opts = {}) {
    if (!isUnderAttack(detections, opts)) return { changed: false, entered: false, codes: [] };
    const hard = computeHardening(detections, opts);
    if (!hard.size) return { changed: false, entered: false, codes: [] };
    const entered = !this.active;
    this.active = true;
    this.until = now + this.durationMs;
    const added = [];
    for (const [code, cfg] of hard) {
      if (!this.hardened.has(code)) added.push(code);
      this.hardened.set(code, cfg);
    }
    return { changed: entered || added.length > 0, entered, codes: added };
  }

  /** Acabou o tempo? Devolve true se o escudo deve ser revertido agora. */
  expired(now = Date.now()) {
    return this.active && now >= this.until;
  }

  /** Reverte o escudo. O chamador restaura a config original. */
  clear() {
    this.active = false;
    this.until = 0;
    const codes = [...this.hardened.keys()];
    this.hardened.clear();
    return codes;
  }
}

module.exports = { Lockdown, isUnderAttack, computeHardening };
