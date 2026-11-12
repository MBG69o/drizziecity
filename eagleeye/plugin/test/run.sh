#!/usr/bin/env bash
# Testa o nucleo de seguranca e as deteccoes portadas (64-bit, sem o SDK).
set -e
cd "$(dirname "$0")/.."
CXX="${CXX:-g++} -std=c++14 -O2 -Wall -Isrc"
$CXX test/test_crypto.cpp src/ee_crypto.cpp -o /tmp/ee_t1 && /tmp/ee_t1
$CXX test/test_core.cpp src/ee_store.cpp src/ee_license.cpp src/ee_crypto.cpp -o /tmp/ee_t2 && /tmp/ee_t2
$CXX test/test_detect.cpp src/ee_detect.cpp -o /tmp/ee_t3 && /tmp/ee_t3
$CXX test/test_player.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t4 && /tmp/ee_t4
$CXX test/test_weapons.cpp src/ee_cat_weapons.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t5 && /tmp/ee_t5
$CXX test/test_movement.cpp src/ee_cat_movement.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t6 && /tmp/ee_t6
$CXX test/test_vehicles.cpp src/ee_cat_vehicles.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t7 && /tmp/ee_t7
$CXX test/test_network.cpp src/ee_cat_network.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t8 && /tmp/ee_t8
$CXX test/test_extra.cpp src/ee_cat_extra.cpp src/ee_cat_player.cpp src/ee_detect.cpp -o /tmp/ee_t9 && /tmp/ee_t9
echo "plugin: TODOS OS TESTES OK"
