// Drizzie Truck — núcleo do jogo: renderização, controles, fretes, progressão e HUD.
import * as THREE from 'three';
import { FUEL_PRICE, FUEL_SCALE, autonomy, SURFACES, BLOCK, ROAD_W, HW_HALF, CITIES, cx1, cz1, zoneOf, LOCATIONS, LOC, TRUCKS, TRUCK, CARGOS, CARGO, xpForLevel, MAX_LEVEL, WORLD, SEA_Z, RIVER_W } from './data.js';
import { configureTextures, tex } from './textures.js';
import { World } from './world.js';
import { Rig, setTruckQuality, MODELS } from './truck.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { Traffic, trafficQuality } from './traffic.js';
import { Weather } from './weather.js';
import { findRoute, buildGraph } from './route.js';
import { Audio } from './audio.js';

const $ = (id) => document.getElementById(id);
const SAVE_KEY = 'drizzieTruck.v1';
const fmt = (n) => 'R$ ' + Math.round(n).toLocaleString('pt-BR');
const RH = ROAD_W / 2;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// ---------------- Save ----------------
const DEFAULTS = {
  money: 3000, xp: 0, level: 1, owned: ['mini'], truck: 'mini', job: null, pos: null, name: 'Motorista', clock: 15.5, fuelBy: {}, tire: { flat: 0, spare: true },
  stats: { deliveries: 0, km: 0, earned: 0, tons: 0, crashes: 0 },
  settings: { weather: 'auto', quality: 'auto', volume: 0.7, fps: false, steer: 'wheel', camera: 0, time: 'cycle', gearbox: 'manual', gauge: 'analog', accent: 'amber', hud: 'normal' },
};
function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (s && s.level) {
      const r = { ...DEFAULTS, ...s, stats: { ...DEFAULTS.stats, ...s.stats }, settings: { ...DEFAULTS.settings, ...s.settings } };
      if (!r.owned.includes('mini')) r.owned.unshift('mini');
      return r;
    }
  } catch (e) { /* sem save */ }
  return JSON.parse(JSON.stringify(DEFAULTS));
}
const S = loadSave();
// VERSÃO DE TESTES: tudo liberado (nível máximo, todos os caminhões, dinheiro de sobra)
const TEST_MODE = true;
function unlockAll() {
  if (!TEST_MODE) return;
  S.level = MAX_LEVEL; S.xp = 0;
  S.owned = TRUCKS.map((t) => t.id);
  if (S.money < 5000000) S.money = 10000000;
}
unlockAll();
function save() {
  try {
    S.pos = rig ? { x: rig.x, z: rig.z, h: rig.h } : S.pos;
    unlockAll();
    if (rig) { S.fuelBy[S.truck] = +rig.fuel.toFixed(2); S.tire = { flat: rig.flat, spare: rig.spare }; }
    localStorage.setItem(SAVE_KEY, JSON.stringify(S));
  } catch (e) { /* armazenamento indisponível */ }
}

// ---------------- Qualidade gráfica ----------------
const QUALITY = {
  low: { pr: 1.0, minPr: 0.75, shadows: false, shadowSize: 0, tex: 512, aniso: 2, traffic: 10, fogNear: 150, fogFar: 650, far: 900, trees: 9000, terrainStep: 42 },
  medium: { pr: 1.5, minPr: 0.85, shadows: true, shadowSize: 1024, tex: 1024, aniso: 4, traffic: 16, fogNear: 260, fogFar: 1050, far: 1500, trees: 16000, terrainStep: 32 },
  high: { pr: 2.0, minPr: 1.0, shadows: true, shadowSize: 2048, tex: 1024, aniso: 8, traffic: 22, fogNear: 380, fogFar: 1600, far: 2600, trees: 26000, terrainStep: 25 },
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
let renderer, scene, camera, world, rig, traffic, sun, sky, hemi, stars, headSpot;
let pmrem = null, envScene = null, envNight = -1, clouds = null, physSky = null, mountains = null;
let night = 0;
const audio = new Audio();
audio.volume = S.settings.volume;
let state = 'loading';
let jobs = [];
let route = null, routeT = 0, nextWp = null;
let marker, navArrow;
let zoneTimer = 0;
const obstacles = [];
const ctl = { gas: false, brake: false, left: false, right: false, tilt: 0, wheel: 0, wheelHeld: false, gear: 'D', hand: false, blink: 0, blinkArm: false };
const input = { throttle: 0, brake: 0, steer: 0, gear: 'D', handbrake: false };
let lightsManual = null, weather = null;
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
  setTruckQuality(qName);

  scene = new THREE.Scene();
  const skyCol = new THREE.Color(0xbcd6ea);
  scene.background = skyCol;
  scene.fog = new THREE.Fog(skyCol, Q.fogNear, Q.fogFar);
  camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.5, Q.far);

  buildSky();
  hemi = new THREE.HemisphereLight(0xdbeeff, 0x5d6b45, 1.25);
  scene.add(hemi);
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
  buildGraph(world);
  await step(62, 'Carregando caminhões 3D…');
  const gl = new GLTFLoader();
  gl.setMeshoptDecoder(MeshoptDecoder);
  for (const name of ['labo', 'canter', 'volvo', 'flatbed']) {
    try { MODELS[name] = (await gl.loadAsync(`models/${name}.glb`)).scene; } catch (e) { console.warn('modelo', name, e); }
  }
  await step(70, 'Ligando o motor…');
  rig = new Rig(scene, TRUCK[S.truck] || TRUCKS[0], Q.shadows);
  if (qName !== 'low') {
    headSpot = new THREE.SpotLight(0xfff1d6, 0, 70, 0.55, 0.6, 1.2);
    headSpot.target = new THREE.Object3D();
    rig.onModel = (md) => {
      md.root.add(headSpot, headSpot.target);
      headSpot.position.set(0, md.y0 + 0.3, md.zf + 0.4);
      headSpot.target.position.set(0, 0, md.zf + 22);
    };
    rig.onModel(rig.model);
  }
  placeAtStart();
  restoreTruckState();
  rig.onPuncture = () => {
    audio.crash(18); audio.airBrake();
    if (navigator.vibrate) try { navigator.vibrate([60, 40, 60]); } catch (e) { /* */ }
    toast(`💥 <b>Pneu furado!</b> ${rig.spare ? 'Pare e troque pelo estepe' : 'Sem estepe — vá até um posto (borracharia)'}`, 3800);
  };
  rig.onFuelOut = () => { audio.beep(300, 0.4, 'sawtooth', 0.15); toast('⛽ <b>Acabou o diesel!</b> O motor apagou.', 4000); $('enginebtn').classList.remove('hidden'); };
  rig.onDrown = () => { audio.beep(220, 0.5, 'sawtooth', 0.12); toast('🌊 <b>Motor afogou</b> na enchente! Saia da água e ligue de novo', 4000); $('enginebtn').classList.remove('hidden'); };
  rig.onRollover = () => {
    audio.crash(60);
    S.stats.crashes++;
    if (navigator.vibrate) try { navigator.vibrate([200, 80, 300]); } catch (e) { /* */ }
    rig.engineOn = false; $('enginebtn').classList.remove('hidden');
    let msg = '💥 Tombou!';
    if (S.job && S.job.phase === 'deliver') { S.job.damage = Math.min(100, S.job.damage + 55); msg += ' Carga avariada +55%'; }
    toast(msg, 3500);
    setTimeout(() => audio.crash(35), 450);
  };
  // rodas voltando ao chão depois de levantar numa curva
  rig.onWheelsDown = (w) => { audio.crash(Math.min(40, w * 25)); if (navigator.vibrate) try { navigator.vibrate(Math.min(150, w * 80)); } catch (e) { /* */ } };
  weather = new Weather(scene, qName, audio);
  weather.setMode(S.settings.weather || 'auto');
  let lastSky = weather.state;
  weather.onCheck = () => {
    if (weather.state === lastSky) return;
    const was = lastSky; lastSky = weather.state;
    if (state !== 'drive') return;
    if (weather.state === 'chuva') toast('🌧️ Começou a chover — pista escorregadia', 3000);
    else if (weather.state === 'tempestade') toast('⛈️ Tempestade! Cuidado com alagamentos', 3200);
    else if (was === 'chuva' || was === 'tempestade') toast('🌤️ A chuva está passando', 2200);
  };
  trafficQuality(qName === 'low');
  traffic = new Traffic(scene, Q.traffic, world);
  buildMarkers();
  await step(85, 'Desenhando o mapa…');
  buildMapCanvas();
  if (S.job && S.job.phase === 'deliver') rig.attach(CARGO[S.job.cargo]);
  jobs = genJobs();
  setupInput();
  setupUI();
  if (qName !== 'low') { pmrem = new THREE.PMREMGenerator(renderer); buildEnvScene(); }
  applyTime(S.clock);
  await step(100, 'Pronto!');
  renderer.compile(scene, camera);
  $('loading').classList.add('hidden');
  showTitle();
  last = performance.now();
  requestAnimationFrame(loop);
}

