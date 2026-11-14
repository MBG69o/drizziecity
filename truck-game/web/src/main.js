// Drizzie Truck — núcleo do jogo: renderização, controles, fretes, progressão e HUD.
import * as THREE from 'three';
import { HALF, GRID, BLOCK, ROAD_W, roadCoord, zoneOf, LOCATIONS, LOC, TRUCKS, TRUCK, CARGOS, CARGO, xpForLevel, MAX_LEVEL } from './data.js';
import { configureTextures, tex } from './textures.js';
import { World } from './world.js';
import { Rig } from './truck.js';
import { Traffic } from './traffic.js';
import { findRoute } from './route.js';
import { Audio } from './audio.js';

const $ = (id) => document.getElementById(id);
const SAVE_KEY = 'drizzieTruck.v1';
const fmt = (n) => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------------- Save ----------------
const DEFAULTS = {
  money: 3000, xp: 0, level: 1, owned: ['urbano'], truck: 'urbano', job: null, pos: null,
  stats: { deliveries: 0, km: 0, earned: 0, tons: 0, crashes: 0 },
  settings: { quality: 'auto', volume: 0.7, fps: false, steer: 'buttons', camera: 0 },
};
function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (s && s.level) return { ...DEFAULTS, ...s, stats: { ...DEFAULTS.stats, ...s.stats }, settings: { ...DEFAULTS.settings, ...s.settings } };
  } catch (e) { /* sem save */ }
  return JSON.parse(JSON.stringify(DEFAULTS));
}
const S = loadSave();
function save() {
  try {
    S.pos = rig ? { x: rig.x, z: rig.z, h: rig.h } : S.pos;
    localStorage.setItem(SAVE_KEY, JSON.stringify(S));
  } catch (e) { /* armazenamento indisponível */ }
}

// ---------------- Qualidade gráfica ----------------
const QUALITY = {
  low: { pr: 1.0, minPr: 0.75, shadows: false, shadowSize: 0, tex: 512, aniso: 2, traffic: 10, fogNear: 160, fogFar: 560, far: 900 },
  medium: { pr: 1.5, minPr: 0.85, shadows: true, shadowSize: 1024, tex: 1024, aniso: 4, traffic: 16, fogNear: 240, fogFar: 820, far: 1500 },
  high: { pr: 2.0, minPr: 1.0, shadows: true, shadowSize: 2048, tex: 1024, aniso: 8, traffic: 24, fogNear: 320, fogFar: 1300, far: 2600 },
};
function detectQuality() {
  let r = '';
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
    const ext = gl && gl.getExtension('WEBGL_debug_renderer_info');
    r = ((ext && gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) || (gl && gl.getParameter(gl.RENDERER)) || '').toLowerCase();
    const lose = gl && gl.getExtension('WEBGL_lose_context');
    if (lose) lose.loseContext();
  } catch (e) { /* ignora */ }
  const mem = navigator.deviceMemory || 4, cores = navigator.hardwareConcurrency || 4;
  if (/mali-4|mali-t[67]|adreno \(tm\) [34]|adreno [34]|sgx|powervr|vivante|videocore/.test(r)) return 'low';
  if (mem <= 2 || cores <= 4) return 'low';
  if (mem >= 6 && cores >= 8 && /adreno \(tm\) (6[4-9]|7)|adreno (6[4-9]|7)|mali-g7|mali-g6[18]|immortalis|xclipse|apple|nvidia|geforce|radeon|intel/.test(r)) return 'high';
  return 'medium';
}
const qName = S.settings.quality === 'auto' ? detectQuality() : S.settings.quality;
const Q = QUALITY[qName];

// ---------------- Globais ----------------
let renderer, scene, camera, world, rig, traffic, sun, sky;
const audio = new Audio();
audio.volume = S.settings.volume;
let state = 'loading';
let jobs = [];
let route = null, routeT = 0, nextWp = null;
let marker, navArrow;
let zoneTimer = 0;
const obstacles = [];
const ctl = { gas: false, brake: false, left: false, right: false, tilt: 0 };
const input = { throttle: 0, brake: 0, steer: 0 };
const cam = { yaw: 0, orbit: 0, orbitT: 0, mode: S.settings.camera || 0, pos: new THREE.Vector3(), look: new THREE.Vector3() };
let pr = Q.pr;

// ---------------- Boot ----------------
const step = (p, msg) => new Promise((res) => {
  $('loadbar').style.width = p + '%';
  $('loadmsg').textContent = msg;
  setTimeout(res, 16);
});

async function boot() {
  await step(5, 'Iniciando gráficos…');
  const canvas = $('gl');
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', stencil: false });
  } catch (e) {
    $('loadmsg').textContent = 'Seu aparelho não suporta WebGL. Atualize o "Android System WebView" na Play Store.';
    return;
  }
  pr = Math.min(window.devicePixelRatio || 1, Q.pr);
  renderer.setPixelRatio(pr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = Q.shadows;
  renderer.shadowMap.type = qName === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap;
  const maxA = renderer.capabilities.getMaxAnisotropy();
  configureTextures(Q.tex, Math.min(maxA, Q.aniso));

  scene = new THREE.Scene();
  const skyCol = new THREE.Color(0xbcd6ea);
  scene.background = skyCol;
  scene.fog = new THREE.Fog(skyCol, Q.fogNear, Q.fogFar);
  camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.5, Q.far);

  buildSky();
  scene.add(new THREE.HemisphereLight(0xdbeeff, 0x5d6b45, 1.25));
  sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
  sun.position.set(180, 260, 120);
  if (Q.shadows) {
    sun.castShadow = true;
    sun.shadow.mapSize.set(Q.shadowSize, Q.shadowSize);
    const s = qName === 'high' ? 70 : 55;
    Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 10, far: 600 });
    sun.shadow.bias = -0.0006;
    sun.shadow.normalBias = 0.04;
  }
  scene.add(sun, sun.target);

  await step(20, 'Gerando texturas HD…');
  tex.road(); tex.intersection(); tex.grass(); tex.facade(0); tex.facade(1); tex.facade(2); tex.facade(3);
  await step(45, 'Construindo a cidade…');
  world = new World(scene, Q);
  await step(70, 'Ligando o motor…');
  rig = new Rig(scene, TRUCK[S.truck] || TRUCKS[0], Q.shadows);
  placeAtStart();
  traffic = new Traffic(scene, Q.traffic);
  buildMarkers();
  await step(85, 'Desenhando o mapa…');
  buildMapCanvas();
  if (S.job && S.job.phase === 'deliver') rig.attach(CARGO[S.job.cargo]);
  jobs = genJobs();
  setupInput();
  setupUI();
  await step(100, 'Pronto!');
  renderer.compile(scene, camera);
  $('loading').classList.add('hidden');
  showTitle();
  last = performance.now();
  requestAnimationFrame(loop);
}

