'use strict';

const fs = require('fs');
const path = require('path');

/**
 * LISTA DE PROCURADOS (watchlist).
 *
 * O dono marca nicks "sob vigilância". Quando um deles ENTRA em qualquer
 * servidor do dono (ou é detectado), o EagleEYE dispara um aviso especial.
 * Diferente da blacklist: aqui NÃO bane — serve para pegar o suspeito em
 * flagrante ou acompanhar de perto.
 *
 * Guardado em data/watchlist.json -> { "<ownerId>": { "<nick>": entry } }
 *   entry = { nick, note, by, at }
 */

const MAX_PER_OWNER = 500;

function norm(v) {
  return String(v || '').trim().toLowerCase();
}

class Watchlist {
  constructor(dir) {
    this.file = path.join(dir, 'watchlist.json');
    this.map = new Map(); // ownerId -> { nick -> entry }
    this.load();
  }

  load() {
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      for (const [owner, nicks] of Object.entries(raw)) {
        if (nicks && typeof nicks === 'object') this.map.set(String(owner), nicks);
      }
    } catch (_) { /* vazio */ }
  }

  save() {
    const obj = {};
    for (const [owner, nicks] of this.map) obj[owner] = nicks;
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(obj));
    fs.renameSync(tmp, this.file);
  }

  _nicks(ownerId) {
    const owner = String(ownerId);
    let n = this.map.get(owner);
    if (!n) { n = {}; this.map.set(owner, n); }
    return n;
  }

  add(ownerId, nick, { note = '', by = '' } = {}) {
    const key = norm(nick);
    if (!key) return null;
    const nicks = this._nicks(ownerId);
    if (!nicks[key] && Object.keys(nicks).length >= MAX_PER_OWNER) return null;
    const entry = { nick: String(nick).trim(), note: String(note || ''), by: String(by || ''), at: Date.now() };
    nicks[key] = entry;
    this.save();
    return entry;
  }

  remove(ownerId, nick) {
    const nicks = this.map.get(String(ownerId));
    if (!nicks) return false;
    const key = norm(nick);
    if (!nicks[key]) return false;
    delete nicks[key];
    this.save();
    return true;
  }

  list(ownerId) {
    return Object.values(this.map.get(String(ownerId)) || {});
  }

  isWatched(ownerId, nick) {
    return !!(this.map.get(String(ownerId)) || {})[norm(nick)];
  }

  get(ownerId, nick) {
    return (this.map.get(String(ownerId)) || {})[norm(nick)] || null;
  }
}

module.exports = { Watchlist };
