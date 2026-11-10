'use strict';

require('dotenv').config();
const path = require('path');
const { Store } = require('./store');
const { startApi } = require('./api');
const { Permissions, parseIds } = require('./permissions');
const { createDiscordBot } = require('./discord');
const { Guard } = require('./guard');

function fail(msg) {
  console.error(`[config] ${msg}`);
  process.exit(1);
}

if (!process.env.DISCORD_TOKEN) fail('Defina DISCORD_TOKEN no .env.');
const projectGuildId = (process.env.DISCORD_GUILD_ID || '').trim();
if (!/^\d{5,25}$/.test(projectGuildId)) fail('Defina DISCORD_GUILD_ID no .env com o ID do Discord do projeto (o bot só funciona nele).');


const store = new Store(process.env.AC_DATA_DIR || path.join(__dirname, '..', 'data')).load();
console.log(`[store] ${store.servers.size} servidor(es) carregado(s).`);

const permissions = new Permissions({ botAdminIds: parseIds(process.env.AC_BOT_ADMIN_IDS) });

const bot = createDiscordBot({
  store,
  permissions,
  token: process.env.DISCORD_TOKEN,
  projectGuildId,
});

// AC_API_PORT tem prioridade; PORT é a variável usada por várias hospedagens de sites
const apiPort = Number.parseInt(process.env.AC_API_PORT || process.env.PORT || '8090', 10);

startApi({
  store,
  host: process.env.AC_API_HOST || '0.0.0.0',
  port: apiPort,
  allowedIps: String(process.env.AC_ALLOWED_IPS || '').split(',').map((s) => s.trim()).filter(Boolean),
  trustProxy: /^(1|true|sim)$/i.test(process.env.AC_TRUST_PROXY || ''),
  maxConnections: Number.parseInt(process.env.AC_MAX_CONNECTIONS || '1000', 10),
  guard: new Guard({
    ratePerMin: Number.parseInt(process.env.AC_RATE_LIMIT || '120', 10),
    burst: Number.parseInt(process.env.AC_RATE_BURST || '60', 10),
  }),
  onDetection: (server, det) => bot.enqueueDetection(server, det),
});

bot.start().catch((err) => fail(`Não foi possível conectar ao Discord: ${err.message}`));

process.on('unhandledRejection', (err) => console.error('[erro]', err));
