'use strict';

/**
 * CONQUISTAS / SELOS do servidor.
 *
 * Marcos que o servidor conquista pelo uso do EagleEYE: dias protegido, cheaters
 * barrados, dias sem trapaça, proteções no máximo. Aparecem no site, no painel e
 * na página de status pública (marketing que se espalha). Tudo puro e testável.
 */

const DAY = 24 * 3600 * 1000;

const TIERS_DAYS = [
  { key: 'd1', days: 1, emoji: '🛡️', title: 'Protegido' },
  { key: 'd7', days: 7, emoji: '🛡️', title: '1 semana protegido' },
  { key: 'd30', days: 30, emoji: '🏅', title: '30 dias protegido' },
  { key: 'd90', days: 90, emoji: '🏆', title: '90 dias protegido' },
  { key: 'd365', days: 365, emoji: '👑', title: '1 ano protegido' },
];
const TIERS_BANS = [
  { key: 'b10', n: 10, emoji: '🚫', title: '10 cheaters barrados' },
  { key: 'b50', n: 50, emoji: '🚫', title: '50 cheaters barrados' },
  { key: 'b100', n: 100, emoji: '⚔️', title: '100 cheaters barrados' },
  { key: 'b500', n: 500, emoji: '⚔️', title: '500 cheaters barrados' },
  { key: 'b1000', n: 1000, emoji: '💥', title: '1000 cheaters barrados' },
];
const TIERS_CLEAN = [
  { key: 'c1', hours: 24, emoji: '✨', title: '24h sem trapaça' },
  { key: 'c3', hours: 72, emoji: '✨', title: '3 dias sem trapaça' },
  { key: 'c7', hours: 168, emoji: '🌟', title: '7 dias sem trapaça' },
];

function highestTier(tiers, value, field) {
  let best = null;
  for (const t of tiers) if (value >= t[field]) best = t;
  return best;
}

/**
 * Calcula as conquistas de um servidor.
 * @returns {{earned:Array, next:Object|null, cleanHours:number, totalBans:number, protectedDays:number}}
 */
function compute(server, status, history, now = Date.now()) {
  const createdAt = server.createdAt || (history[0] && history[0].time) || now;
  const protectedDays = Math.max(0, Math.floor((now - createdAt) / DAY));
  const totalBans = (server.bans || []).length;
  const lastDet = history.length ? history[history.length - 1].time : 0;
  const cleanHours = lastDet ? Math.floor((now - lastDet) / 3600000) : Math.floor((now - createdAt) / 3600000);

  const earned = [];
  const dayT = highestTier(TIERS_DAYS, protectedDays, 'days');
  if (dayT) earned.push({ ...dayT, detail: `${protectedDays} dia(s)` });
  const banT = highestTier(TIERS_BANS, totalBans, 'n');
  if (banT) earned.push({ ...banT, detail: `${totalBans} bans` });
  const cleanT = highestTier(TIERS_CLEAN, cleanHours, 'hours');
  if (cleanT) earned.push({ ...cleanT, detail: `${cleanHours}h limpo` });

  // proteções no máximo (todas ligadas)
  const prots = Object.values(server.protections || {});
  if (prots.length && prots.every((p) => p.enabled)) {
    earned.push({ key: 'fullshield', emoji: '🔰', title: 'Escudo total', detail: 'todas as proteções ligadas' });
  }

  // próxima meta de dias protegido (para barra de progresso no site)
  const next = TIERS_DAYS.find((t) => protectedDays < t.days) || null;

  return { earned, next, cleanHours, totalBans, protectedDays };
}

module.exports = { compute, TIERS_DAYS, TIERS_BANS, TIERS_CLEAN };
