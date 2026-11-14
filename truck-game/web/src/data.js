// Dados do jogo: cidades, rodovias, rio, locais, caminhões, cargas e progressão.

export const BLOCK = 140;          // distância entre eixos de ruas urbanas (m)
export const ROAD_W = 20;          // largura da rua urbana (4 faixas)
export const HW_HALF = 9;          // meia largura da rodovia (2 faixas + acostamentos)
export const MAX_LEVEL = 30;
export const SEA_Z = 1790;         // litoral (mar ao sul)

// Cidades em grade. x0/z0 = coordenada da primeira rua.
export const CITIES = [
  { id: 'drizzie', name: 'Drizzie City', nx: 8, nz: 8, x0: -560, z0: -560, kind: 'metro' },
  { id: 'serrana', name: 'Vila Serrana', nx: 4, nz: 4, x0: -3000, z0: -2300, kind: 'town' },
  { id: 'azul', name: 'Porto Azul', nx: 5, nz: 3, x0: 1900, z0: 1300, kind: 'port' },
];
export const CITY = Object.fromEntries(CITIES.map((c) => [c.id, c]));
export const cx1 = (c) => c.x0 + c.nx * BLOCK;
export const cz1 = (c) => c.z0 + c.nz * BLOCK;

export function zoneOf(c, bx, bz) {
  if (c.kind === 'metro') {
    if ((bx === 1 && bz === 5) || (bx === 5 && bz === 6) || (bx === 2 && bz === 1)) return 'park';
    if (bx >= 2 && bx <= 5 && bz >= 2 && bz <= 5) return 'downtown';
    if (bx >= 6) return 'industrial';
    return 'residential';
  }
  if (c.kind === 'town') return bx === 1 && bz === 1 ? 'park' : 'town';
  if (bz === c.nz - 1) return 'port';
  if (bx >= 3) return 'industrial';
  return 'town';
}

// Rio (linha central) — atravessado por pontes nas rodovias
export const RIVER = [[-2100, -4300], [-1750, -3100], [-1400, -2050], [-1250, -1000], [-1080, 0], [-850, 800], [-350, 1400], [250, 1700], [500, 2100]];
export const RIVER_W = 54;

// Rodovias: pontos de controle (spline). from/to = cidade e saída (ou fim em local).
export const HIGHWAYS = [
  { id: 'BR-101', from: ['drizzie', 0, 4], to: ['serrana', 4, 2],
    pts: [[-570, 0], [-720, 0], [-900, 0], [-1100, -160], [-1350, -480], [-1560, -820], [-1760, -1180], [-1980, -1520], [-2200, -1840], [-2330, -2020], [-2430, -2020]], hills: 7 },
  { id: 'SP-280', from: ['drizzie', 8, 4], to: ['azul', 2, 0],
    pts: [[570, 0], [760, 0], [960, 0], [1100, 0], [1350, 80], [1620, 280], [1860, 560], [2060, 860], [2180, 1100], [2180, 1290]], hills: 9 },
  { id: 'RS-030', from: ['drizzie', 4, 0], to: null,
    pts: [[0, -570], [0, -800], [-120, -1080], [-420, -1380], [-800, -1640], [-1150, -1880], [-1450, -2000], [-1720, -2150], [-1960, -2420], [-2100, -2650], [-2100, -2900], [-2100, -3100]], hills: 10 },
];

