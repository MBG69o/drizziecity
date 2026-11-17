// Caminhões e implementos realistas (cara-chata e bicudo) + física
// potência x massa, aclives, articulação da carreta e colisões.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { trailerMass, cargoCG, SURFACES, FUEL_SCALE } from './data.js';
const SURF = Object.fromEntries(Object.entries(SURFACES).map(([k, v]) => [k, { ...v, key: k }]));

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
    g.scale.set(1.4, 1.4, 1); g.userData.front = 1.4;
    g.position.set(sd * (W2 - 0.3), ly, zf + 0.1);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.8, 0.8, 1);
    rg.position.set(sd * (W2 - 0.2), ly, rearEnd - 0.08);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(8, 24), M.beam);
  beam.rotation.set(-Math.PI / 2, 0, Math.PI);
  beam.position.set(0, 0.07, zf + 12.5); beam.userData.beam = zf;
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
    g.scale.set(1.7, 1.7, 1); g.userData.front = 1.7;
    g.position.set(sd * frontLampX, frontLampY, frontLampZ);
    night.add(g);
    const rg = new THREE.Sprite(M.glowRed);
    rg.scale.set(0.9, 0.9, 1);
    rg.position.set(sd * 0.62, H - 0.2, rearEnd - 0.12);
    night.add(rg);
  }
  const beam = new THREE.Mesh(new THREE.PlaneGeometry(9, 26), M.beam);
  beam.rotation.set(-Math.PI / 2, 0, Math.PI); // parte larga do facho à frente
  beam.position.set(0, 0.07, zf + 13.5); beam.userData.beam = zf;
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
export function buildTrailer(cargo, opts = {}) {
  const M = mats();
  const root = new THREE.Group();
  root.rotation.order = 'YXZ';
  const P = new Builder(true), D = new Builder(), C = new Builder(true), RE = new Builder(), AM = new Builder(), PN = new Builder(), ST = new Builder();
  const box = (b, w, h, d, x, y, z, color, rx = 0, ry = 0, rz = 0) => b.add(G.box(), mat(x, y, z, rx, ry, rz, w, h, d), color);
  const cyl = (b, rad, len, x, y, z, rx, ry, rz, color, seg = 18) => b.add(G.cyl(seg), mat(x, y, z, rx, ry, rz, rad * 2, len, rad * 2), color);
  const type = cargo.trailer, model = cargo.model;
  const useModel = type === 'flatbed' && MODELS.flatbed && !opts.len;
  const tm = useModel ? modelMeta(MODELS.flatbed) : null;
  const Lt = opts.len || (useModel ? tm.front - tm.back : model === 'blade' ? 20 : type === 'tank' ? 12.5 : type === 'bulk' ? 12 : type === 'lowboy' ? 14.5 : 13.6);
  const front = useModel ? tm.front : (opts.front ?? 1.0), back = useModel ? tm.back : -(Lt - front);
  const ax0 = opts.lead ? back + 0.9 : back + 1.6;
  const nAx = opts.len ? (opts.lead ? 3 : 3) : type === 'lowboy' ? (cargo.t > 60 ? 5 : 4) : 3;
  const axleSpacing = 1.35;
  const axC = useModel ? tm.axles.reduce((a, b) => a + b, 0) / tm.axles.length : ax0 + ((nAx - 1) * axleSpacing) / 2;
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
    } else if (model === 'bricks') {
      for (let z = front - 1.4; z > back + 1; z -= 1.3)
        for (const x of [-0.62, 0.62]) {
          box(D, 1.15, 0.12, 1.15, x, top + 0.06, z);
          box(P, 1.1, 0.95, 1.1, x, top + 0.6, z, 0xa8472c);
          box(P, 1.12, 0.03, 1.12, x, top + 0.36, z, 0x8f3a22);
        }
      straps(top + 1.12);
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
    const a = axleMesh(ax0 + i * axleSpacing, 1.75, 0.5, 0.28, true);
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
  // bitrem: quinta roda traseira na carreta dianteira (sobre o conjunto de eixos)
  let coupleZ = null;
  if (opts.lead) {
    coupleZ = back + 0.45;
    const fw = new THREE.Mesh(G.box(), M.steel);
    fw.scale.set(1.3, 0.14, 1.3);
    fw.position.set(0, deck + 0.05, coupleZ);
    root.add(fw);
  }
  return { root, axles, Lk: -axC, Lt, front, back, blob, night, blinkL, blinkR, coupleZ };
}

// ---------- física ----------
const tmp = { x: 0, z: 0 };
const G0 = 9.81;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

// furos por km rodado em cada piso
const PUNCT = { asphalt: 0.003, concrete: 0.002, cobble: 0.008, gravel: 0.03, dirt: 0.015, mud: 0.012 };

// inclinação da suspensão (só enquanto as rodas estão no chão)
const phiSusp = (susp, phi, max) => (phi > 0 ? max : Math.max(0, susp) * max);

