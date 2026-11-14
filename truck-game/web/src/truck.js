// Caminhões e implementos realistas (cara-chata e bicudo) + física
// potência x massa, aclives, articulação da carreta e colisões.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { trailerMass } from './data.js';

let QUAL = 'medium';
export function setTruckQuality(q) { QUAL = q; }

let MATS = null;
function mats() {
  if (MATS) return MATS;
  const pbr = QUAL !== 'low';
  const S = (o) => (pbr ? new THREE.MeshStandardMaterial(o) : new THREE.MeshPhongMaterial({ color: o.color, map: o.map, vertexColors: o.vertexColors, side: o.side, shininess: o.roughness < 0.3 ? 120 : 20, specular: o.metalness > 0.5 ? 0xffffff : 0x333333 }));
  MATS = {
    chrome: S({ color: 0xf2f4f6, metalness: 1, roughness: 0.14, map: tex.metal() }),
    alu: S({ color: 0xc9cdd1, metalness: 0.9, roughness: 0.3 }),
    dark: S({ color: 0x1f2328, metalness: 0.1, roughness: 0.75, side: THREE.DoubleSide }),
    steel: S({ color: 0x3b4148, metalness: 0.5, roughness: 0.5 }),
    glass: S({ color: 0x0b1219, metalness: 0.3, roughness: 0.04 }),
    rubber: S({ color: 0xffffff, map: tex.tire(), metalness: 0, roughness: 0.92 }),
    rim: S({ color: 0xe8eaec, metalness: 0.85, roughness: 0.25 }),
    light: new THREE.MeshBasicMaterial({ color: 0xfff8e1 }),
    red: new THREE.MeshBasicMaterial({ color: 0xd63031 }),
    amber: new THREE.MeshBasicMaterial({ color: 0xffa21a }),
    grill: S({ color: 0xffffff, map: tex.grill(), metalness: 0.7, roughness: 0.3 }),
    flat: S({ vertexColors: true, metalness: 0.15, roughness: 0.55 }),
    flatChrome: S({ vertexColors: true, metalness: 0.9, roughness: 0.2 }),
    panel: S({ color: 0xffffff, map: tex.panel(), metalness: 0.2, roughness: 0.5 }),
    blob: new THREE.MeshBasicMaterial({ map: tex.blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
    glow: new THREE.SpriteMaterial({ map: tex.glow(), color: 0xfff3d6, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    glowRed: new THREE.SpriteMaterial({ map: tex.glow(), color: 0xff2a1a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    beam: new THREE.MeshBasicMaterial({ map: tex.beam(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -3 }),
  };
  return MATS;
}

function paintMat(color) {
  if (QUAL === 'high') return new THREE.MeshPhysicalMaterial({ color, map: tex.paint(), metalness: 0.35, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08 });
  if (QUAL === 'medium') return new THREE.MeshStandardMaterial({ color, map: tex.paint(), metalness: 0.35, roughness: 0.33 });
  return new THREE.MeshPhongMaterial({ color, map: tex.paint(), shininess: 90, specular: 0x888888 });
}

// ---------- rodas com perfil real (pneu + aro) ----------
const WHEEL_CACHE = {};
function wheelParts(r, w) {
  const k = r + '_' + w;
  if (WHEEL_CACHE[k]) return WHEEL_CACHE[k];
  const tp = [[r * 0.6, -w / 2], [r * 0.9, -w / 2], [r * 0.985, -w * 0.4], [r, -w * 0.25], [r, w * 0.25], [r * 0.985, w * 0.4], [r * 0.9, w / 2], [r * 0.6, w / 2]].map(([a, b]) => new THREE.Vector2(a, b));
  const tire = new THREE.LatheGeometry(tp, 22);
  const rp = [[0.001, w * 0.36], [r * 0.18, w * 0.38], [r * 0.24, w * 0.3], [r * 0.5, w * 0.26], [r * 0.6, w * 0.34], [r * 0.6, -w * 0.3]].map(([a, b]) => new THREE.Vector2(a, b));
  const rim = new THREE.LatheGeometry(rp, 22);
  const nut = new THREE.CylinderGeometry(0.03, 0.03, 0.06, 6);
  const rb = new Builder();
  rb.add(rim, mat(0, 0, 0));
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    rb.add(nut, mat(Math.cos(a) * r * 0.32, w * 0.36, Math.sin(a) * r * 0.32));
  }
  return (WHEEL_CACHE[k] = { tire, rim: rb.geometry() });
}

function grouped(parts) {
  const b = new Builder();
  const groups = [];
  for (const [list, mi] of parts) {
    const start = b.idx.length;
    for (const [g, m] of list) b.add(g, m);
    groups.push([start, b.idx.length - start, mi]);
  }
  const geo = b.geometry();
  for (const [s, c, mi] of groups) if (c) geo.addGroup(s, c, mi);
  return geo;
}

// eixo com rodas duplas/simples, aro voltado para fora
function axleMesh(z, track, r, w, dual) {
  const { tire, rim } = wheelParts(r, w);
  const T = [], R = [];
  for (const s of [-1, 1]) {
    const rot = s > 0 ? -Math.PI / 2 : Math.PI / 2;
    if (dual) {
      T.push([tire, mat(s * (track / 2 + w * 0.52), 0, 0, 0, 0, rot)]);
      T.push([tire, mat(s * (track / 2 - w * 0.52), 0, 0, 0, 0, rot)]);
      R.push([rim, mat(s * (track / 2 + w * 0.52), 0, 0, 0, 0, rot)]);
    } else {
      T.push([tire, mat(s * track / 2, 0, 0, 0, 0, rot)]);
      R.push([rim, mat(s * track / 2, 0, 0, 0, 0, rot)]);
    }
  }
  const M = mats();
  const m = new THREE.Mesh(grouped([[T, 0], [R, 1]]), [M.rubber, M.rim]);
  m.position.set(0, r, z);
  m.castShadow = true;
  return m;
}

function steerWheel(z, x, r, w, side) {
  const { tire, rim } = wheelParts(r, w);
  const rot = side > 0 ? -Math.PI / 2 : Math.PI / 2;
  const M = mats();
  const inner = new THREE.Mesh(grouped([[[[tire, mat(0, 0, 0, 0, 0, rot)]], 0], [[[rim, mat(0, 0, 0, 0, 0, rot)]], 1]]), [M.rubber, M.rim]);
  inner.castShadow = true;
  const g = new THREE.Group();
  g.position.set(x, r, z);
  g.add(inner);
  return g;
}

function meshesFrom(builders, target) {
  for (const [b, m] of builders) {
    const mesh = b.mesh(m, { cast: true });
    if (mesh) target.add(mesh);
  }
}

const RBC = {};
function RB(w, h, d, r) {
  const k = [w, h, d, r].join('_');
  return RBC[k] || (RBC[k] = new RoundedBoxGeometry(w, h, d, 2, r));
}
// para-lama em arco (meia casca de cilindro, metade de cima)
const ARC = new THREE.CylinderGeometry(1, 1, 1, 14, 1, true, 0, Math.PI);

// ---------- caminhão ----------
export function buildTruck(def) {
  const M = mats();
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const body = new THREE.Group();
  root.add(body);
  const P = new Builder(), C = new Builder(), D = new Builder(), GL = new Builder(), LI = new Builder(), RE = new Builder(), AM = new Builder(), GR = new Builder(), ST = new Builder(), AL = new Builder();
  const box = (b, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d));
  const rbox = (b, w, h, d, x, y, z, r = 0.1, rx = 0) => b.add(RB(w, h, d, r), mat(x, y, z, rx, 0, 0));
  const cyl = (b, rad, len, x, y, z, rx = 0, ry = 0, rz = 0, seg = 14) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2));
  const arc = (b, rad, wid, x, y, z) => b.add(ARC, mat(x, y, z, 0, 0, Math.PI / 2, rad, wid, rad));

  const rigid = def.rigid, small = def.id === 'urbano', conv = def.cab === 'conventional';
  const wr = small ? 0.42 : 0.53;
  const wb = small ? 3.3 : rigid ? 4.3 : conv ? (def.axles >= 4 ? 5.6 : 5.2) : def.axles >= 4 ? 4.6 : 3.9;
  const cabW = small ? 2.15 : 2.5;
  const y0 = small ? 0.95 : 1.15;
  const ch = small ? 1.75 : 2.05;
  const zf = wb + (small ? 1.25 : conv ? 2.05 : 1.4);
  let cabFront = zf;
  const cabL = small ? 1.9 : 2.25;
  const rearEnd = rigid ? -(small ? 1.4 : 2.0) : -1.45;

  // chassi
  for (const s of [-1, 1]) box(ST, 0.12, 0.3, zf - rearEnd - 0.4, s * 0.45, y0 - 0.28, (zf + rearEnd) / 2 - 0.15);
  for (let z = rearEnd + 0.4; z < wb; z += 1.1) box(ST, 0.9, 0.14, 0.12, 0, y0 - 0.28, z);

  if (conv) {
    // capô longo (bicudo)
    const hoodL = 2.15;
    cabFront = zf - hoodL - 0.1;
    rbox(P, cabW * 0.74, 1.05, hoodL, 0, y0 + 0.5, zf - hoodL / 2 - 0.05, 0.22, 0.03);
    box(C, cabW * 0.66, 1.15, 0.1, 0, y0 + 0.48, zf - 0.04);
    box(GR, cabW * 0.56, 1.0, 0.05, 0, y0 + 0.48, zf + 0.02);
    box(C, 0.3, 0.12, 0.12, 0, y0 + 1.12, zf - 0.1);
    for (const s of [-1, 1]) {
      arc(P, wr + 0.16, 0.6, s * (cabW / 2 - 0.28), wr + 0.02, wb);
      box(P, 0.55, 0.06, 1.6, s * (cabW / 2 - 0.28), wr * 2 + 0.16, wb - 0.4, 0.15);
      rbox(C, 0.5, 0.26, 0.12, s * (cabW / 2 - 0.42), y0 + 0.05, zf - 0.25, 0.05);
      box(LI, 0.4, 0.17, 0.04, s * (cabW / 2 - 0.42), y0 + 0.05, zf - 0.18);
      cyl(C, 0.22, 1.2, s * (cabW / 2 + 0.05), y0 + 1.1, cabFront + 0.1);
      cyl(C, 0.06, 0.6, s * (cabW / 2 + 0.05), y0 + 1.9, cabFront + 0.1);
    }
    rbox(C, cabW + 0.1, 0.4, 0.32, 0, y0 - 0.2, zf + 0.12, 0.06);
  } else {
    box(GR, cabW * 0.66, ch * 0.36, 0.04, 0, y0 + ch * 0.33, zf + 0.01);
    box(C, cabW * 0.7, 0.07, 0.06, 0, y0 + ch * 0.52, zf + 0.02);
    box(C, 0.26, 0.26, 0.04, 0, y0 + ch * 0.42, zf + 0.05, 0, 0, Math.PI / 4);
    rbox(D, cabW + 0.06, 0.42, 0.34, 0, y0 - 0.12, zf + 0.08, 0.08);
    for (const s of [-1, 1]) {
      rbox(C, 0.56, 0.26, 0.1, s * (cabW / 2 - 0.4), y0 + 0.22, zf + 0.02, 0.05);
      box(LI, 0.46, 0.18, 0.04, s * (cabW / 2 - 0.4), y0 + 0.22, zf + 0.07);
      box(AM, 0.14, 0.18, 0.04, s * (cabW / 2 - 0.08), y0 + 0.22, zf + 0.04);
      cyl(LI, 0.07, 0.04, s * (cabW / 2 - 0.35), y0 - 0.14, zf + 0.26, Math.PI / 2, 0, 0, 10);
      arc(D, wr + 0.12, 0.42, s * (cabW / 2 - 0.25), wr, wb);
    }
  }

  // cabine
  const cz = cabFront - cabL / 2;
  rbox(P, cabW, ch, cabL, 0, y0 + ch / 2, cz, 0.14);
  if (def.roof === 'high') rbox(P, cabW - 0.04, 1.0, cabL - 0.2, 0, y0 + ch + 0.42, cz - 0.08, 0.28);
  else if (def.roof === 'mid') rbox(P, cabW - 0.06, 0.42, cabL - 0.3, 0, y0 + ch + 0.16, cz - 0.1, 0.18);
  const sl = conv ? 1.5 : 0.9;
  if (conv || !rigid) {
    const sh = ch + (def.roof === 'high' ? 0.95 : 0.3);
    rbox(P, cabW - 0.02, sh, sl, 0, y0 + sh / 2, cabFront - cabL - sl / 2 + 0.05, 0.16);
  }
  const wsY = y0 + ch * 0.7, wsH = ch * 0.42;
  if (conv) for (const s of [-1, 1]) box(GL, cabW / 2 - 0.22, wsH, 0.05, s * (cabW / 4 - 0.02), wsY, cabFront + 0.01, -0.12);
  else box(GL, cabW - 0.28, wsH, 0.05, 0, wsY, cabFront + 0.01, -0.05);
  rbox(D, cabW - 0.16, 0.14, 0.42, 0, y0 + ch + 0.02, cabFront + 0.1, 0.05, -0.2);
  for (let i = -2; i <= 2; i++) box(AM, 0.13, 0.07, 0.08, i * 0.34, y0 + ch + (def.roof === 'high' ? 0.94 : 0.13), cabFront - 0.15);
  for (const s of [-1, 1]) {
    box(GL, 0.04, ch * 0.36, cabL * 0.4, s * (cabW / 2 + 0.005), wsY + 0.02, cabFront - cabL * 0.3);
    box(GL, 0.04, ch * 0.2, cabL * 0.12, s * (cabW / 2 + 0.005), wsY - 0.05, cabFront - cabL * 0.08);
    box(D, 0.03, ch * 0.85, 0.025, s * (cabW / 2 + 0.006), y0 + ch * 0.45, cabFront - cabL * 0.66);
    box(C, 0.04, 0.05, 0.22, s * (cabW / 2 + 0.02), y0 + ch * 0.5, cabFront - cabL * 0.6);
    for (const k of [0, 1]) box(ST, 0.36, 0.05, 0.5, s * (cabW / 2 - 0.15), 0.5 + k * 0.38, cabFront - cabL * 0.35);
    box(D, 0.08, 0.95, 0.6, s * (cabW / 2 - 0.02), 0.72, cabFront - cabL * 0.35);
    box(C, 0.5, 0.05, 0.05, s * (cabW / 2 + 0.23), y0 + ch * 0.86, cabFront - 0.1);
    box(C, 0.05, 0.75, 0.05, s * (cabW / 2 + 0.47), y0 + ch * 0.62, cabFront - 0.1);
    rbox(D, 0.13, 0.62, 0.3, s * (cabW / 2 + 0.5), y0 + ch * 0.68, cabFront - 0.14, 0.04);
    box(GL, 0.02, 0.52, 0.22, s * (cabW / 2 + 0.43), y0 + ch * 0.68, cabFront - 0.14);
    rbox(D, 0.12, 0.26, 0.22, s * (cabW / 2 + 0.5), y0 + ch * 0.3, cabFront - 0.12, 0.04);
    if (def.roof === 'high' && !rigid) box(P, 0.05, ch + 0.8, 0.55, s * (cabW / 2 - 0.02), y0 + (ch + 0.8) / 2 + 0.1, cabFront - cabL - sl - 0.2);
    box(RE, 0.32, 0.18, 0.05, s * 0.88, y0 - 0.2, rearEnd - 0.02);
    box(LI, 0.12, 0.18, 0.05, s * 0.6, y0 - 0.2, rearEnd - 0.02);
    box(D, 0.62, 0.62, 0.03, s * 1.0, 0.55, def.axles >= 3 && !rigid ? -1.45 : -0.8);
  }
  if (!small) {
    const tz = wb - (conv ? 2.4 : 1.6);
    cyl(AL, 0.34, 1.4, 1.02, 0.86, tz, Math.PI / 2);
    for (const k of [-0.45, 0.45]) cyl(D, 0.355, 0.06, 1.02, 0.86, tz + k, Math.PI / 2);
    box(D, 0.5, 0.5, 0.7, -1.0, 0.85, tz + 0.1);
    cyl(ST, 0.17, 1.1, -0.95, 0.62, tz - 0.9, Math.PI / 2);
  }
  if (!rigid) {
    const ez = cabFront - cabL - sl - 0.25;
    for (const s of conv ? [-1, 1] : [1]) {
      cyl(C, 0.11, 3.0, s * (cabW / 2 - 0.12), y0 + ch + 0.25, ez);
      cyl(C, 0.15, 1.0, s * (cabW / 2 - 0.12), y0 + ch - 0.6, ez);
    }
    box(AL, 1.3, 0.05, 0.55, 0, y0 + 0.05, ez - 0.1);
    for (const [c, x] of [[0xc0392b, -0.18], [0x2e86de, 0.18]]) {
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 16), new THREE.MeshLambertMaterial({ color: c }));
      t.position.set(x, y0 + 0.5, ez - 0.05);
      body.add(t);
    }
    box(ST, 1.35, 0.14, 1.3, 0, y0 - 0.02, 0.3);
    box(AL, 1.2, 0.03, 1.1, 0, y0 + 0.06, 0.3);
    for (const s of [-1, 1]) box(D, 0.7, 0.05, def.axles >= 3 ? 2.7 : 1.4, s * 0.98, wr * 2 + 0.14, 0);
  }

  let hitchZ = 0.3;
  if (rigid) {
    const bz1 = cabFront - cabL - 0.15, bz0 = rearEnd;
    const bh = small ? 2.3 : 2.7, bw = small ? 2.25 : 2.5;
    box(ST, bw, 0.12, bz1 - bz0, 0, y0 + 0.02, (bz0 + bz1) / 2);
    const boxMat = new THREE.MeshLambertMaterial({ map: tex.cargoBox('#' + new THREE.Color(def.color === 0xf2f2f2 ? 0x2f6fde : def.color).getHexString(), 'DRIZZIE') });
    const side = new Builder();
    const yb = y0 + 0.08, yt = y0 + 0.08 + bh;
    side.quad([bw / 2 + 0.01, yb, bz1], [bw / 2 + 0.01, yb, bz0], [bw / 2 + 0.01, yt, bz0], [bw / 2 + 0.01, yt, bz1], [1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1]);
    side.quad([-bw / 2 - 0.01, yb, bz0], [-bw / 2 - 0.01, yb, bz1], [-bw / 2 - 0.01, yt, bz1], [-bw / 2 - 0.01, yt, bz0], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
    body.add(side.mesh(boxMat, { cast: true }));
    const W = new Builder(true);
    W.box(-bw / 2, yb, bz0, bw / 2, yt, bz1, 1, 0xf4f4f4);
    for (const s of [-1, 1]) W.add(G.box(), mat(s * bw / 4, (yb + yt) / 2, bz0 - 0.02, 0, 0, 0, bw / 2 - 0.08, bh - 0.12, 0.02), 0xdcdcdc);
    W.add(G.box(), mat(0, yt + 0.02, (bz0 + bz1) / 2, 0, 0, 0, bw + 0.04, 0.06, bz1 - bz0 + 0.04), 0xd0d3d6);
    body.add(W.mesh(M.flat, { cast: true }));
    for (const s of [-0.3, 0.3]) box(C, 0.04, bh - 0.3, 0.04, s, (yb + yt) / 2, bz0 - 0.04);
    box(D, bw - 0.2, 0.12, 0.1, 0, 0.55, bz0 - 0.05);
    hitchZ = rearEnd;
  }

  const paint = paintMat(def.color);
  meshesFrom([[P, paint], [C, M.chrome], [D, M.dark], [GL, M.glass], [LI, M.light], [RE, M.red], [AM, M.amber], [GR, M.grill], [ST, M.steel], [AL, M.alu]], body);

  const night = new THREE.Group();
  for (const s of [-1, 1]) {
    const g = new THREE.Sprite(M.glow);
    g.scale.set(1.6, 1.6, 1);
    g.position.set(s * (cabW / 2 - 0.42), conv ? y0 + 0.05 : y0 + 0.22, zf + 0.15);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(s * 0.88, y0 - 0.2, rearEnd - 0.12);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(9, 26), M.beam);
  beam.rotation.x = -Math.PI / 2;
  beam.position.set(0, 0.07, zf + 13);
  night.add(beam);
  night.visible = false;
  root.add(night);

  const front = [], rear = [];
  const fx = cabW / 2 - 0.3, fw = small ? 0.26 : 0.32;
  front.push(steerWheel(wb, fx, wr, fw, 1), steerWheel(wb, -fx, wr, fw, -1));
  if (def.axles >= 4) front.push(steerWheel(wb - 1.55, fx, wr, fw, 1), steerWheel(wb - 1.55, -fx, wr, fw, -1));
  for (const f of front) root.add(f);
  for (const z of def.axles >= 3 ? [0.68, -0.68] : [0]) {
    const a = axleMesh(z, small ? 1.45 : 1.75, wr, small ? 0.22 : 0.3, true);
    rear.push(a);
    root.add(a);
  }
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(cabW + 1, zf - rearEnd + 1.5), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (zf + rearEnd) / 2);
  root.add(blob);
  return { root, body, front, rear, wb, wr, hitchZ, zf, rearEnd, paint, blob, cabW, night, y0, cabFront, ch, conv };
}

// ---------- carreta ----------
export function buildTrailer(cargo) {
  const M = mats();
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const P = new Builder(true), D = new Builder(), C = new Builder(true), RE = new Builder(), AM = new Builder(), PN = new Builder(), ST = new Builder();
  const box = (b, w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d), color);
  const cyl = (b, rad, len, x, y, z, rx, ry, rz, color, seg = 18) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2), color);
  const type = cargo.trailer, model = cargo.model;
  const Lt = model === 'blade' ? 20 : type === 'tank' ? 12.5 : type === 'bulk' ? 12 : type === 'lowboy' ? 14.5 : 13.6;
  const front = 1.0, back = -(Lt - front);
  const nAx = type === 'lowboy' ? (cargo.t > 60 ? 5 : 4) : 3;
  const axleSpacing = 1.35;
  const axC = back + 1.6 + ((nAx - 1) * axleSpacing) / 2;
  const deck = 1.35;
  const extra = [];

  for (const s of [-1, 1]) {
    box(ST, 0.14, 0.42, Lt - 0.6, s * 0.48, deck - 0.3, (front + back) / 2);
    box(D, 0.12, 1.0, 0.12, s * 0.9, 0.6, -1.6);
    box(D, 0.32, 0.06, 0.32, s * 0.9, 0.08, -1.6);
    box(D, 0.06, 0.32, 5.5, s * 1.2, deck - 0.45, back + 7.6);
    box(RE, 0.38, 0.16, 0.05, s * 1.0, deck - 0.4, back - 0.03);
    for (let z = front - 1.5; z > back + 1; z -= 3) box(AM, 0.04, 0.08, 0.12, s * 1.28, deck - 0.1, z);
  }
  box(D, 2.4, 0.16, 0.12, 0, deck - 0.75, back - 0.06);
  for (let z = front - 1; z > back + 1; z -= 1.2) box(ST, 0.96, 0.1, 0.1, 0, deck - 0.3, z);

  if (type === 'box') {
    const h = 2.75, y = deck + h / 2;
    PN.add(G.box(), mat(0, y, (front + back) / 2, 0, 0, 0, 2.56, h, Lt));
    const logo = new THREE.MeshLambertMaterial({ map: tex.cargoBox('#d63031', 'DRIZZIE') });
    const sb = new Builder();
    const yb = deck + 0.3, yt = deck + h - 0.25, w = 1.29;
    const z0 = front - 1.5, z1 = back + 1.5;
    sb.quad([w, yb, z0], [w, yb, z1], [w, yt, z1], [w, yt, z0], [1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1]);
    sb.quad([-w, yb, z1], [-w, yb, z0], [-w, yt, z0], [-w, yt, z1], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
    extra.push(sb.mesh(logo, { cast: false }));
    for (const s of [-1, 1]) box(P, 1.22, h - 0.15, 0.04, s * 0.63, y, back - 0.02, 0xe6e8ea);
    for (const x of [-0.95, -0.35, 0.35, 0.95]) box(C, 0.04, h - 0.3, 0.05, x, y, back - 0.06, 0xbfc5ca);
    box(P, 2.56, 0.12, Lt, 0, deck + h + 0.06, (front + back) / 2, 0xd0d3d6);
  } else if (type === 'tank') {
    const col = model === 'silo' ? 0xb8bcc0 : 0xe8ecef;
    cyl(C, 1.25, Lt - 1.2, 0, deck + 1.3, (front + back) / 2, Math.PI / 2, 0, 0, col, 28);
    C.add(G.sphere(), mat(0, deck + 1.3, front - 0.6, 0, 0, 0, 2.5, 2.5, 0.8), col);
    C.add(G.sphere(), mat(0, deck + 1.3, back + 0.6, 0, 0, 0, 2.5, 2.5, 0.8), col);
    for (let z = front - 1.6; z > back + 1; z -= 2.2) cyl(P, 1.27, 0.08, 0, deck + 1.3, z, Math.PI / 2, 0, 0, 0x9aa0a6, 28);
    for (let i = 0; i < 3; i++) cyl(P, 0.3, 0.2, 0, deck + 2.6, front - 3 - i * 3.3, 0, 0, 0, 0x7f8c8d, 12);
    box(P, 0.6, 0.06, Lt - 2.4, 0, deck + 2.62, (front + back) / 2, 0x6d7a84);
    for (const s of [-1, 1]) box(P, 0.03, 0.2, Lt - 2.4, s * 0.3, deck + 2.75, (front + back) / 2, 0xffd400);
    box(P, 0.9, 0.6, 0.03, 1.0, deck + 1.3, back + 0.1, cargo.hazard ? 0xff8c00 : 0x2e86de);
    box(P, 0.5, 2.4, 0.06, 0, deck + 1.3, back + 0.05, 0x7f8c8d);
  } else if (type === 'bulk') {
    const h = 2.1;
    box(P, 2.5, 0.12, Lt, 0, deck + 0.06, (front + back) / 2, 0x2c6e9e);
    for (const s of [-1, 1]) box(P, 0.08, h, Lt, s * 1.21, deck + h / 2, (front + back) / 2, 0x2c6e9e);
    box(P, 2.5, h, 0.08, 0, deck + h / 2, front - 0.04, 0x2c6e9e);
    box(P, 2.5, h, 0.08, 0, deck + h / 2, back + 0.04, 0x2c6e9e);
    for (let i = 0; i < 8; i++) for (const s of [-1, 1]) box(D, 0.06, h, 0.08, s * 1.26, deck + h / 2, front - 1 - i * 1.5);
    P.add(G.sphere(), mat(0, deck + h - 0.15, (front + back) / 2, 0, 0, 0, 2.3, 0.9, Lt - 0.5), 0xc9a45c);
  } else if (type === 'flatbed') {
    box(P, 2.5, 0.22, Lt, 0, deck, (front + back) / 2, 0x6d4c2f);
    box(P, 2.5, 1.2, 0.1, 0, deck + 0.7, front - 0.05, 0x34495e);
    const top = deck + 0.11;
    const straps = (y) => { for (let z = front - 1.8; z > back + 1; z -= 2.6) box(P, 2.56, 0.02, 0.05, 0, y, z, 0xf1c40f); };
    if (model === 'logs') {
      for (let row = 0; row < 3; row++)
        for (let i = 0; i < 4 - row; i++) {
          const x = (i - (3 - row) / 2) * 0.6;
          cyl(P, 0.3, Lt - 1.2, x, top + 0.3 + row * 0.52, (front + back) / 2, Math.PI / 2, 0, 0, row % 2 ? 0x8e5b32 : 0x7a4a26, 10);
          for (const e of [front - 0.6, back + 0.6]) cyl(P, 0.29, 0.02, x, top + 0.3 + row * 0.52, e, Math.PI / 2, 0, 0, 0xd8b07a, 10);
        }
      for (let i = 0; i < 5; i++) for (const s of [-1, 1]) box(D, 0.08, 2.2, 0.08, s * 1.2, top + 1.1, front - 1 - i * 2.8);
    } else if (model === 'container') {
      const ct = new THREE.Mesh(G.box(), new THREE.MeshLambertMaterial({ map: tex.container(0x2471a3) }));
      ct.scale.set(2.44, 2.59, 12.19);
      ct.position.set(0, top + 1.3, (front + back) / 2);
      extra.push(ct);
      straps(top + 2.62);
    } else if (model === 'coils') {
      for (let i = 0; i < 4; i++) {
        cyl(C, 0.85, 1.6, 0, top + 0.86, front - 2 - i * 3.0, 0, 0, Math.PI / 2, 0xbfc5ca, 24);
        cyl(P, 0.3, 1.62, 0, top + 0.86, front - 2 - i * 3.0, 0, 0, Math.PI / 2, 0x222222, 12);
        box(D, 1.6, 0.25, 1.4, 0, top + 0.12, front - 2 - i * 3.0);
        box(P, 0.05, 1.8, 1.7, 0, top + 0.9, front - 2 - i * 3.0, 0xf1c40f);
      }
    } else if (model === 'beams') {
      for (let r = 0; r < 3; r++)
        for (let i = 0; i < 4; i++) {
          const x = (i - 1.5) * 0.58, y = top + 0.22 + r * 0.42, z = (front + back) / 2;
          box(P, 0.5, 0.05, Lt - 0.6, x, y + 0.17, z, 0x5d6d7e);
          box(P, 0.5, 0.05, Lt - 0.6, x, y - 0.17, z, 0x5d6d7e);
          box(P, 0.06, 0.34, Lt - 0.6, x, y, z, 0x4a5a6a);
        }
      straps(top + 1.4);
    }
  } else if (type === 'lowboy') {
    const low = 0.95;
    box(P, 2.6, 0.3, 3.4, 0, deck, front - 1.6, 0xc0392b);
    box(P, 2.9, 0.3, Lt - 5.5, 0, low, (front - 3.4 + back + 2.1) / 2, 0xc0392b);
    box(P, 2.6, 0.3, 2.1, 0, deck - 0.1, back + 1.05, 0xc0392b);
    for (const s of [-1, 1]) box(P, 0.6, 1.6, 0.12, s * 0.8, deck + 0.7, back + 0.2, 0xc0392b, 0.5);
    for (const s of [-1, 1]) box(P, 1.0, 0.6, 0.03, s * 0.7, deck + 0.6, back - 0.1, 0xffffff);
    const y = low + 0.15;
    const mz = (front - 3.4 + back + 2.1) / 2;
    if (model === 'tractor') {
      box(P, 1.3, 1.2, 3.2, 0, y + 1.3, mz + 0.3, 0x2e8b3a);
      box(P, 1.4, 1.5, 1.4, 0, y + 2.3, mz - 0.9, 0x2e8b3a);
      box(P, 1.3, 1.0, 1.3, 0, y + 3.1, mz - 0.9, 0x1c2833);
      for (const s of [-1, 1]) {
        cyl(P, 0.95, 0.6, s * 1.1, y + 0.95, mz - 1.0, 0, 0, Math.PI / 2, 0x222222);
        cyl(P, 0.55, 0.62, s * 1.1, y + 0.95, mz - 1.0, 0, 0, Math.PI / 2, 0xf1c40f);
        cyl(P, 0.55, 0.4, s * 0.95, y + 0.55, mz + 1.5, 0, 0, Math.PI / 2, 0x222222);
      }
    } else if (model === 'excavator') {
      for (const s of [-1, 1]) {
        box(D, 0.7, 0.9, 4.8, s * 1.05, y + 0.45, mz);
        for (let k = 0; k < 5; k++) cyl(P, 0.22, 0.72, s * 1.05, y + 0.25, mz - 1.8 + k * 0.9, 0, 0, Math.PI / 2, 0x555555, 10);
      }
      box(P, 2.6, 1.2, 3.6, 0, y + 1.5, mz - 0.6, 0xf1c40f);
      box(P, 1.0, 1.4, 1.2, -0.7, y + 2.8, mz + 0.4, 0xf1c40f);
      box(P, 0.9, 1.0, 0.04, -0.7, y + 2.9, mz + 1.01, 0x1c2833);
      box(P, 0.5, 0.5, 4.0, 0.5, y + 2.6, mz + 2.4, 0xf1c40f, -0.35);
      box(P, 0.45, 0.45, 2.8, 0.5, y + 2.0, mz + 4.6, 0xf1c40f, 0.9);
      box(D, 1.0, 0.8, 0.8, 0.5, y + 1.0, mz + 5.2);
    } else if (model === 'transformer') {
      box(P, 2.6, 3.0, 4.2, 0, y + 1.5, mz, 0x7f8c8d);
      for (let i = 0; i < 9; i++) for (const s of [-1, 1]) box(P, 0.08, 2.4, 1.0, s * 1.36, y + 1.5, mz - 1.8 + i * 0.45, 0x95a5a6);
      for (let i = 0; i < 3; i++) cyl(P, 0.18, 1.3, (i - 1) * 0.8, y + 3.6, mz + 1, 0, 0, 0, 0x8b4513, 10);
    } else if (model === 'blade') {
      const len = 30;
      P.add(G.sphere(), mat(0, y + 1.6, mz - 2, 0, 0, 0, 2.2, 2.0, len), 0xf4f6f7);
      cyl(P, 1.1, 1.6, 0, y + 1.6, mz + len / 2 - 3.5, Math.PI / 2, 0, 0, 0xe5e8e8, 20);
      box(D, 0.4, 1.4, 0.6, 0, y + 0.7, mz + 2);
      box(D, 0.4, 1.4, 0.6, 0, y + 0.7, mz - 6);
    } else if (model === 'press') {
      box(P, 2.8, 3.6, 4.6, 0, y + 1.8, mz, 0x2e5d8c);
      box(P, 1.8, 1.2, 1.6, 0, y + 4.2, mz, 0x1f4466);
      box(C, 0.25, 3.0, 0.25, 1.2, y + 2, mz + 2.2, 0xbdc3c7);
      box(C, 0.25, 3.0, 0.25, -1.2, y + 2, mz + 2.2, 0xbdc3c7);
    }
    box(P, 2.3, 0.35, 0.03, 0, deck + 0.9, back - 0.06, 0xffc107);
  }

  meshesFrom([[P, M.flat], [D, M.dark], [C, M.flatChrome], [RE, M.red], [AM, M.amber], [PN, M.panel], [ST, M.steel]], root);
  for (const e of extra) if (e) { e.castShadow = true; root.add(e); }
  const axles = [];
  for (let i = 0; i < nAx; i++) {
    const a = axleMesh(back + 1.6 + i * axleSpacing, 1.75, 0.5, 0.28, true);
    axles.push(a);
    root.add(a);
  }
  const night = new THREE.Group();
  for (const s of [-1, 1]) {
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(s * 1.0, deck - 0.4, back - 0.15);
    night.add(rg);
  }
  night.visible = false;
  root.add(night);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(3.4, Lt + 1.5), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (front + back) / 2);
  root.add(blob);
  root.traverse((o) => { if (o.isMesh && o !== blob) o.castShadow = true; });
  return { root, axles, Lk: -axC, Lt, front, back, blob, night };
}

