// Áudio sintetizado (WebAudio): motor a diesel, buzina e efeitos.
export class Audio {
  constructor() {
    this.ctx = null;
    this.volume = 0.7;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    this.master.connect(ctx.destination);

    // motor: duas ondas + ruído filtrado
    this.engGain = ctx.createGain();
    this.engGain.gain.value = 0;
    this.filter = ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.value = 400;
    this.filter.Q.value = 4;
    this.o1 = ctx.createOscillator();
    this.o1.type = 'sawtooth';
    this.o2 = ctx.createOscillator();
    this.o2.type = 'square';
    const g2 = ctx.createGain();
    g2.gain.value = 0.35;
    this.o1.connect(this.filter);
    this.o2.connect(g2).connect(this.filter);
    const buf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noise = ctx.createBufferSource();
    this.noise.buffer = buf;
    this.noise.loop = true;
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass';
    nf.frequency.value = 180;
    this.nGain = ctx.createGain();
    this.nGain.gain.value = 0.25;
    this.noise.connect(nf).connect(this.nGain).connect(this.filter);
    this.filter.connect(this.engGain).connect(this.master);
    this.o1.start(); this.o2.start(); this.noise.start();
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  engine(rpm, load, on = true) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const f = 28 + rpm * 70;
    this.o1.frequency.setTargetAtTime(f, t, 0.05);
    this.o2.frequency.setTargetAtTime(f * 0.5, t, 0.05);
    this.filter.frequency.setTargetAtTime(220 + rpm * 900 + load * 400, t, 0.08);
    this.engGain.gain.setTargetAtTime(on ? 0.13 + load * 0.08 : 0, t, 0.1);
  }

  horn(on) {
    if (!this.ctx) return;
    if (on && !this.hornNodes) {
      const g = this.ctx.createGain();
      g.gain.value = 0.18;
      const a = this.ctx.createOscillator(), b = this.ctx.createOscillator();
      a.type = b.type = 'sawtooth';
      a.frequency.value = 233; b.frequency.value = 311;
      const f = this.ctx.createBiquadFilter();
      f.frequency.value = 1800;
      a.connect(f); b.connect(f); f.connect(g).connect(this.master);
      a.start(); b.start();
      this.hornNodes = [a, b, g];
    } else if (!on && this.hornNodes) {
      const [a, b, g] = this.hornNodes;
      g.gain.setTargetAtTime(0, this.ctx.currentTime, 0.03);
      a.stop(this.ctx.currentTime + 0.2); b.stop(this.ctx.currentTime + 0.2);
      this.hornNodes = null;
    }
  }

  beep(freq = 880, dur = 0.12, type = 'sine', vol = 0.25) {
    if (!this.ctx) return;
    const o = this.ctx.createOscillator(), g = this.ctx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = vol;
    g.gain.setTargetAtTime(0, this.ctx.currentTime + dur * 0.6, dur * 0.3);
    o.connect(g).connect(this.master);
    o.start();
    o.stop(this.ctx.currentTime + dur * 2);
  }

  crash(power) {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const len = 0.35;
    const buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 2);
    const s = ctx.createBufferSource();
    s.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.frequency.value = 900;
    const g = ctx.createGain();
    g.gain.value = Math.min(0.9, 0.2 + power / 60);
    s.connect(f).connect(g).connect(this.master);
    s.start();
  }

  airBrake() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const len = 0.6;
    const buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = ctx.createBufferSource();
    s.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = 2500;
    const g = ctx.createGain();
    g.gain.value = 0.22;
    s.connect(f).connect(g).connect(this.master);
    s.start();
  }

  // chiado de pneu ao derrapar
  screech(level) {
    if (!this.ctx) return;
    if (!this.scr) {
      const ctx = this.ctx, len = ctx.sampleRate;
      const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 2400; f.Q.value = 6;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(f).connect(g).connect(this.master); src.start();
      this.scr = g;
    }
    this.scr.gain.setTargetAtTime(level * 0.22, this.ctx.currentTime, 0.08);
  }

  // chuva: ruído filtrado contínuo
  rain(level) {
    if (!this.ctx) return;
    if (!this.rainG) {
      const ctx = this.ctx, len = ctx.sampleRate * 2;
      const buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
      let b = 0;
      for (let i = 0; i < len; i++) { const w = Math.random() * 2 - 1; b = 0.97 * b + 0.03 * w; d[i] = w * 0.6 + b * 2.2 + (Math.random() < 0.0009 ? (Math.random() - 0.5) * 3 : 0); }
      const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 500;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 7000;
      const g = ctx.createGain(); g.gain.value = 0;
      src.connect(hp).connect(lp).connect(g).connect(this.master); src.start();
      this.rainG = g;
    }
    this.rainG.gain.setTargetAtTime(level * 0.32, this.ctx.currentTime, 0.5);
  }

  // trovão: estrondo grave com estalo inicial (raios próximos)
  thunder(power = 1) {
    if (!this.ctx) return;
    const ctx = this.ctx, len = 5.5, t = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate), d = buf.getChannelData(0);
    let b = 0;
    for (let i = 0; i < d.length; i++) {
      const x = i / d.length;
      b = 0.985 * b + 0.015 * (Math.random() * 2 - 1);
      const env = Math.min(1, x * 30) * Math.pow(1 - x, 1.6) * (0.65 + 0.35 * Math.sin(x * 40 + Math.sin(x * 9) * 3));
      d[i] = b * 9 * env + (x < 0.04 ? (Math.random() * 2 - 1) * power * (1 - x / 0.04) : 0);
    }
    const s = ctx.createBufferSource(); s.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 180 + power * 500;
    const g = ctx.createGain(); g.gain.value = 0.25 + power * 0.6;
    s.connect(f).connect(g).connect(this.master); s.start(t);
  }

  starter() {
    if (!this.ctx) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(14, t);
    o.frequency.linearRampToValueAtTime(22, t + 0.7);
    o.frequency.linearRampToValueAtTime(48, t + 1.1);
    f.frequency.value = 600;
    g.gain.setValueAtTime(0.0, t);
    g.gain.linearRampToValueAtTime(0.35, t + 0.1);
    g.gain.setValueAtTime(0.35, t + 1.0);
    g.gain.linearRampToValueAtTime(0, t + 1.4);
    o.connect(f).connect(g).connect(this.master);
    o.start(t); o.stop(t + 1.5);
  }

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
}
