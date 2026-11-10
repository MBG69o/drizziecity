'use strict';

const { PROTECTIONS } = require('./protections');

/** Versão mais recente do include (EE_VERSION em eagleeye.inc). */
const LATEST_INCLUDE = '2.2.0';

/** Proteções essenciais: se desligadas, o servidor fica muito exposto. */
const CRITICAL = ['dinheiro', 'armas', 'jetpack', 'crasher', 'rcon', 'fakekill', 'airbreak', 'velocidade_pe', 'velocidade_veic', 'godmode'];

function compareVersions(a, b) {
  const pa = String(a || '0').split('.').map((n) => Number.parseInt(n, 10) || 0);
  const pb = String(b || '0').split('.').map((n) => Number.parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    if ((pa[i] || 0) !== (pb[i] || 0)) return (pa[i] || 0) - (pb[i] || 0);
  }
  return 0;
}

const isOutdated = (version) => compareVersions(version, LATEST_INCLUDE) < 0;

/**
 * Checklist de segurança do servidor (0 a 100 pontos).
 * Cada item: { key, ok, points, label, tip }
 */
function securityReport(store, server) {
  const st = store.getStatus(server);
  const online = store.isServerOnline(server);
  const p = server.protections;
  const enabled = PROTECTIONS.filter((x) => p[x.key].enabled).length;
  const criticalOff = CRITICAL.filter((k) => !p[k].enabled);
  const criticalWarnOnly = CRITICAL.filter((k) => p[k].enabled && p[k].action === 0);
  // com o anti-cheat desligado nenhuma proteção roda: elas não contam pontos
  const active = Boolean(server.activated && server.global);
  const needActive = 'Primeiro ligue o anti-cheat.';
  const items = [
    {
      key: 'active', points: 20, ok: active,
      label: 'Anti-cheat confirmado e ligado',
      tip: server.activated ? 'Ligue com `/ac global ativo:true`.' : 'Confirme a ativação em `/ac meuservidor`.',
    },
    {
      key: 'critical', points: 20, ok: active && criticalOff.length === 0,
      label: 'Proteções essenciais ligadas',
      tip: !active ? needActive : `Desligadas: ${criticalOff.map((k) => PROTECTIONS.find((x) => x.key === k).name).join(', ')}.`,
    },
    {
      key: 'punish', points: 15, ok: active && criticalWarnOnly.length === 0,
      label: 'Proteções essenciais punindo (kick/ban)',
      tip: !active ? needActive : `Só avisando: ${criticalWarnOnly.map((k) => PROTECTIONS.find((x) => x.key === k).name).join(', ')}.`,
    },
    {
      key: 'coverage', points: 10, ok: active && enabled >= PROTECTIONS.length * 0.75,
      label: `Cobertura de proteções (${enabled}/${PROTECTIONS.length})`,
      tip: !active ? needActive : 'Ative mais proteções no `/ac painel`.',
    },
    {
      key: 'logs', points: 10, ok: Object.keys(server.logChannels || {}).length > 0,
      label: 'Canal de logs configurado',
      tip: 'Use `/ac servidor logs canal:#canal`.',
    },
    {
      key: 'include', points: 10, ok: Boolean(st.version) && !isOutdated(st.version),
      label: `Include atualizado${st.version ? ` (v${st.version})` : ''}`,
      tip: `Atualize o eagleeye.inc para a v${LATEST_INCLUDE} e recompile.`,
    },
    {
      key: 'rcon', points: 5, ok: st.rconWeak === false,
      label: 'Senha do RCON forte',
      tip: st.rconWeak === undefined ? 'O include precisa ser atualizado para verificar.' : 'Use uma senha com 8+ caracteres no server.cfg/config.json.',
    },
    {
      key: 'notify', points: 5, ok: (server.notifyMode || 'ambos') !== 'desligado',
      label: 'Notificações de segurança ativas',
      tip: 'Use `/ac servidor notificacoes modo:ambos`.',
    },
    {
      key: 'sync', points: 5, ok: online && st.configVersion === server.version,
      label: 'Servidor online e com a configuração aplicada',
      tip: online ? 'O servidor ainda não aplicou a última configuração.' : 'O servidor está offline.',
    },
  ];
  const score = items.reduce((n, i) => n + (i.ok ? i.points : 0), 0);
  const grade = score >= 90 ? 'Excelente' : score >= 70 ? 'Boa' : score >= 50 ? 'Regular' : 'Crítica';
  return { score, grade, items, criticalOff };
}

module.exports = {
  LATEST_INCLUDE, CRITICAL, compareVersions, isOutdated, securityReport,
};
