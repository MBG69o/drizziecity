// Dados do jogo: cidades, rodovias, rio, locais, caminhões, cargas e progressão.

export const BLOCK = 140;          // distância entre eixos de ruas urbanas (m)
export const ROAD_W = 20;          // largura da rua urbana (4 faixas)
export const HW_HALF = 9;          // meia largura da rodovia (2 faixas + acostamentos)
export const MAX_LEVEL = 30;
export const SEA_Z = 1790;         // litoral (mar ao sul)

// Cidades em grade. x0/z0 = coordenada da primeira rua.
export const CITIES = [
  { id: 'drizzie', name: 'Drizzie City', nx: 8, nz: 8, x0: -560, z0: -560, kind: 'metro' },
  { id: 'serrana', name: 'Vila Serrana', nx: 4, nz: 4, x0: -3000, z0: -2300, kind: 'town', surface: 'cobble' },
  { id: 'azul', name: 'Porto Azul', nx: 5, nz: 3, x0: 1900, z0: 1300, kind: 'port' },
  { id: 'monte', name: 'Monte Alto', nx: 4, nz: 3, x0: 2700, z0: -2300, kind: 'mountain', surface: 'cobble' },
  { id: 'rioclaro', name: 'Rio Claro', nx: 5, nz: 4, x0: -1700, z0: -5600, kind: 'town', lights: true },
  { id: 'luzia', name: 'Santa Luzia', nx: 6, nz: 5, x0: -6600, z0: -6000, kind: 'metro' },
  { id: 'novaesp', name: 'Nova Esperança', nx: 4, nz: 4, x0: -6400, z0: -1200, kind: 'town' },
  { id: 'lagoa', name: 'Lagoa Dourada', nx: 4, nz: 3, x0: -5200, z0: 900, kind: 'port' },
  { id: 'pedra', name: 'Pedra Branca', nx: 4, nz: 4, x0: 1800, z0: -6400, kind: 'mountain', surface: 'cobble' },
  { id: 'campo', name: 'Campo Verde', nx: 4, nz: 4, x0: 6200, z0: -1600, kind: 'town', lights: true },
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
  if (c.kind === 'town' || c.kind === 'mountain') return bx === 1 && bz === 1 ? 'park' : 'town';
  if (bz === c.nz - 1) return 'port';
  if (bx >= 3) return 'industrial';
  return 'town';
}

// Rio (linha central) — atravessado por pontes nas rodovias
export const RIVER = [[-3050, -10200], [-2950, -8200], [-2700, -6700], [-2380, -5450], [-2100, -4300], [-1750, -3100], [-1400, -2050], [-1250, -1000], [-1080, 0], [-850, 800], [-350, 1400], [250, 1700], [500, 2100]];
export const RIVER_W = 54;

// Pisos: aderência (mu), resistência ao rolamento (crr), trepidação e nome
export const SURFACES = {
  asphalt: { name: 'Asfalto', mu: 0.85, crr: 0.008, shake: 0 },
  cobble: { name: 'Calçamento', mu: 0.7, crr: 0.014, shake: 0.035 },
  gravel: { name: 'Cascalho', mu: 0.58, crr: 0.022, shake: 0.025 },
  dirt: { name: 'Terra', mu: 0.5, crr: 0.03, shake: 0.02 },
  mud: { name: 'Lama', mu: 0.3, crr: 0.075, shake: 0.012 },
  concrete: { name: 'Concreto', mu: 0.8, crr: 0.009, shake: 0 },
};

