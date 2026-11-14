// Dados do jogo: mapa, locais, caminhões, cargas e progressão.

export const BLOCK = 140;          // distância entre eixos de ruas (m)
export const ROAD_W = 20;          // largura da rua (4 faixas)
export const GRID = 12;            // quarteirões por lado
export const HALF = (GRID * BLOCK) / 2; // 840
export const MAX_LEVEL = 30;

export const roadCoord = (i) => -HALF + i * BLOCK;
export const blockCenter = (b) => -HALF + b * BLOCK + BLOCK / 2;

// Zonas do mapa por quarteirão
export function zoneOf(bx, bz) {
  if (bz === GRID - 1 && bx >= 6) return 'port';
  if (bx <= 2) return 'farm';
  if (bx >= 9) return 'industrial';
  if (bx >= 4 && bx <= 7 && bz >= 3 && bz <= 7) return 'downtown';
  if ((bx === 3 && bz === 2) || (bx === 8 && bz === 6) || (bx === 5 && bz === 9)) return 'park';
  return 'residential';
}

// Locais de coleta/entrega. side = lado do pátio voltado para a rua.
export const LOCATIONS = [
  { id: 'garagem', name: 'Garagem Drizzie', bx: 4, bz: 9, side: 'n', kind: 'garage', color: 0x2f6fde },
  { id: 'cd', name: 'Centro de Distribuição', bx: 5, bz: 1, side: 's', kind: 'warehouse', color: 0xe0a020 },
  { id: 'porto', name: 'Porto de Drizzie', bx: 8, bz: 11, side: 'n', kind: 'port', color: 0x1f8fb0 },
  { id: 'fazenda', name: 'Fazenda Boa Vista', bx: 1, bz: 3, side: 'e', kind: 'farm', color: 0xb03a2e },
  { id: 'silo', name: 'Silo Agrícola', bx: 1, bz: 8, side: 'e', kind: 'silo', color: 0xc8b26a },
  { id: 'serraria', name: 'Serraria Pinheiro', bx: 0, bz: 1, side: 'e', kind: 'sawmill', color: 0x7a5230 },
  { id: 'refinaria', name: 'Refinaria Petrosul', bx: 11, bz: 2, side: 'w', kind: 'refinery', color: 0xd8d8d8 },
  { id: 'siderurgica', name: 'Siderúrgica Aço Forte', bx: 10, bz: 6, side: 'w', kind: 'steel', color: 0x8a3b2a },
  { id: 'mercado', name: 'Mercado Central', bx: 6, bz: 4, side: 'w', kind: 'market', color: 0x2e9e52 },
  { id: 'hospital', name: 'Hospital Municipal', bx: 7, bz: 6, side: 'e', kind: 'hospital', color: 0xf0f0f0 },
  { id: 'obra', name: 'Canteiro de Obras', bx: 6, bz: 8, side: 'w', kind: 'construction', color: 0xf0b400 },
  { id: 'eolica', name: 'Parque Eólico', bx: 2, bz: 11, side: 'n', kind: 'wind', color: 0xeeeeee },
  { id: 'fabrica', name: 'Fábrica de Móveis', bx: 9, bz: 9, side: 'w', kind: 'factory', color: 0x9a6b3f },
  { id: 'posto', name: 'Posto Rodoviário', bx: 3, bz: 6, side: 'e', kind: 'fuel', color: 0xd02020 },
  { id: 'pedreira', name: 'Pedreira Rocha Viva', bx: 11, bz: 10, side: 'w', kind: 'quarry', color: 0x9c9284 },
];
export const LOC = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));

// Caminhões: hp = potência (cv); cap = capacidade (t); rigid = carga na própria carroceria
export const TRUCKS = [
  { id: 'urbano', name: 'Urbano 4.5', hp: 160, cap: 5, mass: 4.5, level: 1, price: 0, rigid: true, axles: 2, color: 0xf2f2f2, vmax: 100, desc: 'VUC leve, ágil na cidade.' },
  { id: 'toco', name: 'Toco 11-240', hp: 240, cap: 12, mass: 7.5, level: 3, price: 15000, rigid: true, axles: 2, color: 0x2f6fde, vmax: 100, desc: 'Caminhão médio de carroceria baú.' },
  { id: 'cavalo', cfg: '4x2', name: 'Cavalo 360', hp: 360, cap: 30, mass: 8, level: 6, price: 60000, rigid: false, axles: 2, color: 0xd23a2a, vmax: 110, desc: 'Cavalo mecânico 4x2 para carretas.' },
  { id: 'rodo', cfg: '6x2', name: 'Rodomax 480', hp: 480, cap: 45, mass: 9, level: 10, price: 140000, rigid: false, axles: 3, color: 0x1f9e6e, vmax: 110, desc: 'Cavalo 6x2 para cargas pesadas.' },
  { id: 'titan', cfg: '6x4', name: 'Titan 620', hp: 620, cap: 65, mass: 10, level: 15, price: 280000, rigid: false, axles: 3, color: 0x222831, vmax: 105, desc: 'Cavalo 6x4 de alta tração.' },
  { id: 'colosso', cfg: '8x4', name: 'Colosso 750 8x4', hp: 750, cap: 90, mass: 12, level: 20, price: 500000, rigid: false, axles: 4, color: 0xf0a000, vmax: 95, desc: 'Gigante para cargas especiais e indivisíveis.' },
];
export const TRUCK = Object.fromEntries(TRUCKS.map((t) => [t.id, t]));

