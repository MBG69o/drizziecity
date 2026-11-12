'use strict';

/**
 * SELO PÚBLICO "Protegido por EagleEYE" + página de status pública.
 *
 * O dono pode ligar um selo público (/ac selo publico) para mostrar no
 * fórum/site do servidor que ele é protegido pelo EagleEYE. A página e o selo
 * NÃO expõem nada sensível: só nome do servidor, se está online, se o
 * anti-cheat está ligado, a nota de segurança e a quantidade de jogadores.
 */

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
}

// largura aproximada do texto (fonte 11px) para o SVG ficar ajustado
function textWidth(s) {
  return Math.ceil(String(s).length * 6.2) + 12;
}

/**
 * Selo SVG no estilo "shields". state: 'protegido' (verde), 'alerta' (amarelo),
 * 'offline' (vermelho), 'desligado' (cinza).
 */
function badgeSvg(state) {
  const colors = { protegido: '#2ecc71', alerta: '#f1c40f', offline: '#e74c3c', desligado: '#7f8c8d' };
  const value = { protegido: 'protegido', alerta: 'alerta', offline: 'offline', desligado: 'desligado' }[state] || 'desconhecido';
  const color = colors[state] || '#7f8c8d';
  const left = '🦅 EagleEYE';
  const lw = textWidth(left) + 6;
  const rw = textWidth(value);
  const w = lw + rw;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="20" role="img" aria-label="EagleEYE: ${value}">
<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>
<rect rx="3" width="${w}" height="20" fill="#2b2f36"/>
<rect rx="3" x="${lw}" width="${rw}" height="20" fill="${color}"/>
<rect rx="3" width="${w}" height="20" fill="url(#s)"/>
<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,sans-serif" font-size="11">
<text x="${lw / 2}" y="14">${esc(left)}</text>
<text x="${lw + rw / 2}" y="14">${esc(value)}</text>
</g></svg>`;
}

function stateOf(online, acOn) {
  if (!online) return 'offline';
  if (!acOn) return 'desligado';
  return 'protegido';
}

/** Página pública de status (sem dados sensíveis). */
function statusPage({ name, id, online, acOn, grade, gradeLetter = 'F', players, maxPlayers }) {
  const state = stateOf(online, acOn);
  const label = { protegido: '🟢 Protegido e online', offline: '🔴 Offline', desligado: '🟡 Anti-cheat desligado' }[state];
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(name)} — Status EagleEYE</title>
<style>
body{margin:0;background:#0b0f14;color:#e6edf3;font:16px/1.6 system-ui,Segoe UI,Roboto,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center}
.card{background:#121923;border:1px solid #1f2a37;border-radius:16px;padding:28px;max-width:460px;width:92%;text-align:center}
.logo{font-size:22px;font-weight:700;margin-bottom:6px}.mut{color:#8b98a5;font-size:14px}
.state{font-size:20px;font-weight:700;margin:14px 0}
.row{display:flex;justify-content:space-between;border-top:1px solid #1f2a37;padding:10px 2px}
.g{font-weight:700}.g-A{color:#2ecc71}.g-B{color:#a3e635}.g-C{color:#f1c40f}.g-D{color:#e67e22}.g-F{color:#e74c3c}
.foot{color:#8b98a5;font-size:12px;margin-top:16px}
</style></head><body><div class="card">
<div class="logo">🦅 ${esc(name)}</div>
<div class="mut">Status de proteção</div>
<div class="state">${label}</div>
<div class="row"><span class="mut">Anti-cheat</span><span>${acOn ? 'ligado' : 'desligado'}</span></div>
<div class="row"><span class="mut">Nota de segurança</span><span class="g g-${esc(gradeLetter)}">${esc(grade)}</span></div>
<div class="row"><span class="mut">Jogadores</span><span>${online ? `${players}/${maxPlayers}` : '—'}</span></div>
<div class="foot">Protegido por <b>EagleEYE Anti-Cheat</b></div>
</div></body></html>`;
}

module.exports = { badgeSvg, statusPage, stateOf, esc };