// Rodovias e estradas: pontos de controle (spline). from/to = cidade e saída, ['hw', id] = entroncamento
// (o primeiro ponto fica sobre a via principal) ou null (termina num pátio).
export const HIGHWAYS = [
  { id: 'BR-101', from: ['drizzie', 0, 4], to: ['serrana', 4, 2],
    pts: [[-570, 0], [-720, 0], [-900, 0], [-1100, -160], [-1350, -480], [-1560, -820], [-1760, -1180], [-1980, -1520], [-2200, -1840], [-2330, -2020], [-2430, -2020]], hills: 7 },
  { id: 'SP-280', from: ['drizzie', 8, 4], to: ['azul', 2, 0],
    pts: [[570, 0], [760, 0], [960, 0], [1100, 0], [1350, 80], [1620, 280], [1860, 560], [2060, 860], [2180, 1100], [2180, 1290]], hills: 9 },
  { id: 'BR-040', from: ['azul', 5, 1], to: ['monte', 2, 3],
    pts: [[2610, 1440], [2760, 1440], [2950, 1380], [3150, 1150], [3300, 800], [3350, 400], [3250, 0], [3150, -400], [3250, -800], [3200, -1200], [3050, -1550], [2980, -1750], [2980, -1870]], hills: 16 },
  { id: 'RS-030', from: ['drizzie', 4, 0], to: null,
    pts: [[0, -570], [0, -800], [-120, -1080], [-420, -1380], [-800, -1640], [-1150, -1880], [-1450, -2000], [-1720, -2150], [-1960, -2420], [-2100, -2650], [-2100, -2900], [-2100, -3100]], hills: 10 },
  { id: 'Estrada do Café', surface: 'dirt', half: 5.5, from: ['hw', 'BR-101'], to: null,
    pts: [[-1760, -1180], [-1880, -1080], [-2020, -980], [-2250, -850], [-2450, -640], [-2600, -470], [-2600, -400]] },
  { id: 'Trilha do Rio Escuro', surface: 'mud', half: 5, from: ['hw', 'RS-030'], to: null,
    pts: [[-420, -1380], [-380, -1500], [-300, -1700], [-150, -2000], [-50, -2300], [100, -2500], [100, -2570]] },
  { id: 'Estrada da Olaria', surface: 'gravel', half: 6, from: ['hw', 'SP-280'], to: null,
    pts: [[1350, 80], [1380, -40], [1450, -200], [1550, -500], [1650, -760], [1650, -820]] },
  // ---- novas rodovias (mapa expandido) ----
  { id: 'BR-153', from: ['hw', 'RS-030'], to: ['rioclaro', 2, 4],
    pts: [[-1720, -2150], [-1600, -2400], [-1450, -2900], [-1350, -3500], [-1300, -4100], [-1350, -4600], [-1420, -4900], [-1420, -5040]] },
  { id: 'BR-277', from: ['serrana', 0, 2], to: ['novaesp', 4, 2],
    pts: [[-3010, -2020], [-3300, -2020], [-3700, -1900], [-4200, -1650], [-4700, -1400], [-5200, -1150], [-5600, -950], [-5830, -920]] },
  { id: 'BR-376', from: ['novaesp', 2, 0], to: ['luzia', 3, 5],
    pts: [[-6120, -1210], [-6120, -1500], [-6250, -2200], [-6300, -3000], [-6200, -3800], [-6150, -4500], [-6180, -5000], [-6180, -5290]] },
  { id: 'BR-470', from: ['luzia', 6, 2], to: ['rioclaro', 0, 2],
    pts: [[-5750, -5720], [-5400, -5720], [-4800, -5850], [-4200, -5900], [-3600, -5750], [-3000, -5550], [-2400, -5420], [-2000, -5340], [-1710, -5320]] },
  { id: 'SC-401', from: ['rioclaro', 5, 2], to: ['pedra', 0, 2],
    pts: [[-990, -5320], [-600, -5320], [0, -5500], [600, -5800], [1200, -6050], [1600, -6120], [1790, -6120]] },
  { id: 'BR-282', from: ['monte', 2, 0], to: ['pedra', 2, 4],
    pts: [[2980, -2310], [2980, -2600], [2900, -3100], [2700, -3700], [2500, -4300], [2300, -4900], [2120, -5400], [2080, -5830]] },
  { id: 'BR-364', from: ['hw', 'BR-040'], to: ['campo', 2, 4],
    pts: [[3300, 800], [3600, 820], [4200, 700], [4800, 450], [5400, 100], [5900, -350], [6300, -700], [6480, -900], [6480, -1030]] },
  { id: 'SP-055', from: ['novaesp', 2, 4], to: ['lagoa', 2, 0],
    pts: [[-6120, -630], [-6120, -300], [-5900, 200], [-5500, 550], [-5100, 800], [-4920, 890]] },
  { id: 'Rodovia do Sol', from: ['drizzie', 2, 8], to: ['lagoa', 4, 1],
    pts: [[-280, 570], [-300, 850], [-700, 1100], [-1300, 1150], [-2000, 1100], [-2800, 1050], [-3600, 1080], [-4200, 1040], [-4630, 1040]] },
  // saídas para outros estados (terminam no posto fiscal da divisa)
  { id: 'BR-116', from: ['luzia', 3, 0], to: null,
    pts: [[-6180, -6010], [-6180, -6300], [-6000, -7000], [-5700, -7800], [-5600, -8600], [-5600, -9300], [-5600, -9395]] },
  { id: 'BR-364 Leste', from: ['campo', 4, 2], to: null,
    pts: [[6770, -1320], [7100, -1320], [7700, -1450], [8300, -1500], [8900, -1500], [9400, -1500], [9495, -1500]] },
  { id: 'Estrada da Usina', surface: 'gravel', half: 6, from: ['hw', 'BR-364'], to: null,
    pts: [[4800, 450], [4850, 300], [4900, 50], [4980, -250], [5000, -480], [5000, -540]] },
  { id: 'Estrada do Mangue', surface: 'mud', half: 5, from: ['hw', 'Rodovia do Sol'], to: null,
    pts: [[-2800, 1050], [-2850, 900], [-2950, 650], [-3050, 400], [-3100, 230], [-3100, 160]] },
];
for (const h of HIGHWAYS) { h.surface = h.surface || 'asphalt'; h.half = h.half || HW_HALF; }

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
  { id: 'mineradora', name: 'Mineradora Serra Negra', city: 'monte', bx: 3, bz: 0, side: 'w', kind: 'quarry', color: 0x6e5a4a },
  { id: 'vinicola', name: 'Vinícola Monte Alto', city: 'monte', bx: 0, bz: 2, side: 'e', kind: 'farm', color: 0x7b1f3a },
  { id: 'porto', name: 'Porto Azul', city: 'azul', bx: 2, bz: 2, side: 'n', kind: 'port', color: 0x1f8fb0 },
  { id: 'refinaria', name: 'Refinaria Petrosul', city: 'azul', bx: 4, bz: 1, side: 'w', kind: 'refinery', color: 0xd8d8d8 },
  { id: 'fazenda', name: 'Fazenda Boa Vista', hw: 'BR-101', lot: [-862, 11, -742, 131], side: 'n', kind: 'farm', color: 0xb03a2e },
  { id: 'eolica', name: 'Parque Eólico', hw: 'SP-280', lot: [900, -131, 1020, -11], side: 's', kind: 'wind', color: 0xeeeeee },
  { id: 'serraria', name: 'Serraria Pinheiro', hw: 'RS-030', lot: [-2089, -3020, -1969, -2900], side: 'w', kind: 'sawmill', color: 0x7a5230 },
  { id: 'cafezal', name: 'Fazenda Café do Vale', hw: 'Estrada do Café', lot: [-2660, -400, -2540, -280], side: 'n', kind: 'farm', color: 0x5b3a1e },
  { id: 'madeireira', name: 'Madeireira Rio Escuro', hw: 'Trilha do Rio Escuro', lot: [40, -2690, 160, -2570], side: 's', kind: 'sawmill', color: 0x4f3a24 },
  { id: 'olaria', name: 'Olaria Barro Vermelho', hw: 'Estrada da Olaria', lot: [1590, -940, 1710, -820], side: 's', kind: 'quarry', color: 0xa04a2a },
  { id: 'pedreira', name: 'Pedreira Rocha Viva', hw: 'RS-030', lot: [-2160, -3220, -2040, -3100], side: 's', kind: 'quarry', color: 0x9c9284 },
  // ---- mapa expandido (like = funciona como o local indicado nas cargas) ----
  { id: 'cd_luzia', like: 'cd', name: 'CD Santa Luzia', city: 'luzia', bx: 5, bz: 1, side: 'w', kind: 'warehouse', color: 0xe0a020 },
  { id: 'mercado_luzia', like: 'mercado', name: 'Atacadão Luzia', city: 'luzia', bx: 3, bz: 3, side: 'w', kind: 'market', color: 0x2e9e52 },
  { id: 'hospital_luzia', like: 'hospital', name: 'Hospital Santa Luzia', city: 'luzia', bx: 1, bz: 3, side: 'e', kind: 'hospital', color: 0xf0f0f0 },
  { id: 'obra_luzia', like: 'obra', name: 'Obra do Metrô', city: 'luzia', bx: 4, bz: 4, side: 'n', kind: 'construction', color: 0xf0b400 },
  { id: 'fabrica_luzia', like: 'fabrica', name: 'Indústria Luzimóveis', city: 'luzia', bx: 0, bz: 0, side: 'e', kind: 'factory', color: 0x9a6b3f },
  { id: 'porto_seco', like: 'porto', name: 'Porto Seco Santa Luzia', city: 'luzia', bx: 5, bz: 4, side: 'w', kind: 'port', color: 0x1f8fb0 },
  { id: 'silo_rio', like: 'silo', name: 'Armazém Rio Claro', city: 'rioclaro', bx: 0, bz: 3, side: 'e', kind: 'silo', color: 0xc8b26a },
  { id: 'serraria_rio', like: 'serraria', name: 'Serraria Rio Claro', city: 'rioclaro', bx: 4, bz: 0, side: 'w', kind: 'sawmill', color: 0x7a5230 },
  { id: 'mercado_rio', like: 'mercado', name: 'Supermercado Ribeirinho', city: 'rioclaro', bx: 2, bz: 2, side: 'w', kind: 'market', color: 0x2e9e52 },
  { id: 'coop', like: 'silo', name: 'Cooperativa Agrícola', city: 'novaesp', bx: 3, bz: 0, side: 'w', kind: 'silo', color: 0xc8b26a },
  { id: 'fazenda_ne', like: 'fazenda', name: 'Fazenda Esperança', city: 'novaesp', bx: 0, bz: 3, side: 'e', kind: 'farm', color: 0xb03a2e },
  { id: 'posto_ne', like: 'posto', name: 'Posto Esperança', city: 'novaesp', bx: 2, bz: 3, side: 'n', kind: 'fuel', color: 0xd02020 },
  { id: 'mina_pb', like: 'mineradora', name: 'Mineração Pedra Branca', city: 'pedra', bx: 3, bz: 3, side: 'w', kind: 'quarry', color: 0x6e5a4a },
  { id: 'pedreira_pb', like: 'pedreira', name: 'Britadeira Serra Branca', city: 'pedra', bx: 0, bz: 0, side: 'e', kind: 'quarry', color: 0x9c9284 },
  { id: 'frigorifico', name: 'Frigorífico Campo Verde', city: 'campo', bx: 3, bz: 1, side: 'w', kind: 'factory', color: 0xa83232 },
  { id: 'usina', name: 'Usina de Açúcar Verde-Mar', hw: 'Estrada da Usina', lot: [4940, -660, 5060, -540], side: 's', kind: 'factory', color: 0x6b8e23 },
  { id: 'fazenda_cv', like: 'fazenda', name: 'Fazenda Campo Verde', city: 'campo', bx: 0, bz: 3, side: 'e', kind: 'farm', color: 0xb03a2e },
  { id: 'porto_lagoa', like: 'porto', name: 'Porto de Lagoa Dourada', city: 'lagoa', bx: 1, bz: 2, side: 'n', kind: 'port', color: 0x1f8fb0 },
  { id: 'mercado_lagoa', like: 'mercado', name: 'Mercado do Peixe', city: 'lagoa', bx: 0, bz: 0, side: 'e', kind: 'market', color: 0x2e9e52 },
  { id: 'mangue', name: 'Aquicultura do Mangue', hw: 'Estrada do Mangue', lot: [-3160, 40, -3040, 160], side: 's', kind: 'farm', color: 0x2a7f6f },
  { id: 'divisa_n', like: 'porto', name: 'Posto Fiscal — Divisa Norte', hw: 'BR-116', lot: [-5660, -9515, -5540, -9395], side: 's', kind: 'warehouse', color: 0x445566 },
  { id: 'divisa_l', like: 'porto', name: 'Posto Fiscal — Divisa Leste', hw: 'BR-364 Leste', lot: [9495, -1560, 9615, -1440], side: 'w', kind: 'warehouse', color: 0x445566 },
];
export const LOC = Object.fromEntries(LOCATIONS.map((l) => [l.id, l]));

