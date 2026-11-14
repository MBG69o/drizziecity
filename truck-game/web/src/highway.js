// Rodovias em spline (curvas suaves), perfil de elevação (morros e pontes)
// e índice espacial para consultas rápidas (colisão, altura, rota, tráfego).
import * as THREE from 'three';
import { HIGHWAYS, RIVER, RIVER_W, HW_HALF, LOCATIONS } from './data.js';

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
  constructor(def, river) {
    this.def = def;
    this.id = def.id;
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
    // perfil de elevação: pontes sobre o rio + morros suaves
    const lots = LOCATIONS.filter((L) => L.hw === def.id).map((L) => [(L.lot[0] + L.lot[2]) / 2, (L.lot[1] + L.lot[3]) / 2]);
    const raw = new Float32Array(n);
    this.bridge = new Uint8Array(n);
    const BR = 7.5;
    for (let i = 0; i < n; i++) {
      const dr = river.dist(x[i], z[i]);
      const over = dr < RIVER_W / 2 + 14;
      if (over) this.bridge[i] = 1;
      const yb = BR * smooth(1 - (dr - (RIVER_W / 2 + 22)) / 150);
      let mask = smooth(Math.min(this.s[i], this.length - this.s[i]) / 220 - 0.3);
      for (const [lx, lz] of lots) mask = Math.min(mask, smooth((Math.hypot(x[i] - lx, z[i] - lz) - 110) / 160));
      const hs = this.s[i];
      const yh = (def.hills || 0) * mask * (0.55 * Math.pow(Math.sin(hs / 260), 2) + 0.45 * Math.pow(Math.sin(hs / 610 + 1.3), 2));
      raw[i] = Math.max(yb, yh);
    }
    // suaviza
    for (let i = 0; i < n; i++) {
      let acc = 0, w = 0;
      for (let k = -8; k <= 8; k++) {
        const j = Math.min(n - 1, Math.max(0, i + k));
        acc += raw[j]; w++;
      }
      this.y[i] = this.bridge[i] ? Math.max(BR, acc / w) : acc / w;
    }
    this.y[0] = this.y[n - 1] = 0;
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

export function buildHighways() {
  const river = new River();
  const hws = HIGHWAYS.map((d) => new Highway(d, river));
  const idx = new PolyIndex(80, 40);
  for (const h of hws) idx.addSegments(h, h.x, h.z);
  return { river, hws, idx };
}
