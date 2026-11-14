'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { Licenses, checkDigits } = require('../src/licenses');

const mk = () => new Licenses(fs.mkdtempSync(path.join(os.tmpdir(), 'lic-')), { pepper: 'p1', signSecret: 's1' }).load();

test('emite licença com formato válido e dígito verificador', () => {
  const L = mk();
  const { key } = L.create({ client: 'Cliente X' });
  assert.match(key, /^EE-LIC-[0-9A-Z]{5}-[0-9A-Z]{5}-[0-9A-Z]{7}$/);
  assert.ok(L.formatOk(key));
  assert.ok(!L.formatOk('EE-LIC-11111-22222-33333AA'));
  assert.ok(!L.formatOk('lixo'));
  // pepper diferente reprova
  const L2 = new Licenses(L.file.replace('licenses.json', ''), { pepper: 'outro', signSecret: 's1' });
  assert.ok(!L2.formatOk(key));
});

test('só guarda o hash, nunca a chave em texto', () => {
  const L = mk();
  const { key } = L.create();
  const raw = fs.readFileSync(L.file, 'utf8');
  assert.ok(!raw.includes(key));
  assert.ok(raw.includes(crypto.createHash('sha256').update(key.replace(/-/g, '')).digest('hex')));
});

test('resposta assinada: ativa, revogada e expirada', () => {
  const L = mk();
  const { key } = L.create();
  const sid = 'EE-7K2QMX';
  const a = L.sign(key, sid, 'n1', '1.1.1.1');
  assert.strictEqual(a.state, 'active');
  assert.match(a.body, /^LIC active 0 n1 [0-9a-f]{64}\n$/);
  L.revoke(key);
  assert.strictEqual(L.sign(key, sid, 'n1', '1.1.1.1').state, 'revoked');
  L.reactivate(key);
  // expira
  const exp = L.create({ expiresAt: Date.now() - 1000 });
  assert.strictEqual(L.sign(exp.key, sid, 'n', '1.1.1.1').state, 'expired');
  // chave inexistente/invalida -> unknown, mas ainda assinada
  const u = L.sign('EE-LIC-00000-00000-00000ZZ', sid, 'n', '1.1.1.1');
  assert.strictEqual(u.state, 'unknown');
});

test('licença vincula ao primeiro servidor e recusa em outro', () => {
  const L = mk();
  const { key } = L.create();
  assert.strictEqual(L.sign(key, 'EE-AAAAAA', 'n', '1.1.1.1').state, 'active');
  assert.strictEqual(L.get(key).boundServerId, 'EE-AAAAAA');
  // outro servidor com a mesma chave -> revoked (uso indevido)
  assert.strictEqual(L.sign(key, 'EE-BBBBBB', 'n', '2.2.2.2').state, 'revoked');
  assert.ok(L.activeForServer('EE-AAAAAA'));
  assert.ok(!L.activeForServer('EE-BBBBBB'));
});

test('assinatura muda com nonce e serverId (anti-replay)', () => {
  const L = mk();
  const { key } = L.create();
  const t1 = L.sign(key, 'EE-AAAAAA', 'n1', '1.1.1.1').body;
  const t2 = L.sign(key, 'EE-AAAAAA', 'n2', '1.1.1.1').body;
  assert.notStrictEqual(t1, t2);
});

test('dígitos verificadores batem com o plugin C++ (vetor fixo)', () => {
  assert.strictEqual(checkDigits('ABCDEFGHJKMNPQR', 'pepper-compartilhado'), 'H2');
});