// Caminhões. cab: 'cabover' (cara-chata) ou 'conventional' (bicudo).
export const TRUCKS = [
  { id: 'mini', tank: 40, kml: 9.5, track: 1.25, cgH: 0.8, drive: 0.45, tireMu: 0.95, steerLock: 0.66, name: 'Mini Carga 1.0', hp: 95, cap: 1.5, mass: 1.0, level: 1, price: 0, rigid: true, axles: 2, model: 'labo', color: 0x3d7fd1, vmax: 95, desc: 'Picape de carga compacta para entregas leves.' },
  { id: 'urbano', tank: 110, kml: 5.2, track: 1.6, cgH: 1.0, drive: 0.5, tireMu: 0.95, steerLock: 0.62, name: 'Leve Baú 4.5', hp: 160, cap: 5, mass: 4.5, level: 2, price: 8000, rigid: true, axles: 2, model: 'canter', color: 0xf2f2f2, vmax: 100, desc: 'Caminhão leve com baú, ágil na cidade.' },
  { id: 'toco', tank: 200, kml: 3.6, track: 1.85, cgH: 1.2, drive: 0.5, tireMu: 0.92, steerLock: 0.6, name: 'Toco 11-240', hp: 240, cap: 12, mass: 7.5, level: 3, price: 15000, rigid: true, axles: 2, cab: 'cabover', roof: 'mid', color: 0x2f6fde, vmax: 100, desc: 'Caminhão médio de carroceria baú.' },
  { id: 'cavalo', tank: 450, kml: 2.6, track: 2.0, cgH: 1.05, drive: 0.33, tireMu: 0.9, steerLock: 0.58, cfg: '6x2', name: 'Cavalo 360', hp: 360, cap: 30, mass: 8.5, level: 6, price: 60000, rigid: false, axles: 3, model: 'volvo', cab: 'cabover', roof: 'high', color: 0xb5121b, vmax: 110, desc: 'Cavalo mecânico cara-chata para carretas.' },
  { id: 'rodo', tank: 600, kml: 2.3, track: 2.0, cgH: 1.05, drive: 0.5, tireMu: 0.92, steerLock: 0.56, cfg: '6x4', name: 'Rodomax 480', hp: 480, cap: 45, mass: 9, level: 10, price: 140000, rigid: false, axles: 3, model: 'volvo', cab: 'cabover', roof: 'high', color: 0x1d3f6e, vmax: 110, desc: 'Cavalo 6x2 de teto alto para longas viagens.' },
  { id: 'titan', tank: 700, kml: 2.0, track: 2.0, cgH: 1.1, drive: 0.52, tireMu: 0.93, steerLock: 0.54, cfg: '6x4', name: 'Titan 620 Bicudo', hp: 620, cap: 65, mass: 10.5, level: 15, price: 280000, rigid: false, axles: 3, cab: 'conventional', roof: 'high', color: 0x222831, vmax: 105, desc: 'Bicudo 6x4 de capô longo e muita tração.' },
  { id: 'colosso', tank: 900, kml: 1.7, track: 2.05, cgH: 1.15, drive: 0.55, tireMu: 0.95, steerLock: 0.5, cfg: '8x4', name: 'Colosso 750 8x4', hp: 750, cap: 90, mass: 12.5, level: 20, price: 500000, rigid: false, axles: 4, cab: 'conventional', roof: 'high', color: 0xf0a000, vmax: 95, desc: 'Gigante para cargas especiais e indivisíveis.' },
];
export const FUEL_PRICE = 6.19; // R$/L diesel
// o mapa é uma versão compacta do mundo real: o consumo é escalado para que o tanque dure
// algumas viagens (kml = km/L reais, a 80 km/h com meia carga)
export const FUEL_SCALE = 14;
export const autonomy = (t) => Math.round((t.tank * t.kml) / FUEL_SCALE);
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
  { id: 'madeira', name: 'Toras de Madeira', icon: '🪵', t: 18, lvl: 6, trailer: 'flatbed', model: 'logs', rate: 1.05, from: ['serraria', 'madeireira'], to: ['fabrica', 'obra', 'porto'] },
  { id: 'conteiner', name: 'Contêiner 40 pés', icon: '🚢', t: 26, lvl: 7, trailer: 'flatbed', model: 'container', rate: 1.15, from: ['porto'], to: ['cd', 'siderurgica', 'fabrica'] },
  { id: 'graos', name: 'Soja a Granel', icon: '🫘', t: 28, lvl: 8, trailer: 'bulk', rate: 1.0, from: ['fazenda', 'silo'], to: ['porto'] },
  { id: 'combustivel', name: 'Combustível', icon: '⛽', t: 30, lvl: 9, trailer: 'tank', rate: 1.45, hazard: true, from: ['refinaria'], to: ['posto', 'fazenda', 'pedreira'] },
  { id: 'cimento', name: 'Cimento', icon: '🏗️', t: 32, lvl: 10, trailer: 'tank', model: 'silo', rate: 1.05, from: ['pedreira'], to: ['obra'] },
  { id: 'vinho', name: 'Vinho em Caixas', icon: '🍷', t: 7, lvl: 3, trailer: 'box', rate: 1.3, fragile: true, from: ['vinicola'], to: ['mercado', 'cd', 'porto'] },
  { id: 'minerio', name: 'Minério de Ferro', icon: '⛏️', t: 34, lvl: 11, trailer: 'bulk', rate: 1.1, from: ['mineradora'], to: ['siderurgica', 'porto'] },
  { id: 'granito', name: 'Blocos de Granito', icon: '🪨', t: 40, lvl: 12, trailer: 'flatbed', model: 'stone', rate: 1.2, from: ['mineradora'], to: ['obra', 'porto'] },
  { id: 'cafe', name: 'Sacas de Café', icon: '☕', t: 10, lvl: 2, trailer: 'box', rate: 1.25, from: ['cafezal'], to: ['porto', 'cd', 'mercado'] },
  { id: 'tijolos', name: 'Tijolos (paletes)', icon: '🧱', t: 16, lvl: 5, trailer: 'flatbed', model: 'bricks', rate: 1.1, from: ['olaria'], to: ['obra', 'cd', 'fabrica'] },
  { id: 'graos_bitrem', name: 'Soja — Bitrem', icon: '🚛', t: 48, lvl: 14, trailer: 'bitrem', sub: 'bulk', rate: 1.15, from: ['fazenda', 'silo', 'cafezal'], to: ['porto'] },
  { id: 'madeira_bitrem', name: 'Toras — Bitrem', icon: '🌲', t: 50, lvl: 15, trailer: 'bitrem', sub: 'flatbed', model: 'logs', rate: 1.2, from: ['serraria', 'madeireira'], to: ['fabrica', 'porto'] },
  { id: 'comb_bitrem', name: 'Combustível — Bitrem', icon: '⛽', t: 45, lvl: 16, trailer: 'bitrem', sub: 'tank', hazard: true, rate: 1.55, from: ['refinaria'], to: ['posto', 'fazenda', 'mineradora'] },
  { id: 'bobinas', name: 'Bobinas de Aço', icon: '🧲', t: 36, lvl: 11, trailer: 'flatbed', model: 'coils', rate: 1.2, from: ['siderurgica'], to: ['porto', 'fabrica'] },
  { id: 'vigas', name: 'Vigas de Aço', icon: '🏢', t: 42, lvl: 13, trailer: 'flatbed', model: 'beams', rate: 1.25, from: ['siderurgica'], to: ['obra'] },
  { id: 'escavadeira', name: 'Escavadeira', icon: '🚧', t: 48, lvl: 15, trailer: 'lowboy', model: 'excavator', rate: 1.55, from: ['porto'], to: ['pedreira', 'obra'] },
  { id: 'transformador', name: 'Transformador', icon: '⚡', t: 56, lvl: 18, trailer: 'lowboy', model: 'transformer', rate: 1.7, fragile: true, from: ['siderurgica', 'porto'], to: ['refinaria', 'eolica'] },
  { id: 'pa_eolica', name: 'Pá Eólica', icon: '🌀', t: 62, lvl: 20, trailer: 'lowboy', model: 'blade', rate: 1.9, fragile: true, from: ['porto'], to: ['eolica'] },
  { id: 'prensa', name: 'Prensa Industrial', icon: '🏭', t: 85, lvl: 24, trailer: 'lowboy', model: 'press', rate: 2.1, from: ['porto'], to: ['siderurgica', 'fabrica'] },
  { id: 'carne', name: 'Carne Refrigerada', icon: '🥩', t: 18, lvl: 5, trailer: 'box', rate: 1.35, fragile: true, from: ['frigorifico'], to: ['mercado', 'cd', 'porto'] },
  { id: 'acucar', name: 'Açúcar a Granel', icon: '🍬', t: 30, lvl: 8, trailer: 'bulk', rate: 1.05, from: ['usina'], to: ['porto', 'cd'] },
  { id: 'gado', name: 'Ração para Gado', icon: '🐄', t: 20, lvl: 4, trailer: 'bulk', rate: 1.0, from: ['silo'], to: ['frigorifico', 'fazenda'] },
  { id: 'pescado', name: 'Pescado Congelado', icon: '🐟', t: 8, lvl: 2, trailer: 'box', rate: 1.3, fragile: true, from: ['mangue', 'porto_lagoa'], to: ['mercado', 'cd'] },
  { id: 'cana_bitrem', name: 'Açúcar — Bitrem', icon: '🚛', t: 47, lvl: 14, trailer: 'bitrem', sub: 'bulk', rate: 1.15, from: ['usina'], to: ['porto'] },
];
// locais novos que funcionam como os antigos entram automaticamente nas cargas
for (const c of CARGOS)
  for (const k of ['from', 'to']) {
    const add = [];
    for (const L of LOCATIONS) if (L.like && c[k].includes(L.like) && !c[k].includes(L.id)) add.push(L.id);
    c[k] = c[k].concat(add);
  }
export const CARGO = Object.fromEntries(CARGOS.map((c) => [c.id, c]));

export const xpForLevel = (L) => 200 + 180 * (L - 1);

export function trailerMass(cargo) {
  if (!cargo) return 0;
  if (cargo.trailer === 'bitrem') return 13;
  return cargo.trailer === 'lowboy' ? 9 : cargo.trailer === 'tank' ? 7 : 6.5;
}

// altura do centro de gravidade da carga (m) — define o risco de tombamento
export function cargoCG(cargo, rigid) {
  const t = cargo.trailer === 'bitrem' ? cargo.sub : cargo.trailer;
  if (rigid) return 1.6;
  if (t === 'box') return 2.4;
  if (t === 'tank') return 2.3;
  if (t === 'bulk') return 2.1;
  if (t === 'flatbed') return { logs: 2.2, container: 2.6, coils: 1.85, beams: 1.9, stone: 2.1, bricks: 2.0 }[cargo.model] || 2.0;
  return { tractor: 2.3, excavator: 2.3, transformer: 2.5, blade: 2.6, press: 2.7 }[cargo.model] || 2.2;
}

// Limites do mundo (para o mapa)
export const WORLD = { x0: -7400, z0: -9900, x1: 9900, z1: 2300 };
