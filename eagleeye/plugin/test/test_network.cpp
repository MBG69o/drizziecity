#include "ee_cat_network.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
int main(){
    // flood: limite 3 mensagens em 3s
    { FloodState s;
      for(int i=0;i<3;i++) assert(checkFlood(s,1000,3,true).r.code==-1);
      auto o=checkFlood(s,1100,3,true); assert(o.r.code==FLOOD && o.block); }
    printf("OK flood\n");

    // divulgação: IP e porta
    assert(hasAdvert("entra no 177.10.20.30"));
    assert(hasAdvert("servidor novo :7777 agora"));
    assert(!hasAdvert("tenho 50 carros e 20 casas"));
    assert(!hasAdvert("placar 2 x 1"));
    { auto o=checkAdvert("venha para 192.168.1.1",true); assert(o.r.code==ADVERT && o.block);
      assert(checkAdvert("ola pessoal",true).r.code==-1); }
    printf("OK divulgação\n");

    // ping: 5 strikes seguidos acima de 800
    { PingState s;
      for(int i=0;i<4;i++) assert(checkPing(s,900,800,true).code==-1);
      assert(checkPing(s,900,800,true).code==PING);
      // ping normal zera
      PingState s2; checkPing(s2,900,800,true); assert(checkPing(s2,100,800,true).code==-1 && s2.strikes==0); }
    printf("OK ping\n");

    // conexões por IP / reconexão
    assert(checkIpFlood(3,3,true).code==IPFLOOD);
    assert(checkIpFlood(2,3,true).code==-1);
    assert(checkReconnect(6,5,true).code==RECONNECT);
    assert(checkReconnect(3,5,true).code==-1);
    printf("OK conexões IP\n");

    // NPC falso: IP externo
    assert(checkFakeNpc("200.1.2.3","",true).code==FAKENPC);
    assert(checkFakeNpc("127.0.0.1","",true).code==-1);      // local: ok
    assert(checkFakeNpc("200.1.2.3","200.1.2.3",true).code==-1); // bind do servidor: ok
    printf("OK NPC falso\n");

    // dialog spoof
    assert(checkDialog(5,-1,true).code==DIALOG);   // nenhum dialog aberto
    assert(checkDialog(5,5,true).code==-1);        // respondeu o dialog certo
    printf("OK dialog\n");

    // RCON brute force: 3 tentativas erradas bloqueiam
    { RconGuard g;
      assert(!g.onAttempt("6.6.6.6",false,1000,3,true).hit);
      assert(!g.onAttempt("6.6.6.6",false,1100,3,true).hit);
      auto o=g.onAttempt("6.6.6.6",false,1200,3,true);
      assert(o.hit && o.blockIp && o.r.code==RCON);
      // sucesso limpa o contador
      RconGuard g2; g2.onAttempt("7.7.7.7",false,1000,3,true); g2.onAttempt("7.7.7.7",true,1100,3,true);
      assert(!g2.onAttempt("7.7.7.7",false,1200,3,true).hit); }
    printf("OK RCON brute force\n");
    return 0;
}