// ---------------- Dia e noite ----------------
const C_DAY = new THREE.Color(0xbcd6ea), C_DUSK = new THREE.Color(0xe39a6b), C_NIGHT = new THREE.Color(0x0a1120);
const _c1 = new THREE.Color();
function applyTime(h) {
  const mode = S.settings.time;
  if (mode === 'day') h = 12; else if (mode === 'night') h = 23; else if (mode === 'dusk') h = 17.7;
  const elev = Math.sin(((h - 6) / 12) * Math.PI); // >0 de dia
  const day = clamp(elev * 2.4 + 0.25, 0, 1);
  const dusk = clamp(1 - Math.abs(elev) * 4, 0, 1) * (elev > -0.25 ? 1 : 0);
  night = 1 - day;
  // à noite o "sol" vira luar azulado
  sun.intensity = 2.7 * day + 0.55 * night;
  if (night > 0.6) sun.color.setHex(0x8fa8d8); else sun.color.setHSL(0.09, 0.6 + dusk * 0.3, 0.85 - dusk * 0.2);
  hemi.intensity = 0.62 + 0.65 * day;
  hemi.color.setHex(0xdbeeff).lerp(_c1.setHex(0x5a74a8), night);
  hemi.groundColor.setHex(0x5d6b45).lerp(_c1.setHex(0x1c2230), night);
  _c1.copy(C_NIGHT).lerp(C_DAY, day).lerp(C_DUSK, dusk * 0.55);
  scene.background.copy(_c1);
  scene.fog.color.copy(_c1);
  sky.material.color.setRGB(0.07, 0.09, 0.16).lerp(new THREE.Color(1, 1, 1), day).lerp(new THREE.Color(1.15, 0.72, 0.55), dusk * 0.6);
  stars.material.opacity = clamp(night * 1.3 - 0.3, 0, 1);
  stars.visible = stars.material.opacity > 0.01;
  renderer.toneMappingExposure = 1.0 + night * 0.25;
  clouds.material.color.setRGB(1, 1, 1).lerp(new THREE.Color(0.12, 0.14, 0.2), night).lerp(new THREE.Color(1.1, 0.75, 0.6), dusk * 0.7);
  if (physSky) {
    const az = ((h - 6) / 12) * Math.PI;
    const el = Math.max(-0.3, elev) * 1.25;
    physSky.material.uniforms.sunPosition.value.set(Math.cos(az) * Math.cos(el), Math.sin(el), Math.sin(az) * 0.6 * Math.cos(el));
    physSky.material.uniforms.rayleigh.value = 1.2 + dusk * 1.8;
    physSky.visible = night < 0.85;
  }
  // névoa atmosférica sobre a cordilheira (perspectiva aérea)
  mountains.material.color.setRGB(1, 1, 1).lerp(scene.fog.color, 0.55);
  mountains.material.color.multiplyScalar(1 - night * 0.75);
  if (weather) {
    weather.applyLighting({ sun, hemi, scene, night, fogNear: Q.fogNear, fogFar: Q.fogFar, clouds, sky, physSky });
    mountains.material.color.lerp(scene.fog.color, weather.cloud * 0.5);
    if (weather.onCheck) weather.onCheck();
  }
  updateEnv();
  world.setNight(night);
  traffic.setNight(night);
  applyBeam();
}

// faróis: manual (0 desligado, 1 baixo, 2 alto) ou automático (baixo à noite e na chuva)
function applyBeam() {
  const auto = night > 0.35 || (weather && weather.rain > 0.35) ? 1 : 0;
  const mode = lightsManual !== null ? lightsManual : auto;
  if (rig.beamMode !== mode) rig.setBeam(mode);
  if (headSpot) {
    const hi = mode === 2, md = rig.model;
    headSpot.intensity = mode ? 60 * (0.35 + night) * (hi ? 2.4 : 1) : 0;
    headSpot.distance = hi ? 190 : 75;
    headSpot.angle = hi ? 0.42 : 0.55;
    headSpot.target.position.set(0, hi ? 1.2 : 0, md.zf + (hi ? 75 : 22));
  }
  const ic = $('ic-light');
  ic.classList.toggle('on', mode === 1); ic.classList.toggle('hi', mode === 2);
  ic.textContent = mode === 2 ? '≣D' : mode === 1 ? '◐' : '○';
}
function cycleBeam() {
  const cur = lightsManual !== null ? lightsManual : rig.beamMode || 0;
  lightsManual = (cur + 1) % 3;
  applyBeam();
  audio.beep(1400, 0.04, 'square', 0.08);
  toast(['💡 Faróis desligados', '💡 Farol baixo', '💡 Farol alto'][lightsManual], 1100);
}

function buildStars() {
  const n = 900, pos = [];
  const R = Q.far * 0.9;
  for (let i = 0; i < n; i++) {
    const u = Math.random() * Math.PI * 2, v = Math.random() * 0.9 + 0.08;
    const cv = Math.sqrt(1 - v * v);
    pos.push(Math.cos(u) * cv * R, v * R, Math.sin(u) * cv * R);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  stars = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
  sky.add(stars);
}

// ---------------- Reflexos (mapa de ambiente) ----------------
function buildEnvScene() {
  envScene = new THREE.Scene();
  const g = new THREE.SphereGeometry(10, 24, 12);
  const col = [];
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) col.push(1, 1, 1);
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  envScene.userData.sky = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide }));
  envScene.add(envScene.userData.sky);
}
const _ec = new THREE.Color(), _eg = new THREE.Color();
function updateEnv() {
  if (!pmrem || Math.abs(night - envNight) < 0.08) return;
  envNight = night;
  const g = envScene.userData.sky.geometry, p = g.attributes.position, c = g.attributes.color;
  const top = new THREE.Color(0x4a86c5).lerp(new THREE.Color(0x070b16), night);
  const hor = scene.background.clone();
  const gnd = new THREE.Color(0x4f5a3a).lerp(new THREE.Color(0x07090c), night);
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / 10;
    if (y >= 0) _ec.copy(hor).lerp(top, Math.min(1, y * 1.6));
    else _ec.copy(hor).lerp(gnd, Math.min(1, -y * 3));
    // "sol" quente para brilho no capô
    if (night < 0.5 && y > 0.3 && p.getX(i) > 4 && p.getZ(i) > 2) _ec.lerp(_eg.setRGB(2.2, 2.0, 1.7), 0.5);
    c.setXYZ(i, _ec.r, _ec.g, _ec.b);
  }
  c.needsUpdate = true;
  const rt = pmrem.fromScene(envScene, 0.02);
  if (scene.environment) scene.environment.dispose();
  scene.environment = rt.texture;
}

// ---------------- Menu inicial (cena 3D na garagem) ----------------
function titleCamera(dt) {
  cam.tt = (cam.tt || 0) + dt;
  const t = cam.tt * 0.08 + cam.orbit;
  const md = rig.model;
  const fx = Math.sin(rig.h), fz = Math.cos(rig.h);
  const cx = rig.x + fx * md.wb * 0.4, cz = rig.z + fz * md.wb * 0.4;
  const dist = ((md.zf - md.rearEnd) * 1.15 + 4.5 + (rig.trailer ? 6 : 0)) * (cam.zoom || 1);
  const ang = rig.h + 0.7 + Math.sin(t) * 0.9;
  camera.position.set(cx + Math.sin(ang) * dist, 1.6 + Math.sin(t * 0.7) * 0.6, cz + Math.cos(ang) * dist);
  // olha um pouco à direita do caminhão para dar espaço ao menu
  const rx = Math.cos(ang), rz = -Math.sin(ang);
  camera.lookAt(cx - rx * 3.2, 1.9, cz - rz * 3.2);
  camera.fov = 50;
  camera.updateProjectionMatrix();
  if (Q.shadows) { sun.target.position.set(rig.x, 0, rig.z); sun.position.set(rig.x + 150, 170, rig.z + 95); }
  sky.position.copy(camera.position);
  if (mountains) mountains.position.y = -camera.position.y - 4;
}

