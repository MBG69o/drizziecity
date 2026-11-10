#!/usr/bin/env bash
# Testa o núcleo de segurança do plugin (64-bit, sem o SDK).
set -e
cd "$(dirname "$0")/.."
CXX="${CXX:-g++} -std=c++14 -O2 -Isrc"
$CXX test/test_crypto.cpp src/ee_crypto.cpp -o /tmp/ee_t_crypto && /tmp/ee_t_crypto
$CXX test/test_core.cpp src/ee_store.cpp src/ee_license.cpp src/ee_crypto.cpp -o /tmp/ee_t_core && /tmp/ee_t_core
echo "núcleo do plugin: OK"
