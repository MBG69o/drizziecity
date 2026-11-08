'use strict';

const {
  EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonBuilder, ButtonStyle, escapeMarkdown,
} = require('discord.js');
const { PROTECTIONS, ACTION_LABELS } = require('./protections');

const COLORS = { ok: 0x2ecc71, off: 0x95a5a6, warn: 0xf1c40f, kick: 0xe67e22, ban: 0xe74c3c };

function protectionLine(p, s) {
  const icon = s.enabled ? '🟢' : '🔴';
  const value = p.valueLabel ? ` · limite **${s.value}** ${p.valueLabel}` : '';
  return `${icon} **${p.name}** — ${ACTION_LABELS[s.action]} · tolerância **${s.tolerance}**${value}`;
}

function serverLine(store) {
  const sv = store.server;
  if (!sv.lastSeen) return '⚪ Servidor ainda não se conectou ao bot.';
  const ago = `<t:${Math.floor(sv.lastSeen / 1000)}:R>`;
  if (!store.isServerOnline()) return `🔴 Servidor offline (último contato ${ago})`;
  const sync = sv.configVersion === store.state.version ? '✅ sincronizado' : '⏳ aguardando sincronizar';
  return `🟢 Servidor online · ${sv.players}/${sv.maxPlayers} jogadores · config v${store.state.version} ${sync} (${ago})`;
}

function buildPanelEmbed(store) {
  const { state } = store;
  const enabledCount = PROTECTIONS.filter((p) => state.protections[p.key].enabled).length;
  return new EmbedBuilder()
    .setTitle('🛡️ Drizzie City Anti-Cheat')
    .setColor(state.global ? COLORS.ok : COLORS.off)
    .setDescription([
      `**Anti-cheat:** ${state.global ? '🟢 LIGADO' : '🔴 DESLIGADO'} · ${enabledCount}/${PROTECTIONS.length} proteções ativas`,
      serverLine(store),
      `**Logs:** ${state.logChannelId ? `<#${state.logChannelId}>` : 'não definido (use `/ac logs`)'}`,
      '',
      ...PROTECTIONS.map((p) => protectionLine(p, state.protections[p.key])),
    ].join('\n'))
    .setFooter({ text: 'Selecione proteções no menu abaixo para ligar/desligar · /ac acao, /ac tolerancia, /ac limite' });
}

function buildPanelComponents(store) {
  const { state } = store;
  const select = new StringSelectMenuBuilder()
    .setCustomId('dcac:toggle')
    .setPlaceholder('Ligar/desligar proteções…')
    .setMinValues(1)
    .setMaxValues(PROTECTIONS.length)
    .addOptions(PROTECTIONS.map((p) => {
      const on = state.protections[p.key].enabled;
      return {
        label: p.name,
        value: p.key,
        description: `${on ? 'Ativa' : 'Desativada'} — clique para ${on ? 'desativar' : 'ativar'}`.slice(0, 100),
        emoji: on ? '🟢' : '🔴',
      };
    }));

  const buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('dcac:global')
      .setLabel(state.global ? 'Desligar anti-cheat' : 'Ligar anti-cheat')
      .setStyle(state.global ? ButtonStyle.Danger : ButtonStyle.Success),
    new ButtonBuilder().setCustomId('dcac:all_on').setLabel('Ativar todas').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('dcac:all_off').setLabel('Desativar todas').setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId('dcac:refresh').setLabel('Atualizar').setEmoji('🔄').setStyle(ButtonStyle.Primary),
  );

  return [new ActionRowBuilder().addComponents(select), buttons];
}

function buildPanel(store) {
  return { embeds: [buildPanelEmbed(store)], components: buildPanelComponents(store) };
}

function buildDetectionEmbed(det, prot) {
  const color = [COLORS.warn, COLORS.kick, COLORS.ban][det.action];
  const title = ['⚠️ Suspeita detectada', '👢 Jogador kickado', '🔨 Jogador banido'][det.action];
  return new EmbedBuilder()
    .setTitle(`${title} — ${prot.name}`)
    .setColor(color)
    .addFields(
      { name: 'Jogador', value: `${escapeMarkdown(det.name)} (ID ${det.playerId})`, inline: true },
      { name: 'Detecções', value: `${det.hits}/${det.tolerance}`, inline: true },
      { name: 'IP', value: det.ip ? `||${det.ip}||` : '-', inline: true },
      { name: 'Detalhe', value: escapeMarkdown(det.detail) || '-' },
    )
    .setTimestamp(det.time);
}

module.exports = { buildPanel, buildPanelEmbed, buildDetectionEmbed, COLORS };
