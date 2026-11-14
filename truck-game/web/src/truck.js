// Caminhões e implementos: modelos 3D procedurais + física arcade realista
// (potência x massa, inércia, frenagem, articulação da carreta, colisões).
import * as THREE from 'three';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { trailerMass } from './data.js';

let MATS = null;
function mats() {
  if (MATS) return MATS;
  const atlas = wheelAtlas();
  MATS = {
    chrome: new THREE.MeshPhongMaterial({ color: 0xe6e9ec, map: tex.metal(), shininess: 140, specular: 0xffffff }),
    dark: new THREE.MeshLambertMaterial({ color: 0x23272b }),
    glass: new THREE.MeshPhongMaterial({ color: 0x16222e, shininess: 160, specular: 0xbfd3e6 }),
    light: new THREE.MeshBasicMaterial({ color: 0xfff8e1 }),
    red: new THREE.MeshBasicMaterial({ color: 0xd63031 }),
    amber: new THREE.MeshBasicMaterial({ color: 0xffa21a }),
    wheel: new THREE.MeshLambertMaterial({ map: atlas }),
    flat: new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 40, specular: 0x333333 }),
    grill: new THREE.MeshPhongMaterial({ map: tex.grill(), shininess: 90, specular: 0x999999 }),
    glow: new THREE.SpriteMaterial({ map: tex.glow(), color: 0xfff3d6, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    glowRed: new THREE.SpriteMaterial({ map: tex.glow(), color: 0xff2a1a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
    beam: new THREE.MeshBasicMaterial({ map: tex.beam(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, polygonOffset: true, polygonOffsetFactor: -3 }),
    blob: new THREE.MeshBasicMaterial({ map: tex.blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }),
  };
  return MATS;
}

function wheelAtlas() {
  const c = document.createElement('canvas');
  c.width = 512; c.height = 256;
  const ctx = c.getContext('2d');
  ctx.drawImage(tex.tire().image, 0, 0, 256, 256);
  ctx.drawImage(tex.rim().image, 256, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

let WHEEL_GEO = null;
function wheelGeo() {
  if (WHEEL_GEO) return WHEEL_GEO;
  const g = new THREE.CylinderGeometry(1, 1, 1, 22, 1);
  const uv = g.attributes.uv, pos = g.attributes.position;
  const side = 23 * 2;
  for (let i = 0; i < uv.count; i++) {
    if (i < side) uv.setXY(i, uv.getX(i) * 0.5, uv.getY(i));
    else uv.setXY(i, 0.5 + (pos.getX(i) * 0.5 + 0.5) * 0.5, pos.getZ(i) * 0.5 + 0.5);
  }
  g.rotateZ(Math.PI / 2);
  WHEEL_GEO = g;
  return g;
}

function paintMat(color) {
  return new THREE.MeshPhongMaterial({ color, map: tex.paint(), shininess: 90, specular: 0x888888 });
}

// Cria um eixo (par de rodas mescladas = 1 draw call)
function axle(z, x, r, w) {
  const b = new Builder();
  b.add(wheelGeo(), mat(x, 0, 0, 0, 0, 0, w, r, r));
  b.add(wheelGeo(), mat(-x, 0, 0, 0, 0, 0, w, r, r));
  const m = new THREE.Mesh(b.geometry(), mats().wheel);
  m.position.set(0, r, z);
  m.castShadow = true;
  return m;
}

function single(z, x, r, w) {
  const m = new THREE.Mesh(wheelGeo(), mats().wheel);
  m.scale.set(w, r, r);
  const g = new THREE.Group();
  g.position.set(x, r, z);
  g.add(m);
  m.castShadow = true;
  return g;
}

function meshesFrom(builders, target, cast = true) {
  for (const [b, m] of builders) {
    const mesh = b.mesh(m, { cast });
    if (mesh) target.add(mesh);
  }
}

// ---------- Modelo do caminhão ----------
export function buildTruck(def) {
  const M = mats();
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const P = new Builder(), C = new Builder(), D = new Builder(), GL = new Builder(), LI = new Builder(), RE = new Builder(), AM = new Builder();
  const box = (b, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d));
  const cyl = (b, rad, len, x, y, z, rx = 0, ry = 0, rz = 0, seg = 14) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2));

  const rigid = def.rigid;
  const small = def.id === 'urbano';
  const wb = small ? 3.3 : rigid ? 4.3 : def.axles >= 4 ? 4.6 : 3.9;
  const wr = small ? 0.42 : 0.53;
  const cabW = small ? 2.15 : 2.5;
  const zf = wb + (small ? 1.3 : 1.45);         // frente da cabine
  const cabL = small ? 1.9 : 2.3;
  const y0 = small ? 0.95 : 1.15;               // base da cabine
  const ch = small ? 1.75 : 2.05;               // altura da cabine

  // Chassi
  const rearEnd = rigid ? -(small ? 1.4 : 2.0) : -1.4;
  box(D, 0.95, 0.32, zf - rearEnd - 0.3, 0, y0 - 0.25, (zf + rearEnd) / 2 - 0.1);
  // Cabine
  box(P, cabW, ch, cabL, 0, y0 + ch / 2, zf - cabL / 2);
  if (!small) {
    box(P, cabW - 0.04, 0.75, cabL - 0.35, 0, y0 + ch + 0.36, zf - cabL / 2 - 0.15); // teto alto
    box(P, cabW, 0.18, 0.5, 0, y0 + ch + 0.75, zf - 0.2, -0.25);                  // quebra-sol
  }
  if (!rigid) {
    box(P, cabW - 0.05, ch + 0.6, 1.2, 0, y0 + (ch + 0.6) / 2, zf - cabL - 0.55); // sleeper
    box(P, cabW - 0.2, 0.7, 1.6, 0, y0 + ch + 0.95, zf - cabL - 0.3, 0.18);         // defletor
  }
  // Vidros
  box(GL, cabW - 0.25, ch * 0.42, 0.06, 0, y0 + ch * 0.72, zf + 0.02, -0.08);
  for (const s of [-1, 1]) {
    box(GL, 0.05, ch * 0.38, cabL * 0.42, s * (cabW / 2 + 0.01), y0 + ch * 0.72, zf - cabL * 0.3);
    // espelhos
    box(D, 0.55, 0.06, 0.06, s * (cabW / 2 + 0.25), y0 + ch * 0.75, zf - 0.15);
    box(D, 0.12, 0.55, 0.28, s * (cabW / 2 + 0.52), y0 + ch * 0.7, zf - 0.15);
    // faróis e setas
    box(LI, 0.5, 0.22, 0.05, s * (cabW / 2 - 0.42), y0 + 0.18, zf + 0.03);
    box(AM, 0.18, 0.22, 0.05, s * (cabW / 2 - 0.1), y0 + 0.18, zf + 0.03);
    // degraus / paralamas dianteiros
    box(D, 0.36, 0.12, 1.3, s * (cabW / 2 - 0.25), wr * 2 + 0.08, wb);
    box(P, 0.06, 0.4, cabL * 0.5, s * (cabW / 2 + 0.01), y0 + 0.2, zf - cabL * 0.25);
    // lanternas traseiras
    box(RE, 0.35, 0.18, 0.05, s * 0.9, y0 - 0.15, rearEnd - 0.02);
    // tanque de combustível
    if (!small) cyl(C, 0.33, 1.3, s * 1.05, 0.9, wb - 1.5, Math.PI / 2, 0, 0);
    // escapamentos
    if (!rigid) cyl(C, 0.1, 2.6, s * (cabW / 2 - 0.15), y0 + ch + 0.2, zf - cabL - 1.25);
    // paralamas traseiros
    box(D, 0.7, 0.08, def.axles >= 3 ? 2.6 : 1.4, s * 0.98, wr * 2 + 0.12, def.axles >= 3 ? 0 : 0);
  }
  // Grade e para-choque
  const GR = new Builder();
  box(GR, cabW * 0.62, ch * 0.42, 0.05, 0, y0 + ch * 0.32, zf + 0.03);
  box(C, cabW * 0.66, 0.06, 0.06, 0, y0 + ch * 0.54, zf + 0.05);
  box(C, cabW * 0.66, 0.06, 0.06, 0, y0 + ch * 0.1, zf + 0.05);
  // para-lamas traseiros e lameiros
  for (const s2 of [-1, 1]) box(D, 0.55, 0.6, 0.04, s2 * 0.95, wr + 0.2, (def.axles >= 3 ? -1.45 : -0.75));
  box(C, cabW + 0.08, 0.32, 0.28, 0, y0 - 0.12, zf + 0.12);
  // luzes de teto
  for (let i = -2; i <= 2; i++) box(AM, 0.12, 0.08, 0.08, i * 0.35, y0 + ch + (small ? 0.04 : 0.78), zf - 0.05);
  if (!rigid) box(D, 1.3, 0.14, 1.3, 0, y0 - 0.02, 0.3); // quinta roda

  // Carroceria baú (caminhões rígidos)
  let hitchZ = 0.3;
  if (rigid) {
    const bz1 = zf - cabL - 0.15, bz0 = rearEnd;
    const bh = small ? 2.3 : 2.7, bw = small ? 2.25 : 2.5;
    box(P, bw, 0.08, bz1 - bz0, 0, y0 + 0.02, (bz0 + bz1) / 2);
    const boxMat = new THREE.MeshLambertMaterial({ map: tex.cargoBox('#' + new THREE.Color(def.color === 0xf2f2f2 ? 0x2f6fde : def.color).getHexString(), 'DRIZZIE') });
    const side = new Builder();
    const L = bz1 - bz0, yb = y0 + 0.06, yt = y0 + 0.06 + bh;
    side.quad([bw / 2, yb, bz1], [bw / 2, yb, bz0], [bw / 2, yt, bz0], [bw / 2, yt, bz1], [1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1]);
    side.quad([-bw / 2, yb, bz0], [-bw / 2, yb, bz1], [-bw / 2, yt, bz1], [-bw / 2, yt, bz0], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
    const sm = side.mesh(boxMat, { cast: true });
    body.add(sm);
    const W = new Builder(true);
    W.box(-bw / 2, yb, bz0, bw / 2, yt, bz1, 1, 0xf4f4f4);
    W.quad([bw / 2 - 0.1, yb + 0.1, bz0 - 0.01], [0.02, yb + 0.1, bz0 - 0.01], [0.02, yt - 0.1, bz0 - 0.01], [bw / 2 - 0.1, yt - 0.1, bz0 - 0.01], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], 0xdcdcdc);
    W.quad([-0.02, yb + 0.1, bz0 - 0.01], [-bw / 2 + 0.1, yb + 0.1, bz0 - 0.01], [-bw / 2 + 0.1, yt - 0.1, bz0 - 0.01], [-0.02, yt - 0.1, bz0 - 0.01], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], 0xdcdcdc);
    const wm = W.mesh(M.flat, { cast: true });
    // evita z-fighting entre as laterais com logo e a caixa
    wm.scale.set(0.995, 1, 1);
    body.add(wm);
    hitchZ = rearEnd;
  }

  const paint = paintMat(def.color);
  meshesFrom([[P, paint], [C, M.chrome], [D, M.dark], [GL, M.glass], [LI, M.light], [RE, M.red], [AM, M.amber], [GR, M.grill]], body);

  // Luzes noturnas: brilho dos faróis, lanternas e facho no asfalto
  const night = new THREE.Group();
  for (const s2 of [-1, 1]) {
    const g = new THREE.Sprite(M.glow);
    g.scale.set(1.6, 1.6, 1);
    g.position.set(s2 * (cabW / 2 - 0.42), y0 + 0.18, zf + 0.15);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(s2 * 0.9, y0 - 0.15, rearEnd - 0.12);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(9, 26), M.beam);
  beam.rotation.x = -Math.PI / 2;
  beam.position.set(0, 0.07, zf + 13);
  night.add(beam);
  night.visible = false;
  root.add(night);

  // Rodas
  const front = [];
  const rear = [];
  const fx = cabW / 2 - 0.3;
  front.push(single(wb, fx, wr, 0.32), single(wb, -fx, wr, 0.32));
  if (def.axles >= 4) front.push(single(wb - 1.5, fx, wr, 0.32), single(wb - 1.5, -fx, wr, 0.32));
  for (const f of front) root.add(f);
  const rz = def.axles >= 3 ? [0.68, -0.68] : [0];
  for (const z of rz) {
    const a = axle(z, small ? 0.78 : 0.92, wr, small ? 0.38 : 0.62);
    rear.push(a);
    root.add(a);
  }
  // sombra falsa
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(cabW + 1, zf - rearEnd + 1.5), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (zf + rearEnd) / 2);
  root.add(blob);

  body.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { root, body, front, rear, wb, wr, hitchZ, zf, rearEnd, paint, blob, cabW, night, y0 };
}

