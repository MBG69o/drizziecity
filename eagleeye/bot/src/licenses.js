'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Mesmo alfabeto Crockford base32 do plugin (ee_license.cpp).
const B32 = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

function randomBody() {
  const bytes = crypto.randomBytes(15);
  let s = '';
  for (let i = 0; i < 15; i++) s += B32[bytes[i] % 32];
  return s;
}

// Dígitos verificadores idênticos aos do plugin: 10 bits do HMAC(body, pepper).
function checkDigits(body, pepper) {
  const h = crypto.createHmac('sha256', pepper).update(body).digest('hex');
  const hx = (c) => (c <= '9' ? c.charCodeAt(0) - 48 : c.charCodeAt(0) - 87);
  const v0 = (hx(h[0]) << 1) | (hx(h[1]) >> 3);
  const v1 = ((hx(h[1]) & 7) << 2) | (hx(h[2]) >> 2);
  return B32[v0 & 31] + B32[v1 & 31];
}

function formatKey(body, pepper) {
  const c = checkDigits(body, pepper);
  return `EE-LIC-${body.slice(0, 5)}-${body.slice(5, 10)}-${body.slice(10, 15)}${c}`;
}

function normalizeKey(key) {
  return String(key || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

const keyHash = (key) => crypto.createHash('sha256').update(normalizeKey(key)).digest('hex');

/**
 * Catálogo de licenças (data/licenses.json).
 * Guarda só o hash da chave; a chave em texto aparece uma vez, ao criar.
 * pepper e signSecret vêm do .env e são embutidos (ofuscados) no plugin.
 */
class Licenses {
  constructor(dir, { pepper, signSecret }) {
    this.file = path.join(dir, 'licenses.json');
    this.pepper = pepper;
    this.signSecret = signSecret;
    this.map = {};
  }

  load() {
    fs.mkdirSync(path.dirname(this.file), { recursive: true });
    if (fs.existsSync(this.file)) this.map = JSON.parse(fs.readFileSync(this.file, 'utf8'));
    return this;
  }

  save() {
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(this.map, null, 2));
    fs.renameSync(tmp, this.file);
  }

  /** Emite uma licença nova. Devolve a chave em texto (só aqui). */
  create({ note = '', client = '', expiresAt = 0 } = {}) {
    let body;
    let key;
    do { body = randomBody(); key = formatKey(body, this.pepper); } while (this.map[keyHash(key)]);
    const rec = {
      hash: keyHash(key),
      note: String(note).slice(0, 200),
      client: String(client).slice(0, 100),
      state: 'active',
      createdAt: Date.now(),
      expiresAt: Number.isFinite(expiresAt) ? expiresAt : 0,
      boundServerId: null,
      lastCheck: null,
      lastIp: null,
    };
    this.map[rec.hash] = rec;
    this.save();
    return { key, record: rec };
  }

  get(key) {
    return this.map[keyHash(key)] || null;
  }

  list() {
    return Object.values(this.map);
  }

  setState(key, state) {
    const rec = this.get(key);
    if (!rec) return null;
    rec.state = state;
    this.save();
    return rec;
  }

  revoke(key) { return this.setState(key, 'revoked'); }
  reactivate(key) { return this.setState(key, 'active'); }

  /** Existe licença ativa, dentro da validade, vinculada a este servidor? */
  activeForServer(serverId) {
    return Object.values(this.map).some((r) => r.boundServerId === serverId
      && r.state === 'active' && (!r.expiresAt || Date.now() <= r.expiresAt));
  }

  /** Formato válido (sem consultar o catálogo)? */
  formatOk(key) {
    const k = normalizeKey(key);
    if (k.length !== 22 || !k.startsWith('EELIC')) return false;
    const body = k.slice(5, 20);
    const check = k.slice(20, 22);
    if (![...body, ...check].every((ch) => B32.includes(ch))) return false;
    return checkDigits(body, this.pepper) === check;
  }

  /**
   * Resposta que o plugin consome. Confere o catálogo, aplica validade e
   * binding ao servidor, e assina. Estados: active | revoked | expired | unknown.
   */
  sign(key, serverId, nonce, ip) {
    let state = 'unknown';
    let expiresAt = 0;
    const rec = this.formatOk(key) ? this.get(key) : null;
    if (rec) {
      expiresAt = rec.expiresAt || 0;
      // vincula ao primeiro servidor que usar a licença
      if (!rec.boundServerId && serverId) rec.boundServerId = serverId;
      const boundOk = !rec.boundServerId || !serverId || rec.boundServerId === serverId;
      rec.lastCheck = Date.now();
      rec.lastIp = ip || rec.lastIp;
      this.save();
      if (rec.state === 'revoked') state = 'revoked';
      else if (rec.expiresAt && Date.now() > rec.expiresAt) state = 'expired';
      else if (!boundOk) state = 'revoked'; // licença usada em outro servidor
      else state = 'active';
    }
    const expSec = Math.floor((expiresAt || 0) / 1000);
    const msg = `${state}|${expSec}|${nonce}|${serverId}|${key}`;
    const tag = crypto.createHmac('sha256', this.signSecret).update(msg).digest('hex');
    return { state, body: `LIC ${state} ${expSec} ${nonce} ${tag}\n` };
  }
}

module.exports = { Licenses, formatKey, checkDigits, normalizeKey, keyHash };
