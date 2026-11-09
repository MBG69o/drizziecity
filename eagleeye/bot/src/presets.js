'use strict';

const { PROTECTIONS, defaultProtectionState } = require('./protections');

// grupos usados pelos presets
const OBVIOUS = ['jetpack', 'armas', 'dinheiro', 'crasher', 'tuning', 'dialog', 'spawn_falso', 'npc_falso', 'fakekill', 'pickup_falso', 'checkpoint_falso'];
const HEURISTIC = ['aimbot', 'godmode', 'municao', 'alcance', 'dano'];
const MOVEMENT = ['velocidade_pe', 'velocidade_veic', 'teleporte', 'airbreak', 'puxar_veiculo'];

function set(state, keys, patch) {
  for (const k of keys) Object.assign(state[k], patch);
}

/**
 * Cada preset devolve um objeto de proteções completo.
 * value (limites) fica sempre no padrão, exceto onde indicado.
 */
const PRESETS = {
  padrao: {
    name: 'Padrão',
    desc: 'Configuração recomendada pelo anti-cheat.',
    build: () => defaultProtectionState(),
  },
  leve: {
    name: 'Leve (só avisos)',
    desc: 'Tudo ligado, mas ninguém é punido: ideal para os primeiros dias e calibrar limites.',
    build: () => {
      const s = defaultProtectionState();
      for (const p of PROTECTIONS) s[p.key].action = 0;
      return s;
    },
  },
  rp: {
    name: 'Roleplay',
    desc: 'Rígido com dinheiro/armas/teleporte; c-bug vira aviso; divulgação e flood punem rápido.',
    build: () => {
      const s = defaultProtectionState();
      set(s, ['dinheiro', 'armas', 'jetpack', 'spawn_falso'], { enabled: true, action: 1, tolerance: 1 });
      set(s, ['cbug'], { enabled: true, action: 0, tolerance: 3 });
      set(s, ['divulgacao'], { enabled: true, action: 1, tolerance: 1 });
      set(s, ['flood'], { enabled: true, action: 1, tolerance: 2 });
      set(s, HEURISTIC, { action: 0 });
      return s;
    },
  },
  dm: {
    name: 'DM / TDM',
    desc: 'Foco em combate: rapid fire/alcance/dano punem; c-bug liberado; ping limitado.',
    build: () => {
      const s = defaultProtectionState();
      set(s, ['rapidfire', 'alcance', 'dano', 'municao', 'godmode'], { enabled: true, action: 1, tolerance: 2 });
      set(s, ['cbug'], { enabled: false });
      set(s, ['aimbot'], { enabled: true, action: 0, tolerance: 2 });
      set(s, ['ping'], { enabled: true, action: 1, tolerance: 1, value: 500 });
      return s;
    },
  },
  rigoroso: {
    name: 'Rigoroso',
    desc: 'Ban na primeira detecção de cheats óbvios; kick rápido para movimento e heurísticas.',
    build: () => {
      const s = defaultProtectionState();
      set(s, OBVIOUS, { enabled: true, action: 2, tolerance: 1 });
      set(s, MOVEMENT, { enabled: true, action: 1, tolerance: 2 });
      set(s, HEURISTIC, { enabled: true, action: 1, tolerance: 3 });
      return s;
    },
  },
};

module.exports = { PRESETS };