// ---------- física ----------
const tmp = { x: 0, z: 0 };

export class Rig {
  constructor(scene, def, shadows) {
    this.scene = scene;
    this.shadows = shadows;
    this.x = 0; this.z = 0; this.h = 0; this.y = 0; this.pitch = 0; this.tpitch = 0;
    this.v = 0; this.steer = 0; this.acc = 0;
    this.trailer = null; this.th = 0;
    this.cargo = null;
    this.wheelRot = 0;
    this.rpm = 0.2;
    this.collCooldown = 0;
    this.reverse = false;
    this.lastImpact = 0;
    this.lightsOn = false;
    this.engineOn = false;
    this.setTruck(def);
  }

  setTruck(def) {
    if (this.model) this.scene.remove(this.model.root);
    this.def = def;
    this.model = buildTruck(def);
    this.model.blob.visible = !this.shadows;
    this.scene.add(this.model.root);
    this.model.night.visible = this.lightsOn;
    if (this.onModel) this.onModel(this.model);
    if (this.trailer && def.rigid) this.detach();
    this.sync();
  }

  attach(cargo) {
    this.cargo = cargo;
    if (this.def.rigid) return;
    const tr = buildTrailer(cargo);
    tr.blob.visible = !this.shadows;
    tr.night.visible = this.lightsOn;
    this.trailer = tr;
    this.th = this.h;
    this.scene.add(tr.root);
    this.sync();
  }

