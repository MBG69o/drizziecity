'use strict';

const {
  Client, GatewayIntentBits, Events, MessageFlags, EmbedBuilder, escapeMarkdown,
} = require('discord.js');
const { commands } = require('./commands');
const {
  PROTECTIONS, CATEGORIES, ACTIONS, ACTION_LABELS, byKey, byId, byCategory, defaultProtectionState,
} = require('./protections');
const { buildPanel, buildStatusEmbed, buildDetectionEmbed, COLORS } = require('./panel');
const { isValidNick, isValidIPv4Pattern, sanitizeGameText } = require('./config-format');
const { normalizeId } = require('./store');

const MAX_WHITELIST = 64;
const LOGIN_MAX_FAILS = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
// subcomandos que funcionam sem servidor ativo
const NO_SERVER_SUBS = new Set(['login', 'servidores', 'usar']);
// subcomandos/grupos que exigem ser dono do servidor
const OWNER_SUBS = new Set(['logout', 'novachave', 'token']);

function createDiscordBot({ store, permissions, token, guildId, logger = console }) {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const logQueues = new Map(); // channelId -> [embeds]
  const loginFails = new Map(); // userId -> [timestamps]

  // ------------------------------------------------------------------ logs
  function enqueueDetection(server, det) {
    const prot = byId.get(det.code);
    if (!prot) return;
    const embed = buildDetectionEmbed(server, det, prot);
    for (const channelId of Object.values(server.logChannels)) {
      const q = logQueues.get(channelId) || [];
      q.push(embed);
      if (q.length > 200) q.splice(0, q.length - 200);
      logQueues.set(channelId, q);
    }
  }

  async function flushLogs() {
    if (!client.isReady()) return;
    for (const [channelId, q] of logQueues) {
      if (!q.length) continue;
      const embeds = q.splice(0, 10); // até 10 embeds por mensagem
      try {
        const channel = await client.channels.fetch(channelId);
        if (channel && channel.isTextBased()) await channel.send({ embeds });
      } catch (err) {
        logger.error(`[discord] não foi possível enviar logs em ${channelId}:`, err.message);
        if (err.code === 10003 || err.code === 50001) logQueues.delete(channelId); // canal apagado / sem acesso
      }
    }
  }
  setInterval(flushLogs, 2500).unref();

  // ------------------------------------------------------------- helpers
  const reply = (interaction, content, extra = {}) => interaction.reply({
    content, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] }, ...extra,
  });

  const allKeys = () => PROTECTIONS.map((p) => p.key);

  function resolveProtection(key, { allowAll = true, needValue = false } = {}) {
    if (allowAll && key === 'todas') return { keys: allKeys(), name: 'Todas as proteções' };
    if (allowAll && key.startsWith('cat:')) {
      const cat = CATEGORIES.find((c) => `cat:${c.key}` === key);
      if (cat) return { keys: byCategory.get(cat.key).map((p) => p.key), name: `Categoria ${cat.name}` };
    }
    const prot = byKey.get(key);
    if (!prot || (needValue && !prot.valueLabel)) return null;
    return { keys: [prot.key], name: prot.name, prot };
  }

  function audit(interaction, server, text) {
    logger.log(`[audit] ${server ? server.id : '-'} ${interaction.user.tag} (${interaction.user.id}): ${text}`);
  }

  function loginBlocked(userId) {
    const now = Date.now();
    const list = (loginFails.get(userId) || []).filter((t) => now - t < LOGIN_WINDOW_MS);
    loginFails.set(userId, list);
    return list.length >= LOGIN_MAX_FAILS;
  }

  function serverLabel(server) {
    return `**${escapeMarkdown(server.name)}** (\`${server.id}\`)`;
  }

  // ------------------------------------------------------- autocomplete
  async function handleAutocomplete(interaction) {
    const focused = interaction.options.getFocused(true);
    const q = String(focused.value || '').toLowerCase();
    let choices = [];
    if (focused.name === 'protecao') {
      const sub = interaction.options.getSubcommand();
      if (sub === 'limite') {
        choices = PROTECTIONS.filter((p) => p.valueLabel).map((p) => ({ name: `${p.name} (${p.valueLabel})`, value: p.key }));
      } else {
        choices = [
          { name: '⭐ Todas as proteções', value: 'todas' },
          ...CATEGORIES.map((c) => ({ name: `${c.emoji} Categoria: ${c.name}`, value: `cat:${c.key}` })),
          ...PROTECTIONS.map((p) => ({ name: p.name, value: p.key })),
        ];
      }
      choices = choices.filter((c) => c.name.toLowerCase().includes(q) || c.value.includes(q));
    } else if (focused.name === 'id' && interaction.guildId) {
      choices = store.getGuild(interaction.guildId).servers
        .map((id) => store.getServer(id)).filter(Boolean)
        .map((s) => ({ name: `${s.name} (${s.id})`.slice(0, 100), value: s.id }))
        .filter((c) => c.name.toLowerCase().includes(q));
    }
    return interaction.respond(choices.slice(0, 25));
  }

  // ---------------------------------------------------- servidores (login)
  async function handleServerCommands(interaction, sub) {
    const gid = interaction.guildId;

    if (sub === 'login') {
      if (loginBlocked(interaction.user.id)) return reply(interaction, '⛔ Muitas tentativas erradas. Aguarde 10 minutos.');
      const server = store.getServer(interaction.options.getString('id', true));
      const key = interaction.options.getString('chave', true);
      if (!server || !store.checkLoginKey(server, key)) {
        loginFails.get(interaction.user.id).push(Date.now());
        audit(interaction, server, 'login FALHOU');
        return reply(interaction, '❌ ID ou chave inválidos. Confira no console do servidor (digite `dcac` no console).');
      }
      store.linkGuild(gid, server);
      store.updateServer(server, (s) => {
        if (!s.owners.includes(interaction.user.id)) s.owners.push(interaction.user.id);
      }, { bump: false });
      audit(interaction, server, 'login');
      return reply(interaction, [
        `✅ Login feito! ${serverLabel(server)} agora está vinculado a este Discord e é o servidor ativo.`,
        'Você virou **dono** desse servidor no anti-cheat.',
        '',
        'Próximos passos: `/ac logs canal:#canal` para receber as detecções e `/ac painel` para configurar as proteções.',
      ].join('\n'));
    }

    if (sub === 'servidores') {
      const g = store.getGuild(gid);
      if (!g.servers.length) return reply(interaction, 'Nenhum servidor vinculado. Use `/ac login id:<ID> chave:<CHAVE>` com os dados do console do servidor.');
      const lines = g.servers.map((id) => store.getServer(id)).filter(Boolean).map((s) => {
        const online = store.isServerOnline(s) ? '🟢' : '🔴';
        const active = g.active === s.id ? ' ⬅️ **ativo**' : '';
        return `${online} ${serverLabel(s)}${active}`;
      });
      const embed = new EmbedBuilder().setTitle('🖥️ Servidores vinculados').setColor(COLORS.info).setDescription(lines.join('\n'))
        .setFooter({ text: 'Use /ac usar id:<ID> para trocar o servidor ativo' });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }

    if (sub === 'usar') {
      const server = store.getServer(interaction.options.getString('id', true));
      if (!server || !store.setActive(gid, server)) return reply(interaction, '❌ Esse servidor não está vinculado a este Discord. Use `/ac login`.');
      return reply(interaction, `✅ Servidor ativo: ${serverLabel(server)}.`);
    }
    return undefined;
  }

  // ---------------------------------------------------------- handlers
  async function handleCommand(interaction) {
    if (!interaction.guildId) return reply(interaction, 'Use este comando dentro de um servidor do Discord.');
    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();

    if (!group && NO_SERVER_SUBS.has(sub)) return handleServerCommands(interaction, sub);

    const server = store.activeServer(interaction.guildId);
    if (!server) return reply(interaction, '❌ Nenhum servidor vinculado a este Discord. Use `/ac login id:<ID> chave:<CHAVE>` (o ID e a chave aparecem no console do servidor).');
    if (!permissions.isAllowed(server, interaction)) {
      return reply(interaction, `⛔ Você não tem permissão para configurar ${serverLabel(server)}. Peça a um dono para usar \`/ac donos adicionar\`.`);
    }
    if (!group && OWNER_SUBS.has(sub) && !permissions.isOwner(server, interaction)) {
      return reply(interaction, '⛔ Apenas donos do servidor (quem fez `/ac login` com a chave) podem usar esse comando.');
    }

    if (group === 'imune') return handleWhitelist(interaction, server, sub);
    if (group === 'donos') return handleOwners(interaction, server, sub);

    const pollMsg = `O servidor aplica em até ${server.pollSeconds}s.`;

    switch (sub) {
      case 'logout': {
        store.unlinkGuild(interaction.guildId, server);
        audit(interaction, server, 'logout');
        return reply(interaction, `✅ ${serverLabel(server)} foi desvinculado deste Discord. As configurações continuam salvas.`);
      }

      case 'novachave': {
        const key = store.rotateLoginKey(server);
        audit(interaction, server, 'nova chave de login');
        return reply(interaction, `🔑 Nova chave de login de ${serverLabel(server)}: \`${key}\`\nA chave antiga parou de funcionar. Quem já fez login continua com acesso; use \`/ac donos remover\` para tirar alguém.`);
      }

      case 'token': {
        const tok = store.rotateToken(server);
        audit(interaction, server, 'novo token da API');
        return reply(interaction, [
          `🔐 Novo token da API de ${serverLabel(server)} gerado. **O servidor do jogo vai parar de se conectar até você atualizar o token.**`,
          '',
          'Edite `scriptfiles/dcac_servidor.cfg` no servidor e deixe assim:',
          '```',
          `id=${server.id}`,
          `token=${tok}`,
          '```',
          'Depois reinicie o gamemode. **Nunca compartilhe esse token.**',
        ].join('\n'));
      }

      case 'nome': {
        const nome = (interaction.options.getString('nome') || '').trim();
        store.updateServer(server, (s) => {
          s.customName = Boolean(nome);
          if (nome) s.name = nome;
        }, { bump: false });
        return reply(interaction, nome ? `✅ Nome definido: **${escapeMarkdown(nome)}**.` : '✅ O nome volta a ser o hostname do servidor.');
      }

      case 'painel':
        return interaction.reply(buildPanel(store, server, interaction.guildId));

      case 'status':
        return interaction.reply({ embeds: [buildStatusEmbed(store, server, interaction.guildId)], flags: MessageFlags.Ephemeral });

      case 'ativar':
      case 'desativar': {
        const r = resolveProtection(interaction.options.getString('protecao', true));
        if (!r) return reply(interaction, '❌ Proteção inválida. Escolha uma opção da lista.');
        const on = sub === 'ativar';
        store.updateServer(server, (s) => { for (const k of r.keys) s.protections[k].enabled = on; });
        audit(interaction, server, `${sub} ${r.keys.join(',')}`);
        return reply(interaction, `${on ? '🟢' : '🔴'} **${r.name}** ${on ? 'ativada(s)' : 'desativada(s)'}. ${pollMsg}`);
      }

      case 'acao': {
        const r = resolveProtection(interaction.options.getString('protecao', true));
        if (!r) return reply(interaction, '❌ Proteção inválida. Escolha uma opção da lista.');
        const action = ACTIONS.indexOf(interaction.options.getString('tipo', true));
        store.updateServer(server, (s) => { for (const k of r.keys) s.protections[k].action = action; });
        audit(interaction, server, `acao ${r.keys.join(',')} = ${action}`);
        return reply(interaction, `✅ **${r.name}**: punição definida para ${ACTION_LABELS[action]}. ${pollMsg}`);
      }

      case 'tolerancia': {
        const r = resolveProtection(interaction.options.getString('protecao', true));
        if (!r) return reply(interaction, '❌ Proteção inválida. Escolha uma opção da lista.');
        const qtd = interaction.options.getInteger('quantidade', true);
        store.updateServer(server, (s) => { for (const k of r.keys) s.protections[k].tolerance = qtd; });
        audit(interaction, server, `tolerancia ${r.keys.join(',')} = ${qtd}`);
        return reply(interaction, `✅ **${r.name}**: pune após **${qtd}** detecção(ões) em 60s. ${pollMsg}`);
      }

      case 'limite': {
        const r = resolveProtection(interaction.options.getString('protecao', true), { allowAll: false, needValue: true });
        if (!r) return reply(interaction, '❌ Essa proteção não tem limite configurável.');
        const valor = interaction.options.getInteger('valor', true);
        store.updateServer(server, (s) => { s.protections[r.prot.key].value = valor; });
        audit(interaction, server, `limite ${r.prot.key} = ${valor}`);
        return reply(interaction, `✅ **${r.prot.name}**: limite definido para **${valor}** ${r.prot.valueLabel}. ${pollMsg}`);
      }

      case 'global': {
        const ativo = interaction.options.getBoolean('ativo', true);
        store.updateServer(server, (s) => { s.global = ativo; });
        audit(interaction, server, `global = ${ativo}`);
        return reply(interaction, ativo ? `🟢 Anti-cheat **LIGADO** em ${serverLabel(server)}.` : `🔴 Anti-cheat **DESLIGADO** em ${serverLabel(server)}.`);
      }

      case 'intervalo': {
        const seg = interaction.options.getInteger('segundos', true);
        store.updateServer(server, (s) => { s.pollSeconds = seg; });
        audit(interaction, server, `intervalo = ${seg}`);
        return reply(interaction, `✅ O servidor vai buscar a configuração a cada **${seg}s**.`);
      }

      case 'logs': {
        const channel = interaction.options.getChannel('canal', true);
        store.updateServer(server, (s) => { s.logChannels[interaction.guildId] = channel.id; }, { bump: false });
        audit(interaction, server, `logs = ${channel.id}`);
        return reply(interaction, `✅ As detecções de ${serverLabel(server)} serão enviadas em <#${channel.id}>. Garanta que o bot pode enviar mensagens e embeds lá.`);
      }

      case 'historico': {
        const nick = interaction.options.getString('nick');
        let list = store.getHistory(server);
        if (nick) list = list.filter((d) => d.name.toLowerCase() === nick.toLowerCase());
        list = list.slice(-15).reverse();
        if (!list.length) return reply(interaction, nick ? `Nenhuma detecção para **${escapeMarkdown(nick)}**.` : 'Nenhuma detecção registrada ainda.');
        const lines = list.map((d) => `<t:${Math.floor(d.time / 1000)}:R> **${escapeMarkdown(d.name)}** (${d.playerId}) — ${byId.get(d.code)?.name ?? d.code} · ${ACTION_LABELS[d.action]} · ${escapeMarkdown(d.detail)}`);
        const embed = new EmbedBuilder().setTitle(`📜 Últimas detecções — ${server.name}`.slice(0, 256)).setColor(COLORS.warn).setDescription(lines.join('\n').slice(0, 4000));
        return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
      }

      case 'restaurar': {
        store.updateServer(server, (s) => { s.protections = defaultProtectionState(); s.global = true; });
        audit(interaction, server, 'restaurar padrões');
        return reply(interaction, '♻️ Todas as proteções voltaram para a configuração padrão.');
      }

      case 'desbanir': {
        const ip = interaction.options.getString('ip', true).trim();
        if (!isValidIPv4Pattern(ip)) return reply(interaction, '❌ IP inválido. Use o formato 177.10.20.30 ou 177.10.*.*');
        store.queueCommand(server, 'unbanip', ip);
        audit(interaction, server, `desbanir ${ip}`);
        return reply(interaction, `✅ Pedido de desban de **${ip}** enviado. ${store.isServerOnline(server) ? '' : '⚠️ O servidor está offline; será executado quando ele voltar (até 10 min).'}`);
      }

      case 'kick': {
        const id = interaction.options.getInteger('id', true);
        if (!store.isServerOnline(server)) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand(server, 'kick', id);
        audit(interaction, server, `kick ${id}`);
        return reply(interaction, `👢 Pedido de kick do ID **${id}** enviado.`);
      }

      case 'anunciar': {
        const msg = sanitizeGameText(interaction.options.getString('mensagem', true));
        if (!msg) return reply(interaction, '❌ Mensagem vazia após remover caracteres inválidos.');
        if (!store.isServerOnline(server)) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand(server, 'aviso', msg);
        audit(interaction, server, `anunciar ${msg}`);
        return reply(interaction, `📢 Mensagem enviada: \`${msg.replace(/_/g, ' ')}\``);
      }

      default:
        return reply(interaction, 'Comando desconhecido.');
    }
  }

  async function handleWhitelist(interaction, server, sub) {
    if (sub === 'listar') {
      const list = server.whitelist;
      return reply(interaction, list.length ? `🛡️ Imunes (${list.length}): ${list.map((n) => `\`${n}\``).join(', ')}` : 'Nenhum jogador imune.');
    }
    const nick = interaction.options.getString('nick', true).trim();
    if (!isValidNick(nick)) return reply(interaction, '❌ Nick inválido (3-24 caracteres: letras, números e _[]().$@=).');
    const exists = server.whitelist.some((n) => n.toLowerCase() === nick.toLowerCase());
    if (sub === 'adicionar') {
      if (exists) return reply(interaction, 'Esse nick já está imune.');
      if (server.whitelist.length >= MAX_WHITELIST) return reply(interaction, `❌ Limite de ${MAX_WHITELIST} imunes atingido.`);
      store.updateServer(server, (s) => { s.whitelist.push(nick); });
      audit(interaction, server, `imune + ${nick}`);
      return reply(interaction, `🛡️ **${escapeMarkdown(nick)}** agora é ignorado pelo anti-cheat.`);
    }
    if (!exists) return reply(interaction, 'Esse nick não está na lista.');
    store.updateServer(server, (s) => { s.whitelist = s.whitelist.filter((n) => n.toLowerCase() !== nick.toLowerCase()); });
    audit(interaction, server, `imune - ${nick}`);
    return reply(interaction, `✅ **${escapeMarkdown(nick)}** removido dos imunes.`);
  }

  async function handleOwners(interaction, server, sub) {
    if (sub === 'listar') {
      return reply(interaction, [
        `🖥️ ${serverLabel(server)}`,
        `👑 **Donos (fizeram login):** ${server.owners.map((id) => `<@${id}>`).join(', ') || 'nenhum'}`,
        `🔑 **Admins:** ${server.admins.map((id) => `<@${id}>`).join(', ') || 'nenhum'}`,
        `🎭 **Cargos:** ${server.roles.map((id) => `<@&${id}>`).join(', ') || 'nenhum'}`,
      ].join('\n'));
    }
    if (!permissions.isOwner(server, interaction)) return reply(interaction, '⛔ Apenas donos podem alterar quem tem permissão.');
    const user = interaction.options.getUser('usuario');
    const role = interaction.options.getRole('cargo');
    if (!user && !role) return reply(interaction, 'Informe um **usuario** ou um **cargo**.');
    const add = sub === 'adicionar';
    if (!add && user && server.owners.includes(user.id) && server.owners.length === 1) {
      return reply(interaction, '❌ Não é possível remover o único dono. Adicione outro dono (fazendo `/ac login`) antes.');
    }
    store.updateServer(server, (s) => {
      if (user) {
        if (add) { if (!s.owners.includes(user.id)) s.admins = [...new Set([...s.admins, user.id])]; }
        else { s.admins = s.admins.filter((id) => id !== user.id); s.owners = s.owners.filter((id) => id !== user.id); }
      }
      if (role) s.roles = add ? [...new Set([...s.roles, role.id])] : s.roles.filter((id) => id !== role.id);
    }, { bump: false });
    audit(interaction, server, `donos ${sub} user=${user?.id ?? '-'} role=${role?.id ?? '-'}`);
    const who = [user && `<@${user.id}>`, role && `<@&${role.id}>`].filter(Boolean).join(' e ');
    return reply(interaction, `✅ ${who} ${add ? 'agora pode' : 'não pode mais'} configurar ${serverLabel(server)}.`);
  }

  async function handleComponent(interaction) {
    // dcac:<acao>:<serverId>:<categoria>
    const [, action, serverId, catKey] = interaction.customId.split(':');
    const server = store.getServer(normalizeId(serverId));
    if (!server || !interaction.guildId || !store.isLinked(interaction.guildId, server)) {
      return reply(interaction, '❌ Esse servidor não está mais vinculado a este Discord.');
    }
    if (!permissions.isAllowed(server, interaction)) {
      return reply(interaction, '⛔ Você não tem permissão para configurar esse servidor.');
    }
    const catList = byCategory.get(catKey) || [];
    if (action === 'toggle' && interaction.isStringSelectMenu()) {
      const keys = interaction.values.filter((k) => byKey.has(k));
      store.updateServer(server, (s) => { for (const k of keys) s.protections[k].enabled = !s.protections[k].enabled; });
      audit(interaction, server, `painel alternar ${keys.join(',')}`);
    } else if (action === 'global') {
      store.updateServer(server, (s) => { s.global = !s.global; });
      audit(interaction, server, `painel global = ${server.global}`);
    } else if (action === 'allon' || action === 'alloff') {
      store.updateServer(server, (s) => { for (const p of catList) s.protections[p.key].enabled = action === 'allon'; });
      audit(interaction, server, `painel ${action} ${catKey}`);
    } else if (action !== 'refresh' && action !== 'cat') {
      return undefined;
    }
    return interaction.update(buildPanel(store, server, interaction.guildId, catKey));
  }

  client.on(Events.InteractionCreate, async (interaction) => {
    try {
      if (interaction.isAutocomplete() && interaction.commandName === 'ac') return await handleAutocomplete(interaction);
      if (interaction.isChatInputCommand() && interaction.commandName === 'ac') return await handleCommand(interaction);
      if ((interaction.isStringSelectMenu() || interaction.isButton()) && interaction.customId.startsWith('dcac:')) {
        return await handleComponent(interaction);
      }
    } catch (err) {
      logger.error('[discord] erro na interação', err);
      if (interaction.isAutocomplete()) return interaction.respond([]).catch(() => {});
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
