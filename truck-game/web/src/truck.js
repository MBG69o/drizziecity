// Caminhões e implementos realistas (cara-chata e bicudo) + física
// potência x massa, aclives, articulação da carreta e colisões.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { trailerMass } from './data.js';

let QUAL = 'medium';
export const MODELS = {}; // modelos 3D importados (GLB)
export function setTruckQuality(q) { QUAL = q; }

let MATS = null;
function mats() {
  if (MATS) return MATS;
  const pbr = QUAL !== 'low';
  const S = (o) => (pbr ? new THREE.MeshStandardMaterial(o) : new THREE.MeshPhongMaterial({ color: o.color, map: o.map, vertexColors: o.vertexColors, side: o.side, transparent: o.transparent, opacity: o.opacity ?? 1, shininess: o.roughness < 0.3 ? 120 : 20, specular: o.metalness > 0.5 ? 0xffffff : 0x333333 }));
  MATS = {
    chrome: S({ color: 0xf2f4f6, metalness: 1, roughness: 0.14, map: tex.metal() }),
    alu: S({ color: 0xc9cdd1, metalness: 0.9, roughness: 0.3 }),
    dark: S({ color: 0x1f2328, metalness: 0.1, roughness: 0.75, side: THREE.DoubleSide }),
    steel: S({ color: 0x3b4148, metalness: 0.5, roughness: 0.5 }),
    glass: S({ color: 0x0f1a24, metalness: 0.4, roughness: 0.03, transparent: true, opacity: 0.62, side: THREE.DoubleSide }),
    interior: S({ color: 0x2a2d31, metalness: 0, roughness: 0.9 }),
    lamp: pbr ? new THREE.MeshStandardMaterial({ map: tex.headlamp(), emissiveMap: tex.headlamp(), emissive: 0xffffff, emissiveIntensity: 0.15, metalness: 0.6, roughness: 0.15, side: THREE.DoubleSide }) : new THREE.MeshBasicMaterial({ map: tex.headlamp(), side: THREE.DoubleSide }),
    tail: new THREE.MeshBasicMaterial({ map: tex.taillamp(), side: THREE.DoubleSide }),
    lampFlat: pbr ? new THREE.MeshStandardMaterial({ color: 0xf4f6f8, emissive: 0xfff3d6, emissiveIntensity: 0.15, metalness: 0.5, roughness: 0.1 }) : new THREE.MeshBasicMaterial({ color: 0xf4f6f8 }),
    blink: new THREE.SpriteMaterial({ map: tex.glow(), color: 0xffa21a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }),
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

// perfil lateral (z,y) extrudado na largura (x) com bordas arredondadas
function extrude(draw, width, bevel = 0.06, segs = 3) {
  const sh = new THREE.Shape();
  draw(sh);
  const depth = Math.max(0.01, width - 2 * bevel);
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: segs, curveSegments: 10 });
  g.rotateY(-Math.PI / 2);
  g.translate(depth / 2, 0, 0);
  // UV pelo envelope (poeira de baixo para cima em toda a peça)
  g.computeBoundingBox();
  const bb = g.boundingBox, p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) uv.setXY(i, (p.getZ(i) - bb.min.z) / (bb.max.z - bb.min.z || 1), (p.getY(i) - bb.min.y) / (bb.max.y - bb.min.y || 1));
  return g;
}

// quadrilátero nos dois lados da cabine (janelas, decalques)
function sides(b, pts, xs, uvs = [0, 0, 1, 0, 1, 1, 0, 1]) {
  for (const s of [-1, 1]) {
    const P = pts.map(([z, y]) => [s * xs, y, z]);
    b.quad(P[0], P[1], P[2], P[3], [s, 0, 0], s > 0 ? uvs : [uvs[2], uvs[3], uvs[0], uvs[1], uvs[6], uvs[7], uvs[4], uvs[5]]);
  }
}

// quadrilátero inclinado (para-brisa) entre dois pontos do perfil
function slantQuad(b, za, ya, zb, yb, w, off, x0 = 0) {
  const dz = zb - za, dy = yb - ya, l = Math.hypot(dz, dy);
  const nz = dy / l, ny = -dz / l;
  const A = [za + nz * off, ya + ny * off], B = [zb + nz * off, yb + ny * off];
  b.quad([x0 - w / 2, A[1], A[0]], [x0 + w / 2, A[1], A[0]], [x0 + w / 2, B[1], B[0]], [x0 - w / 2, B[1], B[0]], [0, ny, nz], [0, 0, 1, 0, 1, 1, 0, 1]);
}

// ---------- caminhão a partir de modelo 3D importado ----------
const MODEL_CFG = {
  // vidros (para-brisa e laterais) e caçamba, em coordenadas do modelo
  canter: { glass: { ws: [5.1, 1.73, 4.76, 2.2, 1.76], side: [[4.3, 1.5], [5.08, 1.5], [4.8, 2.12], [4.3, 2.12]], sideX: 0.965 }, lampY: 0.78, blinkY: 0.62 },
  labo: { lampY: 0.78, blinkY: 0.62, bed: { z0: -0.62, z1: 1.18, y: 0.66, w: 1.3 } },
  volvo: { lampY: 0.85, blinkY: 0.75, tractor: true },
};

