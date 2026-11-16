// Texturas procedurais em alta resolução (geradas em canvas, com mipmaps
// e filtragem anisotrópica) — sem arquivos de imagem, APK leve.
import * as THREE from 'three';

let SIZE = 1024;
let ANISO = 4;
const cache = {};

export function configureTextures(size, aniso) {
  SIZE = size;
  ANISO = aniso;
}

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return [c, c.getContext('2d')];
}

function noise(ctx, w, h, amount, seed, mono = true) {
  const img = ctx.getImageData(0, 0, w, h);
  const d = img.data;
  const r = rng(seed);
  for (let i = 0; i < d.length; i += 4) {
    const n = (r() - 0.5) * amount;
    if (mono) {
      d[i] += n; d[i + 1] += n; d[i + 2] += n;
    } else {
      d[i] += n; d[i + 1] += (r() - 0.5) * amount; d[i + 2] += (r() - 0.5) * amount;
    }
  }
  ctx.putImageData(img, 0, 0);
}

function speckle(ctx, w, h, count, colors, maxR, seed) {
  const r = rng(seed);
  for (let i = 0; i < count; i++) {
    ctx.fillStyle = colors[(r() * colors.length) | 0];
    ctx.globalAlpha = 0.25 + r() * 0.5;
    const rad = 0.5 + r() * maxR;
    ctx.beginPath();
    ctx.arc(r() * w, r() * h, rad, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

function finish(c, repeat = true) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = ANISO;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.magFilter = THREE.LinearFilter;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function memo(key, fn) {
  if (!cache[key]) cache[key] = fn();
  return cache[key];
}

function asphaltBase(ctx, s, seed, base = '#3b3d40') {
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, s, s);
  speckle(ctx, s, s, s * 6, ['#5a5c60', '#2a2b2d', '#6b6b6b', '#232323'], s / 512, seed);
  noise(ctx, s, s, 22, seed + 1);
}

export const tex = {
  asphalt: () => memo('asphalt', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    asphaltBase(ctx, s, 11);
    return finish(c);
  }),

  // Rua: 20 m de largura x 20 m de comprimento por repetição
  road: () => memo('road', () => {
    const s = SIZE;
    const [c, ctx] = canvas(s, s);
    asphaltBase(ctx, s, 21);
    const m = s / 20; // pixels por metro
    // marcas de pneu (faixas mais escuras)
    ctx.fillStyle = 'rgba(20,20,20,0.18)';
    for (const x of [1.6, 3.4, 6.6, 8.4]) {
      ctx.fillRect((10 + x) * m - m * 0.6, 0, m * 1.2, s);
      ctx.fillRect((10 - x) * m - m * 0.6, 0, m * 1.2, s);
    }
    const paint = (color, x, w, dash) => {
      ctx.fillStyle = color;
      if (!dash) ctx.fillRect(x * m - (w * m) / 2, 0, w * m, s);
      else ctx.fillRect(x * m - (w * m) / 2, s * 0.1, w * m, s * dash);
    };
    paint('#e8b923', 9.8, 0.15);   // faixa dupla amarela
    paint('#e8b923', 10.2, 0.15);
    paint('#f2f2f2', 5, 0.15, 0.45);  // tracejadas brancas
    paint('#f2f2f2', 15, 0.15, 0.45);
    paint('#f2f2f2', 0.5, 0.18);  // bordas
    paint('#f2f2f2', 19.5, 0.18);
    // desgaste na pintura
    const r = rng(5);
    ctx.globalCompositeOperation = 'source-atop';
    for (let i = 0; i < s * 3; i++) {
      ctx.fillStyle = 'rgba(60,60,62,0.35)';
      ctx.fillRect(r() * s, r() * s, 1 + r() * 3, 1 + r() * 3);
    }
    ctx.globalCompositeOperation = 'source-over';
    return finish(c);
  }),

  intersection: () => memo('intersection', () => {
    const s = SIZE;
    const [c, ctx] = canvas(s, s);
    asphaltBase(ctx, s, 31);
    const m = s / 20;
    ctx.fillStyle = 'rgba(240,240,240,0.92)';
    // faixas de pedestre nas 4 bordas
    for (let i = 0; i < 8; i++) {
      const p = (1.5 + i * 2.2) * m;
      ctx.fillRect(p, 0.3 * m, 1.1 * m, 2.6 * m);
      ctx.fillRect(p, s - 2.9 * m, 1.1 * m, 2.6 * m);
      ctx.fillRect(0.3 * m, p, 2.6 * m, 1.1 * m);
      ctx.fillRect(s - 2.9 * m, p, 2.6 * m, 1.1 * m);
    }
    noise(ctx, s, s, 10, 32);
    return finish(c, false);
  }),

  concrete: () => memo('concrete', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#a9a69f';
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 26, 41);
    speckle(ctx, s, s, s * 2, ['#8f8c86', '#bdbab3'], s / 400, 42);
    ctx.strokeStyle = 'rgba(70,68,64,0.55)';
    ctx.lineWidth = Math.max(1, s / 256);
    for (let i = 0; i <= 4; i++) {
      ctx.beginPath(); ctx.moveTo((i * s) / 4, 0); ctx.lineTo((i * s) / 4, s); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, (i * s) / 4); ctx.lineTo(s, (i * s) / 4); ctx.stroke();
    }
    return finish(c);
  }),

  lot: () => memo('lot', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#8e8b85';
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 30, 51);
    speckle(ctx, s, s, s, ['#6f6c66', '#a5a29c', '#5d5a55'], s / 200, 52);
    ctx.strokeStyle = 'rgba(50,48,45,0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, s - 2, s - 2);
    // manchas de óleo
    const r = rng(53);
    for (let i = 0; i < 6; i++) {
      const ox = r() * s, oy = r() * s;
      const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, s / 10);
      g.addColorStop(0, 'rgba(30,30,30,0.25)');
      g.addColorStop(1, 'rgba(30,30,30,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    return finish(c);
  }),

  grass: () => memo('grass', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#4f7a32';
    ctx.fillRect(0, 0, s, s);
    const r = rng(61);
    for (let i = 0; i < 40; i++) {
      const x = r() * s, y = r() * s, rad = s * (0.05 + r() * 0.15);
      const g = ctx.createRadialGradient(x, y, 0, x, y, rad);
      const col = r() > 0.5 ? '96,140,58' : '62,96,38';
      g.addColorStop(0, `rgba(${col},0.45)`);
      g.addColorStop(1, `rgba(${col},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < s * 14; i++) {
      const x = r() * s, y = r() * s;
      ctx.strokeStyle = r() > 0.5 ? 'rgba(120,170,70,0.5)' : 'rgba(40,70,25,0.5)';
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 3, y - 2 - r() * 4); ctx.stroke();
    }
    noise(ctx, s, s, 14, 62, false);
    return finish(c);
  }),

  field: () => memo('field', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#7a5a36';
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 30, 71);
    const rows = 16;
    for (let i = 0; i < rows; i++) {
      const y = (i + 0.5) * (s / rows);
      ctx.fillStyle = '#5d8a2a';
      ctx.fillRect(0, y - s / rows / 4, s, s / rows / 2);
    }
    speckle(ctx, s, s, s * 4, ['#7fae3a', '#4a7020', '#8fbf4a'], 2, 72);
    return finish(c);
  }),

  sand: () => memo('sand', () => {
    const s = SIZE / 4;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#d6c49a';
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 26, 81);
    return finish(c);
  }),

  water: () => memo('water', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#1d5f7d';
    ctx.fillRect(0, 0, s, s);
    const r = rng(91);
    for (let i = 0; i < 900; i++) {
      ctx.strokeStyle = r() > 0.5 ? 'rgba(170,220,240,0.22)' : 'rgba(10,40,60,0.25)';
      ctx.lineWidth = 1 + r() * 2;
      const x = r() * s, y = r() * s, l = 6 + r() * 20;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x + l / 2, y - 3, x + l, y); ctx.stroke();
    }
    return finish(c);
  }),

  roof: () => memo('roof', () => {
    const s = SIZE / 4;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#5c5a57';
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 34, 101);
    speckle(ctx, s, s, s * 3, ['#77746f', '#44423f'], 1.5, 102);
    return finish(c);
  }),

  tiles: () => memo('tiles', () => {
    const s = SIZE / 4;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#9b3d2a';
    ctx.fillRect(0, 0, s, s);
    const rows = 8;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < rows; x++) {
        const g = ctx.createLinearGradient(0, (y * s) / rows, 0, ((y + 1) * s) / rows);
        g.addColorStop(0, '#b4513a');
        g.addColorStop(1, '#7a2c1d');
        ctx.fillStyle = g;
        ctx.fillRect(((x + (y % 2) * 0.5) * s) / rows, (y * s) / rows, s / rows - 1, s / rows - 1);
      }
    }
    noise(ctx, s, s, 16, 103);
    return finish(c);
  }),

  metal: () => memo('metal', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    const n = 32;
    for (let i = 0; i < n; i++) {
      const g = ctx.createLinearGradient((i * s) / n, 0, ((i + 1) * s) / n, 0);
      g.addColorStop(0, '#9aa1a6');
      g.addColorStop(0.5, '#d9dee1');
      g.addColorStop(1, '#868c90');
      ctx.fillStyle = g;
      ctx.fillRect((i * s) / n, 0, s / n, s);
    }
    noise(ctx, s, s, 14, 111);
    return finish(c);
  }),

  // Pneu: banda de rodagem
  tire: () => memo('tire', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#1b1b1c';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#2c2c2e';
    for (let i = 0; i < 24; i++) {
      ctx.save();
      ctx.translate((i * s) / 24, 0);
      ctx.fillRect(0, 0, s / 48, s);
      ctx.restore();
    }
    noise(ctx, s, s, 10, 121);
    return finish(c);
  }),

  rim: () => memo('rim', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#151515';
    ctx.fillRect(0, 0, s, s);
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s * 0.36);
    g.addColorStop(0, '#f0f0f0');
    g.addColorStop(0.6, '#b8bcc0');
    g.addColorStop(1, '#7c8084');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(s / 2, s / 2, s * 0.36, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#444';
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      ctx.beginPath(); ctx.arc(s / 2 + Math.cos(a) * s * 0.2, s / 2 + Math.sin(a) * s * 0.2, s * 0.025, 0, 7); ctx.fill();
    }
    ctx.fillStyle = '#555';
    ctx.beginPath(); ctx.arc(s / 2, s / 2, s * 0.09, 0, 7); ctx.fill();
    return finish(c, false);
  }),

  // Fachadas: 4 colunas x 4 andares por repetição + mapa de luzes noturnas
  facade: (style) => memo('facade' + style, () => {
    const s = SIZE;
    const [c, ctx] = canvas(s, s);
    const [ce, ex] = canvas(s / 2, s / 2);
    ex.fillStyle = '#000';
    ex.fillRect(0, 0, s / 2, s / 2);
    const r = rng(200 + style);
    const st = [
      { wall: '#c9d0d6', win: ['#3a5a78', '#4a7090', '#2d4a66'], frame: '#7f8a93', mw: 0.78, mh: 0.62 },
      { wall: '#9c4f39', win: ['#24323e', '#3b4d5c', '#2f3d48'], frame: '#ddd4c2', mw: 0.42, mh: 0.5 },
      { wall: '#d9d2c3', win: ['#2b3a47', '#3f5566', '#33414d'], frame: '#948c7b', mw: 0.5, mh: 0.48 },
      { wall: '#66757f', win: ['#1d2d3c', '#2c4a64', '#3a5f7d'], frame: '#3a4954', mw: 0.9, mh: 0.8 },
    ][style];
    ctx.fillStyle = st.wall;
    ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 18, 210 + style);
    if (style === 1) {
      ctx.strokeStyle = 'rgba(70,30,20,0.4)';
      ctx.lineWidth = 1;
      const bh = s / 96;
      for (let y = 0; y < 96; y++) {
        ctx.beginPath(); ctx.moveTo(0, y * bh); ctx.lineTo(s, y * bh); ctx.stroke();
        for (let x = 0; x < 32; x++) {
          const xx = ((x + (y % 2) * 0.5) * s) / 32;
          ctx.beginPath(); ctx.moveTo(xx, y * bh); ctx.lineTo(xx, (y + 1) * bh); ctx.stroke();
        }
      }
    }
    const N = 4, cell = s / N;
    const lit = ['#ffd38a', '#ffe7b0', '#fff4d6', '#cfe3ff', '#ffc070'];
    for (let fy = 0; fy < N; fy++) {
      for (let fx = 0; fx < N; fx++) {
        const x0 = fx * cell, y0 = fy * cell;
        const ww = cell * st.mw, wh = cell * st.mh;
        const wx = x0 + (cell - ww) / 2, wy = y0 + (cell - wh) / 2 - cell * 0.04;
        ctx.fillStyle = st.frame;
        ctx.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);
        const g = ctx.createLinearGradient(wx, wy, wx + ww, wy + wh);
        const col = st.win[(r() * st.win.length) | 0];
        g.addColorStop(0, col);
        g.addColorStop(0.5, '#8fa8bc');
        g.addColorStop(0.56, col);
        g.addColorStop(1, '#141d26');
        ctx.fillStyle = g;
        ctx.fillRect(wx, wy, ww, wh);
        ctx.fillStyle = st.frame;
        ctx.fillRect(wx + ww / 2 - 1.5, wy, 3, wh);
        if (style !== 3) ctx.fillRect(wx, wy + wh * 0.35, ww, 2);
        if (style === 1 || style === 2) {
          ctx.fillStyle = 'rgba(0,0,0,0.25)';
          ctx.fillRect(wx - 4, wy + wh + 3, ww + 8, 4);
        }
        if (r() < 0.42) {
          const k = 0.5;
          const eg = ex.createLinearGradient(0, wy * k, 0, (wy + wh) * k);
          const lc = lit[(r() * lit.length) | 0];
          eg.addColorStop(0, lc);
          eg.addColorStop(1, '#6b4a20');
          ex.fillStyle = eg;
          ex.fillRect(wx * k, wy * k, ww * k, wh * k);
        }
      }
      if (style === 0 || style === 3) {
        ctx.fillStyle = st.frame;
        ctx.fillRect(0, fy * cell + cell - 4, s, 4);
      }
    }
    // sujeira escorrida
    for (let i = 0; i < 40; i++) {
      const x = r() * s, h = s * (0.05 + r() * 0.2), y = r() * s;
      const g = ctx.createLinearGradient(0, y, 0, y + h);
      g.addColorStop(0, 'rgba(40,35,30,0.12)');
      g.addColorStop(1, 'rgba(40,35,30,0)');
      ctx.fillStyle = g;
      ctx.fillRect(x, y, 2 + r() * 6, h);
    }
    const t = finish(c);
    t.userData.emissive = finish(ce);
    return t;
  }),


  // Rodovia: 18 m (2 faixas de 3,5 m + acostamentos), repetição a cada 18 m
  highway: () => memo('highway', () => {
    const s = SIZE;
    const [c, ctx] = canvas(s, s);
    asphaltBase(ctx, s, 23, '#3a3c3f');
    const m = s / 18;
    // acostamentos mais claros
    ctx.fillStyle = 'rgba(150,150,150,0.18)';
    ctx.fillRect(0, 0, 2 * m, s);
    ctx.fillRect(16 * m, 0, 2 * m, s);
    ctx.fillStyle = 'rgba(20,20,20,0.2)';
    for (const x of [4.2, 6.6, 11.4, 13.8]) ctx.fillRect(x * m - m * 0.5, 0, m, s);
    ctx.fillStyle = '#f2f2f2';
    ctx.fillRect(1.9 * m, 0, 0.15 * m, s);
    ctx.fillRect(15.95 * m, 0, 0.15 * m, s);
    ctx.fillStyle = '#e8b923';
    ctx.fillRect(8.82 * m, 0, 0.14 * m, s * 0.5);
    ctx.fillRect(9.04 * m, 0, 0.14 * m, s);
    // rachaduras e remendos
    const r = rng(24);
    ctx.strokeStyle = 'rgba(15,15,15,0.35)';
    ctx.lineWidth = 1.2;
    for (let i = 0; i < 14; i++) {
      let x = r() * s, y = r() * s;
      ctx.beginPath(); ctx.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (r() - 0.5) * 30; y += r() * 20; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    for (let i = 0; i < 3; i++) { ctx.fillStyle = 'rgba(25,25,27,0.35)'; ctx.fillRect(2 * m + r() * 12 * m, r() * s, 1.5 * m + r() * m, 1 * m + r() * m); }
    return finish(c);
  }),

  roadSign: (title, sub, bg) => memo('rs' + title + sub + bg, () => {
    const w = 1024, h = 410;
    const [c, ctx] = canvas(w, h);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 14;
    ctx.strokeRect(20, 20, w - 40, h - 40);
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    let fs = 120;
    ctx.font = `700 ${fs}px sans-serif`;
    while (ctx.measureText(title).width > w - 120) { fs -= 6; ctx.font = `700 ${fs}px sans-serif`; }
    ctx.fillText(title, w / 2, h * 0.42);
    ctx.font = '600 64px sans-serif';
    ctx.fillText(sub, w / 2, h * 0.76);
    return finish(c, false);
  }),

  speedSign: (v) => memo('spd' + v, () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(s / 2, s / 2, s / 2, 0, 7); ctx.fill();
    ctx.strokeStyle = '#d0021b';
    ctx.lineWidth = 28;
    ctx.beginPath(); ctx.arc(s / 2, s / 2, s / 2 - 16, 0, 7); ctx.stroke();
    ctx.fillStyle = '#111';
    ctx.font = '800 110px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(v), s / 2, s / 2 + 6);
    return finish(c, false);
  }),

  clouds: () => memo('clouds', () => {
    const w = 1024, h = 512;
    const [c, ctx] = canvas(w, h);
    ctx.clearRect(0, 0, w, h);
    const r = rng(555);
    for (let i = 0; i < 70; i++) {
      const x = r() * w, y = h * 0.25 + r() * h * 0.55, rad = 30 + r() * 90;
      for (let k = 0; k < 7; k++) {
        const ox = x + (r() - 0.5) * rad * 1.8, oy = y + (r() - 0.5) * rad * 0.4, rr = rad * (0.4 + r() * 0.6);
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, rr);
        g.addColorStop(0, 'rgba(255,255,255,0.55)');
        g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = g;
        ctx.fillRect(ox - rr, oy - rr, rr * 2, rr * 2);
        // repete na emenda horizontal
        if (ox < rr) { ctx.save(); ctx.translate(w, 0); ctx.fillRect(ox - rr, oy - rr, rr * 2, rr * 2); ctx.restore(); }
      }
    }
    const t = finish(c);
    t.wrapT = THREE.ClampToEdgeWrapping;
    return t;
  }),

  // Painel corrugado de baú/carreta
  panel: () => memo('panel', () => {
    const s = 512;
    const [c, ctx] = canvas(s, s);
    const n = 32;
    for (let i = 0; i < n; i++) {
      const g = ctx.createLinearGradient((i * s) / n, 0, ((i + 1) * s) / n, 0);
      g.addColorStop(0, '#d9dcdf'); g.addColorStop(0.5, '#ffffff'); g.addColorStop(1, '#c8cbce');
      ctx.fillStyle = g;
      ctx.fillRect((i * s) / n, 0, s / n, s);
    }
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, s, 6); ctx.fillRect(0, s - 6, s, 6);
    const d = ctx.createLinearGradient(0, s, 0, s * 0.6);
    d.addColorStop(0, 'rgba(110,92,70,0.35)'); d.addColorStop(1, 'rgba(110,92,70,0)');
    ctx.fillStyle = d; ctx.fillRect(0, 0, s, s);
    noise(ctx, s, s, 8, 600);
    return finish(c);
  }),


  // Farol: lente com refletores e luz diurna (DRL)
  headlamp: () => memo('headlamp', () => {
    const w = 256, h = 128;
    const [c, ctx] = canvas(w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#3a4048'); g.addColorStop(1, '#14181c');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    for (const [x, r] of [[70, 40], [170, 34]]) {
      const rg = ctx.createRadialGradient(x, 60, 2, x, 60, r);
      rg.addColorStop(0, '#ffffff'); rg.addColorStop(0.35, '#dfe6ee'); rg.addColorStop(0.7, '#8d98a5'); rg.addColorStop(1, '#2b3138');
      ctx.fillStyle = rg; ctx.beginPath(); ctx.arc(x, 60, r, 0, 7); ctx.fill();
    }
    ctx.fillStyle = '#f7fbff'; ctx.fillRect(20, 108, 216, 8);
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 4; ctx.strokeRect(2, 2, w - 4, h - 4);
    return finish(c, false);
  }),

  // Lanterna traseira
  taillamp: () => memo('taillamp', () => {
    const w = 128, h = 64;
    const [c, ctx] = canvas(w, h);
    ctx.fillStyle = '#5a0a0a'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ff2a1a'; ctx.fillRect(4, 4, 56, 56);
    ctx.fillStyle = '#ffa21a'; ctx.fillRect(64, 4, 28, 56);
    ctx.fillStyle = '#f2f2f2'; ctx.fillRect(96, 4, 28, 56);
    return finish(c, false);
  }),

  // Faixas decorativas da cabine (fundo transparente)
  cabDecal: (hex) => memo('decal' + hex, () => {
    const w = 512, h = 192;
    const [c, ctx] = canvas(w, h);
    ctx.clearRect(0, 0, w, h);
    const col = new THREE.Color(hex);
    const dark = '#' + col.clone().multiplyScalar(0.45).getHexString();
    const light = col.getHSL({}).l > 0.6 ? '#2a3440' : '#ffffff';
    ctx.fillStyle = dark;
    ctx.beginPath(); ctx.moveTo(0, h * 0.55); ctx.lineTo(w, h * 0.25); ctx.lineTo(w, h * 0.42); ctx.lineTo(0, h * 0.72); ctx.fill();
    ctx.fillStyle = light;
    ctx.beginPath(); ctx.moveTo(0, h * 0.76); ctx.lineTo(w, h * 0.46); ctx.lineTo(w, h * 0.5); ctx.lineTo(0, h * 0.8); ctx.fill();
    ctx.font = 'italic 900 46px sans-serif';
    ctx.fillStyle = light;
    ctx.fillText('DRIZZIE', 26, h * 0.42);
    return finish(c, false);
  }),


  // Árvores em cartão (fundo transparente): 0 = copa larga, 1 = pinheiro, 2 = eucalipto
  treeCard: (kind) => memo('treecard' + kind, () => {
    const w = 256, h = 512;
    const [c, ctx] = canvas(w, h);
    ctx.clearRect(0, 0, w, h);
    const r = rng(900 + kind);
    // tronco
    const tg = ctx.createLinearGradient(w / 2 - 10, 0, w / 2 + 10, 0);
    tg.addColorStop(0, '#3b2a1c'); tg.addColorStop(0.5, '#6d5038'); tg.addColorStop(1, '#2e2016');
    ctx.fillStyle = tg;
    const tw = kind === 1 ? 9 : kind === 2 ? 7 : 12;
    ctx.beginPath(); ctx.moveTo(w / 2 - tw, h); ctx.lineTo(w / 2 + tw, h); ctx.lineTo(w / 2 + tw * 0.4, h * 0.25); ctx.lineTo(w / 2 - tw * 0.4, h * 0.25); ctx.fill();
    const leaf = (x, y, rad, light) => {
      const g = ctx.createRadialGradient(x - rad * 0.3, y - rad * 0.35, rad * 0.1, x, y, rad);
      const base = kind === 1 ? [38, 72, 40] : kind === 2 ? [86, 110, 70] : [62, 98, 44];
      const k = 0.65 + light * 0.6;
      g.addColorStop(0, `rgba(${base[0] * k * 1.35 | 0},${base[1] * k * 1.3 | 0},${base[2] * k * 1.2 | 0},1)`);
      g.addColorStop(0.7, `rgba(${base[0] * k | 0},${base[1] * k | 0},${base[2] * k | 0},1)`);
      g.addColorStop(1, `rgba(${base[0] * k * 0.7 | 0},${base[1] * k * 0.7 | 0},${base[2] * k * 0.7 | 0},0)`);
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, rad, 0, 7); ctx.fill();
    };
    if (kind === 1) {
      // pinheiro: camadas em cone com pontas
      for (let i = 0; i < 260; i++) {
        const t = r();
        const y = h * 0.06 + t * h * 0.78;
        const half = (t * 0.42 + 0.04) * w;
        const x = w / 2 + (r() * 2 - 1) * half;
        leaf(x, y, 6 + r() * 12 + t * 8, 1 - t * 0.6 + (x < w / 2 ? 0.15 : -0.1));
      }
    } else {
      const top = kind === 2 ? h * 0.05 : h * 0.08, bot = kind === 2 ? h * 0.62 : h * 0.72;
      const rx = kind === 2 ? w * 0.3 : w * 0.45;
      for (let i = 0; i < 420; i++) {
        const a = r() * Math.PI * 2, d = Math.sqrt(r());
        const x = w / 2 + Math.cos(a) * d * rx;
        const y = (top + bot) / 2 + Math.sin(a) * d * (bot - top) / 2;
        const light = 1 - (y - top) / (bot - top) * 0.7 + (x < w / 2 ? 0.15 : -0.1);
        leaf(x, y, 5 + r() * (kind === 2 ? 10 : 15), light);
      }
      // galhos aparecendo
      ctx.strokeStyle = 'rgba(60,42,28,0.8)'; ctx.lineWidth = 3;
      for (let i = 0; i < 6; i++) { ctx.beginPath(); ctx.moveTo(w / 2, bot - 10); ctx.lineTo(w / 2 + (r() - 0.5) * rx * 1.2, bot - 30 - r() * 60); ctx.stroke(); }
    }
    // pontinhos de folhas para quebrar a borda
    for (let i = 0; i < 900; i++) {
      const x = r() * w, y = r() * h * 0.85;
      const px = ctx.getImageData(x | 0, y | 0, 1, 1).data;
      if (px[3] > 200) { ctx.fillStyle = `rgba(${px[0] * (0.7 + r() * 0.6) | 0},${px[1] * (0.7 + r() * 0.6) | 0},${px[2] * (0.7 + r() * 0.5) | 0},1)`; ctx.fillRect(x, y, 2, 2); }
    }
    const t = finish(c, false);
    t.premultiplyAlpha = false;
    return t;
  }),

  warehouse: () => memo('warehouse', () => {
    const s = SIZE / 2;
    const [c, ctx] = canvas(s, s);
    const n = 40;
    for (let i = 0; i < n; i++) {
      const g = ctx.createLinearGradient((i * s) / n, 0, ((i + 1) * s) / n, 0);
      g.addColorStop(0, '#b7bcc0');
      g.addColorStop(0.5, '#e4e7e9');
      g.addColorStop(1, '#a6abaf');
      ctx.fillStyle = g;
      ctx.fillRect((i * s) / n, 0, s / n, s);
    }
    ctx.fillStyle = 'rgba(60,70,80,0.35)';
    ctx.fillRect(0, s * 0.9, s, s * 0.1);
    noise(ctx, s, s, 12, 301);
    return finish(c);
  }),

  container: (hex) => memo('container' + hex, () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    const col = new THREE.Color(hex);
    const n = 24;
    for (let i = 0; i < n; i++) {
      const g = ctx.createLinearGradient((i * s) / n, 0, ((i + 1) * s) / n, 0);
      g.addColorStop(0, '#' + col.clone().multiplyScalar(0.7).getHexString());
      g.addColorStop(0.5, '#' + col.clone().multiplyScalar(1.1).getHexString());
      g.addColorStop(1, '#' + col.clone().multiplyScalar(0.6).getHexString());
      ctx.fillStyle = g;
      ctx.fillRect((i * s) / n, 0, s / n, s);
    }
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 6;
    ctx.strokeRect(3, 3, s - 6, s - 6);
    noise(ctx, s, s, 14, 311);
    return finish(c);
  }),

  // Baú com logotipo
  cargoBox: (color, text) => memo('cbox' + color + text, () => {
    const w = SIZE, h = SIZE / 4;
    const [c, ctx] = canvas(w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#fbfbfb');
    g.addColorStop(1, '#d7dadd');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.fillRect(0, h * 0.78, w, h * 0.08);
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * 0.7); ctx.lineTo(w * 0.15, h * 0.2); ctx.lineTo(w * 0.22, h * 0.2); ctx.lineTo(w * 0.12, h * 0.7);
    ctx.fill();
    ctx.font = `900 ${h * 0.34}px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w * 0.25, h * 0.42);
    ctx.font = `600 ${h * 0.1}px sans-serif`;
    ctx.fillStyle = '#555';
    ctx.fillText('TRANSPORTES & LOGÍSTICA', w * 0.255, h * 0.66);
    ctx.strokeStyle = 'rgba(0,0,0,0.15)';
    ctx.lineWidth = 2;
    for (let i = 1; i < 12; i++) {
      ctx.beginPath(); ctx.moveTo((i * w) / 12, 0); ctx.lineTo((i * w) / 12, h); ctx.stroke();
    }
    return finish(c, false);
  }),

  sign: (text, bg, fg) => memo('sign' + text + bg, () => {
    const w = 1024, h = 192;
    const [c, ctx] = canvas(w, h);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.fillStyle = fg;
    let fs = 96;
    ctx.font = `800 ${fs}px sans-serif`;
    while (ctx.measureText(text).width > w - 80 && fs > 30) {
      fs -= 4;
      ctx.font = `800 ${fs}px sans-serif`;
    }
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, w / 2, h / 2 + 4);
    return finish(c, false);
  }),

  // Pintura com desgaste e poeira (mais escura perto do chão)
  paint: () => memo('paint', () => {
    const s = 512;
    const [c, ctx] = canvas(s, s);
    const g = ctx.createLinearGradient(0, 0, 0, s);
    g.addColorStop(0, '#ffffff');
    g.addColorStop(0.5, '#eeeeee');
    g.addColorStop(1, '#c4c4c4');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const r = rng(777);
    // poeira subindo da parte de baixo (UV v=0 é a base)
    const d = ctx.createLinearGradient(0, s, 0, s * 0.35);
    d.addColorStop(0, 'rgba(110,92,70,0.55)');
    d.addColorStop(1, 'rgba(110,92,70,0)');
    ctx.fillStyle = d;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 2600; i++) {
      const y = s - Math.pow(r(), 1.8) * s;
      ctx.fillStyle = `rgba(${90 + r() * 40},${75 + r() * 30},${55 + r() * 25},${0.06 + r() * 0.16})`;
      ctx.beginPath(); ctx.arc(r() * s, y, 0.5 + r() * 3.5, 0, 7); ctx.fill();
    }
    // escorridos da chuva
    for (let i = 0; i < 70; i++) {
      const x = r() * s, y = r() * s * 0.4, h = s * (0.15 + r() * 0.5);
      const gg = ctx.createLinearGradient(0, y, 0, y + h);
      gg.addColorStop(0, 'rgba(80,70,55,0)');
      gg.addColorStop(0.5, 'rgba(80,70,55,0.14)');
      gg.addColorStop(1, 'rgba(80,70,55,0)');
      ctx.fillStyle = gg;
      ctx.fillRect(x, y, 1 + r() * 3, h);
    }
    noise(ctx, s, s, 8, 778);
    return finish(c);
  }),

  // Pátio do showroom: padrão geométrico escuro
  backdrop: () => memo('backdrop', () => {
    const w = 1024, h = 512;
    const [c, ctx] = canvas(w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#08121f');
    g.addColorStop(1, '#0e2a40');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
    const r = rng(901);
    const S = 64;
    for (let y = 0; y < h / S + 1; y++)
      for (let x = 0; x < w / S + 1; x++) {
        const ox = x * S + (y % 2) * S / 2, oy = y * S * 0.87;
        ctx.fillStyle = `rgba(${40 + r() * 30},${90 + r() * 60},${130 + r() * 70},${0.05 + r() * 0.12})`;
        ctx.beginPath();
        ctx.moveTo(ox, oy); ctx.lineTo(ox + S / 2, oy + S * 0.87); ctx.lineTo(ox - S / 2, oy + S * 0.87); ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'rgba(120,200,255,0.06)';
        ctx.stroke();
      }
    return finish(c, false);
  }),

  glow: () => memo('glow', () => {
    const s = 128;
    const [c, ctx] = canvas(s, s);
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,240,200,0.55)');
    g.addColorStop(1, 'rgba(255,220,150,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    return finish(c, false);
  }),

  // Facho do farol projetado no asfalto
  beam: () => memo('beam', () => {
    const w = 128, h = 256;
    const [c, ctx] = canvas(w, h);
    const g = ctx.createRadialGradient(w / 2, h, 0, w / 2, h, h);
    g.addColorStop(0, 'rgba(255,245,220,0.85)');
    g.addColorStop(0.5, 'rgba(255,240,210,0.35)');
    g.addColorStop(1, 'rgba(255,240,210,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(w * 0.42, h); ctx.lineTo(0, 0); ctx.lineTo(w, 0); ctx.lineTo(w * 0.58, h);
    ctx.fill();
    return finish(c, false);
  }),

  grill: () => memo('grill', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#0c0c0c';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 9; i++) {
      const y = 12 + i * 27;
      const g = ctx.createLinearGradient(0, y, 0, y + 14);
      g.addColorStop(0, '#f2f2f2');
      g.addColorStop(1, '#7a7a7a');
      ctx.fillStyle = g;
      ctx.fillRect(8, y, s - 16, 14);
    }
    return finish(c, false);
  }),

  blob: () => memo('blob', () => {
    const s = 128;
    const [c, ctx] = canvas(s, s);
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(0,0,0,0.65)');
    g.addColorStop(0.6, 'rgba(0,0,0,0.4)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    return finish(c, false);
  }),

  zone: () => memo('zone', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.clearRect(0, 0, s, s);
    ctx.strokeStyle = 'rgba(255,255,255,1)';
    ctx.lineWidth = 14;
    ctx.strokeRect(7, 7, s - 14, s - 14);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(14, 14, s - 28, s - 28);
    return finish(c, false);
  }),

  bark: () => memo('bark', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#6b4a2b';
    ctx.fillRect(0, 0, s, s);
    const r = rng(401);
    for (let i = 0; i < 120; i++) {
      ctx.strokeStyle = r() > 0.5 ? 'rgba(40,25,12,0.6)' : 'rgba(140,100,60,0.4)';
      ctx.lineWidth = 1 + r() * 3;
      const x = r() * s;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + (r() - 0.5) * 12, s); ctx.stroke();
    }
    return finish(c);
  }),

  foliage: () => memo('foliage', () => {
    const s = 256;
    const [c, ctx] = canvas(s, s);
    ctx.fillStyle = '#c8c8c8';
    ctx.fillRect(0, 0, s, s);
    speckle(ctx, s, s, 2600, ['#ffffff', '#8a8a8a', '#e6e6e6', '#6e6e6e'], 5, 411);
    return finish(c);
  }),
};
