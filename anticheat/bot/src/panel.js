'use strict';

const {
  EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, escapeMarkdown,
} = require('discord.js');
const { PROTECTIONS, CATEGORIES, ACTION_LABELS, byCategory } = require('./protections');

const COLORS = { ok: 0x2ecc71, off: 0x95a5a6, warn: 0xf1c40f, kick: 0xe67e22, ban: 0xe74c3c, info: 0x3498db };

function protectionLine(p, s) {
  const icon = s.enabled ? '🟢' : '🔴';
  const value = p.valueLabel ? ` · limite **${s.value}** ${p.valueLabel}` : '';
  return `${icon} **${p.name}** — ${ACTION_LABELS[s.action]} · tol. **${s.tolerance}**${value}`;
}

function serverLine(store, server) {
  const sv = store.getStatus(server);
  if (!sv.lastSeen) return '⚪ Servidor ainda não se conectou ao bot desde que ele iniciou.';
  const ago = `<t:${Math.floor(sv.lastSeen / 1000)}:R>`;
  if (!store.isServerOnline(server)) return `🔴 Servidor offline (último contato ${ago})`;
  const sync = sv.configVersion === server.version ? '✅ sincronizado' : '⏳ sincronizando';
  return `🟢 Online · ${sv.players}/${sv.maxPlayers} jogadores · ${sv.address}:${sv.port} · config v${server.version} ${sync}`;
}

function headerLines(store, server, guildId) {
  const enabled = PROTECTIONS.filter((p) => server.protections[p.key].enabled).length;
  const log = server.logChannels[guildId];
  return [
    `**Servidor:** ${escapeMarkdown(server.name)} (\`${server.id}\`)`,
    `**Anti-cheat:** ${server.global ? '🟢 LIGADO' : '🔴 DESLIGADO'} · ${enabled}/${PROTECTIONS.length} proteções ativas`,
    serverLine(store, server),
    `**Logs:** ${log ? `<#${log}>` : 'não definido (use `/ac logs`)'}`,
  ];
}

function buildPanelEmbed(store, server, guildId, catKey = CATEGORIES[0].key) {
  const cat = CATEGORIES.find((c) => c.key === catKey) || CATEGORIES[0];
  const summary = CATEGORIES.map((c) => {
    const list = byCategory.get(c.key);
    const on = list.filter((p) => server.protections[p.key].enabled).length;
    return `${c.emoji} ${c.name}: ${on}/${list.length}`;
  }).join(' · ');
  return new EmbedBuilder()
    .setTitle('🛡️ Drizzie City Anti-Cheat')
    .setColor(server.global ? COLORS.ok : COLORS.off)
    .setDescription([
      ...headerLines(store, server, guildId),
      '',
      summary,
      '',
      `__**${cat.emoji} ${cat.name}**__`,
      ...byCategory.get(cat.key).map((p) => protectionLine(p, server.protections[p.key])),
    ].join('\n'))
    .setFooter({ text: 'Escolha a categoria nos botões · use o menu para ligar/desligar · /ac acao, /ac tolerancia, /ac limite' });
}

function buildStatusEmbed(store, server, guildId) {
  const fields = CATEGORIES.map((c) => ({
    name: `${c.emoji} ${c.name}`,
    value: byCategory.get(c.key).map((p) => {
      const s = server.protections[p.key];
      return `${s.enabled ? '🟢' : '🔴'} ${p.name} · ${['aviso', 'kick', 'ban'][s.action]} · ${s.tolerance}${p.valueLabel ? ` · ${s.value}` : ''}`;
    }).join('\n').slice(0, 1024),
  }));
  return new EmbedBuilder()
    .setTitle('🛡️ Status do anti-cheat')
    .setColor(server.global ? COLORS.ok : COLORS.off)
    .setDescription(headerLines(store, server, guildId).join('\n'))
    .addFields(fields);
}

function buildPanelComponents(server, catKey = CATEGORIES[0].key) {
  const cat = CATEGORIES.find((c) => c.key === catKey) || CATEGORIES[0];
  const sid = server.id;

  const cats = new ActionRowBuilder().addComponents(CATEGORIES.map((c) => new ButtonBuilder()
    .setCustomId(`dcac:cat:${sid}:${c.key}`)
    .setLabel(c.name.split(' ')[0])
    .setEmoji(c.emoji)
    .setStyle(c.key === cat.key ? ButtonStyle.Primary : ButtonStyle.Secondary)));

  const list = byCategory.get(cat.key);
  const select = new StringSelectMenuBuilder()
    .setCustomId(`dcac:toggle:${sid}:${cat.key}`)
    .setPlaceholder(`Ligar/desligar: ${cat.name}…`)
    .setMinValues(1)
    .setMaxValues(list.length)
    .addOptions(list.map((p) => {
      const on = server.protections[p.key].enabled;
      return {
        label: p.name,
        value: p.key,
        description: `${on ? 'Ativa' : 'Desativada'} — ${p.desc}`.slice(0, 100),
        emoji: on ? '🟢' : '🔴',
      };
    }));

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId(`dcac:global:${sid}:${cat.key}`)
      .setLabel(server.global ? 'Desligar anti-cheat' : 'Ligar anti-cheat')
      .setStyle(server.global ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder().setCustomId(`dcac:allon:${sid}:${cat.key}`).setLabel('Ativar categoria').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId(`dcac:alloff:${sid}:${cat.key}`).setLabel('Desativar categoria').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId(`dcac:refresh:${sid}:${cat.key}`).setLabel('Atualizar').setEmoji('🔄').setStyle(ButtonStyle.Secondary),
  );

  return [cats, new ActionRowBuilder().addComponents(select), buttons];
}

function buildPanel(store, server, guildId, catKey) {
  return { embeds: [buildPanelEmbed(store, server, guildId, catKey)], components: buildPanelComponents(server, catKey) };
}

function buildDetectionEmbed(server, det, prot) {
  const color = [COLORS.warn, COLORS.kick, COLORS.ban][det.action];
  const title = ['⚠️ Suspeita detectada', '👢 Jogador kickado', '🔨 Jogador banido'][det.action];
  return new EmbedBuilder()
    .setTitle(`${title} — ${prot.name}`)
    .setColor(color)
    .addFields(
      { name: 'Jogador', value: det.playerId >= 0 ? `${escapeMarkdown(det.name)} (ID ${det.playerId})` : escapeMarkdown(det.name), inline: true },
      { name: 'Detecções', value: `${det.hits}/${det.tolerance}`, inline: true },
      { name: 'IP', value: det.ip ? `||${det.ip}||` : '-', inline: true },
      { name: 'Detalhe', value: escapeMarkdown(det.detail) || '-' },
    )
    .setFooter({ text: `${server.name} · ${server.id}`.slice(0, 2048) })
    .setTimestamp(det.time);
}

module.exports = { buildPanel, buildPanelEmbed, buildStatusEmbed, buildDetectionEmbed, COLORS };
