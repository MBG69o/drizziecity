#include "ee_detect.h"
#include <cstdio>
#include <cassert>
#include <string>
using namespace ee;
// configuracao real gerada pelo bot (buildConfigResponse)
static const std::string CFG = "EAGLE 7 1 12\nP 0 1 1 3 0\nP 1 1 1 3 0\nP 2 1 1 3 0\nP 3 1 1 2 0\nP 4 1 1 3 70\nP 5 1 1 3 360\nP 6 1 1 3 80\nP 7 1 1 3 14\nP 8 1 1 1 0\nP 9 1 1 3 0\nP 10 1 1 1 4\nP 11 1 1 3 25\nP 12 1 1 3 5\nP 13 1 1 2 30\nP 14 1 1 2 20\nP 15 0 1 1 800\nP 16 1 1 1 3\nP 17 1 1 1 0\nP 18 1 1 1 0\nP 19 1 1 2 6\nP 20 1 1 3 30\nP 21 1 1 2 0\nP 22 1 1 2 12\nP 23 1 1 1 0\nP 24 1 1 1 0\nP 25 1 1 2 0\nP 26 1 1 2 8\nP 27 1 1 2 15\nP 28 1 1 2 10\nP 29 0 0 3 600\nP 30 1 1 1 3\nP 31 1 1 1 0\nP 32 1 1 1 5\nP 33 1 0 2 92\nW Admin_Fulano\nW Staff_Ze\nT EE-7K2QMX-AAAA-BBBB-CCCC-DDDD\nC 5 unbanip 1.2.3.4\nEND\n";
int main(){
    Detector d; std::vector<Command> cmds;
    assert(d.applyConfig(CFG, cmds)==1);
    assert(d.version==7 && d.global && d.pollSeconds==12);
    assert(d.prot[SPEED_FOOT].value==70 && d.prot[SPEED_FOOT].enabled);
    assert(d.prot[SPEED_VEH].value==360 && d.prot[GODMODE].value==6);
    assert(d.prot[PING].enabled==false && d.prot[AIMBOT].action==WARN);
    assert(d.whitelist.size()==2 && d.isWhitelisted("admin_fulano"));
    assert(d.newToken=="EE-7K2QMX-AAAA-BBBB-CCCC-DDDD");
    assert(cmds.size()==1 && cmds[0].type=="unbanip" && cmds[0].arg=="1.2.3.4");
    printf("OK parser (34 protecoes, whitelist, token, comando)\n");
    std::vector<Command> c2;
    assert(d.applyConfig("WAIT\nEND\n",c2)==-1);
    assert(d.applyConfig("NOLICENSE\nEND\n",c2)==-2);
    assert(d.applyConfig("OK\nEND\n",c2)==0);
    assert(d.applyConfig("EAGLE 1 1 10\nP 0 1 1 3 0",c2)==-3);
    Detector e; std::vector<Command> ec;
    e.applyConfig("EAGLE 1 1 10\nP 0 1 1 3 0\nEND\n",ec);
    long t=1000000;
    assert(e.detect(1,"Joao","i",MONEY,"x",t,false)==WARN);
    assert(e.detect(1,"Joao","i",MONEY,"x",t+100,false)==WARN);
    assert(e.detect(1,"Joao","i",MONEY,"x",t+200,false)==KICK);
    assert(e.detect(2,"Joao","i",MONEY,"x",t,true)==-1);
    Detector w; std::vector<Command> wc; w.applyConfig("EAGLE 1 1 10\nP 8 1 1 2 0\nEND\n",wc);
    assert(w.detect(1,"A","i",JETPACK,"j",0,false)==WARN);
    assert(w.detect(1,"A","i",JETPACK,"j",70000,false)==WARN);
    assert(w.detect(1,"A","i",JETPACK,"j",70100,false)==KICK);
    assert(!e.drainReports().empty());
    printf("OK motor (tolerancia, janela, imunidade, relatorios)\n");
    return 0;
}
