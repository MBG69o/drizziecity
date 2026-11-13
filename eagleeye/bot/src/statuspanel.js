'use strict';

const { EmbedBuilder, escapeMarkdown } = require('discord.js');
const { byId, ACTION_LABELS, PROTECTIONS } = require('./protections');
const { isOutdated, LATEST_INCLUDE } = require('./security');

const DAY = 24 * 3600 * 1000;
const COLOR = 0x4aa3ff;

/** Agrega os dados de TODOS os servidores para o painel de status. Puro/testável. */
function panelData(store, now = Date.now()) {
  const servers = [...store.servers.values()];
  let online = 0; let players = 0; let det24h = 0; let bans24h = 0; let bans30d = 0;
  let outdated = 0; let unlinked = 0;
  const rows = [];
  let recent = [];

  for (const s of servers) {
    const st = store.getStatus(s);
    const up = store.isServerOnline(s);
    const version = st.version || '';
    const old = version ? isOutdated(version) : false;
    if (up) { online += 1; players += st.players || 0; }
    if (old) outdated += 1;
    if (!s.owners || !s.owners.length) unlinked += 1;
    const hist = store.getHistory(s);
    det24h += hist.filter((d) => now - d.time < DAY).length;
    bans24h += (s.bans || []).filter((b) => b.time && now - b.time < DAY).length;
    bans30d += (s.bans || []).filter((b) => b.time && now - b.time < 30 * DAY).length;
    rows.push({
      id: s.id, name: s.name, online: up, players: up ? (st.players || 0) : 0,
      maxPlayers: st.maxPlayers || 0, version: version || '?', outdated: old,
      activated: s.activated !== false,
    });
    for (const d of hist.slice(-6)) recent.push({ player: d.name, server: s.name, code: d.code, action: d.action, time: d.time });
  }

  rows.sort((a, b) => (b.online - a.online) || (b.players - a.players));
  recent.sort((a, b) => b.time - a.time);
  recent = recent.slice(0, 12);

  return {
    totals: {
      servers: servers.length, online, offline: servers.length - online, players,
      det24h, bans24h, bans30d, outdated, unlinked, latest: LATEST_INCLUDE,
    },
    servers: rows,
    recent,
  };
}

function protName(code) {
  return (byId.get(code) || {}).name || String(code);
}

/** Monta o embed do painel. licensed = nº de servidores com licença ativa (ou null). */
function buildPanelEmbed(store, { now = Date.now(), licensedCount = null } = {}) {
  const d = panelData(store, now);
  const t = d.totals;

  const serverLines = d.servers.slice(0, 14).map((s) => {
    const dot = s.online ? '🟢' : '🔴';
    const warn = s.outdated ? ' · ⚠️ desatualizado' : '';
    const pend = s.activated ? '' : ' · ⏳ não ativado';
    const pl = s.online ? `${s.players}/${s.maxPlayers}` : 'offline';
    return `${dot} **${escapeMarkdown(s.name)}** · ${pl} · \`v${escapeMarkdown(String(s.version))}\`${warn}${pend}`;
  });
  if (d.servers.length > 14) serverLines.push(`… e mais ${d.servers.length - 14} servidor(es)`);

  const recentLines = d.recent.map((r) => {
    const act = ACTION_LABELS[r.action] || '?';
    return `\`${escapeMarkdown(String(r.player)).slice(0, 24)}\` — **${escapeMarkdown(r.server)}** · ${protName(r.code)} · ${act} · <t:${Math.floor(r.time / 1000)}:R>`;
  });

  const embed = new EmbedBuilder()
    .setTitle('🦅 EagleEYE — Status do Anti-Cheat')
    .setColor(COLOR)
    .setDescription([
      `🖥️ **${t.servers}** servidor(es) · 🟢 **${t.online}** online · 🔴 ${t.offline} offline`,
      `👥 **${t.players}** jogadores agora · 🔫 **${t.det24h}** detecções (24h) · 🔨 ${t.bans24h} bans (24h)`,
      t.outdated ? `⚠️ **${t.outdated}** servidor(es) com include/plugin **desatualizado** (atual: v${t.latest})` : `✅ Todos os servidores na v${t.latest}`,
    ].join('\n'))
    .addFields(
      { name: 'Servidores', value: serverLines.join('\n').slice(0, 1024) || 'Nenhum servidor cadastrado.' },
      { name: 'Últimos jogadores detectados', value: recentLines.join('\n').slice(0, 1024) || 'Nenhuma detecção recente. 🎉' },
    );

  const extra = [`🔨 Bans: **${t.bans24h}** (24h) · ${t.bans30d} (30d)`];
  if (t.unlinked) extra.push(`⏳ **${t.unlinked}** aguardando \`/ac login\``);
  if (licensedCount != null) extra.push(`🔑 **${licensedCount}** licenciado(s)`);
  extra.push(`🛡️ **${PROTECTIONS.length}** proteções disponíveis`);
  embed.addFields({ name: 'Resumo', value: extra.join('\n').slice(0, 1024) });

  embed.setFooter({ text: 'Atualiza automaticamente' }).setTimestamp(now);
  return embed;
}

module.exports = { panelData, buildPanelEmbed };
