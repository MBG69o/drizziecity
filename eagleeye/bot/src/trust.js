'use strict';

const fs = require('fs');
const path = require('path');

/**
 * TRUST SCORE (reputação de jogador).
 *
 * Cada jogador (por nick, por dono) tem uma nota de confiança de 0 a 100 que
 * cai quando o EagleEYE o detecta e sobe sozinha com o tempo limpo. É uma
 * inteligência comportamental: mostra quem é reincidente e quem só teve um
 * tropeço, mesmo entre servidores diferentes do mesmo dono.
 *
 * Guardado em data/trust.json -> { "<ownerId>": { "<nick>": entry } }
 *   entry = { score, dets, bans, firstSeen, lastDet, lastServer }
 */

const START = 100;
const PENALTY = { 0: 2, 1: 8, 2: 25 }; // aviso / kick / ban
const RECOVER_PER_DAY = 1;             // sobe 1 ponto por dia limpo
const DAY = 86400000;
const MAX_NAMES_PER_OWNER = 5000;

function clamp(n, lo, hi) {
  return n < lo ? lo : (n > hi ? hi : n);
}
function normName(v) {
  return String(v || '').trim().toLowerCase();
}

/** Classificação a partir da nota. */
function classify(score) {
  if (score >= 80) return { key: 'confiavel', label: 'Confiável', emoji: '🟢' };
  if (score >= 50) return { key: 'observacao', label: 'Em observação', emoji: '🟡' };
  if (score >= 20) return { key: 'risco', label: 'Risco', emoji: '🟠' };
  return { key: 'critico', label: 'Crítico', emoji: '🔴' };
}

/** Nota atual já considerando a recuperação pelo tempo limpo. */
function effectiveScore(entry, now = Date.now()) {
  if (!entry) return START;
  const base = typeof entry.score === 'number' ? entry.score : START;
  if (!entry.lastDet) return clamp(base, 0, 100);
  const days = Math.floor((now - entry.lastDet) / DAY);
  return clamp(base + days * RECOVER_PER_DAY, 0, 100);
}

class Trust {
  constructor(dir) {
    this.file = path.join(dir, 'trust.json');
    this.map = new Map(); // ownerId -> { nick -> entry }
    this.load();
  }

  load() {
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      for (const [owner, players] of Object.entries(raw)) {
        if (players && typeof players === 'object') this.map.set(String(owner), players);
      }
    } catch (_) { /* começa vazio */ }
  }

  save() {
    const obj = {};
    for (const [owner, players] of this.map) obj[owner] = players;
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(obj));
    fs.renameSync(tmp, this.file);
  }

  _players(ownerId) {
    const owner = String(ownerId);
    let p = this.map.get(owner);
    if (!p) { p = {}; this.map.set(owner, p); }
    return p;
  }

  /** Registra uma detecção e devolve a nota nova. action: 0 aviso, 1 kick, 2 ban. */
  record(ownerId, name, { action = 0, serverId = '', now = Date.now() } = {}) {
    const n = normName(name);
    if (!n) return START;
    const players = this._players(ownerId);
    let e = players[n];
    if (!e) {
      if (Object.keys(players).length >= MAX_NAMES_PER_OWNER) return START;
      e = { score: START, dets: 0, bans: 0, firstSeen: now, lastDet: 0, lastServer: '', display: String(name) };
      players[n] = e;
    }
    if (!e.display) e.display = String(name);
    // aplica a recuperação acumulada antes de penalizar
    e.score = effectiveScore(e, now);
    e.score = clamp(e.score - (PENALTY[action] ?? 2), 0, 100);
    e.dets += 1;
    if (action === 2) e.bans += 1;
    e.lastDet = now;
    e.lastServer = String(serverId || e.lastServer || '');
    this.save();
    return e.score;
  }

  /** Lê a reputação de um jogador (sem alterar). */
  get(ownerId, name, now = Date.now()) {
    const e = (this.map.get(String(ownerId)) || {})[normName(name)];
    const score = effectiveScore(e, now);
    return {
      name: (e && e.display) || String(name || ''),
      score,
      ...classify(score),
      dets: e ? e.dets : 0,
      bans: e ? e.bans : 0,
      firstSeen: e ? e.firstSeen : 0,
      lastDet: e ? e.lastDet : 0,
      lastServer: e ? e.lastServer : '',
      known: Boolean(e),
    };
  }

  /** Piores reputações do dono (para o painel e para o Discord). */
  worst(ownerId, limit = 10, now = Date.now()) {
    const players = this.map.get(String(ownerId)) || {};
    return Object.keys(players)
      .map((n) => this.get(ownerId, n, now))
      .filter((x) => x.dets > 0)
      .sort((a, b) => a.score - b.score || b.dets - a.dets)
      .slice(0, limit);
  }
}

module.exports = { Trust, classify, effectiveScore, START };
