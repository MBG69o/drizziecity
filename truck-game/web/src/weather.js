// Clima: sol, nublado, chuva e tempestade (raios e trovões), pista molhada e alagamentos.
import * as THREE from 'three';

const STATES = {
  sol: { rain: 0, cloud: 0.12 },
  nublado: { rain: 0, cloud: 0.62 },
  chuva: { rain: 0.6, cloud: 0.88 },
  tempestade: { rain: 1, cloud: 1 },
};

export class Weather {
  constructor(scene, quality, audio) {
    this.scene = scene;
    this.audio = audio;
    this.rain = 0; this.cloud = 0.12; this.wet = 0; this.flood = 0;
    this.state = 'sol'; this.mode = 'auto'; this.timer = 120 + Math.random() * 180;
    this.flash = 0; this.strikeT = 8; this.thunderQ = [];
    // chuva: segmentos animados inteiramente na GPU (caixa que acompanha a câmera)
    const n = quality === 'low' ? 1800 : quality === 'medium' ? 3500 : 6000;
    this.n = n;
    const pos = new Float32Array(n * 6), end = new Float32Array(n * 2);
    const B = [70, 38, 70];
    for (let i = 0; i < n; i++) {
      const x = Math.random() * B[0], y = Math.random() * B[1], z = Math.random() * B[2];
      pos.set([x, y, z, x, y, z], i * 6);
      end[i * 2] = 0; end[i * 2 + 1] = 1;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('end', new THREE.BufferAttribute(end, 1));
    this.uni = {
      uTime: { value: 0 }, uCam: { value: new THREE.Vector3() }, uBox: { value: new THREE.Vector3(...B) },
      uVel: { value: new THREE.Vector3(1.5, -17, 0.8) }, uOpacity: { value: 0 }, uColor: { value: new THREE.Color(0xaab4c0) },
    };
    const m = new THREE.ShaderMaterial({
      uniforms: this.uni, transparent: true, depthWrite: false, fog: false,
      vertexShader: `
        attribute float end;
        uniform float uTime; uniform vec3 uCam; uniform vec3 uBox; uniform vec3 uVel;
        varying float vA;
        void main() {
          vec3 o = uCam - uBox * 0.5;
          vec3 p = position + uVel * uTime;
          p = o + mod(p - o, uBox);
          p -= uVel * 0.045 * end;
          float d = length(p - uCam);
          vA = (1.0 - smoothstep(16.0, 34.0, d)) * (0.35 + 0.65 * end);
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,
      fragmentShader: `
        uniform float uOpacity; uniform vec3 uColor; varying float vA;
        void main() { gl_FragColor = vec4(uColor, uOpacity * vA); }`,
    });
    this.lines = new THREE.LineSegments(g, m);
    this.lines.frustumCulled = false;
    this.lines.renderOrder = 5;
    this.lines.visible = false;
    scene.add(this.lines);
    // clarão dos raios
    this.amb = new THREE.AmbientLight(0xdfe8ff, 0);
    scene.add(this.amb);
    // raio visível no céu
    const bg = new THREE.BufferGeometry();
    bg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(24 * 3), 3));
    this.bolt = new THREE.Line(bg, new THREE.LineBasicMaterial({ color: 0xf2f6ff, fog: false, transparent: true }));
    this.bolt.visible = false; this.bolt.frustumCulled = false;
    scene.add(this.bolt);
  }

  setMode(mode) {
    this.mode = mode;
    if (mode !== 'auto') this.state = mode;
  }

  get name() { return { sol: 'Céu limpo', nublado: 'Nublado', chuva: 'Chuva', tempestade: 'Tempestade' }[this.state]; }

  update(dt, cam, world) {
    // troca de clima no modo automático
    if (this.mode === 'auto') {
      this.timer -= dt;
      if (this.timer <= 0) {
        const r = Math.random();
        this.state = r < 0.45 ? 'sol' : r < 0.67 ? 'nublado' : r < 0.9 ? 'chuva' : 'tempestade';
        this.timer = 150 + Math.random() * 260;
      }
    }
    const T = STATES[this.state];
    const k = Math.min(1, dt / 25);
    this.rain += (T.rain - this.rain) * k;
    this.cloud += (T.cloud - this.cloud) * k;
    if (this.rain < 0.005) this.rain = 0;
    // pista molha rápido e seca devagar; alagamentos enchem com chuva forte
    this.wet = Math.min(1, Math.max(0, this.wet + dt * (this.rain > 0.05 ? this.rain * 0.06 : -0.008)));
    this.flood = Math.min(1, Math.max(0, this.flood + dt * (this.rain > 0.45 ? (this.rain - 0.35) * 0.009 : -0.004)));
    // partículas
    this.uni.uTime.value += dt;
    this.uni.uCam.value.copy(cam.position);
    this.uni.uOpacity.value = Math.min(0.7, this.rain * 0.85);
    this.lines.visible = this.rain > 0.02;
    this.lines.geometry.setDrawRange(0, Math.ceil(this.n * Math.min(1, this.rain * 1.1)) * 2);
    if (this.audio) this.audio.rain(this.rain);
    // raios e trovões
    this.flash = Math.max(0, this.flash - dt * 6);
    if (this.rain > 0.8) {
      this.strikeT -= dt;
      if (this.strikeT <= 0) {
        this.strikeT = 6 + Math.random() * 16;
        this.strike(cam);
      }
    }
    for (const q of this.thunderQ) q.t -= dt;
    while (this.thunderQ.length && this.thunderQ[0].t <= 0) { const q = this.thunderQ.shift(); if (this.audio) this.audio.thunder(q.p); }
    if (this.flashSeq) {
      this.flashSeq.t += dt;
      const t = this.flashSeq.t;
      const f = t < 0.08 ? 1 : t < 0.16 ? 0.25 : t < 0.26 ? 0.85 : 0;
      this.flash = Math.max(this.flash, f * this.flashSeq.p);
      this.bolt.visible = t < 0.3;
      this.bolt.material.opacity = f;
      if (t > 0.4) this.flashSeq = null;
    }
    this.amb.intensity = this.flash * 3.2;
    if (world) { world.wet = this.wet; world.floodLevel = this.flood; world.setWet(this.wet); world.updateFloods(this.flood); }
  }

  strike(cam) {
    const a = Math.random() * Math.PI * 2, d = 400 + Math.random() * 1600;
    const x = cam.position.x + Math.cos(a) * d, z = cam.position.z + Math.sin(a) * d;
    const P = this.bolt.geometry.attributes.position;
    let px = x, pz = z;
    for (let i = 0; i < 24; i++) {
      const y = 520 - i * 23;
      P.setXYZ(i, px, y, pz);
      px += (Math.random() - 0.5) * 34; pz += (Math.random() - 0.5) * 34;
    }
    P.needsUpdate = true;
    const p = Math.max(0.25, 1 - d / 2200);
    this.flashSeq = { t: 0, p };
    this.thunderQ.push({ t: d / 340, p });
    this.thunderQ.sort((u, v) => u.t - v.t);
  }

  // ajusta a iluminação e a névoa calculadas pelo ciclo dia/noite
  applyLighting(o) {
    const c = this.cloud, r = this.rain;
    o.sun.intensity *= 1 - 0.82 * Math.max(0, c - 0.1);
    o.hemi.intensity *= 1 - 0.32 * Math.max(0, c - 0.1);
    const gray = new THREE.Color(0x8d959c).multiplyScalar((0.3 + 0.7 * (1 - o.night)) * (1 - 0.42 * r));
    const g = Math.min(1, Math.max(0, c - 0.2) * 1.2);
    o.scene.background.lerp(gray, g);
    o.scene.fog.color.lerp(gray, g);
    o.scene.fog.near = o.fogNear * (1 - 0.65 * r);
    o.scene.fog.far = o.fogFar * (1 - 0.55 * r);
    if (o.clouds) { o.clouds.material.color.multiplyScalar(1 - 0.55 * c); o.clouds.material.opacity = 0.75 + 0.25 * c; }
    if (o.sky) o.sky.material.color.lerp(gray, g);
    if (o.physSky) o.physSky.visible = o.physSky.visible && c < 0.55;
    this.uni.uColor.value.setHex(0xaab4c0).multiplyScalar(0.35 + 0.65 * (1 - o.night));
  }
}