// Locais de coleta/entrega. city: na grade (bx,bz); lot: pátio à beira da rodovia [x0,z0,x1,z1].
// side = lado do pátio voltado para a via.
export const LOCATIONS = [
  { id: 'garagem', name: 'Garagem Drizzie', city: 'drizzie', bx: 2, bz: 6, side: 'n', kind: 'garage', color: 0x2f6fde },
  { id: 'cd', name: 'Centro de Distribuição', city: 'drizzie', bx: 6, bz: 1, side: 'w', kind: 'warehouse', color: 0xe0a020 },
  { id: 'mercado', name: 'Mercado Central', city: 'drizzie', bx: 3, bz: 3, side: 'w', kind: 'market', color: 0x2e9e52 },
  { id: 'hospital', name: 'Hospital Municipal', city: 'drizzie', bx: 4, bz: 5, side: 'e', kind: 'hospital', color: 0xf0f0f0 },
  { id: 'obra', name: 'Canteiro de Obras', city: 'drizzie', bx: 1, bz: 2, side: 'e', kind: 'construction', color: 0xf0b400 },
  { id: 'posto', name: 'Posto Rodoviário', city: 'drizzie', bx: 5, bz: 7, side: 'n', kind: 'fuel', color: 0xd02020 },
  { id: 'siderurgica', name: 'Siderúrgica Aço Forte', city: 'drizzie', bx: 7, bz: 5, side: 'w', kind: 'steel', color: 0x8a3b2a },
  { id: 'silo', name: 'Silo Agrícola', city: 'serrana', bx: 0, bz: 1, side: 'e', kind: 'silo', color: 0xc8b26a },
  { id: 'fabrica', name: 'Fábrica de Móveis', city: 'serrana', bx: 2, bz: 2, side: 'w', kind: 'factory', color: 0x9a6b3f },
  { id: 'porto', name: 'Porto Azul', city: 'azul', bx: 2, bz: 2, side: 'n', kind: 'port', color: 0x1f8fb0 },
  { id: 'refinaria', name: 'Refinaria Petrosul', city: 'azul', bx: 4, bz: 1, side: 'w', kind: 'refinery', color: 0xd8d8d8 },
  { id: 'fazenda', name: 'Fazenda Boa Vista', hw: 'BR-101', lot: [-862, 11, -742, 131], side: 'n', kind: 'farm', color: 0xb03a2e },
  { id: 'eolica', name: 'Parque Eólico', hw: 'SP-280', lot: [900, -131, 1020, -11], side: 's', kind: 'wind', color: 0xeeeeee },
  { id: 'serraria', name: 'Serraria Pinheiro', hw: 'RS-030', lot: [-2089, -3020, -1969, -2900], side: 'w', kind: 'sawmill', color: 0x7a5230 },
  { id: 'pedreira', name: 'Pedreira Rocha Viva', hw: 'RS-030', lot: [-2160, -3220, -2040, -3100], side: 's', kind: 'quarry', color: 0x9c9284 },
];
export const LOC = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));

// Caminhões. cab: 'cabover' (cara-chata) ou 'conventional' (bicudo).
export const TRUCKS = [
  { id: 'mini', name: 'Mini Carga 1.0', hp: 95, cap: 1.5, mass: 1.0, level: 1, price: 0, rigid: true, axles: 2, model: 'labo', color: 0x3d7fd1, vmax: 95, desc: 'Picape de carga compacta para entregas leves.' },
  { id: 'urbano', name: 'Leve Baú 4.5', hp: 160, cap: 5, mass: 4.5, level: 2, price: 8000, rigid: true, axles: 2, model: 'canter', color: 0xf2f2f2, vmax: 100, desc: 'Caminhão leve com baú, ágil na cidade.' },
  { id: 'toco', name: 'Toco 11-240', hp: 240, cap: 12, mass: 7.5, level: 3, price: 15000, rigid: true, axles: 2, cab: 'cabover', roof: 'mid', color: 0x2f6fde, vmax: 100, desc: 'Caminhão médio de carroceria baú.' },
  { id: 'cavalo', cfg: '4x2', name: 'Cavalo 360', hp: 360, cap: 30, mass: 8, level: 6, price: 60000, rigid: false, axles: 2, cab: 'cabover', roof: 'high', color: 0xd23a2a, vmax: 110, desc: 'Cavalo mecânico cara-chata para carretas.' },
  { id: 'rodo', cfg: '6x2', name: 'Rodomax 480', hp: 480, cap: 45, mass: 9, level: 10, price: 140000, rigid: false, axles: 3, cab: 'cabover', roof: 'high', color: 0x1f9e6e, vmax: 110, desc: 'Cavalo 6x2 de teto alto para longas viagens.' },
  { id: 'titan', cfg: '6x4', name: 'Titan 620 Bicudo', hp: 620, cap: 65, mass: 10.5, level: 15, price: 280000, rigid: false, axles: 3, cab: 'conventional', roof: 'high', color: 0x222831, vmax: 105, desc: 'Bicudo 6x4 de capô longo e muita tração.' },
  { id: 'colosso', cfg: '8x4', name: 'Colosso 750 8x4', hp: 750, cap: 90, mass: 12.5, level: 20, price: 500000, rigid: false, axles: 4, cab: 'conventional', roof: 'high', color: 0xf0a000, vmax: 95, desc: 'Gigante para cargas especiais e indivisíveis.' },
];
export const TRUCK = Object.fromEntries(TRUCKS.map((t) => [t.id, t]));

