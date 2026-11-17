// Drizzie Truck — multiplayer online.
// Cada celular roda a física do próprio caminhão e manda o estado ~10x por segundo.
// Os caminhões dos outros jogadores são desenhados com interpolação (sem trancos)
// e entram como obstáculos na colisão. O modo sozinho não usa nada daqui.
import * as THREE from 'three';
import { TRUCK, CARGO } from './data.js';
import { Rig } from './truck.js';

export const PROTO = 1;
export const DEFAULT_SERVER = 'wss://drizzie-truck-mp.onrender.com';
const SEND_HZ = 10;
const DELAY = 0.16; // atraso de interpolação (s)

const angLerp = (a, b, t) => a + Math.atan2(Math.sin(b - a), Math.cos(b - a)) * t;
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;

export class Net {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.ws = null;
    this.id = 0;
    this.room = '';
    this.pub = true;
    this.max = 8;
    this.quick = [];
    this.players = new Map(); // id -> Remote
    this.gone = new Set();    // quem já saiu (ignora pacotes atrasados)
    this.sendT = 0;
    this.online = false;
    this.closedByUser = false;
    this.hornOn = false;
    // ganchos preenchidos pelo jogo
    this.onChat = null; this.onJoin = null; this.onLeave = null; this.onHorn = null; this.onClock = null; this.onDrop = null;
  }

  // acorda o servidor (o plano gratuito dorme sem uso) e conecta
  async connect(url, opts, status = () => {}) {
    url = String(url || DEFAULT_SERVER).trim().replace(/\/+$/, '');
    if (!/^wss?:\/\//.test(url)) url = 'wss://' + url.replace(/^https?:\/\//, '');
    const httpUrl = url.replace(/^ws/, 'http');
    status('Conectando ao servidor…');
    const t0 = Date.now();
    let lastErr = 'Sem resposta do servidor';
    while (Date.now() - t0 < 75000) {
      try {
        return await this.tryConnect(url, opts);
      } catch (e) {
        lastErr = e.message || String(e);
        if (e.fatal) throw e;
        status('Acordando o servidor… (pode levar até 1 minuto)');
        try { await fetch(httpUrl, { cache: 'no-store', mode: 'no-cors' }); } catch (e2) { /* ainda dormindo */ }
        await new Promise((r) => setTimeout(r, 2500));
      }
    }
    throw new Error(lastErr);
  }

  tryConnect(url, opts) {
    return new Promise((resolve, reject) => {
      let ws;
      try { ws = new WebSocket(url); } catch (e) { reject(e); return; }
      let done = false;
      const fail = (msg, fatal) => { if (done) return; done = true; try { ws.close(); } catch (e) { /* */ } const er = new Error(msg); er.fatal = fatal; reject(er); };
      const to = setTimeout(() => fail('Tempo esgotado'), 12000);
      ws.onopen = () => ws.send(JSON.stringify({ t: 'join', v: PROTO, name: opts.name, mode: opts.mode, code: opts.code, truck: opts.truck }));
      ws.onerror = () => fail('Falha na conexão');
      ws.onclose = () => fail('Conexão fechada');
      ws.onmessage = (ev) => {
        let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
        if (m.t === 'err') { clearTimeout(to); fail(m.m, true); return; }
        if (m.t !== 'welcome') return;
        clearTimeout(to);
        done = true;
        this.ws = ws;
        this.id = m.id; this.room = m.room; this.pub = m.pub; this.max = m.max; this.quick = m.quick || [];
        this.online = true; this.closedByUser = false;
        this.opts = { ...opts, url };
        for (const p of m.players) this.addPlayer(p.id, p.name, p.s);
        if (this.onClock) this.onClock(m.clock);
        ws.onmessage = (e2) => this.handle(e2.data);
        ws.onclose = ws.onerror = () => this.dropped();
        resolve(m);
      };
    });
  }

  dropped() {
    if (!this.online) return;
    this.online = false;
    this.ws = null;
    this.clearPlayers();
    if (!this.closedByUser && this.onDrop) this.onDrop();
  }

  close() {
    this.closedByUser = true;
    this.online = false;
    if (this.ws) try { this.ws.close(); } catch (e) { /* */ }
    this.ws = null;
    this.clearPlayers();
  }

  send(obj) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(obj)); }

  handle(data) {
    let m; try { m = JSON.parse(data); } catch (e) { return; }
    if (m.t === 's') {
      let p = this.players.get(m.id);
      if (!p && this.gone.has(m.id)) return;
      if (!p) p = this.addPlayer(m.id, '…', null);
      p.push(m.d);
    } else if (m.t === 'join') { this.addPlayer(m.id, m.name, null); if (this.onJoin) this.onJoin(m.name); }
    else if (m.t === 'leave') { this.gone.add(m.id); this.removePlayer(m.id); if (this.onLeave) this.onLeave(m.name); }
    else if (m.t === 'name') { const p = this.players.get(m.id); if (p) p.setName(m.name); }
    else if (m.t === 'q') { if (this.onChat) this.onChat(m.id === this.id ? 'Você' : m.name, this.quick[m.i] || ''); }
    else if (m.t === 'h') { const p = this.players.get(m.id); if (p && this.onHorn) this.onHorn(p, m.on); }
    else if (m.t === 'clk') { if (this.onClock) this.onClock(m.c); }
  }

  addPlayer(id, name, s) {
    if (id === this.id) return null;
    let p = this.players.get(id);
    if (!p) { p = new Remote(this, id, name); this.players.set(id, p); }
    else p.setName(name);
    if (s) p.push(s);
    return p;
  }
  removePlayer(id) { const p = this.players.get(id); if (p) { p.dispose(); this.players.delete(id); } }
  clearPlayers() { for (const p of this.players.values()) p.dispose(); this.players.clear(); }

  get count() { return this.players.size + 1; }

  chat(i) { this.send({ t: 'q', i }); }
  horn(on) { if (on !== this.hornOn) { this.hornOn = on; this.send({ t: 'h', on }); } }
  rename(name) { this.send({ t: 'name', name }); }

  // estado do caminhão local
  tick(dt, rig, extra) {
    if (!this.online) return;
    this.sendT -= dt;
    if (this.sendT > 0) return;
    this.sendT = 1 / SEND_HZ;
    this.send({ t: 's', d: [
      r2(rig.x), r2(rig.z), r3(rig.h), r2(rig.v), r3(rig.th), r3(rig.th2),
      rig.def.id, rig.cargo ? rig.cargo.id : '',
      r3(rig.rollT.phi), r3(rig.rollR.phi), rig.rollSide || 1, rig.rolled ? 1 : 0,
      extra.beam || 0, extra.blink || 0, r3(rig.steer || 0),
    ] });
  }

  // anima os caminhões remotos
  update(dt, now, camPos) {
    for (const p of this.players.values()) p.update(dt, now, camPos);
  }

  // círculos de colisão dos caminhões remotos
  circles(out) {
    for (const p of this.players.values()) {
      if (!p.rig || !p.visible) continue;
      const cs = p.rig.circles(p.cs || (p.cs = []));
      for (const c of cs) out.push({ x: c.x, z: c.z, r: c.r, set hit(v) { /* o outro jogador sente no próprio celular */ } });
    }
    return out;
  }
}