// ---------- Modelo do implemento (carreta) ----------
export function buildTrailer(cargo) {
  const M = mats();
  const root = new THREE.Group();
  const P = new Builder(true), D = new Builder(), C = new Builder(), RE = new Builder();
  const box = (b, w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d), color);
  const cyl = (b, rad, len, x, y, z, rx, ry, rz, color, seg = 18) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2), color);
  const type = cargo.trailer;
  const model = cargo.model;
  const long = model === 'blade';
  const Lt = long ? 20 : type === 'tank' ? 12.5 : type === 'bulk' ? 12 : type === 'lowboy' ? 14.5 : 13.6;
  const front = 1.0, back = -(Lt - front);
  const nAx = type === 'lowboy' ? (cargo.t > 60 ? 5 : 4) : 3;
  const axleSpacing = 1.35;
  const axC = back + 1.6 + ((nAx - 1) * axleSpacing) / 2;
  const deck = 1.35;
  const extra = [];

  // chassi e pernas de apoio
  box(D, 1.0, 0.3, Lt - 0.5, 0, deck - 0.3, (front + back) / 2);
  for (const s of [-1, 1]) {
    box(D, 0.12, 1.0, 0.12, s * 0.9, 0.6, -1.6);
    box(D, 0.08, 0.4, 5.5, s * 1.18, deck - 0.45, back + 7.5); // proteção lateral
    box(RE, 0.35, 0.16, 0.05, s * 1.0, deck - 0.35, back - 0.03);
  }
  box(D, 2.4, 0.18, 0.1, 0, deck - 0.65, back - 0.05); // para-choque traseiro

  if (type === 'box') {
    const h = 2.75, y = deck + h / 2;
    box(P, 2.55, h, Lt, 0, y, (front + back) / 2, 0xf6f6f6);
    const logo = new THREE.MeshLambertMaterial({ map: tex.cargoBox('#d63031', 'DRIZZIE') });
    const s = new Builder();
    const yb = deck + 0.05, yt = deck + h - 0.05, w = 1.281;
    s.quad([w, yb, front - 0.1], [w, yb, back + 0.1], [w, yt, back + 0.1], [w, yt, front - 0.1], [1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1]);
    s.quad([-w, yb, back + 0.1], [-w, yb, front - 0.1], [-w, yt, front - 0.1], [-w, yt, back + 0.1], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
    extra.push(s.mesh(logo, { cast: false }));
    box(D, 0.03, h - 0.2, 0.03, 0, y, back - 0.01);
  } else if (type === 'tank') {
    const silo = model === 'silo';
    const col = silo ? 0xb8bcc0 : 0xdfe4e8;
    cyl(C, 1.25, Lt - 1.2, 0, deck + 1.3, (front + back) / 2, Math.PI / 2, 0, 0, col, 24);
    C.add(G.sphere(), mat(0, deck + 1.3, front - 0.6, 0, 0, 0, 2.5, 2.5, 0.8), col);
    C.add(G.sphere(), mat(0, deck + 1.3, back + 0.6, 0, 0, 0, 2.5, 2.5, 0.8), col);
    for (let i = 0; i < 3; i++) box(D, 0.6, 0.15, 0.6, 0, deck + 2.6, front - 3 - i * 3.3);
    box(P, 0.9, 0.6, 0.03, 1.0, deck + 1.3, back + 0.12, cargo.hazard ? 0xff8c00 : 0x2e86de, 0, 0, 0);
    box(P, 0.12, 0.25, Lt - 2, 0, deck + 2.6, (front + back) / 2, 0x7f8c8d);
  } else if (type === 'bulk') {
    const h = 2.1;
    box(P, 2.5, 0.12, Lt, 0, deck + 0.06, (front + back) / 2, 0x2c6e9e);
    for (const s of [-1, 1]) box(P, 0.08, h, Lt, s * 1.21, deck + h / 2, (front + back) / 2, 0x2c6e9e);
    box(P, 2.5, h, 0.08, 0, deck + h / 2, front - 0.04, 0x2c6e9e);
    box(P, 2.5, h, 0.08, 0, deck + h / 2, back + 0.04, 0x2c6e9e);
    for (let i = 0; i < 8; i++) box(D, 0.06, h, 0.06, 1.26, deck + h / 2, front - 1 - i * 1.5);
    P.add(G.sphere(), mat(0, deck + h - 0.15, (front + back) / 2, 0, 0, 0, 2.3, 0.9, Lt - 0.5), 0xc9a45c);
  } else if (type === 'flatbed') {
    box(P, 2.5, 0.22, Lt, 0, deck, (front + back) / 2, 0x6d4c2f);
    const top = deck + 0.11;
    if (model === 'logs') {
      for (let row = 0; row < 3; row++)
        for (let i = 0; i < 4 - row; i++) {
          const x = (i - (3 - row) / 2) * 0.6;
          cyl(P, 0.3, Lt - 1.2, x, top + 0.3 + row * 0.52, (front + back) / 2, Math.PI / 2, 0, 0, row % 2 ? 0x8e5b32 : 0x7a4a26, 10);
        }
      for (let i = 0; i < 5; i++) box(D, 0.08, 2.2, 0.08, 1.2, top + 1.1, front - 1 - i * 2.8), box(D, 0.08, 2.2, 0.08, -1.2, top + 1.1, front - 1 - i * 2.8);
    } else if (model === 'container') {
      const ct = new THREE.Mesh(G.box(), new THREE.MeshLambertMaterial({ map: tex.container(0x2471a3) }));
      ct.scale.set(2.44, 2.59, 12.19);
      ct.position.set(0, top + 1.3, (front + back) / 2);
      extra.push(ct);
    } else if (model === 'coils') {
      for (let i = 0; i < 4; i++) {
        cyl(C, 0.85, 1.6, 0, top + 0.86, front - 2 - i * 3.0, 0, 0, Math.PI / 2, 0xbfc5ca, 22);
        box(D, 1.6, 0.25, 1.4, 0, top + 0.12, front - 2 - i * 3.0);
      }
    } else if (model === 'beams') {
      for (let r = 0; r < 3; r++)
        for (let i = 0; i < 4; i++) {
          const x = (i - 1.5) * 0.58, y = top + 0.22 + r * 0.42, z = (front + back) / 2;
          box(P, 0.5, 0.05, Lt - 0.6, x, y + 0.17, z, 0x5d6d7e);
          box(P, 0.5, 0.05, Lt - 0.6, x, y - 0.17, z, 0x5d6d7e);
          box(P, 0.06, 0.34, Lt - 0.6, x, y, z, 0x4a5a6a);
        }
    }
  } else if (type === 'lowboy') {
    // pescoço de ganso + plataforma rebaixada
    const low = 0.95;
    box(P, 2.6, 0.3, 3.4, 0, deck, front - 1.6, 0x34495e);
    box(P, 2.9, 0.3, Lt - 5.5, 0, low, (front - 3.4 + back + 2.1) / 2, 0x34495e);
    box(P, 2.6, 0.3, 2.1, 0, deck - 0.1, back + 1.05, 0x34495e);
    const y = low + 0.15;
    const mz = (front - 3.4 + back + 2.1) / 2;
    if (model === 'tractor') {
      box(P, 1.3, 1.2, 3.2, 0, y + 1.3, mz + 0.3, 0x2e8b3a);
      box(P, 1.4, 1.5, 1.4, 0, y + 2.3, mz - 0.9, 0x2e8b3a);
      box(D, 1.3, 1.0, 1.3, 0, y + 3.1, mz - 0.9);
      for (const s of [-1, 1]) {
        cyl(D, 0.95, 0.6, s * 1.1, y + 0.95, mz - 1.0, 0, 0, Math.PI / 2, 0x222222);
        cyl(D, 0.55, 0.4, s * 0.95, y + 0.55, mz + 1.5, 0, 0, Math.PI / 2, 0x222222);
      }
    } else if (model === 'excavator') {
      box(D, 0.7, 0.9, 4.8, 1.05, y + 0.45, mz, 0x222);
      box(D, 0.7, 0.9, 4.8, -1.05, y + 0.45, mz, 0x222);
      box(P, 2.6, 1.2, 3.6, 0, y + 1.5, mz - 0.6, 0xf1c40f);
      box(P, 1.0, 1.4, 1.2, -0.7, y + 2.8, mz + 0.4, 0xf1c40f);
      box(P, 0.5, 0.5, 4.0, 0.5, y + 2.6, mz + 2.4, 0xf1c40f, -0.35);
      box(P, 0.45, 0.45, 2.8, 0.5, y + 2.0, mz + 4.6, 0xf1c40f, 0.9);
      box(D, 1.0, 0.8, 0.8, 0.5, y + 1.0, mz + 5.2);
    } else if (model === 'transformer') {
      box(P, 2.6, 3.0, 4.2, 0, y + 1.5, mz, 0x7f8c8d);
      for (let i = 0; i < 9; i++) box(P, 0.08, 2.4, 1.0, 1.36, y + 1.5, mz - 1.8 + i * 0.45, 0x95a5a6), box(P, 0.08, 2.4, 1.0, -1.36, y + 1.5, mz - 1.8 + i * 0.45, 0x95a5a6);
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
    // faixas de carga indivisível
    box(P, 2.3, 0.35, 0.03, 0, deck + 0.9, back - 0.06, 0xffc107);
  }

  meshesFrom([[P, M.flat], [D, M.dark], [C, M.chrome], [RE, M.red]], root);
  for (const e of extra) if (e) { e.castShadow = true; root.add(e); }

  const axles = [];
  for (let i = 0; i < nAx; i++) {
    const a = axle(back + 1.6 + i * axleSpacing, 0.92, 0.5, 0.62);
    axles.push(a);
    root.add(a);
  }
  const night = new THREE.Group();
  for (const s2 of [-1, 1]) {
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(s2 * 1.0, deck - 0.35, back - 0.15);
    night.add(rg);
  }
  night.visible = false;
  root.add(night);
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(3.4, Lt + 1.5), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (front + back) / 2);
  root.add(blob);
  root.traverse((o) => { if (o.isMesh && o !== blob) o.castShadow = true; });
  blob.castShadow = false;
  return { root, axles, Lk: -axC, Lt, front, back, blob, night };
}

