#include "ee_crypto.h"
#include <cstdio>
#include <cassert>
#include <ctime>
int main(){
    using namespace ee;
    // SHA-256 vetor conhecido: "abc"
    auto h = sha256_hex("abc");
    printf("sha256(abc)=%s\n", h.c_str());
    assert(h == "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
    // vazio
    assert(sha256_hex("") == "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855");
    // HMAC determinístico
    assert(hmac_hex("dados","segredo") == hmac_hex("dados","segredo"));
    assert(hmac_hex("dados","segredo") != hmac_hex("dados","outro"));
    // round-trip XTEA-CBC com vários tamanhos
    uint32_t key[4]={0x11223344,0x55667788,0x99aabbcc,0xddeeff00};
    for (int n=0;n<40;n++){
        std::vector<uint8_t> p; for(int i=0;i<n;i++) p.push_back((uint8_t)(i*7+1));
        auto c = encrypt(p,key);
        std::vector<uint8_t> d;
        assert(decrypt(c,key,d));
        assert(d==p);
        // chave errada ou byte trocado -> falha ou dados diferentes
        if(!c.empty()){ auto c2=c; c2[c2.size()-1]^=1; std::vector<uint8_t> d2; bool ok=decrypt(c2,key,d2); assert(!ok || d2!=p); }
    }
    // desofuscação (inverso de uma ofuscação feita com a mesma regra)
    uint8_t seed=0x5A, k=seed; const char* txt="api.eagleeye.dev";
    std::vector<uint8_t> obf;
    for(size_t i=0;txt[i];i++){ obf.push_back((uint8_t)txt[i]^k); k=(uint8_t)(k*31+7); }
    assert(deobf(obf.data(),obf.size(),seed)==std::string(txt));
    printf("OK crypto\n");
    return 0;
}
