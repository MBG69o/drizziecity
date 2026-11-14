'use strict';

const { byId } = require('./protections');

/**
 * WEBHOOK DE SAÍDA (integração).
 *
 * O dono liga um webhook do PRÓPRIO Discord e passa a receber os alertas de
 * detecção no servidor dele, além do bot oficial. Só aceitamos webhooks do
 * Discord (evita SSRF: o bot nunca chama um host arbitrário do cliente).
 *
 * Partes puras (validação e montagem do payload) são testáveis; o envio usa
 * fetch (injetável nos testes).
 */

const ACTION = ['aviso', 'kick', 'ban'];
const COLORS = [0xf1c40f, 0xe67e22, 0xe74c3c]; // aviso / kick / ban
const WEBHOOK_RE = /^https:\/\/(?:canary\.|ptb\.)?discord(?:app)?\.com\/api\/(?:v\d+\/)?webhooks\/\d{5,25}\/[\w-]{20,120}$/;

/** Só webhooks do Discord são aceitos. */
function isValidWebhook(url) {
  return typeof url === 'string' && url.length <= 200 && WEBHOOK_RE.test(url.trim());
}

function sanitize(s, max = 256) {
  return String(s == null ? '' : s).replace(/[`@]/g, '').slice(0, max);
}

/** Monta o payload do Discord para uma detecção. */
function detectionPayload(server, det) {
  const prot = byId.get(det.code) || { name: String(det.code) };
  const act = ACTION[det.action] || '?';
  return {
    username: 'EagleEYE',
    embeds: [{
      title: `🚨 ${prot.name}`,
      description: `**${sanitize(det.name, 32)}** (ID ${det.playerId}) — ${act}`,
      color: COLORS[det.action] ?? 0x4aa3ff,
      fields: [
        { name: 'Servidor', value: sanitize(server.name, 64), inline: true },
        { name: 'Detalhe', value: sanitize(det.detail || '-', 256), inline: true },
      ],
      footer: { text: `EagleEYE · ${server.id}` },
      timestamp: new Date(det.time || Date.now()).toISOString(),
    }],
  };
}

/** Deve enviar esta detecção para o webhook do servidor? */
function shouldSend(server, det) {
  if (!server.webhookUrl || !isValidWebhook(server.webhookUrl)) return false;
  const min = Number.isInteger(server.webhookMinAction) ? server.webhookMinAction : 1;
  return det.action >= min;
}

/**
 * Envia um payload ao webhook. fetchImpl injetável para testes.
 * Não lança: devolve {ok, status}.
 */
async function send(url, payload, { fetchImpl = globalThis.fetch, timeoutMs = 5000 } = {}) {
  if (!isValidWebhook(url)) return { ok: false, status: 0, error: 'url inválida' };
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const r = await fetchImpl(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    });
    return { ok: r.ok, status: r.status };
  } catch (e) {
    return { ok: false, status: 0, error: e.message };
  } finally {
    clearTimeout(t);
  }
}

module.exports = { isValidWebhook, detectionPayload, shouldSend, send, WEBHOOK_RE };