  setLights(on) {
    this.lightsOn = on;
    this.model.night.visible = on;
    if (this.trailer) this.trailer.night.visible = on;
  }

  detach() {
    if (this.trailer) this.scene.remove(this.trailer.root);
    this.trailer = null;
    this.cargo = null;
  }

  get mass() {
    let t = this.def.mass;
    if (this.cargo) t += this.cargo.t + (this.def.rigid ? 0 : trailerMass(this.cargo));
    return t * 1000;
  }

  get speedKmh() { return Math.abs(this.v) * 3.6; }

  place(x, z, h) {
    this.x = x; this.z = z; this.h = h; this.th = h;
    this.v = 0; this.steer = 0;
    this.sync();
  }

  center(out) {
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    if (this.trailer) {
      const hx = this.x + fx * this.model.hitchZ, hz = this.z + fz * this.model.hitchZ;
      const L = this.trailer.Lt * 0.45;
      out.x = (this.x + fx * this.model.wb * 0.5 + hx - Math.sin(this.th) * L) / 2;
      out.z = (this.z + fz * this.model.wb * 0.5 + hz - Math.cos(this.th) * L) / 2;
    } else {
      out.x = this.x + fx * this.model.wb * 0.4;
      out.z = this.z + fz * this.model.wb * 0.4;
    }
    return out;
  }

