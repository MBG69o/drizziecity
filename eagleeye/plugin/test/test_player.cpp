#include "ee_cat_player.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
int main(){
    // ---- DINHEIRO
    PlayerState p; p.serverMoney=5000; p.moneyTick=0;
    // cliente igual ao servidor: nada (e respeita o intervalo de 3s)
    assert(checkMoney(p,5000,1000,true).code==-1);
    // gasto legítimo: cliente < servidor -> baseline cai, sem detecção
    { auto r=checkMoney(p,4000,5000,true); assert(r.code==-1); assert(p.serverMoney==4000); }
    // money hack: cliente > servidor e proteção ativa -> detecta + corrige
    { auto r=checkMoney(p,999999,9000,true); assert(r.code==MONEY); assert(r.corr.type==Correction::SetMoney && r.corr.money==4000); }
    // sem proteção: aceita o valor do cliente como baseline
    { PlayerState q; q.serverMoney=100; auto r=checkMoney(q,900,9000,false); assert(r.code==-1 && q.serverMoney==900); }
    printf("OK dinheiro\n");

    // ---- VIDA / COLETE
    PlayerState h; h.allowedHealth=100; h.healthTick=0;
    assert(checkHealth(h,100,1000,true).code==-1);       // intervalo < 2500
    assert(checkHealth(h,100,3000,true).code==-1);       // igual
    { auto r=checkHealth(h,150,6000,true); assert(r.code==HEALTH && r.corr.type==Correction::SetHealth && r.corr.value==100); }
    { auto r=checkHealth(h,40,9000,true); assert(r.code==-1 && h.allowedHealth==40); } // levou dano: baseline cai
    PlayerState ar; ar.allowedArmour=0; ar.armourTick=0;
    { auto r=checkArmour(ar,100,3000,true); assert(r.code==ARMOUR && r.corr.value==0); }
    printf("OK vida/colete\n");

    // ---- JETPACK
    PlayerState j;
    { auto r=checkJetpack(j,2,false,true); assert(r.code==JETPACK && r.corr.type==Correction::ClearJetpack); }
    serverGrantJetpack(j);
    assert(checkJetpack(j,2,false,true).code==-1);        // servidor deu: liberado
    assert(checkJetpack(j,0,true,true).code==-1 && j.jetpackGranted==false); // a pé: zera
    printf("OK jetpack\n");

    // ---- GODMODE
    PlayerState g; g.healthTick=0; g.armourTick=0;
    for(int i=0;i<8;i++) godmodeOnDamage(g,10.0f,100);    // 8 tiros
    // vida continua 100 (não caiu) e tratamento após 2s -> detecta (minHits 6)
    { auto r=checkGodmode(g,100,0,100,true,6); assert(r.code==-1); }   // ainda < 2000ms? godTick=100, now 100
    { auto r=checkGodmode(g,100,0,2200,true,6); assert(r.code==GODMODE); }
    // cenário honesto: a vida caiu (healthTick depois do godTick) -> não detecta
    PlayerState g2; for(int i=0;i<8;i++) godmodeOnDamage(g2,10,100); g2.healthTick=500;
    { auto r=checkGodmode(g2,60,0,2200,true,6); assert(r.code==-1); }
    printf("OK godmode\n");

    // ---- SPAWN FALSO
    PlayerState s;
    assert(checkSpawn(s,true).code==FAKESPAWN);           // sem permissão
    serverAllowSpawn(s);
    assert(checkSpawn(s,true).code==-1);                  // autorizado
    assert(checkSpawn(s,true).code==FAKESPAWN);           // permissão consumida: bloqueia de novo
    printf("OK spawn\n");

    // ---- integração com o motor: money hack passa pela tolerância e vira report
    Detector d; std::vector<Command> c;
    d.applyConfig("EAGLE 1 1 10\nP 0 1 1 1 0\nEND\n",c);  // dinheiro tol1
    PlayerState pp; pp.serverMoney=0; pp.moneyTick=0;
    auto res=checkMoney(pp,1000000,9000,d.isEnabled(MONEY));
    assert(res.code==MONEY);
    int act=d.detect(1,"Cheater","1.1.1.1",res.code,res.detail,9000,false);
    assert(act==KICK);
    auto reps=d.drainReports(); assert(reps.size()==1 && reps[0].code==MONEY);
    printf("OK integração (checkMoney -> detect -> report)\n");
    return 0;
}
