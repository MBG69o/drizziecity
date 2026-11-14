'use strict';

const {
  EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, escapeMarkdown,
} = require('discord.js');
const { PROTECTIONS, byId, byKey } = require('./protections');
const {
  CRITICAL, LATEST_INCLUDE, isOutdated, securityReport,
} = require('./security');
const { sanitizeGameText } = require('./config-format');

const COLORS = { attack: 0xe74c3c, contained: 0x2ecc71, warn: 0xf1c40f, info: 0x3498db };

// proteções que indicam ataque (e não um cheater isolado)
const ATTACK_KEYS = new Set(['reconexao', 'conexoes_ip', 'crasher', 'rcon', 'npc_falso']);
const ATTACK_CODES = new Set([...ATTACK_KEYS].map((k) => byKey.get(k).id));

const MIN = 60 * 1000;
const HOUR = 60 * MIN;

/** Tempo mínimo entre duas notificações do mesmo tipo para o mesmo servidor. */
const COOLDOWN = {
  attack: 30 * MIN,
  bots: 30 * MIN,
  authfail: 60 * MIN,
  unconfirmed: 12 * HOUR,
  disabled: 6 * HOUR,
  weak: 24 * HOUR,
  login: 0,
  token: 0,
  config: 0,
  offline: 6 * HOUR,
  ipchange: 6 * HOUR,
  clone: 2 * HOUR,
  outdated: 72 * HOUR,
  unsynced: 12 * HOUR,
  critical: 24 * HOUR,
  nologs: 72 * HOUR,
  rconweak: 72 * HOUR,
  fp: 6 * HOUR,
  massban: HOUR,
  repeat: 12 * HOUR,
  evasion: 6 * HOUR,
  weekly: 7 * 24 * HOUR - 10 * MIN,
};
const NOTIFY_STATE_TTL = 8 * 24 * HOUR;

const BURST_WINDOW = 5 * MIN;
const BURST_LIMIT = 15;          // detecções em 5 min que indicam ataque
const BOT_ATTACK_LIMIT = 3;      // eventos de bots/conexões em 5 min
const AUTHFAIL_LIMIT = 10;       // tokens errados para o ID do servidor em 10 min

const MODES = ['ambos', 'dm', 'canal', 'desligado'];

/**
 * Notificações de segurança para os donos de cada servidor.
 * Entrega por DM e/ou no canal de logs (com menção), conforme /ac servidor notificacoes.
 */