  update(dt, inp, world, obstacles) {
    this.world = world;
    const def = this.def;
    const m = this.mass;
    const P = def.hp * 735.5 * 2.3;
    const vmax = def.vmax / 3.6;
    let v = this.v;
    let F = 0;
    const brake = inp.brake, thr = inp.throttle;

    if (inp.gear === 'auto') {
      this.stopT = brake > 0.1 && Math.abs(v) < 0.4 && thr < 0.1 ? (this.stopT || 0) + dt : 0;
      if (this.stopT > 0.3) this.reverse = true;
      if (thr > 0.1 && v > -0.4) this.reverse = false;
    } else this.reverse = inp.gear === 'R';
    const drive = this.engineOn && inp.gear !== 'N';
    const autoRev = inp.gear === 'auto' && this.reverse;

    if (!this.reverse) {
      if (drive && thr > 0 && v >= -0.3) F += thr * Math.min(P / Math.max(v, 3), m * 3.0, def.hp * 250);
      if (brake > 0 && v > 0) F -= brake * m * (6.8 - Math.min(2.2, m / 40000));
      if (brake > 0 && v < 0) F += brake * m * 6;
    } else if (autoRev) {
      if (drive && brake > 0 && v > -4.5) F -= brake * Math.min(P / Math.max(-v, 3), m * 1.6);
      if (thr > 0 && v < 0) F += thr * m * 6;
    } else {
      if (drive && thr > 0 && v > -5) F -= thr * Math.min(P / Math.max(-v, 3), m * 1.6);
      if (brake > 0 && v < 0) F += brake * m * 6.5;
      if (brake > 0 && v > 0) F -= brake * m * 6.5;
    }
    if (inp.handbrake) F -= Math.sign(v) * m * 5;
    // gravidade nos aclives: carga pesada sente a subida
    const grade = Math.sin(this.pitch) * 0.6 + Math.sin(this.trailer ? this.tpitch : this.pitch) * 0.4;
    const Fg = -m * 9.81 * grade;
    const cda = this.trailer ? (this.cargo.trailer === 'box' ? 9 : 7) : def.rigid ? 6.5 : 5;
    const drag = 0.5 * 1.2 * cda * v * Math.abs(v);
    const roll = (0.011 * m * 9.81 + (thr < 0.05 && brake < 0.05 ? m * 0.35 : 0)) * Math.sign(v);
    v += ((F + (Math.abs(v) > 0.2 || thr > 0 ? Fg : 0) - drag) / m) * dt;
    const rollA = roll / m;
    if (Math.abs(rollA * dt) > Math.abs(v) && F === 0) v = 0;
    else v -= rollA * dt;
    const want = !drive ? 0 : !this.reverse ? (thr > 0 ? 1 : 0) : autoRev ? (brake > 0 ? -1 : 0) : (thr > 0 ? -1 : 0);
    if (v !== 0 && Math.sign(v) !== want && Math.sign(v) !== Math.sign(this.v)) v = 0;
    if (inp.handbrake && Math.abs(v) < 0.3) v = 0;
    v = Math.min(v, vmax);
    v = Math.max(v, -5);
    this.acc = (v - this.v) / Math.max(dt, 1e-3);
    this.v = v;
    this.grade = grade;

    const maxSteer = 0.6 / (1 + (v * v) / 160);
    const target = inp.steer * maxSteer;
    const rate = inp.steer === 0 ? 2.6 : 1.7;
    const ds = target - this.steer;
    this.steer += Math.sign(ds) * Math.min(Math.abs(ds), rate * dt);
    const wb = this.model.wb;
    const yaw = (v * Math.tan(this.steer)) / wb;
    this.h += yaw * dt;
    this.yaw = yaw;
    this.x += Math.sin(this.h) * v * dt;
    this.z += Math.cos(this.h) * v * dt;

    if (this.trailer) {
      const hz = this.model.hitchZ;
      const rel = this.h - this.th;
      const dth = (v * Math.sin(rel) - hz * yaw * Math.cos(rel)) / this.trailer.Lk;
      this.th += dth * dt;
      let r = this.h - this.th;
      r = Math.atan2(Math.sin(r), Math.cos(r));
      const lim = 1.3;
      if (Math.abs(r) > lim) this.th = this.h - Math.sign(r) * lim;
    }

    this.collide(world, obstacles, dt);

    this.wheelRot += (v * dt) / this.model.wr;
    const ratio = Math.abs(v) / vmax;
    const gear = Math.min(5, Math.floor(ratio * 6));
    const inGear = ratio * 6 - gear;
    this.gear = this.reverse ? 'R' : inp.gear === 'N' ? 'N' : Math.abs(v) < 0.3 ? (inp.gear === 'auto' ? 'N' : 'D') : String(gear + 1);
    const load = Math.max(thr, grade > 0.02 ? 0.7 : 0);
    const rpmT = !this.engineOn ? 0 : Math.abs(v) < 0.3 || inp.gear === 'N' ? 0.18 + thr * 0.5 : 0.3 + inGear * 0.6 * (0.5 + load * 0.5);
    this.rpm += (rpmT - this.rpm) * Math.min(1, dt * 6);
    this.sync();
  }