// Cargas: t = toneladas; lvl = nível mínimo; trailer = tipo de implemento
export const CARGOS = [
  { id: 'encomendas', name: 'Encomendas', icon: '📦', t: 1, lvl: 1, trailer: 'box', rate: 1.0, from: ['cd'], to: ['mercado', 'hospital', 'posto', 'obra', 'fabrica'] },
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
  { id: 'combustivel', name: 'Combustível', icon: '⛽', t: 30, lvl: 9, trailer: 'tank', rate: 1.45, hazard: true, from: ['refinaria'], to: ['posto', 'fazenda', 'pedreira'] },
  { id: 'cimento', name: 'Cimento', icon: '🏗️', t: 32, lvl: 10, trailer: 'tank', model: 'silo', rate: 1.05, from: ['pedreira'], to: ['obra'] },
  { id: 'bobinas', name: 'Bobinas de Aço', icon: '🧲', t: 36, lvl: 11, trailer: 'flatbed', model: 'coils', rate: 1.2, from: ['siderurgica'], to: ['porto', 'fabrica'] },
  { id: 'vigas', name: 'Vigas de Aço', icon: '🏢', t: 42, lvl: 13, trailer: 'flatbed', model: 'beams', rate: 1.25, from: ['siderurgica'], to: ['obra'] },
  { id: 'escavadeira', name: 'Escavadeira', icon: '🚧', t: 48, lvl: 15, trailer: 'lowboy', model: 'excavator', rate: 1.55, from: ['porto'], to: ['pedreira', 'obra'] },
  { id: 'transformador', name: 'Transformador', icon: '⚡', t: 56, lvl: 18, trailer: 'lowboy', model: 'transformer', rate: 1.7, fragile: true, from: ['siderurgica', 'porto'], to: ['refinaria', 'eolica'] },
  { id: 'pa_eolica', name: 'Pá Eólica', icon: '🌀', t: 62, lvl: 20, trailer: 'lowboy', model: 'blade', rate: 1.9, fragile: true, from: ['porto'], to: ['eolica'] },
  { id: 'prensa', name: 'Prensa Industrial', icon: '🏭', t: 85, lvl: 24, trailer: 'lowboy', model: 'press', rate: 2.1, from: ['porto'], to: ['siderurgica', 'fabrica'] },
];
export const CARGO = Object.fromEntries(CARGOS.map((c) => [c.id, c]));

export const xpForLevel = (L) => 200 + 180 * (L - 1);

export function trailerMass(cargo) {
  if (!cargo) return 0;
  return cargo.trailer === 'lowboy' ? 9 : cargo.trailer === 'tank' ? 7 : 6.5;
}

// Limites do mundo (para o mapa)
export const WORLD = { x0: -3400, z0: -3500, x1: 3000, z1: 2300 };
