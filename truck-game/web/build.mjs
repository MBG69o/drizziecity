// Empacota o jogo (Three.js + código) em um único script para o APK Android.
import { build } from 'esbuild';
import { mkdirSync, copyFileSync, readdirSync } from 'node:fs';

const out = process.argv[2] || '../android/app/src/main/assets/game';
mkdirSync(out, { recursive: true });
await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: ['es2017', 'chrome58'],
  outfile: `${out}/game.js`,
  legalComments: 'none',
  logLevel: 'info',
});
copyFileSync('index.html', `${out}/index.html`);
copyFileSync('style.css', `${out}/style.css`);
mkdirSync(`${out}/models`, { recursive: true });
for (const f of readdirSync('models')) copyFileSync(`models/${f}`, `${out}/models/${f}`);
