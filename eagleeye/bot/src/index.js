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
const { WebAuth } = require('./webauth');
const { Watchlist } = require('./watchlist');
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
// Site de gerenciamento com login em 2 etapas (token -> código de 5 min)
const webauth = new WebAuth();
// Lista de procurados (watchlist): avisa quando um nick vigiado entra
const watchlist = new Watchlist(dataDir);
console.log('[painel] dashboard web, site de gerenciamento, reputação e watchlist prontos.');

const bot = createDiscordBot({
  store,
  permissions,
  token: process.env.DISCORD_TOKEN,
  projectGuildId,
  // canal da equipe que recebe os alertas de todos os servidores
  alertChannelId: (process.env.AC_ALERT_CHANNEL_ID ?? '1569638075166892072').trim() || null,
  // canal do painel de status (mensagem fixa, atualiza sozinha)
  statusChannelId: (process.env.AC_STATUS_CHANNEL_ID ?? '1569637290819723334').trim() || null,
  licenses,
  blacklist,
  trust,
  dashboard,
  watchlist,
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
  // Padrão TRUE: quase todo mundo roda atrás de um proxy (Discloud/Cloudflare/Nginx),
  // onde o IP real vem em cf-connecting-ip/x-forwarded-for. Sem isso, todos os
  // servidores aparecem com o MESMO IP (o do proxy) e se atrapalham nos limites
  // (rate limit e "novos tokens por IP"), causando flapping e erro de "não conectou".
  // Rodando direto, sem proxy, defina AC_TRUST_PROXY=false.
  trustProxy: !/^(0|false|nao|não|off)$/i.test((process.env.AC_TRUST_PROXY || '').trim()),
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
  webauth,
  blacklist,
  watchlist,
  // segurança/ocultação dos endpoints dos servidores de jogo:
  // AC_PATH_SECRET -> prefixo secreto no caminho; AC_APP_KEY -> chave de aplicação (param k)
  pathSecret: (process.env.AC_PATH_SECRET || '').trim(),
  appKey: (process.env.AC_APP_KEY || '').trim(),
  onAuthCode: (server, code) => bot.deliverAuthCode(server, code),
  onPlayers: (server, joined) => bot.onWatchlistJoin(server, joined),
});

bot.start().catch((err) => fail(`Não foi possível conectar ao Discord: ${err.message}`));

process.on('unhandledRejection', (err) => console.error('[erro]', err));
