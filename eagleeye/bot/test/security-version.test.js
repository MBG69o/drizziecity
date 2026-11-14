'use strict';

const { test } = require('node:test');
const assert = require('node:assert');
const { isOutdated, compareVersions, LATEST_INCLUDE } = require('../src/security');

test('a versão mais recente do include não é desatualizada', () => {
  assert.strictEqual(isOutdated(LATEST_INCLUDE), false);
});

test('o plugin atual (com prefixo plugin-) NÃO é marcado como desatualizado', () => {
  // o bug: "plugin-2.11.0" era lido como [0,11,0] e caía como desatualizado
  assert.strictEqual(isOutdated(`plugin-${LATEST_INCLUDE}`), false);
  assert.strictEqual(isOutdated(`plugin-win-${LATEST_INCLUDE}`), false);
});

test('uma versão antiga real é marcada como desatualizada (com ou sem prefixo)', () => {
  assert.strictEqual(isOutdated('2.5.0'), true);
  assert.strictEqual(isOutdated('plugin-2.5.0'), true);
});

test('versão sem número não vira "desatualizado" (evita falso alarme)', () => {
  assert.strictEqual(isOutdated('plugin'), false);
  assert.strictEqual(isOutdated(''), false);
  assert.strictEqual(isOutdated(undefined), false);
});

test('compareVersions ignora prefixos não numéricos', () => {
  assert.strictEqual(compareVersions('plugin-2.11.0', '2.11.0'), 0);
  assert.ok(compareVersions('2.11.0', '2.5.0') > 0);
  assert.ok(compareVersions('plugin-2.5.0', '2.11.0') < 0);
});
