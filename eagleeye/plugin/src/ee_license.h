// EagleEYE plugin - licenciamento.
// A licenca e emitida por voce (dono do projeto) e entregue ao cliente.
// Offline: valida o formato e o digito verificador (rejeita chave inventada).
// Online: o bot confirma se a licenca esta ativa, revogada ou desconhecida,
// e a resposta e assinada para o cliente nao conseguir forjar um "ativa".
#ifndef EE_LICENSE_H
#define EE_LICENSE_H

#include <string>
#include <cstdint>

namespace ee {

enum class LicenseState { Unknown, Active, Revoked, Expired, Invalid };

struct Grant {
    LicenseState state = LicenseState::Unknown;
    int64_t checkedAt = 0;   // epoch (s) da ultima confirmacao online
    int64_t expiresAt = 0;   // 0 = sem validade
    int graceHours = 72;     // quanto tempo vale sem falar com o bot
};

// Formato: EE-LIC-XXXXX-XXXXX-XXXXX (Crockford base32) + 2 digitos verificadores.
// pepper = segredo compartilhado com o bot (embutido ofuscado no binario).
bool licenseFormatOk(const std::string& key, const std::string& pepper);

// Confere a resposta assinada do bot. A string e no formato:
//   LIC <estado> <expiresAt> <nonce> <tag>
// tag = hmac_hex(estado|expiresAt|nonce|serverId|key, signSecret)
Grant verifyBotResponse(const std::string& body, const std::string& key,
                        const std::string& serverId, const std::string& signSecret,
                        const std::string& expectNonce);

// O plugin deve agir? (licenca ativa, dentro da validade e da janela de graca)
bool grantAllows(const Grant& g, int64_t now);

} // namespace ee

#endif // EE_LICENSE_H
