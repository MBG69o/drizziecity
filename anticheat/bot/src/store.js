'use strict';

const fs = require('fs');
const path = require('path');
const { PROTECTIONS, defaultProtectionState } = require('./protections');

const MAX_HISTORY = 500;
const COMMAND_TTL_MS = 10 * 60 * 1000;

function defaultState() {
  return {
    version: 1,
    global: true,
    pollSeconds: 10,
    logChannelId: process.env.AC_LOG_CHANNEL_ID || null,
    owners: [],
    roles: [],
    whitelist: [],
    protections: defaultProtectionState(),
    nextCommandId: 1,
    commands: [],
  };
}

class Store {
  constructor(dir) {
    this.dir = dir;
    this.file = path.join(dir, 'state.json');
    this.historyFile = path.join(dir, 'detections.jsonl');
    this.state = defaultState();
    this.history = [];
    this.server = { lastSeen: 0, players: 0, maxPlayers: 0, address: null, configVersion: 0 };
  }

  load() {
    fs.mkdirSync(this.dir, { recursive: true });
    if (fs.existsSync(this.file)) {
      const raw = JSON.parse(fs.readFileSync(this.file, 'utf8'));
      const base = defaultState();
      this.state = { ...base, ...raw, protections: { ...base.protections } };
      // mescla proteções salvas com as atuais (novas proteções recebem o padrão)
      for (const p of PROTECTIONS) {
        const saved = raw.protections && raw.protections[p.key];
        if (saved) this.state.protections[p.key] = { ...p.defaults, ...saved };
      }
    } else {
      this.save();
    }
    if (fs.existsSync(this.historyFile)) {
      const lines = fs.readFileSync(this.historyFile, 'utf8').trim().split('\n').filter(Boolean);
      this.history = lines.slice(-MAX_HISTORY).map((l) => {
        try { return JSON.parse(l); } catch { return null; }
      }).filter(Boolean);
    }
    return this;
  }

  save() {
    const tmp = `${this.file}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(this.state, null, 2));
    fs.renameSync(tmp, this.file);
  }

  /** Altera a configuração; incrementa a versão para o servidor recarregar. */
  update(mutator) {
    mutator(this.state);
    this.state.version += 1;
    this.save();
    return this.state;
  }

  /** Altera dados internos do bot (donos, canal de log) sem forçar recarga no servidor. */
  updateLocal(mutator) {
    mutator(this.state);
    this.save();
    return this.state;
  }

  queueCommand(type, arg) {
    const cmd = { id: this.state.nextCommandId++, type, arg: String(arg), createdAt: Date.now() };
    this.state.commands.push(cmd);
    this.save();
    return cmd;
  }

  /** Remove comandos já executados (ack) ou expirados e devolve os pendentes. */
  pendingCommands(ack) {
    const now = Date.now();
    const before = this.state.commands.length;
    this.state.commands = this.state.commands.filter((c) => c.id > ack && now - c.createdAt < COMMAND_TTL_MS);
    if (this.state.commands.length !== before) this.save();
    return this.state.commands;
  }

  addDetection(det) {
    this.history.push(det);
    if (this.history.length > MAX_HISTORY) this.history.splice(0, this.history.length - MAX_HISTORY);
    fs.appendFile(this.historyFile, `${JSON.stringify(det)}\n`, () => {});
  }

  isServerOnline() {
    return Date.now() - this.server.lastSeen < (this.state.pollSeconds * 3 + 10) * 1000;
  }
}

module.exports = { Store, defaultState };