// Cargas: t = toneladas; lvl = nível mínimo; trailer = tipo de implemento
export const CARGOS = [
  { id: 'encomendas', name: 'Encomendas', icon: '📦', t: 1, lvl: 1, trailer: 'box', rate: 1.0, from: ['cd'], to: ['mercado', 'hospital', 'posto', 'fabrica', 'obra'] },
  { id: 'medicamentos', name: 'Medicamentos', icon: '💊', t: 1.5, lvl: 1, trailer: 'box', rate: 1.35, fragile: true, from: ['cd', 'porto'], to: ['hospital'] },
  { id: 'eletronicos', name: 'Eletrônicos', icon: '📺', t: 2.5, lvl: 2, trailer: 'box', rate: 1.4, fragile: true, from: ['porto'], to: ['cd', 'mercado'] },
  { id: 'hortifruti', name: 'Hortifrúti', icon: '🥬', t: 4, lvl: 1, trailer: 'box', rate: 1.1, from: ['fazenda'], to: ['mercado', 'cd'] },
  { id: 'moveis', name: 'Móveis', icon: '🛋️', t: 6, lvl: 3, trailer: 'box', rate: 1.15, fragile: true, from: ['fabrica'], to: ['mercado', 'cd', 'obra'] },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤', t: 9, lvl: 3, trailer: 'box', rate: 1.05, from: ['cd'], to: ['mercado', 'posto'] },
  { id: 'racao', name: 'Ração Animal', icon: '🌾', t: 12, lvl: 4, trailer: 'box', rate: 1.0, from: ['silo'], to: ['fazenda'] },
  { id: 'trator', name: 'Trator Agrícola', icon: '🚜', t: 14, lvl: 6, trailer: 'lowboy', model: 'tractor', rate: 1.5, from: ['porto'], to: ['fazenda', 'silo'] },
  { id: 'madeira', name: 'Toras de Madeira', icon: '🪵', t: 18, lvl: 6, trailer: 'flatbed', model: 'logs', rate: 1.05, from: ['serraria'], to: ['fabrica', 'obra', 'porto'] },
  { id: 'conteiner', name: 'Contêiner 40 pés', icon: '🚢', t: 26, lvl: 7, trailer: 'flatbed', model: 'container', rate: 1.15, from: ['porto'], to: ['cd', 'siderurgica', 'fabrica'] },
  { id: 'graos', name: 'Soja a Granel', icon: '🫘', t: 28, lvl: 8, trailer: 'bulk', rate: 1.0, from: ['fazenda', 'silo'], to: ['porto'] },
  { id: 'combustivel', name: 'Combustível', icon: '⛽', t: 30, lvl: 9, trailer: 'tank', rate: 1.45, hazard: true, from: ['refinaria'], to: ['posto', 'porto', 'fazenda'] },
  { id: 'cimento', name: 'Cimento', icon: '🏗️', t: 32, lvl: 10, trailer: 'tank', model: 'silo', rate: 1.05, from: ['pedreira'], to: ['obra'] },
  { id: 'bobinas', name: 'Bobinas de Aço', icon: '🧲', t: 36, lvl: 11, trailer: 'flatbed', model: 'coils', rate: 1.2, from: ['siderurgica'], to: ['porto', 'fabrica'] },
  { id: 'vigas', name: 'Vigas de Aço', icon: '🏢', t: 42, lvl: 13, trailer: 'flatbed', model: 'beams', rate: 1.25, from: ['siderurgica'], to: ['obra'] },
  { id: 'escavadeira', name: 'Escavadeira', icon: '🚧', t: 48, lvl: 15, trailer: 'lowboy', model: 'excavator', rate: 1.55, from: ['porto'], to: ['pedreira', 'obra'] },
  { id: 'transformador', name: 'Transformador', icon: '⚡', t: 56, lvl: 18, trailer: 'lowboy', model: 'transformer', rate: 1.7, fragile: true, from: ['siderurgica', 'porto'], to: ['refinaria', 'eolica'] },
  { id: 'pa_eolica', name: 'Pá Eólica', icon: '🌀', t: 62, lvl: 20, trailer: 'lowboy', model: 'blade', rate: 1.9, fragile: true, from: ['porto'], to: ['eolica'] },
  { id: 'prensa', name: 'Prensa Industrial', icon: '🏭', t: 85, lvl: 24, trailer: 'lowboy', model: 'press', rate: 2.1, from: ['porto'], to: ['siderurgica', 'fabrica'] },
];
export const CARGO = Object.fromEntries(CARGOS.map((c) => [c.id, c]));

// XP necessário para passar do nível L para L+1
export const xpForLevel = (L) => 200 + 180 * (L - 1);

export function trailerMass(cargo) {
  if (!cargo) return 0;
  return cargo.trailer === 'lowboy' ? 9 : cargo.trailer === 'tank' ? 7 : 6.5;
}
