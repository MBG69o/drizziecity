'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Sistema de BLACKLIST GLOBAL (banimento cruzado).
 *
 * Cada dono tem uma lista compartilhada entre TODOS os servidores dele. Quando
 * um jogador entra na blacklist (por IP ou por nick), o EagleEYE pode:
 *   - banir na hora em todos os servidores online do dono;
 *   - bloquear se ele tentar entrar em qualquer outro servidor do dono.
 *
 * Não é uma lista entre clientes diferentes: cada dono só vê e usa a própria.
 * Guardado em data/blacklist.json  ->  { "<ownerId>": [ entry, ... ] }
 *   entry = { kind: 'ip'|'nome', value, name, reason, by, at }
 */

const KINDS = ['ip', 'nome'];
const MAX_PER_OWNER = 500;

function normIp(v) {
  return String(v || '').trim();
}
function normName(v) {
  return String(v || '').trim().toLowerCase();
}
function normValue(kind, value) {
  return kind === 'ip' ? normIp(value) : normName(value);
}

class Blacklist {
  constructor(dir) {
    this.file = path.join(dir, 'blacklist.json');
    this.map = new Map(); // ownerId -> entry[]
    this.load();
  }

  load() {
    try {
      const raw = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      for (const [owner, list] of Object.entries(raw)) {
        if (Array.isArray(list)) this.map.set(String(owner), list);
      }
    } catch (_) {
      // arquivo ainda não existe: começa vazio
    }
  }

  save() {
    const obj = {};
    for (const [owner, list] of this.map) obj[owner] = list;
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(obj, null, 2));
    fs.renameSync(tmp, this.file);
  }

  listFor(ownerId) {
    return this.map.get(String(ownerId)) || [];
  }

  /** Adiciona (ou atualiza) uma entrada. Retorna a entrada, ou null se inválida. */
  add(ownerId, { kind, value, name = '', reason = '', by = '' }) {
    if (!KINDS.includes(kind)) return null;
    const v = normValue(kind, value);
    if (!v) return null;
    const owner = String(ownerId);
    const list = this.map.get(owner) || [];
    const existing = list.find((e) => e.kind === kind && normValue(e.kind, e.value) === v);
    if (existing) {
      existing.reason = reason || existing.reason;
      existing.name = name || existing.name;
      existing.by = by || existing.by;
      existing.at = Date.now();
      this.save();
      return existing;
    }
    if (list.length >= MAX_PER_OWNER) return null;
    const entry = { kind, value: kind === 'ip' ? normIp(value) : String(name || value), name: String(name || ''), reason: String(reason || ''), by: String(by || ''), at: Date.now() };
    list.push(entry);
    this.map.set(owner, list);
    this.save();
    return entry;
  }

  /** Remove uma entrada. Retorna true se removeu. */
  remove(ownerId, kind, value) {
    const owner = String(ownerId);
    const list = this.map.get(owner);
    if (!list) return false;
    const v = normValue(kind, value);
    const idx = list.findIndex((e) => e.kind === kind && normValue(e.kind, e.value) === v);
    if (idx === -1) return false;
    list.splice(idx, 1);
    this.save();
    return true;
  }

  /** A identidade (nick/IP) bate com alguma entrada do dono? Retorna a entrada ou null. */
  matches(ownerId, { name = '', ip = '' } = {}) {
    const list = this.map.get(String(ownerId));
    if (!list || !list.length) return null;
    const n = normName(name);
    const i = normIp(ip);
    for (const e of list) {
      if (e.kind === 'ip' && i && normIp(e.value) === i) return e;
      if (e.kind === 'nome' && n && normName(e.value) === n) return e;
    }
    return null;
  }
}

module.exports = { Blacklist, KINDS };