function createNotifier({
  store, client, logger = console, now = () => Date.now(), alertChannelId = null,
}) {
  const recent = new Map(); // serverId -> [{ time, code, action }]
  const authFails = new Map(); // serverId -> [time]
  const sent = []; // histórico (para testes/depuração)

  function mode(server) {
    return MODES.includes(server.notifyMode) ? server.notifyMode : 'ambos';
  }

  // tipos com sufixo (ex.: "evasion:1.2.3.4") usam o intervalo do tipo base
  function canSend(server, type) {
    const last = (server.notifyState || {})[type] || 0;
    return now() - last >= (COOLDOWN[type.split(':')[0]] ?? HOUR);
  }

  function markSent(server, type) {
    store.updateServer(server, (s) => {
      const state = { ...(s.notifyState || {}), [type]: now() };
      for (const [k, v] of Object.entries(state)) if (now() - v > NOTIFY_STATE_TTL && k !== 'weekly') delete state[k];
      s.notifyState = state;
    }, { bump: false });
  }

  /**
   * Envia a notificação a todos os donos.
   * @param {object} opts { type, title, text(userMention) => string, color, components, force, recipients }
   *   recipients: só alguns donos (padrão: todos)
   */
  async function notify(server, {
    type, title, text, color = COLORS.warn, components = [], force = false, recipients = null,
  }) {
    const m = mode(server);
    const ownersOn = m !== 'desligado' || force;
    const toCentral = Boolean(alertChannelId) && type !== 'weekly';
    if (!ownersOn && !toCentral) return false;
    if (!force && !canSend(server, type)) return false;
    markSent(server, type);
    sent.push({ serverId: server.id, type, time: now() });

    const owners = [...new Set(recipients || server.owners)];
    const embedFor = (mention) => new EmbedBuilder()
      .setTitle(title.slice(0, 256))
      .setColor(color)
      .setDescription(text(mention).slice(0, 4000))
      .setFooter({ text: `EagleEYE · ${server.name} · ${server.id}`.slice(0, 2048) })
      .setTimestamp(now());

    if (!client || !client.isReady || !client.isReady()) return true;

    // cópia para a central de alertas da equipe (sem marcar ninguém)
    if (toCentral) {
      try {
        const channel = await client.channels.fetch(alertChannelId);
        if (channel && channel.isTextBased()) {
          const ownersText = owners.map((id) => `<@${id}>`).join(', ') || 'sem dono';
          await channel.send({
            embeds: [embedFor(owners[0] ? `<@${owners[0]}>` : 'dono')
              .addFields({ name: 'Servidor', value: `${escapeMarkdown(server.name)} (\`${server.id}\`)`, inline: true }, { name: 'Donos', value: ownersText.slice(0, 1024), inline: true })],
            allowedMentions: { parse: [] },
          });
        }
      } catch (err) {
        logger.error(`[notificacoes] central de alertas ${alertChannelId}:`, err.message);
      }
    }
    if (!ownersOn) return true;

    // DM para cada dono; quem estiver com a DM fechada recebe no canal
    const failedDm = [];
    if (m === 'ambos' || m === 'dm') {
      for (const id of owners) {
        try {
          const user = await client.users.fetch(id);
          await user.send({ embeds: [embedFor(`<@${id}>`)], components });
        } catch {
          failedDm.push(id);
        }
      }
    }
    const toChannel = m === 'canal' || m === 'ambos' ? owners : failedDm;
    if (toChannel.length) {
      for (const channelId of Object.values(server.logChannels || {})) {
        try {
          const channel = await client.channels.fetch(channelId);
          if (channel && channel.isTextBased()) {
            const mentions = toChannel.map((id) => `<@${id}>`).join(' ');
            await channel.send({
              content: mentions,
              embeds: [embedFor(mentions)],
              components,
              allowedMentions: { users: toChannel },
            });
          }
        } catch (err) {
          logger.error(`[notificacoes] canal ${channelId}:`, err.message);
        }
      }
    }
    return true;
  }

  const protName = (code) => byId.get(code)?.name ?? `#${code}`;

  /** Analisa cada detecção que chega do servidor. */
  function onDetection(server, det) {
    if (!server.owners.length) return;
    const t = now();
    const list = (recent.get(server.id) || []).filter((d) => t - d.time < BURST_WINDOW);
    list.push({ time: t, code: det.code, action: det.action, name: det.name });
    recent.set(server.id, list);

    // 1) ataque de bots / RCON / crasher
    const attacks = list.filter((d) => ATTACK_CODES.has(d.code));
    if (ATTACK_CODES.has(det.code) && (det.code === byKey.get('rcon').id || det.code === byKey.get('crasher').id || attacks.length >= BOT_ATTACK_LIMIT)) {
      const contained = attacks.filter((d) => d.action > 0).length;
      const isRcon = det.code === byKey.get('rcon').id;
      const kinds = [...new Set(attacks.map((d) => protName(d.code)))].join(', ');
      notify(server, {
        type: 'bots',
        title: '🛡️ Suposto ataque detectado',
        color: contained || isRcon ? COLORS.contained : COLORS.attack,
        text: (u) => [
          `Olá, ${u}! Seu servidor **${escapeMarkdown(server.name)}** teve um suposto ataque detectado (**${kinds}**).`,
          '',
          isRcon
            ? '✅ Conseguimos conter o ataque: o IP que tentava descobrir a senha do RCON foi **bloqueado por 1 hora**.'
            : contained
              ? `✅ Conseguimos conter o ataque: **${contained}** conexão(ões) suspeita(s) foram derrubadas e os IPs bloqueados temporariamente.`
              : '⚠️ As proteções envolvidas estão em modo **aviso**, então ninguém foi punido. Use `/ac protecao acao` para mudar para **kick**.',
          '',
          `Eventos nos últimos 5 minutos: **${attacks.length}**. Acompanhe em \`/ac historico\`.`,
        ].join('\n'),
      });
    }

    // 3) possível evasão de ban: IP banido voltou com outro nick
    if (det.ip) {
      const prev = store.activeBans(server).find((b) => b.ip === det.ip && b.name.toLowerCase() !== String(det.name).toLowerCase());
      if (prev && canSend(server, `evasion:${det.ip}`)) {
        store.queueCommand(server, 'adm', sanitizeGameText(`Possivel evasao de ban: ${det.name} usa o IP de ${prev.name} (banido)`));
        notify(server, {
          type: `evasion:${det.ip}`,
          title: '🕵️ Possível evasão de ban',
          color: COLORS.attack,
          text: (u) => [
            `Olá, ${u}! No seu servidor **${escapeMarkdown(server.name)}**, o jogador **${escapeMarkdown(det.name)}** está usando o mesmo IP (||${det.ip}||) de **${escapeMarkdown(prev.name)}**, que foi banido pelo EagleEYE.`,
            '',
            'Pode ser a mesma pessoa com outra conta. Confira com `/ac jogador` e, se for o caso, puna manualmente.',
          ].join('\n'),
        });
      }
    }

    // 4) jogador reincidente (3+ punições em 24h)
    if (det.action > 0) {
      const day = store.getHistory(server).filter((d) => d.action > 0 && now() - d.time < 24 * HOUR
        && String(d.name).toLowerCase() === String(det.name).toLowerCase());
      if (day.length >= 3) {
        notify(server, {
          type: `repeat:${String(det.name).toLowerCase()}`,
          title: '🔁 Jogador reincidente',
          text: (u) => `Olá, ${u}! O jogador **${escapeMarkdown(det.name)}** já foi punido **${day.length} vezes** nas últimas 24h no servidor **${escapeMarkdown(server.name)}** (${[...new Set(day.map((d) => protName(d.code)))].join(', ')}). Considere um ban definitivo.`,
        });
      }
    }

    // 5) possível falso positivo: uma proteção punindo muitos jogadores diferentes
    if (det.action > 0) {
      const sameProt = list.filter((d) => d.code === det.code && d.action > 0);
      const players = new Set(sameProt.map((d) => String(d.name).toLowerCase()));
      if (players.size >= 8) {
        notify(server, {
          type: `fp:${det.code}`,
          title: '🤔 Possível falso positivo',
          text: (u) => [
            `Olá, ${u}! A proteção **${protName(det.code)}** puniu **${players.size} jogadores diferentes** em 5 minutos no servidor **${escapeMarkdown(server.name)}**.`,
            '',
            'Pode ser um ataque, mas também pode ser um **falso positivo** (limite muito baixo, lag ou um sistema do gamemode). Se jogadores legítimos estão sendo punidos, mude essa proteção para **aviso** e ajuste o limite.',
          ].join('\n'),
          components: [new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId(`ee:secwarn:${server.id}:${det.code}`).setLabel(`Mudar ${protName(det.code)} para aviso`.slice(0, 80)).setStyle(ButtonStyle.Secondary))],
        });
      }
    }

    // 6) bans em massa
    const bans = list.filter((d) => d.action === 2);
    if (det.action === 2 && bans.length >= 5) {
      notify(server, {
        type: 'massban',
        title: '🔨 Muitos bans em pouco tempo',
        color: COLORS.attack,
        text: (u) => `Olá, ${u}! O EagleEYE baniu **${bans.length} jogadores** em 5 minutos no servidor **${escapeMarkdown(server.name)}**. Confira em \`/ac moderacao bans\` se está tudo certo; se algum foi engano, desbana pelo botão.`,
      });
    }

    // 2) rajada de detecções (vários cheaters ao mesmo tempo)
    if (list.length >= BURST_LIMIT) {
      const punished = list.filter((d) => d.action > 0);
      const byProt = new Map();
      for (const d of list) byProt.set(d.code, (byProt.get(d.code) || 0) + 1);
      const top = [...byProt.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3).map(([c, n]) => `${protName(c)} (${n})`).join(', ');
      notify(server, {
        type: 'attack',
        title: '🚨 Suposto ataque detectado',
        color: punished.length ? COLORS.contained : COLORS.attack,
        text: (u) => [
          `Olá, ${u}! Seu servidor **${escapeMarkdown(server.name)}** teve um suposto ataque detectado: **${list.length} detecções em 5 minutos**.`,
          `Principais: ${top}.`,
          '',
          punished.length
            ? `✅ Conseguimos conter o ataque: **${punished.length}** jogador(es) foram ${punished.some((d) => d.action === 2) ? 'kickados/banidos' : 'kickados'} pelo EagleEYE.`
            : '⚠️ As proteções estão em modo **aviso**, então ninguém foi punido. Considere `/ac protecao acao` com **kick** ou o preset **Rigoroso**.',
          '',
          'Veja os detalhes em `/ac historico` e `/ac estatisticas`.',
        ].join('\n'),
      });
    }
  }

  /** Alguém tentou usar o ID do servidor com um token errado. */
  function onAuthFail(server, ip) {
    if (!server || !server.owners.length) return;
    const t = now();
    const list = (authFails.get(server.id) || []).filter((x) => t - x < 10 * MIN);
    list.push(t);
    authFails.set(server.id, list);
    if (list.length < AUTHFAIL_LIMIT) return;
    notify(server, {
      type: 'authfail',
      title: '🔐 Tentativa de acesso bloqueada',
      color: COLORS.contained,
      text: (u) => [
        `Olá, ${u}! Alguém tentou se passar pelo seu servidor **${escapeMarkdown(server.name)}** usando tokens inválidos (**${list.length} tentativas** em 10 minutos).`,
        '',
        `✅ Conseguimos conter: as tentativas foram recusadas e o IP (||${ip}||) é bloqueado automaticamente pela API.`,
        'Se você acha que o seu token vazou, gere outro com `/ac servidor novachave`.',
      ].join('\n'),
    });
  }

  /** Novo dono fez /ac login no servidor: avisa os outros donos. */
  function onLogin(server, userId, created) {
    const others = server.owners.filter((id) => id !== userId);
    if (created || !others.length) return;
    notify(server, {
      recipients: others,
      type: 'login',
      title: '👤 Novo acesso ao seu servidor',
      color: COLORS.info,
      text: (u) => [
        `Olá, ${u}! <@${userId}> acabou de fazer login no seu servidor **${escapeMarkdown(server.name)}** com o token de acesso e agora também é dono.`,
        '',
        'Se não foi você quem passou o token, use `/ac donos remover` e depois `/ac servidor novachave`.',
      ].join('\n'),
    });
  }

  /** Token de acesso trocado: avisa os outros donos. */
  function onTokenRotated(server, userId) {
    const others = server.owners.filter((id) => id !== userId);
    if (!others.length) return;
    notify(server, {
      recipients: others,
      type: 'token',
      title: '🔑 Token de acesso trocado',
      color: COLORS.info,
      text: (u) => `Olá, ${u}! <@${userId}> gerou um novo token de acesso para **${escapeMarkdown(server.name)}**. O token antigo deixa de funcionar assim que o servidor receber o novo.`,
    });
  }

  /**
   * Cada consulta do servidor do jogo: verifica IP, versão do include e senha do RCON.
   * O IP conhecido fica salvo (server.knownAddress) para não alarmar depois de reiniciar o bot.
   */
  const ipChanges = new Map(); // serverId -> [time]
  function onStatus(server, status) {
    if (!server.owners.length || !status.address) return;
    const known = server.knownAddress;
    if (!known) {
      store.updateServer(server, (s) => { s.knownAddress = status.address; }, { bump: false });
    } else if (known !== status.address) {
      const t = now();
      const list = (ipChanges.get(server.id) || []).filter((x) => t - x < 10 * MIN);
      list.push(t);
      ipChanges.set(server.id, list);
      store.updateServer(server, (s) => { s.knownAddress = status.address; }, { bump: false });
      if (list.length >= 3) {
        notify(server, {
          type: 'clone',
          title: '🚨 Token sendo usado em dois lugares',
          color: COLORS.attack,
          text: (u) => [
            `Olá, ${u}! O token do seu servidor **${escapeMarkdown(server.name)}** está sendo usado por **dois endereços diferentes ao mesmo tempo** (||${known}|| e ||${status.address}||).`,
            '',
            'Isso indica que **o token vazou** e outra pessoa está usando. Gere um novo token agora: o servidor verdadeiro recebe o novo sozinho, e a cópia para de funcionar.',
          ].join('\n'),
          components: [new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId(`ee:secrot:${server.id}:0`).setLabel('Gerar novo token').setStyle(ButtonStyle.Danger))],
        });
      } else {
        notify(server, {
          type: 'ipchange',
          title: '🌐 Servidor conectado de outro IP',
          text: (u) => [
            `Olá, ${u}! O seu servidor **${escapeMarkdown(server.name)}** passou a se conectar de outro endereço: ||${known}|| → ||${status.address}||.`,
            '',
            'Se você trocou de hospedagem ou o IP mudou, pode ignorar. Se **não** foi você, alguém pode estar usando o seu token: gere um novo.',
          ].join('\n'),
          components: [new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId(`ee:secrot:${server.id}:0`).setLabel('Gerar novo token').setStyle(ButtonStyle.Secondary))],
        });
      }
    }
    if (status.version && isOutdated(status.version) && server.activated) {
      notify(server, {
        type: 'outdated',
        title: '⬆️ Include desatualizado',
        color: COLORS.info,
        text: (u) => `Olá, ${u}! O servidor **${escapeMarkdown(server.name)}** está com o EagleEYE **v${status.version}**, e a versão mais recente é a **v${LATEST_INCLUDE}**. Atualize o \`eagleeye.inc\` e recompile para receber as proteções e correções novas.`,
      });
    }
    if (status.rconWeak && server.activated) {
      notify(server, {
        type: 'rconweak',
        title: '🔑 Senha do RCON fraca',
        text: (u) => `Olá, ${u}! A senha do RCON do servidor **${escapeMarkdown(server.name)}** é fraca (menos de 8 caracteres ou uma senha padrão). Com ela, alguém pode tomar o controle do servidor. Troque por uma senha forte no \`server.cfg\` (\`rcon_password\`) ou \`config.json\` (\`rcon.password\`).`,
      });
    }
  }

  /** Mudanças importantes feitas por alguém: avisa os outros donos. */
  function onConfigChange(server, userId, what) {
    const others = server.owners.filter((id) => id !== userId);
    if (!others.length) return;
    notify(server, {
      recipients: others,
      type: 'config',
      title: '⚙️ Mudança importante na configuração',
      color: COLORS.info,
      text: (u) => `Olá, ${u}! <@${userId}> alterou o servidor **${escapeMarkdown(server.name)}**: **${what}**. Veja tudo em \`/ac servidor auditoria\`.`,
    });
  }

  const fixButtons = (server, ...buttons) => [new ActionRowBuilder().addComponents(buttons.map(([id, label, style]) => new ButtonBuilder()
    .setCustomId(`ee:${id}:${server.id}:0`).setLabel(label).setStyle(style)))];

  // há quanto tempo cada servidor está em cada situação de risco
  const unprotectedSince = new Map(); // `${id}:${tipo}` -> time
  const GRACE = 30 * MIN;
  function persisted(server, kind, active) {
    const key = `${server.id}:${kind}`;
    if (!active) { unprotectedSince.delete(key); return false; }
    if (!unprotectedSince.has(key)) unprotectedSince.set(key, now());
    return now() - unprotectedSince.get(key) >= GRACE;
  }

  /** Verificação periódica: servidores online que continuam desprotegidos há 30 min. */
  function checkProtection() {
    for (const server of store.servers.values()) {
      const online = server.owners.length && store.isServerOnline(server);
      const enabled = PROTECTIONS.filter((p) => server.protections[p.key].enabled).length;
      const unconfirmed = persisted(server, 'unconfirmed', online && !server.activated);
      const disabled = persisted(server, 'disabled', online && server.activated && !server.global);
      const weak = persisted(server, 'weak', online && server.activated && server.global && enabled < PROTECTIONS.length / 2);
      // servidor fora do ar há mais de 10 minutos (só se ele já tinha se conectado)
      const st = store.getStatus(server);
      if (server.owners.length && server.activated && st.lastSeen && now() - st.lastSeen > 10 * MIN) {
        notify(server, {
          type: 'offline',
          title: '🔴 Servidor fora do ar',
          color: COLORS.attack,
          text: (u) => `Olá, ${u}! O servidor **${escapeMarkdown(server.name)}** está **sem contato com o EagleEYE** desde <t:${Math.floor(st.lastSeen / 1000)}:R>. Enquanto isso, as configurações do Discord não chegam e os logs não são enviados. Confira se o servidor caiu ou se ele perdeu a conexão com a internet.`,
        });
      }
      if (!online) continue;

      // configuração do Discord não está sendo aplicada
      if (persisted(server, 'unsynced', st.configVersion !== server.version)) {
        notify(server, {
          type: 'unsynced',
          title: '⏳ Configuração não aplicada',
          text: (u) => `Olá, ${u}! O servidor **${escapeMarkdown(server.name)}** está online, mas **não aplicou as últimas mudanças** feitas no Discord há mais de 30 minutos. Isso costuma acontecer com o include desatualizado: atualize o \`eagleeye.inc\` e recompile.`,
        });
      }

      // proteções essenciais desligadas
      const criticalOff = CRITICAL.filter((k) => !server.protections[k].enabled);
      if (persisted(server, 'critical', server.activated && server.global && criticalOff.length > 0)) {
        notify(server, {
          type: 'critical',
          title: '⚠️ Proteções essenciais desligadas',
          text: (u) => `Olá, ${u}! No servidor **${escapeMarkdown(server.name)}**, estas proteções essenciais estão **desligadas**: ${criticalOff.map((k) => `**${byKey.get(k).name}**`).join(', ')}. Sem elas o servidor fica exposto aos cheats mais comuns.`,
          components: fixButtons(server, ['seccrit', 'Ligar proteções essenciais', ButtonStyle.Success]),
        });
      }

      // sem canal de logs
      if (persisted(server, 'nologs', server.activated && !Object.keys(server.logChannels || {}).length)) {
        notify(server, {
          type: 'nologs',
          title: '📭 Sem canal de logs',
          color: COLORS.info,
          text: (u) => `Olá, ${u}! O servidor **${escapeMarkdown(server.name)}** não tem canal de logs. Você não está vendo as detecções em tempo real. Use \`/ac servidor logs canal:#canal\`.`,
        });
      }

      // relatório semanal de segurança
      if (server.activated) {
        const last = (server.notifyState || {}).weekly;
        if (!last) {
          store.updateServer(server, (s) => { s.notifyState = { ...(s.notifyState || {}), weekly: now() }; }, { bump: false });
        } else if (canSend(server, 'weekly')) {
          const rep = securityReport(store, server);
          const week = store.getHistory(server).filter((d) => now() - d.time < 7 * 24 * HOUR);
          const kicks = week.filter((d) => d.action === 1).length;
          const bansWeek = week.filter((d) => d.action === 2).length;
          notify(server, {
            type: 'weekly',
            title: '📊 Relatório semanal de segurança',
            color: rep.score >= 70 ? COLORS.contained : COLORS.warn,
            text: (u) => [
              `Olá, ${u}! Este é o resumo da semana do servidor **${escapeMarkdown(server.name)}**:`,
              '',
              `🛡️ Nota de segurança: **${rep.score}/100** (${rep.grade})`,
              `🚨 Detecções: **${week.length}** · 👢 Kicks: **${kicks}** · 🔨 Bans: **${bansWeek}**`,
              '',
              ...rep.items.filter((i) => !i.ok).slice(0, 4).map((i) => `❌ ${i.label} — ${i.tip}`),
              rep.items.every((i) => i.ok) ? '✅ Tudo certo! Continue assim.' : 'Use `/ac seguranca` para ver todos os itens.',
            ].join('\n'),
          });
        }
      }

      if (unconfirmed) {
        notify(server, {
          type: 'unconfirmed',
          title: '⚠️ Servidor desprotegido',
          text: (u) => `Olá, ${u}! Seu servidor **${escapeMarkdown(server.name)}** se encontra **desprotegido** atualmente: o anti-cheat ainda não foi ativado. Ative as proteções!`,
          components: fixButtons(server, ['secon', 'Ativar anti-cheat', ButtonStyle.Success]),
        });
      } else if (disabled) {
        notify(server, {
          type: 'disabled',
          title: '⚠️ Servidor desprotegido',
          text: (u) => `Olá, ${u}! Seu servidor **${escapeMarkdown(server.name)}** se encontra **desprotegido** atualmente: o anti-cheat está **desligado**. Ative as proteções!`,
          components: fixButtons(server, ['secon', 'Ligar anti-cheat', ButtonStyle.Success]),
        });
      } else if (weak) {
        notify(server, {
          type: 'weak',
          title: '⚠️ Proteção fraca',
          text: (u) => `Olá, ${u}! Seu servidor **${escapeMarkdown(server.name)}** está com apenas **${enabled} de ${PROTECTIONS.length}** proteções ativas. Recomendamos ativar mais proteções.`,
          components: fixButtons(server, ['secall', 'Ativar todas as proteções', ButtonStyle.Primary]),
        });
      }
    }
  }

  return {
    notify, onDetection, onAuthFail, onLogin, onTokenRotated, onStatus, onConfigChange, checkProtection, sent, MODES,
  };
}

module.exports = { createNotifier, ATTACK_KEYS };
