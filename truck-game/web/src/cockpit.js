// Cabine em 1ª pessoa: painel, quadro de instrumentos funcionando, volante com as mãos do
// motorista, colunas, portas, retrovisores (imagem real em média/alta), GPS, para-sol,
// limpadores e gotas de chuva no para-brisa.
import * as THREE from 'three';

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// posição do olho e medidas da cabine por caminhão (x local +: lado esquerdo = motorista)
function layout(def, md) {
  const id = def.id;
  if (id === 'mini') return { eye: [0.33, 1.42, md.zf - 1.7], hw: 0.74, dx: 0.33, scale: 0.8, hood: 0.6, wz: 0.95 };
  if (id === 'urbano') return { eye: [0.45, 2.15, md.zf - 1.15], hw: 0.98, dx: 0.45, scale: 0.92, hood: 0, wz: 1.0 };
  if (def.cab === 'conventional') return { eye: [0.55, 2.55, (md.cabFront || md.zf) - 1.3], hw: 1.18, dx: 0.55, scale: 1, hood: 2.6, wz: 1.1 };
  if (id === 'toco') return { eye: [0.52, 2.35, md.zf - 1.3], hw: 1.1, dx: 0.52, scale: 1, hood: 0, wz: 1.1 };
  return { eye: [0.55, 2.62, md.zf - 1.45], hw: 1.2, dx: 0.55, scale: 1, hood: 0, wz: 1.2 };
}

function canvasTex(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.minFilter = THREE.LinearFilter;
  t.generateMipmaps = false;
  return { c, ctx: c.getContext('2d'), t };
}

// textura de plástico do painel (granulado)
let plasticTex = null;
function plastic() {
  if (plasticTex) return plasticTex;
  const { c, ctx, t } = canvasTex(256, 256);
  ctx.fillStyle = '#2a2c30'; ctx.fillRect(0, 0, 256, 256);
  const d = ctx.getImageData(0, 0, 256, 256);
  for (let i = 0; i < d.data.length; i += 4) { const n = (Math.random() - 0.5) * 16; d.data[i] += n; d.data[i + 1] += n; d.data[i + 2] += n; }
  ctx.putImageData(d, 0, 0);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter;
  void c;
  return (plasticTex = t);
}

// gotas de chuva no vidro
let dropsTex = null;
function drops() {
  if (dropsTex) return dropsTex;
  const { ctx, t } = canvasTex(512, 256);
  ctx.clearRect(0, 0, 512, 256);
  for (let i = 0; i < 420; i++) {
    const x = Math.random() * 512, y = Math.random() * 256, r = 1 + Math.random() * 3.5;
    const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
    g.addColorStop(0, 'rgba(255,255,255,0.75)'); g.addColorStop(0.6, 'rgba(190,205,220,0.35)'); g.addColorStop(1, 'rgba(120,130,140,0.05)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(x, y, r, r * (1 + Math.random() * 0.6), 0, 0, 7); ctx.fill();
    if (Math.random() < 0.12) { ctx.strokeStyle = 'rgba(220,230,240,0.25)'; ctx.lineWidth = r * 0.6; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (Math.random() - 0.5) * 6, y + 10 + Math.random() * 30); ctx.stroke(); }
  }
  return (dropsTex = t);
}

export class Cockpit {
  constructor(renderer, scene, quality, minimapCanvas) {
    this.renderer = renderer;
    this.scene = scene;
    this.quality = quality;
    this.group = null;
    this.active = false;
    this.mirrors = quality !== 'low';
    this.cl = canvasTex(1024, 384); // quadro de instrumentos
    this.gpsTex = new THREE.CanvasTexture(minimapCanvas);
    this.gpsTex.colorSpace = THREE.SRGBColorSpace;
    this.gpsTex.minFilter = THREE.LinearFilter; this.gpsTex.generateMipmaps = false;
    this.clT = 0; this.wipe = 0; this.wipeOn = false; this.mirT = 0; this.bob = 0;
    if (this.mirrors) {
      this.rtL = new THREE.WebGLRenderTarget(256, 160);
      this.rtR = new THREE.WebGLRenderTarget(256, 160);
      for (const rt of [this.rtL, this.rtR]) rt.texture.colorSpace = THREE.SRGBColorSpace;
      this.mcam = new THREE.PerspectiveCamera(32, 256 / 160, 1, 400);
    }
    this._v = new THREE.Vector3(); this._w = new THREE.Vector3(); this._q = new THREE.Quaternion();
  }