// cordilheira no horizonte (acompanha o céu; tingida pela névoa)
function buildMountains() {
  const R = Q.far * 0.82;
  const pos = [], col = [];
  const rock = new THREE.Color(0x5b6470), snow = new THREE.Color(0xe8eef4), forest = new THREE.Color(0x3c5236);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const N = 220;
  const hts = [];
  for (let i = 0; i <= N; i++) hts.push(0);
  for (let o = 0; o < 4; o++) {
    const f = [3, 7, 17, 41][o], a = [0.09, 0.05, 0.025, 0.012][o];
    const ph = rnd() * 10;
    for (let i = 0; i <= N; i++) hts[i] += a * (0.5 + 0.5 * Math.sin((i / N) * Math.PI * 2 * f + ph + Math.sin(i * 0.37 * (o + 1)) * 0.6));
  }
  for (let i = 0; i < N; i++) {
    const a0 = (i / N) * Math.PI * 2, a1 = ((i + 1) / N) * Math.PI * 2;
    const h0 = hts[i] * R, h1 = hts[i + 1] * R;
    const P = (a, h) => [Math.cos(a) * R, h - R * 0.01, Math.sin(a) * R];
    const b0 = P(a0, 0), b1 = P(a1, 0), t0 = P(a0, h0), t1 = P(a1, h1);
    pos.push(...b0, ...b1, ...t1, ...b0, ...t1, ...t0);
    const cb = forest, ct0 = rock, ct1 = rock;
    col.push(cb.r, cb.g, cb.b, cb.r, cb.g, cb.b, ct1.r, ct1.g, ct1.b, cb.r, cb.g, cb.b, ct1.r, ct1.g, ct1.b, ct0.r, ct0.g, ct0.b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  mountains = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, fog: false, depthWrite: false, side: THREE.DoubleSide, transparent: true, opacity: 1 }));
  mountains.renderOrder = -0.8;
  sky.add(mountains);
}

function buildClouds() {
  const g = new THREE.SphereGeometry(Q.far * 0.85, 32, 8, 0, Math.PI * 2, 0, Math.PI * 0.42);
  clouds = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex.clouds(), transparent: true, depthWrite: false, fog: false, side: THREE.BackSide, opacity: 0.9 }));
  clouds.material.map.repeat.set(3, 1);
  clouds.renderOrder = -0.5;
  sky.add(clouds);
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
  buildStars();
  buildClouds();
  buildMountains();
  if (qName !== 'low') {
    // céu físico (dispersão atmosférica)
    physSky = new Sky();
    physSky.scale.setScalar(Q.far * 0.9);
    physSky.renderOrder = -2;
    physSky.material.depthWrite = false;
    const u = physSky.material.uniforms;
    u.turbidity.value = 5; u.rayleigh.value = 1.6; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.85;
    sky.material.visible = false;
    sky.add(physSky);
  }
}

function placeAtStart() {
  rig.world = world;
  if (S.pos && isFinite(S.pos.x) && world.resolveCircle({ x: S.pos.x, z: S.pos.z }, 1.5, _o) <= 0) { rig.place(S.pos.x, S.pos.z, S.pos.h); return; }
  const g = world.depots.garagem.zone;
  rig.place(g.x - 8, g.z, Math.PI / 2);
  rig.world = world;
  rig.sync();
}

