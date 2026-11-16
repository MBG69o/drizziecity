// Mundo: 3 cidades, rodovias com pontes e aterros, rio, mar, matas, morros e campos.
import * as THREE from 'three';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { BLOCK, ROAD_W, HW_HALF, CITIES, CITY, cx1, cz1, zoneOf, LOCATIONS, RIVER_W, SEA_Z, WORLD, SURFACES } from './data.js';
import { buildHighways, buildStreams, River } from './highway.js';
import { Terrain } from './terrain.js';

const RH = ROAD_W / 2;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}
// ruído de valor 2D simples
export function vnoise(x, z) {
  const h = (i, j) => {
    const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  };
  const i = Math.floor(x), j = Math.floor(z), fx = x - i, fz = z - j;
  const u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
  return (h(i, j) * (1 - u) + h(i + 1, j) * u) * (1 - v) + (h(i, j + 1) * (1 - u) + h(i + 1, j + 1) * u) * v;
}

// paralelepípedos em escala real (~25 cm)
function cobbleTex(rep) { const t = tex.surface('cobble').clone(); t.repeat.set(rep, rep); t.needsUpdate = true; return t; }

export class World {
  constructor(scene, quality) {
    this.scene = scene;
    this.q = quality;
    this.colliders = [];
    this.cell = 70;
    this.grid = new Map();
    this.depots = {};
    this.animated = [];
    this.areas = []; // regiões trafegáveis (cidades, pátios, trevos)
    this.hills = [];
    this.fields = [];
    const river = new River();
    this.streams = buildStreams();
    this.terrain = new Terrain(river, this.streams);
    for (const st of this.streams) st.computeLevel(this.terrain);
    const H = buildHighways(this.terrain, river, this.streams);
    this.terrain.setRoads(H.hws);
    this.river = H.river;
    this.hws = H.hws;
    this.hwIdx = H.idx;
    this.hwById = Object.fromEntries(this.hws.map((h) => [h.id, h]));
    this._q = {};
    this.stations = this.placeStations();
    this.terrain.pads = this.stations.map((st) => ({ x: st.x, z: st.z, r: st.r + 2, y: st.y }));
    this.build();
  }

  // Postos de combustível à beira das rodovias asfaltadas: procura trechos retos,
  // planos, sem ponte, longe de rios, cidades e outras estradas.
  placeStations() {
    const NAMES = ['Posto Estrela da Serra', 'Posto Beira-Rio', 'Posto Caminhoneiro', 'Posto Mata Verde', 'Posto Trevo Azul', 'Posto Serra Alta', 'Posto Bandeirante', 'Posto Vale do Sol', 'Posto Rota 66', 'Posto Gaúcho', 'Posto Pé na Estrada', 'Posto Boa Viagem', 'Posto Chapadão', 'Posto Ipê Amarelo', 'Posto Sertanejo', 'Posto Aurora', 'Posto Rodovia Real', 'Posto Cerrado', 'Posto Pinheirais', 'Posto Lua Cheia', 'Posto Graal do Sul', 'Posto Três Irmãos', 'Posto Oásis', 'Posto Divisa', 'Posto Horizonte', 'Posto Primavera'];
    const out = [], q = {};
    const rects = [...CITIES.map((c) => [c.x0 - 150, c.z0 - 150, cx1(c) + 150, cz1(c) + 150]), ...LOCATIONS.filter((L) => L.lot).map((L) => [L.lot[0] - 120, L.lot[1] - 120, L.lot[2] + 120, L.lot[3] + 120])];
    for (const h of this.hws) {
      if (h.surface !== 'asphalt') continue;
      const len = h.s[h.n - 1];
      if (len < 1200) continue;
      const targets = len > 3000 ? [0.33, 0.72] : [0.5];
      for (const f of targets) {
        const i0 = Math.round(f * (h.n - 1));
        let found = null;
        for (let k = 0; k < h.n && !found; k++) {
          const i = i0 + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 2;
          if (i < 16 || i > h.n - 17) continue;
          let ok = true;
          for (let j = i - 14; j <= i + 14; j++) if (h.bridge[j]) { ok = false; break; }
          if (!ok || Math.abs(h.y[i + 12] - h.y[i - 12]) > 1.6) continue;
          const ax = h.x[i + 12] - h.x[i - 12], az = h.z[i + 12] - h.z[i - 12], bx = h.x[i + 1] - h.x[i - 1], bz = h.z[i + 1] - h.z[i - 1];
          if ((ax * bx + az * bz) / (Math.hypot(ax, az) * Math.hypot(bx, bz)) < 0.995) continue;
          const hd = Math.atan2(bx, bz), y = h.y[i];
          for (const side of [1, -1]) {
            const nx = Math.cos(hd) * side, nz = -Math.sin(hd) * side, r = 20, off = h.half + 17;
            const cx = h.x[i] + nx * off, cz = h.z[i] + nz * off;
            if (cz > SEA_Z - 220 || this.river.dist(cx, cz) < RIVER_W / 2 + r + 25) continue;
            if (rects.some((a) => cx > a[0] && cx < a[2] && cz > a[1] && cz < a[3])) continue;
            if (out.some((o) => Math.hypot(o.x - cx, o.z - cz) < 600)) continue;
            let good = true;
            for (let a = 0; a < 16 && good; a++) {
              const px = cx + Math.cos(a * 0.39) * (r + 12), pz = cz + Math.sin(a * 0.39) * (r + 12);
              const n = this.hwIdx.nearest(px, pz, q);
              if (n && n.o !== h && n.d < n.o.half + 6) good = false;
              if (Math.abs(this.terrain.raw(px, pz) - y) > 14) good = false;
            }
            if (!good) continue;
            for (const c of this.hws) if (c !== h && Math.hypot(c.x[0] - cx, c.z[0] - cz) < 90) good = false;
            if (!good) continue;
            found = { id: 'st' + out.length, name: NAMES[out.length % NAMES.length], hw: h.id, x: cx, z: cz, y, r, hd, side, rx: h.x[i], rz: h.z[i] };
            break;
          }
        }
        if (found) out.push(found);
      }
    }
    return out;
  }

  // poças fundas nas estradas de lama (0..1)
  mudDepth(x, z) {
    const n = vnoise(x / 55 + 3.1, z / 55 - 7.7), t = 0.42 - 0.12 * (this.wet || 0);
    return n < t ? 0 : Math.min(1, (n - t) / 0.2);
  }

  stationAt(x, z, pad = 0) {
    for (const st of this.stations) if (Math.hypot(x - st.x, z - st.z) < st.r + pad) return st;
    return null;
  }