function buildSky() {
  const g = new THREE.SphereGeometry(Q.far * 0.95, 24, 12);
  const top = new THREE.Color(0x3d7fc4), mid = new THREE.Color(0x9cc6e8), hor = new THREE.Color(0xdde9f0);
  const cols = [];
  const p = g.attributes.position;
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / (Q.far * 0.95);
    if (y > 0.25) c.copy(mid).lerp(top, Math.min(1, (y - 0.25) / 0.75));
    else c.copy(hor).lerp(mid, Math.max(0, y / 0.25));
    cols.push(c.r, c.g, c.b);
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  sky = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
  sky.renderOrder = -1;
  scene.add(sky);
}

function placeAtStart() {
  if (S.pos && isFinite(S.pos.x) && world.resolveCircle({ x: S.pos.x, z: S.pos.z }, 1.5, _o) <= 0) { rig.place(S.pos.x, S.pos.z, S.pos.h); return; }
  const g = world.depots.garagem.zone;
  rig.place(g.x - 8, g.z, Math.PI / 2);
}

function buildMarkers() {
  marker = new THREE.Group();
  const zm = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex.zone(), color: 0xffc400, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
  zm.rotation.x = -Math.PI / 2;
  zm.position.y = 0.08;
  marker.add(zm);
  marker.zone = zm;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 120, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xffb703, transparent: true, opacity: 0.18, depthWrite: false, side: THREE.DoubleSide, fog: false, blending: THREE.AdditiveBlending }));
  beam.position.y = 60;
  marker.add(beam);
  const cone = new THREE.Mesh(new THREE.ConeGeometry(1.6, 3.2, 4), new THREE.MeshBasicMaterial({ color: 0xffc400 }));
  cone.rotation.x = Math.PI;
  marker.add(cone);
  marker.cone = cone;
  marker.visible = false;
  scene.add(marker);

  const sh = new THREE.Shape();
  sh.moveTo(0, 1.6); sh.lineTo(1.3, -0.6); sh.lineTo(0, 0); sh.lineTo(-1.3, -0.6); sh.closePath();
  const ag = new THREE.ShapeGeometry(sh);
  ag.rotateX(-Math.PI / 2);
  navArrow = new THREE.Mesh(ag, new THREE.MeshBasicMaterial({ color: 0x3ee07a, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthTest: false }));
  navArrow.renderOrder = 10;
  navArrow.visible = false;
  scene.add(navArrow);
}

// ---------------- Fretes ----------------
function depotDist(a, b) {
  const da = world.depots[a], db = world.depots[b];
  return findRoute(da.zone.x, da.zone.z, db).len;
}

function makeJob(c, from, to) {
  const dist = depotDist(from, to);
  const km = dist / 1000;
  const pay = Math.round((350 + km * (900 + c.t * 115) * c.rate) / 10) * 10;
  const xp = Math.round(50 + c.t * 4 + km * 70);
  const time = Math.round(dist / 8.5 + 90 + c.t * 1.5);
  return { cargo: c.id, from, to, dist, pay, xp, time };
}

function genJobs() {
  const out = [];
  const pool = CARGOS.filter((c) => c.lvl <= S.level + 4);
  const used = new Set();
  let guard = 0;
  while (out.length < 10 && guard++ < 200) {
    // privilegia cargas desbloqueadas e compatíveis
    const unlocked = pool.filter((c) => c.lvl <= S.level);
    const src = Math.random() < 0.78 && unlocked.length ? unlocked : pool;
    const c = src[(Math.random() * src.length) | 0];
    const from = c.from[(Math.random() * c.from.length) | 0];
    const to = c.to[(Math.random() * c.to.length) | 0];
    const k = c.id + from + to;
    if (from === to || used.has(k)) continue;
    used.add(k);
    out.push(makeJob(c, from, to));
  }
  out.sort((a, b) => (canTake(a) ? 0 : 1) - (canTake(b) ? 0 : 1) || CARGO[a.cargo].t - CARGO[b.cargo].t);
  return out;
}

function lockReason(j, def = rig.def) {
  const c = CARGO[j.cargo];
  if (c.lvl > S.level) return `Requer nível ${c.lvl}`;
  if (c.t > def.cap) return `Caminhão fraco (máx. ${def.cap} t)`;
  if (def.rigid && c.trailer !== 'box') return 'Requer cavalo mecânico';
  return null;
}
const canTake = (j) => !lockReason(j);

function acceptJob(i) {
  const j = jobs[i];
  if (!j || !canTake(j) || S.job) return;
  S.job = { ...j, phase: 'pickup', damage: 0, tLeft: j.time };
  jobs.splice(i, 1);
  audio.beep(660, 0.1); audio.beep(990, 0.12);
  closeModal();
  toast(`Frete aceito! Vá até <b>${LOC[j.from].name}</b>`);
  routeT = 0;
  save();
}

function cancelJob() {
  if (!S.job) return;
  const fee = S.job.phase === 'deliver' ? Math.round(S.job.pay * 0.25) : 0;
  S.money = Math.max(0, S.money - fee);
  rig.detach();
  S.job = null;
  marker.visible = false;
  navArrow.visible = false;
  toast(fee ? `Frete cancelado. Multa de ${fmt(fee)}` : 'Frete cancelado');
  save();
}

function currentTarget() {
  if (!S.job) return null;
  return world.depots[S.job.phase === 'pickup' ? S.job.from : S.job.to];
}

function inZone(d) {
  const p = rig.center({ x: 0, z: 0 });
  const z = d.zone;
  return Math.abs(p.x - z.x) < z.w / 2 + 3 && Math.abs(p.z - z.z) < z.d / 2 + 3;
}

