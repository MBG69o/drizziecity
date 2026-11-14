'use strict';

const { PROTECTIONS } = require('./protections');

/**
 * Monta a resposta em texto que o include Pawn entende (Pawn não tem parser JSON).
 *
 *   EAGLE <versao> <global> <pollSegundos>
 *   P <id> <ativo> <acao> <tolerancia> <valor>
 *   W <nick>
 *   T <novo token de acesso>
 *   C <id> <tipo> <argumento>
 *   END
 *
 * Quando o servidor já tem a versão atual responde apenas "OK", os comandos pendentes e "END".
 */
function buildConfigResponse(state, clientVersion, commands) {
  const lines = [];
  if (clientVersion !== state.version) {
    // só liga se o dono já confirmou a ativação no Discord
    const on = state.global && state.activated !== false;
    lines.push(`EAGLE ${state.version} ${on ? 1 : 0} ${state.pollSeconds}`);
    for (const p of PROTECTIONS) {
      const s = state.protections[p.key];
      lines.push(`P ${p.id} ${s.enabled ? 1 : 0} ${s.action} ${s.tolerance} ${Math.trunc(s.value) || 0}`);
    }
    for (const nick of state.whitelist) lines.push(`W ${nick}`);
  } else {
    lines.push('OK');
  }
  // token novo gerado no Discord: o include salva e passa a usar
  if (state.pendingToken) lines.push(`T ${state.pendingToken}`);
  for (const c of commands) lines.push(`C ${c.id} ${c.type} ${c.arg}`);
  lines.push('END');
  return `${lines.join('\n')}\n`;
}

/** Nick válido do SA-MP: 3-24 caracteres [A-Za-z0-9_[]().$@=] */
function isValidNick(nick) {
  return typeof nick === 'string' && /^[A-Za-z0-9_\[\]().$@=]{3,24}$/.test(nick);
}

function isValidIPv4Pattern(ip) {
  if (typeof ip !== 'string' || ip.length < 7 || ip.length > 15) return false;
  const parts = ip.split('.');
  if (parts.length !== 4) return false;
  return parts.every((p) => p === '*' || (/^\d{1,3}$/.test(p) && Number(p) <= 255));
}

/** Converte um texto livre para algo seguro de enviar ao jogo (sem acentos, sem %, sem espaços). */
function sanitizeGameText(text, max = 120) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9 .,!?:()\-+=/]/g, '')
    .trim()
    .slice(0, max)
    .replace(/ /g, '_');
}

module.exports = { buildConfigResponse, isValidNick, isValidIPv4Pattern, sanitizeGameText };
