// Conversor: FBX/OBJ -> GLB otimizado para o jogo (papéis de material, rodas separadas, simplificação)
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { mergeVertices, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshoptSimplifier } from 'meshoptimizer';
window.THREE = THREE;

const lum = (c) => (c ? 0.3 * c.r + 0.59 * c.g + 0.11 * c.b : 0.5);

const CFG = {
  canter: {
    url: 'canter.obj', scale: 1, rotY: -Math.PI / 2, drop: /^$/,
    tire: /16_84/, rim: /16_77/,
    role(mesh) {
      const n = mesh.name;
      const map = { '0_7': 'steel', '1_28': 'steel', '16_64': 'interior', '16_65': 'box', '16_66': 'interior', '16_68': 'interior', '16_69': 'interior', '16_70': 'interior', '16_71': 'steel', '16_72': 'interior', '16_73': 'interior', '16_74': 'dark', '16_75': 'dark', '16_76': 'dark', '16_78': 'amber', '16_79': 'paint', '16_80': 'steel', '16_81': 'dark', '16_82': 'dark', '16_83': 'LAMPS' };
      for (const k in map) if (n.includes('mesh_' + k + '.')) return map[k];
      return 'steel';
    },
  },
  labo: {
    url: 'labo.fbx', scale: 0.01, rotY: Math.PI / 2, drop: /^(Box|Shape|Cylinder0(2[7-9]|3[01]))/,
    wheelNames: /^wheel01[7-9]|^wheel020/,
    role(mesh, mat) {
      const m = (mat && mat.name) || '';
      if (/Glass|windscreen/i.test(m)) return 'glass';
      if (/LIGHT_A_TAIL/.test(m)) return 'red';
      if (/LIGHT_ON/.test(m)) return 'lamp';
      if (/^MAD/.test(m)) return 'rubber';
      if (/Material #121/.test(m)) return 'paint';
      if (/^MAINBODY\.1/.test(m)) return 'steel';
      if (/^MAINBODY/.test(m)) return 'paint';
      if (/Material #109|__DEFAULT/.test(m)) return 'steel';
      if (/^wheel021/.test(mesh.name)) return lum(mat.color) > 0.45 ? 'rim' : 'rubber';
      return lum(mat && mat.color) > 0.55 ? 'chrome' : 'dark';
    },
  },
};

function bucket() { return { p: [], n: [] }; }

window.convert = async (key, opts) => {
  const cfg = CFG[key];
  const o = cfg.url.endsWith('.fbx') ? await new FBXLoader().loadAsync(cfg.url) : await new OBJLoader().loadAsync(cfg.url);
  o.updateMatrixWorld(true);
  const R = new THREE.Matrix4().makeRotationY(cfg.rotY).multiply(new THREE.Matrix4().makeScale(cfg.scale, cfg.scale, cfg.scale));
  const body = {};
  const tireTris = [], rimTris = []; // {p:[9], n:[9], c:[3]}
  const wheelsNamed = {}; // labo
  const v = new THREE.Vector3(), nn = new THREE.Vector3(), nm = new THREE.Matrix3();
  o.traverse((mesh) => {
    if (!mesh.isMesh || cfg.drop.test(mesh.name)) return;
    const g = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry;
    const M = R.clone().multiply(mesh.matrixWorld);
    nm.getNormalMatrix(M);
    const pos = g.attributes.position, nor = g.attributes.normal;
    const mats = [].concat(mesh.material);
    const groups = g.groups.length ? g.groups : [{ start: 0, count: pos.count, materialIndex: 0 }];
    for (const gr of groups) {
      const mat = mats[gr.materialIndex] || mats[0];
      let role = cfg.role(mesh, mat);
      const isTire = cfg.tire && cfg.tire.test(mesh.name), isRim = cfg.rim && cfg.rim.test(mesh.name);
      const named = cfg.wheelNames && cfg.wheelNames.test(mesh.name);
      for (let i = gr.start; i < gr.start + gr.count; i += 3) {
        const P = [], N = [];
        for (let k = 0; k < 3; k++) {
          v.fromBufferAttribute(pos, i + k).applyMatrix4(M); P.push(v.x, v.y, v.z);
          if (nor) { nn.fromBufferAttribute(nor, i + k).applyMatrix3(nm).normalize(); N.push(nn.x, nn.y, nn.z); } else N.push(0, 1, 0);
        }
        const c = [(P[0] + P[3] + P[6]) / 3, (P[1] + P[4] + P[7]) / 3, (P[2] + P[5] + P[8]) / 3];
        const tri = { P, N, c };
        if (isTire) { tireTris.push(tri); continue; }
        if (isRim) { rimTris.push(tri); continue; }
        if (named) { (wheelsNamed[mesh.name] = wheelsNamed[mesh.name] || []).push({ ...tri, role: lum(mat.color) > 0.45 ? 'rim' : 'rubber' }); continue; }
        let r = role;
        if (r === 'LAMPS') r = null; // decidido depois (posição)
        tri.role = r;
        (body[r || 'LAMPS'] = body[r || 'LAMPS'] || []).push(tri);
      }
    }
  });

  // ---- rodas ----
  let wheels = [];
  if (Object.keys(wheelsNamed).length) {
    for (const name in wheelsNamed) {
      const tris = wheelsNamed[name];
      const bb = new THREE.Box3();
      for (const t of tris) for (let k = 0; k < 9; k += 3) bb.expandByPoint(v.set(t.P[k], t.P[k + 1], t.P[k + 2]));
      wheels.push({ tris, bb });
    }
  } else {
    // agrupa os pneus por eixo (z) e lado (x)
    const zs = tireTris.map((t) => t.c[2]).sort((a, b) => a - b);
    let za = zs[0], zb = zs[zs.length - 1];
    for (let it = 0; it < 10; it++) {
      let sa = 0, na = 0, sb = 0, nb = 0;
      for (const z of zs) if (Math.abs(z - za) < Math.abs(z - zb)) { sa += z; na++; } else { sb += z; nb++; }
      za = sa / na; zb = sb / nb;
    }
    const cl = {};
    let xs0 = Infinity, xs1 = -Infinity;
    for (const t of tireTris) { xs0 = Math.min(xs0, t.c[0]); xs1 = Math.max(xs1, t.c[0]); }
    const xm = (xs0 + xs1) / 2;
    for (const t of tireTris) {
      const key = (Math.abs(t.c[2] - za) < Math.abs(t.c[2] - zb) ? 'a' : 'b') + (t.c[0] > xm ? 'L' : 'R');
      (cl[key] = cl[key] || []).push({ ...t, role: 'rubber' });
    }
    for (const key in cl) {
      const bb = new THREE.Box3();
      for (const t of cl[key]) for (let k = 0; k < 9; k += 3) bb.expandByPoint(v.set(t.P[k], t.P[k + 1], t.P[k + 2]));
      wheels.push({ tris: cl[key], bb });
    }
    for (const t of rimTris) {
      let best = null, bd = 1e9;
      for (const w of wheels) {
        const c = w.bb.getCenter(new THREE.Vector3()), r = (w.bb.max.y - w.bb.min.y) / 2;
        const d = Math.hypot(t.c[1] - c.y, t.c[2] - c.z);
        const inX = t.c[0] > w.bb.min.x - 0.25 && t.c[0] < w.bb.max.x + 0.25;
        if (d < r * 1.02 && inX && d < bd) { bd = d; best = w; }
      }
      if (best) best.tris.push({ ...t, role: 'rim' });
      else (body.steel = body.steel || []).push({ ...t, role: 'steel' });
    }
  }
  // dados das rodas
  for (const w of wheels) {
    w.c = w.bb.getCenter(new THREE.Vector3());
    w.r = (w.bb.max.y - w.bb.min.y) / 2;
    if (cfg.wheelNames) for (const t of w.tris) t.role = Math.hypot(t.c[1] - w.c.y, t.c[2] - w.c.z) < w.r * 0.66 ? 'rim' : 'rubber';
  }
  const ground = Math.min(...wheels.map((w) => w.bb.min.y));
  const zFront = Math.max(...wheels.map((w) => w.c.z)), zRear = Math.min(...wheels.map((w) => w.c.z));
  const front = wheels.filter((w) => Math.abs(w.c.z - zFront) < 0.3), rear = wheels.filter((w) => Math.abs(w.c.z - zRear) < 0.3);
  const xMid = (Math.max(...wheels.map((w) => w.bb.max.x)) + Math.min(...wheels.map((w) => w.bb.min.x))) / 2;
  const off = new THREE.Vector3(-xMid, -ground, -zRear);

  // lâmpadas por posição
  const allZ = [];
  for (const r in body) for (const t of body[r]) allZ.push(t.c[2]);
  const zMax = Math.max(...allZ), zMin = Math.min(...allZ);
  for (const t of body.LAMPS || []) {
    t.role = t.c[2] > zMax - 0.6 ? (t.c[1] - ground > 0.62 ? 'lamp' : 'amber') : t.c[2] < zMin + 0.6 ? 'red' : 'amber';
    (body[t.role] = body[t.role] || []).push(t);
  }
  delete body.LAMPS;

  // ---- simplificação ----
  await MeshoptSimplifier.ready;
  const stats = {};
  const build = (tris, shift, ratio, name) => {
    const n = tris.length;
    const pos = new Float32Array(n * 9), nor = new Float32Array(n * 9);
    tris.forEach((t, i) => {
      for (let k = 0; k < 9; k += 3) {
        pos[i * 9 + k] = t.P[k] + shift.x; pos[i * 9 + k + 1] = t.P[k + 1] + shift.y; pos[i * 9 + k + 2] = t.P[k + 2] + shift.z;
      }
      nor.set(t.N, i * 9);
    });
    let g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g = mergeVertices(g, 2e-4); // solda só pela posição
    const idx = new Uint32Array(g.index.array);
    const target = Math.max(36, Math.floor((idx.length * ratio) / 3) * 3);
    let out = idx;
    if (ratio < 1) {
      const err = opts.err[name] ?? opts.err.default;
      [out] = MeshoptSimplifier.simplify(idx, g.attributes.position.array, 3, target, err, []);
    }
    const gp = g.attributes.position.array;
    const flat = new Float32Array(out.length * 3);
    for (let i = 0; i < out.length; i++) flat.set(gp.subarray(out[i] * 3, out[i] * 3 + 3), i * 3);
    let r = new THREE.BufferGeometry();
    r.setAttribute('position', new THREE.BufferAttribute(flat, 3));
    r = toCreasedNormals(r, (opts.crease || 40) * Math.PI / 180);
    r = mergeVertices(r, 1e-4);
    stats[name] = [n, out.length / 3];
    return r;
  };
  const ratios = opts.ratios;
  const scene = new THREE.Scene();
  const root = new THREE.Group();
  root.name = key;
  scene.add(root);
  const matOf = (role) => new THREE.MeshStandardMaterial({ name: role, color: 0xcccccc });
  for (const role in body) {
    const m = new THREE.Mesh(build(body[role], off, ratios[role] ?? ratios.default, role), matOf(role));
    m.name = role;
    root.add(m);
  }
  const tag = (w) => (Math.abs(w.c.z - zFront) < 0.3 ? 'F' : 'R') + (w.c.x > xMid ? 'L' : 'R');
  const wheelInfo = wheels.map((w) => {
    const c = w.c.clone().add(off);
    const rubber = w.tris.filter((t) => t.role === 'rubber');
    const bbx = new THREE.Box3();
    for (const t of rubber) for (let k = 0; k < 9; k += 3) bbx.expandByPoint(v.set(t.P[k], t.P[k + 1], t.P[k + 2]));
    const width = bbx.max.x - bbx.min.x;
    return { tag: tag(w), x: +c.x.toFixed(3), y: +c.y.toFixed(3), z: +c.z.toFixed(3), r: +w.r.toFixed(3), w: +width.toFixed(3) };
  });
  const bbAll = new THREE.Box3().setFromObject(root);
  root.userData = {
    wb: zFront - zRear, wr: front[0].r, wheels: wheelInfo,
    zFront: bbAll.max.z, zRear: bbAll.min.z, width: bbAll.max.x - bbAll.min.x, height: bbAll.max.y,
  };
  const glb = await new GLTFExporter().parseAsync(scene, { binary: true });
  const bytes = new Uint8Array(glb);
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return { b64: btoa(bin), stats, meta: root.userData, wheels: wheelInfo };
};
