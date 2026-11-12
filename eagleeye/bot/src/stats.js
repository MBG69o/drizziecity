'use strict';

const { byId } = require('./protections');

/**
 * Estatísticas visuais das detecções (para o site, o painel e o Discord).
 * Tudo puro e testável: recebe o histórico já lido e devolve números.
 */

const HOUR = 3600 * 1000;
const DAY = 24 * HOUR;

/** Detecções por hora nas últimas `hours` horas. Bucket 0 = hora mais antiga. */
function hourlyBuckets(history, now = Date.now(), hours = 24) {
  const buckets = Array.from({ length: hours }, (_, i) => ({
    t: now - (hours - 1 - i) * HOUR, count: 0, warn: 0, kick: 0, ban: 0,
  }));
  const start = now - hours * HOUR;
  for (const d of history) {
    if (d.time < start || d.time > now) continue;
    const idx = Math.min(hours - 1, Math.floor((d.time - start) / HOUR));
    const b = buckets[idx];
    b.count += 1;
    if (d.action === 2) b.ban += 1; else if (d.action === 1) b.kick += 1; else b.warn += 1;
  }
  return buckets;
}

/** Detecções por dia nos últimos `days` dias. */
function dailyBuckets(history, now = Date.now(), days = 7) {
  const buckets = Array.from({ length: days }, (_, i) => ({
    t: now - (days - 1 - i) * DAY, count: 0,
  }));
  const start = now - days * DAY;
  for (const d of history) {
    if (d.time < start || d.time > now) continue;
    const idx = Math.min(days - 1, Math.floor((d.time - start) / DAY));
    buckets[idx].count += 1;
  }
  return buckets;
}

/** Proteções que mais detectaram na janela. */
function topProtections(history, now = Date.now(), windowMs = DAY, n = 6) {
  const start = now - windowMs;
  const count = new Map();
  for (const d of history) {
    if (d.time < start) continue;
    count.set(d.code, (count.get(d.code) || 0) + 1);
  }
  return [...count.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([code, c]) => ({ code, key: (byId.get(code) || {}).key || String(code), name: (byId.get(code) || {}).name || String(code), count: c }));
}

/** Jogadores que mais foram detectados na janela. */
function topOffenders(history, now = Date.now(), windowMs = DAY, n = 6) {
  const start = now - windowMs;
  const count = new Map();
  for (const d of history) {
    if (d.time < start || !d.name) continue;
    const k = d.name;
    const e = count.get(k) || { name: d.name, count: 0, bans: 0 };
    e.count += 1;
    if (d.action === 2) e.bans += 1;
    count.set(k, e);
  }
  return [...count.values()].sort((a, b) => b.count - a.count).slice(0, n);
}

/** Resumo completo para um servidor. */
function serverStats(store, server, now = Date.now()) {
  const hist = store.getHistory(server);
  const h24 = hist.filter((d) => now - d.time < DAY);
  return {
    total24h: h24.length,
    bans24h: h24.filter((d) => d.action === 2).length,
    hourly: hourlyBuckets(hist, now, 24),
    daily: dailyBuckets(hist, now, 7),
    topProtections: topProtections(hist, now, DAY, 6),
    topOffenders: topOffenders(hist, now, DAY, 6),
  };
}

module.exports = { hourlyBuckets, dailyBuckets, topProtections, topOffenders, serverStats };
