'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { PROTECTIONS, defaultProtectionState } = require('./protections');

const MAX_HISTORY = 500;
const COMMAND_TTL_MS = 10 * 60 * 1000;
// sem 0/O/1/I/L para não confundir na hora de digitar
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

function randomCode(len) {
  const bytes = crypto.randomBytes(len);
  let out = '';
  for (let i = 0; i < len; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}

const newServerId = () => `DC-${randomCode(6)}`;
const newLoginKey = () => `${randomCode(4)}-${randomCode(4)}-${randomCode(4)}`;
const newToken = () => crypto.randomBytes(32).toString('hex');
const hashToken = (token) => crypto.createHash('sha256').update(String(token)).digest('hex');

function normalizeId(id) {
  return String(id || '').trim().toUpperCase();
}

function normalizeLoginKey(key) {
  return String(key || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function safeEqualStr(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

function defaultServer(id) {
  return {
    id,
    name: id,
    customName: false,
    tokenHash: null,
    loginKey: null,
    createdAt: Date.now(),
    createdIp: null,
    version: 1,
    global: true,
    pollSeconds: 10,
    protections: defaultProtectionState(),
    whitelist: [],
    owners: [],
    admins: [],
    roles: [],
    logChannels: {},
    nextCommandId: 1,
    commands: [],
  };
}

/**
 * Armazena vários servidores SA-MP/open.mp, cada um com ID fixo, token da API
 * (só o hash é guardado) e chave de login para o Discord.
 *
 *   data/servers/<ID>.json   configuração de cada servidor
 *   data/history/<ID>.jsonl  detecções
 *   data/guilds.json         servidores do Discord -> servidores do jogo vinculados
 */
class Store {
  constructor(dir) {
    this.dir = dir;
    this.serversDir = path.join(dir, 'servers');
    this.historyDir = path.join(dir, 'history');
    this.guildsFile = path.join(dir, 'guilds.json');
    this.servers = new Map();
    this.guilds = {};
    this.history = new Map();
    this.status = new Map();
  }

  load() {
    fs.mkdirSync(this.serversDir, { recursive: true });
    fs.mkdirSync(this.historyDir, { recursive: true });
    for (const file of fs.readdirSync(this.serversDir)) {
      if (!file.endsWith('.json')) continue;
      const raw = JSON.parse(fs.readFileSync(path.join(this.serversDir, file), 'utf8'));
      const base = defaultServer(raw.id);
      const server = { ...base, ...raw, protections: { ...base.protections } };
      // novas proteções recebem o valor padrão
      for (const prot of PROTECTIONS) {
        const saved = raw.protections && raw.protections[prot.key];
        if (saved) server.protections[prot.key] = { ...prot.defaults, ...saved };
      }
      this.servers.set(server.id, server);
    }
    if (fs.existsSync(this.guildsFile)) this.guilds = JSON.parse(fs.readFileSync(this.guildsFile, 'utf8'));
    return this;
  }

  writeJson(file, data) {
    const tmp = `${file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
    fs.renameSync(tmp, file);
  }

  saveServer(server) {
    this.writeJson(path.join(this.serversDir, `${server.id}.json`), server);
  }

  saveGuilds() {
    this.writeJson(this.guildsFile, this.guilds);
  }

  // ------------------------------------------------------------- servidores
  createServer({ name, ip }) {
    let id;
    do { id = newServerId(); } while (this.servers.has(id));
    const token = newToken();
    const server = defaultServer(id);
    server.tokenHash = hashToken(token);
    server.loginKey = newLoginKey();
    server.createdIp = ip || null;
    if (name) server.name = String(name).slice(0, 64);
    this.servers.set(id, server);
    this.saveServer(server);
    return { server, token };
  }

  getServer(id) {
    return this.servers.get(normalizeId(id)) || null;
  }

  /** @returns {{server?: object, error?: 'unknown'|'token'}} */
  authServer(id, token) {
    const server = this.getServer(id);
    if (!server) return { error: 'unknown' };
    if (!token || !safeEqualStr(hashToken(token), server.tokenHash)) return { error: 'token' };
    return { server };
  }

  checkLoginKey(server, key) {
    return safeEqualStr(normalizeLoginKey(key), normalizeLoginKey(server.loginKey));
  }

  /** Altera a configuração. bump=true faz o servidor do jogo recarregar. */
  updateServer(server, mutator, { bump = true } = {}) {
    mutator(server);
    if (bump) server.version += 1;
    this.saveServer(server);
    return server;
  }

  rotateLoginKey(server) {
    // incrementa a versão para o servidor receber e mostrar a chave nova no console
    return this.updateServer(server, (s) => { s.loginKey = newLoginKey(); }).loginKey;
  }

  rotateToken(server) {
    const token = newToken();
    this.updateServer(server, (s) => { s.tokenHash = hashToken(token); }, { bump: false });
    return token;
  }

  queueCommand(server, type, arg) {
    const cmd = { id: server.nextCommandId++, type, arg: String(arg), createdAt: Date.now() };
    server.commands.push(cmd);
    this.saveServer(server);
    return cmd;
  }

  /** Remove comandos já executados (ack) ou expirados e devolve os pendentes. */
  pendingCommands(server, ack) {
    const now = Date.now();
    const before = server.commands.length;
    // se o gamemode reiniciou (ack menor que os já entregues), reenvia apenas os não expirados
    server.commands = server.commands.filter((c) => c.id > ack && now - c.createdAt < COMMAND_TTL_MS);
    if (server.commands.length !== before) this.saveServer(server);
    return server.commands;
  }

  // ---------------------------------------------------------- status/logs
  setStatus(server, status) {
    this.status.set(server.id, { ...status, lastSeen: Date.now() });
  }

  getStatus(server) {
    return this.status.get(server.id) || { lastSeen: 0, players: 0, maxPlayers: 0, address: null, configVersion: 0 };
  }

  isServerOnline(server) {
    return Date.now() - this.getStatus(server).lastSeen < (server.pollSeconds * 3 + 10) * 1000;
  }

  getHistory(server) {
    if (!this.history.has(server.id)) {
      const file = path.join(this.historyDir, `${server.id}.jsonl`);
      let list = [];
      if (fs.existsSync(file)) {
        list = fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).slice(-MAX_HISTORY)
          .map((l) => { try { return JSON.parse(l); } catch { return null; } })
          .filter(Boolean);
      }
      this.history.set(server.id, list);
    }
    return this.history.get(server.id);
  }

  addDetection(server, det) {
    const list = this.getHistory(server);
    list.push(det);
    if (list.length > MAX_HISTORY) list.splice(0, list.length - MAX_HISTORY);
    fs.appendFile(path.join(this.historyDir, `${server.id}.jsonl`), `${JSON.stringify(det)}\n`, () => {});
  }

  // ---------------------------------------------- vínculo com o Discord
  getGuild(guildId) {
    return this.guilds[guildId] || { active: null, servers: [] };
  }

  linkGuild(guildId, server) {
    const g = this.getGuild(guildId);
    if (!g.servers.includes(server.id)) g.servers.push(server.id);
    g.active = server.id;
    this.guilds[guildId] = g;
    this.saveGuilds();
  }

  unlinkGuild(guildId, server) {
    const g = this.getGuild(guildId);
    g.servers = g.servers.filter((id) => id !== server.id);
    if (g.active === server.id) g.active = g.servers[0] || null;
    this.guilds[guildId] = g;
    this.saveGuilds();
    this.updateServer(server, (s) => { delete s.logChannels[guildId]; }, { bump: false });
  }

  setActive(guildId, server) {
    const g = this.getGuild(guildId);
    if (!g.servers.includes(server.id)) return false;
    g.active = server.id;
    this.guilds[guildId] = g;
    this.saveGuilds();
    return true;
  }

  activeServer(guildId) {
    const g = this.getGuild(guildId);
    return g.active ? this.getServer(g.active) : null;
  }

  isLinked(guildId, server) {
    return this.getGuild(guildId).servers.includes(server.id);
  }
}

module.exports = { Store, normalizeId, normalizeLoginKey, hashToken };