  circles(out) {
    const md = this.model;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    out.length = 0;
    for (const s of [md.zf - 0.9, (md.zf + md.rearEnd) / 2, md.rearEnd + 0.9]) out.push({ x: this.x + fx * s, z: this.z + fz * s, r: md.cabW / 2 + 0.1, t: false });
    if (this.trailer) {
      const hx = this.x + fx * md.hitchZ, hz = this.z + fz * md.hitchZ;
      const tx = Math.sin(this.th), tz = Math.cos(this.th);
      const tr = this.trailer;
      for (let s = tr.front - 1.2; s > tr.back + 0.5; s -= 2.4) out.push({ x: hx + tx * s, z: hz + tz * s, r: 1.35, t: true });
      out.push({ x: hx + tx * (tr.back + 1.3), z: hz + tz * (tr.back + 1.3), r: 1.35, t: true });
    }
    return out;
  }

  collide(world, obstacles, dt) {
    this.collCooldown -= dt;
    const cs = this._cs || (this._cs = []);
    this.circles(cs);
    let px = 0, pz = 0, maxPen = 0;
    for (const c of cs) {
      const pen = world.resolveCircle(c, c.r, tmp);
      if (pen > 0.01) {
        px += tmp.x * (c.t ? 0.6 : 1); pz += tmp.z * (c.t ? 0.6 : 1);
        if (pen > maxPen) maxPen = pen;
      }
      for (const o of obstacles) {
        const dx = c.x - o.x, dz = c.z - o.z, rr = c.r + o.r;
        const d2 = dx * dx + dz * dz;
        if (d2 < rr * rr && d2 > 1e-6) {
          const d = Math.sqrt(d2), pen = rr - d;
          px += (dx / d) * pen * 0.5; pz += (dz / d) * pen * 0.5;
          if (pen > maxPen) maxPen = pen;
          o.hit = true;
        }
      }
    }
    this.lastImpact = 0;
    if (maxPen > 0) {
      this.x += px; this.z += pz;
      const sp = Math.abs(this.v) * 3.6;
      if (sp > 4 && maxPen > 0.12 && this.collCooldown <= 0) {
        this.lastImpact = sp;
        this.collCooldown = 0.6;
      }
      this.v *= sp > 15 && maxPen > 0.3 ? -0.12 : maxPen > 0.12 ? 0.6 : 0.97;
    }
  }

