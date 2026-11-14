// Construção do mapa: cidade, zonas, rodovias, locais de carga, vegetação.
import * as THREE from 'three';
import { Builder, mat, G } from './geo.js';
import { tex } from './textures.js';
import { BLOCK, ROAD_W, GRID, HALF, roadCoord, zoneOf, LOCATIONS } from './data.js';

const RH = ROAD_W / 2;

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export class World {
  constructor(scene, quality) {
    this.scene = scene;
    this.q = quality;
    this.colliders = [];
    this.cell = 70;
    this.grid = new Map();
    this.depots = {};
    this.animated = [];
    this.build();
  }

  addCollider(x0, z0, x1, z1) {
    const c = { x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) };
    this.colliders.push(c);
    const s = this.cell;
    for (let gx = Math.floor(c.x0 / s); gx <= Math.floor(c.x1 / s); gx++)
      for (let gz = Math.floor(c.z0 / s); gz <= Math.floor(c.z1 / s); gz++) {
        const k = gx * 1000 + gz;
        if (!this.grid.has(k)) this.grid.set(k, []);
        this.grid.get(k).push(c);
      }
  }

  // Empurra um círculo para fora de colisores; retorna profundidade
  resolveCircle(p, r, out) {
    let hit = 0;
    out.x = 0; out.z = 0;
    const lim = HALF + RH - r;
    if (p.x < -lim) { out.x += -lim - p.x; hit = Math.max(hit, -lim - p.x); }
    if (p.x > lim) { out.x += lim - p.x; hit = Math.max(hit, p.x - lim); }
    if (p.z < -lim) { out.z += -lim - p.z; hit = Math.max(hit, -lim - p.z); }
    if (p.z > lim) { out.z += lim - p.z; hit = Math.max(hit, p.z - lim); }
    const s = this.cell;
    const gx = Math.floor(p.x / s), gz = Math.floor(p.z / s);
    for (let ix = gx - 1; ix <= gx + 1; ix++)
      for (let iz = gz - 1; iz <= gz + 1; iz++) {
        const list = this.grid.get(ix * 1000 + iz);
        if (!list) continue;
        for (const c of list) {
          const px = p.x + out.x, pz = p.z + out.z;
          const cx = Math.max(c.x0, Math.min(px, c.x1));
          const cz = Math.max(c.z0, Math.min(pz, c.z1));
          const dx = px - cx, dz = pz - cz;
          const d2 = dx * dx + dz * dz;
          if (d2 < r * r) {
            if (d2 > 1e-6) {
              const d = Math.sqrt(d2);
              const pen = r - d;
              out.x += (dx / d) * pen; out.z += (dz / d) * pen;
              hit = Math.max(hit, pen);
            } else {
              // centro dentro da caixa: sai pelo lado mais próximo
              const l = px - c.x0, rr = c.x1 - px, t = pz - c.z0, b = c.z1 - pz;
              const m = Math.min(l, rr, t, b);
              if (m === l) out.x -= l + r; else if (m === rr) out.x += rr + r;
              else if (m === t) out.z -= t + r; else out.z += b + r;
              hit = Math.max(hit, m + r);
            }
          }
        }
      }
    return hit;
  }

  build() {
    const q = this.q;
    const lam = (map, extra = {}) => new THREE.MeshLambertMaterial({ map, ...extra });
    const M = {
      grass: lam(tex.grass()),
      road: lam(tex.road()),
      inter: lam(tex.intersection()),
      concrete: lam(tex.concrete()),
      lot: lam(tex.lot()),
      field: lam(tex.field()),
      sand: lam(tex.sand()),
      roof: lam(tex.roof()),
      tiles: lam(tex.tiles()),
      wh: lam(tex.warehouse(), { vertexColors: true }),
      f: [0, 1, 2, 3].map((i) => new THREE.MeshPhongMaterial({ map: tex.facade(i), shininess: i === 0 || i === 3 ? 60 : 8, specular: i === 0 || i === 3 ? 0x555555 : 0x111111 })),
      flat: new THREE.MeshLambertMaterial({ vertexColors: true }),
      metal: new THREE.MeshPhongMaterial({ map: tex.metal(), vertexColors: true, shininess: 50, specular: 0x666666 }),
      cont: lam(tex.container(0xdddddd), { vertexColors: true }),
      bark: lam(tex.bark()),
      leaf: lam(tex.foliage()),
    };
    this.M = M;
    const B = {
      grass: new Builder(), road: new Builder(), inter: new Builder(), concrete: new Builder(),
      lot: new Builder(), field: new Builder(), sand: new Builder(), roof: new Builder(), tiles: new Builder(),
      wh: new Builder(true), f: [new Builder(), new Builder(), new Builder(), new Builder()],
      flat: new Builder(true), metal: new Builder(true), cont: new Builder(true),
    };
    this.B = B;
    this.trees = [];
    this.lamps = [];
    const r = rng(1234);
    this.r = r;

    // Solo externo
    const E = 2600;
    B.grass.ground(-E, -E, E, HALF + 40, -0.02, 14);
    B.sand.ground(-E, HALF + 40, E, HALF + 75, -0.02, 10);

    // Ruas e cruzamentos
    for (let i = 0; i <= GRID; i++) {
      const c = roadCoord(i);
      for (let j = 0; j < GRID; j++) {
        const a = roadCoord(j) + RH, b = roadCoord(j + 1) - RH;
        // rua no eixo Z (vertical): textura com linhas ao longo do comprimento
        B.road.quad([c - RH, 0.02, b], [c + RH, 0.02, b], [c + RH, 0.02, a], [c - RH, 0.02, a], [0, 1, 0],
          [0, 0, 1, 0, 1, (b - a) / ROAD_W, 0, (b - a) / ROAD_W]);
        // rua no eixo X (horizontal)
        B.road.quad([a, 0.02, c + RH], [b, 0.02, c + RH], [b, 0.02, c - RH], [a, 0.02, c - RH], [0, 1, 0],
          [0, 0, 0, (b - a) / ROAD_W, 1, (b - a) / ROAD_W, 1, 0]);
      }
      for (let j = 0; j <= GRID; j++) {
        const z = roadCoord(j);
        B.inter.quad([c - RH, 0.025, z + RH], [c + RH, 0.025, z + RH], [c + RH, 0.025, z - RH], [c - RH, 0.025, z - RH], [0, 1, 0], [0, 0, 1, 0, 1, 1, 0, 1]);
      }
    }
    // Acostamento/meio-fio externo do anel
    const o = HALF + RH;
    B.concrete.walls(-o - 3, -0.1, -o - 3, o + 3, 0.25, o + 3, 4, 4);

    const depotAt = {};
    for (const L of LOCATIONS) depotAt[L.bx + ',' + L.bz] = L;

    for (let bx = 0; bx < GRID; bx++)
      for (let bz = 0; bz < GRID; bz++) {
        const x0 = roadCoord(bx) + RH, x1 = roadCoord(bx + 1) - RH;
        const z0 = roadCoord(bz) + RH, z1 = roadCoord(bz + 1) - RH;
        const L = depotAt[bx + ',' + bz];
        if (L) this.buildDepot(L, x0, z0, x1, z1);
        else this.buildBlock(zoneOf(bx, bz), bx, bz, x0, z0, x1, z1);
      }

    this.buildOutskirts();

    // Água (mar ao sul)
    const water = new THREE.Mesh(new THREE.PlaneGeometry(2 * E, 2000), new THREE.MeshPhongMaterial({ map: tex.water(), shininess: 90, specular: 0x88aacc, transparent: true, opacity: 0.93 }));
    water.material.map = water.material.map.clone();
    water.material.map.needsUpdate = true;
    water.material.map.repeat.set(2 * E / 30, 2000 / 30);
    water.rotation.x = -Math.PI / 2;
    water.position.set(0, 0.05, HALF + 72 + 1000);
    this.water = water;
    this.scene.add(water);

    // Monta os meshes estáticos
    const add = (b, m, cast = false) => {
      const mesh = b.mesh(m, { cast });
      if (mesh) this.scene.add(mesh);
    };
    add(B.grass, M.grass); add(B.road, M.road); add(B.inter, M.inter); add(B.concrete, M.concrete);
    add(B.lot, M.lot); add(B.field, M.field); add(B.sand, M.sand); add(B.roof, M.roof);
    add(B.tiles, M.tiles, true); add(B.wh, M.wh, true); add(B.flat, M.flat, true);
    add(B.metal, M.metal, true); add(B.cont, M.cont, true);
    B.f.forEach((b, i) => add(b, M.f[i], true));
    this.buildTrees();
    this.buildLamps();
    this.B = null;
  }

  sidewalk(x0, z0, x1, z1, inner) {
    const B = this.B;
    B.concrete.walls(x0, 0, z0, x1, 0.22, z1, 4, 4);
    B.concrete.top(x0, z0, x1, z0 + 4, 0.22, 4);
    B.concrete.top(x0, z1 - 4, x1, z1, 0.22, 4);
    B.concrete.top(x0, z0 + 4, x0 + 4, z1 - 4, 0.22, 4);
    B.concrete.top(x1 - 4, z0 + 4, x1, z1 - 4, 0.22, 4);
    const ib = inner || B.grass;
    ib.ground(x0 + 4, z0 + 4, x1 - 4, z1 - 4, 0.21, inner === B.field ? 30 : 14);
  }

  tree(x, z, s = 1, kind = 0) {
    this.trees.push({ x, z, s: s * (0.8 + this.r() * 0.5), k: kind, rot: this.r() * 6.28 });
  }

  building(x0, z0, x1, z1, h, style) {
    const B = this.B;
    const u = this.r() > 0.5 ? 0.5 : 0;
    B.f[style].walls(x0, 0.2, z0, x1, h, z1, 8, 7, u);
    B.roof.top(x0, z0, x1, z1, h, 6);
    // platibanda e casa de máquinas
    B.flat.walls(x0, h, z0, x1, h + 0.8, z1, 1, 1, 0, 0x8d8d8d);
    if (h > 14 && this.r() > 0.3) {
      const w = (x1 - x0) * 0.3, d = (z1 - z0) * 0.3, cx = (x0 + x1) / 2 + (this.r() - 0.5) * 4, cz = (z0 + z1) / 2;
      B.flat.box(cx - w / 2, h, cz - d / 2, cx + w / 2, h + 3, cz + d / 2, 1, 0xa0a0a0);
    }
  }

  house(x0, z0, x1, z1, h, color) {
    const B = this.B;
    B.flat.walls(x0, 0.2, z0, x1, h, z1, 1, 1, 0, color);
    // janelas e porta
    const cx = (x0 + x1) / 2;
    B.flat.quad([cx - 0.6, 0.2, z1 + 0.02], [cx + 0.6, 0.2, z1 + 0.02], [cx + 0.6, 2.4, z1 + 0.02], [cx - 0.6, 2.4, z1 + 0.02], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], 0x5a3a22);
    for (const wx of [x0 + 1.6, x1 - 2.8]) {
      B.flat.quad([wx, 1.2, z1 + 0.02], [wx + 1.2, 1.2, z1 + 0.02], [wx + 1.2, 2.4, z1 + 0.02], [wx, 2.4, z1 + 0.02], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2c3e50);
      B.flat.quad([wx + 1.2, 1.2, z0 - 0.02], [wx, 1.2, z0 - 0.02], [wx, 2.4, z0 - 0.02], [wx + 1.2, 2.4, z0 - 0.02], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2c3e50);
    }
    // telhado de duas águas (ao longo de X)
    const rh = 2.2, ov = 0.4, mz = (z0 + z1) / 2;
    const a = x0 - ov, b = x1 + ov, zz0 = z0 - ov, zz1 = z1 + ov;
    const sl = Math.hypot(rh, mz - zz0);
    const ny = (mz - zz0) / sl, nz = rh / sl;
    const U = (b - a) / 3, V = sl / 3;
    B.tiles.quad([a, h, zz1], [b, h, zz1], [b, h + rh, mz], [a, h + rh, mz], [0, ny, nz], [0, 0, U, 0, U, V, 0, V]);
    B.tiles.quad([b, h, zz0], [a, h, zz0], [a, h + rh, mz], [b, h + rh, mz], [0, ny, -nz], [0, 0, U, 0, U, V, 0, V]);
    B.flat.quad([x0, h, z0], [x0, h, z1], [x0, h + rh, mz], [x0, h + rh, mz], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], color);
    B.flat.quad([x1, h, z1], [x1, h, z0], [x1, h + rh, mz], [x1, h + rh, mz], [1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], color);
  }

  tank(x, z, rad, h, color = 0xe8e8e8) {
    this.B.metal.add(G.cyl(20), mat(x, h / 2, z, 0, 0, 0, rad * 2, h, rad * 2), color, 1);
    this.B.metal.add(G.cone(20), mat(x, h + rad * 0.2, z, 0, 0, 0, rad * 2.02, rad * 0.4, rad * 2.02), color);
  }

  chimney(x, z, rad, h, color = 0x9a8f86) {
    this.B.flat.add(G.cyl(14), mat(x, h / 2, z, 0, 0, 0, rad * 2, h, rad * 2), color);
    this.B.flat.add(G.cyl(14), mat(x, h - 3, z, 0, 0, 0, rad * 2.1, 1.2, rad * 2.1), 0xc0392b);
    this.B.flat.add(G.cyl(14), mat(x, h - 6, z, 0, 0, 0, rad * 2.1, 1.2, rad * 2.1), 0xf0f0f0);
  }

  containerStack(x, z, rot, rows, cols, levels) {
    const colors = [0xc0392b, 0x2471a3, 0x1e8449, 0xd68910, 0x7d3c98, 0x839192, 0xa04000, 0x117a65];
    for (let i = 0; i < rows; i++)
      for (let j = 0; j < cols; j++) {
        const lv = 1 + ((this.r() * levels) | 0);
        for (let k = 0; k < lv; k++) {
          const lx = (i - (rows - 1) / 2) * 2.6, lz = (j - (cols - 1) / 2) * 12.6;
          const c = Math.cos(rot), s = Math.sin(rot);
          this.B.cont.add(G.box(), mat(x + lx * c + lz * s, 1.3 + k * 2.6, z - lx * s + lz * c, 0, rot, 0, 2.44, 2.59, 12.2), colors[(this.r() * colors.length) | 0]);
        }
      }
  }

  crane(x, z, h, rot) {
    const B = this.B;
    const y = 0xf1c40f;
    B.flat.add(G.box(), mat(x, h / 2, z, 0, 0, 0, 1.6, h, 1.6), y);
    const c = Math.cos(rot), s = Math.sin(rot);
    B.flat.add(G.box(), mat(x + s * 12, h + 0.8, z + c * 12, 0, rot, 0, 1.2, 1.2, 44), y);
    B.flat.add(G.box(), mat(x - s * 8, h - 0.6, z - c * 8, 0, rot, 0, 2.2, 2, 4), 0x7f8c8d);
    B.flat.add(G.box(), mat(x, h + 3, z, 0, 0, 0, 1, 6, 1), y);
    B.flat.add(G.box(), mat(x + s * 1.5, h - 1.2, z + c * 1.5, 0, rot, 0, 2.4, 2.4, 2.4), 0x34495e);
  }

  turbine(x, z, h = 48, s = 1) {
    const B = this.B;
    B.flat.add(G.cyl(14), mat(x, (h * s) / 2, z, 0, 0, 0, 2.2 * s, h * s, 2.2 * s), 0xf4f6f7);
    B.flat.add(G.box(), mat(x, h * s + 1, z - 1, 0, 0, 0, 2.2 * s, 2.4 * s, 6 * s), 0xeaeded);
    if (!this.rotorGeo) {
      const rb = new Builder();
      const blade = new THREE.BoxGeometry(1.4, 22, 0.4);
      blade.translate(0, 11, 0);
      for (let i = 0; i < 3; i++) rb.add(blade, mat(0, 0, 0, 0, 0, (i * Math.PI * 2) / 3));
      rb.add(G.sphere(), mat(0, 0, 0, 0, 0, 0, 2, 2, 2));
      this.rotorGeo = rb.geometry();
      this.rotorMat = new THREE.MeshLambertMaterial({ color: 0xf8f9f9 });
    }
    const rot = new THREE.Mesh(this.rotorGeo, this.rotorMat);
    rot.scale.setScalar(s);
    rot.position.set(x, h * s + 1, z + 2.2 * s);
    rot.rotation.z = this.r() * 6;
    this.scene.add(rot);
    this.animated.push({ obj: rot, speed: 0.6 + this.r() * 0.4 });
  }

  buildBlock(zone, bx, bz, x0, z0, x1, z1) {
    const B = this.B, r = this.r;
    this.addCollider(x0, z0, x1, z1);
    const ix0 = x0 + 5, iz0 = z0 + 5, ix1 = x1 - 5, iz1 = z1 - 5;
    const W = ix1 - ix0;
    // lâmpadas nas esquinas
    if (zone !== 'farm') for (const [lx, lz] of [[x0 + 1.5, z0 + 1.5], [x1 - 1.5, z0 + 1.5], [x0 + 1.5, z1 - 1.5], [x1 - 1.5, z1 - 1.5]]) this.lamps.push({ x: lx, z: lz });

    if (zone === 'downtown') {
      this.sidewalk(x0, z0, x1, z1, B.concrete);
      const n = 2, cell = W / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          const w = cell * (0.62 + r() * 0.28), d = cell * (0.62 + r() * 0.28);
          const cx = ix0 + cell * (i + 0.5), cz = iz0 + cell * (j + 0.5);
          const h = 35 + r() * 95;
          this.building(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, h, r() > 0.5 ? 0 : 3);
        }
      for (let t = 0; t < 8; t++) this.tree(x0 + 2 + (t * (x1 - x0 - 4)) / 7, z0 + 2, 0.8);
    } else if (zone === 'residential') {
      this.sidewalk(x0, z0, x1, z1);
      const n = 3, cell = W / n;
      for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++) {
          const cx = ix0 + cell * (i + 0.5), cz = iz0 + cell * (j + 0.5);
          if (i === 1 && j === 1) {
            for (let t = 0; t < 4; t++) this.tree(cx + (r() - 0.5) * 20, cz + (r() - 0.5) * 20, 1);
            continue;
          }
          if (r() < 0.45) {
            const w = 10 + r() * 6, d = 9 + r() * 4;
            const cols = [0xf5e6c8, 0xdfe9f0, 0xf3d1b0, 0xe8e2a8, 0xc9e3c1, 0xf0c9c9];
            this.house(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 3.6 + (r() > 0.6 ? 3.2 : 0), cols[(r() * cols.length) | 0]);
            this.tree(cx + w / 2 + 3, cz + d / 2 + 3, 0.9);
          } else {
            const w = cell * (0.6 + r() * 0.3), d = cell * (0.6 + r() * 0.3);
            this.building(cx - w / 2, cz - d / 2, cx + w / 2, cz + d / 2, 8 + r() * 26, r() > 0.5 ? 1 : 2);
          }
        }
      for (let t = 0; t < 7; t++) {
        const a = x0 + 6 + (t * (x1 - x0 - 12)) / 6;
        this.tree(a, z0 + 2, 0.75);
        this.tree(a, z1 - 2, 0.75);
      }
    } else if (zone === 'park') {
      this.sidewalk(x0, z0, x1, z1);
      for (let t = 0; t < 46; t++) this.tree(ix0 + r() * W, iz0 + r() * W, 1.1, r() > 0.7 ? 1 : 0);
      B.sand.ground(ix0 + W * 0.35, iz0 + W * 0.35, ix0 + W * 0.65, iz0 + W * 0.65, 0.23, 8);
    } else if (zone === 'farm') {
      this.sidewalk(x0, z0, x1, z1, B.field);
      for (let t = 0; t < 10; t++) {
        const a = x0 + 4 + (t * (x1 - x0 - 8)) / 9;
        this.tree(a, z0 + 2, 1.1, 1);
        this.tree(a, z1 - 2, 1.1, 1);
      }
      if (r() > 0.55) {
        const cx = ix0 + 20, cz = iz0 + 20;
        this.house(cx - 6, cz - 5, cx + 6, cz + 5, 3.8, 0xf2efe6);
      }
      if (r() > 0.6) this.turbine(ix0 + W * (0.3 + r() * 0.4), iz0 + W * (0.3 + r() * 0.4), 44, 0.9);
    } else if (zone === 'industrial') {
      this.sidewalk(x0, z0, x1, z1, B.concrete);
      const h = 10 + r() * 6;
      const half = W / 2;
      const tint = [0xffffff, 0xd6e4f0, 0xf0e2d0, 0xdde8d8][(r() * 4) | 0];
      B.wh.walls(ix0 + 2, 0.2, iz0 + 2, ix1 - 2, h, iz0 + half - 4, 6, 6, 0, tint);
      B.roof.top(ix0 + 2, iz0 + 2, ix1 - 2, iz0 + half - 4, h, 6);
      if (r() > 0.4) {
        for (let k = 0; k < 3; k++) this.tank(ix0 + 18 + k * 26, iz1 - 22, 9, 14 + r() * 8);
      } else {
        B.wh.walls(ix0 + 4, 0.2, iz0 + half + 4, ix1 - 30, h * 0.8, iz1 - 4, 6, 6, 0, tint);
        B.roof.top(ix0 + 4, iz0 + half + 4, ix1 - 30, iz1 - 4, h * 0.8, 6);
        this.chimney(ix1 - 14, iz1 - 16, 2.5, 38 + r() * 20);
      }
    } else if (zone === 'port') {
      this.sidewalk(x0, z0, x1, z1, B.concrete);
      this.containerStack(ix0 + 28, (iz0 + iz1) / 2, 0, 8, 3, 4);
      this.containerStack(ix1 - 28, (iz0 + iz1) / 2, 0, 8, 3, 3);
    }
  }

  buildDepot(L, x0, z0, x1, z1) {
    const B = this.B, r = this.r;
    B.lot.ground(x0, z0, x1, z1, 0.03, 12);
    const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
    let zone, bld, entry, face;
    const ZL = 34, ZS = 14;
    if (L.side === 'n') {
      zone = { x: mx, z: z0 + 22, w: ZL, d: ZS, rot: Math.PI / 2 };
      bld = [x0 + 10, z1 - 50, x1 - 10, z1 - 6]; entry = { x: mx, z: z0 - RH }; face = 'n';
    } else if (L.side === 's') {
      zone = { x: mx, z: z1 - 22, w: ZL, d: ZS, rot: Math.PI / 2 };
      bld = [x0 + 10, z0 + 6, x1 - 10, z0 + 50]; entry = { x: mx, z: z1 + RH }; face = 's';
    } else if (L.side === 'w') {
      zone = { x: x0 + 22, z: mz, w: ZS, d: ZL, rot: 0 };
      bld = [x1 - 50, z0 + 10, x1 - 6, z1 - 10]; entry = { x: x0 - RH, z: mz }; face = 'w';
    } else {
      zone = { x: x1 - 22, z: mz, w: ZS, d: ZL, rot: 0 };
      bld = [x0 + 6, z0 + 10, x0 + 50, z1 - 10]; entry = { x: x1 + RH, z: mz }; face = 'e';
    }
    this.depots[L.id] = { ...L, zone, entry, lot: [x0, z0, x1, z1] };
    const [bx0, bz0, bx1, bz1] = bld;
    const bcx = (bx0 + bx1) / 2, bcz = (bz0 + bz1) / 2;
    const k = L.kind;

    // Edifício principal
    const mainBuilding = (h, tint = 0xffffff, styleFacade = -1) => {
      if (styleFacade >= 0) B.f[styleFacade].walls(bx0, 0.03, bz0, bx1, h, bz1, 8, 7, 0);
      else B.wh.walls(bx0, 0.03, bz0, bx1, h, bz1, 6, 6, 0, tint);
      B.roof.top(bx0, bz0, bx1, bz1, h, 6);
      B.flat.walls(bx0, h, bz0, bx1, h + 0.6, bz1, 1, 1, 0, L.color);
      this.addCollider(bx0, bz0, bx1, bz1);
      // portas de doca na fachada voltada ao pátio
      const doors = 4;
      for (let i = 0; i < doors; i++) {
        const t = (i + 0.5) / doors;
        const dw = 4, dh = Math.min(5, h - 1);
        if (face === 'n') { const x = bx0 + (bx1 - bx0) * t; B.flat.quad([x + dw / 2, 0.03, bz0 - 0.05], [x - dw / 2, 0.03, bz0 - 0.05], [x - dw / 2, dh, bz0 - 0.05], [x + dw / 2, dh, bz0 - 0.05], [0, 0, -1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2d3436); }
        if (face === 's') { const x = bx0 + (bx1 - bx0) * t; B.flat.quad([x - dw / 2, 0.03, bz1 + 0.05], [x + dw / 2, 0.03, bz1 + 0.05], [x + dw / 2, dh, bz1 + 0.05], [x - dw / 2, dh, bz1 + 0.05], [0, 0, 1], [0, 0, 1, 0, 1, 1, 0, 1], 0x2d3436); }
        if (face === 'w') { const z = bz0 + (bz1 - bz0) * t; B.flat.quad([bx0 - 0.05, 0.03, z - dw / 2], [bx0 - 0.05, 0.03, z + dw / 2], [bx0 - 0.05, dh, z + dw / 2], [bx0 - 0.05, dh, z - dw / 2], [-1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], 0x2d3436); }
        if (face === 'e') { const z = bz0 + (bz1 - bz0) * t; B.flat.quad([bx1 + 0.05, 0.03, z + dw / 2], [bx1 + 0.05, 0.03, z - dw / 2], [bx1 + 0.05, dh, z - dw / 2], [bx1 + 0.05, dh, z + dw / 2], [1, 0, 0], [0, 0, 1, 0, 1, 1, 0, 1], 0x2d3436); }
      }
      this.signFor(L, face, bld, h);
    };

    if (k === 'port') {
      this.containerStack(bcx - 25, bcz, Math.PI / 2, 4, 3, 4);
      this.containerStack(bcx + 25, bcz, Math.PI / 2, 4, 3, 3);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.crane(bcx, bcz, 34, 0);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'refinery') {
      for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) this.tank(bx0 + 12 + i * 22, bz0 + 15 + j * 32, 9, 12 + r() * 6);
      this.chimney(bx1 - 8, bz0 + 12, 1.6, 42, 0xbdc3c7);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'farm') {
      const h = 9;
      B.flat.walls(bx0 + 5, 0.03, bz0 + 10, bx1 - 20, h, bz1 - 10, 1, 1, 0, 0xa93226);
      B.tiles.top(bx0 + 4, bz0 + 9, bx1 - 19, bz1 - 9, h, 4);
      this.tank(bx1 - 10, bz0 + 20, 5, 18, 0xd5d8dc);
      this.tank(bx1 - 10, bz1 - 20, 5, 18, 0xd5d8dc);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'silo') {
      for (let i = 0; i < 2; i++) for (let j = 0; j < 3; j++) this.tank(bx0 + 12 + i * 20, bz0 + 18 + j * 32, 7, 26, 0xcfd3d6);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'wind') {
      for (let i = 0; i < 3; i++) this.turbine(bx0 + 10 + i * 12 + (face === 'n' || face === 's' ? i * 20 : 0), bcz + (i - 1) * (face === 'n' || face === 's' ? 0 : 30), 55, 1);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'construction') {
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++)
        for (let f = 0; f < 5; f++) B.flat.add(G.box(), mat(bx0 + 6 + i * 10, f * 4 + 2, bz0 + 10 + j * 14, 0, 0, 0, 0.8, 4, 0.8), 0xa6acaf);
      for (let f = 1; f <= 5; f++) B.flat.add(G.box(), mat(bx0 + 21, f * 4, bz0 + 24, 0, 0, 0, 32, 0.4, 30), 0xb3b6b7);
      this.crane(bx1 - 8, bz1 - 10, 40, Math.PI / 2);
      this.addCollider(bx0, bz0, bx1, bz1);
      this.signFor(L, face, bld, 4, true);
    } else if (k === 'fuel') {
      mainBuilding(5, 0xffffff);
      const zc = zone;
      B.flat.add(G.box(), mat(zc.x, 7, zc.z, 0, 0, 0, zc.w + 6, 0.8, zc.d + 6), 0xd02020);
      for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
        const px = zc.x + dx * (zc.w / 2 + 4), pz = zc.z + dz * (zc.d / 2 + 4);
        B.flat.add(G.box(), mat(px, 3.5, pz, 0, 0, 0, 0.6, 7, 0.6), 0xecf0f1);
        this.addCollider(px - 0.4, pz - 0.4, px + 0.4, pz + 0.4);
      }
    } else if (k === 'steel') {
      mainBuilding(18, 0xc9b8a8);
      this.chimney(bx0 + 8, bz0 + 8, 2.6, 55);
      this.chimney(bx1 - 8, bz1 - 8, 2.6, 50);
    } else if (k === 'sawmill') {
      const h = 8;
      const sx1 = (bx0 + bx1) / 2 + 6;
      B.wh.walls(bx0, 0.03, bz0, sx1, h, bz1, 6, 6, 0, 0xc8a27a);
      B.roof.top(bx0, bz0, sx1, bz1, h, 6);
      this.addCollider(bx0, bz0, bx1, bz1);
      for (let p = 0; p < 3; p++)
        for (let lg = 0; lg < 7; lg++) {
          const lz = bz0 + 14 + p * 30, lx = sx1 + 4 + (lg % 4) * 2.2 + (lg >= 4 ? 1.1 : 0), ly = lg >= 4 ? 2.8 : 0.9;
          B.flat.add(G.cyl(10), mat(lx, ly, lz, Math.PI / 2, 0, 0, 1.8, 14, 1.8), 0x8e5b32);
        }
      this.signFor(L, face, bld, h);
    } else if (k === 'quarry') {
      mainBuilding(9, 0xd0c8be);
      for (let i = 0; i < 2; i++) B.flat.add(G.cone(16), mat(bx0 + 15 + i * 22, 5, bz1 + 0, 0, 0, 0, 18, 10, 18), 0x9c9284);
    } else if (k === 'hospital') {
      mainBuilding(22, 0xffffff, 2);
    } else if (k === 'market') {
      mainBuilding(10, 0xffffff, 1);
    } else {
      mainBuilding(k === 'garage' ? 9 : 12, k === 'garage' ? 0xd6e4f7 : 0xffffff);
    }
    // postes do pátio
    this.lamps.push({ x: x0 + 2, z: z0 + 2 }, { x: x1 - 2, z: z1 - 2 });
  }

  signFor(L, face, bld, h, freestanding = false) {
    const [bx0, bz0, bx1, bz1] = bld;
    const w = 26, hh = 26 * (192 / 1024);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, hh), new THREE.MeshBasicMaterial({ map: tex.sign(L.name.toUpperCase(), '#' + new THREE.Color(L.color).multiplyScalar(0.75).getHexString(), '#ffffff'), side: THREE.DoubleSide }));
    const y = freestanding ? 8 : h + hh / 2 + 0.8;
    if (face === 'n') { m.position.set((bx0 + bx1) / 2, y, bz0 - (freestanding ? 4 : 0.3)); m.rotation.y = Math.PI; }
    if (face === 's') { m.position.set((bx0 + bx1) / 2, y, bz1 + (freestanding ? 4 : 0.3)); }
    if (face === 'w') { m.position.set(bx0 - (freestanding ? 4 : 0.3), y, (bz0 + bz1) / 2); m.rotation.y = -Math.PI / 2; }
    if (face === 'e') { m.position.set(bx1 + (freestanding ? 4 : 0.3), y, (bz0 + bz1) / 2); m.rotation.y = Math.PI / 2; }
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    this.scene.add(m);
    if (freestanding) {
      const p = m.position;
      this.B.flat.add(G.box(), mat(p.x, 3, p.z, 0, m.rotation.y, 0, 0.5, 6, 0.5), 0x555555);
    }
  }

  buildOutskirts() {
    const r = this.r;
    // Florestas e colinas ao redor
    for (let i = 0; i < 700; i++) {
      const a = r() * Math.PI * 2, d = HALF + 40 + r() * 700;
      const x = Math.cos(a) * d, z = Math.sin(a) * d;
      if (z > HALF + 30) continue;
      if (Math.abs(x) < HALF + 25 && Math.abs(z) < HALF + 25) continue;
      this.tree(x, z, 1.3, r() > 0.6 ? 1 : 0);
    }
    const hillMat = this.M.grass;
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2 + r() * 0.2;
      const d = 1700 + r() * 500;
      const x = Math.cos(a) * d, z = Math.sin(a) * d;
      if (z > HALF + 100) continue;
      const h = 80 + r() * 160, rad = 300 + r() * 250;
      const geo = new THREE.SphereGeometry(1, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2);
      const uv = geo.attributes.uv;
      for (let k = 0; k < uv.count; k++) uv.setXY(k, uv.getX(k) * 60, uv.getY(k) * 12);
      const m = new THREE.Mesh(geo, hillMat);
      m.scale.set(rad, h, rad);
      m.position.set(x, -5, z);
      m.matrixAutoUpdate = false;
      m.updateMatrix();
      this.scene.add(m);
    }
    for (let i = 0; i < 6; i++) this.turbine(-HALF - 120 - r() * 300, -400 + i * 180, 55, 1);
  }

  buildTrees() {
    const n = this.trees.length;
    const trunkG = new THREE.CylinderGeometry(0.22, 0.32, 3, 7);
    trunkG.translate(0, 1.5, 0);
    const crownG = new THREE.IcosahedronGeometry(2.4, 1);
    crownG.translate(0, 4.6, 0);
    const pineG = new THREE.ConeGeometry(2, 6.5, 9);
    pineG.translate(0, 5.6, 0);
    const trunk = new THREE.InstancedMesh(trunkG, this.M.bark, n);
    const cnt = [0, 0];
    for (const t of this.trees) cnt[t.k]++;
    const crowns = new THREE.InstancedMesh(crownG, this.M.leaf, Math.max(1, cnt[0]));
    const pines = new THREE.InstancedMesh(pineG, new THREE.MeshLambertMaterial({ map: tex.foliage(), color: 0x9fc29a }), Math.max(1, cnt[1]));
    const m4 = new THREE.Matrix4();
    const c = new THREE.Color();
    let ic = 0, ip = 0;
    this.trees.forEach((t, i) => {
      m4.copy(mat(t.x, 0.2, t.z, 0, t.rot, 0, t.s, t.s * (0.9 + (i % 5) * 0.06), t.s));
      trunk.setMatrixAt(i, m4);
      c.setHSL(0.24 + ((i * 37) % 10) / 100, 0.45, 0.42 + ((i * 13) % 10) / 60);
      if (t.k === 0) { crowns.setMatrixAt(ic, m4); crowns.setColorAt(ic++, c); }
      else { pines.setMatrixAt(ip++, m4); }
    });
    crowns.count = ic; pines.count = ip;
    for (const im of [trunk, crowns, pines]) {
      im.castShadow = true;
      im.receiveShadow = false;
      im.frustumCulled = false;
      this.scene.add(im);
    }
  }

  buildLamps() {
    const n = this.lamps.length;
    const g = new THREE.CylinderGeometry(0.12, 0.16, 8, 6);
    g.translate(0, 4, 0);
    const arm = new THREE.BoxGeometry(0.15, 0.15, 2.2);
    arm.translate(0, 8, 1);
    const head = new THREE.BoxGeometry(0.5, 0.2, 0.9);
    head.translate(0, 7.9, 2);
    const poles = new THREE.InstancedMesh(g, new THREE.MeshLambertMaterial({ color: 0x5d6d7e }), n);
    const arms = new THREE.InstancedMesh(arm, new THREE.MeshLambertMaterial({ color: 0x5d6d7e }), n);
    const heads = new THREE.InstancedMesh(head, new THREE.MeshBasicMaterial({ color: 0xfdf2d0 }), n);
    this.lamps.forEach((l, i) => {
      // braço apontando para a rua mais próxima
      const rx = Math.round((l.x + HALF) / BLOCK) * BLOCK - HALF, rz = Math.round((l.z + HALF) / BLOCK) * BLOCK - HALF;
      const ang = Math.abs(l.x - rx) < Math.abs(l.z - rz) ? (rx > l.x ? Math.PI / 2 : -Math.PI / 2) : (rz > l.z ? 0 : Math.PI);
      const m4 = mat(l.x, 0, l.z, 0, ang, 0);
      poles.setMatrixAt(i, m4); arms.setMatrixAt(i, m4); heads.setMatrixAt(i, m4);
    });
    for (const im of [poles, arms, heads]) {
      im.frustumCulled = false;
      this.scene.add(im);
    }
  }

  update(dt, t) {
    for (const a of this.animated) a.obj.rotation.z += a.speed * dt;
    if (this.water) this.water.material.map.offset.set(t * 0.004, t * 0.006);
  }
}
