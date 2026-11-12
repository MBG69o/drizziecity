'use strict';

const {
  Client, GatewayIntentBits, Events, MessageFlags, EmbedBuilder, escapeMarkdown,
  ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder, ActivityType, StringSelectMenuBuilder,
} = require('discord.js');
const crypto = require('crypto');
const { commands } = require('./commands');
const {
  PROTECTIONS, CATEGORIES, ACTIONS, ACTION_LABELS, byKey, byId, byCategory, defaultProtectionState,
} = require('./protections');
const { buildPanel, buildStatusEmbed, buildDetectionEmbed, COLORS } = require('./panel');
const { isValidNick, isValidIPv4Pattern, sanitizeGameText } = require('./config-format');
const { normalizeId } = require('./store');
const { PRESETS } = require('./presets');
const { collectStats, buildPresenceTexts } = require('./presence');
const { createNotifier } = require('./notifier');
const { securityReport, CRITICAL } = require('./security');
const { Lockdown } = require('./lockdown');
const { hourlyBuckets } = require('./stats');
const achievements = require('./achievements');
const webhooks = require('./webhooks');

const SPARK = '▁▂▃▄▅▆▇█';
function sparkline(values) {
  const max = Math.max(1, ...values);
  return values.map((v) => SPARK[Math.min(7, Math.round((v / max) * 7))]).join('');
}

const MAX_WHITELIST = 64;
const LOGIN_MAX_FAILS = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
const MAX_IMPORT_BYTES = 64 * 1024;
const PERIODS = { '24h': 24 * 3600e3, '7d': 7 * 24 * 3600e3, '30d': 30 * 24 * 3600e3 };
const PERIOD_LABEL = { '24h': 'últimas 24 horas', '7d': 'últimos 7 dias', '30d': 'últimos 30 dias' };
// comandos que funcionam sem servidor ativo
const NO_SERVER_SUBS = new Set(['login', 'meuservidor', 'servidor/lista', 'servidor/usar', 'painelweb']);
// comandos que exigem ser dono do servidor
const OWNER_SUBS = new Set(['servidor/logout', 'servidor/novachave']);
const TIMEZONE = process.env.AC_TIMEZONE || 'America/Sao_Paulo';

