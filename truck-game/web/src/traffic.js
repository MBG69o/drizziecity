// Tráfego com IA: carros nas grades urbanas e carros/caminhões nas rodovias.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Builder, mat, G } from './geo.js';
import { CITIES, BLOCK, ROAD_W, cx1, cz1 } from './data.js';
import { tex } from './textures.js';

const RH = ROAD_W / 2;
// cores reais de frota (muito branco, prata, preto e cinza)
const COLORS = [0xf2f2f0, 0xb9bdc3, 0x17181b, 0x5c6067, 0xf2f2f0, 0xa8acb2, 0x8e1c1c, 0x1d3157, 0x2f4a3a, 0x5a1a24, 0xc9b99a, 0xf2f2f0, 0x30343a];
const IDENT = new THREE.Matrix4();
let RB = null;
let MATS = null;
export function trafficQuality(low) { MATS = null; trafficQuality.low = low; }

// Perfil lateral (z ao longo do carro, y para cima) extrudado na largura, com bordas arredondadas.
// Itens do contorno: [z, y] ou ['arc', z, y, r] (caixa de roda).
function extr(B, pts, width, color, bevel = 0.05, x = 0) {
  const sh = new THREE.Shape();
  let first = true;
  for (const p of pts) {
    if (p[0] === 'arc') {
      const [, cz, cy, r] = p;
      sh.lineTo(cz - r, cy);
      sh.absarc(cz, cy, r, Math.PI, 0, true);
      continue;
    }
    if (first) { sh.moveTo(p[0], p[1]); first = false; } else sh.lineTo(p[0], p[1]);
  }
  const depth = Math.max(0.01, width - 2 * bevel);
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel * 0.6, bevelSegments: 2, curveSegments: 7, steps: 1 });
  g.rotateY(-Math.PI / 2);
  g.translate(depth / 2 + x, 0, 0);
  B.add(g, IDENT, color);
  g.dispose();
}

