'use strict';

const {
  Client, GatewayIntentBits, Events, MessageFlags, EmbedBuilder, escapeMarkdown,
} = require('discord.js');
const { commands } = require('./commands');
const { PROTECTIONS, ACTIONS, ACTION_LABELS, byKey, byId, defaultProtectionState } = require('./protections');
const { buildPanel, buildPanelEmbed, buildDetectionEmbed, COLORS } = require('./panel');
const { isValidNick, isValidIPv4Pattern, sanitizeGameText } = require('./config-format');

const MAX_WHITELIST = 64;

function createDiscordBot({ store, permissions, token, guildId, logger = console }) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const logQueue = [];

  // ------------------------------------------------------------------ logs
  function enqueueDetection(det) {
    const prot = byId.get(det.code);
    if (!prot) return;
    logQueue.push(buildDetectionEmbed(det, prot));
    if (logQueue.length > 200) logQueue.splice(0, logQueue.length - 200);
  }

  async function flushLogs() {
    if (!logQueue.length || !client.isReady() || !store.state.logChannelId) return;
    const embeds = logQueue.splice(0, 10); // até 10 embeds por mensagem
    try {
      const channel = await client.channels.fetch(store.state.logChannelId);
      if (channel && channel.isTextBased()) await channel.send({ embeds });
    } catch (err) {
      logger.error('[discord] não foi possível enviar logs:', err.message);
    }
  }
  setInterval(flushLogs, 2500).unref();

  // ------------------------------------------------------------- helpers
  const reply = (interaction, content, extra = {}) => interaction.reply({ content, flags: MessageFlags.Ephemeral, ...extra });

  function setEnabled(key, enabled) {
    store.update((s) => {
      const keys = key === 'todas' ? PROTECTIONS.map((p) => p.key) : [key];
      for (const k of keys) s.protections[k].enabled = enabled;
    });
  }

  function protName(key) {
    return key === 'todas' ? 'Todas as proteções' : byKey.get(key).name;
  }

  function forEachKey(key, fn) {
    const keys = key === 'todas' ? PROTECTIONS.map((p) => p.key) : [key];
    store.update((s) => { for (const k of keys) fn(s.protections[k], k); });
  }

  function audit(interaction, text) {
    logger.log(`[audit] ${interaction.user.tag} (${interaction.user.id}): ${text}`);
  }

  // ---------------------------------------------------------- handlers
  async function handleCommand(interaction) {
    if (!permissions.isAllowed(interaction)) {
      return reply(interaction, '⛔ Você não tem permissão para configurar o anti-cheat.');
    }
    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();

    if (group === 'imune') return handleWhitelist(interaction, sub);
    if (group === 'donos') return handleOwners(interaction, sub);

    switch (sub) {
      case 'painel':
        return interaction.reply(buildPanel(store));

      case 'status':
        return interaction.reply({ embeds: [buildPanelEmbed(store)], flags: MessageFlags.Ephemeral });

      case 'ativar':
      case 'desativar': {
        const key = interaction.options.getString('protecao', true);
        const on = sub === 'ativar';
        setEnabled(key, on);
        audit(interaction, `${sub} ${key}`);
        return reply(interaction, `${on ? '🟢' : '🔴'} **${protName(key)}** ${on ? 'ativada' : 'desativada'}. O servidor aplica em até ${store.state.pollSeconds}s.`);
      }

      case 'acao': {
        const key = interaction.options.getString('protecao', true);
        const tipo = interaction.options.getString('tipo', true);
        const action = ACTIONS.indexOf(tipo);
        forEachKey(key, (p) => { p.action = action; });
        audit(interaction, `acao ${key} = ${tipo}`);
        return reply(interaction, `✅ **${protName(key)}**: punição definida para ${ACTION_LABELS[action]}.`);
      }

      case 'tolerancia': {
        const key = interaction.options.getString('protecao', true);
        const qtd = interaction.options.getInteger('quantidade', true);
        forEachKey(key, (p) => { p.tolerance = qtd; });
        audit(interaction, `tolerancia ${key} = ${qtd}`);
        return reply(interaction, `✅ **${protName(key)}**: pune após **${qtd}** detecção(ões) em 60s.`);
      }

      case 'limite': {
        const key = interaction.options.getString('protecao', true);
        const valor = interaction.options.getInteger('valor', true);
        const prot = byKey.get(key);
        if (!prot || !prot.valueLabel) return reply(interaction, '❌ Essa proteção não tem limite configurável.');
        store.update((s) => { s.protections[key].value = valor; });
        audit(interaction, `limite ${key} = ${valor}`);
        return reply(interaction, `✅ **${prot.name}**: limite definido para **${valor}** ${prot.valueLabel}.`);
      }

      case 'global': {
        const ativo = interaction.options.getBoolean('ativo', true);
        store.update((s) => { s.global = ativo; });
        audit(interaction, `global = ${ativo}`);
        return reply(interaction, ativo ? '🟢 Anti-cheat **LIGADO**.' : '🔴 Anti-cheat **DESLIGADO** (nenhuma proteção será aplicada).');
      }

      case 'intervalo': {
        const seg = interaction.options.getInteger('segundos', true);
        store.update((s) => { s.pollSeconds = seg; });
        audit(interaction, `intervalo = ${seg}`);
        return reply(interaction, `✅ O servidor vai buscar a configuração a cada **${seg}s**.`);
      }

      case 'logs': {
        const channel = interaction.options.getChannel('canal', true);
        store.updateLocal((s) => { s.logChannelId = channel.id; });
        audit(interaction, `logs = ${channel.id}`);
        return reply(interaction, `✅ As detecções serão enviadas em <#${channel.id}>. Garanta que o bot pode enviar mensagens e embeds lá.`);
      }

      case 'historico': {
        const nick = interaction.options.getString('nick');
        let list = store.history;
        if (nick) list = list.filter((d) => d.name.toLowerCase() === nick.toLowerCase());
        list = list.slice(-15).reverse();
        if (!list.length) return reply(interaction, nick ? `Nenhuma detecção para **${escapeMarkdown(nick)}**.` : 'Nenhuma detecção registrada ainda.');
        const lines = list.map((d) => `<t:${Math.floor(d.time / 1000)}:R> **${escapeMarkdown(d.name)}** (${d.playerId}) — ${byId.get(d.code)?.name ?? d.code} · ${ACTION_LABELS[d.action]} · ${escapeMarkdown(d.detail)}`);
        const embed = new EmbedBuilder().setTitle('📜 Últimas detecções').setColor(COLORS.warn).setDescription(lines.join('\n').slice(0, 4000));
        return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
      }

      case 'restaurar': {
        store.update((s) => { s.protections = defaultProtectionState(); s.global = true; });
        audit(interaction, 'restaurar padrões');
        return reply(interaction, '♻️ Todas as proteções voltaram para a configuração padrão.');
      }

      case 'desbanir': {
        const ip = interaction.options.getString('ip', true).trim();
        if (!isValidIPv4Pattern(ip)) return reply(interaction, '❌ IP inválido. Use o formato 177.10.20.30 ou 177.10.*.*');
        store.queueCommand('unbanip', ip);
        audit(interaction, `desbanir ${ip}`);
        return reply(interaction, `✅ Pedido de desban de **${ip}** enviado. ${store.isServerOnline() ? '' : '⚠️ O servidor está offline; será executado quando ele voltar (até 10 min).'}`);
      }

      case 'kick': {
        const id = interaction.options.getInteger('id', true);
        if (!store.isServerOnline()) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand('kick', id);
        audit(interaction, `kick ${id}`);
        return reply(interaction, `👢 Pedido de kick do ID **${id}** enviado.`);
      }

      case 'anunciar': {
        const msg = sanitizeGameText(interaction.options.getString('mensagem', true));
        if (!msg) return reply(interaction, '❌ Mensagem vazia após remover caracteres inválidos.');
        if (!store.isServerOnline()) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand('aviso', msg);
        audit(interaction, `anunciar ${msg}`);
        return reply(interaction, `📢 Mensagem enviada: \`${msg.replace(/_/g, ' ')}\``);
      }

      default:
        return reply(interaction, 'Comando desconhecido.');
    }
  }

  async function handleWhitelist(interaction, sub) {
    if (sub === 'listar') {
      const list = store.state.whitelist;
      return reply(interaction, list.length ? `🛡️ Imunes (${list.length}): ${list.map((n) => `\`${n}\``).join(', ')}` : 'Nenhum jogador imune.');
    }
    const nick = interaction.options.getString('nick', true).trim();
    if (!isValidNick(nick)) return reply(interaction, '❌ Nick inválido (3-24 caracteres: letras, números e _[]().$@=).');
    const exists = store.state.whitelist.some((n) => n.toLowerCase() === nick.toLowerCase());
    if (sub === 'adicionar') {
      if (exists) return reply(interaction, 'Esse nick já está imune.');
      if (store.state.whitelist.length >= MAX_WHITELIST) return reply(interaction, `❌ Limite de ${MAX_WHITELIST} imunes atingido.`);
      store.update((s) => { s.whitelist.push(nick); });
      audit(interaction, `imune + ${nick}`);
      return reply(interaction, `🛡️ **${escapeMarkdown(nick)}** agora é ignorado pelo anti-cheat.`);
    }
    if (!exists) return reply(interaction, 'Esse nick não está na lista.');
    store.update((s) => { s.whitelist = s.whitelist.filter((n) => n.toLowerCase() !== nick.toLowerCase()); });
    audit(interaction, `imune - ${nick}`);
    return reply(interaction, `✅ **${escapeMarkdown(nick)}** removido dos imunes.`);
  }

  async function handleOwners(interaction, sub) {
    if (sub === 'listar') {
      const { owners, roles } = store.state;
      const supers = permissions.ownerIds.map((id) => `<@${id}>`);
      return reply(interaction, [
        `👑 **Super donos (.env):** ${supers.join(', ') || 'nenhum'} + dono do servidor`,
        `🔑 **Donos:** ${owners.map((id) => `<@${id}>`).join(', ') || 'nenhum'}`,
        `🎭 **Cargos:** ${[...roles, ...permissions.roleIds].map((id) => `<@&${id}>`).join(', ') || 'nenhum'}`,
      ].join('\n'), { allowedMentions: { parse: [] } });
    }
    if (!permissions.isSuperOwner(interaction)) return reply(interaction, '⛔ Apenas super donos podem alterar quem tem permissão.');
    const user = interaction.options.getUser('usuario');
    const role = interaction.options.getRole('cargo');
    if (!user && !role) return reply(interaction, 'Informe um **usuario** ou um **cargo**.');
    const add = sub === 'adicionar';
    store.updateLocal((s) => {
      if (user) s.owners = add ? [...new Set([...s.owners, user.id])] : s.owners.filter((id) => id !== user.id);
      if (role) s.roles = add ? [...new Set([...s.roles, role.id])] : s.roles.filter((id) => id !== role.id);
    });
    audit(interaction, `donos ${sub} user=${user?.id ?? '-'} role=${role?.id ?? '-'}`);
    const who = [user && `<@${user.id}>`, role && `<@&${role.id}>`].filter(Boolean).join(' e ');
    return reply(interaction, `✅ ${who} ${add ? 'agora pode' : 'não pode mais'} configurar o anti-cheat.`, { allowedMentions: { parse: [] } });
  }

  async function handleComponent(interaction) {
    if (!permissions.isAllowed(interaction)) {
      return reply(interaction, '⛔ Você não tem permissão para configurar o anti-cheat.');
    }
    const id = interaction.customId;
    if (id === 'dcac:toggle' && interaction.isStringSelectMenu()) {
      const keys = interaction.values.filter((k) => byKey.has(k));
      store.update((s) => { for (const k of keys) s.protections[k].enabled = !s.protections[k].enabled; });
      audit(interaction, `painel alternar ${keys.join(',')}`);
    } else if (id === 'dcac:global') {
      store.update((s) => { s.global = !s.global; });
      audit(interaction, `painel global = ${store.state.global}`);
    } else if (id === 'dcac:all_on' || id === 'dcac:all_off') {
      setEnabled('todas', id === 'dcac:all_on');
      audit(interaction, `painel ${id}`);
    } else if (id !== 'dcac:refresh') {
      return undefined;
    }
    return interaction.update(buildPanel(store));
  }

  client.on(Events.InteractionCreate, async (interaction) => {
    try {
      if (interaction.isChatInputCommand() && interaction.commandName === 'ac') return await handleCommand(interaction);
      if ((interaction.isStringSelectMenu() || interaction.isButton()) && interaction.customId.startsWith('dcac:')) {
        return await handleComponent(interaction);
      }
    } catch (err) {
      logger.error('[discord] erro na interação', err);
      const payload = { content: '❌ Ocorreu um erro ao processar o comando.', flags: MessageFlags.Ephemeral };
      if (interaction.replied || interaction.deferred) await interaction.followUp(payload).catch(() => {});
      else if (interaction.isRepliable()) await interaction.reply(payload).catch(() => {});
    }
    return undefined;
  });

  client.once(Events.ClientReady, async (c) => {
    logger.log(`[discord] conectado como ${c.user.tag}`);
    try {
      if (guildId) {
        const guild = await c.guilds.fetch(guildId);
        await guild.commands.set(commands);
        logger.log(`[discord] comandos registrados no servidor ${guild.name}`);
      } else {
        await c.application.commands.set(commands);
        logger.log('[discord] comandos globais registrados (podem levar até 1h para aparecer)');
      }
    } catch (err) {
      logger.error('[discord] falha ao registrar comandos', err);
    }
  });

  return {
    client,
    enqueueDetection,
    start: () => client.login(token),
  };
}

module.exports = { createDiscordBot };
