#include "ee_store.h"
#include "ee_license.h"
#include "ee_crypto.h"
#include <cstdio>
#include <cassert>
#include <ctime>
using namespace ee;
int main(){
    uint32_t key[4]={0xDEADBEEF,0x12345678,0xCAFEBABE,0x0F0F0F0F};
    Store st(key,"segredo-hmac-do-binario");
    Identity id; id.serverId="EE-7K2QMX"; id.token="EE-7K2QMX-ABCD-EFGH-JKMN-PQRS"; id.valid=true;
    assert(st.save("/tmp/ee_id.bin", id));
    Identity r = st.load("/tmp/ee_id.bin");
    assert(r.valid && r.serverId==id.serverId && r.token==id.token);
    // adulteração: troca 1 byte do arquivo -> load deve rejeitar
    { FILE* f=fopen("/tmp/ee_id.bin","r+b"); fseek(f,20,SEEK_SET); int c=fgetc(f); fseek(f,20,SEEK_SET); fputc(c^1,f); fclose(f); }
    Identity bad = st.load("/tmp/ee_id.bin");
    assert(!bad.valid);
    printf("OK store (adulteracao detectada)\n");

    // licença: gera o dígito verificador como o bot faria, valida offline
    std::string pepper="pepper-compartilhado";
    std::string body="ABCDEFGHJKMNPQR"; // 15 chars base32
    // calcula check igual ao plugin
    extern std::string __dummy; (void)__dummy;
    // usa a própria função via uma chave montada: precisamos do check correto.
    // montamos tentando: a função checkDigits é interna, então geramos por licenseFormatOk brute dos 2 dígitos.
    std::string good;
    const char* B32="0123456789ABCDEFGHJKMNPQRSTVWXYZ";
    for(int a=0;a<32&&good.empty();a++)for(int b=0;b<32;b++){
        std::string k=std::string("EE-LIC-")+body.substr(0,5)+"-"+body.substr(5,5)+"-"+body.substr(10,5)+std::string(1,B32[a])+std::string(1,B32[b]);
        if(licenseFormatOk(k,pepper)){ good=k; break; }
    }
    assert(!good.empty());
    assert(licenseFormatOk(good,pepper));
    assert(!licenseFormatOk(good,"pepper-errado"));
    assert(!licenseFormatOk("EE-LIC-11111-22222-33333AA",pepper)); // check errado
    assert(!licenseFormatOk("lixo",pepper));
    printf("licenca valida: %s\n", good.c_str());

    // resposta assinada do bot
    std::string sign="segredo-de-assinatura";
    std::string serverId="EE-7K2QMX", nonce="abc123";
    auto mk=[&](const char* state,long exp){
        std::string msg=std::string(state)+"|"+std::to_string(exp)+"|"+nonce+"|"+serverId+"|"+good;
        return std::string("LIC ")+state+" "+std::to_string(exp)+" "+nonce+" "+hmac_hex(msg,sign);
    };
    long now=time(nullptr);
    Grant g=verifyBotResponse(mk("active",0),good,serverId,sign,nonce); g.checkedAt=now;
    assert(g.state==LicenseState::Active && grantAllows(g,now));
    Grant gr=verifyBotResponse(mk("revoked",0),good,serverId,sign,nonce); gr.checkedAt=now;
    assert(gr.state==LicenseState::Revoked && !grantAllows(gr,now));
    // assinatura forjada (segredo errado) -> não valida
    std::string forged="LIC active 0 "+nonce+" "+hmac_hex("x","segredo-forjado");
    assert(verifyBotResponse(forged,good,serverId,sign,nonce).state==LicenseState::Unknown);
    // nonce trocado (replay) -> rejeita
    assert(verifyBotResponse(mk("active",0),good,serverId,sign,"outro").state==LicenseState::Unknown);
    // fora da janela de graça -> bloqueia mesmo ativa
    Grant old=g; old.checkedAt=now-100*3600; old.graceHours=72;
    assert(!grantAllows(old,now));
    printf("OK license\n");
    return 0;
}
std::string __dummy;
