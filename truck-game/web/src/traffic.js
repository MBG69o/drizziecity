// Tráfego de veículos controlados por IA (mão direita, curvas suaves).
import * as THREE from 'three';
import { Builder, mat, G } from './geo.js';
import { GRID, roadCoord, ROAD_W } from './data.js';
import { tex } from './textures.js';

const RH = ROAD_W / 2;
const COLORS = [0xc0392b, 0x2980b9, 0xecf0f1, 0x2c3e50, 0x7f8c8d, 0xf1c40f, 0x27ae60, 0x8e44ad, 0xd35400, 0x111111];

function carGeo(type, color) {
  const b = new Builder(true);
  const lb = new Builder(true);
  const box = (w, h, d, x, y, z, c, rx = 0) => b.add(G.box(), mat(x, y, z, rx, 0, 0, w, h, d), c);
  const glass = 0x1c2833;
  let L = 4.4, W = 1.8;
  if (type === 0) { // sedã
    box(W, 0.7, L, 0, 0.65, 0, color);
    box(W - 0.15, 0.6, 2.2, 0, 1.3, -0.2, glass);
    box(W - 0.1, 0.08, 2.0, 0, 1.63, -0.2, color);
  } else if (type === 1) { // SUV / van
    L = 4.8; W = 1.95;
    box(W, 0.9, L, 0, 0.8, 0, color);
    box(W - 0.1, 0.75, 3.4, 0, 1.6, -0.5, glass);
    box(W - 0.05, 0.08, 3.3, 0, 2.0, -0.5, color);
  } else { // ônibus
    L = 11.5; W = 2.5;
    box(W, 2.6, L, 0, 1.75, 0, color);
    box(W + 0.02, 0.9, L - 1.5, 0, 2.3, -0.4, glass);
    box(W - 0.2, 1.2, 0.05, 0, 2.2, L / 2 + 0.01, glass);
  }
  const lbox = (w, h, d, x, y, z, c) => lb.add(G.box(), mat(x, y, z, 0, 0, 0, w, h, d), c);
  lbox(0.42, 0.16, 0.06, W / 2 - 0.3, 0.75, L / 2 + 0.01, 0xfff8e1);
  lbox(0.42, 0.16, 0.06, -W / 2 + 0.3, 0.75, L / 2 + 0.01, 0xfff8e1);
  lbox(0.42, 0.16, 0.06, W / 2 - 0.3, 0.8, -L / 2 - 0.01, 0xff2a1a);
  lbox(0.42, 0.16, 0.06, -W / 2 + 0.3, 0.8, -L / 2 - 0.01, 0xff2a1a);
  const wr = type === 2 ? 0.55 : 0.34;
  for (const s of [-1, 1])
    for (const z of [L / 2 - (type === 2 ? 2.2 : 0.85), -L / 2 + (type === 2 ? 2.5 : 0.85)])
      b.add(G.cyl(10), mat(s * (W / 2 - 0.1), wr, z, 0, 0, Math.PI / 2, wr * 2, 0.26, wr * 2), 0x151515);
  // corpo + luzes em grupos (luzes sem sombreamento = acesas)
  const n0 = b.idx.length;
  const off = b.count;
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
  constructor(scene, count) {
    this.scene = scene;
    this.cars = [];
    const mtl = [new THREE.MeshPhongMaterial({ vertexColors: true, shininess: 70, specular: 0x555555 }), new THREE.MeshBasicMaterial({ vertexColors: true })];
    this.beamMat = new THREE.MeshBasicMaterial({ map: tex.beam(), transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending });
    const beamG = new THREE.PlaneGeometry(6, 16);
    beamG.rotateX(-Math.PI / 2);
    const geos = {};
    for (let i = 0; i < count; i++) {
      const type = i % 9 === 4 ? 2 : i % 3 === 1 ? 1 : 0;
      const color = type === 2 ? (i % 2 ? 0x1abc9c : 0xf39c12) : COLORS[(i * 7) % COLORS.length];
      const k = type + '_' + color;
      if (!geos[k]) geos[k] = carGeo(type, color);
      const mesh = new THREE.Mesh(geos[k].geo, mtl);
      mesh.castShadow = true;
      const beam = new THREE.Mesh(beamG, this.beamMat);
      beam.position.set(0, 0.09, geos[k].L / 2 + 8);
      beam.visible = false;
      mesh.add(beam);
      scene.add(mesh);
      const car = { mesh, beam, L: geos[k].L, type, off: type === 2 ? 7.5 : i % 2 ? 2.5 : 7.5, v: 0, vmax: type === 2 ? 11 : 12 + (i % 4), x: 0, z: 0, h: 0, stopT: 0 };
      this.cars.push(car);
    }
    this.p = { x: 0, z: 0 };
    this.q = { x: 0, z: 0 };
  }

  node(i, j) { return { i, j, x: roadCoord(i), z: roadCoord(j) }; }

  spawnNear(car, px, pz, minD, maxD) {
    for (let tries = 0; tries < 30; tries++) {
      const i = (Math.random() * (GRID + 1)) | 0, j = (Math.random() * (GRID + 1)) | 0;
      const A = this.node(i, j);
      const nb = this.neighbors(A).filter(() => true);
      const B = nb[(Math.random() * nb.length) | 0];
      const mx = (A.x + B.x) / 2, mz = (A.z + B.z) / 2;
      const d = Math.hypot(mx - px, mz - pz);
      if (d < minD || d > maxD) continue;
      car.A = A; car.B = B;
      this.makeStraight(car);
      car.s = Math.random() * car.seg.len * 0.8;
      car.v = car.vmax * 0.6;
      car.stopT = 0;
      return;
    }
  }

  neighbors(n) {
    const out = [];
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const i = n.i + di, j = n.j + dj;
      if (i >= 0 && j >= 0 && i <= GRID && j <= GRID) out.push(this.node(i, j));
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
    const len = straight ? ROAD_W : Math.hypot(p2.x - p0.x, p2.z - p0.z) * 1.15;
    car.seg = { p0, p1, p2, len, turn: !straight };
    car.next = { A: B, B: C };
  }

  update(dt, rig, playerCircles) {
    const P = this.p, Q = this.q;
    for (const car of this.cars) {
      if (!car.seg) { this.spawnNear(car, rig.x, rig.z, 120, 420); continue; }
      const dp = Math.hypot(car.x - rig.x, car.z - rig.z);
      if (dp > 520) { this.spawnNear(car, rig.x, rig.z, 180, 420); continue; }

      // percepção: algo à frente?
      const fx = Math.sin(car.h), fz = Math.cos(car.h);
      let blocked = false;
      const look = 9 + car.v * 1.2 + car.L / 2;
      const check = (x, z, r) => {
        const dx = x - car.x, dz = z - car.z;
        const ahead = dx * fx + dz * fz;
        if (ahead <= 0 || ahead > look + r) return;
        const lat = Math.abs(dx * fz - dz * fx);
        if (lat < 1.6 + r) blocked = true;
      };
      for (const c of playerCircles) check(c.x, c.z, c.r);
      if (!blocked) for (const o of this.cars) if (o !== car && o.seg) check(o.x, o.z, o.L * 0.35);
      if (car.hit) { car.stopT = 2.5; car.hit = false; }
      car.stopT -= dt;
      const target = blocked || car.stopT > 0 ? 0 : car.seg.turn ? 6 : car.vmax;
      const acc = target > car.v ? 2.5 : 7;
      car.v += Math.sign(target - car.v) * Math.min(Math.abs(target - car.v), acc * dt);

      car.s += car.v * dt;
      while (car.s >= car.seg.len) {
        car.s -= car.seg.len;
        if (car.seg.turn !== undefined && car.next && car.inTurn) {
          car.A = car.next.A; car.B = car.next.B; car.next = null; car.inTurn = false;
          this.makeStraight(car);
        } else {
          this.makeTurn(car);
          car.inTurn = true;
        }
      }
      const t = car.s / car.seg.len;
      bez(car.seg.p0, car.seg.p1, car.seg.p2, t, P);
      bez(car.seg.p0, car.seg.p1, car.seg.p2, Math.min(1, t + 0.02), Q);
      if (Math.hypot(Q.x - P.x, Q.z - P.z) > 1e-4) car.h = Math.atan2(Q.x - P.x, Q.z - P.z);
      car.x = P.x; car.z = P.z;
      car.mesh.position.set(car.x, 0, car.z);
      car.mesh.rotation.y = car.h;
    }
  }

  setNight(n) {
    for (const c of this.cars) c.beam.visible = n > 0.35;
  }

  // círculos de colisão para o caminhão do jogador
  obstacles(out) {
    out.length = 0;
    for (const c of this.cars) {
      if (!c.seg) continue;
      const fx = Math.sin(c.h), fz = Math.cos(c.h);
      const n = c.type === 2 ? 3 : 2;
      for (let k = 0; k < n; k++) {
        const s = ((k / (n - 1)) - 0.5) * (c.L - 2);
        out.push({ x: c.x + fx * s, z: c.z + fz * s, r: c.type === 2 ? 1.3 : 1.0, car: c, set hit(v) { this.car.hit = v; } });
      }
    }
    return out;
  }
}
