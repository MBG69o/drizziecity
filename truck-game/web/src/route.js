// GPS: menor caminho pela malha de ruas (Dijkstra na grade de cruzamentos).
import { GRID, roadCoord, HALF, BLOCK } from './data.js';

const N = GRID + 1;
const key = (i, j) => i * N + j;

function snap(x, z) {
  // ponto mais próximo sobre a malha viária e os dois cruzamentos do trecho
  const clampIdx = (v) => Math.max(0, Math.min(GRID, Math.round((v + HALF) / BLOCK)));
  const segIdx = (v) => Math.max(0, Math.min(GRID - 1, Math.floor((v + HALF) / BLOCK)));
  const ix = clampIdx(x), iz = clampIdx(z);
  const dv = Math.abs(x - roadCoord(ix)); // distância até rua vertical
  const dh = Math.abs(z - roadCoord(iz));
  if (dv <= dh) {
    const j = segIdx(z);
    const pz = Math.max(-HALF, Math.min(HALF, z));
    return { p: { x: roadCoord(ix), z: pz }, a: [ix, j], b: [ix, j + 1] };
  }
  const i = segIdx(x);
  const px = Math.max(-HALF, Math.min(HALF, x));
  return { p: { x: px, z: roadCoord(iz) }, a: [i, iz], b: [i + 1, iz] };
}

const nodePos = (i, j) => ({ x: roadCoord(i), z: roadCoord(j) });
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

export function findRoute(x, z, depot) {
  const s = snap(x, z);
  const e = snap(depot.entry.x, depot.entry.z);
  const D = new Float32Array(N * N).fill(Infinity);
  const prev = new Int32Array(N * N).fill(-1);
  const done = new Uint8Array(N * N);
  for (const n of [s.a, s.b]) D[key(n[0], n[1])] = dist(s.p, nodePos(n[0], n[1]));
  for (;;) {
    let best = -1, bd = Infinity;
    for (let k = 0; k < N * N; k++) if (!done[k] && D[k] < bd) { bd = D[k]; best = k; }
    if (best < 0) break;
    done[best] = 1;
    const i = (best / N) | 0, j = best % N;
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ni = i + di, nj = j + dj;
      if (ni < 0 || nj < 0 || ni > GRID || nj > GRID) continue;
      const nk = key(ni, nj);
      const nd = bd + BLOCK;
      if (nd < D[nk]) { D[nk] = nd; prev[nk] = best; }
    }
  }
  let endK = -1, endD = Infinity;
  for (const n of [e.a, e.b]) {
    const k = key(n[0], n[1]);
    const d = D[k] + dist(nodePos(n[0], n[1]), e.p);
    if (d < endD) { endD = d; endK = k; }
  }
  const pts = [];
  for (let k = endK; k >= 0; k = prev[k]) pts.unshift(nodePos((k / N) | 0, k % N));
  // mesmo trecho: vai direto
  const sameSeg = (s.a[0] === e.a[0] && s.a[1] === e.a[1] && s.b[0] === e.b[0] && s.b[1] === e.b[1]);
  const path = sameSeg ? [s.p, e.p] : [s.p, ...pts, e.p];
  path.unshift({ x, z });
  path.push({ x: depot.zone.x, z: depot.zone.z });
  let len = 0;
  for (let i = 1; i < path.length; i++) len += dist(path[i - 1], path[i]);
  return { path, len };
}
