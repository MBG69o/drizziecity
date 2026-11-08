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

const apiKey = process.env.AC_API_KEY || '';
if (!/^[A-Za-z0-9_-]{16,128}$/.test(apiKey) || apiKey === 'troque_esta_chave_super_secreta') {
  fail('Defina AC_API_KEY no .env (mínimo 16 caracteres, apenas letras, números, _ e -) e use a mesma em DCAC_API_KEY no gamemode.');
}
if (!process.env.DISCORD_TOKEN) fail('Defina DISCORD_TOKEN no .env.');

const store = new Store(process.env.AC_DATA_DIR || path.join(__dirname, '..', 'data')).load();
const permissions = new Permissions(store, {
  ownerIds: parseIds(process.env.AC_OWNER_IDS),
  roleIds: parseIds(process.env.AC_ROLE_IDS),
});

const bot = createDiscordBot({
  store,
  permissions,
  token: process.env.DISCORD_TOKEN,
  guildId: process.env.DISCORD_GUILD_ID || null,
});

startApi({
  store,
  apiKey,
  host: process.env.AC_API_HOST || '0.0.0.0',
  port: Number.parseInt(process.env.AC_API_PORT || '8090', 10),
  allowedIps: String(process.env.AC_ALLOWED_IPS || '').split(',').map((s) => s.trim()).filter(Boolean),
  onDetection: (det) => bot.enqueueDetection(det),
});

bot.start().catch((err) => fail(`Não foi possível conectar ao Discord: ${err.message}`));

process.on('unhandledRejection', (err) => console.error('[erro]', err));
