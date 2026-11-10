// EagleEYE plugin - cifragem e integridade (sem dependencias externas)
#ifndef EE_CRYPTO_H
#define EE_CRYPTO_H

#include <cstdint>
#include <string>
#include <vector>

namespace ee {

// Cifra/decifra um buffer com XTEA em modo CBC. A chave sao 16 bytes (4x uint32).
// O IV (8 bytes) e gerado e guardado no inicio do ciphertext.
std::vector<uint8_t> encrypt(const std::vector<uint8_t>& plain, const uint32_t key[4]);
bool decrypt(const std::vector<uint8_t>& cipher, const uint32_t key[4], std::vector<uint8_t>& out);

// Tag de integridade de 32 bytes (SHA-256 proprio, autossuficiente) com chave.
std::string hmac_hex(const std::string& data, const std::string& secret);
std::string sha256_hex(const std::string& data);

// Desofusca uma string embutida no binario (XOR rolante) - para a string
// nao aparecer em texto puro quando o cliente abre o .dll/.so num editor.
std::string deobf(const uint8_t* data, size_t len, uint8_t seed);

} // namespace ee

// Macro para embutir uma string ofuscada no binario em tempo de compilacao.
// Uso: EE_OBF(host, 0x5A, "api.exemplo.com") -> std::string host;
// (gerado por tools/obfuscate.py)

#endif // EE_CRYPTO_H