// ---------- Física do conjunto ----------
const tmp = { x: 0, z: 0 };
const pt = { x: 0, z: 0 };

export class Rig {
  constructor(scene, def, shadows) {
    this.scene = scene;
    this.shadows = shadows;
    this.x = 0; this.z = 0; this.h = 0;
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

  get speedKmh() {
    return Math.abs(this.v) * 3.6;
  }

  place(x, z, h) {
    this.x = x; this.z = z; this.h = h; this.th = h;
    this.v = 0; this.steer = 0;
    this.sync();
  }

  // Centro aproximado do conjunto (usado para checar a área de entrega)
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
    const def = this.def;
    const m = this.mass;
    const P = def.hp * 735.5 * 2.3;
    const vmax = def.vmax / 3.6;
    let v = this.v;
    let F = 0;
    const brake = inp.brake, thr = inp.throttle;

    // câmbio: D (frente), N (neutro), R (ré). Em modo automático, segurar o freio parado engata a ré.
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
    const cda = this.trailer ? (this.cargo.trailer === 'box' ? 9 : 7) : def.rigid ? 6.5 : 5;
    const drag = 0.5 * 1.2 * cda * v * Math.abs(v);
    const roll = (0.011 * m * 9.81 + (thr < 0.05 && brake < 0.05 ? m * 0.35 : 0)) * Math.sign(v);
    let a = (F - drag) / m;
    const rollA = roll / m;
    v += a * dt;
    // atrito não inverte o sentido
    if (Math.abs(rollA * dt) > Math.abs(v) && F === 0) v = 0;
    else v -= rollA * dt;
    const want = !drive ? 0 : !this.reverse ? (thr > 0 ? 1 : 0) : autoRev ? (brake > 0 ? -1 : 0) : (thr > 0 ? -1 : 0);
    if (v !== 0 && Math.sign(v) !== want && Math.sign(v) !== Math.sign(this.v)) v = 0;
    if (inp.handbrake && Math.abs(v) < 0.3) v = 0;
    v = Math.min(v, vmax);
    v = Math.max(v, -5);
    this.acc = (v - this.v) / Math.max(dt, 1e-3);
    this.v = v;

    // direção (ângulo máximo diminui com a velocidade)
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

    // articulação da carreta
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

    // rotação das rodas e giro do motor
    this.wheelRot += (v * dt) / this.model.wr;
    const ratio = Math.abs(v) / vmax;
    const gear = Math.min(5, Math.floor(ratio * 6));
    const inGear = ratio * 6 - gear;
    this.gear = this.reverse ? 'R' : inp.gear === 'N' ? 'N' : Math.abs(v) < 0.3 ? (inp.gear === 'auto' ? 'N' : 'D') : String(gear + 1);
    const rpmT = !this.engineOn ? 0 : Math.abs(v) < 0.3 || inp.gear === 'N' ? 0.18 + thr * 0.5 : 0.3 + inGear * 0.6 * (0.5 + thr * 0.5);
    this.rpm += (rpmT - this.rpm) * Math.min(1, dt * 6);
    this.sync();
  }

