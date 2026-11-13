'use strict';

/**
 * Lista de proteções do anti-cheat.
 * IMPORTANTE: os IDs DEVEM ser iguais aos de eagleeye/pawn/include/eagleeye.inc
 *
 * action: 0 = aviso (só loga), 1 = kick, 2 = ban
 * tolerance: quantas detecções em 60s antes de punir
 * value: limite numérico da proteção (quando houver - ver valueLabel)
 */
const CATEGORIES = [
  { key: 'jogador', name: 'Jogador', emoji: '🧍' },
  { key: 'armas', name: 'Armas e combate', emoji: '🔫' },
  { key: 'movimento', name: 'Movimento', emoji: '🏃' },
  { key: 'veiculos', name: 'Veículos', emoji: '🚗' },
  { key: 'rede', name: 'Rede, chat e servidor', emoji: '🌐' },
];

const p = (id, key, cat, name, desc, valueLabel, enabled, action, tolerance, value) => ({
  id, key, cat, name, desc, valueLabel, defaults: { enabled, action, tolerance, value },
});

const PROTECTIONS = [
  p(0,  'dinheiro',         'jogador',   'Dinheiro',              'Money hack: dinheiro criado no cliente é removido.',                 null,                       true,  1, 3, 0),
  p(1,  'vida',             'jogador',   'Vida',                  'Vida acima do que o servidor deu.',                                  null,                       true,  1, 3, 0),
  p(2,  'colete',           'jogador',   'Colete',                'Colete acima do que o servidor deu.',                                null,                       true,  1, 3, 0),
  p(3,  'armas',            'armas',     'Armas',                 'Armas que o servidor não deu (e tiros com elas).',                   null,                       true,  1, 2, 0),
  p(4,  'velocidade_pe',    'movimento', 'Velocidade a pé',       'Speed hack a pé.',                                                   'km/h máximo',              true,  1, 3, 70),
  p(5,  'velocidade_veic',  'veiculos',  'Velocidade em veículo', 'Speed hack em veículos.',                                            'km/h máximo',              true,  1, 3, 360),
  p(6,  'teleporte',        'movimento', 'Teleporte',             'Teleporte não feito pelo servidor.',                                 'metros por segundo',       true,  1, 3, 80),
  p(7,  'airbreak',         'movimento', 'Airbreak/Fly',          'Movimento sem velocidade (airbreak, fly, noclip).',                  'm/s mínimo',               true,  1, 3, 14),
  p(8,  'jetpack',          'jogador',   'Jetpack',               'Jetpack que o servidor não deu.',                                    null,                       true,  1, 1, 0),
  p(9,  'reparo_veiculo',   'veiculos',  'Reparo de veículo',     'Car godmode / reparo instantâneo de veículo.',                       null,                       true,  1, 3, 0),
  p(10, 'fakekill',         'armas',     'Fake kill',             'Mortes falsas e flood de mortes.',                                   'mortes máximas em 5s',     true,  1, 1, 4),
  p(11, 'rapidfire',        'armas',     'Rapid fire',            'Tiros rápidos demais (minigun ignorada).',                           'tiros por segundo',        true,  1, 3, 25),
  p(12, 'flood',            'rede',      'Flood',                 'Flood de chat e comandos.',                                          'mensagens em 3s',          true,  1, 3, 5),
  p(13, 'puxar_veiculo',    'veiculos',  'Puxar veículo',         'Entrar em veículo distante (car warp).',                             'metros',                   true,  1, 2, 30),
  p(14, 'veiculo_troll',    'veiculos',  'Veículo troll',         'Mover/arremessar veículos desocupados e puxar trailers.',            'metros por atualização',   true,  1, 2, 20),
  p(15, 'ping',             'rede',      'Ping alto',             'Ping acima do limite por 5 segundos seguidos.',                      'ms',                       false, 1, 1, 800),
  p(16, 'conexoes_ip',      'rede',      'Conexões por IP',       'Muitas contas simultâneas do mesmo IP.',                             'conexões máximas',         true,  1, 1, 3),
  p(17, 'tuning',           'veiculos',  'Tuning inválido',       'Tuning fora da oficina (crasher / tuning hack).',                    null,                       true,  1, 1, 0),
  p(18, 'dialog',           'rede',      'Dialog falso',          'Resposta de dialog não aberto (SA-MP; no open.mp é nativo).',        null,                       true,  1, 1, 0),
  p(19, 'godmode',          'jogador',   'Godmode',               'Leva tiros e a vida não diminui.',                                   'tiros sem perder vida',    true,  1, 2, 6),
  p(20, 'alcance',          'armas',     'Alcance de tiro',       'Acerto além do alcance da arma (silent aim / range hack).',          '% acima do alcance',       true,  1, 3, 30),
  p(21, 'dano',             'armas',     'Dano hack',             'Dano acima do máximo da arma.',                                      null,                       true,  1, 2, 0),
  p(22, 'municao',          'armas',     'Munição',               'Munição criada no cliente ou infinita.',                             'tiros sem gastar munição', true,  1, 2, 12),
  p(23, 'crasher',          'rede',      'Crasher',               'Dados inválidos: bala, assento, posição ou sync de veículo.',        null,                       true,  1, 1, 0),
  p(24, 'spawn_falso',      'jogador',   'Spawn falso',           'Spawnar sem permissão do servidor (ex.: pular o login).',            null,                       true,  1, 1, 0),
  p(25, 'divulgacao',       'rede',      'Divulgação',            'IPs/portas de outros servidores no chat e comandos.',                null,                       true,  1, 2, 0),
  p(26, 'spam_veiculo',     'veiculos',  'Spam de veículo',       'Entrar e sair de veículos em excesso (crasher/lag).',                'entradas/saídas em 5s',    true,  1, 2, 8),
  p(27, 'pickup_falso',     'movimento', 'Pickup falso',          'Pegar pickup estando longe dele.',                                   'metros',                   true,  1, 2, 15),
  p(28, 'checkpoint_falso', 'movimento', 'Checkpoint falso',      'Entrar em checkpoint estando longe dele.',                           'metros além do raio',      true,  1, 2, 10),
  p(29, 'cbug',             'armas',     'C-Bug',                 'Agachar logo após atirar (deagle, shotgun, rifles).',                'ms entre tiro e agachar',  false, 0, 3, 600),
  p(30, 'rcon',             'rede',      'RCON brute force',      'Senhas RCON erradas: o IP é bloqueado por 1h.',                      'tentativas',               true,  1, 1, 3),
  p(31, 'npc_falso',        'rede',      'NPC falso',             'Conexão externa se passando por NPC.',                               null,                       true,  1, 1, 0),
  p(32, 'reconexao',        'rede',      'Flood de reconexão',    'Muitas conexões do mesmo IP em 30s (bots).',                         'conexões em 30s',          true,  1, 1, 5),
  p(33, 'aimbot',           'armas',     'Aimbot',                'Taxa de acerto em jogadores suspeita (janela de 40 tiros).',         '% de acerto',              true,  0, 2, 92),
  // --- categoria EXTRA (v2.3.0) ---
  p(34, 'nickname',         'rede',      'Nick inválido',         'Nome com caracteres impossíveis ou trocado no cliente (spoof).',     null,                       true,  1, 1, 0),
  p(35, 'anim_crasher',     'rede',      'Animação crasher',      'Animação fora da faixa válida usada para travar os outros jogadores.',null,                      true,  1, 1, 0),
  p(36, 'skin_invalido',    'jogador',   'Skin inválido',         'Modelo de skin fora da faixa válida (crasher/skin hack).',           null,                       true,  1, 1, 0),
  p(37, 'spam_objeto',      'rede',      'Spam de objeto',        'Criação/anexo de objetos em excesso (crasher/lag).',                 'objetos em 5s',            true,  1, 2, 8),
  p(38, 'flood_pm',         'rede',      'Flood de PM',           'Mensagens privadas entre jogadores em excesso.',                     'PMs em 5s',                true,  1, 3, 5),
  p(39, 'buzina',           'veiculos',  'Spam de buzina',        'Buzina/sirene acionada em excesso (lag/troll).',                     'buzinas em 3s',            false, 0, 3, 10),
  p(40, 'troca_interior',   'movimento', 'Troca de interior',     'Mudança de interior/virtual world sem o servidor (teleporte).',      null,                       true,  1, 2, 0),
  p(41, 'anti_freeze',      'movimento', 'Anti-freeze',           'Mover-se enquanto congelado pelo servidor.',                         null,                       true,  1, 2, 0),
  // --- categoria EXTRA 2 (v2.10.0) ---
  p(42, 'acao_invalida',    'jogador',   'Ação especial inválida','Special action fora da faixa válida (crasher/action hack).',         null,                       true,  1, 1, 0),
  p(43, 'troca_arma',       'armas',     'Troca de arma rápida',  'Alternar armas rápido demais, impossível no jogo normal.',           'ms mínimo entre trocas',   true,  1, 3, 150),
  p(44, 'chat_crasher',     'rede',      'Chat crasher',          'Texto com caracteres/cores que travam os outros jogadores.',         null,                       true,  1, 1, 0),
  p(45, 'anexo_invalido',   'rede',      'Objeto anexado inválido','Objeto anexado ao jogador com slot/modelo/bone inválido (crasher).', null,                       true,  1, 1, 0),
  p(46, 'spam_agachar',     'movimento', 'Spam de agachar',       'Agachar/levantar em excesso (crasher/lag).',                         'em 3s',                    false, 0, 3, 10),
  // --- categoria EXTRA 3 (v2.11.0) ---
  p(47, 'driveby_ilegal',   'armas',     'Driveby ilegal',        'Motorista disparando arma (só passageiro faz driveby).',             null,                       true,  1, 2, 0),
  p(48, 'veiculo_invalido', 'veiculos',  'Veículo inválido',      'Veículo de modelo fora da faixa 400-611 (crasher).',                 null,                       true,  1, 1, 0),
  p(49, 'espectador',       'jogador',   'Bypass de espectador',  'Mover-se/agir enquanto o servidor colocou em modo espectador.',      null,                       true,  1, 2, 0),
  p(50, 'troca_skin',       'jogador',   'Troca de skin',         'Trocar de skin sem o servidor (skin diferente da que foi dada).',    null,                       true,  1, 2, 0),
];

const ACTIONS = ['aviso', 'kick', 'ban'];
const ACTION_LABELS = ['⚠️ Aviso', '👢 Kick', '🔨 Ban'];

const byKey = new Map(PROTECTIONS.map((x) => [x.key, x]));
const byId = new Map(PROTECTIONS.map((x) => [x.id, x]));
const byCategory = new Map(CATEGORIES.map((c) => [c.key, PROTECTIONS.filter((x) => x.cat === c.key)]));

function defaultProtectionState() {
  const out = {};
  for (const x of PROTECTIONS) out[x.key] = { ...x.defaults };
  return out;
}

module.exports = { PROTECTIONS, CATEGORIES, ACTIONS, ACTION_LABELS, byKey, byId, byCategory, defaultProtectionState };
