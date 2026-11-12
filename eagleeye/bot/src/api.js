'use strict';

const http = require('http');
const { URL, URLSearchParams } = require('url');
const { buildConfigResponse } = require('./config-format');
const { byId } = require('./protections');
const { Guard } = require('./guard');
const { buildData, loginPage, dashboardPage, gradeLetter } = require('./dashboard');
const { badgeSvg, statusPage, stateOf } = require('./badge');
const { handleWebApp } = require('./webapp');

const MAX_BODY = 4096;
const MAX_PLAYERS_BODY = 16384;
const MAX_URL = 2048;

function clientIp(req, trustProxy) {
  // atrás de proxy (Cloudflare/Discloud) o IP real vem nos cabeçalhos do proxy
  if (trustProxy) {
    const cf = String(req.headers['cf-connecting-ip'] || '').trim();
    if (cf) return cf.replace(/^::ffff:/, '');
    const fwd = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    if (fwd) return fwd.replace(/^::ffff:/, '');
  }
  return (req.socket.remoteAddress || '').replace(/^::ffff:/, '');
}

const HOME_PAGE = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>EagleEYE API</title><style>body{font-family:system-ui,sans-serif;background:#0f1115;color:#e6e6e6;display:grid;place-items:center;min-height:100vh;margin:0}
main{max-width:520px;padding:24px;text-align:center}h1{margin:0 0 8px}p{color:#a8b0bd;line-height:1.5}code{background:#1c2029;padding:2px 6px;border-radius:4px}</style></head>
<body><main><h1>🦅 EagleEYE API</h1><p>API online. Os servidores SA-MP/open.mp se conectam aqui com o token gerado pelo include,
e os donos fazem <code>/ac login</code> no Discord do projeto.</p>
<p><a href="/app" style="color:#4aa3ff;font-weight:600">Entrar no gerenciador &rarr;</a></p></main></body></html>`;

function send(res, status, body, headers = {}) {
  if (res.headersSent) return;
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', ...headers });
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
 *   GET  /ac/config?id=&token=&v=&players=&max=&ack=&host=    -> configuração em texto
 *                                                               (WAIT se o dono ainda não fez /ac login)
 *   POST /ac/report?id=&token=  (x-www-form-urlencoded)        -> registra detecção
 *   POST /ac/players?id=&token= (p=id,nome,ping,score;...)    -> jogadores online
 *
 * Proteções contra abuso/DDoS de aplicação: ver guard.js e os limites do servidor HTTP abaixo.
 */
function startApi({
  store, host, port, allowedIps = [], trustProxy = false, onDetection, logger = console,
  guard = new Guard(), maxConnections = 1000, onAuthFail = () => {}, onStatus = () => {},
  licenses = null, requireLicense = false, dashboard = null, trust = null, security = null,
  webauth = null, onAuthCode = null,
}) {
  /** Token errado: conta para o bloqueio do IP e avisa o dono se o ID existir. */
  function authFailed(url, ip) {
    guard.authFailed(ip);
    const target = store.getServer(url.searchParams.get('id'));
    if (target) {
      try { onAuthFail(target, ip); } catch (err) { logger.error('[api] onAuthFail', err); }
    }
  }

  /** Autentica e aplica o limite por servidor. Responde sozinho quando não pode seguir. */
  function authenticate(url, res, ip) {
    const result = store.authServer(url.searchParams.get('id'), url.searchParams.get('token'));
    if (result.error === 'pending') {
      // token válido gerado pelo include, mas o dono ainda não fez /ac login
      send(res, 202, 'WAIT\nEND\n');
      return null;
    }
    if (result.error) {
      authFailed(url, ip);
      send(res, 401, 'unauthorized');
      return null;
    }
    if (!guard.allowServer(result.server.id)) {
      send(res, 429, 'too many requests', { 'Retry-After': '5' });
      return null;
    }
    return result.server;
  }

  function readBody(req, res, limit, cb) {
    // recusa na hora corpos declarados maiores que o limite
    if (toInt(req.headers['content-length'], 0) > limit) {
      send(res, 413, 'too large', { Connection: 'close' });
      req.destroy();
      return;
    }
    const chunks = [];
    let size = 0;
    let aborted = false;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit && !aborted) {
        aborted = true;
        send(res, 413, 'too large', { Connection: 'close' });
        req.destroy();
        return;
      }
      if (!aborted) chunks.push(chunk);
    });
    req.on('end', () => { if (!aborted) cb(Buffer.concat(chunks).toString('utf8')); });
    req.on('error', () => {});
  }

  const server = http.createServer({ maxHeaderSize: 8192, connectionsCheckingInterval: 1000 }, (req, res) => {
    const ip = clientIp(req, trustProxy);

    // 1) limite por IP / IP bloqueado: resposta mínima, sem processar nada
    const check = guard.checkRequest(ip);
    if (!check.ok) {
      return send(res, 429, 'too many requests', { 'Retry-After': String(check.retryAfter), Connection: 'close' });
    }

    // 2) requisições malformadas ou fora do padrão
    if (req.url.length > MAX_URL) return send(res, 414, 'uri too long', { Connection: 'close' });
    if (req.method !== 'GET' && req.method !== 'POST') return send(res, 405, 'method not allowed', { Allow: 'GET, POST' });
    let url;
    try {
      url = new URL(req.url, 'http://localhost');
    } catch {
      return send(res, 400, 'bad request');
    }

    // página inicial e verificação de saúde (públicas, sem dados)
    if (req.method === 'GET' && (url.pathname === '/' || url.pathname === '/health')) {
      if (url.pathname === '/health') return send(res, 200, 'OK');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(HOME_PAGE);
    }

    // ---- Dashboard web ao vivo (acesso por token pessoal do dono) ----
    if (dashboard && req.method === 'GET' && url.pathname === '/painel') {
      const t = (url.searchParams.get('t') || '').trim().slice(0, 64);
      const owner = t ? dashboard.resolve(t) : null;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(owner ? dashboardPage(t) : loginPage(t ? 'Token inválido ou expirado. Gere um novo com /ac painel.' : ''));
    }
    if (dashboard && req.method === 'GET' && url.pathname === '/painel/dados') {
      const owner = dashboard.resolve((url.searchParams.get('t') || '').trim().slice(0, 64));
      if (!owner) return send(res, 401, 'unauthorized');
      const data = buildData(store, trust, security, owner);
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(JSON.stringify(data));
    }

    // ---- Selo público + página de status (só se o dono ligou; sem dados sensíveis) ----
    if (req.method === 'GET' && (url.pathname.startsWith('/s/') || url.pathname.startsWith('/badge/'))) {
      const isBadge = url.pathname.startsWith('/badge/');
      const rawId = isBadge ? url.pathname.slice(7).replace(/\.svg$/i, '') : url.pathname.slice(3);
      const srv = store.getServer(decodeURIComponent(rawId).slice(0, 32));
      if (!srv || !srv.publicBadge) {
        if (isBadge) { res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'no-store' }); return res.end(badgeSvg('desligado')); }
        return send(res, 404, 'not found');
      }
      const st = store.getStatus(srv);
      const online = store.isServerOnline(srv);
      const acOn = Boolean(srv.global) && srv.activated !== false;
      if (isBadge) {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml; charset=utf-8', 'Cache-Control': 'max-age=60' });
        return res.end(badgeSvg(stateOf(online, acOn)));
      }
      const rep = security ? security.securityReport(store, srv) : { grade: '-', score: null };
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      return res.end(statusPage({ name: srv.name, id: srv.id, online, acOn, grade: rep.grade, gradeLetter: gradeLetter(rep.score), players: st.players || 0, maxPlayers: st.maxPlayers || 0 }));
    }

    // ---- site de gerenciamento (login por token + código, gestão de proteções) ----
    if (webauth && (url.pathname === '/app' || url.pathname.startsWith('/app/'))) {
      if (handleWebApp(req, res, url, { store, webauth, trust, security, send, readBody, logger, onAuthCode })) return undefined;
    }

    if (allowedIps.length && !allowedIps.includes(ip)) return send(res, 403, 'forbidden');

    // o plugin confirma a licença aqui (resposta assinada; revogação em tempo real)
    if (req.method === 'GET' && url.pathname === '/plugin/license') {
      if (!licenses) return send(res, 404, 'licensing off');
      const key = (url.searchParams.get('key') || '').slice(0, 40);
      const id = (url.searchParams.get('id') || '').slice(0, 16);
      const nonce = (url.searchParams.get('nonce') || '').slice(0, 32).replace(/[^A-Za-z0-9]/g, '');
      return send(res, 200, licenses.sign(key, id, nonce, ip).body);
    }

    if (req.method === 'GET' && url.pathname === '/ac/config') {
      const auth = store.authServer(url.searchParams.get('id'), url.searchParams.get('token'));
      if (auth.error === 'pending') {
        // o bot ainda não conhece o servidor: guarda os dados para o /ac login reconhecer
        // (limitado por IP para ninguém encher a memória com tokens inventados)
        if (store.getPending(auth.id) || guard.allowNewToken(ip)) {
          store.notePending(auth.id, auth.tokenHash, {
            name: cleanName(url.searchParams.get('host')),
            players: toInt(url.searchParams.get('players')),
            maxPlayers: toInt(url.searchParams.get('max')),
            port: toInt(url.searchParams.get('port')),
            address: ip,
          });
        }
        return send(res, 200, 'WAIT\nEND\n');
      }
      if (auth.error) {
        authFailed(url, ip);
        return send(res, 401, 'unauthorized');
      }
      const srv = auth.server;
      if (!guard.allowServer(srv.id)) return send(res, 429, 'too many requests', { 'Retry-After': '5' });
      if (requireLicense && licenses && !licenses.activeForServer(srv.id)) return send(res, 200, 'NOLICENSE\nEND\n');
      const clientVersion = toInt(url.searchParams.get('v'), -1);
      const ack = toInt(url.searchParams.get('ack'), 0);
      store.setStatus(srv, {
        players: toInt(url.searchParams.get('players')),
        maxPlayers: toInt(url.searchParams.get('max')),
        port: toInt(url.searchParams.get('port')),
        address: ip,
        configVersion: clientVersion,
        version: (url.searchParams.get('ver') || '').slice(0, 16) || undefined,
        rconWeak: url.searchParams.has('rcw') ? url.searchParams.get('rcw') === '1' : undefined,
      });
      try { onStatus(srv, store.getStatus(srv)); } catch (err) { logger.error('[api] onStatus', err); }
      const hostname = cleanName(url.searchParams.get('host'));
      if (hostname && !srv.customName && hostname !== srv.name) {
        store.updateServer(srv, (s) => { s.name = hostname; }, { bump: false });
      }
      const commands = store.pendingCommands(srv, ack);
      return send(res, 200, buildConfigResponse(srv, clientVersion, commands));
    }

    if (req.method === 'POST' && url.pathname === '/ac/players') {
      const srv = authenticate(url, res, ip);
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
      const srv = authenticate(url, res, ip);
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
        if (trust && srv.owners && srv.owners[0]) {
          try { trust.record(srv.owners[0], det.name, { action: det.action, serverId: srv.id, now: det.time }); } catch (e) { logger.error('[api] trust', e.message); }
        }
        try {
          onDetection(srv, det);
        } catch (err) {
          logger.error('[api] erro ao processar detecção', err);
        }
        return send(res, 200, 'OK');
      });
      return undefined;
    }

    return send(res, 404, 'not found');
  });

  // 3) limites do servidor HTTP: conexões lentas (slowloris), conexões demais, keep-alive longo
  server.headersTimeout = 10000;
  server.requestTimeout = 15000;
  server.keepAliveTimeout = 5000;
  server.maxRequestsPerSocket = 100;
  server.maxConnections = maxConnections;
  server.on('clientError', (err, socket) => {
    if (socket.writable) socket.end('HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n');
    else socket.destroy();
  });

  const pruneTimer = setInterval(() => guard.prune(), 60000);
  pruneTimer.unref();
  server.on('close', () => clearInterval(pruneTimer));

  server.listen(port, host, () => logger.log(`[api] escutando em http://${host}:${port}`));
  server.guard = guard;
  return server;
}

module.exports = { startApi };