// metadados do modelo (podem vir como texto JSON no glTF)
function modelMeta(src) {
  let meta = {};
  src.traverse((o) => {
    const u = o.userData || {};
    if (u.meta) { try { meta = { ...JSON.parse(u.meta), ...meta }; } catch (e) { /* */ } }
    else if (u.wb && !meta.wb) meta = { ...u, ...meta };
  });
  return meta;
}

function buildFromModel(def, src) {
  const M = mats();
  const meta = modelMeta(src);
  const cfg = MODEL_CFG[def.model] || {};
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const body = new THREE.Group();
  root.add(body);
  const paint = QUAL === 'low' ? new THREE.MeshPhongMaterial({ color: def.color, shininess: 90, specular: 0x888888 })
    : QUAL === 'high' ? new THREE.MeshPhysicalMaterial({ color: def.color, metalness: 0.3, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08 })
      : new THREE.MeshStandardMaterial({ color: def.color, metalness: 0.3, roughness: 0.33 });
  M.boxWhite = M.boxWhite || (QUAL === 'low' ? new THREE.MeshPhongMaterial({ color: 0xeef0f2, shininess: 40 }) : new THREE.MeshStandardMaterial({ color: 0xeef0f2, metalness: 0.25, roughness: 0.45 }));
  M.tireFlat = M.tireFlat || new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.92 });
  const byRole = { paint, box: M.boxWhite, glass: M.glass, interior: M.interior, steel: M.steel, dark: M.dark, rubber: M.tireFlat, chrome: M.chrome, lamp: M.lampFlat, red: M.red, amber: M.amber };
  // modelos importados podem ter faces invertidas: materiais dupla face
  const ds = {};
  const two = (m) => { if (!m) return m; if (m.side === THREE.DoubleSide) return m; return ds[m.uuid] || (ds[m.uuid] = Object.assign(m.clone(), { side: THREE.DoubleSide })); };
  src.updateMatrixWorld(true);
  const bbox = new THREE.Box3();
  src.traverse((o) => {
    if (!o.isMesh) return;
    const m = new THREE.Mesh(o.geometry, two(byRole[o.material && o.material.name] || byRole[o.name] || M.steel));
    m.matrixAutoUpdate = false;
    m.matrix.copy(o.matrixWorld); // inclui a desquantização do arquivo comprimido
    m.castShadow = true;
    body.add(m);
    bbox.expandByObject(o);
  });
  const zf = bbox.max.z, rearEnd = bbox.min.z, W = bbox.max.x - bbox.min.x, W2 = W / 2;
  // vidros que faltam no modelo
  if (cfg.glass) {
    const G2 = new Builder();
    const [za, ya, zb, yb, w] = cfg.glass.ws;
    slantQuad(G2, za, ya, zb, yb, w, 0.0);
    sides(G2, cfg.glass.side, cfg.glass.sideX);
    body.add(G2.mesh(M.glass, { cast: false }));
  }
  // carga na caçamba (aparece quando carregado)
  let bedCargo = null;
  if (cfg.bed) {
    const b = cfg.bed, cb = new Builder(true);
    const cols = [0xc49a6c, 0xb88a58, 0xd2ab7c];
    let i = 0;
    for (let z = b.z0 + 0.3; z < b.z1 - 0.25; z += 0.55)
      for (let x = -b.w / 2 + 0.3; x < b.w / 2 - 0.25; x += 0.6) {
        const h = 0.35 + ((i * 7) % 3) * 0.12;
        cb.add(G.box(), mat(x, b.y + h / 2, z, 0, ((i * 13) % 5) * 0.04, 0, 0.52, h, 0.48), cols[i++ % 3]);
      }
    bedCargo = cb.mesh(new THREE.MeshLambertMaterial({ vertexColors: true }), { cast: true });
    bedCargo.visible = false;
    body.add(bedCargo);
  }
  // rodas do jogo nas posições exatas do modelo
  const wheels = meta.wheels || [];
  const front = [], rear = [];
  for (const wd of wheels.filter((w) => w.tag[0] === 'F')) {
    const g = steerWheel(wd.z, wd.x, wd.r, Math.max(0.16, wd.w), wd.x > 0 ? 1 : -1);
    g.position.y = wd.r;
    front.push(g);
    root.add(g);
  }
  const rl = wheels.filter((w) => w.tag[0] === 'R');
  const rz = [];
  for (const w of rl) if (!rz.some((z) => Math.abs(z - w.z) < 0.3)) rz.push(w.z);
  for (const z of rz) {
    const w = rl.find((q) => Math.abs(q.z - z) < 0.3);
    const track = rl.filter((q) => Math.abs(q.z - z) < 0.3).reduce((s, q) => s + Math.abs(q.x), 0) / rl.filter((q) => Math.abs(q.z - z) < 0.3).length * 2;
    const dual = w.w > 0.3;
    const a = axleMesh(z, track, w.r, dual ? w.w / 2.1 : Math.max(0.16, w.w), dual);
    rear.push(a);
    root.add(a);
  }
  const wr = meta.wr || 0.4, wb = meta.wb || 3;
  // luzes
  const night = new THREE.Group();
  const ly = cfg.lampY || 0.8;
  for (const sd of [-1, 1]) {
    const g = new THREE.Sprite(M.glow);
    g.scale.set(1.4, 1.4, 1);
    g.position.set(sd * (W2 - 0.3), ly, zf + 0.1);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.8, 0.8, 1);
    rg.position.set(sd * (W2 - 0.2), ly, rearEnd - 0.08);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(8, 24), M.beam);
  beam.rotation.set(-Math.PI / 2, 0, Math.PI);
  beam.position.set(0, 0.07, zf + 12.5);
  night.add(beam);
  night.visible = false;
  root.add(night);
  const blinkL = [], blinkR = [];
  for (const sd of [-1, 1])
    for (const [y, z] of [[cfg.blinkY || 0.6, zf + 0.08], [cfg.blinkY || 0.6, rearEnd - 0.08]]) {
      const sp = new THREE.Sprite(M.blink);
      sp.scale.set(0.7, 0.7, 1);
      sp.position.set(sd * (W2 - 0.08), y, z);
      sp.visible = false;
      root.add(sp);
      (sd > 0 ? blinkL : blinkR).push(sp);
    }
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(W + 0.8, zf - rearEnd + 1.2), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (zf + rearEnd) / 2);
  root.add(blob);
  return { root, body, front, rear, wb, wr, hitchZ: cfg.tractor ? (meta.hitchZ ?? 0.1) : rearEnd, zf, rearEnd, paint, blob, cabW: Math.min(W, 2.6), night, y0: 1.0, cabFront: zf, ch: meta.height || 2, conv: false, blinkL, blinkR, bedCargo };
}