function updateJob(dt) {
  const job = S.job;
  if (!job) { $('progress').classList.add('hidden'); return; }
  if (job.phase === 'deliver') job.tLeft -= dt;
  const d = currentTarget();
  const inside = inZone(d);
  const stopped = rig.speedKmh < 1.5;
  if (inside && stopped) {
    zoneTimer += dt;
    const need = 2.2;
    $('progress').classList.remove('hidden');
    $('progtext').textContent = job.phase === 'pickup' ? 'Carregando…' : 'Descarregando…';
    $('progarc').style.strokeDashoffset = 264 * (1 - Math.min(1, zoneTimer / need));
    if (zoneTimer >= need) {
      zoneTimer = 0;
      $('progress').classList.add('hidden');
      if (job.phase === 'pickup') {
        rig.attach(CARGO[job.cargo]);
        job.phase = 'deliver';
        job.tLeft = job.time;
        audio.airBrake();
        toast(`Carga engatada: <b>${CARGO[job.cargo].name}</b> (${CARGO[job.cargo].t} t)`);
        toast(`Entregue em <b>${LOC[job.to].name}</b>`);
        routeT = 0;
        save();
      } else completeJob();
    }
  } else {
    zoneTimer = 0;
    $('progress').classList.add('hidden');
    if (inside && !stopped && rig.speedKmh < 25 && !updateJob.warned) { toast('Pare na área marcada'); updateJob.warned = true; }
    if (!inside) updateJob.warned = false;
  }
}

function completeJob() {
  const job = S.job;
  const c = CARGO[job.cargo];
  const base = job.pay;
  const dmgLoss = Math.round((base * job.damage) / 100);
  const onTime = job.tLeft >= 0;
  const timeAdj = onTime ? Math.round(base * 0.15) : -Math.round(base * 0.2);
  const total = Math.max(0, base - dmgLoss + timeAdj);
  const xp = Math.round(job.xp * (job.damage < 5 ? 1.2 : 1) * (onTime ? 1 : 0.7));
  S.money += total;
  S.stats.deliveries++;
  S.stats.earned += total;
  S.stats.tons += c.t;
  rig.detach();
  S.job = null;
  marker.visible = false;
  navArrow.visible = false;
  audio.airBrake();
  audio.beep(880, 0.12); setTimeout(() => audio.beep(1320, 0.18), 120);
  const lines = [
    ['Pagamento base', fmt(base)],
    [onTime ? 'Bônus no prazo (+15%)' : 'Atraso (−20%)', (timeAdj >= 0 ? '+' : '') + fmt(timeAdj)],
    [`Avaria da carga (${job.damage.toFixed(0)}%)`, '−' + fmt(dmgLoss)],
    ['Experiência', `+${xp} XP`],
  ];
  const ups = addXp(xp);
  popup(`<h2>Entrega concluída! ✅</h2><div>${c.icon} ${c.name} • ${c.t} t → ${LOC[job.to].name}</div>
    <div class="big">${fmt(total)}</div>
    <div class="lines">${lines.map((l) => `<div><span>${l[0]}</span><b>${l[1]}</b></div>`).join('')}</div>
    <button class="btn" data-act="popjobs">Próximo frete</button> <button class="btn alt" data-act="popclose">Continuar dirigindo</button>`,
  ups);
  jobs = genJobs();
  save();
}

function addXp(x) {
  S.xp += x;
  const ups = [];
  while (S.level < MAX_LEVEL && S.xp >= xpForLevel(S.level)) {
    S.xp -= xpForLevel(S.level);
    S.level++;
    ups.push(S.level);
  }
  return ups;
}

function levelUpPopup(lv) {
  const cs = CARGOS.filter((c) => c.lvl === lv);
  const ts = TRUCKS.filter((t) => t.level === lv);
  audio.beep(523, 0.12); setTimeout(() => audio.beep(659, 0.12), 120); setTimeout(() => audio.beep(784, 0.25), 240);
  popup(`<h2>⭐ Nível ${lv}!</h2><div>Você subiu de nível.</div>
    <div class="lines">${cs.map((c) => `<div><span>${c.icon} Nova carga: ${c.name}</span><b>${c.t} t</b></div>`).join('')}
    ${ts.map((t) => `<div><span>🚚 Novo caminhão: ${t.name}</span><b>${fmt(t.price)}</b></div>`).join('')}
    ${!cs.length && !ts.length ? '<div><span>Fretes mais longos e lucrativos</span><b>+XP</b></div>' : ''}</div>
    <button class="btn" data-act="popclose">Show!</button>`);
}

// ---------------- Entrada ----------------
function setupInput() {
  const hold = (el, key) => {
    const on = (e) => { e.preventDefault(); ctl[key] = true; el.classList.add('on'); audio.init(); if (el.setPointerCapture && e.pointerId !== undefined) try { el.setPointerCapture(e.pointerId); } catch (x) { /* */ } };
    const off = (e) => { e.preventDefault(); ctl[key] = false; el.classList.remove('on'); };
    el.addEventListener('pointerdown', on);
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
    el.addEventListener('lostpointercapture', off);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  };
  hold($('gas'), 'gas');
  hold($('brake'), 'brake');
  hold($('left'), 'left');
  hold($('right'), 'right');
  const horn = $('horn');
  horn.addEventListener('pointerdown', (e) => { e.preventDefault(); audio.init(); audio.horn(true); horn.classList.add('on'); });
  const hoff = () => { audio.horn(false); horn.classList.remove('on'); };
  horn.addEventListener('pointerup', hoff);
  horn.addEventListener('pointercancel', hoff);
  horn.addEventListener('pointerleave', hoff);

  const keys = { ArrowUp: 'gas', KeyW: 'gas', ArrowDown: 'brake', KeyS: 'brake', Space: 'brake', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
  window.addEventListener('keydown', (e) => {
    audio.init();
    if (keys[e.code]) { ctl[keys[e.code]] = true; e.preventDefault(); }
    if (e.code === 'KeyH') audio.horn(true);
    if (e.code === 'KeyC' && !e.repeat) cycleCamera();
    if (e.code === 'KeyM' && !e.repeat) openMap();
    if (e.code === 'Escape') onBack();
  });
  window.addEventListener('keyup', (e) => {
    if (keys[e.code]) ctl[keys[e.code]] = false;
    if (e.code === 'KeyH') audio.horn(false);
  });

  // arrastar na tela gira a câmera
  const cv = $('gl');
  let drag = null;
  cv.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, id: e.pointerId }; });
  window.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    cam.orbit += (e.clientX - drag.x) * 0.008;
    drag.x = e.clientX;
    cam.orbitT = 1.8;
  });
  const end = (e) => { if (drag && e.pointerId === drag.id) drag = null; };
  window.addEventListener('pointerup', end);
  window.addEventListener('pointercancel', end);

  // inclinação do aparelho
  window.addEventListener('devicemotion', (e) => {
    const g = e.accelerationIncludingGravity;
    if (!g || g.y == null) return;
    const ang = (screen.orientation && screen.orientation.angle) ?? window.orientation ?? 90;
    const sgn = ang === 90 ? 1 : ang === 270 || ang === -90 ? -1 : 0;
    ctl.tilt = sgn ? clamp((-g.y * sgn) / 4.5, -1, 1) : clamp(-g.x / 4.5, -1, 1);
  });

  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { audio.suspend(); save(); } else { audio.resume(); last = performance.now(); }
  });
  window.addEventListener('pagehide', save);
  window.onAndroidBack = () => onBack();
}

