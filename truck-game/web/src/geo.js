// Construtor de geometria estática: acumula várias peças em um único
// BufferGeometry por material (poucas draw calls = ótimo para celulares fracos).
import * as THREE from 'three';

const _v = new THREE.Vector3();
const _n = new THREE.Vector3();
const _nm = new THREE.Matrix3();
const _c = new THREE.Color();

export class Builder {
  constructor(colored = false) {
    this.pos = [];
    this.nor = [];
    this.uv = [];
    this.col = colored ? [] : null;
    this.idx = [];
  }

  get count() {
    return this.pos.length / 3;
  }

  _color(color) {
    if (!this.col) return;
    _c.set(color ?? 0xffffff);
    this.col.push(_c.r, _c.g, _c.b);
  }

  // a,b,c,d em sentido anti-horário vistos pelo lado da normal
  quad(a, b, c, d, n, uvs, color) {
    const o = this.count;
    for (const p of [a, b, c, d]) {
      this.pos.push(p[0], p[1], p[2]);
      this.nor.push(n[0], n[1], n[2]);
      this._color(color);
    }
    this.uv.push(...uvs);
    this.idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
  }

  // Plano horizontal com UV em coordenadas de mundo (sem emendas)
  ground(x0, z0, x1, z1, y, tile, color) {
    const u0 = x0 / tile, u1 = x1 / tile, v0 = -z1 / tile, v1 = -z0 / tile;
    this.quad([x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], [0, 1, 0], [u0, v0, u1, v0, u1, v1, u0, v1], color);
  }

  // Paredes de caixa alinhada aos eixos; tw/th = tamanho do ladrilho de textura
  walls(x0, y0, z0, x1, y1, z1, tw, th, uOff = 0, color) {
    const v0 = 0, v1 = (y1 - y0) / th;
    const W = (x1 - x0) / tw, D = (z1 - z0) / tw;
    this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], [uOff, v0, uOff + W, v0, uOff + W, v1, uOff, v1], color);
    this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], [uOff, v0, uOff + W, v0, uOff + W, v1, uOff, v1], color);
    this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], [uOff, v0, uOff + D, v0, uOff + D, v1, uOff, v1], color);
    this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], [uOff, v0, uOff + D, v0, uOff + D, v1, uOff, v1], color);
  }

  top(x0, z0, x1, z1, y, tile, color) {
    this.ground(x0, z0, x1, z1, y, tile, color);
  }

  // Caixa completa (paredes + topo)
  box(x0, y0, z0, x1, y1, z1, tile, color) {
    this.walls(x0, y0, z0, x1, y1, z1, tile, tile, 0, color);
    this.top(x0, z0, x1, z1, y1, tile, color);
  }

  // Mescla qualquer geometria do three.js aplicando uma matriz
  add(geom, matrix, color, uvScale = 1) {
    const p = geom.attributes.position, nAttr = geom.attributes.normal, u = geom.attributes.uv;
    const o = this.count;
    _nm.getNormalMatrix(matrix);
    for (let i = 0; i < p.count; i++) {
      _v.fromBufferAttribute(p, i).applyMatrix4(matrix);
      this.pos.push(_v.x, _v.y, _v.z);
      _n.fromBufferAttribute(nAttr, i).applyMatrix3(_nm).normalize();
      this.nor.push(_n.x, _n.y, _n.z);
      if (u) this.uv.push(u.getX(i) * uvScale, u.getY(i) * uvScale);
      else this.uv.push(0, 0);
      this._color(color);
    }
    if (geom.index) {
      const ia = geom.index.array;
      for (let i = 0; i < ia.length; i++) this.idx.push(ia[i] + o);
    } else {
      for (let i = 0; i < p.count; i++) this.idx.push(o + i);
    }
  }

  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    if (this.col) g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    const big = this.count > 65535;
    g.setIndex(big ? new THREE.Uint32BufferAttribute(this.idx, 1) : new THREE.Uint16BufferAttribute(this.idx, 1));
    g.computeBoundingSphere();
    return g;
  }

  mesh(material, opts = {}) {
    if (!this.count) return null;
    const m = new THREE.Mesh(this.geometry(), material);
    m.castShadow = !!opts.cast;
    m.receiveShadow = opts.receive !== false;
    m.matrixAutoUpdate = false;
    m.updateMatrix();
    return m;
  }
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

export function mat(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _q.setFromEuler(_e.set(rx, ry, rz));
  return _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz)).clone();
}

// Cache de geometrias primitivas reutilizáveis
const prim = {};
export const G = {
  box: () => prim.box || (prim.box = new THREE.BoxGeometry(1, 1, 1)),
  cyl: (seg = 16) => prim['cyl' + seg] || (prim['cyl' + seg] = new THREE.CylinderGeometry(0.5, 0.5, 1, seg)),
  cone: (seg = 12) => prim['cone' + seg] || (prim['cone' + seg] = new THREE.ConeGeometry(0.5, 1, seg)),
  sphere: () => prim.sph || (prim.sph = new THREE.SphereGeometry(0.5, 16, 10)),
};