  // ---------- consultas ----------
  addCollider(x0, z0, x1, z1) {
    const c = { x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) };
    this.colliders.push(c);
    const s = this.cell;
    for (let gx = Math.floor(c.x0 / s); gx <= Math.floor(c.x1 / s); gx++)
      for (let gz = Math.floor(c.z0 / s); gz <= Math.floor(c.z1 / s); gz++) {
        const k = gx * 100000 + gz;
        if (!this.grid.has(k)) this.grid.set(k, []);
        this.grid.get(k).push(c);
      }
  }

  hw(x, z) { return this.hwIdx.nearest(x, z, this._q); }

  inArea(x, z, r) {
    for (const a of this.areas) {
      if (a.circle) { if ((x - a.x) ** 2 + (z - a.z) ** 2 <= (a.r - r) ** 2) return a; continue; }
      if (x >= a.x0 + r && x <= a.x1 - r && z >= a.z0 + r && z <= a.z1 - r) return a;
    }
    return null;
  }

  // altura do piso (rodovias acompanham o relevo e têm pontes)
  heightAt(x, z) {
    for (const a of this.areas) if (!a.circle && x >= a.x0 && x <= a.x1 && z >= a.z0 && z <= a.z1) return 0;
    const q = this.hw(x, z);
    if (!q || q.d > q.o.half + 3) {
      const st = this.stationAt(x, z, 1);
      return st ? st.y : this.terrain.meshHeight(x, z);
    }
    const h = q.o;
    return h.y[q.i] + (h.y[q.i + 1] - h.y[q.i]) * q.t;
  }

  // tipo de piso sob o ponto (aderência e resistência ao rolamento)
  surfaceAt(x, z) {
    for (const a of this.areas) {
      if (a.circle) continue;
      if (x >= a.x0 && x <= a.x1 && z >= a.z0 && z <= a.z1) return a.city ? (a.city.surface || 'asphalt') : a.lot ? 'concrete' : 'asphalt';
    }
    const q = this.hw(x, z);
    if (q && q.d < q.o.half + 2) return q.o.bridge[q.i] === 2 ? 'wood' : q.o.surface;
    if (this.stationAt(x, z)) return 'concrete';
    return 'dirt';
  }

  // Empurra um círculo para dentro das áreas trafegáveis e para fora de prédios
  resolveCircle(p, r, out, buildingsOnly = false) {
    let hit = 0;
    out.x = 0; out.z = 0;
    if (!buildingsOnly && !this.inArea(p.x, p.z, r)) {
      const q = this.hw(p.x, p.z);
      const lim = (q ? q.o.half : HW_HALF) - r * 0.8;
      if (!q || q.d > lim) {
        let bx = p.x, bz = p.z, bd = Infinity;
        if (q) {
          const k = lim / (q.d || 1);
          bx = q.x + (p.x - q.x) * k; bz = q.z + (p.z - q.z) * k;
          bd = Math.hypot(p.x - bx, p.z - bz);
        }
        for (const a of this.areas) {
          if (a.circle) {
            const d = Math.hypot(p.x - a.x, p.z - a.z);
            if (d < a.r + 40) { const k = Math.max(0, a.r - r) / (d || 1); const cx = a.x + (p.x - a.x) * Math.min(1, k), cz = a.z + (p.z - a.z) * Math.min(1, k); const dd = Math.hypot(p.x - cx, p.z - cz); if (dd < bd) { bd = dd; bx = cx; bz = cz; } }
            continue;
          }
          if (p.x < a.x0 - 60 || p.x > a.x1 + 60 || p.z < a.z0 - 60 || p.z > a.z1 + 60) continue;
          const cx = Math.max(a.x0 + r, Math.min(p.x, a.x1 - r)), cz = Math.max(a.z0 + r, Math.min(p.z, a.z1 - r));
          const d = Math.hypot(p.x - cx, p.z - cz);
          if (d < bd) { bd = d; bx = cx; bz = cz; }
        }
        if (bd < Infinity) { out.x = bx - p.x; out.z = bz - p.z; hit = bd; }
      }
    }
    const s = this.cell;
    const gx = Math.floor((p.x + out.x) / s), gz = Math.floor((p.z + out.z) / s);
    for (let ix = gx - 1; ix <= gx + 1; ix++)
      for (let iz = gz - 1; iz <= gz + 1; iz++) {
        const list = this.grid.get(ix * 100000 + iz);
        if (!list) continue;
        for (const c of list) {
          const px = p.x + out.x, pz = p.z + out.z;
          const cx = Math.max(c.x0, Math.min(px, c.x1));
          const cz = Math.max(c.z0, Math.min(pz, c.z1));
          const dx = px - cx, dz = pz - cz;
          const d2 = dx * dx + dz * dz;
          if (d2 < r * r) {
            if (d2 > 1e-6) {
              const d = Math.sqrt(d2), pen = r - d;
              out.x += (dx / d) * pen; out.z += (dz / d) * pen;
              hit = Math.max(hit, pen);
            } else {
              const l = px - c.x0, rr = c.x1 - px, t = pz - c.z0, b = c.z1 - pz;
              const m = Math.min(l, rr, t, b);
              if (m === l) out.x -= l + r; else if (m === rr) out.x += rr + r;
              else if (m === t) out.z -= t + r; else out.z += b + r;
              hit = Math.max(hit, m + r);
            }
          }
        }
      }
    return hit;
  }

  terrainH(x, z) {
    return this.terrain.meshHeight(x, z);
  }

  isFreeLoose(x, z) { const q = this.hw(x, z); return !(q && q.d < q.o.half + 6) && !this.inArea(x, z, 0); }

  // local livre de rodovias, rio, cidades, pátios, campos e mar?
  isFree(x, z, m) {
    if (z > SEA_Z - 40) return false;
    const q = this.hw(x, z);
    if (q && q.d < q.o.half + 8 + m) return false;
    if (this.river.dist(x, z) < RIVER_W / 2 + 12 + m) return false;
    for (const st of this.streams) if (st.dist(x, z) < st.w / 2 + 8 + m) return false;
    for (const a of this.areas) {
      if (a.circle) { if (Math.hypot(x - a.x, z - a.z) < a.r + 10 + m) return false; continue; }
      if (x > a.x0 - 25 - m && x < a.x1 + 25 + m && z > a.z0 - 25 - m && z < a.z1 + 25 + m) return false;
    }
    for (const f of this.fields) if (x > f.x0 - m && x < f.x1 + m && z > f.z0 - m && z < f.z1 + m) return false;
    return true;
  }

  // ---------- construção ----------
  build() {
    const lam = (map, extra = {}) => new THREE.MeshLambertMaterial({ map, ...extra });
    const M = {
      grass: lam(tex.grass(), { vertexColors: true, side: THREE.DoubleSide, color: 0xc9d2b2 }),
      road: lam(tex.road()),
      hwy: lam(tex.highway()),
      dirt: lam(tex.surface('dirt')), mud: new THREE.MeshPhongMaterial({ map: tex.surface('mud'), shininess: 60, specular: 0x333322 }),
      gravel: lam(tex.surface('gravel')), cobble: lam(cobbleTex(5)), cobbleI: lam(cobbleTex(5)),
      terrain: new THREE.MeshLambertMaterial({ map: tex.grass(), vertexColors: true, color: 0xd6d8c4 }),
      inter: lam(tex.intersection()),
      concrete: lam(tex.concrete()),
      bridge: lam(tex.concrete(), { side: THREE.DoubleSide }),
      wood: lam(tex.planks(), { side: THREE.DoubleSide }),
      timber: lam(tex.bark(), { vertexColors: true }),
      lot: lam(tex.lot()),
      side0: lam(tex.sidewalk(0)), side1: lam(tex.sidewalk(1)), side2: lam(tex.sidewalk(2)),
      curb: lam(tex.curb()),
      marks: new THREE.MeshLambertMaterial({ map: tex.roadMarks(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 }),
      stop: lam(tex.stopSign(), { alphaTest: 0.5, side: THREE.DoubleSide }),
      puddle: new THREE.MeshPhongMaterial({ color: 0x35271a, shininess: 90, specular: 0x55524a, transparent: true, opacity: 0.9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
      field: lam(tex.field(), { vertexColors: true }),
      sand: lam(tex.sand()),
      roof: lam(tex.roof()),
      tiles: lam(tex.tiles()),
      wh: lam(tex.warehouse(), { vertexColors: true }),
      f: [0, 1, 2, 3].map((i) => new THREE.MeshPhongMaterial({ map: tex.facade(i), emissiveMap: tex.facade(i).userData.emissive, emissive: 0xffffff, emissiveIntensity: 0, shininess: i === 0 || i === 3 ? 60 : 8, specular: i === 0 || i === 3 ? 0x555555 : 0x111111 })),
      flat: new THREE.MeshLambertMaterial({ vertexColors: true }),
      metal: new THREE.MeshPhongMaterial({ map: tex.metal(), vertexColors: true, shininess: 50, specular: 0x666666 }),
      cont: lam(tex.container(0xdddddd), { vertexColors: true }),
      leaf: lam(tex.foliage(), { vertexColors: true }),
    };
    // pisos que brilham quando molhados (Phong com especular controlado pela chuva)
    this.wetMats = [];
    for (const k of ['road', 'hwy', 'inter', 'cobble', 'cobbleI', 'concrete', 'side0', 'side1', 'side2', 'lot']) {
      const old = M[k];
      const m = new THREE.MeshPhongMaterial({ map: old.map, color: old.color, side: old.side, shininess: 30, specular: 0x000000 });
      M[k] = m; this.wetMats.push(m);
      old.dispose();
    }
    this.M = M;
    const makeB = () => ({
      grass: new Builder(true), road: new Builder(), hwy: new Builder(), dirt: new Builder(), mud: new Builder(), gravel: new Builder(), cobble: new Builder(), cobbleI: new Builder(), inter: new Builder(), concrete: new Builder(), bridge: new Builder(), wood: new Builder(), timber: new Builder(true),
      lot: new Builder(), puddle: new Builder(), side0: new Builder(), side1: new Builder(), side2: new Builder(), curb: new Builder(), marks: new Builder(), stop: new Builder(), field: new Builder(true), sand: new Builder(), roof: new Builder(), tiles: new Builder(),
      wh: new Builder(true), f: [new Builder(), new Builder(), new Builder(), new Builder()],
      flat: new Builder(true), metal: new Builder(true), cont: new Builder(true),
    });
    const B = makeB();
    this.B = B;
    this.Bglobal = B;
    // mundo grande: a geometria estática é agrupada em quadrantes (culling por distância)
    this.tiles = new Map();
    this.cull = [];
    const TS = 1600;
    this.tileB = (x, z) => {
      const k = Math.floor(x / TS) * 1000 + Math.floor(z / TS);
      let t = this.tiles.get(k);
      if (!t) this.tiles.set(k, (t = { B: makeB(), x: (Math.floor(x / TS) + 0.5) * TS, z: (Math.floor(z / TS) + 0.5) * TS }));
      return t.B;
    };
    this.trees = [];
    this.lamps = [];
    this.rails = [];
    this.posts = [];
    this.r = rng(1234);

    // áreas trafegáveis das cidades e trevos de acesso
    for (const c of CITIES) this.areas.push({ x0: c.x0 - RH, z0: c.z0 - RH, x1: cx1(c) + RH, z1: cz1(c) + RH, city: c });
    for (const h of this.hws) {
      for (const end of [h.def.from, h.def.to]) {
        if (!end || end[0] === 'hw') continue;
        const c = CITY[end[0]];
        const x = c.x0 + end[1] * BLOCK, z = c.z0 + end[2] * BLOCK;
        this.areas.push({ x0: x - 22, z0: z - 22, x1: x + 22, z1: z + 22, pad: true });
        B.hwy.ground(x - 22, z - 22, x + 22, z + 22, 0.015, 18);
      }
    }
    for (const L of LOCATIONS) if (L.lot) this.areas.push({ x0: L.lot[0], z0: L.lot[1], x1: L.lot[2], z1: L.lot[3], lot: L.id });
    // entroncamentos de estradas secundárias: área circular para manobrar
    for (const h of this.hws) if (h.def.from && h.def.from[0] === 'hw') this.areas.push({ circle: true, x: h.x[0], z: h.z[0], r: 20 });
    for (const st of this.stations) this.areas.push({ circle: true, x: st.x, z: st.z, r: st.r, station: st.id });

    this.terrain.build(this.scene, M.terrain, this.q.terrainStep || 24);
    this.layoutCountry();
    this.buildFields();
    for (const c of CITIES) { this.B = this.tileB((c.x0 + cx1(c)) / 2, (c.z0 + cz1(c)) / 2); this.buildCity(c); }
    for (const L of LOCATIONS) if (L.lot) { this.B = this.tileB(L.lot[0], L.lot[1]); this.buildDepot(L, ...L.lot); }
    for (const h of this.hws) this.buildHighway(h);
    for (const st of this.stations) { this.B = this.tileB(st.x, st.z); this.buildStation(st); }
    this.B = B;
    this.buildRiverAndSea();
    for (let i = 0; i < 14; i++) {
      const x = 500 + this.r() * 1500, z = -900 + this.r() * 700;
      const y = this.terrainH(x, z);
      if (this.isFree(x, z, 20) && y > 8) this.turbine(x, z, 50, 1, y - 1);
    }
    this.scatterForest();

    const add = (b, m, cast = false) => {
      const mesh = b.mesh(m, { cast });
      if (mesh) this.scene.add(mesh);
      return mesh;
    };
    add(B.grass, M.grass); add(B.road, M.road); add(B.hwy, M.hwy); add(B.dirt, M.dirt); add(B.mud, M.mud); add(B.gravel, M.gravel); add(B.cobble, M.cobble); add(B.cobbleI, M.cobbleI); add(B.inter, M.inter); add(B.concrete, M.concrete, true);
    add(B.bridge, M.bridge, true); add(B.wood, M.wood, true); add(B.timber, M.timber, true); add(B.lot, M.lot); add(B.puddle, M.puddle); for (const k of ['side0', 'side1', 'side2', 'curb', 'marks', 'stop']) add(B[k], M[k]); add(B.field, M.field); add(B.sand, M.sand); add(B.roof, M.roof);
    add(B.tiles, M.tiles, true); add(B.wh, M.wh, true); add(B.flat, M.flat, true);
    add(B.metal, M.metal, true); add(B.cont, M.cont, true);
    B.f.forEach((b, i) => add(b, M.f[i], true));
    for (const t of this.tiles.values()) {
      const g = new THREE.Group();
      const tb = t.B, ad = (b, m, cast = false) => { const mesh = b.mesh(m, { cast }); if (mesh) g.add(mesh); };
      for (const k of Object.keys(tb)) if (k !== 'f') ad(tb[k], M[k], !['grass', 'road', 'hwy', 'dirt', 'mud', 'gravel', 'cobble', 'cobbleI', 'inter', 'lot', 'puddle', 'field', 'sand', 'side0', 'side1', 'side2', 'curb', 'marks'].includes(k));
      tb.f.forEach((b, i) => ad(b, M.f[i], true));
      this.scene.add(g);
      this.cull.push({ obj: g, x: t.x, z: t.z, r: 1250 });
    }
    for (const c of this.terrain.chunks) this.cull.push(c);
    this.buildRails();
    this.buildTrees();
    this.buildLamps();
    this.buildSignals();
    this.buildFloods();
    this.B = null;
  }

  // distância real até a rodovia mais próxima (sem limite de raio)
  hwDistFar(x, z) {
    let d = Infinity;
    for (const h of this.hws) for (let i = 0; i < h.n; i += 3) d = Math.min(d, (h.x[i] - x) ** 2 + (h.z[i] - z) ** 2);
    return Math.sqrt(d);
  }

  layoutCountry() {
    const r = this.r;
    // lavouras perto da fazenda, de Serrana e ao longo da SP-280 (só em terreno suave)
    const zones = [[-1000, 160, -600, 700], [-2900, -1600, -2300, -1100], [600, 150, 1700, 1000], [1200, -700, 1900, -150], [-2500, -800, -1950, -150],
      [-7000, -1900, -5300, 300], [-5600, -1500, -4300, -700], [5000, -2600, 7400, 300], [4000, 200, 5600, 1200], [-1900, -4900, -600, -3900], [-5400, -5300, -3800, -4500], [-2200, 500, -900, 1000]];
    for (const [x0, z0, x1, z1] of zones)
      for (let x = x0; x < x1; x += 140)
        for (let z = z0; z < z1; z += 110) {
          const f = { x0: x + 6, z0: z + 6, x1: x + 134, z1: z + 104 };
          const pts = [[f.x0, f.z0], [f.x1, f.z0], [f.x0, f.z1], [f.x1, f.z1], [(f.x0 + f.x1) / 2, (f.z0 + f.z1) / 2]];
          if (pts.every(([a, b]) => this.isFree(a, b, 12) && this.terrain.slope(a, b) < 0.12) && r() > 0.2) this.fields.push(f);
        }
  }

  // lavouras acompanhando o relevo
  buildFields() {
    const cols = [0xffffff, 0xe8f0c0, 0xd8c890, 0xc8e0a8];
    const T = this.terrain;
    this.fields.forEach((f, n) => {
      const B = this.tileB((f.x0 + f.x1) / 2, (f.z0 + f.z1) / 2).field;
      const st = 20, nx = Math.ceil((f.x1 - f.x0) / st), nz = Math.ceil((f.z1 - f.z0) / st);
      for (let i = 0; i < nx; i++)
        for (let j = 0; j < nz; j++) {
          const xa = f.x0 + i * st, xb = Math.min(f.x1, xa + st), za = f.z0 + j * st, zb = Math.min(f.z1, za + st);
          const y = (x, z) => T.meshHeight(x, z) + 0.12;
          B.quad([xa, y(xa, zb), zb], [xb, y(xb, zb), zb], [xb, y(xb, za), za], [xa, y(xa, za), za], [0, 1, 0], [xa / 24, -zb / 24, xb / 24, -zb / 24, xb / 24, -za / 24, xa / 24, -za / 24], cols[n % cols.length]);
        }
    });
  }

  // ---------- cidades ----------
  buildCity(c) {
    const B = { ...this.B };
    if (c.surface === 'cobble') { B.road = this.B.cobble; B.inter = this.B.cobbleI; }
    const X = (i) => c.x0 + i * BLOCK, Z = (j) => c.z0 + j * BLOCK;
    for (let i = 0; i <= c.nx; i++) {
      const x = X(i);
      for (let j = 0; j < c.nz; j++) {
        const a = Z(j) + RH, b = Z(j + 1) - RH;
        B.road.quad([x - RH, 0.02, b], [x + RH, 0.02, b], [x + RH, 0.02, a], [x - RH, 0.02, a], [0, 1, 0], [0, 0, 1, 0, 1, (b - a) / ROAD_W / 2, 0, (b - a) / ROAD_W / 2]);
      }
    }
    for (let j = 0; j <= c.nz; j++) {
      const z = Z(j);
      for (let i = 0; i < c.nx; i++) {
        const a = X(i) + RH, b = X(i + 1) - RH;
        B.road.quad([a, 0.02, z + RH], [b, 0.02, z + RH], [b, 0.02, z - RH], [a, 0.02, z - RH], [0, 1, 0], [0, 0, 0, (b - a) / ROAD_W / 2, 1, (b - a) / ROAD_W / 2, 1, 0]);
      }
    }
    for (let i = 0; i <= c.nx; i++)
      for (let j = 0; j <= c.nz; j++) {
        const x = X(i), z = Z(j);
        B.inter.quad([x - RH, 0.025, z + RH], [x + RH, 0.025, z + RH], [x + RH, 0.025, z - RH], [x - RH, 0.025, z - RH], [0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
      }
    this.cityStreets(c, B);
    this.sideKind = c.kind === 'metro' || c.kind === 'port' ? 1 : 2;
    const depotAt = {};
    for (const L of LOCATIONS) if (L.city === c.id) depotAt[L.bx + ',' + L.bz] = L;
    for (let bx = 0; bx < c.nx; bx++)
      for (let bz = 0; bz < c.nz; bz++) {
        const x0 = X(bx) + RH, x1 = X(bx + 1) - RH, z0 = Z(bz) + RH, z1 = Z(bz + 1) - RH;
        const L = depotAt[bx + ',' + bz];
        if (L) this.buildDepot(L, x0, z0, x1, z1);
        else this.buildBlock(zoneOf(c, bx, bz), x0, z0, x1, z1);
      }
    this.roadSign(c.x0 - 26, c.z0 - 26, Math.PI * 0.75, c.name.toUpperCase(), 'Bem-vindo', '#1d4f7a');
  }

  // marcas viárias, bueiros, placas PARE e semáforos de uma cidade
  cityStreets(c, B) {
    const r = this.r;
    const X = (i) => c.x0 + i * BLOCK, Z = (j) => c.z0 + j * BLOCK;
    const cell = (col, row) => [col / 4, 1 - (row + 1) / 2, (col + 1) / 4, 1 - row / 2];
    // decalque no chão: centro, direção de marcha d, largura (através) e comprimento (ao longo)
    const decal = (ce, cx, cz, d, w, l, y = 0.035) => {
      const rx = -d[1], rz = d[0];
      const P = (a, b) => [cx + rx * a + d[0] * b, y, cz + rz * a + d[1] * b];
      B.marks.quad(P(-w / 2, -l / 2), P(w / 2, -l / 2), P(w / 2, l / 2), P(-w / 2, l / 2), [0, 1, 0], [ce[0], ce[1], ce[2], ce[1], ce[2], ce[3], ce[0], ce[3]]);
    };
    const signal = c.kind === 'metro' || c.kind === 'port' || c.lights;
    this.signals = this.signals || new Map();
    this.sigHeads = this.sigHeads || [];
    for (let i = 0; i <= c.nx; i++)
      for (let j = 0; j <= c.nz; j++) {
        const x = X(i), z = Z(j);
        const interior = i > 0 && j > 0 && i < c.nx && j < c.nz;
        const sig = interior && signal && (c.kind === 'metro' || (i + j) % 2 === 0);
        let node = null;
        if (sig) { node = { x, z, off: ((i * 7 + j * 13) % 26) }; this.signals.set(c.id + ':' + i + ':' + j, node); }
        const stopZ = interior && !sig; // PARE para quem vem no eixo norte-sul
        if (stopZ) this.signals.set(c.id + ':' + i + ':' + j, { x, z, stop: 'z' });
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const ni = i - di, nj = j - dj; // de onde vem o veículo
          if (ni < 0 || nj < 0 || ni > c.nx || nj > c.nz) continue;
          const d = [di, dj], rx = -dj, rz = di;
          const back = (o) => [x - di * o, z - dj * o];
          let p = back(RH + 0.9); decal(cell(0, 0), p[0] + rx * RH / 2, p[1] + rz * RH / 2, d, RH - 0.9, 0.5);
          const axisZ = dj !== 0;
          if (stopZ && axisZ) {
            p = back(RH + 5); decal(cell(1, 0), p[0] + rx * 5, p[1] + rz * 5, d, 5, 5.5);
            // placa PARE na esquina
            const q = back(RH + 1.2), sx = q[0] + rx * (RH + 1.3), sz = q[1] + rz * (RH + 1.3);
            B.flat.add(G.cyl(8), mat(sx, 1.3, sz, 0, 0, 0, 0.07, 2.6, 0.07), 0x9a9da1);
            const w = 0.42, y0 = 2.15, y1 = 2.99, f = -0.012, k = 0.012;
            const Q = (a, o, y) => [sx + rx * a + di * o, y, sz + rz * a + dj * o];
            B.stop.quad(Q(-w, f, y0), Q(w, f, y0), Q(w, f, y1), Q(-w, f, y1), [-di, 0, -dj], [0, 0, 0.5, 0, 0.5, 1, 0, 1]);
            B.stop.quad(Q(w, k, y0), Q(-w, k, y0), Q(-w, k, y1), Q(w, k, y1), [di, 0, dj], [0.5, 0, 1, 0, 1, 1, 0.5, 1]);
          }
          // setas nas faixas antes do cruzamento
          if (interior && r() < 0.6) { p = back(RH + 15); decal(cell(3, 0), p[0] + rx * 2.5, p[1] + rz * 2.5, d, 1.7, 5.2); decal(cell(2, 0), p[0] + rx * 7.5, p[1] + rz * 7.5, d, 1.7, 5.2); }
          // boca de lobo junto à sarjeta
          p = back(RH + 3.5); decal(cell(1, 1), p[0] + rx * (RH - 0.45), p[1] + rz * (RH - 0.45), d, 0.8, 1.6);
          if (sig) this.signalHead(B, node, x, z, di, dj, axisZ ? 'z' : 'x');
        }
      }
    // tampas de bueiro no meio das quadras
    for (let i = 0; i <= c.nx; i++) for (let j = 0; j < c.nz; j++) if (r() < 0.7) decal(cell(0, 1), X(i) + (r() < 0.5 ? -2.5 : 2.5), Z(j) + BLOCK * (0.3 + r() * 0.4), [0, 1], 1.1, 1.1, 0.03);
    for (let j = 0; j <= c.nz; j++) for (let i = 0; i < c.nx; i++) if (r() < 0.7) decal(cell(0, 1), X(i) + BLOCK * (0.3 + r() * 0.4), Z(j) + (r() < 0.5 ? -2.5 : 2.5), [1, 0], 1.1, 1.1, 0.03);
  }

  // semáforo: coluna na esquina, braço sobre a pista e grupo focal de 3 luzes
  signalHead(B, node, x, z, di, dj, axis) {
    const rx = -dj, rz = di;
    const px = x - di * (RH + 1.0) + rx * (RH + 1.0), pz = z - dj * (RH + 1.0) + rz * (RH + 1.0);
    const dark = 0x1c1d1f;
    B.flat.add(G.cyl(10), mat(px, 3.0, pz, 0, 0, 0, 0.26, 6.0, 0.26), 0x55595e);
    const armL = 6.2, ay = 5.9;
    B.flat.add(G.box(), mat(px - rx * armL / 2, ay, pz - rz * armL / 2, 0, Math.atan2(rx, rz), 0, 0.14, 0.14, armL), 0x55595e);
    const face = Math.atan2(-di, -dj);
    const heads = [[px - rx * (armL - 0.4), pz - rz * (armL - 0.4), ay - 0.75], [px, pz, 3.1]];
    for (const [hx0, hz0, hy] of heads) {
      const hx = hx0 - di * 0.25, hz = hz0 - dj * 0.25;
      B.flat.add(G.box(), mat(hx, hy, hz, 0, face, 0, 0.48, 1.28, 0.34), dark);
      B.flat.add(G.box(), mat(hx + di * 0.04, hy, hz + dj * 0.04, 0, face, 0, 0.7, 1.5, 0.04), 0x111111);
      this.sigHeads.push({ node, axis, x: hx - di * 0.18, y: hy, z: hz - dj * 0.18, face });
    }
  }

  // estado do semáforo: 'g' verde, 'y' amarelo, 'r' vermelho
  signalState(node, axis) {
    const ph = ((this.sigT || 0) + node.off) % 26;
    if (axis === 'z') return ph < 10 ? 'g' : ph < 13 ? 'y' : 'r';
    return ph < 13 ? 'r' : ph < 23 ? 'g' : 'y';
  }
  signalAt(cityId, i, j) { return this.signals ? this.signals.get(cityId + ':' + i + ':' + j) : null; }

  buildSignals() {
    const n = this.sigHeads.length;
    if (!n) return;
    const g = new THREE.CircleGeometry(0.17, 9);
    const mk = () => { const m = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ toneMapped: false }), n); return m; };
    this.lens = [mk(), mk(), mk()];
    const off = [0.4, 0, -0.4];
    this.sigHeads.forEach((h, i) => {
      for (let k = 0; k < 3; k++) this.lens[k].setMatrixAt(i, mat(h.x, h.y + off[k], h.z, 0, h.face, 0));
    });
    for (const m of this.lens) { m.computeBoundingSphere(); this.scene.add(m); }
    this.updateSignals(true);
  }

  updateSignals(force) {
    if (!this.lens) return;
    const on = [new THREE.Color(1.6, 0.08, 0.05), new THREE.Color(1.6, 0.85, 0.05), new THREE.Color(0.1, 1.5, 0.5)];
    const off = [new THREE.Color(0.18, 0.04, 0.03), new THREE.Color(0.18, 0.13, 0.03), new THREE.Color(0.03, 0.15, 0.08)];
    this.sigHeads.forEach((h, i) => {
      const st = this.signalState(h.node, h.axis);
      const k = st === 'r' ? 0 : st === 'y' ? 1 : 2;
      for (let c = 0; c < 3; c++) this.lens[c].setColorAt(i, c === k ? on[c] : off[c]);
    });
    for (const m of this.lens) m.instanceColor.needsUpdate = true;
  }

  grassPatch(x0, z0, x1, z1) {
    this.B.grass.quad([x0, 0.225, z1], [x1, 0.225, z1], [x1, 0.225, z0], [x0, 0.225, z0], [0, 1, 0], [x0 / 14, -z1 / 14, x1 / 14, -z1 / 14, x1 / 14, -z0 / 14, x0 / 14, -z0 / 14], 0xe8f5d8);
  }

  tree(x, z, s = 1, kind = 0, y = 0.2) {
    this.trees.push({ x, z, y, s: s * (0.8 + this.r() * 0.5), k: kind, rot: this.r() * 6.28 });
  }

  building(x0, z0, x1, z1, h, style) {
    const B = this.B;
    const u = ((this.r() * 4) | 0) * 0.25;
    B.f[style].walls(x0, 0.2, z0, x1, h, z1, 16, 14, u);
    B.roof.top(x0, z0, x1, z1, h, 6);
    B.flat.walls(x0, h, z0, x1, h + 0.8, z1, 1, 1, 0, 0x8d8d8d);
    B.flat.walls(x0 - 0.3, 3.4, z0 - 0.3, x1 + 0.3, 3.8, z1 + 0.3, 1, 1, 0, 0x5d6d7e);
    if (h > 14 && this.r() > 0.3) {
      const w = (x1 - x0) * 0.3, d = (z1 - z0) * 0.3, cx = (x0 + x1) / 2 + (this.r() - 0.5) * 4, cz = (z0 + z1) / 2;
      B.flat.box(cx - w / 2, h, cz - d / 2, cx + w / 2, h + 3, cz + d / 2, 1, 0xa0a0a0);
      B.metal.add(G.cyl(12), mat(cx + w, h + 2, cz, 0, 0, 0, 2.4, 3, 2.4), 0xcfd3d6);
      B.flat.add(G.box(), mat(cx - w * 0.3, h + 6, cz, 0, 0, 0, 0.15, 6, 0.15), 0x777777);
    }
  }

  house(x0, z0, x1, z1, h, color) {
    const B = this.B;
    B.flat.walls(x0, 0.2, z0, x1, h, z1, 1, 1, 0, color);
    const cx = (x0 + x1) / 2;
    B.flat.quad([cx - 0.6, 0.2, z1 + 0.02], [cx + 0.6, 0.2, z1 + 0.02], [cx + 0.6, 2.4, z1 + 0.02], [cx - 0.6, 2.4, z1 + 0.02], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], 0x5a3a22);
    for (const wx of [x0 + 1.6, x1 - 2.8]) {
      B.flat.quad([wx, 1.2, z1 + 0.02], [wx + 1.2, 1.2, z1 + 0.02], [wx + 1.2, 2.4, z1 + 0.02], [wx, 2.4, z1 + 0.02], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2c3e50);
      B.flat.quad([wx + 1.2, 1.2, z0 - 0.02], [wx, 1.2, z0 - 0.02], [wx, 2.4, z0 - 0.02], [wx + 1.2, 2.4, z0 - 0.02], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2c3e50);
    }
    const rh = 2.2, ov = 0.4, mz = (z0 + z1) / 2;
    const a = x0 - ov, b = x1 + ov, zz0 = z0 - ov, zz1 = z1 + ov;
    const sl = Math.hypot(rh, mz - zz0);
    const ny = (mz - zz0) / sl, nz = rh / sl;
    const U = (b - a) / 3, V = sl / 3;
    B.tiles.quad([a, h, zz1], [b, h, zz1], [b, h + rh, mz], [a, h + rh, mz], [0, ny, nz], [0, 0, U, 0, U, V, 0, V]);
    B.tiles.quad([b, h, zz0], [a, h, zz0], [a, h + rh, mz], [b, h + rh, mz], [0, ny, -nz], [0, 0, U, 0, U, V, 0, V]);
    B.flat.quad([x0, h, z0], [x0, h, z1], [x0, h + rh, mz], [x0, h + rh, mz], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], color);
    B.flat.quad([x1, h, z1], [x1, h, z0], [x1, h + rh, mz], [x1, h + rh, mz], [1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], color);
    B.flat.walls(x0 - 2, 0.2, z1 + 2, x1 + 2, 1.1, z1 + 2.2, 1, 1, 0, 0xd9d4c7);
  }

  tank(x, z, rad, h, color = 0xe8e8e8) {
    this.B.metal.add(G.cyl(20), mat(x, h / 2, z, 0, 0, 0, rad * 2, h, rad * 2), color, 1);
    this.B.metal.add(G.cone(20), mat(x, h + rad * 0.2, z, 0, 0, 0, rad * 2.02, rad * 0.4, rad * 2.02), color);
    this.B.flat.add(G.box(), mat(x + rad + 0.1, h / 2, z, 0, 0, 0, 0.1, h, 0.7), 0x7f8c8d);
  }

  chimney(x, z, rad, h, color = 0x9a8f86) {
    this.B.flat.add(G.cyl(14), mat(x, h / 2, z, 0, 0, 0, rad * 2, h, rad * 2), color);
    this.B.flat.add(G.cyl(14), mat(x, h - 3, z, 0, 0, 0, rad * 2.1, 1.2, rad * 2.1), 0xc0392b);
    this.B.flat.add(G.cyl(14), mat(x, h - 6, z, 0, 0, 0, rad * 2.1, 1.2, rad * 2.1), 0xf0f0f0);
  }

  containerStack(x, z, rot, rows, cols, levels) {
    const colors = [0xc0392b, 0x2471a3, 0x1e8449, 0xd68910, 0x7d3c98, 0x839192, 0xa04000, 0x117a65];
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        const lv = 1 + ((this.r() * levels) | 0);
        for (let k = 0; k < lv; k++) {
          const lx = (i - (rows - 1) / 2) * 2.6, lz = (j - (cols - 1) / 2) * 12.6;
          const c = Math.cos(rot), s = Math.sin(rot);
          this.B.cont.add(G.box(), mat(x + lx * c + lz * s, 1.3 + k * 2.6, z - lx * s + lz * c, 0, rot, 0, 2.44, 2.59, 12.2), colors[(this.r() * colors.length) | 0]);
        }
      }
  }

  crane(x, z, h, rot) {
    const B = this.B;
    const y = 0xf1c40f;
    B.flat.add(G.box(), mat(x, h / 2, z, 0, 0, 0, 1.6, h, 1.6), y);
    const c = Math.cos(rot), s = Math.sin(rot);
    B.flat.add(G.box(), mat(x + s * 12, h + 0.8, z + c * 12, 0, rot, 0, 1.2, 1.2, 44), y);
    B.flat.add(G.box(), mat(x - s * 8, h - 0.6, z - c * 8, 0, rot, 0, 2.2, 2, 4), 0x7f8c8d);
    B.flat.add(G.box(), mat(x, h + 3, z, 0, 0, 0, 1, 6, 1), y);
    B.flat.add(G.box(), mat(x + s * 1.5, h - 1.2, z + c * 1.5, 0, rot, 0, 2.4, 2.4, 2.4), 0x34495e);
  }

  turbine(x, z, h = 48, s = 1, y0 = 0) {
    const B = this.B;
    B.flat.add(G.cyl(14), mat(x, y0 + (h * s) / 2, z, 0, 0, 0, 2.2 * s, h * s, 2.2 * s), 0xf4f6f7);
    B.flat.add(G.box(), mat(x, y0 + h * s + 1, z - 1, 0, 0, 0, 2.2 * s, 2.4 * s, 6 * s), 0xeaeded);
    if (!this.rotorGeo) {
      const rb = new Builder();
      const blade = new THREE.BoxGeometry(1.4, 22, 0.4);
      blade.translate(0, 11, 0);
      for (let i = 0; i < 3; i++) rb.add(blade, mat(0, 0, 0, 0, 0, (i * Math.PI * 2) / 3));
      rb.add(G.sphere(), mat(0, 0, 0, 0, 0, 0, 2, 2, 2));
      this.rotorGeo = rb.geometry();
      this.rotorMat = new THREE.MeshLambertMaterial({ color: 0xf8f9f9 });
    }
    const rot = new THREE.Mesh(this.rotorGeo, this.rotorMat);
    rot.scale.setScalar(s);
    rot.position.set(x, y0 + h * s + 1, z + 2.2 * s);
    rot.rotation.z = this.r() * 6;
    this.scene.add(rot);
    this.animated.push({ obj: rot, speed: 0.6 + this.r() * 0.4 });
  }

  buildBlock(zone, x0, z0, x1, z1) {
    const B = this.B, r = this.r;
    this.addCollider(x0, z0, x1, z1);
    const ix0 = x0 + 5, iz0 = z0 + 5, ix1 = x1 - 5, iz1 = z1 - 5;
    const W = ix1 - ix0;
    for (const [lx, lz] of [[x0 + 1.5, z0 + 1.5], [x1 - 1.5, z0 + 1.5], [x0 + 1.5, z1 - 1.5], [x1 - 1.5, z1 - 1.5]]) this.lamps.push({ x: lx, z: lz });
    // meio-fio + calçada (pedra portuguesa no centro, bloquete nos bairros) + miolo do lote
    B.curb.walls(x0, 0, z0, x1, 0.22, z1, 2, 0.22);
    const SW = zone === 'park' ? 3 : 4.5, sb = B[zone === 'downtown' ? 'side0' : 'side' + (this.sideKind || 1)];
    sb.ground(x0, z0, x1, z0 + SW, 0.225, 4); sb.ground(x0, z1 - SW, x1, z1, 0.225, 4);
    sb.ground(x0, z0 + SW, x0 + SW, z1 - SW, 0.225, 4); sb.ground(x1 - SW, z0 + SW, x1, z1 - SW, 0.225, 4);
    B.concrete.top(x0 + SW, z0 + SW, x1 - SW, z1 - SW, 0.22, 4);
    // árvores na calçada dos bairros
    if (zone === 'residential' || zone === 'town')
      for (const [ax, az, bx, bz] of [[x0 + 1.6, z0 + 1.6, x1 - 1.6, z0 + 1.6], [x0 + 1.6, z1 - 1.6, x1 - 1.6, z1 - 1.6]])
        for (let t = 0.2; t < 0.9; t += 0.3) if (r() > 0.35) this.tree(ax + (bx - ax) * t, az + (bz - az) * t, 0.75, 0, 0.22);
    if (zone === 'downtown') {
      const n = 2, cell = W / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          const w = cell * (0.62 + r() * 0.28), d = cell * (0.62 + r() * 0.28);
          const cx = ix0 + cell * (i + 0.5), cz = iz0 + cell * (j + 0.5);
          this.building(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 35 + r() * 95, r() > 0.5 ? 0 : 3);
        }
      for (let t = 0; t < 8; t++) this.tree(x0 + 2 + (t * (x1 - x0 - 4)) / 7, z0 + 2, 0.8);
    } else if (zone === 'residential' || zone === 'town') {
      this.grassPatch(x0 + 4, z0 + 4, x1 - 4, z1 - 4);
      const n = 3, cell = W / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          const cx = ix0 + cell * (i + 0.5), cz = iz0 + cell * (j + 0.5);
          if (i === 1 && j === 1) {
            for (let t = 0; t < 4; t++) this.tree(cx + (r() - 0.5) * 20, cz + (r() - 0.5) * 20, 1);
            continue;
          }
          if (zone === 'town' || r() < 0.45) {
            const w = 10 + r() * 6, d = 9 + r() * 4;
            const cols = [0xf5e6c8, 0xdfe9f0, 0xf3d1b0, 0xe8e2a8, 0xc9e3c1, 0xf0c9c9, 0xffffff];
            this.house(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 3.6 + (r() > 0.7 ? 3.2 : 0), cols[(r() * cols.length) | 0]);
            this.tree(cx + w / 2 + 3, cz + d / 2 + 3, 0.9);
          } else {
            const w = cell * (0.6 + r() * 0.3), d = cell * (0.6 + r() * 0.3);
            this.building(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 8 + r() * 26, r() > 0.5 ? 1 : 2);
          }
        }
      for (let t = 0; t < 7; t++) {
        const a = x0 + 6 + (t * (x1 - x0 - 12)) / 6;
        this.tree(a, z0 + 2, 0.75);
        this.tree(a, z1 - 2, 0.75);
      }
    } else if (zone === 'park') {
      this.grassPatch(x0 + 4, z0 + 4, x1 - 4, z1 - 4);
      for (let t = 0; t < 46; t++) this.tree(ix0 + r() * W, iz0 + r() * W, 1.1, r() > 0.7 ? 1 : 0);
      B.sand.ground(ix0 + W * 0.35, iz0 + W * 0.35, ix0 + W * 0.65, iz0 + W * 0.65, 0.235, 8);
    } else if (zone === 'industrial') {
      const h = 10 + r() * 6;
      const half = W / 2;
      const tint = [0xffffff, 0xd6e4f0, 0xf0e2d0, 0xdde8d8][(r() * 4) | 0];
      B.wh.walls(ix0 + 2, 0.2, iz0 + 2, ix1 - 2, h, iz0 + half - 4, 6, 6, 0, tint);
      B.roof.top(ix0 + 2, iz0 + 2, ix1 - 2, iz0 + half - 4, h, 6);
      if (r() > 0.4) {
        for (let k = 0; k < 3; k++) this.tank(ix0 + 18 + k * 26, iz1 - 22, 9, 14 + r() * 8);
      } else {
        B.wh.walls(ix0 + 4, 0.2, iz0 + half + 4, ix1 - 30, h * 0.8, iz1 - 4, 6, 6, 0, tint);
        B.roof.top(ix0 + 4, iz0 + half + 4, ix1 - 30, iz1 - 4, h * 0.8, 6);
        this.chimney(ix1 - 14, iz1 - 16, 2.5, 38 + r() * 20);
      }
    } else if (zone === 'port') {
      this.containerStack(ix0 + 28, (iz0 + iz1) / 2, 0, 8, 3, 4);
      this.containerStack(ix1 - 28, (iz0 + iz1) / 2, 0, 8, 3, 3);
      this.crane((ix0 + ix1) / 2, iz1 - 4, 30, Math.PI / 2);
    }
  }

  buildDepot(L, x0, z0, x1, z1) {
    const B = this.B, r = this.r;
    B.lot.ground(x0, z0, x1, z1, 0.03, 12);
    const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    let zone, bld, entry, face;
    const ZL = 34, ZS = 14;
    if (L.side === 'n') { zone = { x: mx, z: z0 + 22, w: ZL, d: ZS }; bld = [x0 + 10, z1 - 50, x1 - 10, z1 - 6]; entry = { x: mx, z: z0 - RH }; face = 'n'; }
    else if (L.side === 's') { zone = { x: mx, z: z1 - 22, w: ZL, d: ZS }; bld = [x0 + 10, z0 + 6, x1 - 10, z0 + 50]; entry = { x: mx, z: z1 + RH }; face = 's'; }
    else if (L.side === 'w') { zone = { x: x0 + 22, z: mz, w: ZS, d: ZL }; bld = [x1 - 50, z0 + 10, x1 - 6, z1 - 10]; entry = { x: x0 - RH, z: mz }; face = 'w'; }
    else { zone = { x: x1 - 22, z: mz, w: ZS, d: ZL }; bld = [x0 + 6, z0 + 10, x0 + 50, z1 - 10]; entry = { x: x1 + RH, z: mz }; face = 'e'; }
    if (L.lot) {
      const q = this.hwIdx.nearest(entry.x, entry.z, {});
      if (q) entry = { x: q.x, z: q.z, hw: q.o.id, s: q.o.s[q.i] + (q.o.s[q.i + 1] - q.o.s[q.i]) * q.t };
      const fence = (ax, az, bx, bz) => {
        const len = Math.hypot(bx - ax, bz - az);
        B.flat.add(G.box(), mat((ax + bx) / 2, 0.9, (az + bz) / 2, 0, Math.atan2(bx - ax, bz - az), 0, 0.08, 1.8, len), 0x6f7a80);
      };
      if (face !== 'n') fence(x0, z0, x1, z0);
      if (face !== 's') fence(x0, z1, x1, z1);
      if (face !== 'w') fence(x0, z0, x0, z1);
      if (face !== 'e') fence(x1, z0, x1, z1);
    }
    this.depots[L.id] = { ...L, zone, entry, lot: [x0, z0, x1, z1] };
    const [bx0, bz0, bx1, bz1] = bld;
    const bcx = (bx0 + bx1) / 2, bcz = (bz0 + bz1) / 2;
    const k = L.kind;

    const mainBuilding = (h, tint = 0xffffff, styleFacade = -1) => {
      if (styleFacade >= 0) B.f[styleFacade].walls(bx0, 0.03, bz0, bx1, h, bz1, 16, 14, 0);
      else B.wh.walls(bx0, 0.03, bz0, bx1, h, bz1, 6, 6, 0, tint);
      B.roof.top(bx0, bz0, bx1, bz1, h, 6);
      B.flat.walls(bx0, h, bz0, bx1, h + 0.6, bz1, 1, 1, 0, L.color);
      this.addCollider(bx0, bz0, bx1, bz1);
      const dark = 0x2d3436;
      for (let i = 0; i < 4; i++) {
        const t = (i + 0.5) / 4, dw = 4, dh = Math.min(5, h - 1);
        if (face === 'n') { const x = bx0 + (bx1 - bx0) * t; B.flat.quad([x + dw / 2, 0.03, bz0 - 0.05], [x - dw / 2, 0.03, bz0 - 0.05], [x - dw / 2, dh, bz0 - 0.05], [x + dw / 2, dh, bz0 - 0.05], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], dark); }
        if (face === 's') { const x = bx0 + (bx1 - bx0) * t; B.flat.quad([x - dw / 2, 0.03, bz1 + 0.05], [x + dw / 2, 0.03, bz1 + 0.05], [x + dw / 2, dh, bz1 + 0.05], [x - dw / 2, dh, bz1 + 0.05], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], dark); }
        if (face === 'w') { const z = bz0 + (bz1 - bz0) * t; B.flat.quad([bx0 - 0.05, 0.03, z - dw / 2], [bx0 - 0.05, 0.03, z + dw / 2], [bx0 - 0.05, dh, z + dw / 2], [bx0 - 0.05, dh, z - dw / 2], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], dark); }
        if (face === 'e') { const z = bz0 + (bz1 - bz0) * t; B.flat.quad([bx1 + 0.05, 0.03, z + dw / 2], [bx1 + 0.05, 0.03, z - dw / 2], [bx1 + 0.05, dh, z - dw / 2], [bx1 + 0.05, dh, z + dw / 2], [1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], dark); }
      }
      this.signFor(L, face, bld, h);
    };

    if (k === 'port') {
      this.containerStack(bcx - 25, bcz, Math.PI / 2, 4, 3, 4);
      this.containerStack(bcx + 25, bcz, Math.PI / 2, 4, 3, 3);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.crane(bcx, bcz, 34, 0);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'refinery') {
      for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) this.tank(bx0 + 12 + i * 22, bz0 + 15 + j * 32, 9, 12 + r() * 6);
      this.chimney(bx1 - 8, bz0 + 12, 1.6, 42, 0xbdc3c7);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'farm') {
      const h = 9;
      B.flat.walls(bx0 + 5, 0.03, bz0 + 6, bx1 - 30, h, bz1 - 6, 1, 1, 0, 0xa93226);
      B.tiles.top(bx0 + 4, bz0 + 5, bx1 - 29, bz1 - 5, h, 4);
      this.tank(bx1 - 14, bcz - 10, 5, 18, 0xd5d8dc);
      this.tank(bx1 - 14, bcz + 10, 5, 18, 0xd5d8dc);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'silo') {
      for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) this.tank(bx0 + 12 + i * 20, bz0 + 18 + j * 32, 7, 26, 0xcfd3d6);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'wind') {
      for (let i = 0; i < 3; i++) this.turbine(bx0 + 10 + i * 40, bcz, 55, 1);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'construction') {
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++)
        for (let f = 0; f < 5; f++) B.flat.add(G.box(), mat(bx0 + 6 + i * 10, f * 4 + 2, bz0 + 10 + j * 14, 0, 0, 0, 0.8, 4, 0.8), 0xa6acaf);
      for (let f = 1; f <= 5; f++) B.flat.add(G.box(), mat(bx0 + 21, f * 4, bz0 + 24, 0, 0, 0, 32, 0.4, 30), 0xb3b6b7);
      this.crane(bx1 - 8, bz1 - 10, 40, Math.PI / 2);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'fuel') {
      mainBuilding(5, 0xffffff);
      const zc = zone;
      B.flat.add(G.box(), mat(zc.x, 7, zc.z, 0, 0, 0, zc.w + 6, 0.8, zc.d + 6), 0xd02020);
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const px = zc.x + dx * (zc.w / 2 + 4), pz = zc.z + dz * (zc.d / 2 + 4);
        B.flat.add(G.box(), mat(px, 3.5, pz, 0, 0, 0, 0.6, 7, 0.6), 0xecf0f1);
        this.addCollider(px - 0.4, pz - 0.4, px + 0.4, pz + 0.4);
      }
    } else if (k === 'steel') {
      mainBuilding(18, 0xc9b8a8);
      this.chimney(bx0 + 8, bz0 + 8, 2.6, 55);
      this.chimney(bx1 - 8, bz1 - 8, 2.6, 50);
    } else if (k === 'sawmill') {
      const h = 8;
      const sx1 = (bx0 + bx1) / 2;
      B.wh.walls(bx0, 0.03, bz0, sx1, h, bz1, 6, 6, 0, 0xc8a27a);
      B.roof.top(bx0, bz0, sx1, bz1, h, 6);
      this.addCollider(bx0, bz0, bx1, bz1);
      for (let p = 0; p < 3; p++)
        for (let lg = 0; lg < 7; lg++) {
          const lz = bz0 + 14 + p * 30, lx = sx1 + 4 + (lg % 4) * 2.2 + (lg >= 4 ? 1.1 : 0), ly = lg >= 4 ? 2.8 : 0.9;
          B.flat.add(G.cyl(10), mat(lx, ly, lz, Math.PI / 2, 0, 0, 1.8, 14, 1.8), 0x8e5b32);
        }
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'quarry') {
      mainBuilding(9, 0xd0c8be);
      for (let i = 0; i < 2; i++) B.flat.add(G.cone(16), mat(bx0 + 25 + i * 50, 5, bcz, 0, 0, 0, 18, 10, 18), 0x9c9284);
    } else if (k === 'hospital') {
      mainBuilding(22, 0xffffff, 2);
    } else if (k === 'market') {
      mainBuilding(10, 0xffffff, 1);
    } else {
      mainBuilding(k === 'garage' ? 9 : 12, k === 'garage' ? 0xd6e4f7 : 0xffffff);
    }
    this.lamps.push({ x: x0 + 2, z: z0 + 2 }, { x: x1 - 2, z: z1 - 2 });
  }

  // posto de beira de estrada: pátio de concreto, cobertura, bombas, loja e placa
  buildStation(st) {
    const B = this.B, y = st.y, hd = st.hd;
    const fx = Math.sin(hd), fz = Math.cos(hd), nx = Math.cos(hd) * st.side, nz = -Math.sin(hd) * st.side;
    const P = (a, b) => [st.x + fx * a + nx * b, st.z + fz * a + nz * b]; // a: ao longo da via, b: para fora
    B.lot.add(G.cyl(32), mat(st.x, y - 0.12, st.z, 0, 0, 0, st.r * 2, 0.3, st.r * 2), 0xffffff, 6);
    // cobertura
    const [cx, cz] = P(0, 1);
    B.flat.add(G.box(), mat(cx, y + 6.6, cz, 0, hd, 0, 13, 0.9, 22), 0xd02020);
    B.flat.add(G.box(), mat(cx, y + 7.2, cz, 0, hd, 0, 13.2, 0.3, 22.2), 0xf2f2f2);
    for (const a of [-8, 8]) for (const b of [-4.5, 4.5]) {
      const [px, pz] = P(a, 1 + b);
      B.flat.add(G.box(), mat(px, y + 3.2, pz, 0, hd, 0, 0.5, 6.4, 0.5), 0xecf0f1);
    }
    // ilhas com bombas
    for (const a of [-5, 5]) {
      const [px, pz] = P(a, 1);
      B.flat.add(G.box(), mat(px, y + 0.15, pz, 0, hd, 0, 1.6, 0.3, 4.2), 0xbdc3c7);
      for (const b of [-1.2, 1.2]) {
        const [qx, qz] = P(a + b, 1);
        B.flat.add(G.box(), mat(qx, y + 1.0, qz, 0, hd, 0, 0.8, 1.7, 0.6), 0xf5f5f5);
        B.flat.add(G.box(), mat(qx, y + 1.5, qz, 0, hd, 0, 0.84, 0.35, 0.64), 0xd02020);
      }
      this.addCollider(px - 0.9, pz - 0.9, px + 0.9, pz + 0.9);
    }
    // loja de conveniência e borracharia (fora do pátio)
    const [lx, lz] = P(-4, st.r + 6);
    B.flat.add(G.box(), mat(lx, y + 2.4, lz, 0, hd, 0, 9, 4.8, 18), 0xf4f1ea);
    B.flat.add(G.box(), mat(lx, y + 5.0, lz, 0, hd, 0, 9.6, 0.5, 18.6), 0xd02020);
    const [wx, wz] = P(-4, st.r + 1.45);
    B.flat.add(G.box(), mat(wx, y + 1.6, wz, 0, hd, 0, 0.1, 2.4, 12), 0x2b3a46);
    const [bx, bz] = P(14, st.r + 5);
    B.flat.add(G.box(), mat(bx, y + 2.0, bz, 0, hd, 0, 8, 4, 8), 0xe8c547);
    for (let t = 0; t < 4; t++) { const [tx, tz] = P(18.5, st.r + 2 + t * 1.2); B.flat.add(G.cyl(12), mat(tx, y + 0.5, tz, 0, hd, Math.PI / 2, 1, 0.35, 1), 0x1b1b1b); }
    // placa alta com nome
    const [sx, sz] = P(-st.r + 2, -1.5);
    B.flat.add(G.box(), mat(sx, y + 5, sz, 0, hd, 0, 0.5, 10, 0.5), 0x666666);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(9, 9 * (192 / 1024) * 1.8), new THREE.MeshBasicMaterial({ map: tex.sign('⛽ ' + st.name.toUpperCase(), '#b01818', '#ffffff'), side: THREE.DoubleSide }));
    m.position.set(sx, y + 10.5, sz);
    m.rotation.y = hd + Math.PI / 2;
    m.matrixAutoUpdate = false; m.updateMatrix();
    this.scene.add(m);
    for (const a of [-14, 14]) { const [px, pz] = P(a, 10); this.lamps.push({ x: px, z: pz, y, ang: hd + (st.side > 0 ? -Math.PI / 2 : Math.PI / 2) }); }
  }

  signFor(L, face, bld, h, freestanding = false) {
    const [bx0, bz0, bx1, bz1] = bld;
    const w = 26, hh = 26 * (192 / 1024);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshBasicMaterial({ map: tex.sign(L.name.toUpperCase(), '#' + new THREE.Color(L.color).multiplyScalar(0.75).getHexString(), '#ffffff'), side: THREE.DoubleSide }));
    const y = freestanding ? 8 : h + hh / 2 + 0.8;
    if (face === 'n') { m.position.set((bx0 + bx1) / 2, y, bz0 - (freestanding ? 4 : 0.3)); m.rotation.y = Math.PI; }
    if (face === 's') { m.position.set((bx0 + bx1) / 2, y, bz1 + (freestanding ? 4 : 0.3)); }
    if (face === 'w') { m.position.set(bx0 - (freestanding ? 4 : 0.3), y, (bz0 + bz1) / 2); m.rotation.y = -Math.PI / 2; }
    if (face === 'e') { m.position.set(bx1 + (freestanding ? 4 : 0.3), y, (bz0 + bz1) / 2); m.rotation.y = Math.PI / 2; }
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    this.scene.add(m);
    if (freestanding) {
      const p = m.position, c = Math.cos(m.rotation.y), s = Math.sin(m.rotation.y);
      for (const k of [-1, 1]) this.B.flat.add(G.box(), mat(p.x + c * k * 10, 3, p.z - s * k * 10, 0, m.rotation.y, 0, 0.5, 6, 0.5), 0x555555);
    }
  }

  // placa de rodovia com postes
  roadSign(x, z, rotY, title, sub, bg = '#0f6b3a', y0 = 0) {
    const w = 9, h = 3.6;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex.roadSign(title, sub, bg), side: THREE.DoubleSide }));
    m.position.set(x, y0 + 5.2, z);
    m.rotation.y = rotY;
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    this.scene.add(m);
    const c = Math.cos(rotY), s = Math.sin(rotY);
    for (const k of [-1, 1]) this.B.metal.add(G.cyl(8), mat(x + c * k * 3.6, y0 + 3.4, z - s * k * 3.6, 0, 0, 0, 0.25, 6.8, 0.25), 0xb0b6bb);
  }

  // ---------- rodovias ----------
  buildHighway(h) {
    let B = this.tileB(h.x[0], h.z[0]);
    const n = h.n;
    const E = h.half, T = this.terrain;
    let RB = h.surface === 'asphalt' ? B.hwy : B[h.surface];
    const tile = h.surface === 'asphalt' ? 18 : E * 2;
    for (let i = 0; i < n - 1; i++) {
      const a = i, b = i + 1;
      B = this.tileB(h.x[a], h.z[a]); RB = h.surface === 'asphalt' ? B.hwy : B[h.surface];
      const ra = [-h.dz[a], h.dx[a]], rb = [-h.dz[b], h.dx[b]]; // vetor à direita
      const ya = h.y[a] + 0.04, yb = h.y[b] + 0.04;
      const va = h.s[a] / tile, vb = h.s[b] / tile;
      const P = (k, rr, o, y) => [h.x[k] + rr[0] * o, y, h.z[k] + rr[1] * o];
      const wood = h.bridge[a] === 2 || h.bridge[b] === 2;
      if (!wood) RB.quad(P(a, ra, -E, ya), P(a, ra, E, ya), P(b, rb, E, yb), P(b, rb, -E, yb), [0, 1, 0], [0, va, 1, va, 1, vb, 0, vb]);
      else {
        // ponte de madeira: tabuleiro de tábuas, longarinas, guarda-corpo e estacas no leito
        const W2 = E - 0.6, ua = h.s[a] / 4, ub = h.s[b] / 4;
        B.wood.quad(P(a, ra, -W2, ya + 0.05), P(a, ra, W2, ya + 0.05), P(b, rb, W2, yb + 0.05), P(b, rb, -W2, yb + 0.05), [0, 1, 0], [0, ua, 1, ua, 1, ub, 0, ub]);
        B.wood.quad(P(a, ra, W2, ya - 0.35), P(a, ra, -W2, ya - 0.35), P(b, rb, -W2, yb - 0.35), P(b, rb, W2, yb - 0.35), [0, -1, 0], [0, ua, 1, ua, 1, ub, 0, ub]);
        const hd = Math.atan2(h.dx[a], h.dz[a]), seg = h.s[b] - h.s[a];
        const mx = (h.x[a] + h.x[b]) / 2, mz = (h.z[a] + h.z[b]) / 2, my = (ya + yb) / 2;
        for (const sd of [-1, 1]) {
          const ox = ra[0] * sd, oz = ra[1] * sd;
          B.timber.add(G.box(), mat(mx + ox * (W2 - 0.1), my - 0.2, mz + oz * (W2 - 0.1), 0, hd, 0, 0.35, 0.45, seg + 0.05), 0x6a4a2c); // longarina
          B.timber.add(G.box(), mat(mx + ox * (W2 + 0.05), my + 1.0, mz + oz * (W2 + 0.05), 0, hd, 0, 0.16, 0.14, seg + 0.05), 0x7a5634); // corrimão
          B.timber.add(G.box(), mat(mx + ox * (W2 + 0.05), my + 0.5, mz + oz * (W2 + 0.05), 0, hd, 0, 0.12, 0.1, seg + 0.05), 0x6e4c2e);
          const px = h.x[a] + ox * (W2 + 0.05), pz = h.z[a] + oz * (W2 + 0.05);
          B.timber.add(G.box(), mat(px, ya + 0.55, pz, 0, hd, 0, 0.22, 1.15, 0.22), 0x5e4128); // mourão
          if (i % 2 === 0) B.timber.add(G.cyl(8), mat(h.x[a] + ox * (W2 - 0.3), ya - 2.6, h.z[a] + oz * (W2 - 0.3), 0, 0, 0, 0.42, 4.6, 0.42), 0x4f3720); // estaca
        }
        if (i % 2 === 0) B.timber.add(G.box(), mat(h.x[a], ya - 0.55, h.z[a], 0, hd, 0, W2 * 2 + 0.6, 0.3, 0.35), 0x5a3e24); // travessa
      }
      // lamaçal: poças fundas e brilhantes
      if (h.surface === 'mud') {
        const da = this.mudDepth(h.x[a], h.z[a]), db = this.mudDepth(h.x[b], h.z[b]);
        if (da + db > 0.05) {
          const wa = E * Math.min(0.95, 0.35 + da), wb = E * Math.min(0.95, 0.35 + db);
          B.puddle.quad(P(a, ra, -wa * Math.sign(da), ya + 0.03), P(a, ra, wa * Math.sign(da), ya + 0.03), P(b, rb, wb * Math.sign(db), yb + 0.03), P(b, rb, -wb * Math.sign(db), yb + 0.03), [0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
        }
      }
      const bridge = h.bridge[a] === 1 || h.bridge[b] === 1;
      for (const side of [-1, 1]) {
        const ea = P(a, ra, side * E, ya - 0.04), eb = P(b, rb, side * E, yb - 0.04);
        if (bridge) {
          // lateral da laje + guarda-corpo de concreto
          B.bridge.quad([ea[0], ya - 1.6, ea[2]], [eb[0], yb - 1.6, eb[2]], [eb[0], yb + 1.0, eb[2]], [ea[0], ya + 1.0, ea[2]], [ra[0] * side, 0, ra[1] * side], [h.s[a] / 4, 0, h.s[b] / 4, 0, h.s[b] / 4, 0.6, h.s[a] / 4, 0.6]);
        }
      }
      if (bridge) {
        B.bridge.quad(P(a, ra, E, ya - 1.6), P(a, ra, -E, ya - 1.6), P(b, rb, -E, yb - 1.6), P(b, rb, E, yb - 1.6), [0, -1, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
        if (i % 7 === 0) {
          for (const side of [-1, 1]) {
            const p = P(a, ra, side * 5, 0);
            const top = h.y[a] - 1.6;
            B.bridge.add(G.cyl(12), mat(p[0], (top - 2) / 2, p[2], 0, 0, 0, 1.6, top + 2, 1.6));
          }
          B.bridge.add(G.box(), mat(h.x[a], h.y[a] - 2.0, h.z[a], 0, Math.atan2(h.dx[a], h.dz[a]), 0, 13, 0.8, 1.6));
        }
      }
      // defensa onde há aterro alto ou corte (só no asfalto)
      if (!bridge && h.surface === 'asphalt' && i % 2 === 0) {
        const rr = [-h.dz[a], h.dx[a]];
        const t1 = T.raw(h.x[a] + rr[0] * (E + 6), h.z[a] + rr[1] * (E + 6)), t2 = T.raw(h.x[a] - rr[0] * (E + 6), h.z[a] - rr[1] * (E + 6));
        if (h.y[a] - Math.min(t1, t2) > 2.5) { this.rails.push({ h, i: a }); this.rails.push({ h, i: a + 1 }); }
      }
      if (i % 12 === 0 && h.surface === 'asphalt') for (const side of [-1, 1]) this.posts.push({ x: h.x[a] + ra[0] * side * (E + 0.7), y: h.y[a], z: h.z[a] + ra[1] * side * (E + 0.7), rot: Math.atan2(h.dx[a], h.dz[a]) });
    }
    // placas: vau e ponte de madeira
    const warn = (i, title, sub) => {
      for (const dir of [-1, 1]) {
        const k = Math.max(0, Math.min(n - 1, i + dir * 18));
        const hd = Math.atan2(h.dx[k], h.dz[k]) + (dir < 0 ? 0 : Math.PI);
        const sx = h.x[k] + -h.dz[k] * (E + 2.5) * -dir, sz = h.z[k] + h.dx[k] * (E + 2.5) * -dir;
        this.roadSign(sx, sz, hd, title, sub, '#7a4a1d', h.y[k]);
      }
    };
    for (const f of h.fords) { let bi = 0, bd = Infinity; for (let k = 0; k < n; k++) { const d = (h.x[k] - f.x) ** 2 + (h.z[k] - f.z) ** 2; if (d < bd) { bd = d; bi = k; } } warn(bi, 'VAU', 'Água sobre a pista'); }
    for (const c of h.crossings || []) if (c.type === 'wood') warn((c.i + c.j) >> 1, 'PONTE DE MADEIRA', 'Reduza a velocidade');
    // placas de destino
    const lotsHere = LOCATIONS.filter((L) => L.hw === h.id).map((L) => L.name);
    const name = (end) => (end && end[0] !== 'hw' ? CITY[end[0]].name : lotsHere.slice(-2).join(' • ') || h.id);
    const km = (h.length / 1000).toFixed(1).replace('.', ',');
    const sgn = (k, dir, txt) => {
      const rr = [-h.dz[k], h.dx[k]];
      const x = h.x[k] + rr[0] * dir * (E + 3), z = h.z[k] + rr[1] * dir * (E + 3);
      this.roadSign(x, z, Math.atan2(h.dx[k], h.dz[k]) + (dir > 0 ? Math.PI : 0), txt, `${h.id} • ${km} km${h.surface !== 'asphalt' ? ' • ' + SURFACES[h.surface].name : ''}`, h.surface === 'asphalt' ? '#0f6b3a' : '#7a5230', h.y[k]);
    };
    sgn(Math.min(h.n - 1, 16), 1, name(h.def.to));
    if (h.def.to) sgn(Math.max(0, h.n - 17), -1, name(h.def.from));
    if (h.surface !== 'asphalt') return;
    const mid = (h.n / 2) | 0;
    const rr = [-h.dz[mid], h.dx[mid]];
    const sp = new THREE.Mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ map: tex.speedSign(80), side: THREE.DoubleSide }));
    sp.position.set(h.x[mid] + rr[0] * (E + 2), h.y[mid] + 2.6, h.z[mid] + rr[1] * (E + 2));
    sp.rotation.y = Math.atan2(h.dx[mid], h.dz[mid]) + Math.PI;
    this.scene.add(sp);
    B.metal.add(G.cyl(6), mat(sp.position.x, h.y[mid] + 1.0, sp.position.z, 0, 0, 0, 0.12, 2.6, 0.12), 0xb0b6bb);
  }

  buildRails() {
    const b = new Builder();
    for (const { h, i } of this.rails) {
      const j = Math.min(h.n - 1, i + 1);
      for (const side of [-1, 1]) {
        const o = h.half + 0.3;
        const ax = h.x[i] - h.dz[i] * side * o, az = h.z[i] + h.dx[i] * side * o;
        const bx = h.x[j] - h.dz[j] * side * o, bz = h.z[j] + h.dx[j] * side * o;
        const ya = h.y[i], yb = h.y[j];
        b.quad([ax, ya + 0.45, az], [bx, yb + 0.45, bz], [bx, yb + 0.8, bz], [ax, ya + 0.8, az], [-h.dz[i] * side, 0, h.dx[i] * side], [0, 0, 1, 0, 1, 1, 0, 1]);
      }
    }
    if (this.rails.length) this.scene.add(b.mesh(new THREE.MeshPhongMaterial({ map: tex.metal(), side: THREE.DoubleSide, shininess: 60 })));
    const pg = new THREE.BoxGeometry(0.15, 1.1, 0.15);
    pg.translate(0, 0.55, 0);
    const posts = new THREE.InstancedMesh(pg, new THREE.MeshLambertMaterial({ color: 0xf2f2f2 }), this.posts.length);
    this.posts.forEach((p, i) => posts.setMatrixAt(i, mat(p.x, p.y, p.z, 0, p.rot, 0)));
    posts.computeBoundingSphere();
    this.scene.add(posts);
  }

  // ---------- rio e mar ----------
  buildRiverAndSea() {
    const R = this.river;
    const water = new Builder();
    const W = RIVER_W / 2;
    const dir = (k) => {
      const a = Math.max(0, k - 1), b = Math.min(R.n - 1, k + 1);
      const vx = R.x[b] - R.x[a], vz = R.z[b] - R.z[a], l = Math.hypot(vx, vz) || 1;
      return [-vz / l, vx / l];
    };
    for (let i = 0; i < R.n - 1; i++) {
      const ra = dir(i), rb = dir(i + 1);
      const P = (k, rr, o, y) => [R.x[k] + rr[0] * o, y, R.z[k] + rr[1] * o];
      const WY = -0.7;
      const a1 = P(i, ra, -W - 4, WY), a2 = P(i, ra, W + 4, WY), b2 = P(i + 1, rb, W + 4, WY), b1 = P(i + 1, rb, -W - 4, WY);
      water.quad(a1, a2, b2, b1, [0, 1, 0], [a1[0] / 30, a1[2] / 30, a2[0] / 30, a2[2] / 30, b2[0] / 30, b2[2] / 30, b1[0] / 30, b1[2] / 30]);

      // vegetação ciliar
      if (i % 3 === 0) for (const s of [-1, 1]) { const p = P(i, ra, s * (W + 22 + this.r() * 14), 0); this.tree(p[0], p[2], 1.2, 0, this.terrain.meshHeight(p[0], p[2]) - 0.3); }
    }
    // córregos (o nível sobe um pouco com as enchentes)
    const sw = new Builder();
    for (const st of this.streams) {
      const W = st.w / 2 + 2;
      for (let i = 0; i < st.n - 1; i++) {
        const d = (k) => { const a = Math.max(0, k - 1), b = Math.min(st.n - 1, k + 1), vx = st.x[b] - st.x[a], vz = st.z[b] - st.z[a], l = Math.hypot(vx, vz) || 1; return [-vz / l, vx / l]; };
        const ra = d(i), rb = d(i + 1);
        const Pp = (k, rr, o) => [st.x[k] + rr[0] * o, st.y[k], st.z[k] + rr[1] * o];
        const a1 = Pp(i, ra, -W), a2 = Pp(i, ra, W), b2 = Pp(i + 1, rb, W), b1 = Pp(i + 1, rb, -W);
        sw.quad(a1, a2, b2, b1, [0, 1, 0], [a1[0] / 20, a1[2] / 20, a2[0] / 20, a2[2] / 20, b2[0] / 20, b2[2] / 20, b1[0] / 20, b1[2] / 20]);
        if (i % 3 === 0) for (const s2 of [-1, 1]) { const p = Pp(i, ra, s2 * (W + 10 + this.r() * 12)); if (this.isFreeLoose(p[0], p[2])) this.tree(p[0], p[2], 1.1, this.r() < 0.4 ? 2 : 0, this.terrain.meshHeight(p[0], p[2]) - 0.3); }
      }
    }
    const swm = new THREE.MeshPhongMaterial({ map: tex.water().clone(), color: 0x8fa69a, shininess: 110, specular: 0x99aabb, transparent: true, opacity: 0.88, side: THREE.DoubleSide, depthWrite: false });
    swm.map.needsUpdate = true;
    this.streamMesh = sw.mesh(swm);
    if (this.streamMesh) { this.streamMesh.renderOrder = 1; this.scene.add(this.streamMesh); }
    this.fordList = [];
    for (const h of this.hws) for (const f of h.fords) this.fordList.push(f);
    this.M.sand.side = THREE.DoubleSide;
    const wm = new THREE.MeshPhongMaterial({ map: tex.water().clone(), color: 0x9cc6d6, shininess: 110, specular: 0x99bbdd, transparent: true, opacity: 0.94, side: THREE.DoubleSide });
    wm.map.needsUpdate = true;
    this.riverMesh = water.mesh(wm);
    this.scene.add(this.riverMesh);
    const sea = new THREE.Mesh(new THREE.PlaneGeometry(30000, 6000), new THREE.MeshPhongMaterial({ map: tex.water().clone(), shininess: 90, specular: 0x88aacc, transparent: true, opacity: 0.95 }));
    sea.material.map.needsUpdate = true;
    sea.material.map.repeat.set(1000, 200);
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(1200, 0.07, SEA_Z + 3000);
    this.water = sea;
    this.scene.add(sea);
  }

  // ---------- vegetação ----------
  scatterForest() {
    const r = this.r;
    const target = this.q.trees;
    let tries = 0, placed = 0;
    while (placed < target && tries++ < target * 8) {
      const x = WORLD.x0 + r() * (WORLD.x1 - WORLD.x0), z = WORLD.z0 + r() * (WORLD.z1 - WORLD.z0);
      // mata densa a oeste/norte (BR-101 e RS-030), esparsa no leste agrícola
      const dense = vnoise(x / 520, z / 520) * 0.8 + (x < -300 && z < 600 ? 0.55 : -0.15);
      if (r() > dense) continue;
      if (!this.isFree(x, z, 2)) continue;
      const ty = this.terrainH(x, z);
      if (ty > 145 || ty < 0.3 || this.terrain.slope(x, z) > 0.55) continue; // neve, água ou penhasco
      const pine = x < -1500 || x > 2600 || ty > 60 || vnoise(x / 300 + 9, z / 300) > 0.62;
      this.tree(x, z, 1.3 + r() * 0.8, pine ? 1 : 0, ty - 0.3);
      placed++;
    }
    for (const f of this.fields) for (let t = 0; t < 5; t++) { const x = f.x0 + r() * (f.x1 - f.x0), z = f.z0 - 5; this.tree(x, z, 1.1, 0, this.terrainH(x, z) - 0.3); }
    // mata fechada beirando a BR-101 e a RS-030
    const dens = this.q.trees / 7000;
    for (const h of this.hws) {
      if (h.id === 'SP-280') continue;
      for (let i = 0; i < h.n; i += 2) {
        const k = Math.round(3 * dens + r());
        for (let j = 0; j < k; j++) {
          const side = r() < 0.5 ? -1 : 1;
          const o = h.half + 10 + Math.pow(r(), 1.6) * 70;
          const x = h.x[i] - h.dz[i] * side * o + (r() - 0.5) * 6, z = h.z[i] + h.dx[i] * side * o + (r() - 0.5) * 6;
          if (!this.isFree(x, z, 0)) continue;
          const pine = h.id === 'RS-030' ? r() < 0.7 : r() < 0.3;
          const ty = this.terrainH(x, z);
          if (ty < 0.3 || this.terrain.slope(x, z) > 0.6) continue;
          this.tree(x, z, 1.5 + r() * 1.1, pine ? 1 : 0, ty - 0.3);
        }
      }
    }
  }

  buildTrees() {
    // árvores em cartões cruzados com folhagem recortada (leve e realista)
    const make = (kind) => {
      const W = kind === 1 ? 4.6 : kind === 2 ? 5 : 6.6, H = kind === 1 ? 10 : kind === 2 ? 13 : 8.5;
      const pos = [], nor = [], uv = [], idx = [];
      const planes = 3;
      for (let p = 0; p < planes; p++) {
        const a = (p / planes) * Math.PI;
        const cx = Math.cos(a) * W / 2, cz = Math.sin(a) * W / 2;
        const o = pos.length / 3;
        pos.push(-cx, 0, -cz, cx, 0, cz, cx, H, cz, -cx, H, -cz);
        // normais "para cima/fora" = iluminação suave e uniforme
        for (let k = 0; k < 4; k++) nor.push(0, 0.85, 0.15);
        uv.push(0, 0, 1, 0, 1, 1, 0, 1);
        idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
      g.setIndex(idx);
      return g;
    };
    const geos = [make(0), make(1), make(2)];
    const mats = [0, 1, 2].map((k) => new THREE.MeshLambertMaterial({ map: tex.treeCard(k), alphaTest: 0.45, side: THREE.DoubleSide }));
    const depth = [0, 1, 2].map((k) => new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking, map: tex.treeCard(k), alphaTest: 0.45 }));
    const CH = 700;
    const groups = new Map();
    for (const t of this.trees) {
      // eucaliptos em parte das matas do leste/sul
      let kind = t.k;
      if (kind === 0 && ((t.x * 13 + t.z * 7) | 0) % 7 === 0 && t.x > -800) kind = 2;
      const k = Math.floor(t.x / CH) * 1000 + Math.floor(t.z / CH) + ':' + kind;
      if (!groups.has(k)) groups.set(k, []);
      groups.get(k).push(t);
    }
    const c = new THREE.Color();
    for (const [k, list] of groups) {
      const kind = +k.split(':')[1];
      const im = new THREE.InstancedMesh(geos[kind], mats[kind], list.length);
      list.forEach((t, i) => {
        im.setMatrixAt(i, mat(t.x, t.y, t.z, 0, t.rot, 0, t.s * 0.95, t.s * (0.85 + (i % 5) * 0.07), t.s * 0.95));
        c.setHSL(0.2 + ((i * 37) % 10) / 160, 0.25, 0.78 + ((i * 13) % 10) / 40);
        im.setColorAt(i, c);
      });
      im.computeBoundingSphere();
      im.castShadow = true;
      im.customDepthMaterial = depth[kind];
      this.scene.add(im);
      this.cull.push({ obj: im, x: im.boundingSphere.center.x, z: im.boundingSphere.center.z, r: im.boundingSphere.radius });
    }
  }

  buildLamps() {
    const n = this.lamps.length;
    const g = new THREE.CylinderGeometry(0.12, 0.16, 8, 6);
    g.translate(0, 4, 0);
    const arm = new THREE.BoxGeometry(0.15, 0.15, 2.2);
    arm.translate(0, 8, 1);
    const head = new THREE.BoxGeometry(0.5, 0.2, 0.9);
    head.translate(0, 7.9, 2);
    const poles = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: 0x5d6d7e }), n);
    const arms = new THREE.InstancedMesh(arm, new THREE.MeshLambertMaterial({ color: 0x5d6d7e }), n);
    const heads = new THREE.InstancedMesh(head, new THREE.MeshBasicMaterial({ color: 0xfdf2d0 }), n);
    const pg = new THREE.PlaneGeometry(16, 16);
    pg.rotateX(-Math.PI / 2);
    pg.translate(0, 0.12, 3.5);
    const pools = new THREE.InstancedMesh(pg, new THREE.MeshBasicMaterial({ map: tex.glow(), color: 0xffb35c, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }), n);
    this.lamps.forEach((l, i) => {
      const a = this.areas.find((ar) => ar.city && l.x >= ar.x0 && l.x <= ar.x1 && l.z >= ar.z0 && l.z <= ar.z1);
      let ang = 0;
      if (a) {
        const c = a.city;
        const rx = Math.round((l.x - c.x0) / BLOCK) * BLOCK + c.x0, rz = Math.round((l.z - c.z0) / BLOCK) * BLOCK + c.z0;
        ang = Math.abs(l.x - rx) < Math.abs(l.z - rz) ? (rx > l.x ? Math.PI / 2 : -Math.PI / 2) : (rz > l.z ? 0 : Math.PI);
      }
      if (l.ang !== undefined) ang = l.ang;
      const m4 = mat(l.x, l.y || 0, l.z, 0, ang, 0);
      poles.setMatrixAt(i, m4); arms.setMatrixAt(i, m4); heads.setMatrixAt(i, m4); pools.setMatrixAt(i, m4);
    });
    this.lampHeads = heads;
    this.lampPools = pools;
    pools.visible = false;
    for (const im of [poles, arms, heads, pools]) {
      im.computeBoundingSphere();
      this.scene.add(im);
    }
  }

  setNight(n) {
    for (const m of this.M.f) m.emissiveIntensity = Math.max(0, n * 1.1 - 0.1);
    this.lampPools.visible = n > 0.05;
    this.lampPools.material.opacity = n * 0.9;
    this.lampHeads.material.color.setRGB(0.75 + n * 0.25, 0.72 + n * 0.2, 0.65 + n * 0.1);
  }

  setWet(w) {
    if (Math.abs((this._wetA ?? -1) - w) < 0.02) return;
    this._wetA = w;
    for (const m of this.wetMats) { m.color.setScalar(1 - 0.32 * w); m.specular.setScalar(0.5 * w); m.shininess = 30 + 90 * w; }
  }

  // pontos de alagamento: baixadas das rodovias perto do rio/litoral e alguns cruzamentos urbanos
  placeFloods() {
    const out = [];
    for (const h of this.hws) {
      if (h.surface !== 'asphalt') continue;
      for (let i = 20; i < h.n - 20; i += 4) {
        let low = true;
        for (let j = i - 20; j <= i + 20; j += 4) if (h.y[j] < h.y[i] - 0.01) { low = false; break; }
        if (!low || h.bridge[i] || h.y[i] > 12) continue;
        const nearWater = this.river.dist(h.x[i], h.z[i]) < 700 || h.z[i] > SEA_Z - 700;
        if (!nearWater || out.some((o) => Math.hypot(o.x - h.x[i], o.z - h.z[i]) < 400)) continue;
        out.push({ x: h.x[i], z: h.z[i], y: h.y[i], r: 26, depth: 0.85 });
      }
    }
    const r = rng(99);
    for (const c of CITIES) {
      const k = c.kind === 'metro' || c.kind === 'port' ? 2 : 1;
      for (let n = 0; n < k; n++) {
        const i = 1 + ((r() * (c.nx - 1)) | 0), j = 1 + ((r() * (c.nz - 1)) | 0);
        out.push({ x: c.x0 + i * BLOCK, z: c.z0 + j * BLOCK, y: 0.02, r: 15, depth: 0.55 });
      }
    }
    return out;
  }

  buildFloods() {
    this.floods = this.placeFloods();
    const wt = tex.water().clone(); wt.repeat.set(3, 3); wt.needsUpdate = true;
    const mat = new THREE.MeshPhongMaterial({ map: wt, color: 0x7d7566, shininess: 140, specular: 0xa9b6c4, transparent: true, opacity: 0.82, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
    this.floodTex = wt;
    const g = new THREE.CircleGeometry(1, 28);
    g.rotateX(-Math.PI / 2);
    for (const f of this.floods) {
      const m = new THREE.Mesh(g, mat);
      m.position.set(f.x, f.y, f.z);
      m.visible = false;
      this.scene.add(m);
      f.mesh = m;
    }
  }

  updateFloods(level) {
    if (!this.floods) return;
    for (const f of this.floods) {
      f.mesh.visible = level > 0.02;
      if (!f.mesh.visible) continue;
      const rr = f.r * (0.45 + 0.55 * Math.sqrt(level));
      f.mesh.scale.set(rr, 1, rr);
      f.mesh.position.y = f.y + 0.05 + f.depth * level;
    }
  }

  // profundidade da água num ponto (m)
  floodDepth(x, z) {
    const L = this.floodLevel || 0;
    if (this.fordList) for (const f of this.fordList) {
      const d = Math.hypot(x - f.x, z - f.z);
      if (d < f.r + 4) return Math.max(0, f.water + L * 0.5 - this.heightAt(x, z));
    }
    if (L < 0.02 || !this.floods) return 0;
    for (const f of this.floods) {
      const rr = f.r * (0.45 + 0.55 * Math.sqrt(L)), d = Math.hypot(x - f.x, z - f.z);
      if (d < rr) return f.depth * L * (1 - (d / rr) ** 2) + 0.05;
    }
    return 0;
  }

  // esconde o que está além do alcance da câmera (mapa grande)
  cullAt(x, z, far) {
    for (const c of this.cull) c.obj.visible = Math.hypot(c.x - x, c.z - z) - c.r < far;
  }

  update(dt, t) {
    this.sigT = (this.sigT || 0) + dt;
    this._sigU = (this._sigU || 0) - dt;
    if (this._sigU <= 0) { this._sigU = 0.25; this.updateSignals(); }
    for (const a of this.animated) a.obj.rotation.z += a.speed * dt;
    if (this.water) this.water.material.map.offset.set(t * 0.004, t * 0.006);
    if (this.riverMesh) this.riverMesh.material.map.offset.set(t * 0.02, t * 0.01);
    if (this.streamMesh) { this.streamMesh.material.map.offset.set(t * 0.035, t * 0.02); this.streamMesh.position.y = (this.floodLevel || 0) * 0.5; }
    if (this.floodTex && this.floodLevel > 0.02) this.floodTex.offset.set(Math.sin(t * 0.7) * 0.02, t * 0.015);
  }
}