  sync() {
    const md = this.model;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const W = this.world;
    let yr = 0, yf = 0;
    if (W) {
      yr = W.heightAt(this.x, this.z);
      yf = W.heightAt(this.x + fx * md.wb, this.z + fz * md.wb);
    }
    this.y = yr;
    this.pitch = Math.atan2(yf - yr, md.wb);
    md.root.position.set(this.x, yr, this.z);
    md.root.rotation.set(-this.pitch, this.h, 0);
    for (let i = 0; i < md.front.length; i++) {
      const w = md.front[i];
      w.rotation.y = this.steer * (i < 2 ? 1 : 0.6);
      w.children[0].rotation.x = this.wheelRot;
    }
    for (const a of md.rear) a.rotation.x = this.wheelRot;
    const lat = (this.yaw || 0) * this.v;
    md.body.rotation.z += (Math.max(-0.05, Math.min(0.05, -lat * 0.012)) - md.body.rotation.z) * 0.2;
    md.body.rotation.x += (Math.max(-0.03, Math.min(0.03, -this.acc * 0.006)) - md.body.rotation.x) * 0.2;
    if (this.trailer) {
      const tr = this.trailer;
      const hx = this.x + fx * md.hitchZ, hz = this.z + fz * md.hitchZ;
      const yh = yr + (yf - yr) * (md.hitchZ / md.wb);
      const ax = hx - Math.sin(this.th) * tr.Lk, az = hz - Math.cos(this.th) * tr.Lk;
      const ya = W ? W.heightAt(ax, az) : 0;
      this.tpitch = Math.atan2(yh - ya, tr.Lk);
      tr.root.position.set(hx, yh, hz);
      tr.root.rotation.set(-this.tpitch, this.th, 0);
      const rot = this.wheelRot * (md.wr / 0.5);
      for (const a of tr.axles) a.rotation.x = rot;
    }
  }
}
