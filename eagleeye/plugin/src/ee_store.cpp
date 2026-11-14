#include "ee_store.h"
#include "ee_crypto.h"
#include <cstdint>
#include <cstdio>
#include <cstring>
#include <vector>

namespace ee {

static const char MAGIC[4] = { 'E', 'E', 'A', 'C' };
static const uint8_t FORMAT_VERSION = 1;

Store::Store(const uint32_t key[4], const std::string& hmacSecret) : hmac_(hmacSecret) {
    memcpy(key_, key, sizeof key_);
}

static std::vector<uint8_t> readFile(const std::string& path) {
    std::vector<uint8_t> v;
    FILE* f = fopen(path.c_str(), "rb");
    if (!f) return v;
    fseek(f, 0, SEEK_END); long n = ftell(f); fseek(f, 0, SEEK_SET);
    if (n > 0 && n < 65536) { v.resize((size_t)n); if (fread(v.data(), 1, v.size(), f) != v.size()) v.clear(); }
    fclose(f);
    return v;
}

Identity Store::load(const std::string& path) const {
    Identity id;
    std::vector<uint8_t> raw = readFile(path);
    // layout: MAGIC(4) VERSION(1) CIPHERLEN(4) CIPHER(n) TAG_HEX(64)
    if (raw.size() < 4 + 1 + 4 + 16 + 64) return id;
    if (memcmp(raw.data(), MAGIC, 4) != 0) return id;
    if (raw[4] != FORMAT_VERSION) return id;
    uint32_t clen = raw[5] | (raw[6] << 8) | (raw[7] << 16) | (raw[8] << 24);
    if (raw.size() != 9 + clen + 64) return id;

    std::vector<uint8_t> cipher(raw.begin() + 9, raw.begin() + 9 + clen);
    std::string tag((const char*)raw.data() + 9 + clen, 64);

    // integridade: a tag cobre o ciphertext. Byte trocado -> tag nao bate.
    std::string calc = hmac_hex(std::string((const char*)cipher.data(), cipher.size()), hmac_);
    if (calc != tag) return id;

    std::vector<uint8_t> plain;
    if (!decrypt(cipher, key_, plain)) return id;

    std::string text((const char*)plain.data(), plain.size());
    size_t p = text.find("id=");
    size_t q = text.find("\ntoken=");
    if (p == std::string::npos || q == std::string::npos) return id;
    id.serverId = text.substr(p + 3, q - (p + 3));
    size_t nl = text.find('\n', q + 7);
    id.token = text.substr(q + 7, nl == std::string::npos ? std::string::npos : nl - (q + 7));
    id.valid = !id.serverId.empty() && !id.token.empty();
    return id;
}

bool Store::save(const std::string& path, const Identity& id) const {
    std::string text = "id=" + id.serverId + "\ntoken=" + id.token + "\n";
    std::vector<uint8_t> plain(text.begin(), text.end());
    std::vector<uint8_t> cipher = encrypt(plain, key_);
    std::string tag = hmac_hex(std::string((const char*)cipher.data(), cipher.size()), hmac_);

    std::vector<uint8_t> out;
    out.insert(out.end(), MAGIC, MAGIC + 4);
    out.push_back(FORMAT_VERSION);
    uint32_t clen = (uint32_t)cipher.size();
    out.push_back(clen & 0xFF); out.push_back((clen >> 8) & 0xFF);
    out.push_back((clen >> 16) & 0xFF); out.push_back((clen >> 24) & 0xFF);
    out.insert(out.end(), cipher.begin(), cipher.end());
    out.insert(out.end(), tag.begin(), tag.end());

    FILE* f = fopen(path.c_str(), "wb");
    if (!f) return false;
    bool ok = fwrite(out.data(), 1, out.size(), f) == out.size();
    fclose(f);
    return ok;
}

} // namespace ee
