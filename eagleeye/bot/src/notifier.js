'use strict';

const {
  EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, escapeMarkdown,
} = require('discord.js');
const { PROTECTIONS, byId, byKey } = require('./protections');

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
};

const BURST_WINDOW = 5 * MIN;
const BURST_LIMIT = 15;          // detecções em 5 min que indicam ataque
const BOT_ATTACK_LIMIT = 3;      // eventos de bots/conexões em 5 min
const AUTHFAIL_LIMIT = 10;       // tokens errados para o ID do servidor em 10 min

const MODES = ['ambos', 'dm', 'canal', 'desligado'];

/**
 * Notificações de segurança para os donos de cada servidor.
 * Entrega por DM e/ou no canal de logs (com menção), conforme /ac servidor notificacoes.
 */
function createNotifier({ store, client, logger = console, now = () => Date.now() }) {
  const recent = new Map(); // serverId -> [{ time, code, action }]
  const authFails = new Map(); // serverId -> [time]
  const sent = []; // histórico (para testes/depuração)

  function mode(server) {
    return MODES.includes(server.notifyMode) ? server.notifyMode : 'ambos';
  }

  function canSend(server, type) {
    const last = (server.notifyState || {})[type] || 0;
    return now() - last >= (COOLDOWN[type] ?? HOUR);
  }

  function markSent(server, type) {
    store.updateServer(server, (s) => {
      s.notifyState = { ...(s.notifyState || {}), [type]: now() };
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
    if (m === 'desligado' && !force) return false;
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
  const pastAction = (a) => ['', 'kickado', 'banido'][a];

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
      if (!online) continue;
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
    notify, onDetection, onAuthFail, onLogin, onTokenRotated, checkProtection, sent, MODES,
  };
}

module.exports = { createNotifier, ATTACK_KEYS };