function buildMarkers() {
  marker = new THREE.Group();
  const zm = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex.zone(), color: 0xffc400, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
  zm.rotation.x = -Math.PI / 2;
  zm.position.y = 0.08;
  marker.add(zm);
  marker.zone = zm;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 60, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xffb703, transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide, fog: false, blending: THREE.AdditiveBlending }));
  beam.position.y = 30;
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
  ag.rotateX(Math.PI / 2); // ponta da seta para +z (frente)
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
  if (c.t > def.cap && !TEST_MODE) return `Caminhão fraco (máx. ${def.cap} t)`;
  if (def.rigid && c.trailer !== 'box' && !TEST_MODE) return 'Requer cavalo mecânico';
  if (c.trailer === 'bitrem' && (def.axles < 3 || def.drive < 0.45) && !TEST_MODE) return 'Bitrem exige cavalo com tração 6x4 ou 8x4';
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
  // volante: arraste para girar; toque no centro = buzina
  const wheel = $('wheel');
  let wd = null;
  const wAng = (e) => { const r = wheel.getBoundingClientRect(); return Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))); };
  wheel.addEventListener('pointerdown', (e) => {
    e.preventDefault(); audio.init();
    const r = wheel.getBoundingClientRect();
    const dc = Math.hypot(e.clientX - (r.left + r.width / 2), e.clientY - (r.top + r.height / 2));
    if (dc < r.width * 0.17) { audio.horn(true); wd = { horn: true, id: e.pointerId }; }
    else { wd = { id: e.pointerId, a0: wAng(e), w0: ctl.wheel }; ctl.wheelHeld = true; }
    try { wheel.setPointerCapture(e.pointerId); } catch (x) { /* */ }
  });
  wheel.addEventListener('pointermove', (e) => {
    if (!wd || wd.horn || e.pointerId !== wd.id) return;
    let d = wAng(e) - wd.a0;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    ctl.wheel = clamp(wd.w0 + (d * 180) / Math.PI, -150, 150);
    wd.a0 = wAng(e); wd.w0 = ctl.wheel;
  });
  const wEnd = () => { if (wd && wd.horn) audio.horn(false); wd = null; ctl.wheelHeld = false; };
  wheel.addEventListener('pointerup', wEnd);
  wheel.addEventListener('pointercancel', wEnd);
  wheel.addEventListener('lostpointercapture', wEnd);

  // câmbio
  document.querySelectorAll('#gearsel button').forEach((b) => b.addEventListener('pointerdown', (e) => { e.preventDefault(); setGear(b.dataset.g); }));
  const setBlink = (d) => { ctl.blink = ctl.blink === d ? 0 : d; ctl.blinkArm = false; blinkT = 0; audio.init(); audio.beep(1500, 0.03, 'square', 0.06); };
  $('blinkL').addEventListener('pointerdown', (e) => { e.preventDefault(); setBlink(-1); });
  $('blinkR').addEventListener('pointerdown', (e) => { e.preventDefault(); setBlink(1); });
  $('ic-haz').addEventListener('pointerdown', (e) => { e.preventDefault(); setBlink(2); });
  window.__setBlink = setBlink;
  $('ic-hand').addEventListener('pointerdown', (e) => { e.preventDefault(); ctl.hand = !ctl.hand; audio.airBrake(); });
  $('ic-light').addEventListener('pointerdown', (e) => { e.preventDefault(); cycleBeam(); });
  $('ic-ret').addEventListener('pointerdown', (e) => { e.preventDefault(); rig.retarder = !rig.retarder; audio.beep(rig.retarder ? 1100 : 600, 0.04, 'square', 0.08); toast(`Freio-motor ${rig.retarder ? 'LIGADO' : 'desligado'}`, 1000); });
  $('actionbtn').addEventListener('click', doAction);
  $('enginebtn').addEventListener('click', startEngine);

  const keys = { ArrowUp: 'gas', KeyW: 'gas', ArrowDown: 'brake', KeyS: 'brake', Space: 'brake', ArrowLeft: 'left', KeyA: 'left', ArrowRight: 'right', KeyD: 'right' };
  window.addEventListener('keydown', (e) => {
    audio.init();
    if (keys[e.code]) { ctl[keys[e.code]] = true; e.preventDefault(); }
    if (e.code === 'KeyH') audio.horn(true);
    if (e.code === 'KeyR' && !e.repeat) setGear(ctl.gear === 'R' ? 'D' : 'R');
    if (e.code === 'KeyN' && !e.repeat) setGear('N');
    if (e.code === 'KeyE' && !e.repeat) startEngine();
    if (e.code === 'KeyL' && !e.repeat) cycleBeam();
    if (e.code === 'KeyP' && !e.repeat) ctl.hand = !ctl.hand;
    if (e.code === 'KeyB' && !e.repeat) rig.retarder = !rig.retarder;
    if (e.code === 'KeyF' && !e.repeat) doAction();
    if (e.code === 'KeyZ' && !e.repeat) window.__setBlink(-1);
    if (e.code === 'KeyX' && !e.repeat) window.__setBlink(1);
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

function setGear(g) {
  ctl.gear = g;
  document.querySelectorAll('#gearsel button').forEach((b) => b.classList.toggle('on', b.dataset.g === g));
  audio.beep(g === 'R' ? 500 : 700, 0.05, 'square', 0.06);
}

let engineT = 0, blinkT = 0;
function startEngine() {
  if (rig.engineOn || engineT > 0) return;
  audio.init();
  engineT = 1.1;
  $('enginebtn').classList.add('starting');
  audio.starter();
}

function readInput(dt) {
  const ramp = (cur, target, up, down) => cur + clamp(target - cur, -down * dt, up * dt);
  const active = state === 'drive';
  if (engineT > 0) {
    engineT -= dt;
    if (engineT <= 0) { rig.engineOn = true; $('enginebtn').classList.add('hidden'); $('enginebtn').classList.remove('starting'); }
  }
  input.throttle = ramp(input.throttle, active && ctl.gas ? 1 : 0, 2.5, 6);
  input.brake = ramp(input.brake, active && ctl.brake ? 1 : 0, 6, 8);
  input.gear = S.settings.gearbox === 'auto' ? 'auto' : ctl.gear;
  input.handbrake = ctl.hand;
  if (active && ctl.gas && !rig.engineOn && engineT <= 0 && !readInput.warned) { toast('Ligue o motor primeiro'); readInput.warned = true; }
  // volante volta ao centro ao soltar
  if (!ctl.wheelHeld) ctl.wheel *= Math.max(0, 1 - dt * 7);
  let st = 0;
  if (S.settings.steer === 'tilt') { st = Math.abs(ctl.tilt) < 0.06 ? 0 : ctl.tilt; ctl.wheel = -st * 150; }
  else if (S.settings.steer === 'wheel') st = -ctl.wheel / 150;
  st += (ctl.left ? 1 : 0) - (ctl.right ? 1 : 0);
  st = active ? clamp(st, -1, 1) : 0;
  input.steer = S.settings.steer === 'wheel' && ctl.wheelHeld ? st : ramp(input.steer, st, 2.4, 4);
  if (Math.abs(input.steer) < 0.01 && st === 0) input.steer = 0;
  $('wheel').style.transform = `rotate(${(-input.steer * 150).toFixed(1)}deg)`;
  // pisca-pisca: pisca a cada 0,4 s e desliga sozinho depois da curva
  if (ctl.blink === -1 || ctl.blink === 1) {
    const turning = input.steer * -ctl.blink;
    if (turning > 0.3) ctl.blinkArm = true;
    else if (ctl.blinkArm && Math.abs(input.steer) < 0.06) { ctl.blink = 0; ctl.blinkArm = false; }
  }
  if (ctl.blink) {
    const was = blinkT % 0.8 < 0.4;
    blinkT += dt;
    const on = blinkT % 0.8 < 0.4;
    if (on !== was) audio.beep(on ? 1300 : 900, 0.025, 'square', 0.05);
    rig.setBlink(ctl.blink, on);
    $('blinkL').classList.toggle('on', on && (ctl.blink === -1 || ctl.blink === 2));
    $('blinkR').classList.toggle('on', on && (ctl.blink === 1 || ctl.blink === 2));
    $('ic-bl').classList.toggle('on', on && (ctl.blink === -1 || ctl.blink === 2));
    $('ic-br').classList.toggle('on', on && (ctl.blink === 1 || ctl.blink === 2));
    $('ic-haz').classList.toggle('on', ctl.blink === 2);
  } else if (blinkT !== 0) {
    blinkT = 0;
    rig.setBlink(0, false);
    for (const id of ['blinkL', 'blinkR', 'ic-bl', 'ic-br', 'ic-haz']) $(id).classList.remove('on');
  }
}

function cycleCamera() {
  cam.mode = (cam.mode + 1) % 3;
  S.settings.camera = cam.mode;
  toast(['Câmera: Perseguição', 'Câmera: Aérea', 'Câmera: Cabine'][cam.mode], 1200);
}

// ---------------- Câmera ----------------
const _p = { x: 0, z: 0 }, _o = { x: 0, z: 0 };
function updateCamera(dt, instant = false) {
  if (Math.hypot(cam.pos.x - rig.x, cam.pos.z - rig.z) > 150) instant = true;
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
    camera.position.set(ex, rig.y + (rig.def.id === 'urbano' ? 2.3 : 2.75), ez);
    const lx = Math.sin(cam.yaw), lz = Math.cos(cam.yaw);
    camera.lookAt(ex + lx * 20, rig.y + 2.0 + Math.sin(rig.pitch) * 20, ez + lz * 20);
    camera.fov = 70;
  } else {
    const len = rig.trainLength;
    const tl = md.zf - md.rearEnd; // comprimento do caminhão
    let dist = (cam.mode === 0 ? 3.5 + tl : 12 + tl * 1.2) + len * (cam.mode === 0 ? 0.75 : 1.1);
    const hgt = (cam.mode === 0 ? 2.2 + tl * 0.3 : 9 + tl * 0.7) + len * (cam.mode === 0 ? 0.18 : 0.4);
    const px = rig.x + fx * md.wb * 0.5 - (rig.trailer ? Math.sin(rig.th) * len * 0.25 : 0);
    const pz = rig.z + fz * md.wb * 0.5 - (rig.trailer ? Math.cos(rig.th) * len * 0.25 : 0);
    const bx = Math.sin(cam.yaw), bz = Math.cos(cam.yaw);
    // aproxima a câmera se ficar dentro de um prédio
    for (let i = 0; i < 6; i++) {
      _p.x = px - bx * dist; _p.z = pz - bz * dist;
      if (world.resolveCircle(_p, 0.6, _o, true) <= 0 || hgt > 30) break;
      dist *= 0.8;
    }
    const tx = px - bx * dist, tz = pz - bz * dist;
    const kp = instant ? 1 : 1 - Math.exp(-dt * 8);
    cam.pos.x += (tx - cam.pos.x) * kp;
    cam.pos.z += (tz - cam.pos.z) * kp;
    const ty = rig.y + hgt;
    cam.pos.y += (ty - cam.pos.y) * kp;
    camera.position.copy(cam.pos);
    if (rig.shake) { camera.position.x += (Math.random() - 0.5) * rig.shake; camera.position.y += (Math.random() - 0.5) * rig.shake; }
    camera.lookAt(px, rig.y + (cam.mode === 1 ? 1.5 : 1.3), pz);
    camera.fov = 58 + Math.min(8, rig.speedKmh * 0.08);
  }
  camera.updateProjectionMatrix();

  if (Q.shadows) {
    sun.target.position.set(rig.x, 0, rig.z);
    sun.position.set(rig.x + 150, 170, rig.z + 95);
  }
  sky.position.copy(camera.position);
  if (mountains) mountains.position.y = -camera.position.y - 4;
}

// ---------------- Mapa ----------------
let MP = null; // camadas vetoriais do mapa (coordenadas do mundo)
function buildMapCanvas() {
  const P = () => new Path2D();
  MP = { blocks: {}, lots: P(), roads: P(), hw: P(), dirt: P(), river: P(), fields: P(), hills: P() };
  const zc = { downtown: '#8b95a3', residential: '#a8a294', town: '#b4ab98', park: '#4f8a3a', industrial: '#8d8473', port: '#7b8790' };
  for (const c of CITIES) {
    for (let bx = 0; bx < c.nx; bx++)
      for (let bz = 0; bz < c.nz; bz++) {
        const z = zoneOf(c, bx, bz);
        (MP.blocks[zc[z]] = MP.blocks[zc[z]] || P()).rect(c.x0 + bx * BLOCK + 10, c.z0 + bz * BLOCK + 10, BLOCK - 20, BLOCK - 20);
      }
    for (let i = 0; i <= c.nx; i++) { MP.roads.moveTo(c.x0 + i * BLOCK, c.z0); MP.roads.lineTo(c.x0 + i * BLOCK, cz1(c)); }
    for (let j = 0; j <= c.nz; j++) { MP.roads.moveTo(c.x0, c.z0 + j * BLOCK); MP.roads.lineTo(cx1(c), c.z0 + j * BLOCK); }
  }
  for (const L of LOCATIONS) { const [x0, z0, x1, z1] = world.depots[L.id].lot; MP.lots.rect(x0, z0, x1 - x0, z1 - z0); }
  for (const h of world.hws) { const pth = h.surface === 'asphalt' ? MP.hw : MP.dirt; pth.moveTo(h.x[0], h.z[0]); for (let i = 1; i < h.n; i += 2) pth.lineTo(h.x[i], h.z[i]); pth.lineTo(h.x[h.n - 1], h.z[h.n - 1]); }
  const R = world.river;
  MP.river.moveTo(R.x[0], R.z[0]);
  for (let i = 1; i < R.n; i++) MP.river.lineTo(R.x[i], R.z[i]);
  for (const f of world.fields) MP.fields.rect(f.x0, f.z0, f.x1 - f.x0, f.z1 - f.z0);
  for (const h of world.hills) { MP.hills.moveTo(h.x + h.r * 0.85, h.z); MP.hills.arc(h.x, h.z, h.r * 0.85, 0, Math.PI * 2); }
}

function drawWorldMap(ctx, k) {
  ctx.fillStyle = '#3d5a34';
  ctx.fillRect(WORLD.x0 - 3000, WORLD.z0 - 3000, WORLD.x1 - WORLD.x0 + 6000, WORLD.z1 - WORLD.z0 + 6000);
  ctx.fillStyle = '#34502d'; ctx.fill(MP.hills);
  ctx.fillStyle = '#9a9356'; ctx.fill(MP.fields);
  ctx.fillStyle = '#2d6f93'; ctx.fillRect(WORLD.x0 - 3000, SEA_Z, WORLD.x1 - WORLD.x0 + 6000, 4000);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  ctx.strokeStyle = '#2d6f93'; ctx.lineWidth = Math.max(RIVER_W, 3 / k); ctx.stroke(MP.river);
  for (const c in MP.blocks) { ctx.fillStyle = c; ctx.fill(MP.blocks[c]); }
  ctx.fillStyle = '#cfc9bd'; ctx.fill(MP.lots);
  ctx.strokeStyle = '#26282c'; ctx.lineWidth = Math.max(ROAD_W, 3 / k); ctx.lineCap = 'square'; ctx.stroke(MP.roads);
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#1d1f22'; ctx.lineWidth = Math.max(HW_HALF * 2 + 4, 4.5 / k); ctx.stroke(MP.hw);
  ctx.strokeStyle = '#4a4d52'; ctx.lineWidth = Math.max(HW_HALF * 2, 3 / k); ctx.stroke(MP.hw);
  ctx.strokeStyle = '#8a6a44'; ctx.lineWidth = Math.max(11, 2.6 / k); ctx.setLineDash([24, 10]); ctx.stroke(MP.dirt); ctx.setLineDash([]);
}

function mapIcon(ctx, x, y, color, r) {
  ctx.fillStyle = color;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = r * 0.3;
  ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.stroke();
}

function fuelIcon(ctx, x, y, r) {
  ctx.fillStyle = '#d02020'; ctx.strokeStyle = '#fff'; ctx.lineWidth = r * 0.3;
  ctx.beginPath(); ctx.rect(x - r, y - r, r * 2, r * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.fillRect(x - r * 0.45, y - r * 0.55, r * 0.6, r * 1.1);
}

function drawMinimap() {
  const cv = $('minimap'), ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  const k = 0.75; // px por metro
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.translate(W / 2, H * 0.62);
  ctx.rotate(Math.PI + rig.h);
  ctx.scale(k, k);
  ctx.translate(-rig.x, -rig.z);
  drawWorldMap(ctx, k);
  if (route && S.job) {
    ctx.strokeStyle = accentHex();
    ctx.lineWidth = 8 / k;
    ctx.beginPath();
    route.path.forEach((p, i) => (i ? ctx.lineTo(p.x, p.z) : ctx.moveTo(p.x, p.z)));
    ctx.stroke();
  }
  const tgt = currentTarget();
  for (const L of LOCATIONS) {
    const d = world.depots[L.id];
    mapIcon(ctx, d.zone.x, d.zone.z, tgt === d ? accentHex() : L.id === 'garagem' ? '#2f6fde' : 'rgba(30,30,30,0.85)', (tgt === d ? 9 : 6) / k);
  }
  for (const st of world.stations) fuelIcon(ctx, st.x, st.z, 7 / k);
  if (world.floodLevel > 0.05) { ctx.fillStyle = 'rgba(70,140,220,0.75)'; for (const f of world.floods) { ctx.beginPath(); ctx.arc(f.x, f.z, Math.max(f.r, 6 / k), 0, 7); ctx.fill(); } }
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  for (const c of traffic.cars) if (c.mode) ctx.fillRect(c.x - 2 / k, c.z - 2 / k, 4 / k, 4 / k);
  ctx.setTransform(1, 0, 0, 1, 0, 0);
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
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const ww = window.innerWidth * 0.96, wh = window.innerHeight * 0.92;
  const Wm = WORLD.x1 - WORLD.x0, Hm = WORLD.z1 - WORLD.z0;
  const sc = Math.min(ww / Wm, wh / Hm);
  cv.width = Wm * sc * dpr; cv.height = Hm * sc * dpr;
  cv.style.width = Wm * sc + 'px'; cv.style.height = Hm * sc + 'px';
  const ctx = cv.getContext('2d');
  const k = sc * dpr;
  ctx.setTransform(k, 0, 0, k, -WORLD.x0 * k, -WORLD.z0 * k);
  drawWorldMap(ctx, k);
  if (route && S.job) {
    ctx.strokeStyle = accentHex(); ctx.lineWidth = 5 / k;
    ctx.beginPath();
    route.path.forEach((p, i) => (i ? ctx.lineTo(p.x, p.z) : ctx.moveTo(p.x, p.z)));
    ctx.stroke();
  }
  const tgt = currentTarget();
  ctx.textAlign = 'center';
  const label = (txt, x, y, size, color = '#fff') => {
    ctx.font = `700 ${size / k}px sans-serif`;
    ctx.lineWidth = 3 / k; ctx.strokeStyle = 'rgba(0,0,0,0.85)';
    ctx.strokeText(txt, x, y); ctx.fillStyle = color; ctx.fillText(txt, x, y);
  };
  for (const c of CITIES) label(c.name.toUpperCase(), (c.x0 + cx1(c)) / 2, c.z0 - 40, 15 * dpr, '#ffe08a');
  for (const h of world.hws) { const m = (h.n / 2) | 0; label(h.id, h.x[m], h.z[m] - 20, 10 * dpr, '#cfe8ff'); }
  for (const L of LOCATIONS) {
    const d = world.depots[L.id];
    mapIcon(ctx, d.zone.x, d.zone.z, tgt === d ? accentHex() : L.id === 'garagem' ? '#2f6fde' : '#222', 6 * dpr / k);
    label(L.name, d.zone.x, d.zone.z - 14 * dpr / k, 10 * dpr);
  }
  for (const st of world.stations) { fuelIcon(ctx, st.x, st.z, 6 * dpr / k); label(st.name, st.x, st.z - 12 * dpr / k, 9 * dpr, '#ffb3b3'); }
  ctx.save();
  ctx.translate(rig.x, rig.z);
  ctx.rotate(Math.PI + rig.h);
  ctx.scale(dpr / k, dpr / k);
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
    if (a === 'jobs' || a === 'garage' || a === 'settings') openModal(a);
    else if (a === 'menu' || a === 'pause') openModal('jobs');
    else if (a === 'rename') { const n = prompt('Nome do motorista:', S.name); if (n && n.trim()) { S.name = n.trim().slice(0, 18); save(); showTitle(); } }
    else if (a === 'map') openMap();
    else if (a === 'gauge') { S.settings.gauge = arg; save(); renderTab('settings'); }
    else if (a === 'accent') { S.settings.accent = arg; applyTheme(); save(); renderTab('settings'); }
    else if (a === 'hudsize') { S.settings.hud = arg; applyTheme(); save(); renderTab('settings'); }
    else if (a === 'gearbox') { S.settings.gearbox = arg; $('gearsel').classList.toggle('hidden', arg === 'auto'); save(); renderTab('settings'); }
    else if (a === 'wmode') { S.settings.weather = arg; weather.setMode(arg); save(); renderTab('settings'); }
    else if (a === 'timemode') { S.settings.time = arg; save(); applyTime(S.clock); renderTab('settings'); }
    else if (a === 'tomenu') { closeModal(); save(); showTitle(); }
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
    else if (a === 'steermode') { S.settings.steer = arg; applySteerMode(); save(); renderTab('settings'); }
    else if (a === 'fps') { S.settings.fps = !S.settings.fps; $('fps').classList.toggle('hidden', !S.settings.fps); save(); renderTab('settings'); }
    else if (a === 'reset') { if (confirm('Apagar todo o progresso?')) { localStorage.removeItem(SAVE_KEY); location.reload(); } }
    else if (a === 'rescue') { rescue(); closeModal(); }
  });
  $('mapwrap').addEventListener('click', openMap);
  $('fps').classList.toggle('hidden', !S.settings.fps);
  $('tabbody').addEventListener('input', (e) => {
    if (e.target.id === 'vol') { S.settings.volume = +e.target.value; audio.setVolume(S.settings.volume); save(); }
  });
  applySteerMode();
  applyTheme();
  setGear('D');
  $('gearsel').classList.toggle('hidden', S.settings.gearbox === 'auto');
  $('play').addEventListener('click', () => {
    audio.init();
    $('title').classList.add('hidden');
    $('hud').classList.remove('hidden');
    state = 'drive';
    if (!rig.engineOn) $('enginebtn').classList.remove('hidden');
    updateCamera(0, true);
    onResize();
    // garante shaders atualizados com o estado de luzes/sombras atual
    refreshMats = 3;
    try { if (document.documentElement.requestFullscreen && !window.AndroidBridge) document.documentElement.requestFullscreen().catch(() => {}); } catch (e) { /* */ }
    if (!S.job && S.stats.deliveries === 0) setTimeout(() => openModal('jobs'), 400);
  });
}

