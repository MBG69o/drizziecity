#!/usr/bin/env bash
# Compila o NUCLEO do EagleEYE como plugin de 32 bits para SA-MP / open.mp:
#   - eagleeye.dll  (Windows, via mingw-w64)
#   - eagleeye.so   (Linux, via g++ -m32)
#
# Este alvo gera um plugin que CARREGA no servidor, gera/le o token cifrado e
# roda o loop de licenca/config com o bot. O enganchamento das deteccoes
# (natives/callbacks) usa a sampgdk + ee_detections.cpp (veja BUILD.md).
#
# Pre-requisitos (Debian/Ubuntu):
#   sudo apt-get install -y g++-mingw-w64-i686   # para a .dll
#   sudo apt-get install -y g++-multilib          # para a .so (-m32)
# E o segredo gerado (nunca versionado):
#   python3 tools/obfuscate.py secrets.json > src/ee_secrets.h
#   (para apenas testar o build: cp src/ee_secrets.example.h src/ee_secrets.h)
set -e
cd "$(dirname "$0")"

SRC="src/ee_win_plugin.cpp src/ee_crypto.cpp src/ee_store.cpp src/ee_license.cpp src/ee_http.cpp"
CXXFLAGS="-std=c++14 -O2 -DNDEBUG -Isrc"

if [ ! -f src/ee_secrets.h ]; then
  echo "src/ee_secrets.h nao existe. Gere com obfuscate.py (ou copie o exemplo para testar)." >&2
  exit 1
fi

built=""

# ---- Windows (.dll) ----
# -posix: necessario para std::thread; -Wl,--kill-at: exporta Supports/Load/Unload
# sem a decoracao @N do __stdcall; -static*: embute libgcc/libstdc++/winpthread.
WINCXX="$(command -v i686-w64-mingw32-g++-posix || command -v i686-w64-mingw32-g++ || true)"
if [ -n "$WINCXX" ]; then
  "$WINCXX" $CXXFLAGS $SRC -shared -static -static-libgcc -static-libstdc++ \
    -Wl,--kill-at -o eagleeye.dll -lws2_32
  echo "Gerado: eagleeye.dll"
  built="$built eagleeye.dll"
else
  echo "(pulei a .dll: instale g++-mingw-w64-i686)"
fi

# ---- Linux (.so) ----
if g++ -m32 -E -x c++ /dev/null >/dev/null 2>&1; then
  g++ -m32 $CXXFLAGS -fPIC $SRC -shared -static-libstdc++ -static-libgcc \
    -o eagleeye.so -lpthread
  echo "Gerado: eagleeye.so"
  built="$built eagleeye.so"
else
  echo "(pulei a .so: instale g++-multilib)"
fi

echo "Pronto:$built"