function onBack() {
  if (!$('bigmap').classList.contains('hidden')) { $('bigmap').classList.add('hidden'); return true; }
  if (!$('popup').classList.contains('hidden')) { closePopup(); return true; }
  if (!$('modal').classList.contains('hidden')) { closeModal(); return true; }
  if (state === 'drive') { openModal('settings'); return true; }
  save();
  return false;
}

function readInput(dt) {
  const ramp = (cur, target, up, down) => cur + clamp(target - cur, -down * dt, up * dt);
  const active = state === 'drive';
  input.throttle = ramp(input.throttle, active && ctl.gas ? 1 : 0, 2.5, 6);
  input.brake = ramp(input.brake, active && ctl.brake ? 1 : 0, 6, 8);
  let st = 0;
  if (S.settings.steer === 'tilt') st = Math.abs(ctl.tilt) < 0.06 ? 0 : ctl.tilt;
  st += (ctl.left ? 1 : 0) - (ctl.right ? 1 : 0);
  st = active ? clamp(st, -1, 1) : 0;
  input.steer = ramp(input.steer, st, 2.4, 4);
  if (Math.abs(input.steer) < 0.01 && st === 0) input.steer = 0;
}

function cycleCamera() {
  cam.mode = (cam.mode + 1) % 3;
  S.settings.camera = cam.mode;
  toast(['Câmera: Perseguição', 'Câmera: Aérea', 'Câmera: Cabine'][cam.mode], 1200);
}

// ---------------- Câmera ----------------
const _p = { x: 0, z: 0 }, _o = { x: 0, z: 0 };
function updateCamera(dt, instant = false) {
  const md = rig.model;
  if (cam.orbitT > 0) cam.orbitT -= dt;
  else cam.orbit *= Math.max(0, 1 - dt * 2.5);
  let target = rig.h;
  if (rig.v < -0.5 && cam.mode !== 2) target = rig.h; // mantém atrás mesmo em ré
  const k = instant ? 1 : 1 - Math.exp(-dt * (cam.mode === 2 ? 12 : 2.6));
  let dy = target + cam.orbit - cam.yaw;
  dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  cam.yaw += dy * k;
  const fx = Math.sin(rig.h), fz = Math.cos(rig.h);
  if (cam.mode === 2) {
    const ex = rig.x + fx * (md.zf - 0.7) - Math.cos(rig.h) * 0.45, ez = rig.z + fz * (md.zf - 0.7) + Math.sin(rig.h) * 0.45;
    camera.position.set(ex, (rig.def.id === 'urbano' ? 2.3 : 2.75), ez);
    const lx = Math.sin(cam.yaw), lz = Math.cos(cam.yaw);
    camera.lookAt(ex + lx * 20, 2.0, ez + lz * 20);
    camera.fov = 70;
  } else {
    const len = rig.trailer ? rig.trailer.Lt : 0;
    let dist = (cam.mode === 0 ? 11 : 20) + len * (cam.mode === 0 ? 0.75 : 1.1);
    const hgt = (cam.mode === 0 ? 4.6 : 14) + len * (cam.mode === 0 ? 0.18 : 0.4);
    const px = rig.x + fx * md.wb * 0.5 - (rig.trailer ? Math.sin(rig.th) * len * 0.25 : 0);
    const pz = rig.z + fz * md.wb * 0.5 - (rig.trailer ? Math.cos(rig.th) * len * 0.25 : 0);
    const bx = Math.sin(cam.yaw), bz = Math.cos(cam.yaw);
    // aproxima a câmera se ficar dentro de um prédio
    for (let i = 0; i < 6; i++) {
      _p.x = px - bx * dist; _p.z = pz - bz * dist;
      if (world.resolveCircle(_p, 0.6, _o) <= 0 || hgt > 30) break;
      dist *= 0.8;
    }
    const tx = px - bx * dist, tz = pz - bz * dist;
    const kp = instant ? 1 : 1 - Math.exp(-dt * 8);
    cam.pos.x += (tx - cam.pos.x) * kp;
    cam.pos.z += (tz - cam.pos.z) * kp;
    cam.pos.y += (hgt - cam.pos.y) * kp;
    camera.position.copy(cam.pos);
    camera.lookAt(px, 2.2 + (cam.mode === 1 ? 0 : 0.4), pz);
    camera.fov = 58 + Math.min(8, rig.speedKmh * 0.08);
  }
  camera.updateProjectionMatrix();

  if (Q.shadows) {
    sun.target.position.set(rig.x, 0, rig.z);
    sun.position.set(rig.x + 150, 170, rig.z + 95);
  }
  sky.position.copy(camera.position);
}

