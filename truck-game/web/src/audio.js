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

  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
}
