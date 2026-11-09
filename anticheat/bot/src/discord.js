'use strict';

const {
  Client, GatewayIntentBits, Events, MessageFlags, EmbedBuilder, escapeMarkdown,
  ActionRowBuilder, ButtonBuilder, ButtonStyle,
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
const NO_SERVER_SUBS = new Set(['login', 'servidores', 'usar', 'meuservidor']);
// subcomandos/grupos que exigem ser dono do servidor
const OWNER_SUBS = new Set(['logout', 'novachave', 'token']);

function createDiscordBot({ store, permissions, token, projectGuildId, logger = console }) {
  if (!projectGuildId) throw new Error('projectGuildId é obrigatório (o bot só funciona no Discord do projeto).');
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
    } else if (focused.name === 'id') {
      choices = store.serversOfUser(interaction.user.id, permissions.isBotAdmin(interaction))
        .map((s) => ({ name: `${s.name} (${s.id})`.slice(0, 100), value: s.id }))
        .filter((c) => c.name.toLowerCase().includes(q));
    }
    return interaction.respond(choices.slice(0, 25));
  }

  // ----------------------------------------- confirmação de ativação
  function activationMessage(server, userId) {
    const st = store.getStatus(server);
    const embed = new EmbedBuilder()
      .setTitle('🛡️ Confirmar ativação do anti-cheat')
      .setColor(server.activated ? COLORS.ok : COLORS.warn)
      .setDescription([
        `Encontrei este servidor vinculado ao seu Discord (<@${userId}>):`,
        '',
        `**Servidor:** ${escapeMarkdown(server.name)}`,
        `**IDF:** \`${server.id}\``,
        `**Situação:** ${store.isServerOnline(server) ? `🟢 online (${st.players}/${st.maxPlayers} jogadores)` : '🔴 offline'}`,
        `**Anti-cheat:** ${server.activated ? '🟢 ativado' : '⏳ aguardando sua confirmação'}`,
        '',
        server.activated
          ? 'O anti-cheat já está ativo. Use `/ac painel` para configurar as proteções.'
          : 'Clique em **Confirmar** para ligar o anti-cheat nesse servidor. Ele começa a valer em até alguns segundos.',
      ].join('\n'));
    const components = server.activated ? [] : [new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`dcac:confirm:${server.id}:${userId}`).setLabel('Confirmar e ativar').setEmoji('✅').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId(`dcac:cancel:${server.id}:${userId}`).setLabel('Agora não').setStyle(ButtonStyle.Secondary),
    )];
    return { embeds: [embed], components, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } };
  }

  // ---------------------------------------------------- servidores (login)
  async function handleServerCommands(interaction, sub) {
    const userId = interaction.user.id;

    if (sub === 'login') {
      if (loginBlocked(userId)) return reply(interaction, '⛔ Muitas tentativas erradas. Aguarde 10 minutos.');
      const server = store.getServer(interaction.options.getString('id', true));
      const key = interaction.options.getString('chave', true);
      if (!server || !store.checkLoginKey(server, key)) {
        loginFails.get(userId).push(Date.now());
        audit(interaction, server, 'login FALHOU');
        return reply(interaction, '❌ ID ou chave inválidos. Confira no console do servidor (digite `dcac` no console).');
      }
      store.updateServer(server, (s) => {
        if (!s.owners.includes(userId)) s.owners.push(userId);
      }, { bump: false });
      // salva no donos.json: { "<ID do Discord>": { servidor, IDF } }
      store.setDono(userId, server);
      store.clearSelection(userId);
      audit(interaction, server, 'login');
      return interaction.reply(activationMessage(server, userId));
    }

    if (sub === 'meuservidor') {
      // busca o servidor do cliente pelo ID do Discord dele
      const server = store.serverOfDono(userId);
      if (!server) return reply(interaction, '❌ Não encontrei nenhum servidor registrado no seu nome. Use `/ac login id:<IDF> chave:<CHAVE>` com os dados do console do servidor.');
      return interaction.reply(activationMessage(server, userId));
    }

    if (sub === 'servidores') {
      const list = store.serversOfUser(userId, permissions.isBotAdmin(interaction));
      if (!list.length) return reply(interaction, 'Você não tem acesso a nenhum servidor. Use `/ac login id:<IDF> chave:<CHAVE>`.');
      const active = store.activeServerFor(userId);
      const lines = list.slice(0, 50).map((s) => {
        const online = store.isServerOnline(s) ? '🟢' : '🔴';
        const on = s.activated ? '' : ' · ⏳ não confirmado';
        const mark = active && active.id === s.id ? ' ⬅️ **ativo**' : '';
        return `${online} ${serverLabel(s)}${on}${mark}`;
      });
      const embed = new EmbedBuilder().setTitle('🖥️ Seus servidores').setColor(COLORS.info).setDescription(lines.join('\n').slice(0, 4000))
        .setFooter({ text: 'Use /ac usar id:<IDF> para trocar o servidor que os comandos configuram' });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }

    if (sub === 'usar') {
      const server = store.getServer(interaction.options.getString('id', true));
      if (!server || !permissions.isAllowed(server, interaction)) return reply(interaction, '❌ Você não tem acesso a esse servidor.');
      store.setSelection(userId, server);
      return reply(interaction, `✅ Servidor ativo: ${serverLabel(server)}.`);
    }
    return undefined;
  }

  // ---------------------------------------------------------- handlers
  async function handleCommand(interaction) {
    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();

    if (!group && NO_SERVER_SUBS.has(sub)) return handleServerCommands(interaction, sub);

    const server = store.activeServerFor(interaction.user.id);
    if (!server) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login id:<IDF> chave:<CHAVE>` (o IDF e a chave aparecem no console do servidor).');
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
        const uid = interaction.user.id;
        if (server.owners.length === 1 && server.owners[0] === uid) {
          // último dono saindo: o anti-cheat volta a aguardar confirmação de um novo dono
          store.updateServer(server, (s) => { s.owners = []; s.activated = false; });
        } else {
          store.updateServer(server, (s) => { s.owners = s.owners.filter((id) => id !== uid); }, { bump: false });
        }
        if (store.getDono(uid)?.IDF === server.id) store.removeDono(uid);
        store.clearSelection(uid);
        audit(interaction, server, 'logout');
        return reply(interaction, `✅ Você saiu de ${serverLabel(server)}. As configurações continuam salvas.`);
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
        if (ativo && !server.activated) return interaction.reply(activationMessage(server, interaction.user.id));
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
    if (!server) return reply(interaction, '❌ Esse servidor não existe mais.');

    // confirmação de ativação: só o próprio dono (ou administrador do bot)
    if (action === 'confirm' || action === 'cancel') {
      const ownerId = catKey;
      if (interaction.user.id !== ownerId && !permissions.isBotAdmin(interaction)) {
        return reply(interaction, '⛔ Só o dono que fez o login pode confirmar.');
      }
      if (action === 'cancel') return interaction.update({ content: 'Tudo bem. Quando quiser, use `/ac meuservidor` para ativar.', embeds: [], components: [] });
      if (!server.owners.includes(ownerId) && !permissions.isBotAdmin(interaction)) {
        return reply(interaction, '⛔ Você não é mais dono desse servidor.');
      }
      if (!server.activated) store.activate(server);
      audit(interaction, server, 'ativação confirmada');
      return interaction.update(activationMessage(server, ownerId));
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
      // o bot só funciona dentro do Discord do projeto
      if (interaction.guildId !== projectGuildId) {
        if (interaction.isAutocomplete()) return await interaction.respond([]);
        if (interaction.isRepliable()) {
          return await interaction.reply({ content: '⛔ Este bot só pode ser usado no Discord oficial do projeto.', flags: MessageFlags.Ephemeral });
        }
        return undefined;
      }
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

  // se alguém adicionar o bot em outro Discord, ele sai na hora
  async function leaveForeignGuild(guild) {
    if (guild.id === projectGuildId) return;
    logger.log(`[discord] saindo do Discord não autorizado: ${guild.name} (${guild.id})`);
    await guild.leave().catch((err) => logger.error('[discord] falha ao sair do Discord', err.message));
  }
  client.on(Events.GuildCreate, leaveForeignGuild);

  client.once(Events.ClientReady, async (c) => {
    logger.log(`[discord] conectado como ${c.user.tag}`);
    for (const guild of c.guilds.cache.values()) await leaveForeignGuild(guild);
    try {
      // remove comandos globais antigos e registra só no Discord do projeto
      await c.application.commands.set([]);
      const guild = await c.guilds.fetch(projectGuildId);
      await guild.commands.set(commands);
      logger.log(`[discord] comandos registrados no Discord do projeto: ${guild.name}`);
    } catch (err) {
      logger.error('[discord] falha ao registrar comandos (o bot está no Discord do projeto?)', err);
    }
  });

  return {
    client,
    enqueueDetection,
    start: () => client.login(token),
  };
}

module.exports = { createDiscordBot };
