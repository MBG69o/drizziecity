'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { PROTECTIONS, defaultProtectionState } = require('./protections');

const MAX_HISTORY = 500;
const MAX_BANS = 500;
const MAX_AUDIT = 200;
const COMMAND_TTL_MS = 10 * 60 * 1000;
// sem 0/O/1/I/L para não confundir na hora de digitar
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

function randomCode(len) {
  const bytes = crypto.randomBytes(len);
  let out = '';
  for (let i = 0; i < len; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}

const newServerId = () => `EE-${randomCode(6)}`;
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
    // novo servidor fica desligado até o dono confirmar no Discord
    activated: false,
    pollSeconds: 10,
    protections: defaultProtectionState(),
    whitelist: [],
    owners: [],
    admins: [],
    roles: [],
    logChannels: {},
    nextCommandId: 1,
    commands: [],
    // bans aplicados pelo anti-cheat (com desban automático opcional)
    bans: [],
    banHours: 0,            // 0 = permanente
    alerts: true,           // avisa no canal quando o servidor cai/volta
    dailySummary: false,    // resumo diário no canal de logs
    lastSummaryDay: null,
  };
}

/**
 * Armazena vários servidores SA-MP/open.mp, cada um com ID fixo, token da API
 * (só o hash é guardado) e chave de login para o Discord.
 *
 *   data/servers/<ID>.json   configuração de cada servidor
 *   data/history/<ID>.jsonl  detecções
 *   data/donos.json          dono (ID do Discord) -> { servidor, IDF }
 *   data/selecao.json        servidor escolhido com /ac usar (por usuário)
 */
class Store {
  constructor(dir) {
    this.dir = dir;
    this.serversDir = path.join(dir, 'servers');
    this.historyDir = path.join(dir, 'history');
    this.auditDir = path.join(dir, 'audit');
    this.audit = new Map();
    this.players = new Map();
    this.donosFile = path.join(dir, 'donos.json');
    this.selectionFile = path.join(dir, 'selecao.json');
    this.servers = new Map();
    this.donos = {};
    this.selection = {};
    this.history = new Map();
    this.status = new Map();
  }