// Carros de passeio e utilitários com aparência de modelos reais
// 0 sedã, 1 hatch, 2 SUV, 3 picape cabine dupla, 4 van, 5 ônibus urbano, 6 caminhão leve (VUC)
function carGeo(type, color) {
  const G1 = new Builder(true), M1 = new Builder(true), L1 = new Builder(true); // brilhante, fosco, luzes
  RB = RB || new RoundedBoxGeometry(1, 1, 1, 2, 0.18);
  const box = (B, w, h, d, x, y, z, c, rx = 0, ry = 0) => B.add(G.box(), mat(x, y, z, rx, ry, 0, w, h, d), c);
  const rbox = (B, w, h, d, x, y, z, c) => B.add(RB, mat(x, y, z, 0, 0, 0, w, h, d), c);
  const glass = 0x0d1317, trim = 0x1a1b1d, chrome = 0xc9ccd0, plastic = 0x26282b;
  let L, W, wr, axles, H;
  const wheel = (x, z, r, wide = 0.22, dual = false) => {
    for (const s of [-1, 1]) {
      const xs = s * x;
      M1.add(G.cyl(18), mat(xs, r, z, 0, 0, Math.PI / 2, r * 2, wide, r * 2), 0x141414);           // pneu
      M1.add(G.cyl(18), mat(xs + s * (wide / 2 - 0.03), r, z, 0, 0, Math.PI / 2, r * 2 * 0.86, 0.05, r * 2 * 0.86), 0x232323); // flanco
      G1.add(G.cyl(14), mat(xs + s * (wide / 2 - 0.005), r, z, 0, 0, Math.PI / 2, r * 1.25, 0.03, r * 1.25), dual ? 0x9a9da2 : 0xb7bbc0); // aro
      M1.add(G.cyl(10), mat(xs + s * (wide / 2 + 0.005), r, z, 0, 0, Math.PI / 2, r * 0.42, 0.02, r * 0.42), 0x3a3d41);  // cubo
      if (!dual) for (let k = 0; k < 5; k++) { // raios da roda de liga leve
        const a = (k / 5) * Math.PI * 2;
        G1.add(G.box(), mat(xs + s * (wide / 2 + 0.008), r + Math.cos(a) * r * 0.32, z + Math.sin(a) * r * 0.32, a, 0, 0, 0.015, r * 0.5, r * 0.14), 0xd0d3d7);
      }
    }
  };
  const lights = (fy, ry, hw, inset = 0.32) => {
    // faróis (com máscara negra), lanternas e placas
    for (const s of [-1, 1]) {
      box(M1, 0.46, 0.2, 0.05, s * (W / 2 - inset), fy, L / 2 - 0.02, trim);
      box(L1, 0.4, 0.14, 0.05, s * (W / 2 - inset), fy, L / 2 + 0.005, 0xfff6dc);
      box(L1, 0.22, 0.04, 0.05, s * (W / 2 - inset - 0.05), fy - 0.12, L / 2 + 0.005, 0xffffff); // DRL
      box(L1, hw, 0.2, 0.05, s * (W / 2 - hw / 2 - 0.06), ry, -L / 2 - 0.005, 0xd0140c);
      box(L1, 0.12, 0.09, 0.05, s * (W / 2 - 0.12), ry - 0.13, -L / 2 - 0.005, 0xff8a10);
    }
    box(M1, 0.52, 0.14, 0.03, 0, fy - 0.22, L / 2 + 0.02, 0xf4f4f4);
    box(M1, 0.52, 0.14, 0.03, 0, ry - 0.2, -L / 2 - 0.02, 0xf4f4f4);
    box(M1, 0.5, 0.03, 0.035, 0, fy - 0.17, L / 2 + 0.025, 0x1e4f9e); // faixa Mercosul
    box(M1, 0.5, 0.03, 0.035, 0, ry - 0.15, -L / 2 - 0.025, 0x1e4f9e);
  };
  const mirrors = (z, y) => { for (const s of [-1, 1]) { box(G1, 0.16, 0.13, 0.1, s * (W / 2 + 0.07), y, z, color); box(M1, 0.05, 0.03, 0.08, s * (W / 2 + 0.01), y - 0.05, z + 0.02, trim); } };
  if (type <= 2) {
    // ---- sedã / hatch / SUV ----
    const suv = type === 2, hatch = type === 1;
    L = suv ? 4.6 : hatch ? 3.95 : 4.5; W = suv ? 1.86 : 1.75; wr = suv ? 0.37 : 0.31; H = suv ? 1.72 : 1.45;
    const zr = -L / 2, zf = L / 2, wbH = suv ? 1.38 : hatch ? 1.23 : 1.33, yb = suv ? 0.42 : 0.3, ra = wr + 0.06;
    const belt = suv ? 1.12 : 0.95, hood = suv ? 1.02 : 0.8;
    const ws = suv ? 0.95 : hatch ? 0.75 : 0.85; // base do para-brisa
    const prof = [[zr + 0.06, yb], ['arc', -wbH, wr + 0.02, ra], ['arc', wbH, wr + 0.02, ra], [zf - 0.12, yb], [zf, yb + 0.12], [zf + 0.02, hood - 0.18], [zf - 0.06, hood - 0.05], [zf - 0.45, hood + 0.03], [ws, belt - 0.02]];
    if (hatch) prof.push([zr + 0.25, belt + 0.02], [zr + 0.02, belt - 0.06], [zr - 0.01, yb + 0.25]);
    else if (suv) prof.push([zr + 0.2, belt + 0.03], [zr + 0.02, belt - 0.05], [zr - 0.01, yb + 0.25]);
    else prof.push([zr + 0.95, belt + 0.02], [zr + 0.18, belt], [zr + 0.02, belt - 0.12], [zr - 0.01, yb + 0.25]);
    extr(G1, prof, W, color, 0.07);
    // estufa de vidro (para-brisa inclinado, teto e vigia)
    const rt = suv ? 1.7 : hatch ? 1.42 : 1.4, rf = ws - (suv ? 0.75 : 0.85), rb = hatch ? zr + 0.32 : suv ? zr + 0.28 : zr + 1.05;
    const gh = [[rb - (hatch ? 0.07 : suv ? 0.08 : 0.4), belt - 0.02], [ws + 0.05, belt - 0.03], [ws - 0.25, belt + 0.22], [rf, rt - 0.02], [rf - 0.25, rt + 0.02], [rb + 0.3, rt + 0.01], [rb, rt - 0.12]];
    extr(G1, gh, W * 0.88, glass, 0.05);
    // teto e colunas na cor do carro
    extr(G1, [[rb + 0.05, rt - 0.03], [rf - 0.02, rt - 0.03], [rf - 0.22, rt + 0.035], [rb + 0.3, rt + 0.035]], W * 0.86, color, 0.03);
    const bz = suv ? (rf + rb) * 0.45 : (rf + rb) / 2 + 0.1; // coluna B
    box(G1, W * 0.885, rt - belt - 0.08, 0.11, 0, (rt + belt) / 2 - 0.02, bz, color);
    if (suv) box(G1, W * 0.885, rt - belt - 0.2, 0.1, 0, (rt + belt) / 2 - 0.08, rb + 0.35, color);
    // para-choques, grade, frisos, maçanetas, retrovisores, rack (SUV)
    box(M1, W * 0.98, 0.16, 0.12, 0, yb + 0.07, zf - 0.03, plastic);
    box(M1, W * 0.98, 0.16, 0.12, 0, yb + 0.07, zr + 0.03, plastic);
    box(M1, W * 0.5, 0.14, 0.05, 0, hood - 0.25, zf + 0.0, trim);
    box(G1, W * 0.42, 0.02, 0.055, 0, hood - 0.2, zf + 0.005, chrome);
    box(M1, W * 0.6, 0.08, 0.05, 0, yb + 0.15, zf + 0.02, trim);
    for (const sd of [-1, 1]) {
      box(M1, 0.03, 0.08, L * 0.62, sd * (W / 2 + 0.005), yb + 0.13, 0, plastic); // soleira
      for (const hz of [0.15, -0.85]) box(G1, 0.03, 0.03, 0.16, sd * (W / 2 + 0.01), belt - 0.08, hz, chrome);
    }
    mirrors(ws - 0.18, belt + 0.08);
    if (suv) for (const sd of [-1, 1]) box(M1, 0.04, 0.04, 1.6, sd * W * 0.36, rt + 0.06, -0.3, trim);
    if (suv) for (const sd of [-1, 1]) box(M1, 0.03, 0.18, L * 0.8, sd * (W / 2 + 0.01), wr + 0.25, 0, plastic);
    axles = [-wbH, wbH];
    lights(hood - 0.12, belt - 0.15, hatch ? 0.32 : 0.42);
    wheel(W / 2 - 0.13, -wbH, wr); wheel(W / 2 - 0.13, wbH, wr);
  } else if (type === 3) {
    // ---- picape cabine dupla ----
    L = 5.3; W = 1.86; wr = 0.38; H = 1.8;
    const zr = -L / 2, zf = L / 2, wb = 1.55, yb = 0.48, belt = 1.12, ra = wr + 0.07;
    extr(G1, [[zr + 0.05, yb], ['arc', -wb, wr + 0.03, ra], ['arc', wb + 0.2, wr + 0.03, ra], [zf - 0.12, yb], [zf, yb + 0.15], [zf + 0.02, 0.95], [zf - 0.08, 1.08], [zf - 0.6, 1.14], [1.05, belt], [-0.95, belt], [-0.95, belt + 0.03], [zr + 0.03, belt + 0.03], [zr, yb + 0.2]], W, color, 0.06);
    extr(G1, [[-0.95, belt - 0.02], [1.1, belt - 0.03], [0.85, belt + 0.25], [0.35, 1.78], [-0.85, 1.8], [-0.95, 1.55]], W * 0.88, glass, 0.05);
    extr(G1, [[-0.92, 1.76], [0.33, 1.76], [0.28, 1.83], [-0.9, 1.83]], W * 0.86, color, 0.03);
    box(G1, W * 0.885, 0.6, 0.12, 0, 1.43, 0.0, color); box(G1, W * 0.885, 0.42, 0.1, 0, 1.33, -0.88, color);
    box(M1, W - 0.22, 0.04, 1.62, 0, belt - 0.02, -1.78, 0x1c1c1c); // caçamba (protetor)
    box(M1, W - 0.12, 0.05, 0.05, 0, belt + 0.06, -0.97, trim);
    box(M1, W * 0.6, 0.22, 0.05, 0, 0.82, zf + 0.0, trim); box(G1, W * 0.62, 0.03, 0.06, 0, 0.94, zf + 0.005, chrome);
    box(M1, W * 1.0, 0.2, 0.14, 0, yb + 0.1, zf - 0.02, 0x3a3c40); box(G1, W * 1.0, 0.16, 0.12, 0, yb + 0.12, zr + 0.04, chrome);
    for (const sd of [-1, 1]) { box(M1, 0.12, 0.05, 2.0, sd * (W / 2 + 0.03), 0.55, 0.15, 0x2a2c2f); box(M1, 0.06, 0.16, 0.6, sd * (W / 2 + 0.02), wr + 0.32, -wb, plastic); box(M1, 0.06, 0.16, 0.6, sd * (W / 2 + 0.02), wr + 0.32, wb + 0.2, plastic); }
    mirrors(0.75, 1.25);
    axles = [-wb, wb + 0.2];
    lights(0.98, 1.0, 0.18, 0.28);
    wheel(W / 2 - 0.14, -wb, wr, 0.26); wheel(W / 2 - 0.14, wb + 0.2, wr, 0.26);
  } else if (type === 4) {
    // ---- van (furgão de teto alto) ----
    L = 5.9; W = 2.0; wr = 0.36; H = 2.6;
    const zr = -L / 2, zf = L / 2, yb = 0.4, ra = wr + 0.07;
    extr(G1, [[zr + 0.05, yb], ['arc', -1.6, wr + 0.03, ra], ['arc', 2.05, wr + 0.03, ra], [zf - 0.1, yb], [zf, yb + 0.15], [zf + 0.02, 0.95], [zf - 0.25, 1.22], [zf - 0.75, 1.32], [zf - 1.45, 2.45], [zf - 1.7, 2.6], [zr + 0.1, 2.6], [zr, 2.5], [zr, yb + 0.1]], W, color, 0.08);
    extr(G1, [[zf - 0.78, 1.31], [zf - 1.45, 2.42], [zf - 1.6, 2.5], [zf - 2.35, 2.5], [zf - 2.35, 1.3]], W + 0.02, glass, 0.02);
    box(G1, 0.03, 0.75, 1.9, W / 2 + 0.01, 1.85, -0.6, glass);
    box(M1, W * 0.55, 0.3, 0.05, 0, 0.82, zf + 0.0, trim); box(G1, 0.2, 0.2, 0.06, 0, 0.82, zf + 0.01, chrome);
    box(M1, W * 1.0, 0.24, 0.14, 0, yb + 0.1, zf - 0.02, 0x3a3c40); box(M1, W * 1.0, 0.2, 0.14, 0, yb + 0.1, zr + 0.03, 0x3a3c40);
    for (const sd of [-1, 1]) { box(M1, 0.04, 0.1, L * 0.55, sd * (W / 2 + 0.01), 0.6, -0.1, plastic); box(M1, 0.02, 1.7, 0.02, sd * (W / 2 + 0.005), 1.45, -0.5 + sd * 0, trim); }
    box(M1, 0.02, 1.9, 0.03, 0, 1.4, zr - 0.005, trim);
    mirrors(zf - 0.85, 1.5);
    axles = [-1.6, 2.05];
    lights(1.02, 1.6, 0.16, 0.25);
    wheel(W / 2 - 0.15, -1.6, wr, 0.24); wheel(W / 2 - 0.15, 2.05, wr, 0.24);
  } else if (type === 5) {
    // ---- ônibus urbano ----
    L = 12.2; W = 2.55; wr = 0.5; H = 3.15;
    const zr = -L / 2, zf = L / 2, yb = 0.42, ra = wr + 0.08;
    extr(G1, [[zr + 0.1, yb], ['arc', -3.6, wr + 0.02, ra], ['arc', 3.8, wr + 0.02, ra], [zf - 0.1, yb], [zf, yb + 0.2], [zf + 0.05, 2.9], [zf - 0.15, 3.12], [zr + 0.2, 3.12], [zr, 2.95], [zr, yb + 0.2]], W, color, 0.1);
    extr(G1, [[zr + 0.5, 1.55], [zf - 0.5, 1.55], [zf - 0.5, 2.7], [zr + 0.5, 2.7]], W + 0.03, glass, 0.01);
    extr(G1, [[zf - 0.3, 0.95], [zf + 0.07, 1.05], [zf + 0.07, 2.65], [zf - 0.3, 2.68]], W * 0.9, glass, 0.04);
    for (let k = -4; k <= 4; k++) box(G1, W + 0.05, 1.15, 0.1, 0, 2.12, k * 1.25 + 0.3, color); // colunas das janelas
    box(G1, W + 0.04, 0.3, L - 0.6, 0, 1.25, 0, 0xffffff); // faixa da pintura
    for (const dz of [zf - 1.4, 0.4]) box(G1, 0.04, 2.1, 1.1, W / 2 + 0.02, 1.5, dz, 0x1a2a30); // portas (lado direito)
    box(L1, W * 0.75, 0.24, 0.05, 0, 2.9, zf + 0.02, 0xffb12a); // letreiro de destino
    box(M1, W * 1.01, 0.3, 0.18, 0, yb + 0.12, zf - 0.03, 0x2e3033); box(M1, W * 1.01, 0.3, 0.18, 0, yb + 0.12, zr + 0.04, 0x2e3033);
    box(M1, W * 0.7, 0.3, 0.08, 0, 3.22, -2, 0x9aa0a6); // ar-condicionado
    mirrors(zf - 0.2, 2.3);
    axles = [-3.6, 3.8];
    lights(0.95, 1.2, 0.3, 0.35);
    wheel(W / 2 - 0.2, 3.8, wr, 0.3); wheel(W / 2 - 0.22, -3.6, wr, 0.5, true);
  } else {
    // ---- caminhão leve (VUC) cara-chata com baú ----
    L = 7.6; W = 2.3; wr = 0.44; H = 3.3;
    const zf = L / 2, cabL = 1.75, yb = 0.75;
    extr(G1, [[zf - cabL, yb], [zf - 0.08, yb], [zf, yb + 0.2], [zf + 0.04, 1.4], [zf - 0.12, 2.45], [zf - 0.35, 2.62], [zf - cabL, 2.62]], W, color, 0.08);
    extr(G1, [[zf - 0.15, 1.55], [zf + 0.05, 1.55], [zf - 0.1, 2.38], [zf - 0.32, 2.5], [zf - 0.5, 2.5], [zf - 0.5, 1.55]], W * 0.92, glass, 0.04);
    box(G1, 0.03, 0.7, 0.8, W / 2 + 0.01, 2.0, zf - 0.85, glass); box(G1, 0.03, 0.7, 0.8, -W / 2 - 0.01, 2.0, zf - 0.85, glass);
    box(M1, W * 0.7, 0.35, 0.05, 0, 1.15, zf + 0.04, trim);
    const bl = L - cabL - 0.15, bzc = -cabL / 2 - 0.07;
    box(G1, W + 0.05, 2.5, bl, 0, 2.15, bzc, 0xf3f3f1); // baú de alumínio
    for (const sx of [-1, 1]) for (const ez of [-1, 1]) box(G1, 0.08, 2.52, 0.08, sx * (W / 2 + 0.01), 2.15, bzc + ez * bl / 2, 0xb9bdc2);
    for (const yy of [0.9, 3.4]) for (const sx of [-1, 1]) box(G1, 0.06, 0.08, bl, sx * (W / 2 + 0.02), yy, bzc, 0xb9bdc2);
    box(M1, 0.03, 2.3, 0.03, 0, 2.15, bzc - bl / 2 - 0.03, 0x8a8e93);
    box(M1, 0.9, 0.22, L - 0.6, 0, 0.72, -0.2, 0x1b1b1b); // longarinas
    box(M1, W * 1.0, 0.22, 0.16, 0, yb, zf - 0.04, 0x2e3033);
    for (const sd of [-1, 1]) box(M1, 0.06, 0.25, 1.2, sd * (W / 2 - 0.05), 0.75, -0.3, 0x55595e);
    mirrors(zf - 0.2, 2.1);
    axles = [-1.9, zf - 0.9];
    lights(1.0, 1.0, 0.25, 0.3);
    wheel(W / 2 - 0.2, zf - 0.9, wr, 0.26); wheel(W / 2 - 0.25, -1.9, wr, 0.48, true);
  }
  // une as três camadas: brilhante, fosca e luzes
  const out = new Builder(true);
  const groups = [];
  for (const b of [G1, M1, L1]) {
    const start = out.idx.length, off = out.count;
    for (let i = 0; i < b.count * 3; i++) { out.pos.push(b.pos[i]); out.nor.push(b.nor[i]); out.col.push(b.col[i]); }
    for (let i = 0; i < b.count * 2; i++) out.uv.push(b.uv[i]);
    for (const k of b.idx) out.idx.push(k + off);
    groups.push([start, out.idx.length - start]);
  }
  const geo = out.geometry();
  groups.forEach(([st, n], i) => geo.addGroup(st, n, i));
  return { geo, L, W, H };
}