function applySteerMode() {
  const w = $('wheelwrap');
  w.classList.toggle('buttons', S.settings.steer === 'buttons');
  w.classList.toggle('tilt', S.settings.steer === 'tilt');
}

function showTitle() {
  state = 'title';
  cam.tt = 0;
  $('hud').classList.add('hidden');
  $('title').classList.remove('hidden');
  $('pname').textContent = S.name;
  $('plvl').textContent = `Nível ${S.level} • ${S.xp}/${xpForLevel(S.level)} XP`;
  $('tmoney').textContent = fmt(S.money);
  const t = rig.def;
  $('tiname').textContent = t.name;
  $('tispecs').innerHTML = `<span>${t.hp} cv</span><span>${t.cap} t</span><span>${t.vmax} km/h</span><span>⛽ ${autonomy(t)} km</span><span>${t.rigid ? 'Rígido' : 'Cavalo ' + t.cfg}</span>`;
  const j = S.job;
  $('tjob').innerHTML = j ? `${CARGO[j.cargo].icon} ${CARGO[j.cargo].name} → <b>${LOC[j.phase === 'pickup' ? j.from : j.to].name}</b>` : 'Nenhum frete ativo';
  $('tstats').innerHTML = `<div><b>${S.stats.deliveries}</b><small>entregas</small></div><div><b>${S.stats.km.toFixed(0)}</b><small>km</small></div><div><b>${S.stats.tons.toFixed(0)}</b><small>toneladas</small></div><div><b>${S.owned.length}</b><small>caminhões</small></div>`;
}