  load() {
    fs.mkdirSync(this.serversDir, { recursive: true });
    fs.mkdirSync(this.historyDir, { recursive: true });
    fs.mkdirSync(this.auditDir, { recursive: true });
    for (const file of fs.readdirSync(this.serversDir)) {
      if (!file.endsWith('.json')) continue;
      const raw = JSON.parse(fs.readFileSync(path.join(this.serversDir, file), 'utf8'));
      const base = defaultServer(raw.id);
      const server = { ...base, ...raw, protections: { ...base.protections } };
      if (raw.activated === undefined) server.activated = true; // dados antigos: já estavam ativos
      // novas proteções recebem o valor padrão
      for (const prot of PROTECTIONS) {
        const saved = raw.protections && raw.protections[prot.key];
        if (saved) server.protections[prot.key] = { ...prot.defaults, ...saved };
      }
      this.servers.set(server.id, server);
    }
    if (fs.existsSync(this.donosFile)) this.donos = JSON.parse(fs.readFileSync(this.donosFile, 'utf8'));
    if (fs.existsSync(this.selectionFile)) this.selection = JSON.parse(fs.readFileSync(this.selectionFile, 'utf8'));
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

  saveDonos() {
    this.writeJson(this.donosFile, this.donos);
  }

  saveSelection() {
    this.writeJson(this.selectionFile, this.selection);
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
    this.syncDonoNames(server);
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
    if (det.action === 2 && det.ip) this.addBan(server, det);
  }

  // ------------------------------------------------------------------ bans
  addBan(server, det) {
    const ban = {
      id: (server.bans.at(-1)?.id || 0) + 1,
      name: det.name,
      ip: det.ip,
      code: det.code,
      detail: det.detail,
      time: det.time,
      expiresAt: server.banHours > 0 ? det.time + server.banHours * 3600 * 1000 : null,
      unbannedAt: null,
      unbannedBy: null,
    };
    this.updateServer(server, (s) => {
      s.bans.push(ban);
      if (s.bans.length > MAX_BANS) s.bans.splice(0, s.bans.length - MAX_BANS);
    }, { bump: false });
    return ban;
  }

  activeBans(server) {
    return server.bans.filter((b) => !b.unbannedAt);
  }

  /** Marca o ban como desfeito e pede ao servidor o unbanip. */
  unban(server, ban, by) {
    this.updateServer(server, () => { ban.unbannedAt = Date.now(); ban.unbannedBy = by; }, { bump: false });
    this.queueCommand(server, 'unbanip', ban.ip);
  }

  /** Bans temporários vencidos: devolve os que foram desfeitos agora. */
  expireBans(server, now = Date.now()) {
    const expired = this.activeBans(server).filter((b) => b.expiresAt && b.expiresAt <= now);
    for (const b of expired) this.unban(server, b, 'automatico');
    return expired;
  }

  // ------------------------------------------------------------- auditoria
  getAudit(server) {
    if (!this.audit.has(server.id)) {
      const file = path.join(this.auditDir, `${server.id}.jsonl`);
      let list = [];
      if (fs.existsSync(file)) {
        list = fs.readFileSync(file, 'utf8').trim().split('\n').filter(Boolean).slice(-MAX_AUDIT)
          .map((l) => { try { return JSON.parse(l); } catch { return null; } })
          .filter(Boolean);
      }
      this.audit.set(server.id, list);
    }
    return this.audit.get(server.id);
  }

  addAudit(server, userId, text) {
    const entry = { time: Date.now(), userId, text: String(text).slice(0, 300) };
    const list = this.getAudit(server);
    list.push(entry);
    if (list.length > MAX_AUDIT) list.splice(0, list.length - MAX_AUDIT);
    fs.appendFile(path.join(this.auditDir, `${server.id}.jsonl`), `${JSON.stringify(entry)}\n`, () => {});
  }

  // ---------------------------------------------- jogadores online (plist)
  setPlayers(server, list) {
    this.players.set(server.id, { time: Date.now(), list });
  }

  getPlayers(server) {
    return this.players.get(server.id) || null;
  }

  // ---------------------------------------------------------- estatísticas
  stats(server, sinceMs) {
    const since = Date.now() - sinceMs;
    const list = this.getHistory(server).filter((d) => d.time >= since);
    const byProt = new Map();
    const byPlayer = new Map();
    const actions = [0, 0, 0];
    for (const d of list) {
      byProt.set(d.code, (byProt.get(d.code) || 0) + 1);
      byPlayer.set(d.name, (byPlayer.get(d.name) || 0) + 1);
      actions[d.action] += 1;
    }
    const top = (m) => [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
    return { total: list.length, actions, topProtections: top(byProt), topPlayers: top(byPlayer) };
  }

  playerInfo(server, nick) {
    const n = nick.toLowerCase();
    const list = this.getHistory(server).filter((d) => d.name.toLowerCase() === n);
    const byProt = new Map();
    const ips = new Set();
    for (const d of list) {
      byProt.set(d.code, (byProt.get(d.code) || 0) + 1);
      if (d.ip) ips.add(d.ip);
    }
    const bans = server.bans.filter((b) => b.name.toLowerCase() === n);
    return {
      total: list.length,
      first: list[0]?.time || null,
      last: list.at(-1)?.time || null,
      byProtection: [...byProt.entries()].sort((a, b) => b[1] - a[1]),
      ips: [...ips],
      bans,
      recent: list.slice(-5).reverse(),
    };
  }

  // ------------------------------------------------- exportar / importar
  exportConfig(server) {
    return {
      formato: 'eagleeye-config',
      versao: 1,
      exportadoEm: new Date().toISOString(),
      servidor: server.name,
      global: server.global,
      pollSeconds: server.pollSeconds,
      banHours: server.banHours,
      protections: server.protections,
      whitelist: server.whitelist,
    };
  }

  /** Valida e aplica um arquivo exportado. Lança Error com mensagem amigável. */
  importConfig(server, data) {
    if (!data || data.formato !== 'eagleeye-config') throw new Error('Arquivo não é uma configuração do EAGLE.');
    const protections = defaultProtectionState();
    for (const prot of PROTECTIONS) {
      const p = data.protections && data.protections[prot.key];
      if (!p) continue;
      protections[prot.key] = {
        enabled: Boolean(p.enabled),
        action: [0, 1, 2].includes(p.action) ? p.action : prot.defaults.action,
        tolerance: Number.isInteger(p.tolerance) && p.tolerance >= 1 && p.tolerance <= 100 ? p.tolerance : prot.defaults.tolerance,
        value: Number.isInteger(p.value) && p.value >= 0 && p.value <= 100000 ? p.value : prot.defaults.value,
      };
    }
    const nick = /^[A-Za-z0-9_\[\]().$@=]{3,24}$/;
    const whitelist = Array.isArray(data.whitelist) ? [...new Set(data.whitelist.filter((n) => nick.test(n)))].slice(0, 64) : server.whitelist;
    this.updateServer(server, (s) => {
      s.protections = protections;
      s.whitelist = whitelist;
      if (typeof data.global === 'boolean') s.global = data.global;
      if (Number.isInteger(data.pollSeconds) && data.pollSeconds >= 3 && data.pollSeconds <= 300) s.pollSeconds = data.pollSeconds;
      if (Number.isInteger(data.banHours) && data.banHours >= 0 && data.banHours <= 8760) s.banHours = data.banHours;
    });
  }

  // ------------------------------------------ donos (arquivo donos.json)
  /**
   * donos.json:
   *   { "<ID do Discord>": { "servidor": "Nome do servidor", "IDF": "EE-XXXXXX" } }
   */
  getDono(userId) {
    return this.donos[userId] || null;
  }

  setDono(userId, server) {
    this.donos[userId] = { servidor: server.name, IDF: server.id };
    this.saveDonos();
  }

  removeDono(userId) {
    if (!this.donos[userId]) return;
    delete this.donos[userId];
    this.saveDonos();
  }

  /** Servidor do dono, buscado pelo ID do Discord dele. */
  serverOfDono(userId) {
    const d = this.getDono(userId);
    return d ? this.getServer(d.IDF) : null;
  }

  syncDonoNames(server) {
    let changed = false;
    for (const d of Object.values(this.donos)) {
      if (d.IDF === server.id && d.servidor !== server.name) { d.servidor = server.name; changed = true; }
    }
    if (changed) this.saveDonos();
  }

  activate(server) {
    return this.updateServer(server, (s) => { s.activated = true; s.global = true; });
  }

  // ------------------------------------------- servidor ativo por usuário
  /** Servidores que o usuário pode configurar (todos, para administradores do bot). */
  serversOfUser(userId, isBotAdmin = false) {
    return [...this.servers.values()].filter((s) => isBotAdmin || s.owners.includes(userId) || s.admins.includes(userId));
  }

  setSelection(userId, server) {
    this.selection[userId] = server.id;
    this.saveSelection();
  }

  /** Servidor escolhido com /ac usar; se não houver, o servidor do dono (donos.json). */
  activeServerFor(userId) {
    const chosen = this.selection[userId] && this.getServer(this.selection[userId]);
    return chosen || this.serverOfDono(userId);
  }

  clearSelection(userId) {
    if (!this.selection[userId]) return;
    delete this.selection[userId];
    this.saveSelection();
  }
}

module.exports = { Store, normalizeId, normalizeLoginKey, hashToken };
