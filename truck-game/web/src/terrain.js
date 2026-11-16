// Terreno contínuo: serras, vales e colinas (ruído fractal), achatado nas cidades,
// vale do rio escavado, litoral, e estradas encaixadas com cortes e aterros.
import * as THREE from 'three';
import { CITIES, cx1, cz1, LOCATIONS, RIVER_W, SEA_Z, WORLD } from './data.js';
import { PolyIndex } from './highway.js';

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};
const hash = (i, j) => {
  const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
export function vnoise(x, z) {
  const i = Math.floor(x), j = Math.floor(z), fx = x - i, fz = z - j;
  const u = fx * fx * (3 - 2 * fx), v = fz * fz * (3 - 2 * fz);
  return (hash(i, j) * (1 - u) + hash(i + 1, j) * u) * (1 - v) + (hash(i, j + 1) * (1 - u) + hash(i + 1, j + 1) * u) * v;
}
function fbm(x, z, oct = 5) {
  let a = 0.5, f = 1, s = 0;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x * f + i * 17.3, z * f - i * 9.1); f *= 2.03; a *= 0.5; }
  return s;
}
const ridge = (x, z) => {
  let s = 0, a = 0.6, f = 1;
  for (let i = 0; i < 4; i++) { s += a * (1 - Math.abs(vnoise(x * f, z * f) * 2 - 1)); f *= 2.1; a *= 0.5; }
  return s;
};

// regiões montanhosas (centro, raio)
const RANGES = [[-2400, -3300, 1900], [3350, -1000, 1500], [600, -3500, 1500], [-3600, 300, 1300], [3600, 1600, 900]];

export class Terrain {
  constructor(river) {
    this.river = river;
    this.flat = [];
    for (const c of CITIES) this.flat.push({ x0: c.x0, z0: c.z0, x1: cx1(c), z1: cz1(c), r: 380 });
    for (const L of LOCATIONS) if (L.lot) this.flat.push({ x0: L.lot[0], z0: L.lot[1], x1: L.lot[2], z1: L.lot[3], r: 230 });
    this._q = {};
  }

  mountainMask(x, z) {
    let m = 0;
    for (const [cx, cz, r] of RANGES) m = Math.max(m, 1 - smooth(r * 0.35, r, Math.hypot(x - cx, z - cz)));
    // fora dos limites do mapa o relevo sobe (fecha o horizonte)
    const ox = Math.max(WORLD.x0 - x, x - WORLD.x1, 0), oz = Math.max(WORLD.z0 - z, 0);
    return Math.max(m, smooth(0, 900, Math.max(ox, oz)));
  }

  // relevo "natural" (antes das estradas)
  raw(x, z) {
    const mm = this.mountainMask(x, z);
    const n = fbm(x / 1100, z / 1100);
    let h = (22 + 120 * mm) * (n - 0.42) + mm * mm * 190 * Math.max(0, ridge(x / 700, z / 700) - 0.42) + 3 * (vnoise(x / 110, z / 110) - 0.5);
    h = Math.max(h, -6);
    // cidades e pátios planos (y = 0)
    for (const f of this.flat) {
      const dx = Math.max(f.x0 - x, 0, x - f.x1), dz = Math.max(f.z0 - z, 0, z - f.z1);
      const d = Math.hypot(dx, dz);
      if (d < f.r) h *= smooth(0, f.r, d);
    }
    // vale do rio
    const dr = this.river.dist(x, z);
    if (dr < RIVER_W / 2 + 200) h = -1.8 + (h + 1.8) * smooth(RIVER_W / 2 - 6, RIVER_W / 2 + 190, dr);
    // litoral
    if (z > SEA_Z - 320) h = h + (-5 - h) * smooth(SEA_Z - 320, SEA_Z + 60, z);
    return h;
  }

  // registra as estradas (para cortes/aterros)
  setRoads(hws) {
    this.hws = hws;
    this.idx = new PolyIndex(100, 150);
    for (const h of hws) this.idx.addSegments(h, h.x, h.z);
  }

  // altura final (com estradas encaixadas)
  height(x, z) {
    const r = this.raw(x, z);
    if (!this.idx) return r;
    const q = this.idx.nearest(x, z, this._q);
    if (!q) return r;
    const h = q.o;
    const ry = h.y[q.i] + (h.y[q.i + 1] - h.y[q.i]) * q.t;
    const w0 = h.half + 1.5;
    const span = Math.max(10, Math.abs(r - ry) * 1.7);
    const w = smooth(w0, w0 + span, q.d);
    return ry - 0.3 + (r - ry + 0.3) * w;
  }

