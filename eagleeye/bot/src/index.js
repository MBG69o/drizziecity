'use strict';

require('dotenv').config();
const path = require('path');
const { Store } = require('./store');
const { startApi } = require('./api');
const { Permissions, parseIds } = require('./permissions');
const { createDiscordBot } = require('./discord');
const { Guard } = require('./guard');
const { Licenses } = require('./licenses');
const { Blacklist } = require('./blacklist');
const { Dashboard } = require('./dashboard');
const { Trust } = require('./trust');
const security = require('./security');

function fail(msg) {
  console.error(`[config] ${msg}`);
  process.exit(1);
}

if (!process.env.DISCORD_TOKEN) fail('Defina DISCORD_TOKEN no .env.');
const projectGuildId = (process.env.DISCORD_GUILD_ID || '').trim();
if (!/^\d{5,25}$/.test(projectGuildId)) fail('Defina DISCORD_GUILD_ID no .env com o ID do Discord do projeto (o bot só funciona nele).');


const dataDir = process.env.AC_DATA_DIR || path.join(__dirname, '..', 'data');
const store = new Store(dataDir).load();
console.log(`[store] ${store.servers.size} servidor(es) carregado(s).`);

// Sistema de licenças (para a versão em plugin). pepper e signSecret são
// embutidos ofuscados no plugin; precisam ser iguais nos dois lados.
const licensePepper = (process.env.AC_LICENSE_PEPPER || '').trim();
const licenseSign = (process.env.AC_LICENSE_SIGN || '').trim();
let licenses = null;
if (licensePepper && licenseSign) {
  licenses = new Licenses(dataDir, { pepper: licensePepper, signSecret: licenseSign }).load();
  console.log(`[licencas] ${licenses.list().length} licenca(s) carregada(s).`);
} else {
  console.log('[licencas] AC_LICENSE_PEPPER/AC_LICENSE_SIGN não definidos: licenciamento desligado.');
}
const requireLicense = /^(1|true|sim)$/i.test(process.env.AC_REQUIRE_LICENSE || '');

const permissions = new Permissions({ botAdminIds: parseIds(process.env.AC_BOT_ADMIN_IDS) });

// Sistema de blacklist global (ban cruzado entre os servidores de um mesmo dono)
const blacklist = new Blacklist(dataDir);
console.log('[blacklist] lista negra compartilhada carregada.');

// Reputação de jogador (trust score) e dashboard web ao vivo
const trust = new Trust(dataDir);
const dashboard = new Dashboard(dataDir);
console.log('[painel] dashboard web e reputação de jogador prontos.');

const bot = createDiscordBot({
  store,
  permissions,
  token: process.env.DISCORD_TOKEN,
  projectGuildId,
  // canal da equipe que recebe os alertas de todos os servidores
  alertChannelId: (process.env.AC_ALERT_CHANNEL_ID ?? '1569638075166892072').trim() || null,
  licenses,
  blacklist,
  trust,
  dashboard,
  // base pública do painel/selo (ex.: https://eagleeye.discloud.dev)
  publicBaseUrl: (process.env.AC_PUBLIC_URL || '').trim().replace(/\/+$/, ''),
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
  onAuthFail: (server, ip) => bot.notifier.onAuthFail(server, ip),
  onStatus: (server, status) => bot.notifier.onStatus(server, status),
  licenses,
  requireLicense,
  dashboard,
  trust,
  security,
});

bot.start().catch((err) => fail(`Não foi possível conectar ao Discord: ${err.message}`));

process.on('unhandledRejection', (err) => console.error('[erro]', err));
