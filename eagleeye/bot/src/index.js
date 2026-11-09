'use strict';

require('dotenv').config();
const path = require('path');
const { Store } = require('./store');
const { startApi } = require('./api');
const { Permissions, parseIds } = require('./permissions');
const { createDiscordBot } = require('./discord');

function fail(msg) {
  console.error(`[config] ${msg}`);
  process.exit(1);
}

if (!process.env.DISCORD_TOKEN) fail('Defina DISCORD_TOKEN no .env.');
const projectGuildId = (process.env.DISCORD_GUILD_ID || '').trim();
if (!/^\d{5,25}$/.test(projectGuildId)) fail('Defina DISCORD_GUILD_ID no .env com o ID do Discord do projeto (o bot só funciona nele).');

const registerKey = process.env.AC_REGISTER_KEY || '';
if (registerKey && !/^[A-Za-z0-9_-]{8,128}$/.test(registerKey)) {
  fail('AC_REGISTER_KEY deve ter de 8 a 128 caracteres (letras, números, _ e -).');
}

const store = new Store(process.env.AC_DATA_DIR || path.join(__dirname, '..', 'data')).load();
console.log(`[store] ${store.servers.size} servidor(es) carregado(s).`);

const permissions = new Permissions({ botAdminIds: parseIds(process.env.AC_BOT_ADMIN_IDS) });

const bot = createDiscordBot({
  store,
  permissions,
  token: process.env.DISCORD_TOKEN,
  projectGuildId,
});

startApi({
  store,
  host: process.env.AC_API_HOST || '0.0.0.0',
  port: Number.parseInt(process.env.AC_API_PORT || '8090', 10),
  allowedIps: String(process.env.AC_ALLOWED_IPS || '').split(',').map((s) => s.trim()).filter(Boolean),
  registerKey,
  onDetection: (server, det) => bot.enqueueDetection(server, det),
});

bot.start().catch((err) => fail(`Não foi possível conectar ao Discord: ${err.message}`));

process.on('unhandledRejection', (err) => console.error('[erro]', err));
