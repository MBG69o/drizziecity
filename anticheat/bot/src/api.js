'use strict';

const http = require('http');
const { URL, URLSearchParams } = require('url');
const { buildConfigResponse } = require('./config-format');
const { byId } = require('./protections');

const MAX_BODY = 4096;
const MAX_PLAYERS_BODY = 16384;
const REGISTER_LIMIT = 5;              // registros por IP (padrão)
const REGISTER_WINDOW_MS = 60 * 60 * 1000;

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

function cleanName(name) {
  // remove códigos de cor {FFFFFF} e caracteres de controle do hostname
  return String(name || '').replace(/\{[0-9A-Fa-f]{6}\}/g, '').replace(/[\x00-\x1f]/g, '').trim().slice(0, 64);
}

/**
 * API HTTP consumida pelo include Pawn (native HTTP do SA-MP/open.mp).
 *   GET  /ac/register?rk=&host=&port=                         -> REG <id> <token> <chave>
 *   GET  /ac/config?id=&token=&v=&players=&max=&ack=&host=    -> configuração em texto
 *   POST /ac/report?id=&token=  (x-www-form-urlencoded)        -> registra detecção
 *   POST /ac/players?id=&token= (p=id,nome,ping,score;...)    -> jogadores online
 */
function startApi({
  store, host, port, allowedIps = [], registerKey = '', registerLimit = REGISTER_LIMIT, onDetection, onRegister = () => {}, logger = console,
}) {
  const registrations = new Map(); // ip -> [timestamps]

  function canRegister(ip) {
    const now = Date.now();
    const list = (registrations.get(ip) || []).filter((t) => now - t < REGISTER_WINDOW_MS);
    if (list.length >= registerLimit) return false;
    list.push(now);
    registrations.set(ip, list);
    return true;
  }

  function authenticate(url, res) {
    const result = store.authServer(url.searchParams.get('id'), url.searchParams.get('token'));
    if (result.error === 'unknown') { send(res, 410, 'unknown server'); return null; }
    if (result.error) { send(res, 401, 'unauthorized'); return null; }
    return result.server;
  }

  function readBody(req, res, limit, cb) {
    let body = '';
    let aborted = false;
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > limit && !aborted) {
        aborted = true;
        send(res, 413, 'too large');
        req.destroy();
      }
    });
    req.on('end', () => { if (!aborted) cb(body); });
  }

  const server = http.createServer((req, res) => {
    let url;
    try {
      url = new URL(req.url, 'http://localhost');
    } catch {
      return send(res, 400, 'bad request');
    }

    const ip = clientIp(req);
    if (allowedIps.length && !allowedIps.includes(ip)) return send(res, 403, 'forbidden');

    if (req.method === 'GET' && url.pathname === '/ac/register') {
      if (registerKey && url.searchParams.get('rk') !== registerKey) return send(res, 403, 'invalid register key');
      if (!canRegister(ip)) return send(res, 429, 'too many registrations');
      const { server: srv, token } = store.createServer({ name: cleanName(url.searchParams.get('host')), ip });
      logger.log(`[api] novo servidor registrado: ${srv.id} (${srv.name}) de ${ip}`);
      onRegister(srv);
      return send(res, 200, `REG ${srv.id} ${token} ${srv.loginKey}\nEND\n`);
    }

    if (req.method === 'GET' && url.pathname === '/ac/config') {
      const srv = authenticate(url, res);
      if (!srv) return undefined;
      const clientVersion = toInt(url.searchParams.get('v'), -1);
      const ack = toInt(url.searchParams.get('ack'), 0);
      store.setStatus(srv, {
        players: toInt(url.searchParams.get('players')),
        maxPlayers: toInt(url.searchParams.get('max')),
        port: toInt(url.searchParams.get('port')),
        address: ip,
        configVersion: clientVersion,
      });
      const hostname = cleanName(url.searchParams.get('host'));
      if (hostname && !srv.customName && hostname !== srv.name) {
        store.updateServer(srv, (s) => { s.name = hostname; }, { bump: false });
      }
      const commands = store.pendingCommands(srv, ack);
      return send(res, 200, buildConfigResponse(srv, clientVersion, commands));
    }

    if (req.method === 'POST' && url.pathname === '/ac/players') {
      const srv = authenticate(url, res);
      if (!srv) return undefined;
      readBody(req, res, MAX_PLAYERS_BODY, (body) => {
        const raw = new URLSearchParams(body).get('p') || '';
        const list = raw.split(';').filter(Boolean).slice(0, 1000).map((e) => {
          const [id, name, ping, score] = e.split(',');
          return { id: toInt(id, -1), name: String(name || '?').slice(0, 24), ping: toInt(ping), score: toInt(score) };
        }).filter((x) => x.id >= 0);
        store.setPlayers(srv, list);
        send(res, 200, 'OK');
      });
      return undefined;
    }

    if (req.method === 'POST' && url.pathname === '/ac/report') {
      const srv = authenticate(url, res);
      if (!srv) return undefined;
      readBody(req, res, MAX_BODY, (body) => {
        const p = new URLSearchParams(body);
        const code = toInt(p.get('cod'), -1);
        const prot = byId.get(code);
        if (!prot) return send(res, 400, 'invalid code');
        const det = {
          time: Date.now(),
          playerId: toInt(p.get('id'), -1),
          name: (p.get('nome') || '?').slice(0, 32),
          ip: (p.get('ip') || '').slice(0, 15),
          code,
          key: prot.key,
          action: Math.min(Math.max(toInt(p.get('acao')), 0), 2),
          hits: toInt(p.get('hits'), 1),
          tolerance: toInt(p.get('tol'), 1),
          detail: (p.get('det') || '-').slice(0, 128),
        };
        store.addDetection(srv, det);
        try {
          onDetection(srv, det);
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

module.exports = { startApi };