// ---------------- Mapa ----------------
let mapCanvas, mapScale;
const MAP_PAD = 70;
function buildMapCanvas() {
  const size = 1024;
  mapCanvas = document.createElement('canvas');
  mapCanvas.width = mapCanvas.height = size;
  const ctx = mapCanvas.getContext('2d');
  const W = 2 * (HALF + MAP_PAD);
  mapScale = size / W;
  const m = (v) => (v + HALF + MAP_PAD) * mapScale;
  ctx.fillStyle = '#3f5d36';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = '#2d6f93';
  ctx.fillRect(0, m(HALF + 60), size, size);
  const zc = { downtown: '#8b95a3', residential: '#a8a294', park: '#4f8a3a', farm: '#86803f', industrial: '#8d8473', port: '#7b8790' };
  for (let bx = 0; bx < GRID; bx++)
    for (let bz = 0; bz < GRID; bz++) {
      ctx.fillStyle = zc[zoneOf(bx, bz)];
      ctx.fillRect(m(roadCoord(bx) + 10), m(roadCoord(bz) + 10), (BLOCK - 20) * mapScale, (BLOCK - 20) * mapScale);
    }
  for (const L of LOCATIONS) {
    const d = world.depots[L.id];
    const [x0, z0, x1, z1] = d.lot;
    ctx.fillStyle = '#cfc9bd';
    ctx.fillRect(m(x0), m(z0), (x1 - x0) * mapScale, (z1 - z0) * mapScale);
  }
  ctx.strokeStyle = '#2b2d31';
  ctx.lineWidth = ROAD_W * mapScale;
  ctx.lineCap = 'square';
  for (let i = 0; i <= GRID; i++) {
    const c = m(roadCoord(i));
    ctx.beginPath(); ctx.moveTo(c, m(-HALF)); ctx.lineTo(c, m(HALF)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(m(-HALF), c); ctx.lineTo(m(HALF), c); ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(232,185,35,0.55)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= GRID; i++) {
    const c = m(roadCoord(i));
    ctx.beginPath(); ctx.moveTo(c, m(-HALF)); ctx.lineTo(c, m(HALF)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(m(-HALF), c); ctx.lineTo(m(HALF), c); ctx.stroke();
  }
}

function mapIcon(ctx, x, y, color, r, label) {
  ctx.fillStyle = color;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.stroke();
  if (label) {
    ctx.font = `700 ${r * 1.1}px sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, x, y + 1);
  }
}

function drawMinimap() {
  const cv = $('minimap'), ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const zoom = 1.25;
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#3f5d36';
  ctx.fillRect(0, 0, W, H);
  ctx.translate(W / 2, H * 0.62);
  ctx.rotate(Math.PI + rig.h);
  ctx.scale(zoom, zoom);
  const m = (v) => (v + HALF + MAP_PAD) * mapScale;
  ctx.translate(-m(rig.x), -m(rig.z));
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(mapCanvas, 0, 0);
  if (route && S.job) {
    ctx.strokeStyle = '#ffb703';
    ctx.lineWidth = 7 / zoom;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    route.path.forEach((p, i) => (i ? ctx.lineTo(m(p.x), m(p.z)) : ctx.moveTo(m(p.x), m(p.z))));
    ctx.stroke();
  }
  for (const L of LOCATIONS) {
    const d = world.depots[L.id];
    const tgt = currentTarget();
    mapIcon(ctx, m(d.zone.x), m(d.zone.z), tgt === d ? '#ffb703' : L.id === 'garagem' ? '#2f6fde' : 'rgba(30,30,30,0.85)', (tgt === d ? 9 : 6) / zoom);
  }
  for (const c of traffic.cars) {
    ctx.fillStyle = 'rgba(255,255,255,0.65)';
    ctx.fillRect(m(c.x) - 1.5, m(c.z) - 1.5, 3, 3);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  // jogador
  ctx.translate(W / 2, H * 0.62);
  ctx.fillStyle = '#3ee07a';
  ctx.strokeStyle = '#0b1a10';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(10, 11); ctx.lineTo(0, 5); ctx.lineTo(-10, 11); ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function openMap() {
  const bm = $('bigmap'), cv = $('bigmapc');
  bm.classList.remove('hidden');
  const s = Math.min(window.innerWidth * 0.96, window.innerHeight * 0.94);
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  cv.width = cv.height = s * dpr;
  cv.style.width = cv.style.height = s + 'px';
  const ctx = cv.getContext('2d');
  const k = cv.width / mapCanvas.width;
  ctx.drawImage(mapCanvas, 0, 0, cv.width, cv.height);
  const m = (v) => (v + HALF + MAP_PAD) * mapScale * k;
  if (route && S.job) {
    ctx.strokeStyle = '#ffb703';
    ctx.lineWidth = 5 * dpr;
    ctx.beginPath();
    route.path.forEach((p, i) => (i ? ctx.lineTo(m(p.x), m(p.z)) : ctx.moveTo(m(p.x), m(p.z))));
    ctx.stroke();
  }
  const tgt = currentTarget();
  for (const L of LOCATIONS) {
    const d = world.depots[L.id];
    const x = m(d.zone.x), y = m(d.zone.z);
    mapIcon(ctx, x, y, tgt === d ? '#ffb703' : L.id === 'garagem' ? '#2f6fde' : '#222', 8 * dpr);
    ctx.font = `700 ${11 * dpr}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.lineWidth = 3 * dpr;
    ctx.strokeStyle = 'rgba(0,0,0,0.8)';
    ctx.strokeText(L.name, x, y - 14 * dpr);
    ctx.fillStyle = '#fff';
    ctx.fillText(L.name, x, y - 14 * dpr);
  }
  ctx.save();
  ctx.translate(m(rig.x), m(rig.z));
  ctx.rotate(Math.PI + rig.h);
  ctx.scale(dpr, dpr);
  ctx.fillStyle = '#3ee07a'; ctx.strokeStyle = '#000'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(9, 10); ctx.lineTo(0, 5); ctx.lineTo(-9, 10); ctx.closePath(); ctx.fill(); ctx.stroke();
  ctx.restore();
}

// ---------------- UI ----------------
let curTab = 'jobs';
function setupUI() {
  document.body.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act],[data-tab]');
    if (!b) return;
    audio.init();
    if (b.dataset.tab) { renderTab(b.dataset.tab); return; }
    const a = b.dataset.act, arg = b.dataset.arg;
    if (a === 'jobs' || a === 'garage') openModal(a);
    else if (a === 'menu') openModal('settings');
    else if (a === 'camera') cycleCamera();
    else if (a === 'close') closeModal();
    else if (a === 'accept') acceptJob(+arg);
    else if (a === 'refresh') { jobs = genJobs(); renderTab('jobs'); }
    else if (a === 'cancel') { cancelJob(); renderTab('jobs'); }
    else if (a === 'buy') buyTruck(arg);
    else if (a === 'use') useTruck(arg);
    else if (a === 'popclose') closePopup();
    else if (a === 'popjobs') { closePopup(); openModal('jobs'); }
    else if (a === 'closemap') $('bigmap').classList.add('hidden');
    else if (a === 'quality') { S.settings.quality = arg; save(); renderTab('settings'); toast('Reiniciando para aplicar…'); setTimeout(() => location.reload(), 500); }
    else if (a === 'steermode') { S.settings.steer = arg; save(); renderTab('settings'); }
    else if (a === 'fps') { S.settings.fps = !S.settings.fps; $('fps').classList.toggle('hidden', !S.settings.fps); save(); renderTab('settings'); }
    else if (a === 'reset') { if (confirm('Apagar todo o progresso?')) { localStorage.removeItem(SAVE_KEY); location.reload(); } }
    else if (a === 'rescue') { rescue(); closeModal(); }
  });
  $('mapwrap').addEventListener('click', openMap);
  $('fps').classList.toggle('hidden', !S.settings.fps);
  $('tabbody').addEventListener('input', (e) => {
    if (e.target.id === 'vol') { S.settings.volume = +e.target.value; audio.setVolume(S.settings.volume); save(); }
  });
  $('play').addEventListener('click', () => {
    audio.init();
    $('title').classList.add('hidden');
    $('hud').classList.remove('hidden');
    state = 'drive';
    try { if (document.documentElement.requestFullscreen && !window.AndroidBridge) document.documentElement.requestFullscreen().catch(() => {}); } catch (e) { /* */ }
    if (!S.job && S.stats.deliveries === 0) setTimeout(() => openModal('jobs'), 400);
  });
}

