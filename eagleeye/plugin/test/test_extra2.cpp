#include "ee_cat_extra2.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
int main(){
    // special action
    assert(validSpecialAction(0) && validSpecialAction(13) && validSpecialAction(24) && validSpecialAction(68));
    assert(!validSpecialAction(14) && !validSpecialAction(99) && !validSpecialAction(-1));
    assert(checkSpecialAction(99,true).code==ACTIONHACK);
    assert(checkSpecialAction(5,true).code==-1);
    assert(checkSpecialAction(99,false).code==-1);
    printf("OK special action\n");

    // troca de arma rapida: 4 trocas < 150ms
    { WeaponSwitchState s;
      checkWeaponSwitch(s,24,1000,150,true);   // primeira leitura
      assert(checkWeaponSwitch(s,22,1050,150,true).code==-1); // 1
      assert(checkWeaponSwitch(s,24,1100,150,true).code==-1); // 2
      assert(checkWeaponSwitch(s,22,1150,150,true).code==-1); // 3
      assert(checkWeaponSwitch(s,24,1200,150,true).code==WEAPONSWITCH); // 4 -> detecta
      // troca normal (lenta) nao conta
      WeaponSwitchState s2; checkWeaponSwitch(s2,24,0,150,true);
      assert(checkWeaponSwitch(s2,22,5000,150,true).code==-1); }
    printf("OK weapon switch\n");

    // chat crasher
    assert(hasChatCrash(std::string("oi\x01""mundo")));          // caractere de controle
    assert(hasChatCrash("~r~~g~~b~~r~~g~~b~~r~~g~~b~~r~~g~~b~~r~")); // cores demais
    assert(!hasChatCrash("ola pessoal, tudo bem?"));
    assert(checkChatCrash(std::string("a\x02""b"),true).code==CHATCRASH);
    assert(checkChatCrash("texto normal",true).code==-1);
    printf("OK chat crasher\n");

    // objeto anexado invalido
    assert(checkAttachment(0,19300,2,true).code==-1);      // valido
    assert(checkAttachment(99,19300,2,true).code==ATTACHHACK); // slot invalido
    assert(checkAttachment(0,0,2,true).code==ATTACHHACK);  // modelo invalido
    assert(checkAttachment(0,19300,0,true).code==ATTACHHACK); // bone invalido
    assert(checkAttachment(99,0,0,false).code==-1);
    printf("OK attach\n");

    // crouch spam: limite 10 em 3s
    { CountState s;
      for(int i=0;i<10;i++) assert(checkCrouchSpam(s,1000,10,true).code==-1);
      assert(checkCrouchSpam(s,1100,10,true).code==CROUCHSPAM); }
    printf("OK crouch spam\n");

    printf("extra2: OK\n");
    return 0;
}
