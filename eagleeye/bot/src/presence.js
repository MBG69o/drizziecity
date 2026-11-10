'use strict';

const { PROTECTIONS } = require('./protections');

const DAY_MS = 24 * 3600 * 1000;

const plural = (n, um, varios) => `${n.toLocaleString('pt-BR')} ${n === 1 ? um : varios}`;

/** Números reais de todos os servidores, para o status do bot. */
function collectStats(store, now = Date.now()) {
  let servers = 0;
  let players = 0;
  let detections = 0;
  let bans = 0;
  let linked = 0;
  for (const server of store.servers.values()) {
    linked += 1;
    if (server.activated && store.isServerOnline(server)) {
      servers += 1;
      players += store.getStatus(server).players || 0;
    }
    detections += store.getHistory(server).filter((d) => now - d.time < DAY_MS).length;
    bans += server.bans.filter((b) => b.time && now - b.time < 30 * DAY_MS).length;
  }
  return { servers, players, detections, bans, linked, protections: PROTECTIONS.length };
}

/** Textos do status ("atividade") do bot, sempre com dados reais. */
function buildPresenceTexts(stats) {
  if (!stats.servers) {
    return [
      `🦅 Aguardando servidores · ${plural(stats.linked, 'servidor vinculado', 'servidores vinculados')}`,
      `🛡️ ${stats.protections} proteções prontas para agir`,
    ];
  }
  const texts = [
    `🦅 Vigiando ${plural(stats.servers, 'servidor', 'servidores')}`,
    `👥 Analisando ${plural(stats.players, 'jogador', 'jogadores')} simultaneamente`,
    `🛡️ ${stats.protections} proteções em tempo real`,
  ];
  texts.push(stats.detections
    ? `🚨 ${plural(stats.detections, 'ameaça detectada', 'ameaças detectadas')} nas últimas 24h`
    : '✅ Nenhuma ameaça nas últimas 24h');
  if (stats.bans) texts.push(`🔨 ${plural(stats.bans, 'cheater banido', 'cheaters banidos')} nos últimos 30 dias`);
  return texts;
}

module.exports = { collectStats, buildPresenceTexts };