  build(rig) {
    if (this.group) { this.group.parent && this.group.parent.remove(this.group); this.group = null; }
    const md = rig.model, def = rig.def, L = layout(def, md);
    this.L = L;
    const g = new THREE.Group();
    g.position.set(L.eye[0], L.eye[1], L.eye[2]);
    g.visible = false;
    const k = L.scale, hw = L.hw, cx = -L.dx; // centro da cabine em relação ao olho
    // interior: luz própria leve (emissivo) para não ficar preto em contraluz
    const lm = (color, map) => new THREE.MeshLambertMaterial({ color, map: map || null, emissive: new THREE.Color(color).multiplyScalar(map ? 0.14 : 0.42) });
    const mDash = lm(0x8c9096, plastic());
    const mDark = lm(0x2b2d31);
    const mTrim = lm(0x6a6e75);
    const mRoof = lm(0xb3ada0);
    const mBeige = lm(0xc4b9a2);
    this.interior = [mDash, mDark, mTrim, mRoof, mBeige];
    const mPaint = new THREE.MeshStandardMaterial({ color: def.color || 0xb5121b, metalness: 0.4, roughness: 0.35 });
    const mChrome = new THREE.MeshStandardMaterial({ color: 0xd8dade, metalness: 0.9, roughness: 0.2 });
    const box = (m, w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => {
      const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
      o.position.set(x, y, z); o.rotation.set(rx, ry, rz); g.add(o); return o;
    };
    const wz = L.wz; // distância do para-brisa
    // painel (duas camadas: tampo inclinado e frente)
    box(mDash, hw * 2, 0.3 * k, 0.62, cx, -0.53 * k, wz - 0.3, -0.1);
    box(mDash, hw * 2, 0.5 * k, 0.1, cx, -0.86 * k, wz - 0.62);
    box(mDark, 0.7 * k, 0.05 * k, 0.2, 0, -0.29 * k, wz - 0.36, -0.12); // capota do quadro
    box(mDash, hw * 2, 0.75 * k, 0.1, cx, -1.0 * k, wz - 0.45); // parte baixa do painel
    box(mDark, hw * 2, 0.05, 1.8, cx, -1.25 * k, wz - 1.0); // assoalho
    // quadro de instrumentos (canvas)
    const clM = new THREE.MeshBasicMaterial({ map: this.cl.t, toneMapped: false });
    const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.66 * k, 0.25 * k), clM);
    cl.position.set(0, -0.37 * k, wz - 0.4); cl.rotation.set(0.45, Math.PI, 0); g.add(cl);
    // console central com GPS
    box(mDark, 0.36 * k, 0.26 * k, 0.06, cx * 0.95, -0.5 * k, wz - 0.6, 0.45);
    const gps = new THREE.Mesh(new THREE.PlaneGeometry(0.3 * k, 0.21 * k), new THREE.MeshBasicMaterial({ map: this.gpsTex, toneMapped: false }));
    gps.position.set(cx * 0.95, -0.5 * k, wz - 0.635); gps.rotation.set(0.45, Math.PI, 0); g.add(gps);
    for (let i = 0; i < 4; i++) box(mTrim, 0.05, 0.05, 0.03, cx * 0.95 - 0.12 + i * 0.08, -0.67 * k, wz - 0.66, 0.45); // botões
    // difusores de ar
    for (const x of [0.36 * k, cx - hw + 0.35, cx * 0.95 - 0.25, cx * 0.95 + 0.25]) box(mDark, 0.16, 0.07, 0.04, x, -0.44 * k, wz - 0.62);
    // colunas A, teto, para-sol, portas e janelas
    const top = 0.62 * k, pil = (x) => box(mDash, 0.13, 1.25 * k, 0.16, x, 0.0, wz + 0.02, -0.22, 0, 0);
    pil(cx + hw - 0.06); pil(cx - hw + 0.06);
    box(mRoof, hw * 2 + 0.1, 0.06, 2.4, cx, top + 0.05, wz - 1.0);
    box(mDark, hw * 2, 0.16 * k, 0.22, cx, top - 0.02, wz - 0.06); // travessa superior
    const visor = box(mBeige, 0.7 * k, 0.025, 0.3, 0.05, top - 0.12, wz - 0.45, 0.25);
    visor.rotation.x = 0.35;
    box(mBeige, 0.7 * k, 0.025, 0.3, cx * 1.6, top - 0.1, wz - 0.45, 0.1);
    for (const sd of [1, -1]) {
      const x = cx + sd * hw;
      box(mDash, 0.08, 0.8 * k, 1.9, x, -0.8 * k, wz - 0.95); // porta (painel interno)
      box(mTrim, 0.07, 0.04, 1.7, x - sd * 0.01, -0.4 * k, wz - 0.95); // soleira da janela
      box(mDash, 0.08, 1.1 * k, 0.1, x, 0.05, wz - 1.95); // coluna B
      box(mDark, 0.04, 0.06, 0.18, x - sd * 0.05, -0.52 * k, wz - 1.2); // maçaneta
    }
    // capô (caminhões bicudos / picape)
    if (L.hood) {
      box(mPaint, 1.5 * k, 0.24, L.hood, cx, -0.78 * k, wz + L.hood / 2 + 0.05, 0.04);
      box(mChrome, 0.06, 0.12, 0.2, cx, -0.6 * k, wz + L.hood - 0.15);
    }
    // limpadores
    this.wipers = [];
    for (const px of [cx + hw * 0.55, cx - hw * 0.2]) {
      const piv = new THREE.Group();
      piv.position.set(px, -0.4 * k, wz + 0.04);
      piv.rotation.x = -0.22;
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.7 * k, 0.02), mDark);
      arm.position.y = 0.35 * k;
      piv.add(arm);
      piv.rotation.z = 1.35;
      g.add(piv);
      this.wipers.push(piv);
    }
    // gotas de chuva no para-brisa
    this.dropsM = new THREE.MeshBasicMaterial({ map: drops(), transparent: true, opacity: 0, depthWrite: false });
    const dp = new THREE.Mesh(new THREE.PlaneGeometry(hw * 2 - 0.1, 1.15 * k), this.dropsM);
    dp.position.set(cx, 0.0, wz + 0.035); dp.rotation.set(-0.22, Math.PI, 0); g.add(dp);
    // retrovisores externos (com imagem real do que vem atrás)
    this.mirrorPos = [];
    const mFace = (rt) => {
      if (!rt) return new THREE.MeshStandardMaterial({ color: 0x40505c, metalness: 0.9, roughness: 0.15 });
      const t = rt.texture;
      return new THREE.MeshBasicMaterial({ map: t });
    };
    for (const [sd, rt] of [[1, this.rtL], [-1, this.rtR]]) {
      const x = cx + sd * (hw + 0.32), z = wz + (sd > 0 ? -0.05 : 0.15), y = -0.05;
      box(mDark, 0.26, 0.5 * k, 0.1, x, y, z + 0.06);
      box(mDark, 0.32, 0.04, 0.04, x - sd * 0.16, y + 0.2, z + 0.08); // braço
      const face = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.44 * k), mFace(rt));
      face.position.set(x, y, z);
      face.rotation.y = Math.PI + sd * 0.25; // virado para o motorista
      if (rt) { face.material.map.repeat.set(-1, 1); face.material.map.offset.set(1, 0); face.material.map.wrapS = THREE.RepeatWrapping; }
      g.add(face);
      this.mirrorPos.push({ sd, x, y, z });
    }
    // volante
    const wheel = new THREE.Group();
    wheel.position.set(0, -0.47 * k, 0.6 * k);
    wheel.rotation.x = 1.05; // face voltada para o motorista, coluna descendo para o painel
    const rimR = 0.24 * k;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(rimR, 0.026 * k, 10, 40), lm(0x26282b));
    wheel.add(rim);
    for (const a of [Math.PI / 2 + 0.1, Math.PI / 2 - 0.1 + Math.PI, -Math.PI / 2]) {
      const sp = new THREE.Mesh(new THREE.BoxGeometry(rimR, 0.035, 0.02), mDark);
      sp.position.set(Math.cos(a) * rimR / 2, Math.sin(a) * rimR / 2, 0);
      sp.rotation.z = a;
      wheel.add(sp);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.075 * k, 0.085 * k, 0.05, 20), mDark);
    hub.rotation.x = Math.PI / 2; wheel.add(hub);
    const logo = new THREE.Mesh(new THREE.CircleGeometry(0.03 * k, 16), mChrome);
    logo.position.z = -0.03; logo.rotation.y = Math.PI; wheel.add(logo);
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.5, 10), mDark);
    col.position.set(0, 0, 0.26); col.rotation.x = Math.PI / 2; wheel.add(col);
    // mãos (presas ao aro, giram com o volante até certo ponto)
    this.hands = [];
    const skin = lm(0xc58b62);
    const sleeve = lm(0x3b5f8f);
    const watch = lm(0x2a2a2a);
    this.handRoot = new THREE.Group();
    wheel.add(this.handRoot);
    for (const [sd, a] of [[1, Math.PI * 0.2], [-1, Math.PI * 0.8]]) { // +x = esquerda do motorista
      const h = new THREE.Group();
      h.position.set(Math.cos(a) * rimR, Math.sin(a) * rimR, -0.012);
      h.rotation.z = a - Math.PI / 2;
      const palm = new THREE.Mesh(new THREE.BoxGeometry(0.1 * k, 0.12 * k, 0.07 * k), skin);
      palm.position.set(0, 0, -0.02); h.add(palm);
      for (let f = 0; f < 4; f++) { const fi = new THREE.Mesh(new THREE.BoxGeometry(0.018 * k, 0.05 * k, 0.04 * k), skin); fi.position.set((f - 1.5) * 0.021 * k, 0.03 * k - Math.abs(f - 1.5) * 0.004, 0.035 * k); fi.rotation.x = 0.5; h.add(fi); }
      const th = new THREE.Mesh(new THREE.BoxGeometry(0.02 * k, 0.05 * k, 0.025 * k), skin);
      th.position.set(sd * -0.045 * k, -0.015 * k, -0.03 * k); th.rotation.z = sd * 0.6; h.add(th);
      this.handRoot.add(h);
      // braço: antebraço e braço (orientados a cada quadro)
      const fore = new THREE.Mesh(new THREE.CylinderGeometry(0.03 * k, 0.04 * k, 1, 10), sleeve);
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.042 * k, 0.046 * k, 1, 10), sleeve);
      const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.034 * k, 0.034 * k, 0.05, 10), sd > 0 ? watch : skin);
      g.add(fore, upper, wrist);
      this.hands.push({ h, sd, fore, upper, wrist, a0: a, shoulder: new THREE.Vector3(sd * 0.3 * k, -0.46 * k, 0.0) });
    }
    g.add(wheel);
    this.wheel = wheel;
    this.rimR = rimR;
    md.root.add(g);
    this.group = g;
    this.rig = rig;
    this.lastModel = md;
  }

  setActive(on) {
    this.active = on;
    for (const id of ['gauge', 'fuel']) { const e = document.getElementById(id); if (e) e.style.display = on ? 'none' : ''; }
    if (this.group) this.group.visible = on;
    if (this.rig) this.rig.model.body.visible = !on;
  }

  // braço = cilindro entre dois pontos (no espaço do grupo)
  limb(mesh, a, b) {
    const d = this._v.subVectors(b, a), len = d.length();
    mesh.position.copy(a).addScaledVector(d, 0.5);
    mesh.scale.set(1, len, 1);
    mesh.quaternion.setFromUnitVectors(this._w.set(0, 1, 0), d.normalize());
  }

  update(dt, rig, input, ctl, info, camera, cam) {
    if (!this.active) return;
    const dim = 1 - 0.8 * (info.night || 0);
    if (Math.abs((this._dim ?? -1) - dim) > 0.03) { this._dim = dim; for (const m of this.interior) { m.userData.e = m.userData.e || m.emissive.clone(); m.emissive.copy(m.userData.e).multiplyScalar(dim); } }
    if (rig.model !== this.lastModel) { this.build(rig); this.setActive(true); }
    const g = this.group;
    // volante (até 1,5 volta para cada lado no visual) e mãos
    const wa = -input.steer * 2.6;
    this.wheel.rotation.z = wa;
    const hr = clamp(wa, -0.9, 0.9);
    this.handRoot.rotation.z = hr - wa; // mãos deslizam no aro após ~75°
    g.updateMatrixWorld(true);
    const inv = this._m || (this._m = new THREE.Matrix4());
    inv.copy(g.matrixWorld).invert();
    for (const H of this.hands) {
      const wp = new THREE.Vector3(0, 0, -0.06).applyMatrix4(H.h.matrixWorld).applyMatrix4(inv);
      const elbow = new THREE.Vector3().addVectors(H.shoulder, wp).multiplyScalar(0.5);
      elbow.x += H.sd * 0.1; elbow.y -= 0.08;
      this.limb(H.upper, H.shoulder, elbow);
      this.limb(H.fore, elbow, wp);
      const wdir = this._v.subVectors(wp, elbow).normalize();
      H.wrist.position.copy(wp).addScaledVector(wdir, -0.06);
      H.wrist.quaternion.setFromUnitVectors(this._w.set(0, 1, 0), wdir);
    }
    // limpadores e gotas
    const rain = info.rain || 0;
    if (rain > 0.08) this.wipeOn = true; else if (this.wipe % (Math.PI * 2) < 0.1) this.wipeOn = false;
    if (this.wipeOn) this.wipe += dt * (rain > 0.6 ? 6 : 3.6);
    const sweep = this.wipeOn ? (1 - Math.cos(this.wipe)) / 2 : 0;
    for (const w of this.wipers) w.rotation.z = 1.35 - sweep * 2.2;
    const since = this.wipeOn ? ((this.wipe % (Math.PI * 2)) / (Math.PI * 2)) : 1;
    this.dropsM.opacity = rain * (0.25 + 0.75 * since);
    // quadro de instrumentos (~12 Hz)
    this.clT -= dt;
    if (this.clT <= 0) { this.clT = 0.08; this.drawCluster(rig, ctl, info); this.gpsTex.needsUpdate = true; }
    // câmera: olho do motorista, olhar livre arrastando a tela
    this.bob += dt * (1 + rig.speedKmh * 0.05);
    const shake = (rig.shake || 0) * 0.35;
    const eye = this._v.set(0, 0.03 * Math.sin(this.bob * 0.7) * Math.min(1, rig.speedKmh / 40) + (Math.random() - 0.5) * shake, -0.08).applyMatrix4(g.matrixWorld);
    camera.position.copy(eye);
    const yaw = clamp(cam.orbit, -1.9, 1.9) + input.steer * 0.12;
    const pitch = -0.2;
    const dir = this._w.set(Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    dir.applyQuaternion(g.getWorldQuaternion(this._q));
    camera.lookAt(eye.x + dir.x, eye.y + dir.y, eye.z + dir.z);
    camera.fov = 72;
    camera.near = 0.05;
    // retrovisores: um por quadro, alternando
    if (this.mirrors) {
      this.mirT = (this.mirT + 1) % 2;
      const m = this.mirrorPos[this.mirT], rt = this.mirT === 0 ? this.rtL : this.rtR;
      const p = new THREE.Vector3(m.x + m.sd * 0.1, m.y, m.z).applyMatrix4(g.matrixWorld);
      const back = new THREE.Vector3(m.sd * 0.16, -0.06, -1).applyQuaternion(g.getWorldQuaternion(this._q));
      this.mcam.position.copy(p);
      this.mcam.lookAt(p.x + back.x, p.y + back.y, p.z + back.z);
      const R = this.renderer, prev = R.getRenderTarget(), au = R.shadowMap.autoUpdate;
      g.visible = false;
      R.shadowMap.autoUpdate = false;
      R.setRenderTarget(rt);
      R.render(this.scene, this.mcam);
      R.setRenderTarget(prev);
      R.shadowMap.autoUpdate = au;
      g.visible = true;
    }
  }

  drawCluster(rig, ctl, info) {
    const { ctx, t } = this.cl;
    const W = 1024, H = 384;
    ctx.fillStyle = '#07090c'; ctx.fillRect(0, 0, W, H);
    const on = rig.engineOn;
    const dial = (cx, cy, R, val, max, step, label, red, unit) => {
      const a0 = Math.PI * 0.75, a1 = Math.PI * 2.25, ang = (v) => a0 + (a1 - a0) * clamp(v / max, 0, 1);
      const g = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R);
      g.addColorStop(0, '#1a1f26'); g.addColorStop(1, '#0b0e12');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, R, 0, 7); ctx.fill();
      ctx.strokeStyle = '#8a929c'; ctx.lineWidth = 4; ctx.stroke();
      if (red) { ctx.strokeStyle = '#d62a2a'; ctx.lineWidth = 10; ctx.beginPath(); ctx.arc(cx, cy, R * 0.86, ang(red), a1); ctx.stroke(); }
      ctx.fillStyle = on ? '#e9f1ff' : '#5a6068'; ctx.strokeStyle = on ? '#e9f1ff' : '#5a6068';
      ctx.font = 'bold 26px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (let v = 0; v <= max; v += step / 2) {
        const a = ang(v), major = Math.abs(v / step - Math.round(v / step)) < 1e-6;
        ctx.lineWidth = major ? 4 : 2;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * R * 0.92, cy + Math.sin(a) * R * 0.92); ctx.lineTo(cx + Math.cos(a) * R * (major ? 0.78 : 0.84), cy + Math.sin(a) * R * (major ? 0.78 : 0.84)); ctx.stroke();
        if (major) ctx.fillText(String(label(v)), cx + Math.cos(a) * R * 0.63, cy + Math.sin(a) * R * 0.63);
      }
      ctx.font = 'bold 20px sans-serif'; ctx.fillStyle = '#8a929c'; ctx.fillText(unit, cx, cy + R * 0.42);
      const a = ang(val);
      ctx.strokeStyle = '#ff5a1f'; ctx.lineWidth = 7; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(cx - Math.cos(a) * R * 0.12, cy - Math.sin(a) * R * 0.12); ctx.lineTo(cx + Math.cos(a) * R * 0.86, cy + Math.sin(a) * R * 0.86); ctx.stroke();
      ctx.lineCap = 'butt';
      ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(cx, cy, R * 0.1, 0, 7); ctx.fill();
    };
    const vmaxDial = Math.max(120, Math.ceil((rig.def.vmax * 1.3) / 20) * 20);
    dial(200, 200, 170, rig.speedKmh, vmaxDial, 20, (v) => v, 0, 'km/h');
    dial(W - 200, 200, 170, rig.rpm * 25, 30, 5, (v) => v / 10, 24, 'x1000 rpm');
    // display central
    ctx.fillStyle = '#0f1a24'; ctx.fillRect(390, 40, 244, 300);
    ctx.strokeStyle = '#2a3a4a'; ctx.lineWidth = 3; ctx.strokeRect(390, 40, 244, 300);
    if (on) {
      ctx.fillStyle = '#bfe3ff'; ctx.textAlign = 'center';
      ctx.font = 'bold 84px sans-serif'; ctx.fillText(rig.gear || 'N', 512, 120);
      ctx.font = 'bold 30px sans-serif'; ctx.fillText(Math.round(rig.speedKmh) + ' km/h', 512, 190);
      ctx.font = '22px sans-serif'; ctx.fillStyle = '#86a7c2';
      ctx.fillText(info.clock || '', 512, 232);
      ctx.fillText(`${(rig.mass / 1000).toFixed(1)} t • ${Math.round(rig.range)} km`, 512, 264);
      // combustível
      const fr = rig.fuel / rig.def.tank;
      ctx.fillStyle = '#26333f'; ctx.fillRect(420, 292, 184, 22);
      ctx.fillStyle = fr < 0.12 ? '#ff4a3a' : '#f2c14a'; ctx.fillRect(420, 292, 184 * fr, 22);
      ctx.fillStyle = '#86a7c2'; ctx.font = 'bold 18px sans-serif'; ctx.fillText('E', 410, 304); ctx.fillText('F', 614, 304);
    }
    // luzes-espia
    const lamp = (x, y, txt, col, lit) => { ctx.fillStyle = lit ? col : '#1b2026'; ctx.font = 'bold 30px sans-serif'; ctx.textAlign = 'center'; ctx.fillText(txt, x, y); };
    const bl = ctl.blink, ph = (performance.now() / 400 | 0) % 2 === 0;
    lamp(420, 368, '◀', '#3ee07a', ph && (bl === -1 || bl === 2));
    lamp(604, 368, '▶', '#3ee07a', ph && (bl === 1 || bl === 2));
    lamp(470, 368, '≣D', '#4aa3ff', rig.beamMode === 2);
    lamp(512, 368, '(P)', '#ff3b3b', !!ctl.hand);
    lamp(556, 368, 'FM', '#f5c13a', rig.retarder);
    lamp(110, 368, '⛽', '#ff8a1a', rig.fuel / rig.def.tank < 0.12);
    lamp(170, 368, '⚠', '#ff3b3b', rig.fade < 0.85 || rig.flat);
    lamp(W - 120, 368, '🔋', '#ff3b3b', !on);
    t.needsUpdate = true;
  }
}