export class Rig {
  constructor(scene, def, shadows) {
    this.scene = scene;
    this.shadows = shadows;
    this.x = 0; this.z = 0; this.h = 0; this.y = 0; this.pitch = 0; this.tpitch = 0; this.tpitch2 = 0;
    this.v = 0; this.steer = 0; this.acc = 0; this.yaw = 0;
    this.trailer = null; this.th = 0; this.trailer2 = null; this.th2 = 0;
    this.cargo = null;
    this.wheelRot = 0;
    this.rpm = 0.2;
    this.collCooldown = 0;
    this.reverse = false;
    this.lastImpact = 0;
    this.lightsOn = false;
    this.engineOn = false;
    this.slip = 0; this.tipRisk = 0; this.tip = 0; this.wheelspin = 0;
    this.slosh = 0; this.sloshV = 0;
    this.rolled = 0;          // 1 = deitado de lado
    this.rollT = { phi: 0, w: 0 }; this.rollR = { phi: 0, w: 0 }; this.liftSide = 1; this.susp = 0;
    this.surface = 'asphalt';
    this.sink = 0; this.stuck = false; this.stuckT = 0;   // atolamento
    this.flat = 0; this.spare = true;                     // pneu furado (-1 esq / 1 dir) e estepe
    this.brakeT = 0;                                      // temperatura dos freios (0..1+)
    this.retarder = true;                                 // freio-motor
    this.fuel = def.tank; this.lpm = FUEL_SCALE / (def.kml * 1000); // litros e consumo médio (L/m)
    this.setTruck(def);
  }

  setTruck(def) {
    if (this.model) this.scene.remove(this.model.root);
    this.def = def;
    this.fuel = Math.min(this.fuel, def.tank);
    this.lpm = FUEL_SCALE / (def.kml * 1000);
    this.model = buildTruck(def);
    this.model.blob.visible = !this.shadows;
    this.scene.add(this.model.root);
    this.model.night.visible = this.lightsOn;
    this.beamMode = -1; // reaplica o modo do farol no novo modelo
    if (this.onModel) this.onModel(this.model);
    if (this.trailer && def.rigid) this.detach();
    if (this.model.bedCargo) this.model.bedCargo.visible = !!this.cargo;
    this.computePhys();
    this.sync();
  }

  // a carga vai numa carreta? (cavalo sempre; rígido só com carga de carreta, puxada por cambão)
  usesTrailer(cargo, def = this.def) { return !!cargo && (!def.rigid || cargo.trailer !== 'box'); }

  makeTrailers(cargo) {
    let t1, t2 = null;
    if (cargo.trailer === 'bitrem') {
      const sub = { ...cargo, trailer: cargo.sub };
      t1 = buildTrailer(sub, { len: 9.2, lead: true });
      t2 = buildTrailer(sub, { len: 10.2, front: 0.5 });
    } else t1 = buildTrailer(cargo);
    for (const tr of [t1, t2]) {
      if (!tr) continue;
      tr.blob.visible = !this.shadows;
      tr.night.visible = false;
      this.scene.add(tr.root);
    }
    return { t1, t2 };
  }

