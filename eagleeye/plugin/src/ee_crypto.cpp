#include "ee_crypto.h"
#include <cstring>
#include <ctime>

namespace ee {

// ----------------------------------------------------------------- XTEA
static void xtea_encipher(uint32_t v[2], const uint32_t key[4]) {
    uint32_t v0 = v[0], v1 = v[1], sum = 0;
    const uint32_t delta = 0x9E3779B9;
    for (int i = 0; i < 32; i++) {
        v0 += (((v1 << 4) ^ (v1 >> 5)) + v1) ^ (sum + key[sum & 3]);
        sum += delta;
        v1 += (((v0 << 4) ^ (v0 >> 5)) + v0) ^ (sum + key[(sum >> 11) & 3]);
    }
    v[0] = v0; v[1] = v1;
}

static void xtea_decipher(uint32_t v[2], const uint32_t key[4]) {
    uint32_t v0 = v[0], v1 = v[1];
    const uint32_t delta = 0x9E3779B9;
    uint32_t sum = delta * 32;
    for (int i = 0; i < 32; i++) {
        v1 -= (((v0 << 4) ^ (v0 >> 5)) + v0) ^ (sum + key[(sum >> 11) & 3]);
        sum -= delta;
        v0 -= (((v1 << 4) ^ (v1 >> 5)) + v1) ^ (sum + key[sum & 3]);
    }
    v[0] = v0; v[1] = v1;
}

// PRNG deterministico para o IV (xorshift semeado pelo relogio e endereco).
static uint32_t prng_state = 0;
static uint32_t prng() {
    if (prng_state == 0) {
        prng_state = (uint32_t)(uintptr_t)&prng_state ^ 0xA5A5A5A5u;
        prng_state ^= (uint32_t)time(nullptr);
    }
    prng_state ^= prng_state << 13;
    prng_state ^= prng_state >> 17;
    prng_state ^= prng_state << 5;
    return prng_state;
}

static uint32_t rd32(const uint8_t* p) {
    return (uint32_t)p[0] | ((uint32_t)p[1] << 8) | ((uint32_t)p[2] << 16) | ((uint32_t)p[3] << 24);
}
static void wr32(uint8_t* p, uint32_t v) {
    p[0] = v & 0xFF; p[1] = (v >> 8) & 0xFF; p[2] = (v >> 16) & 0xFF; p[3] = (v >> 24) & 0xFF;
}

std::vector<uint8_t> encrypt(const std::vector<uint8_t>& plain, const uint32_t key[4]) {
    // PKCS#7 ate multiplo de 8
    std::vector<uint8_t> buf = plain;
    uint8_t pad = (uint8_t)(8 - (buf.size() % 8));
    if (pad == 0) pad = 8;
    buf.insert(buf.end(), pad, pad);

    uint8_t iv[8];
    wr32(iv, prng());
    wr32(iv + 4, prng());

    std::vector<uint8_t> out(8 + buf.size());
    memcpy(out.data(), iv, 8);
    uint32_t prev[2] = { rd32(iv), rd32(iv + 4) };

    for (size_t i = 0; i < buf.size(); i += 8) {
        uint32_t blk[2] = { rd32(&buf[i]) ^ prev[0], rd32(&buf[i + 4]) ^ prev[1] };
        xtea_encipher(blk, key);
        wr32(&out[8 + i], blk[0]);
        wr32(&out[8 + i + 4], blk[1]);
        prev[0] = blk[0]; prev[1] = blk[1];
    }
    return out;
}

bool decrypt(const std::vector<uint8_t>& cipher, const uint32_t key[4], std::vector<uint8_t>& out) {
    if (cipher.size() < 16 || ((cipher.size() - 8) % 8) != 0) return false;
    uint32_t prev[2] = { rd32(&cipher[0]), rd32(&cipher[4]) };
    std::vector<uint8_t> buf(cipher.size() - 8);
    for (size_t i = 0; i < buf.size(); i += 8) {
        uint32_t c[2] = { rd32(&cipher[8 + i]), rd32(&cipher[8 + i + 4]) };
        uint32_t blk[2] = { c[0], c[1] };
        xtea_decipher(blk, key);
        wr32(&buf[i], blk[0] ^ prev[0]);
        wr32(&buf[i + 4], blk[1] ^ prev[1]);
        prev[0] = c[0]; prev[1] = c[1];
    }
    uint8_t pad = buf.back();
    if (pad < 1 || pad > 8 || pad > buf.size()) return false;
    for (size_t i = 0; i < pad; i++) if (buf[buf.size() - 1 - i] != pad) return false;
    out.assign(buf.begin(), buf.end() - pad);
    return true;
}

// ---------------------------------------------------------------- SHA-256
namespace {
struct Sha256 {
    uint32_t h[8];
    uint64_t len;
    uint8_t buf[64];
    size_t buflen;
    void init() {
        static const uint32_t iv[8] = {
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
            0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19 };
        memcpy(h, iv, sizeof iv); len = 0; buflen = 0;
    }
    static uint32_t ror(uint32_t x, int n) { return (x >> n) | (x << (32 - n)); }
    void block(const uint8_t* p) {
        static const uint32_t k[64] = {
            0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
            0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
            0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
            0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
            0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
            0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
            0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
            0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2 };
        uint32_t w[64];
        for (int i = 0; i < 16; i++)
            w[i] = (p[i*4] << 24) | (p[i*4+1] << 16) | (p[i*4+2] << 8) | p[i*4+3];
        for (int i = 16; i < 64; i++) {
            uint32_t s0 = ror(w[i-15],7) ^ ror(w[i-15],18) ^ (w[i-15] >> 3);
            uint32_t s1 = ror(w[i-2],17) ^ ror(w[i-2],19) ^ (w[i-2] >> 10);
            w[i] = w[i-16] + s0 + w[i-7] + s1;
        }
        uint32_t a=h[0],b=h[1],c=h[2],d=h[3],e=h[4],f=h[5],g=h[6],hh=h[7];
        for (int i = 0; i < 64; i++) {
            uint32_t S1 = ror(e,6) ^ ror(e,11) ^ ror(e,25);
            uint32_t ch = (e & f) ^ (~e & g);
            uint32_t t1 = hh + S1 + ch + k[i] + w[i];
            uint32_t S0 = ror(a,2) ^ ror(a,13) ^ ror(a,22);
            uint32_t maj = (a & b) ^ (a & c) ^ (b & c);
            uint32_t t2 = S0 + maj;
            hh=g; g=f; f=e; e=d+t1; d=c; c=b; b=a; a=t1+t2;
        }
        h[0]+=a;h[1]+=b;h[2]+=c;h[3]+=d;h[4]+=e;h[5]+=f;h[6]+=g;h[7]+=hh;
    }
    void update(const uint8_t* p, size_t n) {
        len += n;
        while (n) {
            size_t take = 64 - buflen; if (take > n) take = n;
            memcpy(buf + buflen, p, take);
            buflen += take; p += take; n -= take;
            if (buflen == 64) { block(buf); buflen = 0; }
        }
    }
    void finish(uint8_t out[32]) {
        uint64_t bits = len * 8;
        uint8_t one = 0x80; update(&one, 1);
        uint8_t zero = 0; while (buflen != 56) update(&zero, 1);
        uint8_t lb[8]; for (int i = 0; i < 8; i++) lb[i] = (uint8_t)(bits >> (56 - i*8));
        update(lb, 8);
        for (int i = 0; i < 8; i++) { out[i*4]=h[i]>>24; out[i*4+1]=h[i]>>16; out[i*4+2]=h[i]>>8; out[i*4+3]=h[i]; }
    }
};
std::string to_hex(const uint8_t* p, size_t n) {
    static const char* hx = "0123456789abcdef";
    std::string s; s.resize(n * 2);
    for (size_t i = 0; i < n; i++) { s[i*2] = hx[p[i] >> 4]; s[i*2+1] = hx[p[i] & 15]; }
    return s;
}
} // anon

std::string sha256_hex(const std::string& data) {
    Sha256 s; s.init();
    s.update((const uint8_t*)data.data(), data.size());
    uint8_t out[32]; s.finish(out);
    return to_hex(out, 32);
}

std::string hmac_hex(const std::string& data, const std::string& secret) {
    uint8_t key[64]; memset(key, 0, 64);
    if (secret.size() > 64) {
        Sha256 s; s.init(); s.update((const uint8_t*)secret.data(), secret.size()); s.finish(key);
    } else memcpy(key, secret.data(), secret.size());
    uint8_t ipad[64], opad[64];
    for (int i = 0; i < 64; i++) { ipad[i] = key[i] ^ 0x36; opad[i] = key[i] ^ 0x5c; }
    uint8_t inner[32];
    { Sha256 s; s.init(); s.update(ipad, 64); s.update((const uint8_t*)data.data(), data.size()); s.finish(inner); }
    uint8_t outer[32];
    { Sha256 s; s.init(); s.update(opad, 64); s.update(inner, 32); s.finish(outer); }
    return to_hex(outer, 32);
}

std::string deobf(const uint8_t* data, size_t len, uint8_t seed) {
    std::string s; s.resize(len);
    uint8_t k = seed;
    for (size_t i = 0; i < len; i++) {
        s[i] = (char)(data[i] ^ k);
        k = (uint8_t)(k * 31 + 7);
    }
    return s;
}

} // namespace ee
