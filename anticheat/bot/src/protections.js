'use strict';

/**
 * Lista de proteções do anti-cheat.
 * IMPORTANTE: os IDs DEVEM ser iguais aos de anticheat/pawn/include/drizzie_ac.inc
 *
 * action: 0 = aviso (só loga), 1 = kick, 2 = ban
 * tolerance: quantas detecções em 60s antes de punir
 * value: limite numérico da proteção (quando houver - ver valueLabel)
 */
const PROTECTIONS = [
  { id: 0,  key: 'dinheiro',        name: 'Dinheiro',              desc: 'Money hack: dinheiro criado no cliente é removido.',                  valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 3, value: 0 } },
  { id: 1,  key: 'vida',            name: 'Vida',                  desc: 'Health hack: vida acima do que o servidor deu.',                       valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 3, value: 0 } },
  { id: 2,  key: 'colete',          name: 'Colete',                desc: 'Armour hack: colete acima do que o servidor deu.',                     valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 3, value: 0 } },
  { id: 3,  key: 'armas',           name: 'Armas',                 desc: 'Weapon hack: armas que o servidor não deu.',                           valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 2, value: 0 } },
  { id: 4,  key: 'velocidade_pe',   name: 'Velocidade a pé',       desc: 'Speed hack a pé.',                                                     valueLabel: 'km/h máximo',            defaults: { enabled: true,  action: 1, tolerance: 3, value: 70 } },
  { id: 5,  key: 'velocidade_veic', name: 'Velocidade em veículo', desc: 'Speed hack em veículos.',                                              valueLabel: 'km/h máximo',            defaults: { enabled: true,  action: 1, tolerance: 3, value: 360 } },
  { id: 6,  key: 'teleporte',       name: 'Teleporte',             desc: 'Teleporte não feito pelo servidor.',                                   valueLabel: 'metros por segundo',     defaults: { enabled: true,  action: 1, tolerance: 3, value: 80 } },
  { id: 7,  key: 'airbreak',        name: 'Airbreak/Fly',          desc: 'Movimento sem velocidade (airbreak, fly, noclip).',                    valueLabel: 'm/s mínimo para detectar', defaults: { enabled: true, action: 1, tolerance: 3, value: 14 } },
  { id: 8,  key: 'jetpack',         name: 'Jetpack',               desc: 'Jetpack que o servidor não deu.',                                      valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 1, value: 0 } },
  { id: 9,  key: 'reparo_veiculo',  name: 'Reparo de veículo',     desc: 'Car godmode / reparo instantâneo de veículo.',                         valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 3, value: 0 } },
  { id: 10, key: 'fakekill',        name: 'Fake kill',             desc: 'Mortes falsas e flood de mortes.',                                     valueLabel: 'mortes máximas em 5s',   defaults: { enabled: true,  action: 1, tolerance: 1, value: 4 } },
  { id: 11, key: 'rapidfire',       name: 'Rapid fire',            desc: 'Tiros rápidos demais (minigun ignorada).',                             valueLabel: 'tiros por segundo',      defaults: { enabled: true,  action: 1, tolerance: 3, value: 25 } },
  { id: 12, key: 'flood',           name: 'Flood',                 desc: 'Flood de chat e comandos.',                                            valueLabel: 'mensagens em 3s',        defaults: { enabled: true,  action: 1, tolerance: 3, value: 5 } },
  { id: 13, key: 'puxar_veiculo',   name: 'Puxar veículo',         desc: 'Entrar em veículo distante (car warp).',                               valueLabel: 'metros',                 defaults: { enabled: true,  action: 1, tolerance: 2, value: 30 } },
  { id: 14, key: 'veiculo_troll',   name: 'Veículo troll',         desc: 'Mover/arremessar veículos desocupados.',                               valueLabel: 'metros por atualização', defaults: { enabled: true,  action: 1, tolerance: 2, value: 20 } },
  { id: 15, key: 'ping',            name: 'Ping alto',             desc: 'Ping acima do limite por 5 segundos seguidos.',                        valueLabel: 'ms',                     defaults: { enabled: false, action: 1, tolerance: 1, value: 800 } },
  { id: 16, key: 'conexoes_ip',     name: 'Conexões por IP',       desc: 'Muitas contas do mesmo IP (bots / flood de conexão).',                valueLabel: 'conexões máximas',       defaults: { enabled: true,  action: 1, tolerance: 1, value: 3 } },
  { id: 17, key: 'tuning',          name: 'Tuning inválido',       desc: 'Tuning fora da oficina (crasher / tuning hack).',                     valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 1, value: 0 } },
  { id: 18, key: 'dialog',          name: 'Dialog falso',          desc: 'Resposta de dialog que não foi aberto (SA-MP; no open.mp é nativo).', valueLabel: null,                     defaults: { enabled: true,  action: 1, tolerance: 1, value: 0 } },
];

const ACTIONS = ['aviso', 'kick', 'ban'];
const ACTION_LABELS = ['⚠️ Aviso', '👢 Kick', '🔨 Ban'];

const byKey = new Map(PROTECTIONS.map((p) => [p.key, p]));
const byId = new Map(PROTECTIONS.map((p) => [p.id, p]));

function defaultProtectionState() {
  const out = {};
  for (const p of PROTECTIONS) out[p.key] = { ...p.defaults };
  return out;
}

module.exports = { PROTECTIONS, ACTIONS, ACTION_LABELS, byKey, byId, defaultProtectionState };
