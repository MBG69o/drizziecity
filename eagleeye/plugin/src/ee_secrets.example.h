// EXEMPLO. Gere o ee_secrets.h real com:
//   python3 tools/obfuscate.py secrets.json > src/ee_secrets.h
// Nunca versione o ee_secrets.h nem o secrets.json com os valores reais.
#ifndef EE_SECRETS_H
#define EE_SECRETS_H
#include "ee_crypto.h"
#include <string>
namespace ee { namespace secrets {
inline std::string apiHost()     { return "127.0.0.1:8090"; }
inline std::string pepper()      { return "troque-pepper"; }
inline std::string signSecret()  { return "troque-sign"; }
inline std::string storePhrase() { return "troque-frase"; }
inline std::string storeHmac()   { return "troque-hmac"; }
inline void storeKey(uint32_t out[4]) {
    std::string h = sha256_hex(storePhrase());
    for (int i = 0; i < 4; i++) { out[i] = 0;
        for (int j = 0; j < 8; j++) { char c = h[i*8+j]; int v = c<='9'?c-'0':c-'a'+10; out[i]=(out[i]<<4)|(unsigned)v; } }
}
}}
#endif
