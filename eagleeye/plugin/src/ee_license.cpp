#include "ee_license.h"
#include "ee_crypto.h"
#include <cctype>
#include <cstdlib>
#include <vector>

namespace ee {

// Crockford base32 sem I L O U (evita confusao na digitacao).
static const char* B32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

static int b32val(char c) {
    c = (char)toupper((unsigned char)c);
    for (int i = 0; i < 32; i++) if (B32[i] == c) return i;
    return -1;
}

// corpo = os 15 caracteres (sem tracos), digitos = 2 chars derivados do pepper
static bool splitKey(const std::string& key, std::string& body, std::string& check) {
    // EE-LIC-XXXXX-XXXXX-XXXXX NN
    std::string k;
    for (char c : key) if (c != '-' && c != ' ') k += (char)toupper((unsigned char)c);
    // espera "EELIC" + 15 corpo + 2 check = 22
    if (k.size() != 22) return false;
    if (k.compare(0, 5, "EELIC") != 0) return false;
    body = k.substr(5, 15);
    check = k.substr(20, 2);
    for (char c : body) if (b32val(c) < 0) return false;
    for (char c : check) if (b32val(c) < 0) return false;
    return true;
}

static std::string checkDigits(const std::string& body, const std::string& pepper) {
    std::string h = hmac_hex(body, pepper);
    // pega 10 bits do hash -> 2 caracteres base32
    unsigned v0 = 0, v1 = 0;
    auto hx = [](char c) { return c <= '9' ? c - '0' : (c - 'a' + 10); };
    v0 = (hx(h[0]) << 1) | (hx(h[1]) >> 3);
    v1 = ((hx(h[1]) & 7) << 2) | (hx(h[2]) >> 2);
    std::string s; s += B32[v0 & 31]; s += B32[v1 & 31];
    return s;
}

bool licenseFormatOk(const std::string& key, const std::string& pepper) {
    std::string body, check;
    if (!splitKey(key, body, check)) return false;
    return checkDigits(body, pepper) == check;
}

static std::string nextTok(const std::string& s, size_t& i) {
    while (i < s.size() && (s[i] == ' ' || s[i] == '\n' || s[i] == '\r')) i++;
    size_t st = i;
    while (i < s.size() && s[i] != ' ' && s[i] != '\n' && s[i] != '\r') i++;
    return s.substr(st, i - st);
}

Grant verifyBotResponse(const std::string& body, const std::string& key,
                        const std::string& serverId, const std::string& signSecret,
                        const std::string& expectNonce) {
    Grant g;
    size_t i = 0;
    if (nextTok(body, i) != "LIC") return g;
    std::string state = nextTok(body, i);
    std::string expStr = nextTok(body, i);
    std::string nonce = nextTok(body, i);
    std::string tag = nextTok(body, i);
    if (state.empty() || tag.empty()) return g;

    // nonce precisa casar com o que o plugin enviou (anti-replay)
    if (!expectNonce.empty() && nonce != expectNonce) return g;

    std::string msg = state + "|" + expStr + "|" + nonce + "|" + serverId + "|" + key;
    if (hmac_hex(msg, signSecret) != tag) return g;  // assinatura invalida

    g.expiresAt = (int64_t)strtoll(expStr.c_str(), nullptr, 10);
    if (state == "active") g.state = LicenseState::Active;
    else if (state == "revoked") g.state = LicenseState::Revoked;
    else if (state == "expired") g.state = LicenseState::Expired;
    else g.state = LicenseState::Unknown;
    return g;
}

bool grantAllows(const Grant& g, int64_t now) {
    if (g.state == LicenseState::Revoked || g.state == LicenseState::Invalid
        || g.state == LicenseState::Expired) return false;
    if (g.state != LicenseState::Active) return false;
    if (g.expiresAt > 0 && now > g.expiresAt) return false;
    // sem contato com o bot por mais que a janela de graca -> bloqueia
    if (g.checkedAt > 0 && now - g.checkedAt > (int64_t)g.graceHours * 3600) return false;
    return true;
}

} // namespace ee