function showTitle() {
  state = 'title';
  $('title').classList.remove('hidden');
  $('titlestats').innerHTML = `<div>⭐ Nível ${S.level}</div><div>💰 ${fmt(S.money)}</div><div>📦 ${S.stats.deliveries} entregas</div><div>🎨 Gráficos: ${qName === 'low' ? 'Leve' : qName === 'medium' ? 'Médio' : 'Ultra'}</div>`;
}

function openModal(tab) {
  if (state === 'title') return;
  state = 'menu';
  $('modal').classList.remove('hidden');
  ctl.gas = ctl.brake = ctl.left = ctl.right = false;
  document.querySelectorAll('.pad').forEach((p) => p.classList.remove('on'));
  renderTab(tab);
}
function closeModal() {
  $('modal').classList.add('hidden');
  if (state === 'menu') state = 'drive';
}

function popup(html, ups = []) {
  $('popcard').innerHTML = html;
  $('popup').classList.remove('hidden');
  state = state === 'drive' ? 'menu' : state;
  popup.queue = ups;
}
function closePopup() {
  $('popup').classList.add('hidden');
  if ($('modal').classList.contains('hidden')) state = 'drive';
  const q = popup.queue || [];
  if (q.length) { const lv = q.shift(); popup.queue = q; levelUpPopup(lv); popup.queue = q; }
}

function renderTab(tab) {
  curTab = tab;
  document.querySelectorAll('.tabs [data-tab]').forEach((b) => b.classList.toggle('on', b.dataset.tab === tab));
  const body = $('tabbody');
  if (tab === 'jobs') body.innerHTML = jobsHTML();
  else if (tab === 'garage') body.innerHTML = garageHTML();
  else if (tab === 'profile') body.innerHTML = profileHTML();
  else body.innerHTML = settingsHTML();
  body.scrollTop = 0;
}

function jobCard(j, i) {
  const c = CARGO[j.cargo];
  const why = lockReason(j);
  const tags = [c.fragile ? '<span class="chip tag">Frágil</span>' : '', c.hazard ? '<span class="chip tag">Perigosa</span>' : '', c.trailer === 'lowboy' ? '<span class="chip tag">Indivisível</span>' : ''].join('');
  return `<div class="card ${why ? 'locked' : ''}">
    <div class="ic">${c.icon}</div><h3>${c.name}</h3><div class="t">${c.t} toneladas</div>
    <div class="route">📍 ${LOC[j.from].name} → 🏁 ${LOC[j.to].name}</div>
    <div class="row"><span class="chip pay">${fmt(j.pay)}</span><span class="chip xp">+${j.xp} XP</span><span class="chip">${(j.dist / 1000).toFixed(1)} km</span><span class="chip">⏱ ${Math.ceil(j.time / 60)} min</span>${tags}</div>
    ${why ? `<div class="row"><span class="chip warn">🔒 ${why}</span></div>` : `<button class="btn" data-act="accept" data-arg="${i}" ${S.job ? 'disabled' : ''}>Aceitar frete</button>`}
  </div>`;
}

function jobsHTML() {
  let head = '';
  if (S.job) {
    const j = S.job, c = CARGO[j.cargo];
    head = `<div class="card" style="margin-bottom:10px;border-color:#ffb703"><div class="ic">${c.icon}</div><h3>Frete ativo: ${c.name} (${c.t} t)</h3>
      <div class="route">${j.phase === 'pickup' ? 'Coletar em' : 'Entregar em'} <b>${LOC[j.phase === 'pickup' ? j.from : j.to].name}</b> • Avaria ${j.damage.toFixed(0)}% • Pagamento ${fmt(j.pay)}</div>
      <button class="btn danger" data-act="cancel">Cancelar frete${j.phase === 'deliver' ? ' (multa 25%)' : ''}</button></div>`;
  }
  return `${head}<div class="tbar"><div class="grow">Caminhão atual: <b>${rig.def.name}</b> — até <b>${rig.def.cap} t</b> • Nível ${S.level}</div>
    <button class="btn alt" data-act="refresh" style="margin:0">🔄 Atualizar</button></div>
    <div class="grid">${jobs.map(jobCard).join('')}</div>`;
}

