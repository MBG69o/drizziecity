// EagleEYE plugin - armazenamento seguro da identidade do servidor.
// O token fica num arquivo cifrado com tag de integridade: o cliente nao
// consegue ler o token nem edita-lo sem o plugin detectar a adulteracao.
#ifndef EE_STORE_H
#define EE_STORE_H

#include <string>
#include <cstdint>

namespace ee {

struct Identity {
    std::string serverId;   // EE-XXXXXX
    std::string token;      // token de acesso completo
    bool valid = false;
};

// A chave mestra (16 bytes) e o segredo do HMAC ficam embutidos e ofuscados
// no binario; sao passados aqui ja desofuscados.
class Store {
public:
    Store(const uint32_t key[4], const std::string& hmacSecret);

    // Le o arquivo cifrado. Retorna Identity.valid=false se nao existe,
    // foi adulterado ou nao decifra.
    Identity load(const std::string& path) const;

    // Grava a identidade cifrada. Retorna false se nao conseguiu escrever.
    bool save(const std::string& path, const Identity& id) const;

private:
    uint32_t key_[4];
    std::string hmac_;
};

} // namespace ee

#endif // EE_STORE_H