function openModal(tab) {
  state = state === 'title' ? 'title' : 'menu';
  $('modal').classList.remove('hidden');
  $('mstat').innerHTML = `Nv <b>${S.level}</b> • ${fmt(S.money)}`;
  ctl.gas = ctl.brake = ctl.left = ctl.right = false;
  document.querySelectorAll('.pad').forEach((p) => p.classList.remove('on'));
  renderTab(tab);
}
function closeModal() {
  $('modal').classList.add('hidden');
  if (state === 'title') showTitle();
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
        <div class="stat"><span>Tanque • autonomia</span><b>${t.tank} L • ~${autonomy(t)} km</b></div>
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

function restoreTruckState() {
  const f = S.fuelBy[S.truck];
  rig.fuel = f === undefined ? rig.def.tank : Math.min(f, rig.def.tank);
  rig.flat = S.tire.flat || 0; rig.spare = S.tire.spare !== false;
}

// ---------------- Posto, borracharia e guincho ----------------
function nearStation() {
  const st = world.stationAt(rig.x, rig.z, 4);
  if (st) return st;
  for (const L of LOCATIONS) if (L.kind === 'fuel') { const d = world.depots[L.id]; if (Math.abs(rig.x - d.zone.x) < 30 && Math.abs(rig.z - d.zone.z) < 30) return { name: L.name }; }
  return null;
}
const TIRE_PRICE = 450, TOW_BASE = 600;
let act = null;
function updateAction() {
  const stopped = rig.speedKmh < 1.5;
  let a = null;
  const st = stopped ? nearStation() : null;
  if (rig.rolled && stopped) a = { id: 'upright', label: `🚜 Guincho pesado: desvirar • ${fmt(TOW_BASE * 2 + rig.mass / 25)}` };
  else if (rig.rolled) a = null;
  else if (rig.stuck) a = { id: 'tow', label: `🚜 Chamar guincho • ${fmt(TOW_BASE + rig.mass / 50)}` };
  else if (st) {
    const need = rig.def.tank - rig.fuel;
    const tire = rig.flat || !rig.spare;
    const cost = (need > 0.5 ? need * FUEL_PRICE : 0) + (tire ? TIRE_PRICE : 0);
    if (need > 0.5 || tire) a = { id: 'station', label: `⛽ ${need > 0.5 ? 'Abastecer ' + need.toFixed(0) + ' L' : ''}${need > 0.5 && tire ? ' + ' : ''}${tire ? 'Borracharia' : ''} • ${fmt(cost)}`, cost, need, tire, st };
  } else if (rig.flat && stopped && rig.spare) a = { id: 'spare', label: '🛞 Trocar pelo estepe' };
  else if (rig.fuel <= 0 && stopped) a = { id: 'fuelcall', label: `⛽ Pedir socorro (40 L) • ${fmt(40 * FUEL_PRICE + 350)}` };
  const key = a ? a.label : '';
  if (key !== (act ? act.label : '')) {
    $('actionbtn').textContent = key;
    $('actionbtn').classList.toggle('hidden', !a);
  }
  act = a;
}
let busyT = 0;
function doAction() {
  if (!act || busyT > 0) return;
  audio.init();
  const a = act;
  const pay = (v) => { if (S.money < v) { toast('Dinheiro insuficiente'); return false; } S.money -= v; return true; };
  if (a.id === 'station') {
    let cost = a.cost, litres = a.need > 0.5 ? a.need : 0;
    if (S.money < cost && litres > 0) { // abastece o que der
      const afford = Math.max(0, S.money - (a.tire ? TIRE_PRICE : 0));
      litres = Math.min(litres, afford / FUEL_PRICE);
      cost = litres * FUEL_PRICE + (a.tire ? TIRE_PRICE : 0);
    }
    if (!pay(cost)) return;
    rig.fuel += litres;
    if (a.tire) { rig.flat = 0; rig.spare = true; }
    audio.beep(900, 0.08); busyT = 1;
    toast(`⛽ ${litres > 0 ? `<b>${litres.toFixed(0)} L</b> abastecidos` : ''}${litres > 0 && a.tire ? ' • ' : ''}${a.tire ? 'pneus em ordem' : ''} • ${fmt(cost)}`, 2600);
  } else if (a.id === 'spare') {
    busyT = 2; toast('🛞 Trocando o pneu…', 1800);
    setTimeout(() => { rig.flat = 0; rig.spare = false; toast('Estepe instalado. Reponha o estepe em um posto.', 2600); }, 1800);
  } else if (a.id === 'upright') {
    S.money -= Math.min(Math.max(0, S.money), TOW_BASE * 2 + rig.mass / 25); // nunca deixa o jogador preso
    rescue();
    toast('🚜 Caminhão desvirado e recolocado na via', 2600);
  } else if (a.id === 'tow') {
    if (!pay(TOW_BASE + rig.mass / 50)) return;
    // puxa o caminhão para frente, para fora do lamaçal
    const q = world.hw(rig.x, rig.z);
    let x = rig.x, z = rig.z, h = rig.h;
    if (q) {
      const hw = q.o, dir = Math.cos(Math.atan2(hw.dx[q.i], hw.dz[q.i]) - rig.h) >= 0 ? 1 : -1;
      let i = q.i;
      for (let n = 0; n < 200; n++) {
        i = Math.max(0, Math.min(hw.n - 1, i + dir * 3));
        if ((world.mudDepth(hw.x[i], hw.z[i]) === 0 && Math.abs(hw.s[i] - hw.s[q.i]) > 40) || i === 0 || i === hw.n - 1) break;
      }
      x = hw.x[i]; z = hw.z[i]; h = Math.atan2(hw.dx[i], hw.dz[i]) + (dir < 0 ? Math.PI : 0);
    }
    rig.place(x, z, h); rig.stuckT = 0; rig.sink = 0;
    updateCamera(0, true);
    toast('🚜 Guincho puxou o caminhão para fora da lama', 2600);
  } else if (a.id === 'fuelcall') {
    const c = 40 * FUEL_PRICE + 350;
    if (!pay(c)) return;
    rig.fuel = Math.min(rig.def.tank, rig.fuel + 40);
    toast('⛽ Socorro entregou 40 L. Ligue o motor.', 2600);
  }
  save();
}

function useTruck(id) {
  const t = TRUCK[id];
  if (!S.owned.includes(id)) return;
  if (S.job && S.job.phase === 'deliver') { toast('Conclua ou cancele o frete antes de trocar'); return; }
  S.fuelBy[S.truck] = rig.fuel;
  S.truck = id;
  rig.setTruck(t);
  const f = S.fuelBy[id];
  rig.fuel = f === undefined ? t.tank : Math.min(f, t.tank);
  rig.lpm = FUEL_SCALE / (t.kml * 1000);
  if (S.job && lockReason(S.job, t)) { cancelJob(); }
  save();
  renderTab('garage');
  if (state === 'title') showTitle();
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
    <div class="set"><div><b>Direção</b><br><small style="opacity:.7">Volante, setas ou inclinação do celular</small></div>
      ${seg('steermode', S.settings.steer, [['wheel', 'Volante'], ['buttons', 'Setas'], ['tilt', 'Inclinação']])}</div>
    <div class="set"><div><b>Câmbio</b><br><small style="opacity:.7">Manual D/N/R ou automático (segurar freio parado = ré)</small></div>
      ${seg('gearbox', S.settings.gearbox, [['manual', 'D / N / R'], ['auto', 'Automático']])}</div>
    <div class="set"><div><b>Horário</b><br><small style="opacity:.7">Ciclo de dia e noite com faróis e iluminação urbana</small></div>
      ${seg('timemode', S.settings.time, [['cycle', 'Ciclo'], ['day', 'Dia'], ['dusk', 'Entardecer'], ['night', 'Noite']])}</div>
    <div class="set"><div><b>Clima</b><br><small style="opacity:.7">Automático muda sozinho: sol, nuvens, chuva e tempestades com alagamentos</small></div>
      ${seg('wmode', S.settings.weather || 'auto', [['auto', 'Automático'], ['sol', 'Sol'], ['nublado', 'Nublado'], ['chuva', 'Chuva'], ['tempestade', 'Tempestade']])}</div>
    <div class="set"><div><b>Velocímetro</b><br><small style="opacity:.7">Estilo dos mostradores do painel</small></div>
      ${seg('gauge', S.settings.gauge, [['analog', 'Analógico'], ['digital', 'Digital'], ['sport', 'Esportivo'], ['classic', 'Clássico']])}</div>
    <div class="set"><div><b>Cor do painel</b><br><small style="opacity:.7">Cor de destaque da interface</small></div>
      ${seg('accent', S.settings.accent, [['amber', 'Âmbar'], ['blue', 'Azul'], ['green', 'Verde'], ['red', 'Vermelho'], ['purple', 'Roxo']])}</div>
    <div class="set"><div><b>Tamanho dos controles</b></div>
      ${seg('hudsize', S.settings.hud, [['small', 'Pequeno'], ['normal', 'Normal'], ['large', 'Grande']])}</div>
    <div class="set"><b>Volume</b><input id="vol" type="range" min="0" max="1" step="0.05" value="${S.settings.volume}"></div>
    <div class="set"><b>Mostrar FPS</b>${seg('fps', S.settings.fps ? 1 : 0, [[1, 'Sim'], [0, 'Não']])}</div>
    <div class="set"><div><b>Desatolar</b><br><small style="opacity:.7">Leva o caminhão de volta para a rua mais próxima</small></div><button class="btn alt" data-act="rescue" style="margin:0">Reposicionar</button></div>
    <div class="set"><div><b>Controles no teclado</b><br><small style="opacity:.7">Z/X pisca-pisca • WASD/setas • Espaço freio • E motor • R ré • N neutro • P freio de mão • L faróis • H buzina • C câmera • M mapa</small></div></div>
    <div class="set"><b>Menu principal</b><button class="btn alt" data-act="tomenu" style="margin:0">Voltar ao menu</button></div>
    <div class="set"><b>Apagar progresso</b><button class="btn danger" data-act="reset" style="margin:0">Resetar</button></div>`;
}

function rescue() {
  // volta para a via mais próxima
  const q = world.hw(rig.x, rig.z);
  if (q && !world.inArea(rig.x, rig.z, 0)) {
    const h = q.o;
    rig.place(q.x - h.dz[q.i] * 3.5, q.z + h.dx[q.i] * 3.5, Math.atan2(h.dx[q.i], h.dz[q.i]));
  } else {
    const p = { x: rig.x, z: rig.z };
    for (let i = 0; i < 40; i++) { const pen = world.resolveCircle(p, 2.5, _o); if (pen <= 0) break; p.x += _o.x * 1.2 + (Math.random() - 0.5); p.z += _o.z * 1.2 + (Math.random() - 0.5); }
    rig.place(p.x, p.z, rig.h);
  }
  updateCamera(0, true);
}

const ACCENTS = { amber: '#f5a623', blue: '#2f8cff', green: '#22b573', red: '#e3243b', purple: '#9b5cff' };
const accentHex = () => ACCENTS[S.settings.accent] || ACCENTS.amber;
function applyTheme() {
  const a = accentHex();
  document.documentElement.style.setProperty('--red', a);
  document.documentElement.style.setProperty('--red2', a);
  document.documentElement.style.setProperty('--hud', { small: 0.82, normal: 1, large: 1.18 }[S.settings.hud] || 1);
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
function drawGauge(id, val, max, majors, label, center, sub, redFrom) {
  const cv = $(id), ctx = cv.getContext('2d');
  const W = cv.width, c = W / 2, R = W * 0.46;
  const st = S.settings.gauge, acc = accentHex();
  ctx.clearRect(0, 0, W, W);
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25;
  const ang = (v) => a0 + (a1 - a0) * clamp(v / max, 0, 1);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  if (st === 'digital') {
    // painel digital: segmentos + número grande
    ctx.fillStyle = 'rgba(6,10,16,0.88)';
    ctx.beginPath(); ctx.arc(c, c, R, 0, 7); ctx.fill();
    ctx.lineWidth = 3; ctx.strokeStyle = acc; ctx.stroke();
    const n = 24, f = clamp(val / max, 0, 1);
    for (let i = 0; i < n; i++) {
      const a = a0 + ((a1 - a0) * (i + 0.5)) / n;
      ctx.strokeStyle = i / n < f ? (redFrom && (i / n) * max >= redFrom ? '#ff3b4e' : acc) : 'rgba(255,255,255,0.1)';
      ctx.lineWidth = W * 0.05;
      ctx.beginPath(); ctx.arc(c, c, R * 0.8, a - 0.05, a + 0.05); ctx.stroke();
    }
    ctx.fillStyle = '#e8fff8';
    ctx.font = `700 ${W * 0.24}px monospace`;
    ctx.fillText(center, c, c);
    ctx.font = `600 ${W * 0.06}px sans-serif`; ctx.fillStyle = acc;
    ctx.fillText(sub, c, c + W * 0.17);
    return;
  }
  if (st === 'sport') {
    // anel de progresso grosso
    ctx.fillStyle = 'rgba(10,12,16,0.85)';
    ctx.beginPath(); ctx.arc(c, c, R, 0, 7); ctx.fill();
    ctx.lineCap = 'round';
    ctx.lineWidth = W * 0.09; ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.beginPath(); ctx.arc(c, c, R * 0.78, a0, a1); ctx.stroke();
    const g = ctx.createLinearGradient(0, W, W, 0);
    g.addColorStop(0, acc); g.addColorStop(1, '#ff3b4e');
    ctx.strokeStyle = g;
    ctx.beginPath(); ctx.arc(c, c, R * 0.78, a0, ang(val)); ctx.stroke();
    ctx.lineCap = 'butt';
    ctx.fillStyle = '#fff';
    ctx.font = `italic 900 ${W * 0.22}px sans-serif`;
    ctx.fillText(center, c, c - W * 0.02);
    ctx.font = `italic 700 ${W * 0.06}px sans-serif`; ctx.fillStyle = '#9aa7b4';
    ctx.fillText(sub, c, c + W * 0.15);
    return;
  }
  const classic = st === 'classic';
  ctx.beginPath(); ctx.arc(c, c, R, 0, 7);
  const bg = ctx.createRadialGradient(c, c, R * 0.2, c, c, R);
  if (classic) { bg.addColorStop(0, '#f4efe2'); bg.addColorStop(1, '#d9d0bb'); }
  else { bg.addColorStop(0, 'rgba(30,34,40,0.95)'); bg.addColorStop(1, 'rgba(8,10,14,0.92)'); }
  ctx.fillStyle = bg; ctx.fill();
  ctx.lineWidth = W * 0.035; ctx.strokeStyle = classic ? '#b8bcc0' : acc; ctx.stroke();
  if (redFrom) { ctx.beginPath(); ctx.arc(c, c, R * 0.86, ang(redFrom), a1); ctx.lineWidth = W * 0.03; ctx.strokeStyle = 'rgba(227,36,59,.85)'; ctx.stroke(); }
  const ink = classic ? '#1b1b1b' : '#fff';
  ctx.fillStyle = ink; ctx.strokeStyle = ink;
  ctx.font = `${classic ? '' : 'italic '}800 ${W * 0.07}px ${classic ? 'serif' : 'sans-serif'}`;
  for (let v = 0; v <= max; v += majors / 2) {
    const a = ang(v), major = v % majors === 0;
    ctx.lineWidth = major ? 3 : 1.5;
    ctx.beginPath();
    ctx.moveTo(c + Math.cos(a) * R * 0.9, c + Math.sin(a) * R * 0.9);
    ctx.lineTo(c + Math.cos(a) * R * (major ? 0.76 : 0.82), c + Math.sin(a) * R * (major ? 0.76 : 0.82));
    ctx.stroke();
    if (major) ctx.fillText(String(label(v)), c + Math.cos(a) * R * 0.6, c + Math.sin(a) * R * 0.6);
  }
  const a = ang(val);
  ctx.strokeStyle = classic ? '#c0392b' : acc; ctx.lineWidth = W * 0.025; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(c - Math.cos(a) * R * 0.1, c - Math.sin(a) * R * 0.1); ctx.lineTo(c + Math.cos(a) * R * 0.86, c + Math.sin(a) * R * 0.86); ctx.stroke();
  ctx.lineCap = 'butt';
  ctx.beginPath(); ctx.arc(c, c, R * 0.3, 0, 7); ctx.fillStyle = classic ? '#2b2b2b' : '#0b0d11'; ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `italic 900 ${W * 0.15}px sans-serif`;
  ctx.fillText(center, c, c - W * 0.01);
  ctx.font = `italic 700 ${W * 0.055}px sans-serif`;
  ctx.fillStyle = classic ? '#555' : '#9aa7b4';
  ctx.fillText(sub, c, c + W * 0.1 + (classic ? W * 0.12 : 0));
}

// mostrador único: velocidade (ponteiro) + anel de rotação + marcha
function drawCluster(sp, rpm) {
  const max = Math.max(120, Math.ceil((rig.def.vmax * 1.3) / 20) * 20);
  drawGauge('gauge', sp, max, 20, (v) => v, String(Math.round(sp)), rig.engineOn ? 'km/h' : 'OFF', rig.def.vmax);
  const cv = $('gauge'), ctx = cv.getContext('2d'), W = cv.width, c = W / 2, R = W * 0.49;
  const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25, f = clamp(rpm / 2500, 0, 1);
  ctx.lineCap = 'round'; ctx.lineWidth = W * 0.022;
  ctx.strokeStyle = 'rgba(255,255,255,0.12)';
  ctx.beginPath(); ctx.arc(c, c, R, a0, a1); ctx.stroke();
  ctx.strokeStyle = f > 0.86 ? '#ff3b4e' : '#3ee07a';
  if (f > 0.01) { ctx.beginPath(); ctx.arc(c, c, R, a0, a0 + (a1 - a0) * f); ctx.stroke(); }
  ctx.lineCap = 'butt';
  ctx.font = `900 ${W * 0.1}px sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = rig.reverse ? '#ff9d3c' : '#fff';
  ctx.fillText(rig.engineOn ? rig.gear || 'N' : '–', c, c + W * 0.33);
}

function updateHUD(dt) {
  hudT -= dt;
  busyT -= dt;
  const sp = rig.speedKmh;
  drawCluster(sp, rig.rpm * 2500);
  if (hudT > 0) return;
  hudT = 0.2;
  updateAction();
  const fr = rig.fuel / rig.def.tank;
  $('fuelbar').style.width = (fr * 100).toFixed(1) + '%';
  $('fuel').classList.toggle('low', fr < 0.12);
  $('ic-load').textContent = `⛽ ${Math.round(rig.range)} km • ${(rig.mass / 1000).toFixed(1)} t`;
  const pw = $('physwarn');
  let w = '';
  if (rig.rolled) w = '';
  else if (rig.stuck) w = '<b class="r">ATOLADO — chame o guincho ou tente de ré</b>';
  else if (rig.fade < 0.85) w = '<b class="r">FREIOS SUPERAQUECIDOS — use o freio-motor</b>';
  else if (rig.slip > 0.08) w = '<b class="o">DERRAPANDO — curva rápida demais</b>';
  else if (rig.sink > 0.25) w = '<b class="o">AFUNDANDO NA LAMA — não pare, acelere leve</b>';
  else if (rig.wheelspin > 0.25) w = '<b class="o">PATINANDO — pouca tração no piso</b>';
  else if (rig.flat) w = `<b class="o">PNEU FURADO${rig.spare ? '' : ' • sem estepe'}</b>`;
  else if (rig.fuel > 0 && fr < 0.1) w = '<b class="o">RESERVA — procure um posto ⛽</b>';
  else if (rig.v > rig.def.vmax / 3.6 + 1.5) w = '<b class="o">EMBALANDO NA DESCIDA — segure no freio-motor</b>';
  pw.innerHTML = w;
  pw.classList.toggle('hidden', !w);
  audio.screech(rig.slip > 0.08 ? Math.min(1, rig.slip * 2) : 0);
  $('ic-hand').classList.toggle('on', ctl.hand);
  $('ic-ret').classList.toggle('on', rig.retarder);
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
    $('ic-dmg').classList.toggle('hidden', j.phase !== 'deliver');
    $('dmg').textContent = j.damage.toFixed(0) + '%';
  } else {
    $('jobtitle').textContent = 'Sem frete';
    $('jobsub').innerHTML = 'Abra o menu ☰ para escolher uma carga';
    $('dist').textContent = '';
    $('ic-dmg').classList.add('hidden');
  }
}

