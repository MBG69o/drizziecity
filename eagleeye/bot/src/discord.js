'use strict';

const {
  Client, GatewayIntentBits, Events, MessageFlags, EmbedBuilder, escapeMarkdown,
  ActionRowBuilder, ButtonBuilder, ButtonStyle, AttachmentBuilder, ActivityType,
} = require('discord.js');
const { commands } = require('./commands');
const {
  PROTECTIONS, CATEGORIES, ACTIONS, ACTION_LABELS, byKey, byId, byCategory, defaultProtectionState,
} = require('./protections');
const { buildPanel, buildStatusEmbed, buildDetectionEmbed, COLORS } = require('./panel');
const { isValidNick, isValidIPv4Pattern, sanitizeGameText } = require('./config-format');
const { normalizeId } = require('./store');
const { PRESETS } = require('./presets');
const { collectStats, buildPresenceTexts } = require('./presence');

const MAX_WHITELIST = 64;
const LOGIN_MAX_FAILS = 5;
const LOGIN_WINDOW_MS = 10 * 60 * 1000;
const MAX_IMPORT_BYTES = 64 * 1024;
const PERIODS = { '24h': 24 * 3600e3, '7d': 7 * 24 * 3600e3, '30d': 30 * 24 * 3600e3 };
const PERIOD_LABEL = { '24h': 'últimas 24 horas', '7d': 'últimos 7 dias', '30d': 'últimos 30 dias' };
// comandos que funcionam sem servidor ativo
const NO_SERVER_SUBS = new Set(['login', 'meuservidor', 'servidor/lista', 'servidor/usar']);
// comandos que exigem ser dono do servidor
const OWNER_SUBS = new Set(['servidor/logout', 'servidor/novachave']);
const TIMEZONE = process.env.AC_TIMEZONE || 'America/Sao_Paulo';

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

  // ---------------------------------------------------------- handlers
  async function handleCommand(interaction) {
    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();
    const full = group ? `${group}/${sub}` : sub;

    if (NO_SERVER_SUBS.has(full)) return handleServerCommands(interaction, full);

    const server = store.activeServerFor(interaction.user.id);
    if (!server) return reply(interaction, '❌ Você não tem nenhum servidor. Use `/ac login token:<TOKEN>` (o token de acesso aparece no console do servidor).');
    if (!permissions.isAllowed(server, interaction)) {
      return reply(interaction, `⛔ Você não tem permissão para configurar ${serverLabel(server)}. Peça a um dono para usar \`/ac donos adicionar\`.`);
    }
    if (OWNER_SUBS.has(full) && !permissions.isOwner(server, interaction)) {
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
        const tok = store.rotateToken(server);
        audit(interaction, server, 'novo token de acesso');
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
        if (!info.total && !info.bans.length) return reply(interaction, `Nenhum registro para **${escapeMarkdown(nick)}**.`);
        const embed = new EmbedBuilder().setTitle(`🧍 ${nick}`.slice(0, 256)).setColor(info.bans.some((b) => !b.unbannedAt) ? COLORS.ban : COLORS.warn)
          .addFields(
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
    // ee:<acao>:<serverId>:<categoria>
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
  function checkServers() {
    for (const server of store.servers.values()) {
      // queda / retorno do servidor
      if (store.getStatus(server).lastSeen) {
        const online = store.isServerOnline(server);
        const prev = lastOnline.get(server.id);
        if (prev !== undefined && prev !== online && server.alerts) {
          sendToServer(server, [new EmbedBuilder()
            .setTitle((online ? `🟢 ${server.name} voltou` : `🔴 ${server.name} caiu`).slice(0, 256))
            .setColor(online ? COLORS.ok : COLORS.ban)
            .setDescription(online ? 'O servidor voltou a se comunicar com o anti-cheat.' : `Sem contato com o servidor há mais de ${server.pollSeconds * 3 + 10}s.`)
            .setFooter({ text: server.id })
            .setTimestamp()]);
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
  }
  setInterval(() => { try { checkServers(); } catch (err) { logger.error('[tarefas]', err); } }, 30 * 1000).unref();

  return {
    client,
    enqueueDetection,
    checkServers,
    start: () => client.login(token),
  };
}

module.exports = { createDiscordBot };
