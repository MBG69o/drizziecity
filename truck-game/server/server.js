// Drizzie Truck — servidor do multiplayer online.
// Só repassa o estado dos caminhões entre os jogadores de uma mesma sala (até 8).
// A física roda no celular de cada jogador; aqui não há simulação.
'use strict';
const http = require('http');
const { WebSocketServer } = require('ws');

const PORT = process.env.PORT || 8080;
const PROTO = 1;             // versão do protocolo (o jogo precisa ser igual)
const MAX_PLAYERS = 8;
const MAX_MSG = 600;         // bytes por mensagem
const MAX_RATE = 40;         // mensagens por segundo por jogador
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const QUICK = ['Oi! 👋', 'Bora de comboio? 🚚', 'Valeu! 👍', 'Cuidado! ⚠️', 'Me espera!', 'Partiu! 🛣️', 'Abastecendo ⛽', 'Tchau! 👋'];

const rooms = new Map();     // código -> { code, pub, players: Map(id -> ws), clock0, t0 }
let nextId = 1;

function makeCode() {
  for (;;) {
    let c = '';
    for (let i = 0; i < 4; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
    if (!rooms.has(c)) return c;
  }
}
function newRoom(pub) {
  const r = { code: makeCode(), pub, players: new Map(), clock0: 6 + Math.random() * 12, t0: Date.now() };
  rooms.set(r.code, r);
  return r;
}
// hora do dia da sala: 1 hora de jogo a cada 50 s (igual ao jogo)
const roomClock = (r) => (r.clock0 + (Date.now() - r.t0) / 50000) % 24;

function send(ws, obj) { if (ws.readyState === 1) ws.send(JSON.stringify(obj)); }
function broadcast(r, obj, except) {
  const s = JSON.stringify(obj);
  for (const p of r.players.values()) if (p !== except && p.readyState === 1) p.send(s);
}
function cleanName(n) {
  n = String(n || '').replace(/[\u0000-\u001f<>&"'`]/g, '').trim().slice(0, 16);
  return n || 'Motorista';
}

function join(ws, m) {
  if (m.v !== PROTO) return send(ws, { t: 'err', m: 'Versão do jogo diferente do servidor. Atualize o jogo.' });
  let r;
  if (m.mode === 'create') r = newRoom(false);
  else if (m.mode === 'code') {
    r = rooms.get(String(m.code || '').toUpperCase().trim());
    if (!r) return send(ws, { t: 'err', m: 'Sala não encontrada. Confira o código.' });
    if (r.players.size >= MAX_PLAYERS) return send(ws, { t: 'err', m: 'Sala cheia (8 jogadores).' });
  } else {
    r = [...rooms.values()].filter((x) => x.pub && x.players.size < MAX_PLAYERS).sort((a, b) => b.players.size - a.players.size)[0] || newRoom(true);
  }
  ws.room = r;
  ws.name = cleanName(m.name);
  ws.info = { truck: String(m.truck || '').slice(0, 24) };
  r.players.set(ws.id, ws);
  const others = [...r.players.values()].filter((p) => p !== ws).map((p) => ({ id: p.id, name: p.name, s: p.last || null }));
  send(ws, { t: 'welcome', id: ws.id, room: r.code, pub: r.pub, max: MAX_PLAYERS, clock: roomClock(r), players: others, quick: QUICK });
  broadcast(r, { t: 'join', id: ws.id, name: ws.name }, ws);
  console.log(`+ ${ws.name} (#${ws.id}) sala ${r.code} [${r.players.size}]`);
}

function leave(ws) {
  const r = ws.room;
  if (!r) return;
  ws.room = null;
  r.players.delete(ws.id);
  broadcast(r, { t: 'leave', id: ws.id, name: ws.name });
  if (!r.players.size) rooms.delete(r.code);
  console.log(`- ${ws.name} (#${ws.id}) sala ${r.code} [${r.players.size}]`);
}

const server = http.createServer((req, res) => {
  // página simples para checagem de saúde (Render) e para ver se está no ar
  let n = 0; for (const r of rooms.values()) n += r.players.size;
  res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'access-control-allow-origin': '*' });
  res.end(`Drizzie Truck online: ${n} jogador(es) em ${rooms.size} sala(s)\n`);
});
const wss = new WebSocketServer({ server, maxPayload: MAX_MSG * 4 });

wss.on('connection', (ws) => {
  ws.id = nextId++;
  ws.alive = true;
  ws.rate = 0; ws.rateT = Date.now();
  ws.on('pong', () => { ws.alive = true; });
  ws.on('message', (data) => {
    if (data.length > MAX_MSG) return;
    const now = Date.now();
    if (now - ws.rateT > 1000) { ws.rateT = now; ws.rate = 0; }
    if (++ws.rate > MAX_RATE) return;
    let m;
    try { m = JSON.parse(data); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;
    if (m.t === 'join') { if (!ws.room) join(ws, m); return; }
    const r = ws.room;
    if (!r) return;
    if (m.t === 's' && Array.isArray(m.d) && m.d.length <= 24) {
      // estado do caminhão: só números e textos curtos
      const d = m.d.map((v) => (typeof v === 'number' && isFinite(v) ? Math.round(v * 1000) / 1000 : typeof v === 'string' ? v.slice(0, 24) : 0));
      ws.last = d;
      broadcast(r, { t: 's', id: ws.id, d }, ws);
    } else if (m.t === 'q' && Number.isInteger(m.i) && m.i >= 0 && m.i < QUICK.length) {
      broadcast(r, { t: 'q', id: ws.id, name: ws.name, i: m.i });
    } else if (m.t === 'h') {
      broadcast(r, { t: 'h', id: ws.id, on: !!m.on }, ws);
    } else if (m.t === 'name') {
      ws.name = cleanName(m.name);
      broadcast(r, { t: 'name', id: ws.id, name: ws.name }, ws);
    }
  });
  ws.on('close', () => leave(ws));
  ws.on('error', () => leave(ws));
});

// derruba conexões mortas e manda a hora da sala de tempos em tempos
setInterval(() => {
  for (const ws of wss.clients) {
    if (!ws.alive) { ws.terminate(); continue; }
    ws.alive = false;
    try { ws.ping(); } catch (e) { /* */ }
  }
  for (const r of rooms.values()) broadcast(r, { t: 'clk', c: roomClock(r) });
}, 20000);

server.listen(PORT, () => console.log(`Drizzie Truck online na porta ${PORT}`));