// ---------------- Loop ----------------
let refreshMats = 0;
let last = 0, t = 0, frames = 0, fpsT = 0, saveT = 0, timeT = 0;
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
  if (state === 'title') {
    timeT -= dt;
    if (timeT <= 0) { timeT = 0.5; applyTime(S.clock); }
    traffic.obstacles(obstacles);
    traffic.update(dt, rig, rig._cs || []);
    world.update(dt, t);
    weather.update(dt, camera, world);
    titleCamera(dt);
    if ((frames & 15) === 0) world.cullAt(camera.position.x, camera.position.z, Q.far);
    audio.engine(0, 0, false);
    renderer.render(scene, camera);
    return;
  }
  if (S.settings.time === 'cycle' && state === 'drive') S.clock = (S.clock + dt / 50) % 24;
  timeT -= dt;
  if (timeT <= 0) { timeT = 0.5; applyTime(S.clock); }
  const sim = state === 'drive';
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
  world.update(dt, t);
  weather.update(dt, camera, world);
  if ((frames & 15) === 0) world.cullAt(camera.position.x, camera.position.z, Q.far);
  if (sim) checkRedLight();
  updateNav(dt);
  updateCamera(dt);
  audio.engine(rig.rpm, input.throttle, rig.engineOn && state === 'drive');
  updateHUD(dt);
  if ((frames & 1) === 0) drawMinimap();
  saveT += dt;
  if (saveT > 8) { saveT = 0; save(); }
  renderer.render(scene, camera);
  if (refreshMats > 0 && --refreshMats === 0) scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
}