function createDiscordBot({
  store, permissions, token, projectGuildId, alertChannelId = null, licenses = null, blacklist = null,
  trust = null, dashboard = null, watchlist = null, publicBaseUrl = '', logger = console,
}) {
  if (!projectGuildId) throw new Error('projectGuildId é obrigatório (o bot só funciona no Discord do projeto).');
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  const logQueues = new Map(); // channelId -> [embeds]
  const notifier = createNotifier({ store, client, logger, alertChannelId });

  // ------------------------------------------- central de alertas (staff)
  function sendAlert(embed) {
    if (!alertChannelId) return;
    const q = logQueues.get(alertChannelId) || [];
    q.push(embed);
    if (q.length > 200) q.splice(0, q.length - 200);
    logQueues.set(alertChannelId, q);
  }
  const loginFails = new Map(); // userId -> [timestamps]

  // ------------------------------------------------------------------ logs
  function enqueueDetection(server, det) {
    const prot = byId.get(det.code);
    if (!prot) return;
    try { notifier.onDetection(server, det); } catch (err) { logger.error('[notificacoes]', err); }
    const embed = buildDetectionEmbed(server, det, prot);
    for (const channelId of Object.values(server.logChannels)) {
      const q = logQueues.get(channelId) || [];
      q.push(embed);
      if (q.length > 200) q.splice(0, q.length - 200);
      logQueues.set(channelId, q);
    }
    // webhook de saída do cliente
    if (webhooks.shouldSend(server, det)) {
      webhooks.send(server.webhookUrl, webhooks.detectionPayload(server, det)).catch(() => {});
    }
    // procurado detectado em flagrante
    if (watchlist && server.owners[0] && watchlist.isWatched(server.owners[0], det.name)) {
      const w = watchlist.get(server.owners[0], det.name);
      const emb = new EmbedBuilder().setTitle('🎯 Procurado detectado!').setColor(COLORS.ban)
        .setDescription([
          `O jogador vigiado **${escapeMarkdown(det.name)}** foi pego por **${protName(det.code)}** em **${escapeMarkdown(server.name)}**.`,
          w && w.note ? `Anotação: ${escapeMarkdown(w.note)}` : '',
        ].filter(Boolean).join('\n')).setFooter({ text: server.id }).setTimestamp();
      if (server.alerts) sendToServer(server, [emb]);
      sendAlert(emb);
    }
  }

  // Avisa quando um nick da lista de procurados ENTRA no servidor.
  function onWatchlistJoin(server, nicks) {
    if (!watchlist || !server.owners[0]) return;
    for (const nick of nicks) {
      if (!watchlist.isWatched(server.owners[0], nick)) continue;
      const w = watchlist.get(server.owners[0], nick);
      const emb = new EmbedBuilder().setTitle('👁️ Procurado entrou no servidor').setColor(COLORS.warn)
        .setDescription([
          `**${escapeMarkdown(nick)}** (lista de procurados) acabou de entrar em **${escapeMarkdown(server.name)}**.`,
          w && w.note ? `Anotação: ${escapeMarkdown(w.note)}` : '',
        ].filter(Boolean).join('\n')).setFooter({ text: server.id }).setTimestamp();
      if (server.alerts) sendToServer(server, [emb]);
      sendAlert(emb);
    }
  }

  function sendToServer(server, embeds) {
    for (const channelId of Object.values(server.logChannels)) {
      const q = logQueues.get(channelId) || [];
      q.push(...embeds);
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
    if (server) store.addAudit(server, interaction.user.id, text);
  }

  const ts = (ms, style = 'R') => `<t:${Math.floor(ms / 1000)}:${style}>`;
  const protName = (code) => byId.get(code)?.name ?? `#${code}`;
  const sleep = (ms) => new Promise((r) => { setTimeout(r, ms); });

  function statsEmbed(server, periodKey) {
    const st = store.stats(server, PERIODS[periodKey]);
    const embed = new EmbedBuilder()
      .setTitle(`📊 Estatísticas — ${server.name}`.slice(0, 256))
      .setColor(COLORS.info)
      .setDescription(`Período: **${PERIOD_LABEL[periodKey]}** · **${st.total}** detecções\n⚠️ ${st.actions[0]} avisos · 👢 ${st.actions[1]} kicks · 🔨 ${st.actions[2]} bans`);
    if (st.total) {
      embed.addFields(
        { name: 'Proteções que mais detectaram', value: st.topProtections.map(([c, n], i) => `${i + 1}. ${protName(c)} — **${n}**`).join('\n'), inline: true },
        { name: 'Jogadores mais detectados', value: st.topPlayers.map(([nick, n], i) => `${i + 1}. ${escapeMarkdown(nick)} — **${n}**`).join('\n').slice(0, 1024), inline: true },
      );
    }
    const spark = sparkline(hourlyBuckets(store.getHistory(server), Date.now(), 24).map((b) => b.count));
    embed.addFields({ name: 'Detecções por hora (24h)', value: `\`${spark}\`` });
    const achv = achievements.compute(server, store.getStatus(server), store.getHistory(server)).earned;
    if (achv.length) embed.addFields({ name: 'Conquistas', value: achv.map((a) => `${a.emoji} ${a.title}`).join(' · ').slice(0, 1024) });
    return embed;
  }

  function bansMessage(server, page = 0) {
    const bans = store.activeBans(server).slice().reverse();
    const perPage = 5;
    const pages = Math.max(1, Math.ceil(bans.length / perPage));
    const p = Math.min(Math.max(page, 0), pages - 1);
    const slice = bans.slice(p * perPage, p * perPage + perPage);
    const embed = new EmbedBuilder()
      .setTitle(`🔨 Bans do anti-cheat — ${server.name}`.slice(0, 256))
      .setColor(COLORS.ban)
      .setDescription(slice.length
        ? slice.map((b) => `**#${b.id}** ${escapeMarkdown(b.name)} · ||${b.ip}|| · ${protName(b.code)} · ${ts(b.time)}${b.expiresAt ? ` · expira ${ts(b.expiresAt)}` : ' · permanente'}`).join('\n')
        : 'Nenhum ban ativo aplicado pelo anti-cheat.')
      .setFooter({ text: `Página ${p + 1}/${pages} · duração dos novos bans: ${server.banHours ? `${server.banHours}h` : 'permanente'} (/ac servidor banduracao)` });
    const rows = [];
    if (slice.length) {
      rows.push(new ActionRowBuilder().addComponents(slice.map((b) => new ButtonBuilder()
        .setCustomId(`ee:unban:${server.id}:${b.id}`).setLabel(`Desbanir #${b.id}`).setStyle(ButtonStyle.Danger))));
    }
    if (pages > 1) {
      rows.push(new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId(`ee:banpage:${server.id}:${p - 1}`).setLabel('◀').setStyle(ButtonStyle.Secondary).setDisabled(p === 0),
        new ButtonBuilder().setCustomId(`ee:banpage:${server.id}:${p + 1}`).setLabel('▶').setStyle(ButtonStyle.Secondary).setDisabled(p >= pages - 1),
      ));
    }
    return { embeds: [embed], components: rows, flags: MessageFlags.Ephemeral };
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
          ? 'O anti-cheat já está ativo. Use `/ac painel` para configurar as proteções e `/ac servidor logs` para receber as detecções.'
          : 'Clique em **Confirmar** para ligar o anti-cheat nesse servidor. Ele começa a valer em até alguns segundos.',
      ].join('\n'));
    const components = server.activated ? [] : [new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId(`ee:confirm:${server.id}:${userId}`).setLabel('Confirmar e ativar').setEmoji('✅').setStyle(ButtonStyle.Success),
      new ButtonBuilder().setCustomId(`ee:cancel:${server.id}:${userId}`).setLabel('Agora não').setStyle(ButtonStyle.Secondary),
    )];
    return { embeds: [embed], components, flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } };
  }

  // ---------------------------------------------------- servidores (login)
  async function handleServerCommands(interaction, sub) {
    const userId = interaction.user.id;

    if (sub === 'login') {
      if (loginBlocked(userId)) return reply(interaction, '⛔ Muitas tentativas erradas. Aguarde 10 minutos.');
      const result = store.loginWithToken(interaction.options.getString('token', true));
      if (result.error) {
        loginFails.get(userId).push(Date.now());
        audit(interaction, null, `login FALHOU (${result.error})`);
        const msg = {
          format: '❌ Token em formato inválido. Ele aparece no console assim: `EE-XXXXXX-XXXX-XXXX-XXXX-XXXX` (digite `eagleeye` no console para ver).',
          token: '❌ Token incorreto para esse servidor. Confira no console do servidor (digite `eagleeye` no console).',
          notseen: '❌ Esse servidor ainda não se conectou ao bot. Confira se ele está ligado e se o `EE_API_HOST` do gamemode aponta para o endereço público do bot. Depois de ligar, aguarde uns 10 segundos e tente de novo.',
        }[result.error];
        return reply(interaction, msg);
      }
      const { server } = result;
      notifier.onLogin(server, userId, result.created);
      if (result.created) {
        sendAlert(new EmbedBuilder().setTitle('🆕 Novo servidor cadastrado').setColor(COLORS.info)
          .setDescription(`**${escapeMarkdown(server.name)}** (\`${server.id}\`) foi cadastrado por <@${userId}>.`)
          .setTimestamp());
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
      if (!server) return reply(interaction, '❌ Não encontrei nenhum servidor registrado no seu nome. Use `/ac login token:<TOKEN>` com o token de acesso do console do servidor.');
      return interaction.reply(activationMessage(server, userId));
    }

    if (sub === 'painelweb') {
      if (!dashboard) return reply(interaction, '❌ O painel web não está disponível nesta instância.');
      const mine = store.serversOfUser(userId, permissions.isBotAdmin(interaction));
      if (!mine.length) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login token:<TOKEN>` primeiro.');
      const token = dashboard.issue(userId);
      const base = publicBaseUrl || 'https://SEU-DOMINIO.discloud.dev';
      const link = `${base}/painel?t=${token}`;
      return reply(interaction, [
        '🖥️ **Painel web ao vivo** — seus servidores, jogadores e detecções em tempo real no navegador:',
        link,
        '',
        '⚠️ Esse link é **pessoal e secreto** (dá acesso de leitura aos seus dados). Não compartilhe. Gerar de novo invalida o anterior; vale 30 dias.',
        publicBaseUrl ? '' : '_Obs.: defina `AC_PUBLIC_URL` no bot para o link já sair com o domínio certo._',
      ].filter(Boolean).join('\n'));
    }

    if (sub === 'servidor/lista') {
      const list = store.serversOfUser(userId, permissions.isBotAdmin(interaction));
      if (!list.length) return reply(interaction, 'Você não tem acesso a nenhum servidor. Use `/ac login token:<TOKEN>`.');
      const active = store.activeServerFor(userId);
      const lines = list.slice(0, 50).map((s) => {
        const online = store.isServerOnline(s) ? '🟢' : '🔴';
        const on = s.activated ? '' : ' · ⏳ não confirmado';
        const mark = active && active.id === s.id ? ' ⬅️ **ativo**' : '';
        return `${online} ${serverLabel(s)}${on}${mark}`;
      });
      const embed = new EmbedBuilder().setTitle('🖥️ Seus servidores').setColor(COLORS.info).setDescription(lines.join('\n').slice(0, 4000))
        .setFooter({ text: 'Use /ac servidor usar id:<IDF> para trocar o servidor que os comandos configuram' });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }

    if (sub === 'servidor/usar') {
      const server = store.getServer(interaction.options.getString('id', true));
      if (!server || !permissions.isAllowed(server, interaction)) return reply(interaction, '❌ Você não tem acesso a esse servidor.');
      store.setSelection(userId, server);
      return reply(interaction, `✅ Servidor ativo: ${serverLabel(server)}.`);
    }
    return undefined;
  }

  // ------------------------------- seleção de servidor (mais de 1 servidor)
  const PICK_TTL_MS = 5 * 60 * 1000;
  const pendingPicks = new Map(); // id -> { interaction, userId, createdAt }

  /** Pergunta (só para quem usou o comando) qual servidor configurar. */
  function askServer(interaction, full, list) {
    for (const [k, v] of pendingPicks) if (Date.now() - v.createdAt > PICK_TTL_MS) pendingPicks.delete(k);
    const id = crypto.randomBytes(6).toString('hex');
    pendingPicks.set(id, { interaction, userId: interaction.user.id, createdAt: Date.now() });
    const last = store.activeServerFor(interaction.user.id);
    const sorted = list.slice().sort((a, b) => Number(store.isServerOnline(b)) - Number(store.isServerOnline(a)) || a.name.localeCompare(b.name));
    const shown = sorted.slice(0, 25);
    const menu = new StringSelectMenuBuilder()
      .setCustomId(`ee:pick:${id}:0`)
      .setPlaceholder('Escolha o servidor…')
      .addOptions(shown.map((s) => ({
        label: s.name.slice(0, 100),
        value: s.id,
        description: `${s.id} · ${store.isServerOnline(s) ? 'online' : 'offline'}${s.activated ? '' : ' · não confirmado'}`.slice(0, 100),
        emoji: store.isServerOnline(s) ? '🟢' : '🔴',
        default: Boolean(last && last.id === s.id),
      })));
    return interaction.reply({
      content: `🖥️ Você tem **${list.length} servidores**. Qual deseja usar no \`/ac ${full.replace('/', ' ')}\`?${list.length > 25 ? '\n(mostrando os 25 primeiros)' : ''}`,
      components: [new ActionRowBuilder().addComponents(menu)],
      flags: MessageFlags.Ephemeral,
    });
  }

  /** Depois da escolha, executa o comando original no servidor escolhido. */
  async function handlePick(interaction, pickId) {
    const pick = pendingPicks.get(pickId);
    if (!pick || Date.now() - pick.createdAt > PICK_TTL_MS) {
      pendingPicks.delete(pickId);
      return interaction.update({ content: '⌛ Essa seleção expirou. Use o comando de novo.', components: [] });
    }
    if (pick.userId !== interaction.user.id) return reply(interaction, '⛔ Essa seleção não é sua.');
    const server = store.getServer(interaction.values[0]);
    if (!server || !permissions.isAllowed(server, interaction)) return reply(interaction, '❌ Você não tem acesso a esse servidor.');
    pendingPicks.delete(pickId);
    store.setSelection(interaction.user.id, server);

    // o comando original responde na própria mensagem do menu
    const clean = (p) => {
      const payload = typeof p === 'string' ? { content: p } : { ...p };
      delete payload.flags;
      return {
        ...payload, content: payload.content ?? null, embeds: payload.embeds ?? [], components: payload.components ?? [],
      };
    };
    const wrapped = Object.create(pick.interaction);
    Object.assign(wrapped, {
      pickedServer: server,
      reply: (p) => interaction.update(clean(p)),
      deferReply: () => interaction.deferUpdate(),
      editReply: (p) => interaction.editReply(clean(p)),
      followUp: (p) => interaction.followUp(p),
    });
    Object.defineProperty(wrapped, 'replied', { get: () => interaction.replied });
    Object.defineProperty(wrapped, 'deferred', { get: () => interaction.deferred });
    return handleCommand(wrapped);
  }

  // ---------------------------------------------------------- handlers
  async function handleCommand(interaction) {
    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();
    const full = group ? `${group}/${sub}` : sub;

    // quem tem mais de 1 servidor escolhe em qual o comando vai agir
    const picked = interaction.pickedServer || null;
    const pickable = (!NO_SERVER_SUBS.has(full) || full === 'meuservidor') && group !== 'blacklist' && group !== 'procurados';
    if (pickable && !picked) {
      const mine = store.serversOfUser(interaction.user.id, permissions.isBotAdmin(interaction));
      if (mine.length > 1) return askServer(interaction, full, mine);
    }
    if (full === 'meuservidor' && picked) return interaction.reply(activationMessage(picked, interaction.user.id));

    if (NO_SERVER_SUBS.has(full)) return handleServerCommands(interaction, full);
    if (group === 'licenca') return handleLicense(interaction, sub);
    if (group === 'blacklist') return handleBlacklist(interaction, sub);
    if (group === 'procurados') return handleProcurados(interaction, sub);

    const server = picked || store.activeServerFor(interaction.user.id);
    if (!server) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login token:<TOKEN>` (o token de acesso aparece no console do servidor).');
    if (!permissions.isAllowed(server, interaction)) {
      return reply(interaction, `⛔ Você não tem permissão para configurar ${serverLabel(server)}. Peça a um dono para usar \`/ac donos adicionar\`.`);
    }
    if (OWNER_SUBS.has(full) && !permissions.isOwner(server, interaction)) {
      return reply(interaction, '⛔ Apenas donos do servidor (quem fez `/ac login` com a chave) podem usar esse comando.');
    }

    if (group === 'imune') return handleWhitelist(interaction, server, sub);
    if (group === 'donos') return handleOwners(interaction, server, sub);
    if (group === 'selo') return handleSelo(interaction, server, sub);
    if (group === 'webhook') return handleWebhook(interaction, server, sub);

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
        const tok = store.rotateToken(server);
        audit(interaction, server, 'novo token de acesso');
        notifier.onTokenRotated(server, interaction.user.id);
        return reply(interaction, [
          `🔑 Novo token de acesso de ${serverLabel(server)}: \`${tok}\``,
          `O servidor recebe esse token sozinho na próxima consulta${store.isServerOnline(server) ? '' : ' (quando voltar a ficar online)'}, salva no \`eagleeye_servidor.cfg\` e mostra no console. A partir daí o token antigo para de funcionar.`,
          'Quem já fez login continua com acesso; use `/ac donos remover` para tirar alguém.',
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
        if (!on && r.keys.length > 1) notifier.onConfigChange(server, interaction.user.id, `desativou ${r.name}`);
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
        if (!ativo) notifier.onConfigChange(server, interaction.user.id, 'desligou o anti-cheat inteiro');
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
        notifier.onConfigChange(server, interaction.user.id, 'restaurou todas as proteções para o padrão');
        return reply(interaction, '♻️ Todas as proteções voltaram para a configuração padrão.');
      }

      case 'desbanir': {
        const ip = interaction.options.getString('ip', true).trim();
        if (!isValidIPv4Pattern(ip)) return reply(interaction, '❌ IP inválido. Use o formato 177.10.20.30 ou 177.10.*.*');
        const match = store.activeBans(server).filter((b) => b.ip === ip);
        if (match.length) for (const b of match) store.unban(server, b, interaction.user.id);
        else store.queueCommand(server, 'unbanip', ip);
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

      case 'preset': {
        const key = interaction.options.getString('tipo', true);
        const preset = PRESETS[key];
        if (!preset) return reply(interaction, '❌ Preset inválido.');
        store.updateServer(server, (s) => { s.protections = preset.build(); });
        audit(interaction, server, `preset ${key}`);
        notifier.onConfigChange(server, interaction.user.id, `aplicou o preset ${preset.name}`);
        return reply(interaction, `✅ Preset **${preset.name}** aplicado: ${preset.desc} ${pollMsg}`);
      }

      case 'exportar': {
        const data = JSON.stringify(store.exportConfig(server), null, 2);
        const file = new AttachmentBuilder(Buffer.from(data, 'utf8'), { name: `eagleeye-${server.id}.json` });
        audit(interaction, server, 'exportar configuração');
        return interaction.reply({ content: `📦 Configuração de ${serverLabel(server)}. Use \`/ac protecao importar\` para aplicar em outro servidor.`, files: [file], flags: MessageFlags.Ephemeral });
      }

      case 'importar': {
        const att = interaction.options.getAttachment('arquivo', true);
        if (att.size > MAX_IMPORT_BYTES) return reply(interaction, '❌ Arquivo grande demais (máx. 64 KB).');
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
        try {
          const res = await fetch(att.url);
          if (!res.ok) throw new Error('Não foi possível baixar o arquivo.');
          const text = await res.text();
          if (text.length > MAX_IMPORT_BYTES) throw new Error('Arquivo grande demais (máx. 64 KB).');
          let data;
          try { data = JSON.parse(text); } catch { throw new Error('O arquivo não é um JSON válido.'); }
          store.importConfig(server, data);
        } catch (err) {
          return interaction.editReply(`❌ ${err.message}`);
        }
        audit(interaction, server, `importar configuração (${att.name})`);
        notifier.onConfigChange(server, interaction.user.id, `importou uma configuração (${att.name})`);
        return interaction.editReply(`✅ Configuração importada em ${serverLabel(server)}. ${pollMsg}`);
      }

      case 'alertas': {
        const ativo = interaction.options.getBoolean('ativo', true);
        store.updateServer(server, (s) => { s.alerts = ativo; }, { bump: false });
        audit(interaction, server, `alertas = ${ativo}`);
        return reply(interaction, ativo ? '🔔 Vou avisar no canal de logs quando o servidor cair ou voltar.' : '🔕 Alertas de queda desligados.');
      }

      case 'resumo': {
        const ativo = interaction.options.getBoolean('ativo', true);
        store.updateServer(server, (s) => { s.dailySummary = ativo; s.lastSummaryDay = todayKey(); }, { bump: false });
        audit(interaction, server, `resumo diário = ${ativo}`);
        return reply(interaction, ativo ? `🗓️ Resumo diário ligado: todo dia à meia-noite (${TIMEZONE}) no canal de logs.` : '🗓️ Resumo diário desligado.');
      }

      case 'banduracao': {
        const horas = interaction.options.getInteger('horas', true);
        store.updateServer(server, (s) => { s.banHours = horas; }, { bump: false });
        audit(interaction, server, `duração dos bans = ${horas}h`);
        return reply(interaction, horas ? `⏱️ Novos bans do anti-cheat duram **${horas}h** e são desfeitos automaticamente.` : '⏱️ Novos bans do anti-cheat são **permanentes**.');
      }

      case 'seguranca': {
        const rep = securityReport(store, server);
        const bar = '🟩'.repeat(Math.round(rep.score / 10)) + '⬜'.repeat(10 - Math.round(rep.score / 10));
        const embed = new EmbedBuilder()
          .setTitle(`🛡️ Verificação de segurança — ${server.name}`.slice(0, 256))
          .setColor(rep.score >= 90 ? COLORS.ok : rep.score >= 70 ? COLORS.info : rep.score >= 50 ? COLORS.warn : COLORS.ban)
          .setDescription([
            `**Nota: ${rep.score}/100** (${rep.grade})`,
            bar,
            '',
            ...rep.items.map((i) => `${i.ok ? '✅' : '❌'} ${i.label}${i.ok ? '' : `\n└ ${i.tip}`}`),
          ].join('\n').slice(0, 4000));
        const fixes = [];
        if (!server.activated || !server.global) fixes.push(new ButtonBuilder().setCustomId(`ee:secon:${server.id}:0`).setLabel('Ligar anti-cheat').setStyle(ButtonStyle.Success));
        if (rep.criticalOff.length || rep.items.find((i) => i.key === 'punish' && !i.ok)) fixes.push(new ButtonBuilder().setCustomId(`ee:seccrit:${server.id}:0`).setLabel('Corrigir proteções essenciais').setStyle(ButtonStyle.Primary));
        if (!rep.items.find((i) => i.key === 'coverage').ok) fixes.push(new ButtonBuilder().setCustomId(`ee:secall:${server.id}:0`).setLabel('Ativar todas').setStyle(ButtonStyle.Secondary));
        return interaction.reply({ embeds: [embed], components: fixes.length ? [new ActionRowBuilder().addComponents(fixes)] : [], flags: MessageFlags.Ephemeral });
      }

      case 'notificacoes': {
        const modo = interaction.options.getString('modo', true);
        store.updateServer(server, (s) => { s.notifyMode = modo; }, { bump: false });
        audit(interaction, server, `notificações de segurança = ${modo}`);
        const desc = {
          ambos: 'por **DM** e no **canal de logs**',
          dm: 'só por **DM** (se a DM estiver fechada, vai para o canal de logs)',
          canal: 'só no **canal de logs**, com menção aos donos',
          desligado: '**desligadas**',
        }[modo];
        return reply(interaction, `🔔 Notificações de segurança de ${serverLabel(server)}: ${desc}.`);
      }

      case 'auditoria': {
        const list = store.getAudit(server).slice(-15).reverse();
        if (!list.length) return reply(interaction, 'Nenhuma alteração registrada ainda.');
        const embed = new EmbedBuilder().setTitle(`🧾 Auditoria — ${server.name}`.slice(0, 256)).setColor(COLORS.info)
          .setDescription(list.map((a) => `${ts(a.time)} <@${a.userId}> — ${escapeMarkdown(a.text)}`).join('\n').slice(0, 4000));
        return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral, allowedMentions: { parse: [] } });
      }

      case 'jogador': {
        const nick = interaction.options.getString('nick', true).trim();
        const info = store.playerInfo(server, nick);
        const rep = trust && server.owners[0] ? trust.get(server.owners[0], nick) : null;
        if (!info.total && !info.bans.length && !(rep && rep.known)) return reply(interaction, `Nenhum registro para **${escapeMarkdown(nick)}**.`);
        const embed = new EmbedBuilder().setTitle(`🧍 ${nick}`.slice(0, 256)).setColor(info.bans.some((b) => !b.unbannedAt) ? COLORS.ban : COLORS.warn)
          .addFields(
            ...(rep ? [{ name: 'Reputação (trust score)', value: `${rep.emoji} **${rep.score}/100** — ${rep.label}` }] : []),
            { name: 'Detecções', value: `**${info.total}** · primeira ${info.first ? ts(info.first) : '-'} · última ${info.last ? ts(info.last) : '-'}` },
            { name: 'Por proteção', value: info.byProtection.map(([c, n]) => `${protName(c)}: **${n}**`).join('\n').slice(0, 1024) || '-', inline: true },
            { name: 'IPs usados', value: info.ips.map((ip) => `||${ip}||`).join('\n').slice(0, 1024) || '-', inline: true },
            { name: 'Bans', value: info.bans.map((b) => `#${b.id} ${protName(b.code)} ${ts(b.time)}${b.unbannedAt ? ' (desfeito)' : ''}`).join('\n').slice(0, 1024) || 'nenhum' },
            { name: 'Recentes', value: info.recent.map((d) => `${ts(d.time)} ${protName(d.code)} · ${ACTION_LABELS[d.action]} · ${escapeMarkdown(d.detail)}`).join('\n').slice(0, 1024) || '-' },
          );
        return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
      }

      case 'estatisticas': {
        const periodKey = interaction.options.getString('periodo') || '24h';
        return interaction.reply({ embeds: [statsEmbed(server, periodKey)], flags: MessageFlags.Ephemeral });
      }

      case 'online': {
        if (!store.isServerOnline(server)) return reply(interaction, '❌ O servidor está offline.');
        await interaction.deferReply({ flags: MessageFlags.Ephemeral });
        const requested = Date.now();
        store.queueCommand(server, 'plist', '1');
        const deadline = requested + Math.min(server.pollSeconds * 2 + 5, 60) * 1000;
        let snap = store.getPlayers(server);
        while ((!snap || snap.time < requested) && Date.now() < deadline) {
          await sleep(1000);
          snap = store.getPlayers(server);
        }
        if (!snap || snap.time < requested) return interaction.editReply('⌛ O servidor não respondeu a tempo. Tente de novo em alguns segundos.');
        const lines = snap.list.map((pl) => `\`${String(pl.id).padStart(3, ' ')}\` ${escapeMarkdown(pl.name)} · ${pl.ping} ms · score ${pl.score}`);
        const embed = new EmbedBuilder().setTitle(`👥 Online em ${server.name} (${snap.list.length})`.slice(0, 256)).setColor(COLORS.info)
          .setDescription(lines.join('\n').slice(0, 4000) || 'Ninguém online.')
          .setFooter({ text: 'Use o ID com /ac moderacao kick, pm, congelar...' });
        return interaction.editReply({ embeds: [embed] });
      }

      case 'pm': {
        const id = interaction.options.getInteger('id', true);
        const msg = sanitizeGameText(interaction.options.getString('mensagem', true));
        if (!msg) return reply(interaction, '❌ Mensagem vazia após remover caracteres inválidos.');
        if (!store.isServerOnline(server)) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand(server, 'pm', `${id}|${msg}`);
        audit(interaction, server, `pm ${id}: ${msg}`);
        return reply(interaction, `✉️ Mensagem enviada ao ID **${id}**: \`${msg.replace(/_/g, ' ')}\``);
      }

      case 'congelar':
      case 'descongelar': {
        const id = interaction.options.getInteger('id', true);
        if (!store.isServerOnline(server)) return reply(interaction, '❌ O servidor está offline.');
        store.queueCommand(server, sub === 'congelar' ? 'freeze' : 'unfreeze', id);
        audit(interaction, server, `${sub} ${id}`);
        return reply(interaction, `${sub === 'congelar' ? '🧊 Congelando' : '🔥 Descongelando'} o ID **${id}**.`);
      }

      case 'bans':
        return interaction.reply(bansMessage(server));

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

  async function handleLicense(interaction, sub) {
    if (!permissions.isBotAdmin(interaction)) return reply(interaction, '⛔ Só administradores do bot gerenciam licenças.');
    if (!licenses) return reply(interaction, '❌ Licenciamento desligado. Defina AC_LICENSE_PEPPER e AC_LICENSE_SIGN no .env.');
    const estado = { active: '🟢 ativa', revoked: '🔴 revogada' };
    const linha = (r) => {
      const val = r.expiresAt ? ` · expira <t:${Math.floor(r.expiresAt / 1000)}:d>` : '';
      const srv = r.boundServerId ? ` · ${r.boundServerId}` : ' · sem uso';
      return `${estado[r.state] || r.state} \`${r.hash.slice(0, 10)}…\`${r.client ? ` · ${escapeMarkdown(r.client)}` : ''}${srv}${val}`;
    };
    if (sub === 'criar') {
      const dias = interaction.options.getInteger('dias');
      const { key, record } = licenses.create({
        client: interaction.options.getString('cliente') || '',
        note: interaction.options.getString('nota') || '',
        expiresAt: dias ? Date.now() + dias * 86400000 : 0,
      });
      logger.log(`[licencas] criada por ${interaction.user.tag}: ${record.hash}`);
      return reply(interaction, [
        `✅ Licença emitida${record.client ? ` para **${escapeMarkdown(record.client)}**` : ''}:`,
        `\`\`\`\n${key}\n\`\`\``,
        'Entregue essa chave ao cliente. Ela aparece **só agora** (o bot guarda só o hash).',
        dias ? `Validade: ${dias} dias.` : 'Sem validade.',
      ].join('\n'));
    }
    if (sub === 'listar') {
      const list = licenses.list();
      if (!list.length) return reply(interaction, 'Nenhuma licença emitida.');
      const embed = new EmbedBuilder().setTitle('🔑 Licenças').setColor(COLORS.info)
        .setDescription(list.slice(0, 40).map(linha).join('\n').slice(0, 4000))
        .setFooter({ text: `${list.length} licença(s)` });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }
    const chave = interaction.options.getString('chave', true);
    const rec = licenses.get(chave);
    if (!rec) return reply(interaction, licenses.formatOk(chave) ? '❌ Licença não encontrada no catálogo.' : '❌ Chave em formato inválido.');
    if (sub === 'revogar') {
      licenses.revoke(chave);
      logger.log(`[licencas] revogada por ${interaction.user.tag}: ${rec.hash}`);
      return reply(interaction, `🔴 Licença revogada. O plugin para de funcionar na próxima verificação${rec.boundServerId ? ` (servidor ${rec.boundServerId})` : ''}.`);
    }
    if (sub === 'reativar') {
      licenses.reactivate(chave);
      return reply(interaction, '🟢 Licença reativada.');
    }
    // info
    const embed = new EmbedBuilder().setTitle('🔑 Licença').setColor(COLORS.info).setDescription(linha(rec))
      .addFields(
        { name: 'Criada', value: `<t:${Math.floor(rec.createdAt / 1000)}:f>`, inline: true },
        { name: 'Última verificação', value: rec.lastCheck ? `<t:${Math.floor(rec.lastCheck / 1000)}:R>` : 'nunca', inline: true },
        { name: 'Servidor', value: rec.boundServerId || 'nenhum', inline: true },
        { name: 'Nota', value: rec.note || '-' },
      );
    return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
  }

  // ---------------------------------------------- blacklist (ban cruzado)
  // A lista é por dono: compartilhada entre TODOS os servidores dele.
  async function handleBlacklist(interaction, sub) {
    if (!blacklist) return reply(interaction, '❌ Blacklist indisponível nesta instância.');
    const mine = store.serversOfUser(interaction.user.id, permissions.isBotAdmin(interaction));
    if (!mine.length) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login token:<TOKEN>`.');
    // só donos mexem na blacklist
    const asOwner = mine.filter((s) => permissions.isOwner(s, interaction));
    const servers = asOwner.length ? asOwner : mine;
    const ownerKey = servers[0].owners[0] || interaction.user.id;

    if (sub === 'listar') {
      const list = blacklist.listFor(ownerKey);
      if (!list.length) return reply(interaction, 'Sua lista negra está vazia. Adicione com `/ac blacklist adicionar`.');
      const lines = list.slice(0, 40).map((e) => {
        const alvo = e.kind === 'ip' ? `IP \`${e.value}\`` : `nick **${escapeMarkdown(e.value)}**`;
        return `🚫 ${alvo}${e.reason ? ` — ${escapeMarkdown(e.reason)}` : ''} · <t:${Math.floor(e.at / 1000)}:R>`;
      });
      const embed = new EmbedBuilder().setTitle('🚫 Lista negra (seus servidores)').setColor(COLORS.ban)
        .setDescription(lines.join('\n').slice(0, 4000)).setFooter({ text: `${list.length} entrada(s)` });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }

    const nick = (interaction.options.getString('nick') || '').trim();
    const ip = (interaction.options.getString('ip') || '').trim();
    if (!nick && !ip) return reply(interaction, '❌ Informe um **nick** ou um **IP**.');
    if (ip && !isValidIPv4Pattern(ip)) return reply(interaction, '❌ IP inválido. Use 177.10.20.30 (ou 177.10.*.*).');
    if (nick && !isValidNick(nick)) return reply(interaction, '❌ Nick inválido (3-24 caracteres: letras, números e _[]().$@=).');

    if (sub === 'remover') {
      let n = 0;
      if (ip && blacklist.remove(ownerKey, 'ip', ip)) n++;
      if (nick && blacklist.remove(ownerKey, 'nome', nick)) n++;
      if (!n) return reply(interaction, 'Nada foi removido (não estava na lista).');
      // manda desbanir o IP nos servidores online
      if (ip) for (const s of servers) store.queueCommand(s, 'unbanip', ip);
      return reply(interaction, `✅ Removido da lista negra. ${ip ? 'Pedido de desban de IP enviado aos seus servidores.' : ''}`);
    }

    // adicionar
    const motivo = (interaction.options.getString('motivo') || '').trim();
    const added = [];
    if (ip) { blacklist.add(ownerKey, { kind: 'ip', value: ip, name: nick, reason: motivo, by: interaction.user.id }); added.push(`IP \`${ip}\``); }
    if (nick) { blacklist.add(ownerKey, { kind: 'nome', value: nick, reason: motivo, by: interaction.user.id }); added.push(`nick **${escapeMarkdown(nick)}**`); }

    // propaga o ban para todos os servidores online do dono
    let online = 0;
    for (const s of servers) {
      if (ip) store.queueCommand(s, 'banip', ip);
      if (nick) store.queueCommand(s, 'kickname', nick);
      if (store.isServerOnline(s)) online++;
    }
    logger.log(`[blacklist] ${interaction.user.tag} + ${added.join(' / ')} (dono ${ownerKey}, ${servers.length} servidor(es))`);
    return reply(interaction, [
      `🚫 Adicionado à sua lista negra: ${added.join(' e ')}.`,
      `Aplicado em **${servers.length}** servidor(es) seu(s)${online < servers.length ? ` (${online} online agora; os demais aplicam quando voltarem)` : ''}.`,
      motivo ? `Motivo: ${escapeMarkdown(motivo)}` : '',
    ].filter(Boolean).join('\n'));
  }

  // ------------------------------------------- selo público / status
  async function handleSelo(interaction, server, sub) {
    const base = publicBaseUrl || 'https://SEU-DOMINIO.discloud.dev';
    const statusUrl = `${base}/s/${server.id}`;
    const badgeUrl = `${base}/badge/${server.id}.svg`;
    if (sub === 'ver') {
      if (!server.publicBadge) return reply(interaction, 'O selo público está **desligado**. Ligue com `/ac selo publico`.');
      return reply(interaction, [
        `🔗 **Página de status:** ${statusUrl}`,
        `🖼️ **Selo (imagem):** ${badgeUrl}`,
        '',
        'Cole no fórum/site do servidor. Em BBCode:',
        '```',
        `[url=${statusUrl}][img]${badgeUrl}[/img][/url]`,
        '```',
        'Em HTML:',
        '```',
        `<a href="${statusUrl}"><img src="${badgeUrl}" alt="Protegido por EagleEYE"></a>`,
        '```',
      ].join('\n'));
    }
    if (!permissions.isOwner(server, interaction)) return reply(interaction, '⛔ Apenas donos do servidor podem ligar/desligar o selo público.');
    const on = sub === 'publico';
    store.updateServer(server, (s) => { s.publicBadge = on; }, { bump: false });
    audit(interaction, server, `selo publico = ${on}`);
    if (!on) return reply(interaction, '🔒 Selo público **desligado**. A página de status e o selo ficam indisponíveis.');
    return reply(interaction, [
      `🏷️ Selo público **ligado** para ${serverLabel(server)}!`,
      'A página de status mostra só: nome, online/offline, anti-cheat ligado, nota de segurança e nº de jogadores — **nada sensível**.',
      `🔗 ${statusUrl}`,
      `🖼️ ${badgeUrl}`,
      'Use `/ac selo ver` para pegar o código pronto do fórum/site.',
    ].join('\n'));
  }

  const WH_LABEL = ['avisos, kicks e bans', 'kicks e bans', 'só bans'];
  async function handleWebhook(interaction, server, sub) {
    if (sub === 'ver') {
      return reply(interaction, server.webhookUrl
        ? `🔗 Webhook **ligado** para ${serverLabel(server)} — envia: **${WH_LABEL[server.webhookMinAction] || WH_LABEL[1]}**.`
        : 'Nenhum webhook configurado. Use `/ac webhook definir`.');
    }
    if (!permissions.isOwner(server, interaction)) return reply(interaction, '⛔ Apenas donos configuram o webhook.');
    if (sub === 'remover') {
      store.updateServer(server, (s) => { s.webhookUrl = ''; }, { bump: false });
      audit(interaction, server, 'webhook removido');
      return reply(interaction, '✅ Webhook desligado.');
    }
    const url = interaction.options.getString('url', true).trim();
    if (!webhooks.isValidWebhook(url)) return reply(interaction, '❌ Use um webhook do **Discord** (https://discord.com/api/webhooks/...).');
    const min = Number.parseInt(interaction.options.getString('minimo') || '1', 10);
    store.updateServer(server, (s) => { s.webhookUrl = url; s.webhookMinAction = [0, 1, 2].includes(min) ? min : 1; }, { bump: false });
    audit(interaction, server, 'webhook definido');
    return reply(interaction, `✅ Webhook ligado para ${serverLabel(server)}! Você vai receber **${WH_LABEL[[0, 1, 2].includes(min) ? min : 1]}** no seu Discord.`);
  }

  async function handleProcurados(interaction, sub) {
    if (!watchlist) return reply(interaction, '❌ Indisponível nesta instância.');
    const mine = store.serversOfUser(interaction.user.id, permissions.isBotAdmin(interaction));
    if (!mine.length) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login token:<TOKEN>`.');
    const owned = mine.filter((s) => permissions.isOwner(s, interaction));
    const ownerKey = (owned[0] || mine[0]).owners[0] || interaction.user.id;
    if (sub === 'listar') {
      const list = watchlist.list(ownerKey);
      if (!list.length) return reply(interaction, 'Nenhum jogador vigiado. Use `/ac procurados adicionar`.');
      const embed = new EmbedBuilder().setTitle('👁️ Procurados').setColor(COLORS.warn)
        .setDescription(list.slice(0, 40).map((e) => `**${escapeMarkdown(e.nick)}**${e.note ? ` — ${escapeMarkdown(e.note)}` : ''}`).join('\n').slice(0, 4000))
        .setFooter({ text: `${list.length} vigiado(s)` });
      return interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    }
    const nick = interaction.options.getString('nick', true).trim();
    if (!isValidNick(nick)) return reply(interaction, '❌ Nick inválido (3-24 caracteres).');
    if (sub === 'remover') {
      const ok = watchlist.remove(ownerKey, nick);
      return reply(interaction, ok ? `✅ **${escapeMarkdown(nick)}** não é mais vigiado.` : 'Esse nick não estava na lista.');
    }
    watchlist.add(ownerKey, nick, { note: interaction.options.getString('anotacao') || '', by: interaction.user.id });
    return reply(interaction, `👁️ Agora vigiando **${escapeMarkdown(nick)}**. Você será avisado quando ele **entrar** ou for **pego** em qualquer servidor seu.`);
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
    notifier.onConfigChange(server, interaction.user.id, `${add ? 'deu' : 'tirou'} permissão de ${[user && `<@${user.id}>`, role && `<@&${role.id}>`].filter(Boolean).join(' e ')}`);
    const who = [user && `<@${user.id}>`, role && `<@&${role.id}>`].filter(Boolean).join(' e ');
    return reply(interaction, `✅ ${who} ${add ? 'agora pode' : 'não pode mais'} configurar ${serverLabel(server)}.`);
  }

  async function handleComponent(interaction) {
    // ee:<acao>:<serverId>:<categoria>
    const [, action, serverId, catKey] = interaction.customId.split(':');
    if (action === 'pick' && interaction.isStringSelectMenu()) return handlePick(interaction, serverId);
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
    if (action === 'secrot') {
      if (!permissions.isOwner(server, interaction)) return reply(interaction, '⛔ Só um dono pode gerar um novo token.');
      const tok = store.rotateToken(server);
      audit(interaction, server, 'novo token de acesso (notificação de segurança)');
      notifier.onTokenRotated(server, interaction.user.id);
      return interaction.update({
        content: `🔑 Novo token gerado para ${serverLabel(server)}: \`${tok}\`\nO servidor verdadeiro recebe esse token sozinho na próxima consulta; qualquer cópia com o token antigo para de funcionar.`,
        embeds: [], components: [],
      });
    }
    if (action === 'secwarn') {
      const prot = byId.get(Number(catKey));
      if (!prot) return reply(interaction, '❌ Proteção inválida.');
      store.updateServer(server, (s) => { s.protections[prot.key].action = 0; });
      audit(interaction, server, `notificação: ${prot.name} mudou para aviso`);
      return interaction.update({ content: `✅ **${prot.name}** agora só avisa (ninguém é punido por ela). Ajuste o limite com \`/ac protecao limite\`.`, components: [] });
    }
    if (action === 'seccrit') {
      store.updateServer(server, (s) => {
        for (const k of CRITICAL) {
          s.protections[k].enabled = true;
          if (s.protections[k].action === 0) s.protections[k].action = 1;
        }
      });
      audit(interaction, server, 'proteções essenciais ligadas com kick');
      return interaction.update({ content: `✅ Proteções essenciais ligadas (com **kick**) em ${serverLabel(server)}.`, embeds: [], components: [] });
    }
    if (action === 'secon' || action === 'secall') {
      if (action === 'secon') {
        if (!server.activated && !permissions.isOwner(server, interaction)) return reply(interaction, '⛔ Só um dono pode ativar o anti-cheat.');
        if (!server.activated) store.activate(server);
        else store.updateServer(server, (s) => { s.global = true; });
      } else {
        store.updateServer(server, (s) => { for (const p of PROTECTIONS) s.protections[p.key].enabled = true; });
      }
      audit(interaction, server, `notificação: ${action === 'secon' ? 'anti-cheat ativado' : 'todas as proteções ativadas'}`);
      return interaction.update({
        content: `✅ ${action === 'secon' ? 'Anti-cheat ativado' : 'Todas as proteções ativadas'} em ${serverLabel(server)}. O servidor aplica em até ${server.pollSeconds}s.`,
        components: [],
      });
    }
    if (action === 'unban') {
      const ban = store.activeBans(server).find((b) => b.id === Number(catKey));
      if (ban) {
        store.unban(server, ban, interaction.user.id);
        audit(interaction, server, `desbanir #${ban.id} ${ban.name} (${ban.ip})`);
      }
      return interaction.update(bansMessage(server));
    }
    if (action === 'banpage') return interaction.update(bansMessage(server, Number(catKey) || 0));
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
      // botões das notificações de segurança enviadas por DM
      const dmSecurity = !interaction.guildId && (interaction.isButton && interaction.isButton())
        && /^ee:(secon|secall|secrot|secwarn|seccrit):/.test(interaction.customId || '');
      // o bot só funciona dentro do Discord do projeto
      if (interaction.guildId !== projectGuildId && !dmSecurity) {
        if (interaction.isAutocomplete()) return await interaction.respond([]);
        if (interaction.isRepliable()) {
          return await interaction.reply({ content: '⛔ Este bot só pode ser usado no Discord oficial do projeto.', flags: MessageFlags.Ephemeral });
        }
        return undefined;
      }
      if (interaction.isAutocomplete() && interaction.commandName === 'ac') return await handleAutocomplete(interaction);
      if (interaction.isChatInputCommand() && interaction.commandName === 'ac') return await handleCommand(interaction);
      if ((interaction.isStringSelectMenu() || interaction.isButton()) && interaction.customId.startsWith('ee:')) {
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

  // ---------------------------------------------- status (atividade) do bot
  let presenceIndex = 0;
  const presenceMs = Math.max(15, Number.parseInt(process.env.AC_STATUS_INTERVAL || '30', 10)) * 1000;
  function updatePresence() {
    if (!client.isReady()) return;
    const texts = buildPresenceTexts(collectStats(store));
    const text = texts[presenceIndex % texts.length];
    presenceIndex += 1;
    // status personalizado: o texto aparece exatamente como escrito
    client.user.setPresence({ activities: [{ type: ActivityType.Custom, name: 'custom', state: text.slice(0, 128) }], status: 'online' });
  }
  setInterval(() => { try { updatePresence(); } catch (err) { logger.error('[status]', err.message); } }, presenceMs).unref();

  client.once(Events.ClientReady, async (c) => {
    logger.log(`[discord] conectado como ${c.user.tag}`);
    updatePresence();
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

  // ------------------------------------------------- tarefas automáticas
  function todayKey(date = new Date()) {
    return new Intl.DateTimeFormat('en-CA', { timeZone: TIMEZONE, year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
  }

  const lastOnline = new Map(); // serverId -> boolean (só depois do 1º contato)
  const lockdowns = new Map();  // serverId -> Lockdown (modo escudo anti-ataque)

  // Modo escudo: liga/renova/reverte o endurecimento temporário das proteções.
  function runLockdown(server, now) {
    let ld = lockdowns.get(server.id);
    if (!ld) { ld = new Lockdown({ durationMs: 10 * 60 * 1000 }); lockdowns.set(server.id, ld); }

    // 1) expirou? reverte as proteções endurecidas
    if (ld.expired(now)) {
      const codes = ld.clear();
      if (codes.length && ld.savedProt.size) {
        store.updateServer(server, (s) => {
          for (const c of codes) {
            const key = byId.get(c)?.key; const orig = ld.savedProt.get(c);
            if (key && orig) s.protections[key] = { ...orig };
          }
        });
        ld.savedProt.clear();
        const emb = new EmbedBuilder().setTitle('🛡️ Modo escudo encerrado').setColor(COLORS.ok)
          .setDescription(`O ataque passou em **${escapeMarkdown(server.name)}**. As proteções endurecidas voltaram ao que você tinha configurado.`)
          .setFooter({ text: server.id }).setTimestamp();
        if (server.alerts) sendToServer(server, [emb]);
        sendAlert(emb);
      }
    }

    // 2) ataque em curso? endurece as proteções abusadas (ban imediato)
    if (server.global && server.activated !== false && store.isServerOnline(server)) {
      const since = now - 5 * 60 * 1000;
      const recent = store.getHistory(server).filter((d) => d.time >= since);
      const r = ld.evaluate(recent, now, { minUnique: 4, minTotal: 15, minHits: 4 });
      if (r.changed && r.codes.length) {
        store.updateServer(server, (s) => {
          for (const c of r.codes) {
            const key = byId.get(c)?.key; if (!key) continue;
            if (!ld.savedProt.has(c)) ld.savedProt.set(c, { ...s.protections[key] });
            s.protections[key] = { ...s.protections[key], enabled: true, action: 2, tolerance: 1 };
          }
        });
        if (r.entered) {
          const names = r.codes.map((c) => byId.get(c)?.name ?? c).join(', ');
          const emb = new EmbedBuilder().setTitle('🛡️ Modo escudo ativado').setColor(COLORS.ban)
            .setDescription([
              `🚨 Ataque detectado em **${escapeMarkdown(server.name)}**.`,
              `O EagleEYE endureceu temporariamente (ban imediato): **${names}**.`,
              'Volta ao que você configurou sozinho em ~10 min. Se for falso positivo, ajuste a proteção.',
            ].join('\n')).setFooter({ text: server.id }).setTimestamp();
          if (server.alerts) sendToServer(server, [emb]);
          sendAlert(emb);
        }
      }
    }
  }

  function checkServers() {
    for (const server of store.servers.values()) {
      try { runLockdown(server, Date.now()); } catch (e) { logger.error('[escudo]', e.message); }
      // queda / retorno do servidor
      if (store.getStatus(server).lastSeen) {
        const online = store.isServerOnline(server);
        const prev = lastOnline.get(server.id);
        if (prev !== undefined && prev !== online) {
          const embed = new EmbedBuilder()
            .setTitle((online ? `🟢 ${server.name} voltou` : `🔴 ${server.name} caiu`).slice(0, 256))
            .setColor(online ? COLORS.ok : COLORS.ban)
            .setDescription(online ? 'O servidor voltou a se comunicar com o anti-cheat.' : `Sem contato com o servidor há mais de ${server.pollSeconds * 3 + 10}s.`)
            .setFooter({ text: server.id })
            .setTimestamp();
          if (server.alerts) sendToServer(server, [embed]);
          sendAlert(embed);
        }
        lastOnline.set(server.id, online);
      }
      // bans temporários vencidos
      for (const b of store.expireBans(server)) {
        logger.log(`[bans] ${server.id} ban #${b.id} (${b.name}) expirou`);
        sendToServer(server, [new EmbedBuilder().setTitle('⏱️ Ban expirado').setColor(COLORS.info)
          .setDescription(`**${escapeMarkdown(b.name)}** (||${b.ip}||) foi desbanido automaticamente.`).setFooter({ text: server.id }).setTimestamp()]);
      }
      // resumo diário
      const today = todayKey();
      if (server.dailySummary && server.lastSummaryDay !== today) {
        store.updateServer(server, (s) => { s.lastSummaryDay = today; }, { bump: false });
        sendToServer(server, [statsEmbed(server, '24h').setTitle(`🗓️ Resumo diário — ${server.name}`.slice(0, 256))]);
      }
    }
    // servidores desprotegidos (aviso aos donos depois de 30 min na mesma situação)
    try { notifier.checkProtection(); } catch (err) { logger.error('[notificacoes]', err); }
  }
  setInterval(() => { try { checkServers(); } catch (err) { logger.error('[tarefas]', err); } }, 30 * 1000).unref();

  // Entrega o código de acesso do site (login 2 etapas) por DM aos donos.
  // Retorna true se havia pelo menos um dono para avisar.
  function deliverAuthCode(server, code) {
    const owners = server.owners || [];
    if (!owners.length) return false;
    const embed = new EmbedBuilder()
      .setTitle('🔐 Código de acesso ao site EagleEYE')
      .setColor(COLORS.info)
      .setDescription([
        `Alguém pediu acesso ao painel de **${escapeMarkdown(server.name)}** usando o token deste servidor.`,
        '',
        `Seu código é: **\`${code}\`**`,
        'Ele vale **5 minutos** e serve para **um** login.',
        '',
        '⚠️ Se não foi você, **ignore** — sem o código ninguém entra. Considere trocar o token com `/ac servidor novachave`.',
      ].join('\n'))
      .setFooter({ text: server.id })
      .setTimestamp();
    for (const id of owners) {
      client.users.fetch(id).then((u) => u.send({ embeds: [embed] })).catch(() => {});
    }
    return true;
  }

  return {
    client,
    notifier,
    enqueueDetection,
    checkServers,
    deliverAuthCode,
    onWatchlistJoin,
    start: () => client.login(token),
  };
}

module.exports = { createDiscordBot };