  circles(out) {
    const md = this.model;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const n = 0;
    out.length = 0;
    const steps = [md.zf - 0.9, (md.zf + md.rearEnd) / 2, md.rearEnd + 0.9];
    for (const s of steps) out.push({ x: this.x + fx * s, z: this.z + fz * s, r: md.cabW / 2 + 0.1, t: false });
    if (this.trailer) {
      const hx = this.x + fx * md.hitchZ, hz = this.z + fz * md.hitchZ;
      const tx = Math.sin(this.th), tz = Math.cos(this.th);
      const tr = this.trailer;
      for (let s = tr.front - 1.2; s > tr.back + 0.5; s -= 2.4) out.push({ x: hx + tx * s, z: hz + tz * s, r: 1.35, t: true });
      out.push({ x: hx + tx * (tr.back + 1.3), z: hz + tz * (tr.back + 1.3), r: 1.35, t: true });
    }
    return n;
  }

  collide(world, obstacles, dt) {
    this.collCooldown -= dt;
    const cs = this._cs || (this._cs = []);
    this.circles(cs);
    let px = 0, pz = 0, maxPen = 0, trailerHit = false;
    for (const c of cs) {
      const pen = world.resolveCircle(c, c.r, tmp);
      if (pen > 0.01) {
        px += tmp.x * (c.t ? 0.6 : 1); pz += tmp.z * (c.t ? 0.6 : 1);
        if (pen > maxPen) maxPen = pen;
        if (c.t) trailerHit = true;
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
      if (sp > 4 && this.collCooldown <= 0) {
        this.lastImpact = sp;
        this.collCooldown = 0.6;
      }
      if (trailerHit && Math.abs(this.v) > 1) this.th += (Math.random() - 0.5) * 0.002;
      this.v *= sp > 15 ? -0.12 : 0.6;
    }
  }

  sync() {
    const md = this.model;
    md.root.position.set(this.x, 0, this.z);
    md.root.rotation.y = this.h;
    for (let i = 0; i < md.front.length; i++) {
      const w = md.front[i];
      w.rotation.y = this.steer * (i < 2 ? 1 : 0.6);
      w.children[0].rotation.x = this.wheelRot;
    }
    for (const a of md.rear) a.rotation.x = this.wheelRot;
    // inclinação da cabine
    const lat = (this.yaw || 0) * this.v;
    md.body.rotation.z += (Math.max(-0.05, Math.min(0.05, -lat * 0.012)) - md.body.rotation.z) * 0.2;
    md.body.rotation.x += (Math.max(-0.03, Math.min(0.03, -this.acc * 0.006)) - md.body.rotation.x) * 0.2;
    if (this.trailer) {
      const fx = Math.sin(this.h), fz = Math.cos(this.h);
      const tr = this.trailer;
      tr.root.position.set(this.x + fx * md.hitchZ, 0, this.z + fz * md.hitchZ);
      tr.root.rotation.y = this.th;
      const rot = this.wheelRot * (md.wr / 0.5);
      for (const a of tr.axles) a.rotation.x = rot;
    }
  }
}