class Remote {
  constructor(net, id, name) {
    this.net = net;
    this.id = id;
    this.name = name || 'Motorista';
    this.buf = []; // [tempoLocal, estado]
    this.rig = null;
    this.truck = ''; this.cargo = '';
    this.visible = false;
    this.x = 0; this.z = 0; this.h = 0;
    this.blinkT = 0;
    this.makeLabel();
  }

  makeLabel() {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 64;
    this.labelCv = cv;
    this.labelTex = new THREE.CanvasTexture(cv);
    this.labelTex.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.SpriteMaterial({ map: this.labelTex, depthTest: false, depthWrite: false, fog: false, transparent: true });
    this.label = new THREE.Sprite(m);
    this.label.scale.set(6.4, 1.6, 1);
    this.label.renderOrder = 20;
    this.label.visible = false;
    this.net.scene.add(this.label);
    this.drawLabel();
  }
  drawLabel() {
    const c = this.labelCv.getContext('2d');
    c.clearRect(0, 0, 256, 64);
    c.font = '700 30px sans-serif';
    const w = Math.min(244, c.measureText(this.name).width + 28);
    c.fillStyle = 'rgba(10,20,35,0.72)';
    const x = 128 - w / 2;
    c.beginPath(); c.roundRect ? c.roundRect(x, 10, w, 44, 14) : c.rect(x, 10, w, 44); c.fill();
    c.fillStyle = '#7cc7ff';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText(this.name, 128, 33, 230);
    this.labelTex.needsUpdate = true;
  }
  setName(n) { if (n && n !== this.name) { this.name = n; this.drawLabel(); } }