function garageHTML() {
  const maxHp = 750, maxCap = 90;
  return `<div class="tbar"><div class="grow">Saldo: <b style="color:#7ee787">${fmt(S.money)}</b> • A força do caminhão define as cargas que ele consegue puxar.</div></div><div class="grid">` +
    TRUCKS.map((t) => {
      const owned = S.owned.includes(t.id);
      const cur = S.truck === t.id;
      const lockLv = t.level > S.level;
      let btn;
      if (cur) btn = '<button class="btn alt" disabled>Em uso</button>';
      else if (owned) btn = `<button class="btn" data-act="use" data-arg="${t.id}">Usar</button>`;
      else if (lockLv) btn = `<span class="chip warn">🔒 Nível ${t.level}</span>`;
      else btn = `<button class="btn" data-act="buy" data-arg="${t.id}" ${S.money < t.price ? 'disabled' : ''}>Comprar ${fmt(t.price)}</button>`;
      const col = '#' + new THREE.Color(t.color).getHexString();
      return `<div class="card ${lockLv && !owned ? 'locked' : ''}">
        <div class="truckpic" style="background:linear-gradient(135deg, ${col}, #1b2230)">${t.rigid ? '🚚' : '🚛'}</div>
        <h3>${t.name}</h3><div style="font-size:12px;opacity:.8;margin:2px 0 8px">${t.desc}</div>
        <div class="stat"><span>Potência</span><b>${t.hp} cv</b></div><div class="meter"><i style="width:${(t.hp / maxHp) * 100}%"></i></div>
        <div class="stat"><span>Capacidade</span><b>${t.cap} t</b></div><div class="meter"><i style="width:${(t.cap / maxCap) * 100}%"></i></div>
        <div class="stat"><span>Velocidade máx.</span><b>${t.vmax} km/h</b></div>
        <div class="stat"><span>Tipo</span><b>${t.rigid ? 'Rígido (baú)' : `Cavalo mecânico ${t.cfg}`}</b></div>
        ${btn}</div>`;
    }).join('') + '</div>';
}

function buyTruck(id) {
  const t = TRUCK[id];
  if (!t || S.owned.includes(id) || S.money < t.price || t.level > S.level) return;
  S.money -= t.price;
  S.owned.push(id);
  audio.beep(784, 0.1); audio.beep(1046, 0.15);
  toast(`Você comprou o <b>${t.name}</b>!`);
  useTruck(id);
}

function useTruck(id) {
  const t = TRUCK[id];
  if (!S.owned.includes(id)) return;
  if (S.job && S.job.phase === 'deliver') { toast('Conclua ou cancele o frete antes de trocar'); return; }
  S.truck = id;
  rig.setTruck(t);
  if (S.job && lockReason(S.job, t)) { cancelJob(); }
  save();
  renderTab('garage');
}

function profileHTML() {
  const st = S.stats;
  const need = xpForLevel(S.level);
  const next = CARGOS.filter((c) => c.lvl > S.level).slice(0, 4);
  return `<div class="grid">
    <div class="card"><h3>⭐ Nível ${S.level}${S.level >= MAX_LEVEL ? ' (máximo)' : ''}</h3><div class="meter" style="margin-top:8px"><i style="width:${(S.xp / need) * 100}%"></i></div>
      <div class="stat"><span>Experiência</span><b>${S.xp} / ${need} XP</b></div><div class="stat"><span>Saldo</span><b>${fmt(S.money)}</b></div>
      <div class="stat"><span>Caminhões</span><b>${S.owned.length} / ${TRUCKS.length}</b></div></div>
    <div class="card"><h3>📊 Estatísticas</h3>
      <div class="stat"><span>Entregas</span><b>${st.deliveries}</b></div><div class="stat"><span>Distância</span><b>${st.km.toFixed(1)} km</b></div>
      <div class="stat"><span>Toneladas transportadas</span><b>${st.tons.toFixed(1)} t</b></div><div class="stat"><span>Total faturado</span><b>${fmt(st.earned)}</b></div>
      <div class="stat"><span>Colisões</span><b>${st.crashes}</b></div></div>
    <div class="card"><h3>🔓 Próximas cargas</h3>${next.map((c) => `<div class="stat"><span>${c.icon} ${c.name} (${c.t} t)</span><b>Nível ${c.lvl}</b></div>`).join('') || '<div class="stat">Todas as cargas liberadas!</div>'}</div>
  </div>`;
}

function settingsHTML() {
  const seg = (act, cur, opts) => `<div class="seg">${opts.map(([v, l]) => `<button data-act="${act}" data-arg="${v}" class="${cur === v ? 'on' : ''}">${l}</button>`).join('')}</div>`;
  return `<div class="set"><div><b>Qualidade gráfica</b><br><small style="opacity:.7">Atual: ${qName === 'low' ? 'Leve' : qName === 'medium' ? 'Médio' : 'Ultra'} • resolução dinâmica ativa</small></div>
      ${seg('quality', S.settings.quality, [['auto', 'Auto'], ['low', 'Leve'], ['medium', 'Médio'], ['high', 'Ultra']])}</div>
    <div class="set"><div><b>Direção</b><br><small style="opacity:.7">Botões na tela ou inclinação do celular</small></div>
      ${seg('steermode', S.settings.steer, [['buttons', 'Botões'], ['tilt', 'Inclinação']])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${S.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${seg('fps', S.settings.fps ? 1 : 0, [[1, 'Sim'], [0, 'Não']])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminhão de volta para a rua mais próxima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">WASD/setas • Espaço freio/ré • H buzina • C câmera • M mapa</small></div></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`;
}

function rescue() {
  const ix = clamp(Math.round((rig.x + HALF) / BLOCK), 0, GRID), iz = clamp(Math.round((rig.z + HALF) / BLOCK), 0, GRID);
  const x = roadCoord(ix), z = roadCoord(iz);
  const dx = Math.abs(rig.x - x), dz = Math.abs(rig.z - z);
  if (dx < dz) rig.place(x + 5, clamp(rig.z, -HALF, HALF), 0);
  else rig.place(clamp(rig.x, -HALF, HALF), z - 5, Math.PI / 2);
  updateCamera(0, true);
}

function toast(html, ms = 2600) {
  const d = document.createElement('div');
  d.innerHTML = html;
  $('toast').appendChild(d);
  while ($('toast').children.length > 3) $('toast').firstChild.remove();
  setTimeout(() => d.remove(), ms);
}