function bez(p0, p1, p2, t, out) {
  const u = 1 - t;
  out.x = u * u * p0.x + 2 * u * t * p1.x + t * t * p2.x;
  out.z = u * u * p0.z + 2 * u * t * p1.z + t * t * p2.z;
  return out;
}

export class Traffic {
  constructor(scene, count, world) {
    this.scene = scene;
    this.world = world;
    this.cars = [];
    const low = !!trafficQuality.low;
    const mtl = [
      low ? new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 90, specular: 0x777777 }) : new THREE.MeshStandardMaterial({ vertexColors: true, metalness: 0.45, roughness: 0.28, envMapIntensity: 1.2 }),
      new THREE.MeshLambertMaterial({ vertexColors: true }),
      new THREE.MeshBasicMaterial({ vertexColors: true }),
    ];
    this.beamMat = new THREE.MeshBasicMaterial({ map: tex.beam(), transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
    const beamG = new THREE.PlaneGeometry(6, 16);
    beamG.rotateX(-Math.PI / 2);
    beamG.rotateY(Math.PI); // parte larga do facho à frente
    const geos = {};
    // frota realista: muitos carros de passeio, alguns utilitários, ônibus e caminhões
    const MIX = [0, 1, 0, 1, 2, 0, 1, 3, 2, 0, 4, 1, 5, 0, 6, 1, 2, 3, 0, 6];
    for (let i = 0; i < count; i++) {
      const type = MIX[i % MIX.length];
      const color = type === 5 ? [0x1f6fb2, 0xd9861c, 0x2e8b57][i % 3] : type === 6 ? [0x1f4e8c, 0xf2f2f2, 0xb5121b][i % 3] : COLORS[(i * 7) % COLORS.length];
      const k = type + '_' + color;
      if (!geos[k]) geos[k] = carGeo(type, color);
      const mesh = new THREE.Mesh(geos[k].geo, mtl);
      mesh.castShadow = true;
      mesh.rotation.order = 'YXZ';
      const beam = new THREE.Mesh(beamG, this.beamMat);
      beam.position.set(0, 0.09, geos[k].L / 2 + 8);
      beam.visible = false;
      mesh.add(beam);
      mesh.visible = false;
      scene.add(mesh);
      const big = type >= 5;
      this.cars.push({ mesh, beam, L: geos[k].L, type, big, off: big ? 7.5 : i % 2 ? 2.5 : 7.5, v: 0, vmax: big ? 11 : type === 4 ? 12 : 12 + (i % 4), x: 1e5, z: 1e5, y: 0, h: 0, stopT: 0, mode: null });
    }
    this.p = { x: 0, z: 0 };
    this.q = { x: 0, z: 0 };
    this.tmp = {};
  }

  // ---------- grade urbana ----------
  node(c, i, j) { return { c, i, j, x: c.x0 + i * BLOCK, z: c.z0 + j * BLOCK }; }
  neighbors(n) {
    const out = [];
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const i = n.i + di, j = n.j + dj;
      if (i >= 0 && j >= 0 && i <= n.c.nx && j <= n.c.nz) out.push(this.node(n.c, i, j));
    }
    return out;
  }
  makeStraight(car) {
    const { A, B } = car;
    const dx = Math.sign(B.x - A.x), dz = Math.sign(B.z - A.z);
    const rx = -dz, rz = dx;
    const p0 = { x: A.x + dx * RH + rx * car.off, z: A.z + dz * RH + rz * car.off };
    const p2 = { x: B.x - dx * RH + rx * car.off, z: B.z - dz * RH + rz * car.off };
    car.seg = { p0, p1: { x: (p0.x + p2.x) / 2, z: (p0.z + p2.z) / 2 }, p2, len: Math.hypot(p2.x - p0.x, p2.z - p0.z), turn: false };
    car.dir = { x: dx, z: dz };
  }
  makeTurn(car) {
    const { A, B } = car;
    const opts = this.neighbors(B).filter((n) => !(n.i === A.i && n.j === A.j));
    const C = opts[(Math.random() * opts.length) | 0];
    const d1 = car.dir;
    const dx = Math.sign(C.x - B.x), dz = Math.sign(C.z - B.z);
    const r1 = { x: -d1.z, z: d1.x }, r2 = { x: -dz, z: dx };
    const p0 = car.seg.p2;
    const p2 = { x: B.x + dx * RH + r2.x * car.off, z: B.z + dz * RH + r2.z * car.off };
    const straight = dx === d1.x && dz === d1.z;
    const p1 = straight ? { x: (p0.x + p2.x) / 2, z: (p0.z + p2.z) / 2 } : { x: B.x + (r1.x + r2.x) * car.off, z: B.z + (r1.z + r2.z) * car.off };
    car.seg = { p0, p1, p2, len: straight ? ROAD_W : Math.hypot(p2.x - p0.x, p2.z - p0.z) * 1.15, turn: !straight };
    car.next = { A: B, B: C };
  }

  spawn(car, px, pz) {
    car.mesh.visible = false;
    car.mode = null;
    const q = this.world.hw(px, pz);
    const city = CITIES.find((c) => px > c.x0 - 350 && px < cx1(c) + 350 && pz > c.z0 - 350 && pz < cz1(c) + 350);
    if (q && q.o.surface === 'asphalt' && (!city || Math.random() < 0.45)) {
      const h = q.o;
      const sp = h.s[q.i];
      const s = sp + (Math.random() < 0.5 ? -1 : 1) * (140 + Math.random() * 320);
      if (s < 30 || s > h.length - 30) return;
      car.mode = 'hw'; car.hwy = h; car.s = s;
      car.dir = Math.random() < 0.5 ? 1 : -1;
      car.v = car.vmax * 1.4 * 0.8;
      car.mesh.visible = true;
      return;
    }
    if (!city) return;
    for (let tries = 0; tries < 30; tries++) {
      const A = this.node(city, (Math.random() * (city.nx + 1)) | 0, (Math.random() * (city.nz + 1)) | 0);
      const nb = this.neighbors(A);
      const B = nb[(Math.random() * nb.length) | 0];
      const d = Math.hypot((A.x + B.x) / 2 - px, (A.z + B.z) / 2 - pz);
      if (d < 110 || d > 420) continue;
      car.mode = 'city'; car.A = A; car.B = B; car.inTurn = false; car.next = null;
      this.makeStraight(car);
      car.s = Math.random() * car.seg.len * 0.8;
      car.v = car.vmax * 0.6;
      car.mesh.visible = true;
      return;
    }
  }

  update(dt, rig, playerCircles) {
    const P = this.p, Q = this.q, T = this.tmp;
    for (const car of this.cars) {
      if (!car.mode || Math.hypot(car.x - rig.x, car.z - rig.z) > 560) {
        car.x = car.z = 1e5;
        if (Math.random() < 0.2) this.spawn(car, rig.x, rig.z);
        if (!car.mode) continue;
        this.place(car, P, Q, T);
        continue;
      }
      // percepção: algo à frente?
      const fx = Math.sin(car.hh || 0), fz = Math.cos(car.hh || 0);
      let blocked = false;
      const look = 9 + car.v * 1.3 + car.L / 2;
      const check = (x, z, r) => {
        const dx = x - car.x, dz = z - car.z;
        const ahead = dx * fx + dz * fz;
        if (ahead <= 0 || ahead > look + r) return;
        if (Math.abs(dx * fz - dz * fx) < 1.6 + r) blocked = true;
      };
      for (const c of playerCircles) check(c.x, c.z, c.r);
      if (!blocked) for (const o of this.cars) if (o !== car && o.mode) check(o.x, o.z, o.L * 0.35);
      if (car.hit) { car.stopT = 2.5; car.hit = false; }
      car.stopT -= dt;
      const cruise = car.mode === 'hw' ? car.vmax * 1.4 : car.seg.turn ? 6 : car.vmax;
      let target = blocked || car.stopT > 0 ? 0 : cruise;
      // semáforos e placas PARE
      if (car.mode === 'city' && !car.inTurn) {
        const sig = this.world.signalAt(car.B.c.id, car.B.i, car.B.j);
        if (sig) {
          const rem = car.seg.len - car.s, axis = car.dir.x !== 0 ? 'x' : 'z';
          let stop = false;
          if (sig.stop) {
            if (sig.stop === axis && car.waitDone !== sig) {
              stop = true;
              if (rem < 3 && car.v < 0.6) { car.waitT = (car.waitT || 0) + dt; if (car.waitT > 1.3) { car.waitDone = sig; car.waitT = 0; } }
            }
          } else {
            const st = this.world.signalState(sig, axis);
            if (st === 'r' || (st === 'y' && rem > 5 + car.v * 0.9)) stop = true;
          }
          if (stop) target = Math.min(target, Math.sqrt(Math.max(0, 2 * 4.5 * (rem - 1.8))));
        }
      }
      // alagamento: passa devagar
      if (this.world.floodLevel > 0.05 && this.world.floodDepth(car.x, car.z) > 0.1) target = Math.min(target, 3);
      const acc = target > car.v ? 2.5 : 7;
      car.v += Math.sign(target - car.v) * Math.min(Math.abs(target - car.v), acc * dt);
      if (car.mode === 'hw') {
        car.s += car.v * dt * car.dir;
        if (car.s < 5 || car.s > car.hwy.length - 5) { car.mode = null; car.mesh.visible = false; continue; }
      } else {
        car.s += car.v * dt;
        while (car.s >= car.seg.len) {
          car.s -= car.seg.len;
          if (car.next && car.inTurn) {
            car.A = car.next.A; car.B = car.next.B; car.next = null; car.inTurn = false;
            this.makeStraight(car);
          } else {
            this.makeTurn(car);
            car.inTurn = true;
          }
        }
      }
      this.place(car, P, Q, T);
    }
  }

  place(car, P, Q, T) {
    if (car.mode === 'hw') {
      const h = car.hwy;
      h.at(car.s, T);
      const tx = T.dx * car.dir, tz = T.dz * car.dir;
      car.x = T.x - tz * 3.6; car.z = T.z + tx * 3.6; car.y = T.y + 0.04;
      car.hh = Math.atan2(tx, tz);
      const y2 = h.at(car.s + car.dir * 4, T).y;
      const pitch = -Math.atan2(y2 + 0.04 - car.y, 4);
      car.mesh.position.set(car.x, car.y, car.z);
      car.mesh.rotation.set(pitch, car.hh, 0);
    } else {
      const t = car.s / car.seg.len;
      bez(car.seg.p0, car.seg.p1, car.seg.p2, t, P);
      bez(car.seg.p0, car.seg.p1, car.seg.p2, Math.min(1, t + 0.02), Q);
      if (Math.hypot(Q.x - P.x, Q.z - P.z) > 1e-4) car.hh = Math.atan2(Q.x - P.x, Q.z - P.z);
      car.x = P.x; car.z = P.z;
      car.mesh.position.set(car.x, 0, car.z);
      car.mesh.rotation.set(0, car.hh, 0);
    }
  }

  setNight(n) {
    for (const c of this.cars) c.beam.visible = n > 0.35 || (this.world.wet || 0) > 0.5;
  }

  obstacles(out) {
    out.length = 0;
    for (const c of this.cars) {
      if (!c.mode) continue;
      const fx = Math.sin(c.hh), fz = Math.cos(c.hh);
      const n = c.big ? 3 : 2;
      for (let k = 0; k < n; k++) {
        const s = ((k / (n - 1)) - 0.5) * (c.L - 2);
        out.push({ x: c.x + fx * s, z: c.z + fz * s, r: c.big ? 1.3 : 1.0, car: c, set hit(v) { this.car.hit = v; } });
      }
    }
    return out;
  }
}
