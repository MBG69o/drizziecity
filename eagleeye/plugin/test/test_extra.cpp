#include "ee_cat_extra.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
int main(){
    // nome valido / spoof
    assert(validNick("Joao_Silva"));
    assert(validNick("[DRZ]Player123"));
    assert(!validNick("ab"));                 // curto demais
    assert(!validNick("nome com espaco"));    // espaco invalido
    assert(!validNick("ha\x01""ck"));         // caractere de controle
    { auto o=checkNickname("nome com espaco",true); assert(o.code==NICKNAME);
      assert(checkNickname("Joao_Silva",true).code==-1);
      assert(checkNickname("nome com espaco",false).code==-1); }
    printf("OK nickname\n");

    // animacao crasher
    assert(checkAnim(5000,true).code==ANIMCRASH);
    assert(checkAnim(-3,true).code==ANIMCRASH);
    assert(checkAnim(1200,true).code==-1);
    assert(checkAnim(5000,false).code==-1);
    printf("OK anim crasher\n");

    // skin invalido
    assert(checkSkin(400,true).code==SKINHACK);
    assert(checkSkin(74,true).code==SKINHACK);   // 74 nao existe
    assert(checkSkin(-1,true).code==SKINHACK);
    assert(checkSkin(100,true).code==-1);
    printf("OK skin\n");

    // flood de objetos: limite 8 em 5s
    { CountState s;
      for(int i=0;i<8;i++) assert(checkObjectSpam(s,1000,8,true).code==-1);
      assert(checkObjectSpam(s,1100,8,true).code==OBJSPAM); }
    printf("OK object spam\n");

    // flood de PM: limite 5 em 5s
    { CountState s;
      for(int i=0;i<5;i++) assert(checkPmFlood(s,1000,5,true).code==-1);
      assert(checkPmFlood(s,1100,5,true).code==PMFLOOD);
      // nova janela (>5s) zera
      assert(checkPmFlood(s,7000,5,true).code==-1); }
    printf("OK pm flood\n");

    // spam de buzina: limite 10 em 3s
    { CountState s;
      for(int i=0;i<10;i++) assert(checkHornSpam(s,1000,10,true).code==-1);
      assert(checkHornSpam(s,1200,10,true).code==HORNSPAM); }
    printf("OK horn spam\n");

    // world jump: so detecta quando o servidor nao mudou
    assert(checkWorldJump(0,5,0,0,false,true).code==WORLDJUMP);   // interior
    assert(checkWorldJump(0,0,0,9,false,true).code==WORLDJUMP);   // virtual world
    assert(checkWorldJump(0,5,0,0,true,true).code==-1);           // servidor mudou: ok
    assert(checkWorldJump(3,3,7,7,false,true).code==-1);          // sem mudanca
    printf("OK world jump\n");

    // freeze bypass
    assert(checkFreezeBypass(true,true,true).code==FREEZEBYPASS);
    assert(checkFreezeBypass(true,false,true).code==-1);   // congelado e parado: ok
    assert(checkFreezeBypass(false,true,true).code==-1);   // livre e movendo: ok
    printf("OK freeze bypass\n");

    printf("extra: OK\n");
    return 0;
}