// ---------------- HUD ----------------
let hudT = 0;
function updateHUD(dt) {
  hudT -= dt;
  const sp = Math.round(rig.speedKmh);
  $('speed').textContent = sp;
  $('gear').textContent = rig.gear || 'N';
  $('rpmarc').style.strokeDashoffset = 252 * (1 - clamp(rig.rpm, 0, 1));
  if (hudT > 0) return;
  hudT = 0.2;
  $('lvl').textContent = S.level;
  $('money').textContent = fmt(S.money);
  const need = xpForLevel(S.level);
  $('xpbar').style.width = (S.level >= MAX_LEVEL ? 100 : (S.xp / need) * 100) + '%';
  $('xptext').textContent = S.level >= MAX_LEVEL ? 'Nível máximo' : `${S.xp} / ${need} XP`;
  const m = (rig.mass / 1000).toFixed(1);
  $('load').textContent = `${m} t`;
  const j = S.job;
  if (j) {
    const c = CARGO[j.cargo];
    const d = route ? route.len : 0;
    $('jobtitle').textContent = `${c.icon} ${c.name} • ${c.t} t`;
    const dest = LOC[j.phase === 'pickup' ? j.from : j.to].name;
    let tm = '';
    if (j.phase === 'deliver') {
      const t = Math.abs(j.tLeft), mm = Math.floor(t / 60), ss = Math.floor(t % 60);
      tm = ` • <span class="${j.tLeft < 0 ? 'late' : ''}">⏱ ${j.tLeft < 0 ? '-' : ''}${mm}:${String(ss).padStart(2, '0')}</span>`;
    }
    $('jobsub').innerHTML = `${j.phase === 'pickup' ? 'Coletar' : 'Entregar'}: <b>${dest}</b> • ${(d / 1000).toFixed(1)} km${tm}`;
    $('dist').textContent = d > 1000 ? (d / 1000).toFixed(1) + ' km' : Math.round(d) + ' m';
    $('damage').classList.toggle('hidden', j.phase !== 'deliver');
    $('dmg').textContent = j.damage.toFixed(0) + '%';
  } else {
    $('jobtitle').textContent = 'Sem frete ativo';
    $('jobsub').innerHTML = 'Toque em 📋 para escolher uma carga';
    $('dist').textContent = '';
    $('damage').classList.add('hidden');
  }
}

// ---------------- Loop ----------------
let last = 0, t = 0, frames = 0, fpsT = 0, saveT = 0;
function loop(now) {
  requestAnimationFrame(loop);
  if (document.hidden) return;
  let dt = (now - last) / 1000;
  last = now;
  if (!(dt > 0)) return;
  dt = Math.min(dt, 0.05);
  t += dt;
  frames++;
  fpsT += dt;
  if (fpsT >= 1.5) {
    const fps = frames / fpsT;
    adaptResolution(fps);
    if (S.settings.fps) $('fps').textContent = `${fps.toFixed(0)} FPS • ${qName} • ${(pr).toFixed(2)}x • ${renderer.info.render.calls} dc`;
    frames = 0; fpsT = 0;
  }

  readInput(dt);
  const sim = state === 'drive' || state === 'title';
  if (sim) {
    traffic.obstacles(obstacles);
    const steps = 2;
    for (let i = 0; i < steps; i++) rig.update(dt / steps, input, world, obstacles);
    if (rig.lastImpact > 0) onImpact(rig.lastImpact);
    S.stats.km += (Math.abs(rig.v) * dt) / 1000;
    const cs = rig._cs || [];
    traffic.update(dt, rig, cs);
    if (state === 'drive') updateJob(dt);
  }
  if (state === 'title') {
    cam.orbit += dt * 0.12;
    cam.orbitT = 1;
  }
  world.update(dt, t);
  updateNav(dt);
  updateCamera(dt);
  audio.engine(rig.rpm, input.throttle, true);
  if (state !== 'title') { updateHUD(dt); drawMinimap(); }
  saveT += dt;
  if (saveT > 8) { saveT = 0; save(); }
  renderer.render(scene, camera);
}

function onImpact(sp) {
  S.stats.crashes++;
  audio.crash(sp);
  if (navigator.vibrate) try { navigator.vibrate(Math.min(120, sp * 4)); } catch (e) { /* */ }
  if (S.job && S.job.phase === 'deliver') {
    const c = CARGO[S.job.cargo];
    const add = Math.min(30, sp * (c.fragile ? 0.55 : 0.3));
    S.job.damage = Math.min(100, S.job.damage + add);
    toast(`💥 Batida! Carga avariada +${add.toFixed(0)}%`, 1800);
  }
}

function updateNav(dt) {
  const d = currentTarget();
  if (!d) { marker.visible = false; navArrow.visible = false; return; }
  routeT -= dt;
  if (routeT <= 0) { route = findRoute(rig.x, rig.z, d); routeT = 0.5; }
  marker.visible = true;
  marker.position.set(d.zone.x, 0, d.zone.z);
  marker.zone.scale.set(d.zone.w, d.zone.d, 1);
  const inside = inZone(d);
  marker.zone.material.color.setHex(inside ? 0x3ee07a : 0xffc400);
  marker.cone.position.y = 7 + Math.sin(t * 3) * 0.8;
  marker.cone.rotation.y = t * 1.5;
  // seta de navegação acima da cabine
  let wp = null;
  if (route) for (let i = 1; i < route.path.length; i++) {
    const p = route.path[i];
    if (Math.hypot(p.x - rig.x, p.z - rig.z) > 22 || i === route.path.length - 1) { wp = p; break; }
  }
  if (wp && cam.mode !== 2) {
    navArrow.visible = true;
    const fx = Math.sin(rig.h), fz = Math.cos(rig.h);
    navArrow.position.set(rig.x + fx * rig.model.zf * 0.5, (rig.def.id === 'urbano' ? 4.2 : 5.4) + Math.sin(t * 4) * 0.12, rig.z + fz * rig.model.zf * 0.5);
    navArrow.rotation.y = Math.atan2(wp.x - rig.x, wp.z - rig.z);
  } else navArrow.visible = false;
}

function adaptResolution(fps) {
  const dpr = window.devicePixelRatio || 1;
  const cap = Math.min(dpr, Q.pr);
  let np = pr;
  if (fps < 27) np = Math.max(Q.minPr * Math.min(1, dpr), pr * 0.88);
  else if (fps > 52) np = Math.min(cap, pr * 1.06);
  if (Math.abs(np - pr) > 0.01) {
    pr = np;
    renderer.setPixelRatio(pr);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  }
}

function onResize() {
  if (!renderer) return;
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

window.addEventListener('error', (e) => {
  const m = $('loadmsg');
  if (m && state === 'loading') m.textContent = 'Erro: ' + e.message;
});

// Expõe ganchos para testes automatizados
window.__game = { S, get rig() { return rig; }, get state() { return state; }, ctl, acceptJob: (i) => acceptJob(i), get jobs() { return jobs; }, world: () => world, cam };

boot().catch((e) => { $("loadmsg").textContent = "Erro ao iniciar: " + e.message; console.error(e); });
