#!/usr/bin/env bash
# Compila o plugin EagleEYE (32 bits) para SA-MP / open.mp:
#   - eagleeye.dll  (Windows, via mingw-w64)
#   - eagleeye.so   (Linux, via g++ -m32)
#
# Versão COMPLETA: o plugin é o cérebro (guarda a API e o token ocultos, faz a
# rede com o bot, valida a licença) e EXPÕE NATIVES para a include ler a config,
# reportar detecções e executar comandos. Usa o SDK do SA-MP (sdk/) — não precisa
# da sampgdk, porque quem fala com o jogo é a própria include.
#
# Pré-requisitos (Debian/Ubuntu):
#   sudo apt-get install -y g++-mingw-w64-i686   # para a .dll
#   sudo apt-get install -y g++-multilib          # para a .so (-m32)
# E o segredo gerado (nunca versionado):
#   python3 tools/obfuscate.py secrets.json > src/ee_secrets.h
#   (para apenas testar o build: cp src/ee_secrets.example.h src/ee_secrets.h)
set -e
cd "$(dirname "$0")"

SDK=sdk
SRC="src/ee_bridge.cpp src/ee_crypto.cpp src/ee_store.cpp src/ee_license.cpp src/ee_http.cpp src/ee_detect.cpp $SDK/amxplugin.cpp"
INC="-Isrc -I$SDK -I$SDK/amx"
CXXFLAGS="-std=c++14 -O2 -DNDEBUG"
# silencia só os avisos benignos do SDK (packed/compiler message); erros aparecem.
QUIET='grep -vE "pragma message|Warning: Not using|packed.*attribute ignored|note:|In file included|^[[:space:]]*\^|^[[:space:]]*\|" || true'

if [ ! -f src/ee_secrets.h ]; then
  echo "src/ee_secrets.h nao existe. Gere com obfuscate.py (ou copie o exemplo para testar)." >&2
  exit 1
fi

built=""

# ---- Windows (.dll) ----
# -posix: std::thread; -Wl,--kill-at: exporta Supports/Load/Unload/AmxLoad sem @N.
WINCXX="$(command -v i686-w64-mingw32-g++-posix || command -v i686-w64-mingw32-g++ || true)"
if [ -n "$WINCXX" ]; then
  "$WINCXX" $CXXFLAGS -DHAVE_STDINT_H $INC $SRC \
    -shared -static -static-libgcc -static-libstdc++ -Wl,--kill-at \
    -o eagleeye.dll -lws2_32 2>&1 | eval $QUIET
  [ -f eagleeye.dll ] && echo "Gerado: eagleeye.dll" && built="$built eagleeye.dll"
else
  echo "(pulei a .dll: instale g++-mingw-w64-i686)"
fi

# ---- Linux (.so) ----
if g++ -m32 -E -x c++ /dev/null >/dev/null 2>&1; then
  g++ -m32 $CXXFLAGS -DLINUX -fPIC $INC $SRC \
    -shared -static-libstdc++ -static-libgcc \
    -o eagleeye.so -lpthread 2>&1 | eval $QUIET
  [ -f eagleeye.so ] && echo "Gerado: eagleeye.so" && built="$built eagleeye.so"
else
  echo "(pulei a .so: instale g++-multilib)"
fi

echo "Pronto:$built"
