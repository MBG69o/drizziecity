# Compilar o plugin EagleEYE

Plugins SA-MP/open.mp são **32 bits**. Compile num ambiente 32 bits (ou com toolchain cruzada) e nunca distribua o `ee_secrets.h` nem o `secrets.json`.

## 1. Dependências (você baixa uma vez)

- **SDK de plugin do SA-MP** (headers `amx/` e `plugincommon.h`): https://github.com/Zeex/samp-plugin-sdk → copie para `plugin/sdk/`.
- **sampgdk** (amalgamation `sampgdk.h` + `sampgdk.c`): https://github.com/Zeex/sampgdk/releases → copie para `plugin/sampgdk/`.

## 2. Segredos

Crie `secrets.json` (fora do git) com os mesmos valores do `.env` do bot:

```json
{
  "api_host": "eagleeye.discloud.dev",
  "license_pepper": "<igual ao AC_LICENSE_PEPPER do bot>",
  "license_sign": "<igual ao AC_LICENSE_SIGN do bot>",
  "store_phrase": "<frase só do plugin>",
  "store_hmac": "<segredo só do plugin>"
}
```

Gere o header ofuscado:

```bash
python3 tools/obfuscate.py secrets.json > src/ee_secrets.h
```

## 3. Linux (.so, 32 bits)

```bash
sudo apt-get install -y gcc-multilib g++-multilib cmake
cmake -S . -B build -DEE_HAVE_SDK=ON
cmake --build build
# saída: build/eagleeye.so
```

Ou direto:

```bash
g++ -m32 -std=c++14 -O2 -shared -fPIC -DEE_HAVE_SDK \
  -Isdk -Isampgdk \
  src/*.cpp sampgdk/sampgdk.c -lpthread -o eagleeye.so
```

## 4. Windows (.dll, 32 bits)

Com o Visual Studio (x86) ou MinGW 32 bits:

```bat
cmake -S . -B build -A Win32 -DEE_HAVE_SDK=ON
cmake --build build --config Release
```

A DLL linka com `ws2_32`.

## 5. Conferir

- `strings eagleeye.so | grep discloud` não deve achar nada (segredos ofuscados).
- No servidor de teste, o console deve mostrar `[EagleEYE] Plugin v2.2.0 carregado.`

## Build automático (CI)

Um GitHub Actions com `ubuntu-latest` + multilib (Linux) e `windows-latest` (DLL) gera os dois binários a cada tag, sem expor os segredos (eles entram como secrets do CI). Posso montar o workflow quando quiser.