// ---------- caminhão ----------
export function buildTruck(def) {
  if (def.model && MODELS[def.model]) return buildFromModel(def, MODELS[def.model]);
  const M = mats();
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const body = new THREE.Group();
  root.add(body);
  const P = new Builder(), C = new Builder(), D = new Builder(), GL = new Builder(), LI = new Builder(), RE = new Builder(), AM = new Builder(), GR = new Builder(), ST = new Builder(), AL = new Builder(), LP = new Builder(), TL = new Builder(), DC = new Builder(), IN = new Builder();
  const box = (b, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d));
  const rbox = (b, w, h, d, x, y, z, r = 0.1, rx = 0) => b.add(RB(w, h, d, r), mat(x, y, z, rx, 0, 0));
  const cyl = (b, rad, len, x, y, z, rx = 0, ry = 0, rz = 0, seg = 14) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2));
  const ex = (b, geo, x = 0) => b.add(geo, mat(x, 0, 0));

  const rigid = def.rigid, small = def.id === 'urbano', conv = def.cab === 'conventional';
  const hi = def.roof === 'high', mid = def.roof === 'mid';
  const wr = small ? 0.42 : 0.53;
  const wb = small ? 3.3 : rigid ? 4.3 : conv ? (def.axles >= 4 ? 5.9 : 5.6) : def.axles >= 4 ? 4.6 : 3.9;
  const cabW = small ? 2.15 : 2.5;
  const H = small ? 0.95 : 1.15;          // piso da cabine
  const k = small ? 0.86 : 1;             // escala vertical
  const Y = (v) => H + v * k;
  const zf = wb + (small ? 1.25 : conv ? 1.6 : 1.4);
  const rearEnd = rigid ? -(small ? 1.4 : 2.0) : -1.45;
  const W2 = cabW / 2;
  let cf, cabBack; // frente da cabine (para-brisa) e traseira

  // chassi
  for (const s of [-1, 1]) box(ST, 0.12, 0.3, zf - rearEnd - 0.4, s * 0.45, H - 0.28, (zf + rearEnd) / 2 - 0.15);
  for (let z = rearEnd + 0.4; z < wb; z += 1.1) box(ST, 0.9, 0.14, 0.12, 0, H - 0.28, z);

  if (!conv) {
    // ===== cara-chata (cab-over) =====
    const f = zf, L = small ? 1.75 : rigid ? 1.95 : 2.3, b = f - L;
    cf = f; cabBack = b;
    const roofY = hi ? Y(3.0) : mid ? Y(2.55) : Y(2.14);
    ex(P, extrude((s) => {
      s.moveTo(b, H);
      s.lineTo(f - 0.18, H);
      s.quadraticCurveTo(f - 0.02, H, f - 0.02, Y(0.2));
      s.lineTo(f - 0.06, Y(1.0));
      s.lineTo(f - 0.12, Y(1.08));
      s.lineTo(f - 0.4, Y(2.0));
      s.quadraticCurveTo(f - 0.47, Y(2.14), f - 0.7, Y(2.15));
      if (hi || mid) {
        s.quadraticCurveTo(f - 0.95, Y(2.17), f - 1.05, hi ? Y(2.55) : Y(2.35));
        s.quadraticCurveTo(f - 1.15, roofY, f - 1.5, roofY);
      }
      s.lineTo(b + 0.16, roofY);
      s.quadraticCurveTo(b, roofY, b, roofY - 0.16);
      s.lineTo(b, H);
    }, cabW, 0.07));
    // para-brisa, palhetas e quebra-sol
    slantQuad(GL, f - 0.12, Y(1.1), f - 0.4, Y(1.98), cabW - 0.34, 0.075);
    for (const x of [-0.45, 0.35]) box(D, 0.7, 0.03, 0.03, x, Y(1.15), f - 0.04, 0, 0, 0.25);
    ex(P, extrude((s) => { s.moveTo(f - 0.42, Y(2.06)); s.lineTo(f + 0.04, Y(2.0)); s.lineTo(f + 0.04, Y(1.95)); s.lineTo(f - 0.42, Y(2.0)); }, cabW - 0.12, 0.015, 1));
    for (let i = -2; i <= 2; i++) box(AM, 0.13, 0.06, 0.08, i * 0.34, Y(2.06), f - 0.12);
    // grade com frisos e emblema
    box(GR, cabW * 0.68, 0.55 * k, 0.03, 0, Y(0.62), f + 0.03, -0.05);
    for (const y of [0.42, 0.62, 0.82]) box(C, cabW * 0.7, 0.035, 0.035, 0, Y(y), f + 0.05);
    box(C, 0.24, 0.24, 0.04, 0, Y(0.98), f + 0.02, 0, 0, Math.PI / 4);
    // para-choque esculpido, faróis, piscas e neblina
    ex(D, extrude((s) => {
      s.moveTo(f - 0.35, H - 0.55); s.lineTo(f + 0.05, H - 0.55);
      s.quadraticCurveTo(f + 0.17, H - 0.55, f + 0.17, H - 0.4);
      s.lineTo(f + 0.13, H + 0.12); s.lineTo(f - 0.35, H + 0.12);
    }, cabW + 0.04, 0.05));
    for (const sd of [-1, 1]) {
      LP.quad([sd * (W2 - 0.12) - (sd > 0 ? 0.62 : 0), H - 0.2, f + 0.235], [sd * (W2 - 0.12) + (sd > 0 ? 0 : 0.62), H - 0.2, f + 0.235], [sd * (W2 - 0.12) + (sd > 0 ? 0 : 0.62), H + 0.06, f + 0.2], [sd * (W2 - 0.12) - (sd > 0 ? 0.62 : 0), H + 0.06, f + 0.2], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1]);
      cyl(LI, 0.075, 0.04, sd * (W2 - 0.4), H - 0.42, f + 0.235, Math.PI / 2, 0, 0, 12);
      // para-lama dianteiro
      D.add(ARC, mat(sd * (W2 - 0.25), wr, wb, 0, 0, Math.PI / 2, wr + 0.12, 0.44, wr + 0.12));
      // degraus atrás da roda
      for (const kk of [0, 1]) box(ST, 0.4, 0.05, 0.42, sd * (W2 - 0.2), 0.48 + kk * 0.36, wb - 0.72);
      box(D, 0.06, 0.95, 0.5, sd * (W2 - 0.01), 0.7, wb - 0.72);
    }
    // portas: frisos, maçaneta, janelas
    for (const sd of [-1, 1]) {
      const x = sd * (W2 + 0.072);
      box(D, 0.02, Y(1.95) - Y(0.15), 0.025, x, (Y(1.95) + Y(0.15)) / 2, f - 1.32);
      box(D, 0.02, Y(1.0) - Y(0.15), 0.025, x, (Y(1.0) + Y(0.15)) / 2, f - 0.22);
      box(D, 0.02, 0.025, 1.1, x, Y(0.15), f - 0.77);
      box(C, 0.04, 0.05, 0.2, sd * (W2 + 0.09), Y(1.02), f - 1.18);
      box(C, 0.02, 0.03, 1.15, sd * (W2 + 0.078), Y(1.16), f - 0.78);
      // retrovisores (braço + carcaça + lente)
      box(C, 0.42, 0.04, 0.04, sd * (W2 + 0.24), Y(1.96), f - 0.3, 0, sd * -0.3, 0);
      box(C, 0.04, 0.5, 0.04, sd * (W2 + 0.44), Y(1.72), f - 0.18);
      rbox(D, 0.15, 0.64, 0.32, sd * (W2 + 0.5), Y(1.6), f - 0.14, 0.05);
      box(GL, 0.02, 0.54, 0.24, sd * (W2 + 0.425), Y(1.6), f - 0.14);
      rbox(D, 0.13, 0.26, 0.22, sd * (W2 + 0.48), Y(1.12), f - 0.12, 0.05);
    }
    sides(GL, [[f - 0.17, Y(1.18)], [f - 1.25, Y(1.18)], [f - 1.25, Y(1.92)], [f - 0.41, Y(1.92)]], W2 + 0.075);
    if (hi) sides(GL, [[b + 0.35, Y(2.25)], [b + 0.15, Y(2.25)], [b + 0.15, Y(2.7)], [b + 0.35, Y(2.7)]], W2 + 0.075);
    sides(DC, [[f - 0.15, Y(0.2)], [b + 0.05, Y(0.2)], [b + 0.05, Y(1.05)], [f - 0.15, Y(1.05)]], W2 + 0.08);
    // saias laterais aerodinâmicas (cavalos de teto alto)
    if (hi && !rigid) for (const sd of [-1, 1]) box(P, 0.05, 0.62, wb - 0.95 - 1.2, sd * (W2 - 0.04), 0.78, (wb - 0.95 + 1.2) / 2);
    // interior: painel, volante, bancos
    box(IN, cabW - 0.3, 0.3, 0.55, 0, Y(1.0), f - 0.45);
    const sw = new THREE.TorusGeometry(0.21, 0.025, 6, 18);
    IN.add(sw, mat(0.55, Y(1.18), f - 0.72, 0.55, 0, 0));
    for (const sd of [-1, 1]) { box(IN, 0.55, 0.15, 0.55, sd * 0.55, Y(0.55), f - 1.25); box(IN, 0.55, 0.75, 0.12, sd * 0.55, Y(0.95), f - 1.55, -0.15); }
  } else {
    // ===== bicudo (capô longo) =====
    const hf = zf, hoodL = 2.05, hb = hf - hoodL, hoodW = cabW * 0.64;
    cf = hb;
    const sleeperL = hi ? 1.9 : 1.2;
    cabBack = cf - 1.8 - sleeperL;
    ex(P, extrude((s) => {
      s.moveTo(hb, H - 0.15); s.lineTo(hf - 0.1, H - 0.15); s.lineTo(hf, H - 0.05);
      s.lineTo(hf, Y(1.0));
      s.quadraticCurveTo(hf, Y(1.18), hf - 0.28, Y(1.21));
      s.lineTo(hb, Y(1.36)); s.lineTo(hb, H - 0.15);
    }, hoodW, 0.12));
    // grade alta cromada, enfeite do capô
    rbox(C, hoodW * 0.9, 1.12 * k, 0.12, 0, Y(0.48), hf + 0.15, 0.04);
    box(GR, hoodW * 0.76, 1.0 * k, 0.03, 0, Y(0.48), hf + 0.22);
    box(C, 0.08, 0.12, 0.28, 0, Y(1.27), hf - 0.15);
    // para-lamas envolventes
    const R = wr + 0.14;
    for (const sd of [-1, 1]) {
      ex(P, extrude((s) => {
        s.moveTo(wb + R * Math.cos(-0.35), wr + R * Math.sin(-0.35));
        s.absarc(wb, wr, R, -0.35, Math.PI, false);
        s.lineTo(wb - R - 0.55, wr + 0.02);
        s.lineTo(wb - R - 0.55, wr - 0.06);
        s.lineTo(wb - R + 0.08, wr - 0.06);
        s.absarc(wb, wr, R - 0.08, Math.PI, -0.35, true);
      }, 0.62, 0.03, 2), sd * (W2 - 0.31));
      // faróis na frente do para-lama
      LP.quad([sd * (W2 - 0.31) - 0.24, wr + 0.32, wb + R + 0.02], [sd * (W2 - 0.31) + 0.24, wr + 0.32, wb + R + 0.02], [sd * (W2 - 0.31) + 0.24, wr + 0.56, wb + R - 0.03], [sd * (W2 - 0.31) - 0.24, wr + 0.56, wb + R - 0.03], [0, 0.2, 1], [0, 0, 1, 0, 1, 1, 0, 1]);
      // filtros de ar e degraus
      cyl(C, 0.2, 1.1, sd * (W2 + 0.02), Y(0.95), cf + 0.15);
      cyl(C, 0.06, 0.55, sd * (W2 + 0.02), Y(1.7), cf + 0.15);
      for (const kk of [0, 1]) box(ST, 0.42, 0.05, 0.6, sd * (W2 - 0.2), 0.48 + kk * 0.36, cf - 0.55);
      box(D, 0.06, 0.95, 0.65, sd * (W2 - 0.01), 0.72, cf - 0.55);
    }
    // para-choque cromado
    ex(C, extrude((s) => {
      s.moveTo(hf - 0.05, H - 0.62); s.lineTo(hf + 0.3, H - 0.62);
      s.quadraticCurveTo(hf + 0.38, H - 0.6, hf + 0.38, H - 0.42);
      s.lineTo(hf + 0.34, H - 0.14); s.lineTo(hf - 0.05, H - 0.14);
    }, cabW + 0.1, 0.05));
    // cabine
    ex(P, extrude((s) => {
      s.moveTo(cf - 1.8, H); s.lineTo(cf - 0.05, H); s.lineTo(cf, Y(0.3)); s.lineTo(cf, Y(1.36));
      s.lineTo(cf - 0.3, Y(2.1));
      s.quadraticCurveTo(cf - 0.4, Y(2.24), cf - 0.62, Y(2.25));
      s.lineTo(cf - 1.65, Y(2.25)); s.quadraticCurveTo(cf - 1.8, Y(2.25), cf - 1.8, Y(2.1)); s.lineTo(cf - 1.8, H);
    }, cabW, 0.07));
    // dormitório com defletor
    const top = hi ? Y(3.05) : Y(2.4);
    ex(P, extrude((s) => {
      s.moveTo(cabBack, H); s.lineTo(cf - 1.76, H); s.lineTo(cf - 1.76, Y(2.2));
      s.quadraticCurveTo(cf - 1.95, top, cf - 2.6, top);
      s.lineTo(cabBack + 0.15, top); s.quadraticCurveTo(cabBack, top, cabBack, top - 0.15); s.lineTo(cabBack, H);
    }, cabW - 0.04, 0.07));
    for (const sd of [-1, 1]) slantQuad(GL, cf, Y(1.38), cf - 0.3, Y(2.08), cabW / 2 - 0.24, 0.075, sd * (cabW / 4 - 0.04));
    for (const x of [-0.6, 0.6]) box(D, 0.6, 0.03, 0.03, x, Y(1.42), cf + 0.06, 0, 0, 0.2);
    rbox(P, cabW - 0.1, 0.12, 0.45, 0, Y(2.2), cf + 0.08, 0.04, -0.25);
    for (let i = -2; i <= 2; i++) box(AM, 0.13, 0.06, 0.08, i * 0.34, Y(2.3), cf - 0.1);
    for (const sd of [-1, 1]) {
      const x = sd * (W2 + 0.072);
      box(D, 0.02, Y(2.0) - Y(0.15), 0.025, x, (Y(2.0) + Y(0.15)) / 2, cf - 1.2);
      box(D, 0.02, 0.025, 1.1, x, Y(0.15), cf - 0.65);
      box(C, 0.04, 0.05, 0.2, sd * (W2 + 0.09), Y(1.1), cf - 1.05);
      box(C, 0.4, 0.04, 0.04, sd * (W2 + 0.22), Y(2.0), cf - 0.25, 0, sd * -0.3, 0);
      box(C, 0.04, 0.55, 0.04, sd * (W2 + 0.42), Y(1.75), cf - 0.12);
      rbox(C, 0.15, 0.7, 0.3, sd * (W2 + 0.48), Y(1.6), cf - 0.1, 0.05);
      box(GL, 0.02, 0.6, 0.22, sd * (W2 + 0.4), Y(1.6), cf - 0.1);
      cyl(C, 0.11, 3.0, sd * (W2 - 0.12), Y(2.4), cabBack - 0.22);
      cyl(C, 0.15, 1.0, sd * (W2 - 0.12), Y(1.6), cabBack - 0.22);
    }
    sides(GL, [[cf - 0.07, Y(1.44)], [cf - 1.12, Y(1.44)], [cf - 1.12, Y(2.06)], [cf - 0.32, Y(2.06)]], W2 + 0.075);
    sides(GL, [[cf - 2.3, Y(1.4)], [cf - 2.7, Y(1.4)], [cf - 2.7, Y(1.75)], [cf - 2.3, Y(1.75)]], W2 + 0.055);
    sides(DC, [[cf - 0.05, Y(0.3)], [cabBack + 0.1, Y(0.3)], [cabBack + 0.1, Y(1.15)], [cf - 0.05, Y(1.15)]], W2 + 0.08);
    box(IN, cabW - 0.3, 0.3, 0.5, 0, Y(1.25), cf - 0.35);
    IN.add(new THREE.TorusGeometry(0.22, 0.025, 6, 18), mat(0.55, Y(1.42), cf - 0.65, 0.6, 0, 0));
    for (const sd of [-1, 1]) { box(IN, 0.55, 0.15, 0.55, sd * 0.55, Y(0.7), cf - 1.1); box(IN, 0.55, 0.8, 0.12, sd * 0.55, Y(1.1), cf - 1.4, -0.15); }
  }

  // tanques, escapamento (cara-chata), passarela e quinta roda
  if (!small) {
    const tz = conv ? cf - 1.4 : wb - 1.6;
    cyl(AL, 0.34, 1.4, 1.02, 0.86, tz, Math.PI / 2, 0, 0, 20);
    for (const kk of [-0.45, 0.45]) cyl(D, 0.355, 0.06, 1.02, 0.86, tz + kk, Math.PI / 2, 0, 0, 20);
    box(D, 0.5, 0.5, 0.7, -1.0, 0.85, tz + 0.1);
    cyl(ST, 0.17, 1.1, -0.95, 0.62, tz - 0.9, Math.PI / 2);
  }
  if (!rigid) {
    const ez = cabBack - 0.25;
    if (!conv) {
      cyl(C, 0.11, 2.6, W2 - 0.14, Y(2.0) + (hi ? 0.4 : 0), ez);
      cyl(C, 0.15, 0.9, W2 - 0.14, Y(1.2), ez);
    }
    box(AL, 1.3, 0.05, 0.55, 0, H + 0.05, ez - 0.1);
    for (const [c, x] of [[0xc0392b, -0.18], [0x2e86de, 0.18]]) {
      const t = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.025, 6, 16), new THREE.MeshLambertMaterial({ color: c }));
      t.position.set(x, H + 0.5, ez - 0.05);
      body.add(t);
    }
    box(ST, 1.35, 0.14, 1.3, 0, H - 0.02, 0.3);
    box(AL, 1.2, 0.03, 1.1, 0, H + 0.06, 0.3);
    for (const sd of [-1, 1]) box(D, 0.7, 0.05, def.axles >= 3 ? 2.7 : 1.4, sd * 0.98, wr * 2 + 0.14, 0);
  }
  // traseira: lanternas, lameiros
  for (const sd of [-1, 1]) {
    TL.quad([sd * 0.62 - 0.22, H - 0.32, rearEnd - 0.03], [sd * 0.62 + 0.22, H - 0.32, rearEnd - 0.03], [sd * 0.62 + 0.22, H - 0.1, rearEnd - 0.03], [sd * 0.62 - 0.22, H - 0.1, rearEnd - 0.03], [0, 0, -1], sd > 0 ? [1, 0, 0, 0, 0, 1, 1, 1] : [0, 0, 1, 0, 1, 1, 0, 1]);
    box(D, 0.62, 0.62, 0.03, sd * 1.0, 0.55, def.axles >= 3 && !rigid ? -1.45 : -0.8);
  }
  box(ST, 2.0, 0.1, 0.12, 0, H - 0.2, rearEnd);

  // baú (rígidos)
  let hitchZ = 0.3;
  if (rigid) {
    const bz1 = cabBack - 0.15, bz0 = rearEnd;
    const bh = small ? 2.3 : 2.7, bw = small ? 2.25 : 2.5;
    box(ST, bw, 0.12, bz1 - bz0, 0, H + 0.02, (bz0 + bz1) / 2);
    const boxMat = new THREE.MeshLambertMaterial({ map: tex.cargoBox('#' + new THREE.Color(def.color === 0xf2f2f2 ? 0x2f6fde : def.color).getHexString(), 'DRIZZIE') });
    const side = new Builder();
    const yb = H + 0.08, yt = H + 0.08 + bh;
    side.quad([bw / 2 + 0.01, yb, bz1], [bw / 2 + 0.01, yb, bz0], [bw / 2 + 0.01, yt, bz0], [bw / 2 + 0.01, yt, bz1], [1, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1]);
    side.quad([-bw / 2 - 0.01, yb, bz0], [-bw / 2 - 0.01, yb, bz1], [-bw / 2 - 0.01, yt, bz1], [-bw / 2 - 0.01, yt, bz0], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
    body.add(side.mesh(boxMat, { cast: true }));
    const Wb = new Builder(true);
    Wb.box(-bw / 2, yb, bz0, bw / 2, yt, bz1, 1, 0xf4f4f4);
    for (const sd of [-1, 1]) Wb.add(G.box(), mat(sd * bw / 4, (yb + yt) / 2, bz0 - 0.02, 0, 0, 0, bw / 2 - 0.08, bh - 0.12, 0.02), 0xdcdcdc);
    Wb.add(G.box(), mat(0, yt + 0.02, (bz0 + bz1) / 2, 0, 0, 0, bw + 0.04, 0.06, bz1 - bz0 + 0.04), 0xd0d3d6);
    body.add(Wb.mesh(M.flat, { cast: true }));
    for (const sd of [-0.3, 0.3]) box(C, 0.04, bh - 0.3, 0.04, sd, (yb + yt) / 2, bz0 - 0.04);
    box(D, bw - 0.2, 0.12, 0.1, 0, 0.55, bz0 - 0.05);
    hitchZ = rearEnd;
  }

  const paint = paintMat(def.color);
  const decal = new THREE.MeshLambertMaterial({ map: tex.cabDecal(def.color), transparent: true, alphaTest: 0.05, depthWrite: false, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -2 });
  meshesFrom([[P, paint], [C, M.chrome], [D, M.dark], [GL, M.glass], [LI, M.light], [RE, M.red], [AM, M.amber], [GR, M.grill], [ST, M.steel], [AL, M.alu], [LP, M.lamp], [TL, M.tail], [DC, decal], [IN, M.interior]], body);

  // luzes noturnas e pisca-pisca
  const night = new THREE.Group();
  const frontLampY = conv ? wr + 0.44 : H - 0.07, frontLampZ = conv ? wb + wr + 0.3 : zf + 0.3;
  const frontLampX = conv ? W2 - 0.31 : W2 - 0.43;
  for (const sd of [-1, 1]) {
    const g = new THREE.Sprite(M.glow);
    g.scale.set(1.7, 1.7, 1);
    g.position.set(sd * frontLampX, frontLampY, frontLampZ);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(sd * 0.62, H - 0.2, rearEnd - 0.12);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(9, 26), M.beam);
  beam.rotation.set(-Math.PI / 2, 0, Math.PI); // parte larga do facho à frente
  beam.position.set(0, 0.07, zf + 13.5);
  night.add(beam);
  night.visible = false;
  root.add(night);
  const blinkL = [], blinkR = [];
  for (const sd of [-1, 1]) {
    for (const [x, y, z] of [[sd * (W2 - 0.05), conv ? wr + 0.44 : H - 0.07, conv ? wb + wr + 0.3 : zf + 0.25], [sd * (W2 + 0.05), conv ? Y(0.6) : Y(0.3), conv ? cf - 0.2 : wb + 0.6], [sd * 0.98, H - 0.2, rearEnd - 0.1]]) {
      const sp = new THREE.Sprite(M.blink);
      sp.scale.set(0.8, 0.8, 1);
      sp.position.set(x, y, z);
      sp.visible = false;
      root.add(sp);
      (sd > 0 ? blinkL : blinkR).push(sp);
    }
  }

  // rodas
  const front = [], rear = [];
  const fx = W2 - 0.3, fw = small ? 0.26 : 0.32;
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
  return { root, body, front, rear, wb, wr, hitchZ, zf, rearEnd, paint, blob, cabW, night, y0: H, cabFront: cf, ch: 2.05 * k, conv, blinkL, blinkR };
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
  const useModel = type === 'flatbed' && MODELS.flatbed;
  const tm = useModel ? modelMeta(MODELS.flatbed) : null;
  const Lt = useModel ? tm.front - tm.back : model === 'blade' ? 20 : type === 'tank' ? 12.5 : type === 'bulk' ? 12 : type === 'lowboy' ? 14.5 : 13.6;
  const front = useModel ? tm.front : 1.0, back = useModel ? tm.back : -(Lt - front);
  const nAx = type === 'lowboy' ? (cargo.t > 60 ? 5 : 4) : 3;
  const axleSpacing = 1.35;
  const axC = useModel ? tm.axles.reduce((a, b) => a + b, 0) / tm.axles.length : back + 1.6 + ((nAx - 1) * axleSpacing) / 2;
  const deck = useModel ? tm.deckY - 0.11 : 1.35;
  const extra = [];
  const modelAxles = [];
  if (useModel) {
    // reboque prancha importado (texturas PBR); eixos giram separadamente
    const src = MODELS.flatbed;
    src.updateMatrixWorld(true);
    src.traverse((o) => {
      if (!o.isMesh) return;
      let node = o;
      while (node.parent && !/^axle_/.test(node.name)) node = node.parent;
      const m = new THREE.Mesh(o.geometry, o.material);
      m.castShadow = true;
      m.receiveShadow = true;
      if (/^axle_/.test(node.name)) {
        // malha em coordenadas locais do eixo
        const piv = new THREE.Group();
        piv.position.setFromMatrixPosition(node.matrixWorld);
        m.matrixAutoUpdate = false;
        m.matrix.copy(new THREE.Matrix4().copy(node.matrixWorld).invert().multiply(o.matrixWorld));
        piv.add(m);
        if (!modelAxles.includes(piv)) { modelAxles.push(piv); extra.push(piv); }
      } else {
        m.matrixAutoUpdate = false;
        m.matrix.copy(o.matrixWorld);
        extra.push(m);
      }
    });
  }

  if (!useModel) for (const s of [-1, 1]) {
    box(ST, 0.14, 0.42, Lt - 0.6, s * 0.48, deck - 0.3, (front + back) / 2);
    box(D, 0.12, 1.0, 0.12, s * 0.9, 0.6, -1.6);
    box(D, 0.32, 0.06, 0.32, s * 0.9, 0.08, -1.6);
    box(D, 0.06, 0.32, 5.5, s * 1.2, deck - 0.45, back + 7.6);
    box(RE, 0.38, 0.16, 0.05, s * 1.0, deck - 0.4, back - 0.03);
    for (let z = front - 1.5; z > back + 1; z -= 3) box(AM, 0.04, 0.08, 0.12, s * 1.28, deck - 0.1, z);
  }
  if (!useModel) {
    box(D, 2.4, 0.16, 0.12, 0, deck - 0.75, back - 0.06);
    for (let z = front - 1; z > back + 1; z -= 1.2) box(ST, 0.96, 0.1, 0.1, 0, deck - 0.3, z);
  }

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
    if (!useModel) {
      box(P, 2.5, 0.22, Lt, 0, deck, (front + back) / 2, 0x6d4c2f);
      box(P, 2.5, 1.2, 0.1, 0, deck + 0.7, front - 0.05, 0x34495e);
    }
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
    } else if (model === 'stone') {
      for (let i = 0; i < 3; i++) box(P, 2.2, 1.35 + (i % 2) * 0.25, 2.6, 0, top + 0.7 + (i % 2) * 0.12, front - 2.6 - i * 3.8, [0x8d8a86, 0xa29e98, 0x7c7975][i], 0, (i - 1) * 0.04, 0);
      straps(top + 1.6);
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
  const axles = [...modelAxles];
  if (!useModel) for (let i = 0; i < nAx; i++) {
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
  const blinkL = [], blinkR = [];
  for (const sd of [-1, 1]) {
    const sp = new THREE.Sprite(M.blink);
    sp.scale.set(0.8, 0.8, 1);
    sp.position.set(sd * 1.2, deck - 0.4, back - 0.12);
    sp.visible = false;
    root.add(sp);
    (sd > 0 ? blinkL : blinkR).push(sp);
  }
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(3.4, Lt + 1.5), M.blob);
  blob.rotation.x = -Math.PI / 2;
  blob.position.set(0, 0.05, (front + back) / 2);
  root.add(blob);
  root.traverse((o) => { if (o.isMesh && o !== blob) o.castShadow = true; });
  return { root, axles, Lk: -axC, Lt, front, back, blob, night, blinkL, blinkR };
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
    if (this.model.bedCargo) this.model.bedCargo.visible = !!this.cargo;
    this.sync();
  }

  attach(cargo) {
    this.cargo = cargo;
    if (this.model.bedCargo) this.model.bedCargo.visible = true;
    if (this.def.rigid) return;
    const tr = buildTrailer(cargo);
    tr.blob.visible = !this.shadows;
    tr.night.visible = this.lightsOn;
    this.trailer = tr;
    this.th = this.h;
    this.scene.add(tr.root);
    this.sync();
  }

  // pisca-pisca: dir = -1 esquerda, 1 direita, 2 alerta, 0 desligado; on = fase acesa
  setBlink(dir, on) {
    const show = (arr, v) => { for (const s of arr) s.visible = v; };
    const L = on && (dir === -1 || dir === 2), R = on && (dir === 1 || dir === 2);
    show(this.model.blinkL, L); show(this.model.blinkR, R);
    if (this.trailer) { show(this.trailer.blinkL, L); show(this.trailer.blinkR, R); }
  }

  setLights(on) {
    if (MATS && MATS.lamp.emissiveIntensity !== undefined) MATS.lamp.emissiveIntensity = on ? 1.6 : 0.15;
    if (MATS && MATS.lampFlat.emissiveIntensity !== undefined) MATS.lampFlat.emissiveIntensity = on ? 2.2 : 0.15;
    this.lightsOn = on;
    this.model.night.visible = on;
    if (this.trailer) this.trailer.night.visible = on;
  }

  detach() {
    if (this.model.bedCargo) this.model.bedCargo.visible = false;
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
