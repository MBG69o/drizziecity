// GPS: grafo com ruas de todas as cidades + rodovias. Menor caminho por Dijkstra.
import { CITIES, BLOCK, CITY } from './data.js';

let G = null;

function addNode(x, z) {
  G.nodes.push({ x, z, adj: [] });
  return G.nodes.length - 1;
}
function addEdge(a, b, poly) {
  let len = 0;
  for (let i = 1; i < poly.length; i++) len += Math.hypot(poly[i].x - poly[i - 1].x, poly[i].z - poly[i - 1].z);
  const e = { a, b, poly, len };
  G.edges.push(e);
  G.nodes[a].adj.push(e);
  G.nodes[b].adj.push(e);
  return e;
}

export function buildGraph(world) {
  G = { nodes: [], edges: [], cityNode: {} };
  for (const c of CITIES) {
    const id = (i, j) => c.id + ':' + i + ':' + j;
    for (let i = 0; i <= c.nx; i++)
      for (let j = 0; j <= c.nz; j++) G.cityNode[id(i, j)] = addNode(c.x0 + i * BLOCK, c.z0 + j * BLOCK);
    for (let i = 0; i <= c.nx; i++)
      for (let j = 0; j <= c.nz; j++) {
        const a = G.cityNode[id(i, j)];
        if (i < c.nx) { const b = G.cityNode[id(i + 1, j)]; addEdge(a, b, [G.nodes[a], G.nodes[b]]); }
        if (j < c.nz) { const b = G.cityNode[id(i, j + 1)]; addEdge(a, b, [G.nodes[a], G.nodes[b]]); }
      }
  }
  // rodovias divididas nos acessos aos pátios
  for (const h of world.hws) {
    const cuts = [];
    for (const d of Object.values(world.depots)) if (d.entry.hw === h.id) cuts.push({ s: d.entry.s, depot: d.id });
    cuts.sort((a, b) => a.s - b.s);
    const startNode = h.def.from ? G.cityNode[h.def.from[0] + ':' + h.def.from[1] + ':' + h.def.from[2]] : addNode(h.x[0], h.z[0]);
    const endNode = h.def.to ? G.cityNode[h.def.to[0] + ':' + h.def.to[1] + ':' + h.def.to[2]] : addNode(h.x[h.n - 1], h.z[h.n - 1]);
    let prevNode = startNode, prevI = 0;
    const pts = (i0, i1) => {
      const out = [];
      for (let i = i0; i <= i1; i++) out.push({ x: h.x[i], z: h.z[i] });
      return out;
    };
    for (const c of cuts) {
      let i = 0;
      while (i < h.n - 1 && h.s[i + 1] < c.s) i++;
      const node = addNode(h.x[i], h.z[i]);
      G.depotNode = G.depotNode || {};
      G.depotNode[c.depot] = node;
      addEdge(prevNode, node, [G.nodes[prevNode], ...pts(prevI, i)]);
      prevNode = node; prevI = i;
    }
    addEdge(prevNode, endNode, [...pts(prevI, h.n - 1), G.nodes[endNode]]);
  }
  return G;
}

// projeção no trecho mais próximo de qualquer aresta
function snap(x, z) {
  let best = null, bd = Infinity;
  for (const e of G.edges) {
    const p = e.poly;
    for (let i = 0; i < p.length - 1; i++) {
      const ax = p[i].x, az = p[i].z, vx = p[i + 1].x - ax, vz = p[i + 1].z - az;
      const l2 = vx * vx + vz * vz || 1;
      let t = ((x - ax) * vx + (z - az) * vz) / l2;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const px = ax + vx * t, pz = az + vz * t;
      const d = (x - px) ** 2 + (z - pz) ** 2;
      if (d < bd) { bd = d; best = { e, i, t, x: px, z: pz }; }
    }
  }
  return best;
}

// distâncias da projeção até as pontas da aresta, com a polilinha de cada lado
function legs(sn) {
  const p = sn.e.poly;
  const toA = [{ x: sn.x, z: sn.z }];
  for (let k = sn.i; k >= 0; k--) toA.push(p[k]);
  const toB = [{ x: sn.x, z: sn.z }];
  for (let k = sn.i + 1; k < p.length; k++) toB.push(p[k]);
  const L = (a) => a.reduce((s, q, i) => (i ? s + Math.hypot(q.x - a[i - 1].x, q.z - a[i - 1].z) : 0), 0);
  return [{ node: sn.e.a, poly: toA, len: L(toA) }, { node: sn.e.b, poly: toB, len: L(toB) }];
}

const cache = new Map();
function targetLegs(depot) {
  if (cache.has(depot.id)) return cache.get(depot.id);
  let r;
  if (G.depotNode && G.depotNode[depot.id] !== undefined) {
    const n = G.depotNode[depot.id];
    r = [{ node: n, poly: [G.nodes[n]], len: 0 }];
  } else {
    r = legs(snap(depot.entry.x, depot.entry.z)).map((l) => ({ ...l, poly: l.poly.slice().reverse() }));
  }
  cache.set(depot.id, r);
  return r;
}

export function findRoute(x, z, depot) {
  const N = G.nodes.length;
  const D = new Float64Array(N).fill(Infinity);
  const prev = new Array(N).fill(null);
  const done = new Uint8Array(N);
  const sn = snap(x, z);
  const starts = legs(sn);
  const startPoly = {};
  for (const s of starts) { D[s.node] = s.len; startPoly[s.node] = s.poly; }
  for (;;) {
    let u = -1, bd = Infinity;
    for (let k = 0; k < N; k++) if (!done[k] && D[k] < bd) { bd = D[k]; u = k; }
    if (u < 0) break;
    done[u] = 1;
    for (const e of G.nodes[u].adj) {
      const v = e.a === u ? e.b : e.a;
      const nd = bd + e.len;
      if (nd < D[v]) { D[v] = nd; prev[v] = { u, e }; }
    }
  }
  const ends = targetLegs(depot);
  let best = null, bl = Infinity;
  for (const t of ends) if (D[t.node] + t.len < bl) { bl = D[t.node] + t.len; best = t; }
  // reconstrói
  const chain = [];
  for (let v = best.node; prev[v]; v = prev[v].u) chain.unshift(prev[v]);
  const path = [{ x, z }];
  const first = chain.length ? chain[0].u : best.node;
  // mesmo trecho de início e fim: vai direto
  if (!chain.length && sn.e === snap(depot.entry.x, depot.entry.z).e && !(G.depotNode && G.depotNode[depot.id] !== undefined)) {
    path.push({ x: sn.x, z: sn.z }, { x: depot.entry.x, z: depot.entry.z });
  } else {
    path.push(...startPoly[first]);
    for (const { u, e } of chain) {
      const fwd = e.a === u;
      const p = fwd ? e.poly : e.poly.slice().reverse();
      for (let i = 1; i < p.length; i++) path.push(p[i]);
    }
    path.push(...best.poly);
  }
  path.push({ x: depot.zone.x, z: depot.zone.z });
  let len = 0;
  for (let i = 1; i < path.length; i++) len += Math.hypot(path[i].x - path[i - 1].x, path[i].z - path[i - 1].z);
  return { path, len };
}

export const graph = () => G;
export { CITY };