  // malha em pedaços (descartados fora da câmera)
  build(scene, material, spacing) {
    const X0 = WORLD.x0 - 1600, X1 = WORLD.x1 + 1600, Z0 = WORLD.z0 - 1600, Z1 = SEA_Z + 1400;
    const nx = Math.ceil((X1 - X0) / spacing), nz = Math.ceil((Z1 - Z0) / spacing);
    const H = new Float32Array((nx + 1) * (nz + 1));
    for (let j = 0; j <= nz; j++)
      for (let i = 0; i <= nx; i++) H[j * (nx + 1) + i] = this.height(X0 + i * spacing, Z0 + j * spacing);
    this.grid = { X0, Z0, nx, nz, s: spacing, H };
    const CH = 40;
    const col = new THREE.Color(), grass = new THREE.Color(0x7d9a52), dry = new THREE.Color(0xa59a62), forest = new THREE.Color(0x5d7a40),
      rock = new THREE.Color(0x8a8378), snow = new THREE.Color(0xeef1f4), sand = new THREE.Color(0xd8c89a), dirt = new THREE.Color(0x9a7b55);
    for (let cj = 0; cj < nz; cj += CH)
      for (let ci = 0; ci < nx; ci += CH) {
        const ci1 = Math.min(nx, ci + CH), cj1 = Math.min(nz, cj + CH);
        const w = ci1 - ci + 1, hgt = cj1 - cj + 1;
        const pos = new Float32Array(w * hgt * 3), nor = new Float32Array(w * hgt * 3), uv = new Float32Array(w * hgt * 2), cl = new Float32Array(w * hgt * 3);
        let k = 0;
        for (let j = cj; j <= cj1; j++)
          for (let i = ci; i <= ci1; i++) {
            const x = X0 + i * spacing, z = Z0 + j * spacing, y = H[j * (nx + 1) + i];
            pos[k * 3] = x; pos[k * 3 + 1] = y; pos[k * 3 + 2] = z;
            const hl = H[j * (nx + 1) + Math.max(0, i - 1)], hr = H[j * (nx + 1) + Math.min(nx, i + 1)];
            const hd = H[Math.max(0, j - 1) * (nx + 1) + i], hu = H[Math.min(nz, j + 1) * (nx + 1) + i];
            const n = new THREE.Vector3(hl - hr, 2 * spacing, hd - hu).normalize();
            nor[k * 3] = n.x; nor[k * 3 + 1] = n.y; nor[k * 3 + 2] = n.z;
            uv[k * 2] = x / 14; uv[k * 2 + 1] = -z / 14;
            // cor: grama/mato seco, mata, rocha nas encostas, neve nos picos, areia na água
            const slope = 1 - n.y;
            const v1 = vnoise(x / 380, z / 380), v2 = vnoise(x / 70, z / 70);
            col.copy(grass).lerp(dry, Math.max(0, v1 - 0.45) * 1.6).lerp(forest, Math.max(0, 0.5 - v1) * 0.9);
            col.multiplyScalar(0.9 + v2 * 0.2);
            col.lerp(rock, smooth(0.18, 0.42, slope));
            if (y > 150) col.lerp(snow, smooth(150, 190, y) * (1 - smooth(0.35, 0.6, slope)));
            if (y < 0.8) col.lerp(sand, smooth(0.8, -0.6, y));
            // acostamento de terra junto às estradas
            const q = this.idx ? this.idx.nearest(x, z, this._q) : null;
            if (q && q.d < q.o.half + 5) col.lerp(dirt, 0.55 * (1 - smooth(q.o.half, q.o.half + 5, q.d)));
            cl[k * 3] = col.r * 1.12; cl[k * 3 + 1] = col.g * 1.12; cl[k * 3 + 2] = col.b * 1.12;
            k++;
          }
        const idx = [];
        for (let j = 0; j < hgt - 1; j++)
          for (let i = 0; i < w - 1; i++) {
            const a = j * w + i, b = a + 1, c = a + w, d = c + 1;
            idx.push(a, c, b, b, c, d);
          }
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
        g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
        g.setAttribute('color', new THREE.BufferAttribute(cl, 3));
        g.setIndex(idx);
        g.computeBoundingSphere();
        const m = new THREE.Mesh(g, material);
        m.receiveShadow = true;
        m.matrixAutoUpdate = false;
        scene.add(m);
      }
  }

  // altura igual à da malha (interpolação na grade) — para árvores e objetos
  meshHeight(x, z) {
    const G = this.grid;
    if (!G) return this.height(x, z);
    const fx = (x - G.X0) / G.s, fz = (z - G.Z0) / G.s;
    const i = Math.max(0, Math.min(G.nx - 1, Math.floor(fx))), j = Math.max(0, Math.min(G.nz - 1, Math.floor(fz)));
    const u = fx - i, v = fz - j, W = G.nx + 1, H = G.H;
    const a = H[j * W + i], b = H[j * W + i + 1], c = H[(j + 1) * W + i], d = H[(j + 1) * W + i + 1];
    // mesma diagonal dos triângulos (a,c,b) e (b,c,d)
    return u + v < 1 ? a + (b - a) * u + (c - a) * v : d + (c - d) * (1 - u) + (b - d) * (1 - v);
  }

  slope(x, z) {
    const e = 4;
    const dx = this.meshHeight(x + e, z) - this.meshHeight(x - e, z), dz = this.meshHeight(x, z + e) - this.meshHeight(x, z - e);
    return Math.hypot(dx, dz) / (2 * e);
  }
}
