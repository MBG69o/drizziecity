// Tráfego com IA: carros nas grades urbanas e carros/caminhões nas rodovias.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { Builder, mat, G } from './geo.js';
import { CITIES, BLOCK, ROAD_W, cx1, cz1 } from './data.js';
import { tex } from './textures.js';

const RH = ROAD_W / 2;
const COLORS = [0xc0392b, 0x2980b9, 0xecf0f1, 0x2c3e50, 0x7f8c8d, 0xf1c40f, 0x27ae60, 0x8e44ad, 0xd35400, 0x111111, 0xbdc3c7];
let RB = null;

function carGeo(type, color) {
  const b = new Builder(true), lb = new Builder(true);
  RB = RB || new RoundedBoxGeometry(1, 1, 1, 2, 0.18);
  const box = (w, h, d, x, y, z, c, rx = 0) => b.add(G.box(), mat(x, y, z, rx, 0, 0, w, h, d), c);
  const rbox = (w, h, d, x, y, z, c) => b.add(RB, mat(x, y, z, 0, 0, 0, w, h, d), c);
  const glass = 0x1c2833;
  let L = 4.4, W = 1.8, wr = 0.34;
  if (type === 0) { // sedã
    rbox(W, 0.62, L, 0, 0.62, 0, color);
    rbox(W - 0.16, 0.6, 2.3, 0, 1.18, -0.25, glass);
    rbox(W - 0.12, 0.1, 2.0, 0, 1.47, -0.25, color);
  } else if (type === 1) { // SUV
    L = 4.7; W = 1.95; wr = 0.4;
    rbox(W, 0.85, L, 0, 0.8, 0, color);
    rbox(W - 0.1, 0.72, 3.2, 0, 1.55, -0.45, glass);
    rbox(W - 0.06, 0.1, 3.0, 0, 1.92, -0.45, color);
    box(1.2, 0.05, 2.0, 0, 2.0, -0.45, 0x222222);
  } else if (type === 2) { // ônibus
    L = 11.5; W = 2.5; wr = 0.55;
    rbox(W, 2.7, L, 0, 1.8, 0, color);
    box(W + 0.02, 0.95, L - 1.6, 0, 2.35, -0.4, glass);
    box(W - 0.2, 1.3, 0.05, 0, 2.2, L / 2 + 0.01, glass);
    box(W + 0.02, 0.25, L - 0.4, 0, 0.75, 0, 0xffffff);
  } else { // caminhão rígido de entregas
    L = 10.5; W = 2.5; wr = 0.52;
    rbox(W - 0.1, 2.3, 2.1, 0, 2.0, L / 2 - 1.1, color);
    box(W - 0.4, 0.9, 0.05, 0, 2.55, L / 2 - 0.04, glass);
    rbox(W, 2.8, L - 2.6, 0, 2.55, -1.2, 0xf4f4f4);
    box(0.9, 0.3, L - 1, 0, 0.75, -0.3, 0x222222);
  }
  const lbox = (w, h, d, x, y, z, c) => lb.add(G.box(), mat(x, y, z, 0, 0, 0, w, h, d), c);
  const fy = type >= 2 ? 0.9 : 0.72;
  lbox(0.42, 0.16, 0.06, W / 2 - 0.3, fy, L / 2 + 0.01, 0xfff8e1);
  lbox(0.42, 0.16, 0.06, -W / 2 + 0.3, fy, L / 2 + 0.01, 0xfff8e1);
  lbox(0.42, 0.16, 0.06, W / 2 - 0.3, fy + 0.05, -L / 2 - 0.01, 0xff2a1a);
  lbox(0.42, 0.16, 0.06, -W / 2 + 0.3, fy + 0.05, -L / 2 - 0.01, 0xff2a1a);
  const axz = type >= 2 ? [L / 2 - 2.0, -L / 2 + 2.4] : [L / 2 - 0.85, -L / 2 + 0.85];
  for (const s of [-1, 1])
    for (const z of axz) {
      b.add(G.cyl(12), mat(s * (W / 2 - 0.12), wr, z, 0, 0, Math.PI / 2, wr * 2, 0.28, wr * 2), 0x151515);
      b.add(G.cyl(10), mat(s * (W / 2 - 0.02), wr, z, 0, 0, Math.PI / 2, wr * 1.1, 0.06, wr * 1.1), 0xb8bcc0);
    }
  const n0 = b.idx.length, off = b.count;
  for (let i = 0; i < lb.count * 3; i++) { b.pos.push(lb.pos[i]); b.nor.push(lb.nor[i]); b.col.push(lb.col[i]); }
  for (let i = 0; i < lb.count * 2; i++) b.uv.push(lb.uv[i]);
  for (const k of lb.idx) b.idx.push(k + off);
  const geo = b.geometry();
  geo.addGroup(0, n0, 0);
  geo.addGroup(n0, lb.idx.length, 1);
  return { geo, L, W };
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
    const mtl = [new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 90, specular: 0x777777 }), new THREE.MeshBasicMaterial({ vertexColors: true })];
    this.beamMat = new THREE.MeshBasicMaterial({ map: tex.beam(), transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
    const beamG = new THREE.PlaneGeometry(6, 16);
    beamG.rotateX(-Math.PI / 2);
    const geos = {};
    for (let i = 0; i < count; i++) {
      const type = i % 7 === 3 ? 3 : i % 11 === 5 ? 2 : i % 3 === 1 ? 1 : 0;
      const color = type === 2 ? (i % 2 ? 0x1abc9c : 0xf39c12) : COLORS[(i * 7) % COLORS.length];
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
      this.cars.push({ mesh, beam, L: geos[k].L, type, off: type >= 2 ? 7.5 : i % 2 ? 2.5 : 7.5, v: 0, vmax: type >= 2 ? 12 : 12 + (i % 4), x: 1e5, z: 1e5, y: 0, h: 0, stopT: 0, mode: null });
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
    if (q && (!city || Math.random() < 0.45)) {
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
      const target = blocked || car.stopT > 0 ? 0 : cruise;
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
    for (const c of this.cars) c.beam.visible = n > 0.35;
  }

  obstacles(out) {
    out.length = 0;
    for (const c of this.cars) {
      if (!c.mode) continue;
      const fx = Math.sin(c.hh), fz = Math.cos(c.hh);
      const n = c.type >= 2 ? 3 : 2;
      for (let k = 0; k < n; k++) {
        const s = ((k / (n - 1)) - 0.5) * (c.L - 2);
        out.push({ x: c.x + fx * s, z: c.z + fz * s, r: c.type >= 2 ? 1.3 : 1.0, car: c, set hit(v) { this.car.hit = v; } });
      }
    }
    return out;
  }
}
