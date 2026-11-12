'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { Blacklist } = require('../src/blacklist');

const mk = () => new Blacklist(fs.mkdtempSync(path.join(os.tmpdir(), 'bl-')));

test('adiciona por IP e por nome, e detecta na conexão', () => {
  const B = mk();
  B.add('dono1', { kind: 'ip', value: '1.2.3.4', name: 'Hacker', reason: 'aimbot', by: 'adm' });
  B.add('dono1', { kind: 'nome', value: 'TrapaceiroX', reason: 'money' });

  assert.ok(B.matches('dono1', { ip: '1.2.3.4' }));
  assert.ok(B.matches('dono1', { name: 'trapaceirox' }));   // case-insensitive
  assert.strictEqual(B.matches('dono1', { ip: '9.9.9.9', name: 'Legit' }), null);
});

test('a lista é por dono (não vaza entre clientes)', () => {
  const B = mk();
  B.add('dono1', { kind: 'ip', value: '1.2.3.4' });
  assert.ok(B.matches('dono1', { ip: '1.2.3.4' }));
  assert.strictEqual(B.matches('dono2', { ip: '1.2.3.4' }), null);
});

test('dedupe: adicionar o mesmo IP atualiza em vez de duplicar', () => {
  const B = mk();
  B.add('dono1', { kind: 'ip', value: '1.2.3.4', reason: 'a' });
  B.add('dono1', { kind: 'ip', value: '1.2.3.4', reason: 'b' });
  assert.strictEqual(B.listFor('dono1').length, 1);
  assert.strictEqual(B.listFor('dono1')[0].reason, 'b');
});

test('remover tira da lista', () => {
  const B = mk();
  B.add('dono1', { kind: 'ip', value: '1.2.3.4' });
  assert.ok(B.remove('dono1', 'ip', '1.2.3.4'));
  assert.strictEqual(B.matches('dono1', { ip: '1.2.3.4' }), null);
  assert.ok(!B.remove('dono1', 'ip', '1.2.3.4'));   // já não existe
});

test('persiste em disco e recarrega', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bl-'));
  const B1 = new Blacklist(dir);
  B1.add('dono1', { kind: 'nome', value: 'Fulano' });
  const B2 = new Blacklist(dir);
  assert.ok(B2.matches('dono1', { name: 'fulano' }));
});

test('entrada inválida é rejeitada', () => {
  const B = mk();
  assert.strictEqual(B.add('dono1', { kind: 'serial', value: 'x' }), null);
  assert.strictEqual(B.add('dono1', { kind: 'ip', value: '  ' }), null);
});
