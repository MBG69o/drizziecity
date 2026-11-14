#!/usr/bin/env python3
"""Gera src/ee_secrets.h com os segredos ofuscados (XOR rolante, igual ao ee::deobf).

Uso:
    python3 tools/obfuscate.py secrets.json > src/ee_secrets.h

secrets.json (NAO versione este arquivo):
{
  "api_host":     "eagleeye.discloud.dev",
  "api_path":     "/x7f3k9q2",  # opcional: = AC_PATH_SECRET do bot (caminho secreto)
  "api_key":      "...",        # opcional: = AC_APP_KEY do bot (param &k=)
  "license_pepper": "...",   # = AC_LICENSE_PEPPER do bot
  "license_sign":   "...",   # = AC_LICENSE_SIGN do bot
  "store_phrase":   "...",   # frase que deriva a chave do arquivo local (so no plugin)
  "store_hmac":     "..."    # segredo de integridade do arquivo local (so no plugin)
}
"""
import json
import sys
import random


def obf(text, seed):
    out = []
    k = seed
    for ch in text.encode("utf-8"):
        out.append(ch ^ k)
        k = (k * 31 + 7) & 0xFF
    return out


def emit(name, text):
    seed = random.randint(1, 255)
    data = obf(text, seed)
    arr = ", ".join("0x%02x" % b for b in data)
    return (
        "static const unsigned char {n}_d[] = {{ {a} }};\n"
        "inline std::string {n}() {{ return ee::deobf({n}_d, sizeof {n}_d, 0x{s:02x}); }}\n"
    ).format(n=name, a=arr, s=seed)


def main():
    if len(sys.argv) != 2:
        sys.stderr.write(__doc__)
        sys.exit(1)
    with open(sys.argv[1], encoding="utf-8") as f:
        cfg = json.load(f)
    fields = ["api_host", "license_pepper", "license_sign", "store_phrase", "store_hmac"]
    for k in fields:
        if not cfg.get(k):
            sys.stderr.write("faltando campo: %s\n" % k)
            sys.exit(2)
    print("// GERADO por tools/obfuscate.py - NAO edite a mao, NAO versione segredos.")
    print("#ifndef EE_SECRETS_H")
    print("#define EE_SECRETS_H")
    print('#include "ee_crypto.h"')
    print("#include <string>")
    print("namespace ee { namespace secrets {")
    print(emit("apiHost", cfg["api_host"]), end="")
    print(emit("apiPath", cfg.get("api_path", "")), end="")
    print(emit("apiKey", cfg.get("api_key", "")), end="")
    print(emit("pepper", cfg["license_pepper"]), end="")
    print(emit("signSecret", cfg["license_sign"]), end="")
    print(emit("storePhrase", cfg["store_phrase"]), end="")
    print(emit("storeHmac", cfg["store_hmac"]), end="")
    print("""
// deriva a chave de 16 bytes do arquivo local a partir da frase
inline void storeKey(uint32_t out[4]) {
    std::string h = sha256_hex(storePhrase());
    for (int i = 0; i < 4; i++) {
        out[i] = 0;
        for (int j = 0; j < 8; j++) {
            char c = h[i * 8 + j];
            int v = c <= '9' ? c - '0' : c - 'a' + 10;
            out[i] = (out[i] << 4) | (unsigned)v;
        }
    }
}
}} // namespace
#endif""")


if __name__ == "__main__":
    main()
