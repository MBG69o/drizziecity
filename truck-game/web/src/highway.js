// Rodovias em spline (curvas suaves), perfil de elevação (morros e pontes)
// e índice espacial para consultas rápidas (colisão, altura, rota, tráfego).
import * as THREE from 'three';
import { HIGHWAYS, RIVER, RIVER_W } from './data.js';

const smooth = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

// Polilinha amostrada + hash espacial
export class PolyIndex {
  constructor(cell = 80, pad = 40) {
    this.cell = cell;
    this.pad = pad;
    this.map = new Map();
  }
  addSegments(owner, xs, zs) {
    const c = this.cell, p = this.pad;
    for (let i = 0; i < xs.length - 1; i++) {
      const x0 = Math.min(xs[i], xs[i + 1]) - p, x1 = Math.max(xs[i], xs[i + 1]) + p;
      const z0 = Math.min(zs[i], zs[i + 1]) - p, z1 = Math.max(zs[i], zs[i + 1]) + p;
      for (let gx = Math.floor(x0 / c); gx <= Math.floor(x1 / c); gx++)
        for (let gz = Math.floor(z0 / c); gz <= Math.floor(z1 / c); gz++) {
          const k = gx * 100000 + gz;
          let l = this.map.get(k);
          if (!l) this.map.set(k, (l = []));
          l.push(owner, i);
        }
    }
  }
  // mais próximo (dentro de pad): retorna objeto reutilizado
  nearest(x, z, out) {
    const l = this.map.get(Math.floor(x / this.cell) * 100000 + Math.floor(z / this.cell));
    out.d = Infinity;
    if (!l) return null;
    for (let k = 0; k < l.length; k += 2) {
      const o = l[k], i = l[k + 1];
      const ax = o.x[i], az = o.z[i], bx = o.x[i + 1], bz = o.z[i + 1];
      const vx = bx - ax, vz = bz - az;
      const len2 = vx * vx + vz * vz || 1;
      let t = ((x - ax) * vx + (z - az) * vz) / len2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = ax + vx * t, pz = az + vz * t;
      const d = Math.hypot(x - px, z - pz);
      if (d < out.d) { out.d = d; out.o = o; out.i = i; out.t = t; out.x = px; out.z = pz; }
    }
    return out.d < Infinity ? out : null;
  }
}

function sampleCurve(pts, step) {
  const curve = new THREE.CatmullRomCurve3(pts.map((p) => new THREE.Vector3(p[0], 0, p[1])), false, 'centripetal', 0.5);
  const n = Math.max(2, Math.ceil(curve.getLength() / step));
  const sp = curve.getSpacedPoints(n);
  const x = new Float32Array(sp.length), z = new Float32Array(sp.length);
  sp.forEach((p, i) => { x[i] = p.x; z[i] = p.z; });
  return { x, z };
}

export class River {
  constructor() {
    const { x, z } = sampleCurve(RIVER, 10);
    this.x = x; this.z = z; this.n = x.length;
    this.idx = new PolyIndex(100, RIVER_W / 2 + 80);
    this.idx.addSegments(this, x, z);
    this._q = {};
  }
  dist(px, pz) {
    const q = this.idx.nearest(px, pz, this._q);
    return q ? q.d : Infinity;
  }
}