  push(d) {
    if (!Array.isArray(d) || d.length < 15) return;
    const now = performance.now() / 1000;
    this.buf.push([now, d]);
    if (this.buf.length > 20) this.buf.shift();
  }

  ensureRig(truckId, cargoId) {
    const def = TRUCK[truckId];
    if (!def) return false;
    if (!this.rig) {
      this.rig = new Rig(this.net.scene, def, false);
      this.rig.world = this.net.world;
      this.truck = truckId; this.cargo = '';
    } else if (truckId !== this.truck) {
      this.rig.detach();
      this.rig.setTruck(def);
      this.truck = truckId; this.cargo = '';
    }
    if (cargoId !== this.cargo) {
      this.rig.detach();
      this.cargo = cargoId;
      if (cargoId && CARGO[cargoId]) this.rig.attach(CARGO[cargoId]);
    }
    return true;
  }

  update(dt, now, camPos) {
    const B = this.buf;
    if (!B.length) return;
    const tr = now - DELAY;
    // descarta amostras antigas, mantendo uma antes do instante de desenho
    while (B.length > 2 && B[1][0] <= tr) B.shift();
    let a = B[0], b = B[1] || B[0];
    const d = a[1], e = b[1];
    if (!this.ensureRig(e[6], e[7])) return;
    const R = this.rig;
    let t = b[0] > a[0] ? (tr - a[0]) / (b[0] - a[0]) : 1;
    let x, z, h;
    if (t <= 1) {
      t = Math.max(0, t);
      x = d[0] + (e[0] - d[0]) * t; z = d[1] + (e[1] - d[1]) * t; h = angLerp(d[2], e[2], t);
      R.th = angLerp(d[4], e[4], t); R.th2 = angLerp(d[5], e[5], t);
    } else {
      // sem pacote novo: continua em frente por até 0,5 s
      const ex = Math.min(tr - b[0], 0.5);
      x = e[0] + Math.sin(e[2]) * e[3] * ex; z = e[1] + Math.cos(e[2]) * e[3] * ex; h = e[2];
      R.th = e[4]; R.th2 = e[5];
    }
    const yawRate = dt > 0 ? Math.atan2(Math.sin(h - this.h), Math.cos(h - this.h)) / dt : 0;
    this.x = x; this.z = z; this.h = h;
    R.x = x; R.z = z; R.h = h;
    R.v = e[3]; R.yaw = Math.max(-1, Math.min(1, yawRate)); R.acc = 0;
    R.steer = e[14];
    R.rollT.phi = e[8]; R.rollR.phi = e[9]; R.rollSide = e[10]; R.liftSide = e[10]; R.rolled = e[11];
    R.wheelRot += (R.v * dt) / (R.model.wr || 0.5);
    R._sdt = dt;
    R.sync();
    // luzes (sem mexer nos materiais compartilhados com o caminhão do jogador)
    const lightsOn = e[12] > 0;
    if (R.lightsOn !== lightsOn) {
      R.lightsOn = lightsOn;
      R.model.night.visible = lightsOn;
      for (const tt of [R.trailer, R.trailer2]) if (tt) tt.night.visible = lightsOn;
    }
    this.blinkT += dt;
    if (e[13]) R.setBlink(e[13], this.blinkT % 0.8 < 0.4);
    else if (this.blinkWas) R.setBlink(0, false);
    this.blinkWas = !!e[13];
    // some de vista se muito longe (economiza GPU)
    const dist = Math.hypot(x - camPos.x, z - camPos.z);
    const vis = dist < 1500;
    if (vis !== this.visible) {
      this.visible = vis;
      R.model.root.visible = vis;
      for (const tt of [R.trailer, R.trailer2]) if (tt) tt.root.visible = vis;
    }
    this.label.visible = dist < 450;
    if (this.label.visible) {
      this.label.position.set(x, R.y + (R.model.y0 || 1) + (R.model.ch || 2.5) + 1.6, z);
      const s = Math.max(1, dist / 45);
      this.label.scale.set(8 * s, 2 * s, 1);
    }
  }

  dispose() {
    if (this.rig) {
      this.rig.detach();
      this.rig.unpark();
      this.net.scene.remove(this.rig.model.root);
      this.rig = null;
    }
    this.net.scene.remove(this.label);
    this.label.material.dispose();
    this.labelTex.dispose();
  }
}