// avanço de sinal vermelho: multa de trânsito (gravíssima)
let lastCross = null;
function checkRedLight() {
  let key = null, sig = null;
  for (const c of CITIES) {
    if (rig.x < c.x0 - RH || rig.x > cx1(c) + RH || rig.z < c.z0 - RH || rig.z > cz1(c) + RH) continue;
    const i = Math.round((rig.x - c.x0) / BLOCK), j = Math.round((rig.z - c.z0) / BLOCK);
    const nx = c.x0 + i * BLOCK, nz = c.z0 + j * BLOCK;
    if (Math.abs(rig.x - nx) < RH - 1 && Math.abs(rig.z - nz) < RH - 1) { key = c.id + ':' + i + ':' + j; sig = world.signalAt(c.id, i, j); }
    break;
  }
  if (key && key !== lastCross && sig && !sig.stop && rig.v > 2.5) {
    const axis = Math.abs(Math.sin(rig.h)) > Math.abs(Math.cos(rig.h)) ? 'x' : 'z';
    if (world.signalState(sig, axis) === 'r') {
      const fine = 293.47;
      S.money -= fine;
      audio.beep(600, 0.15, 'square', 0.1); setTimeout(() => audio.beep(600, 0.15, 'square', 0.1), 220);
      toast(`🚦 Avançou o sinal vermelho! Multa <b>R$ 293,47</b>`, 3000);
    }
  }
  lastCross = key;
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
  marker.visible = Math.hypot(d.zone.x - rig.x, d.zone.z - rig.z) < 600;
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
window.__game = { get traffic() { return traffic; }, get weather() { return weather; }, makeCam: (x, y, z, tx, ty, tz) => { const c = new THREE.PerspectiveCamera(55, innerWidth / innerHeight, 1, Q.far); c.position.set(x, y, z); c.lookAt(tx, ty, tz); sky.position.copy(c.position); mountains.position.y = -y - 4; return c; }, TRUCK, CARGO, get scene() { return scene; }, get sun() { return sun; }, get renderer() { return renderer; }, S, get rig() { return rig; }, get state() { return state; }, ctl, acceptJob: (i) => acceptJob(i), get jobs() { return jobs; }, world: () => world, cam };

boot().catch((e) => { $("loadmsg").textContent = "Erro ao iniciar: " + e.message; console.error(e); });