export class Highway {
  constructor(def, river, terrain, parents) {
    this.def = def;
    this.id = def.id;
    this.half = def.half;
    this.surface = def.surface;
    const { x, z } = sampleCurve(def.pts, 4);
    const n = (this.n = x.length);
    this.x = x; this.z = z;
    this.s = new Float32Array(n);
    this.dx = new Float32Array(n);
    this.dz = new Float32Array(n);
    this.y = new Float32Array(n);
    for (let i = 1; i < n; i++) this.s[i] = this.s[i - 1] + Math.hypot(x[i] - x[i - 1], z[i] - z[i - 1]);
    this.length = this.s[n - 1];
    for (let i = 0; i < n; i++) {
      const a = Math.max(0, i - 1), b = Math.min(n - 1, i + 1);
      const vx = x[b] - x[a], vz = z[b] - z[a], l = Math.hypot(vx, vz) || 1;
      this.dx[i] = vx / l; this.dz[i] = vz / l;
    }
    // ---- perfil: acompanha o relevo, com rampa máxima, pontes sobre o rio ----
    const raw = new Float32Array(n);
    this.bridge = new Uint8Array(n);
    for (let i = 0; i < n; i++) raw[i] = terrain.raw(x[i], z[i]);
    const y = this.y;
    for (let i = 0; i < n; i++) {
      let acc = 0, w = 0;
      for (let k = -14; k <= 14; k++) { acc += raw[Math.min(n - 1, Math.max(0, i + k))]; w++; }
      y[i] = acc / w;
    }
    const g = this.surface === 'asphalt' ? 0.06 : 0.1; // rampa máxima
    let y0 = 0;
    if (def.from && def.from[0] === 'hw') {
      const p = parents.find((h) => h.id === def.from[1]);
      y0 = p ? p.yAt(x[0], z[0]) : 0;
      this.parent = p;
    }
    const limit = () => {
      y[0] = y0;
      for (let i = 1; i < n; i++) { const d = (this.s[i] - this.s[i - 1]) * g; y[i] = Math.min(y[i - 1] + d, Math.max(y[i - 1] - d, y[i])); }
      y[n - 1] = 0;
      for (let i = n - 2; i >= 0; i--) { const d = (this.s[i + 1] - this.s[i]) * g; y[i] = Math.min(y[i + 1] + d, Math.max(y[i + 1] - d, y[i])); }
    };
    limit();
    // pontes: vão livre sobre o rio e rampas de acesso
    const BR = 7.5;
    for (let i = 0; i < n; i++) if (river.dist(x[i], z[i]) < RIVER_W / 2 + 16) { this.bridge[i] = 1; y[i] = Math.max(y[i], BR); }
    for (let i = 1; i < n; i++) y[i] = Math.max(y[i], y[i - 1] - (this.s[i] - this.s[i - 1]) * g);
    for (let i = n - 2; i >= 0; i--) y[i] = Math.max(y[i], y[i + 1] - (this.s[i + 1] - this.s[i]) * g);
    y[0] = y0; y[n - 1] = 0;
    // suavização final (sem mexer nas pontas)
    const t = Float32Array.from(y);
    for (let i = 3; i < n - 3; i++) y[i] = (t[i - 3] + t[i - 2] + t[i - 1] + t[i] + t[i + 1] + t[i + 2] + t[i + 3]) / 7;
    for (let i = 0; i < n; i++) if (this.bridge[i]) y[i] = Math.max(y[i], BR);
  }

  // altura da pista no ponto mais próximo
  yAt(px, pz) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < this.n; i++) { const d = (this.x[i] - px) ** 2 + (this.z[i] - pz) ** 2; if (d < bd) { bd = d; best = i; } }
    return this.y[best];
  }

  // posição ao longo da rodovia (s em metros)
  at(s, out) {
    const n = this.n;
    s = Math.max(0, Math.min(this.length, s));
    let lo = 0, hi = n - 1;
    while (hi - lo > 1) { const m = (lo + hi) >> 1; if (this.s[m] <= s) lo = m; else hi = m; }
    const t = (s - this.s[lo]) / ((this.s[hi] - this.s[lo]) || 1);
    out.x = this.x[lo] + (this.x[hi] - this.x[lo]) * t;
    out.z = this.z[lo] + (this.z[hi] - this.z[lo]) * t;
    out.y = this.y[lo] + (this.y[hi] - this.y[lo]) * t;
    out.dx = this.dx[lo]; out.dz = this.dz[lo];
    out.i = lo;
    return out;
  }
}

export function buildHighways(terrain, river) {
  const hws = [];
  for (const d of HIGHWAYS) hws.push(new Highway(d, river, terrain, hws));
  const idx = new PolyIndex(80, 40);
  for (const h of hws) idx.addSegments(h, h.x, h.z);
  return { river, hws, idx };
}