  // pés de apoio (carreta estacionada)
  addLegs(tr) {
    const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: 0x2c2f33, metalness: 0.5, roughness: 0.6 });
    for (const sd of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.15, 0.16), m);
      leg.position.set(sd * 0.95, 0.6, -1.9);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.4), m);
      foot.position.set(sd * 0.95, 0.04, -1.9);
      g.add(leg, foot);
    }
    const brace = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.08, 0.08), m);
    brace.position.set(0, 0.55, -1.9);
    g.add(brace);
    tr.root.add(g);
    return g;
  }

  // carreta carregada esperando no pátio (o jogador engata de ré)
  park(cargo, x, z, h) {
    this.unpark();
    const { t1, t2 } = this.makeTrailers(cargo);
    this.parked = { cargo, t1, t2, x, z, h, legs: this.addLegs(t1) };
    this.placeParked(this.parked);
    return this.parked;
  }

  placeParked(p) {
    const W = this.world;
    const fx = Math.sin(p.h), fz = Math.cos(p.h);
    const hy = (x, z) => (W ? W.heightAt(x, z) : 0);
    const put = (tr, x, z) => {
      const y = hy(x, z), ax = x - fx * tr.Lk, az = z - fz * tr.Lk, ya = hy(ax, az);
      tr.root.position.set(x, y, z);
      tr.root.rotation.set(-Math.atan2(y - ya, tr.Lk), p.h, 0);
    };
    put(p.t1, p.x, p.z);
    if (p.t2) put(p.t2, p.x + fx * p.t1.coupleZ, p.z + fz * p.t1.coupleZ);
  }

  unpark(p = this.parked) {
    if (!p) return;
    for (const tr of [p.t1, p.t2]) if (tr) this.scene.remove(tr.root);
    if (p === this.parked) this.parked = null;
  }

  // engate da quinta-roda (ou do cambão) que ficará sobre o pino-rei desta carreta
  hitchFor(p) {
    return this.def.rigid ? this.model.rearEnd - 1.5 - p.t1.front : this.model.hitchZ;
  }

  attach(cargo, parked = null) {
    this.cargo = cargo;
    // caminhão rígido com carga de carreta: puxa um reboque pelo engate traseiro (cambão)
    const tow = this.def.rigid && cargo.trailer !== 'box';
    if (this.model.bedCargo) this.model.bedCargo.visible = !tow;
    this._hitch = null;
    if (this.usesTrailer(cargo)) {
      let t1, t2;
      if (parked) {
        ({ t1, t2 } = parked);
        if (parked.legs) t1.root.remove(parked.legs);
        if (parked === this.parked) this.parked = null;
      } else ({ t1, t2 } = this.makeTrailers(cargo));
      this.trailer = t1; this.trailer2 = t2;
      for (const tr of [t1, t2]) if (tr) tr.night.visible = this.lightsOn;
      if (tow) {
        const tr = this.trailer, gap = 1.5;
        this._hitch = this.model.rearEnd - gap - tr.front;
        if (!tr.bar) {
          // cambão: barra do engate do caminhão até a frente do reboque
          const bar = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, gap + 0.3), new THREE.MeshStandardMaterial({ color: 0x2b2b2b, metalness: 0.6, roughness: 0.5 }));
          bar.position.set(0, 0.85, tr.front + gap / 2);
          tr.root.add(bar);
          tr.bar = bar;
        }
      }
      this.th = parked ? parked.h : this.h;
      this.th2 = parked ? parked.h : this.h;
    }
    this.computePhys();
    this.sync();
  }

  // solta a carreta onde está (fica estacionada no pátio do cliente)
  dropTrailer() {
    if (!this.trailer) { this.detach(); return null; }
    const hz = this.hitch;
    const p = { cargo: this.cargo, t1: this.trailer, t2: this.trailer2, h: this.th, x: this.x + Math.sin(this.h) * hz, z: this.z + Math.cos(this.h) * hz };
    p.legs = this.addLegs(p.t1);
    for (const tr of [p.t1, p.t2]) if (tr) tr.night.visible = false;
    this.trailer = null; this.trailer2 = null; this._hitch = null;
    if (this.model.bedCargo) this.model.bedCargo.visible = false;
    this.cargo = null;
    this.computePhys();
    this.placeParked(p);
    return p;
  }

  // círculos de colisão de uma carreta estacionada (atrás dos pés de apoio, para dar para engatar)
  parkedCircles(p, out) {
    const fx = Math.sin(p.h), fz = Math.cos(p.h);
    const add = (tr, x, z, from) => { for (let s = from; s > tr.back + 0.4; s -= 2.2) out.push({ x: x + fx * s, z: z + fz * s, r: 1.3, set hit(v) {} }); };
    add(p.t1, p.x, p.z, -3.4);
    if (p.t2) add(p.t2, p.x + fx * p.t1.coupleZ, p.z + fz * p.t1.coupleZ, p.t2.front - 1);
    return out;
  }

  detach() {
    if (this.model.bedCargo) this.model.bedCargo.visible = false;
    if (this.trailer) this.scene.remove(this.trailer.root);
    if (this.trailer2) this.scene.remove(this.trailer2.root);
    this.trailer = null; this.trailer2 = null; this._hitch = null;
    this.cargo = null;
    this.computePhys();
  }

  // Física própria de cada caminhão + carreta + carga
  computePhys() {
    const d = this.def, c = this.cargo;
    const mT = d.mass * 1000;
    const onBed = d.rigid && !this.trailer; // carga na carroceria do próprio caminhão
    const mC = c ? c.t * 1000 : 0, mTr = c && !onBed ? trailerMass(c) * 1000 : 0;
    const cgC = c ? (onBed ? d.cgH * 1.4 : cargoCG(c, false)) : 0;
    const truckCG = onBed && c ? (mT * d.cgH + mC * cgC) / (mT + mC) : d.cgH;
    const trailerCG = !onBed && c ? (mTr * 1.25 + mC * cgC) / (mTr + mC) : 0;
    const ssf = Math.min((d.track || 2) / 2 / truckCG, trailerCG ? 1.0 / trailerCG : 9);
    const sub = c ? (c.trailer === 'bitrem' ? c.sub : c.trailer) : null;
    this.P = {
      mass: mT + mC + mTr,
      aRoll: G0 * ssf * 0.92,                     // aceleração lateral que tomba o conjunto
      tireMu: d.tireMu || 0.9,
      // peso sobre os eixos de tração (cavalo recebe ~45% da carreta pelo pino-rei)
      // reboque de cambão não apoia peso no caminhão; semirreboque apoia ~45% no pino-rei
      driveMass: (d.drive || 0.4) * (mT + (onBed ? mC : d.rigid ? 0 : (mTr + mC) * 0.5)) * 1.7,
      steerLock: d.steerLock || 0.6,
      yawTau: 0.12 + (mT + mC + mTr) / 260000,      // inércia de giro
      cda: this.trailer ? (sub === 'box' ? 9 : 7) * (this.trailer2 ? 1.25 : 1) : d.rigid ? 6.5 : 5,
      slosh: sub === 'tank',
      fragile: !!(c && c.fragile),
      trailerMu: sub === 'lowboy' ? 0.85 : 0.9,
      // geometria de tombamento: meia bitola efetiva (pneus/molas cedem) e altura do CG
      bT: ((d.track || 2) / 2) * 0.9, hT: truckCG,
      bR: 1.0 * 0.9, hR: trailerCG,
    };
    // consumo: calibrado para que, a 80 km/h no plano com meia carga, o caminhão faça def.kml km/L
    const vr = 22.2, mRef = mT + d.cap * 500 + (d.rigid ? 0 : 7000);
    const Fref = 0.008 * mRef * G0 + 0.6 * (d.rigid ? 6.5 : 8) * vr * vr;
    this.P.Ej = (Fref * vr) / ((vr / 1000 / d.kml) * FUEL_SCALE); // joules úteis por litro (escala do mapa)
    this.P.idle = ((0.6 + d.hp / 220) / 3600) * FUEL_SCALE * 0.5;       // L/s em marcha lenta
  }

  setBlink(dir, on) {
    const show = (arr, v) => { for (const s of arr) s.visible = v; };
    const L = on && (dir === -1 || dir === 2), R = on && (dir === 1 || dir === 2);
    show(this.model.blinkL, L); show(this.model.blinkR, R);
    const last = this.trailer2 || this.trailer;
    if (last) { show(last.blinkL, L); show(last.blinkR, R); }
  }

  // faróis: 0 desligado, 1 baixo, 2 alto
  setBeam(mode) {
    this.beamMode = mode;
    this.setLights(mode > 0);
    for (const o of this.model.night.children) {
      if (o.userData.beam !== undefined) {
        o.scale.set(mode === 2 ? 1.25 : 1, mode === 2 ? 2.3 : 1, 1);
        o.position.z = o.userData.beam + (mode === 2 ? 30 : 13);
        o.material.opacity = mode === 2 ? 0.75 : 1;
      } else if (o.userData.front) { const k = o.userData.front * (mode === 2 ? 1.7 : 1); o.scale.set(k, k, 1); }
    }
  }

  setLights(on) {
    if (MATS && MATS.lamp.emissiveIntensity !== undefined) MATS.lamp.emissiveIntensity = on ? 1.6 : 0.15;
    if (MATS && MATS.lampFlat.emissiveIntensity !== undefined) MATS.lampFlat.emissiveIntensity = on ? 2.2 : 0.15;
    this.lightsOn = on;
    this.model.night.visible = on;
    if (this.trailer) this.trailer.night.visible = on;
    if (this.trailer2) this.trailer2.night.visible = on;
  }

  puncture(side) {
    if (this.flat) return false;
    this.flat = side || (Math.random() < 0.5 ? -1 : 1);
    if (this.onPuncture) this.onPuncture();
    return true;
  }
  // autonomia estimada (km) com o consumo médio recente
  get range() { return this.fuel / Math.max(this.lpm, 1e-5) / 1000; }

  // ponto de articulação: quinta-roda do cavalo ou engate do reboque
  get hitch() { return this._hitch ?? this.model.hitchZ; }

  get mass() { return this.P ? this.P.mass : this.def.mass * 1000; }
  get speedKmh() { return Math.abs(this.v) * 3.6; }
  // comprimento total (para a câmera)
  get trainLength() { return (this.trailer ? this.trailer.Lt : 0) + (this.trailer2 ? this.trailer2.Lt - 2 : 0); }

  place(x, z, h) {
    this.x = x; this.z = z; this.h = h; this.th = h; this.th2 = h;
    this.sink = 0; this.stuck = false; this.stuckT = 0;
    this.v = 0; this.steer = 0; this.yaw = 0; this.tip = 0; this.slosh = 0; this.sloshV = 0;
    this.rolled = 0; this.rollT.phi = this.rollT.w = 0; this.rollR.phi = this.rollR.w = 0; this.susp = 0;
    this.sync();
  }

  // posição do engate da segunda carreta (bitrem)
  couple(out) {
    const md = this.model, t1 = this.trailer;
    const hx = this.x + Math.sin(this.h) * this.hitch, hz = this.z + Math.cos(this.h) * this.hitch;
    out.x = hx + Math.sin(this.th) * t1.coupleZ; out.z = hz + Math.cos(this.th) * t1.coupleZ;
    return out;
  }

  center(out) {
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    if (this.trailer) {
      let tx, tz;
      if (this.trailer2) { this.couple(tmp); tx = tmp.x - Math.sin(this.th2) * this.trailer2.Lt * 0.45; tz = tmp.z - Math.cos(this.th2) * this.trailer2.Lt * 0.45; }
      else { const hx = this.x + fx * this.hitch, hz = this.z + fz * this.hitch, L = this.trailer.Lt * 0.45; tx = hx - Math.sin(this.th) * L; tz = hz - Math.cos(this.th) * L; }
      out.x = (this.x + fx * this.model.wb * 0.5 + tx) / 2;
      out.z = (this.z + fz * this.model.wb * 0.5 + tz) / 2;
    } else {
      out.x = this.x + fx * this.model.wb * 0.4;
      out.z = this.z + fz * this.model.wb * 0.4;
    }
    return out;
  }

  update(dt, inp, world, obstacles) {
    this._sdt = dt;
    this.world = world;
    if (this.rolled) {
      // deitado: arrasta de lado até parar, sem direção nem tração
      const sv = Math.abs(this.v);
      this.v = sv <= 5.5 * dt ? 0 : this.v - Math.sign(this.v) * 5.5 * dt;
      this.yaw *= Math.exp(-dt * 2.5);
      this.h += this.yaw * dt;
      this.x += Math.sin(this.h) * this.v * dt;
      this.z += Math.cos(this.h) * this.v * dt;
      for (const st of [this.rollT, this.rollR]) if (st.phi > 0) { st.phi = Math.min(1.5, st.phi + Math.max(st.w, 1.2) * dt); st.w = st.phi >= 1.5 ? 0 : st.w; }
      this.rpm += (0 - this.rpm) * Math.min(1, dt * 3);
      this.collide(world, obstacles, dt);
      this.sync();
      return;
    }
    const def = this.def, Pp = this.P;
    const m = Pp.mass;
    const S = SURF[world.surfaceAt ? world.surfaceAt(this.x, this.z) : 'asphalt'] || SURF.asphalt;
    this.surface = S.key;
    // estradas de lama: firme entre as poças, mole e escorregadia dentro delas
    const deep = S.key === 'mud' && world.mudDepth ? world.mudDepth(this.x, this.z) : 0;
    // chuva: pista molhada perde aderência (terra vira barro); água de alagamento freia e pode afogar o motor
    const wet = world.wet || 0, paved = S.key === 'asphalt' || S.key === 'concrete' || S.key === 'cobble';
    const water = world.floodDepth ? world.floodDepth(this.x, this.z) : 0;
    this.water = water;
    const mu = (S.key === 'mud' ? 0.5 - 0.2 * deep : S.mu) * Pp.tireMu * (1 - wet * (paved ? 0.2 : 0.32)) * (water > 0.08 && Math.abs(this.v) > 12 ? 0.55 : 1);
    const Pw = def.hp * 735.5 * 1.45;
    const vmax = (this.flat ? Math.min(def.vmax, 60) : def.vmax) / 3.6;
    let v = this.v;
    let F = 0;          // forças que movem (motor + gravidade)
    let R = 0;          // resistências: sempre se opõem ao movimento (não invertem o sentido)
    const brake = inp.brake, thr = inp.throttle;
    if (this.fuel <= 0 && this.engineOn) { this.engineOn = false; this.fuel = 0; if (this.onFuelOut) this.onFuelOut(); }

    if (inp.gear === 'auto') {
      this.stopT = brake > 0.1 && Math.abs(v) < 0.4 && thr < 0.1 ? (this.stopT || 0) + dt : 0;
      if (this.stopT > 0.3) this.reverse = true;
      if (thr > 0.1 && v > -0.4) this.reverse = false;
    } else this.reverse = inp.gear === 'R';
    const drive = this.engineOn && inp.gear !== 'N';
    const autoRev = inp.gear === 'auto' && this.reverse;

    // ---- lama: o caminhão afunda se parar ou patinar ----
    const av = Math.abs(v);
    if (deep > 0) {
      const heavy = Math.sqrt(m / 20000);
      this.sink += dt * deep * heavy * ((av < 3 ? 0.07 : 0) + this.wheelspin * 0.3 - (av > 6 ? 0.05 : 0));
    } else this.sink -= dt * (av > 1 ? 0.5 : 0.15);
    this.sink = clamp(this.sink, 0, 1);
    const crr = S.crr * (S.key === 'mud' ? 0.4 + 0.6 * deep : 1) * (1 + this.sink * 3.5) + (this.flat ? 0.012 : 0);

    // tração limitada pela aderência do piso sobre os eixos de tração
    const Ftrac = mu * G0 * Pp.driveMass * (1 - this.sink * 0.45);
    // freios: aquecem nas descidas longas e perdem eficiência (fading)
    const fade = clamp(1 - Math.max(0, this.brakeT - 0.55) * 1.4, 0.3, 1);
    this.fade = fade;
    const Fbrk = Math.min(6.8, mu * G0 * 0.95) * m * fade;
    let Fdrive = 0, Fb = 0;
    // limitador: o motor não empurra acima da velocidade máxima (mas a gravidade pode)
    const lim = (sp) => clamp((vmax - sp) / 1.5, 0, 1);
    if (!this.reverse) {
      if (drive && thr > 0 && v >= -0.3) Fdrive = thr * lim(v) * Math.min(Pw / Math.max(v, 3), m * 3.0, def.hp * 250);
      Fb = brake * Fbrk;
    } else if (autoRev) {
      if (drive && brake > 0 && v > -4.5) Fdrive = -brake * Math.min(Pw / Math.max(-v, 3), m * 1.6);
      Fb = thr * Fbrk;
    } else {
      if (drive && thr > 0 && v > -5) Fdrive = -thr * Math.min(Pw / Math.max(-v, 3), m * 1.6);
      Fb = brake * Fbrk;
    }
    // patinagem: força acima da aderência vira giro em falso
    this.wheelspin = Math.abs(Fdrive) > Ftrac ? Math.min(1, (Math.abs(Fdrive) - Ftrac) / Ftrac) : 0;
    Fdrive = clamp(Fdrive, -Ftrac, Ftrac);
    F += Fdrive;
    R += Fb;
    if (inp.handbrake) R += Math.min(m * 5, mu * G0 * m * 0.6);
    // freio-motor / retarder (só engatado, sem acelerar)
    let Feng = 0;
    if (drive && thr < 0.05 && av > 2 && !autoRev) {
      Feng = m * 0.2 * clamp(av / 12, 0.3, 1) + (this.retarder ? Math.min(m * 0.6 * clamp(av / 22, 0, 1), (0.6 * Pw) / Math.max(av, 4)) : 0);
      R += Feng;
    } else if (thr < 0.05 && brake < 0.05) R += m * 0.05;
    this.engBrake = Feng;
    // gravidade: sempre age — perde força na subida, embala na descida, desce de ré se soltar o freio
    const grade = Math.sin(this.pitch) * 0.55 + Math.sin(this.trailer ? this.tpitch : this.pitch) * 0.45;
    const Fg = -m * G0 * grade;
    F += Fg;
    R += crr * m * G0 * (paved ? 1 : 1 + wet * 0.8) + 0.5 * 1.2 * Pp.cda * v * v;
    if (water > 0.05) {
      R += 0.5 * 1000 * 0.45 * (this.model.cabW || 2.4) * Math.min(water, 1.2) * v * v + m * 0.6 * water;
      if (this.engineOn && water > (def.rigid && def.mass < 6 ? 0.55 : 0.95) && Math.abs(v) > 0.5) { this.engineOn = false; if (this.onDrown) this.onDrown(); }
    }
    // temperatura dos freios
    const pBrake = Fb * av / m;                    // W/kg dissipados
    this.brakeT += dt * (pBrake / 220 - (0.01 + av * 0.0007) * this.brakeT);
    this.brakeT = Math.max(0, this.brakeT);

    // ---- curva: aderência lateral x força centrífuga ----
    const lockV = Pp.steerLock / (1 + (v * v) / 260);
    const target = inp.steer * lockV;
    const rate = (inp.steer === 0 ? 2.4 : 1.4) / (1 + m / 60000);
    const ds = target - this.steer;
    this.steer += Math.sign(ds) * Math.min(Math.abs(ds), rate * dt);
    const wb = this.model.wb;
    const kWant = Math.tan(this.steer) / wb;
    const aWant = v * v * Math.abs(kWant);
    // atrito combinado: frear forte reduz a aderência lateral
    const brakeUse = Math.min(1, Math.abs(F) / (mu * G0 * m + 1));
    const aGrip = mu * G0 * 0.92 * Math.sqrt(Math.max(0.15, 1 - brakeUse * brakeUse));
    let k = kWant;
    let scrub = 0;
    this.slip = 0;
    if (aWant > aGrip && Math.abs(v) > 3) {
      // sai de frente: a curva fica mais aberta e o pneu arrasta
      const kMax = aGrip / (v * v);
      k = Math.sign(kWant) * (kMax + (Math.abs(kWant) - kMax) * 0.12);
      this.slip = Math.min(1, (aWant - aGrip) / aGrip);
      scrub = m * Math.min(4, (aWant - aGrip) * 0.3);
    }
    const yawTarget = v * k;
    this.yaw += (yawTarget - this.yaw) * (1 - Math.exp(-dt / Pp.yawTau));
    // o pneu derrapando limita a força lateral (o vazio derrapa; o carregado alto tomba)
    const aLat = Math.min(Math.abs(v * this.yaw), aGrip * 1.03);

    // ---- líquido no tanque balança e empurra para fora ----
    let aRollEff = aLat;
    if (Pp.slosh) {
      const w = 2.4, z = 0.12;
      const aIn = v * this.yaw;
      this.sloshV += (-w * w * this.slosh - 2 * z * w * this.sloshV + aIn) * dt;
      this.slosh += this.sloshV * dt;
      aRollEff = Math.min(Math.abs(aIn), aGrip * 1.03) + Math.abs(this.slosh * w * w * 0.35);
    }
    // ---- tombamento (corpo rígido girando sobre as rodas de fora) ----
    // Abaixo do limite só a suspensão inclina. Acima, as rodas internas levantam e o
    // conjunto gira em torno dos pneus externos: se a força lateral cair a tempo ele volta
    // ao chão; se passar do ângulo crítico, a gravidade termina de derrubar.
    this.tipRisk = aRollEff / Pp.aRoll;
    const latSign = Math.sign(v * this.yaw) || this.liftSide;
    const up = this.rollT.phi <= 0 && this.rollR.phi <= 0;
    if (up) this.liftSide = latSign;
    const aSide = aRollEff * (latSign === this.liftSide ? 1 : -1);
    this.susp += (clamp(aSide / Pp.aRoll, -1, 1) - this.susp) * Math.min(1, dt * 5);
    const step = (st, a, b, h, couple) => {
      if (h <= 0) { st.phi = 0; st.w = 0; return 0; }
      if (st.phi <= 0 && a * h + couple <= G0 * b) { st.phi = 0; st.w = 0; return 0; }
      const c = Math.cos(st.phi), sn = Math.sin(st.phi);
      const tau = a * (h * c + b * sn) - G0 * (b * c - h * sn) + couple;
      st.w += (tau / ((h * h + b * b) * 1.3) - st.w * 0.8) * dt;
      st.phi += st.w * dt;
      if (st.phi < 0) { const hit = -st.w; st.phi = 0; st.w = 0; return hit; }
      return 0;
    };
    const kC = 14; // quinta-roda transmite o giro entre cavalo e carreta
    const dT = this.trailer ? Math.max(0, this.rollR.phi - this.rollT.phi) * kC : 0;
    const dR = this.trailer ? Math.max(0, this.rollT.phi - this.rollR.phi) * kC : 0;
    const land = Math.max(step(this.rollT, aSide, Pp.bT, Pp.hT, dT), this.trailer ? step(this.rollR, aSide, Pp.bR, Pp.hR, dR) : 0);
    if (land > 0.15 && this.onWheelsDown) this.onWheelsDown(land);
    this.tip = Math.max(this.rollT.phi, this.rollR.phi);
    this.rollSide = this.liftSide;
    const crit = (b, h) => Math.atan2(b, Math.max(h, 0.1));
    if ((this.rollT.phi > crit(Pp.bT, Pp.hT) + 0.05) || (this.trailer && this.rollR.phi > crit(Pp.bR, Pp.hR) + 0.05)) {
      // passou do ponto: tudo vai ao chão (a carreta arrasta o cavalo pela quinta-roda)
      this.rolled = 1;
      for (const st of [this.rollT, this.rollR]) st.w = Math.max(st.w, 1.0);
      if (!this.trailer) this.rollR.phi = 0;
      else { this.rollT.phi = Math.max(this.rollT.phi, 0.01); this.rollR.phi = Math.max(this.rollR.phi, 0.01); }
      if (this.onRollover) this.onRollover();
      this.sync();
      return;
    }

    R += scrub;
    // integra: resistências levam a velocidade a zero sem inverter; parado, seguram até o limite estático
    if (Math.abs(v) < 0.05 && Math.abs(F) <= R * 1.05) v = 0;
    else {
      const dir = Math.abs(v) >= 0.05 ? Math.sign(v) : Math.sign(F);
      const nv = v + (F / m) * dt;
      const dv = (R / m) * dt;
      v = Math.sign(nv) !== dir && Math.abs(v) >= 0.05 ? nv : Math.abs(nv) <= dv ? 0 : nv - Math.sign(nv) * dv;
    }
    // atolado: patinando sem sair do lugar
    if ((this.sink > 0.4 || deep > 0.2) && Math.abs(v) < 1.3 && (thr > 0.4 || (autoRev && brake > 0.4))) this.stuckT += dt;
    else if (Math.abs(v) > 1.5) this.stuckT = 0;
    this.stuck = this.stuckT > 3;
    // pneu furado puxa para um lado
    if (this.flat && Math.abs(v) > 2) this.h += this.flat * 0.012 * Math.min(1, Math.abs(v) / 15) * dt * Math.sign(v);
    // furos: depende do piso, da velocidade e do excesso de peso
    if (!this.flat && Math.abs(v) > 3) {
      const over = this.cargo ? Math.max(0, this.cargo.t / def.cap - 1) : 0;
      const perKm = (PUNCT[S.key] || 0.004) * (1 + Math.max(0, Math.abs(v) - 20) / 15) * (1 + over * 4);
      if (Math.random() < (perKm * Math.abs(v) * dt) / 1000) this.puncture();
    }
    // consumo de combustível: trabalho do motor / energia útil do diesel + marcha lenta
    if (this.engineOn) {
      const work = Math.max(0, Fdrive * v) * (1 + this.wheelspin);
      const use = (work / Pp.Ej + Pp.idle * (0.6 + this.rpm)) * dt;
      this.fuel = Math.max(0, this.fuel - use);
      if (Math.abs(v) > 1) this.lpm += (use / (Math.abs(v) * dt) - this.lpm) * Math.min(1, dt * 0.02);
    }
    v = Math.min(v, vmax * 1.45);
    v = Math.max(v, -12);
    this.acc = (v - this.v) / Math.max(dt, 1e-3);
    this.v = v;
    this.grade = grade;

    this.h += this.yaw * dt;
    this.x += Math.sin(this.h) * v * dt;
    this.z += Math.cos(this.h) * v * dt;

    // ---- carretas (articulação) ----
    if (this.trailer) {
      const hz = this.hitch;
      const rel = wrap(this.h - this.th);
      let dth = (v * Math.sin(rel) - hz * this.yaw * Math.cos(rel)) / this.trailer.Lk;
      // carreta escorrega (L) se frear forte em curva / lama
      const aTr = Math.abs(v * dth);
      if (aTr > mu * G0 * Pp.trailerMu && Math.abs(v) > 4) dth += Math.sign(rel || 1) * (aTr - mu * G0 * Pp.trailerMu) * 0.02;
      const prevTh = this.th;
      this.th += dth * dt;
      let r = wrap(this.h - this.th);
      if (Math.abs(r) > 1.3) this.th = this.h - Math.sign(r) * 1.3;
      if (this.trailer2) {
        const yaw1 = wrap(this.th - prevTh) / dt;
        const va = v * Math.cos(rel);
        const rel2 = wrap(this.th - this.th2);
        const c = this.trailer.Lk + this.trailer.coupleZ; // engate à frente do eixo da 1ª carreta
        const dth2 = (va * Math.sin(rel2) - c * yaw1 * Math.cos(rel2)) / this.trailer2.Lk;
        this.th2 += dth2 * dt;
        r = wrap(this.th - this.th2);
        if (Math.abs(r) > 1.1) this.th2 = this.th - Math.sign(r) * 1.1;
      }
    }

    this.collide(world, obstacles, dt);

    this.wheelRot += (v * dt) / this.model.wr * (1 + this.wheelspin * 2);
    const ratio = Math.abs(v) / vmax;
    const gear = Math.min(5, Math.floor(ratio * 6));
    const inGear = ratio * 6 - gear;
    this.gear = this.reverse ? 'R' : inp.gear === 'N' ? 'N' : Math.abs(v) < 0.3 ? (inp.gear === 'auto' ? 'N' : 'D') : String(gear + 1);
    const load = Math.max(thr, grade > 0.02 ? 0.7 : 0);
    const rpmT = !this.engineOn ? 0 : Math.abs(v) < 0.3 || inp.gear === 'N' ? 0.18 + thr * 0.5 : 0.3 + inGear * 0.6 * (0.5 + load * 0.5) + this.wheelspin * 0.3;
    this.rpm += (rpmT - this.rpm) * Math.min(1, dt * 6);
    this.shake = (S.shake + (this.flat ? 0.03 : 0) + this.sink * 0.02) * Math.min(1, Math.abs(v) / 12);
    this.sync();
  }

  circles(out) {
    const md = this.model;
    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    out.length = 0;
    for (const s of [md.zf - 0.9, (md.zf + md.rearEnd) / 2, md.rearEnd + 0.9]) out.push({ x: this.x + fx * s, z: this.z + fz * s, r: md.cabW / 2 + 0.1, t: false });
    const addTr = (tr, hx, hz, th) => {
      const tx = Math.sin(th), tz = Math.cos(th);
      for (let s = tr.front - 1.2; s > tr.back + 0.5; s -= 2.4) out.push({ x: hx + tx * s, z: hz + tz * s, r: 1.35, t: true });
      out.push({ x: hx + tx * (tr.back + 1.3), z: hz + tz * (tr.back + 1.3), r: 1.35, t: true });
    };
    if (this.trailer) addTr(this.trailer, this.x + fx * this.hitch, this.z + fz * this.hitch, this.th);
    if (this.trailer2) { const c = this.couple({}); addTr(this.trailer2, c.x, c.z, this.th2); }
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
        if (sp > 20 && Math.random() < 0.3) this.puncture();
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
    // pose visual suavizada: o piso é feito de segmentos retos (rodovia e malha do
    // terreno), então altura e inclinação mudam aos degraus nas emendas. A física
    // usa o valor bruto; o modelo (e a câmera da cabine presa nele) usa o filtrado.
    const sdt = this._sdt || 0;
    this._sdt = 0;
    if (this.vy === undefined || sdt <= 0 || Math.abs(yr - this.vy) > 1.5) { this.vy = yr; this.vpitch = this.pitch; }
    else {
      this.vy += (yr - this.vy) * (1 - Math.exp(-sdt * 22));
      this.vpitch += (this.pitch - this.vpitch) * (1 - Math.exp(-sdt * 10));
    }
    const vyr = this.vy, vyf = vyr + Math.tan(this.vpitch) * md.wb;
    // rolagem da carroceria pela força lateral e tombamento
    const rs = this.rollSide || 1;
    // giro em torno do pneu externo: o centro sobe e desloca para o lado
    const rollAt = (b, phi, susp) => {
      const s = Math.sin(phi), c = Math.cos(phi);
      return { ang: -rs * (phi + susp), lx: rs * b * (1 - c), ly: b * s };
    };
    const P = this.P || {};
    const RT = rollAt(P.bT || 1, this.rollT.phi, phiSusp(this.susp, this.rollT.phi, 0.05));
    const rgt = [Math.cos(this.h), -Math.sin(this.h)]; // eixo x local no mundo
    md.root.position.set(this.x + rgt[0] * RT.lx, vyr + RT.ly, this.z + rgt[1] * RT.lx);
    md.root.rotation.set(-this.vpitch, this.h, RT.ang);
    for (let i = 0; i < md.front.length; i++) {
      const w = md.front[i];
      w.rotation.y = this.steer * (i < 2 ? 1 : 0.6);
      w.children[0].rotation.x = this.wheelRot;
    }
    for (const a of md.rear) a.rotation.x = this.wheelRot;
    const lat = (this.yaw || 0) * this.v;
    const kb = sdt > 0 ? 1 - Math.exp(-sdt * 6) : 0.2;
    md.body.rotation.z += (clamp(-lat * 0.01, -0.06, 0.06) - md.body.rotation.z) * kb;
    md.body.rotation.x += (clamp(-this.acc * 0.006, -0.03, 0.03) - md.body.rotation.x) * kb;
    const placeTr = (tr, hx, hz, hy, th, key) => {
      const ax = hx - Math.sin(th) * tr.Lk, az = hz - Math.cos(th) * tr.Lk;
      const ya = W ? W.heightAt(ax, az) : 0;
      const tp = Math.atan2(hy - ya, tr.Lk);
      this[key] = tp;
      const RR = rollAt(P.bR || 1, this.rollR.phi, phiSusp(this.susp, this.rollR.phi, 0.07));
      const rx = Math.cos(th), rz = -Math.sin(th);
      tr.root.position.set(hx + rx * RR.lx, hy + RR.ly, hz + rz * RR.lx);
      tr.root.rotation.set(-tp, th, RR.ang);
      const rot = this.wheelRot * (md.wr / 0.5);
      for (const a of tr.axles) a.rotation.x = rot;
      return { ya, tp };
    };
    if (this.trailer) {
      const hx = this.x + fx * this.hitch, hz = this.z + fz * this.hitch;
      const yh = vyr + (vyf - vyr) * (this.hitch / md.wb);
      const r1 = placeTr(this.trailer, hx, hz, yh, this.th, 'tpitch');
      if (this.trailer2) {
        const c = this.couple({});
        const yc = yh + (r1.ya - yh) * ((-this.trailer.coupleZ) / this.trailer.Lk);
        placeTr(this.trailer2, c.x, c.z, yc, this.th2, 'tpitch2');
      }
    }
  }
}
