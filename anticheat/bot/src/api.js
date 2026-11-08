'use strict';

const http = require('http');
const crypto = require('crypto');
const { URL, URLSearchParams } = require('url');
const { buildConfigResponse } = require('./config-format');
const { byId } = require('./protections');

const MAX_BODY = 4096;

function safeEqual(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

function clientIp(req) {
  return (req.socket.remoteAddress || '').replace(/^::ffff:/, '');
}

function send(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(body);
}

function toInt(v, def = 0) {
  const n = Number.parseInt(v, 10);
  return Number.isFinite(n) ? n : def;
}

/**
 * API HTTP consumida pelo include Pawn (native HTTP do SA-MP/open.mp).
 *   GET  /ac/config?key=&v=&players=&max=&ack=   -> configuração em texto
 *   POST /ac/report?key=  (x-www-form-urlencoded) -> registra detecção
 */
function startApi({ store, apiKey, host, port, allowedIps, onDetection, logger = console }) {
  const server = http.createServer((req, res) => {
    let url;
    try {
      url = new URL(req.url, 'http://localhost');
    } catch {
      return send(res, 400, 'bad request');
    }

    const ip = clientIp(req);
    if (allowedIps.length && !allowedIps.includes(ip)) return send(res, 403, 'forbidden');
    if (!safeEqual(url.searchParams.get('key') || '', apiKey)) return send(res, 401, 'unauthorized');

    if (req.method === 'GET' && url.pathname === '/ac/config') {
      const clientVersion = toInt(url.searchParams.get('v'), -1);
      const ack = toInt(url.searchParams.get('ack'), 0);
      store.server = {
        lastSeen: Date.now(),
        players: toInt(url.searchParams.get('players')),
        maxPlayers: toInt(url.searchParams.get('max')),
        address: ip,
        configVersion: clientVersion,
      };
      const commands = store.pendingCommands(ack);
      return send(res, 200, buildConfigResponse(store.state, clientVersion, commands));
    }

    if (req.method === 'POST' && url.pathname === '/ac/report') {
      let body = '';
      let aborted = false;
      req.on('data', (chunk) => {
        body += chunk;
        if (body.length > MAX_BODY) {
          aborted = true;
          send(res, 413, 'too large');
          req.destroy();
        }
      });
      req.on('end', () => {
        if (aborted) return;
        const p = new URLSearchParams(body);
        const code = toInt(p.get('cod'), -1);
        const prot = byId.get(code);
        if (!prot) return send(res, 400, 'invalid code');
        const det = {
          time: Date.now(),
          playerId: toInt(p.get('id'), -1),
          name: (p.get('nome') || '?').slice(0, 24),
          ip: (p.get('ip') || '').slice(0, 15),
          code,
          key: prot.key,
          action: Math.min(Math.max(toInt(p.get('acao')), 0), 2),
          hits: toInt(p.get('hits'), 1),
          tolerance: toInt(p.get('tol'), 1),
          detail: (p.get('det') || '-').slice(0, 128),
        };
        store.addDetection(det);
        try {
          onDetection(det);
        } catch (err) {
          logger.error('[api] erro ao processar detecção', err);
        }
        send(res, 200, 'OK');
      });
      return undefined;
    }

    return send(res, 404, 'not found');
  });

  server.listen(port, host, () => logger.log(`[api] escutando em http://${host}:${port}`));
  return server;
}

module.exports = { startApi, safeEqual };
