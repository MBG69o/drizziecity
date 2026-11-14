#include "ee_cat_weapons.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
static Detector mk(const char* lines){ Detector d; std::vector<Command> c; d.applyConfig(std::string("EAGLE 1 1 10\n")+lines+"END\n",c); return d; }
int main(){
    // tabelas
    assert(weaponSlot(24)==2 && weaponSlot(31)==5 && weaponSlot(38)==7 && weaponSlot(0)==0 && weaponSlot(99)==-1);
    assert(isBulletWeapon(24) && isBulletWeapon(38) && !isBulletWeapon(0) && !isBulletWeapon(35));
    assert(weaponRange(34)==320.0f && weaponDamage(24)==46.2f);
    printf("OK tabelas\n");

    // crasher: tipo de bala invalido
    { Detector d=mk("P 23 1 1 1 0\n"); WeaponState s;
      auto o=onWeaponShot(s,24,9,0,0,0,0,false,false,100,-1,1000,d,false); assert(o.r.code==CRASHER && o.block); }
    // arma que nao possui
    { Detector d=mk("P 3 1 1 1 0\n"); WeaponState s;
      auto o=onWeaponShot(s,24,0,0,0,0,0,false,false,100,-1,1000,d,false); assert(o.r.code==WEAPON && o.block); }
    // arma autorizada: passa
    { Detector d=mk("P 3 1 1 1 0\n"); WeaponState s; serverGiveWeapon(s,24,100,0);
      auto o=onWeaponShot(s,24,0,0,0,0,0,false,false,100,-1,1000,d,false); assert(o.r.code==-1); }
    printf("OK crasher/arma\n");

    // rapid fire: limite 2 tiros/s
    { Detector d=mk("P 3 0 1 1 0\nP 11 1 1 1 2\n"); WeaponState s; serverGiveWeapon(s,24,999,0);
      long t=1000;
      assert(onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,t,d,false).r.code==-1);     // 1
      assert(onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,t+10,d,false).r.code==-1);  // 2
      auto o=onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,t+20,d,false); assert(o.r.code==RAPIDFIRE && o.block); }
    printf("OK rapid fire\n");

    // municao infinita: mesmo tiro, munição não cai
    { Detector d=mk("P 3 0 1 1 0\nP 22 1 1 1 2\n"); WeaponState s; serverGiveWeapon(s,24,999,0);
      assert(onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,1000,d,false).r.code==-1); // registra
      assert(onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,1100,d,false).r.code==-1); // strike1
      auto o=onWeaponShot(s,24,0,0,0,0,0,false,false,50,-1,1200,d,false); assert(o.r.code==AMMO); } // strike2 -> limite 2
    printf("OK municao\n");

    // alcance: deagle (24) alcance 35m, atira a 200m
    { Detector d=mk("P 3 0 1 1 0\nP 20 1 1 1 30\n"); WeaponState s; serverGiveWeapon(s,24,999,0);
      auto o=onWeaponShot(s,24,1,5,0,0,0,true,false,50,200.0f,1000,d,false); assert(o.r.code==RANGE && o.block);
      // dentro do alcance: ok
      assert(onWeaponShot(s,24,1,5,0,0,0,true,false,50,20.0f,1000,d,false).r.code==-1); }
    printf("OK alcance\n");

    // aimbot: 40 tiros, 100% de acerto, limite 92%
    { Detector d=mk("P 3 0 1 1 0\nP 33 1 1 1 92\n"); WeaponState s; serverGiveWeapon(s,24,9999,0);
      CatResult last;
      for(int i=0;i<40;i++){ auto o=onWeaponShot(s,24,1,5,0,0,0,true,false,99,-1,1000+i,d,false); if(o.r.code==AIMBOT) last=o.r; }
      assert(last.code==AIMBOT); }
    printf("OK aimbot\n");

    // dano hack
    { assert(onGiveDamage(24,100.0f,true).code==DAMAGE);    // deagle max 46.2
      assert(onGiveDamage(24,46.0f,true).code==-1);         // dentro do normal
      assert(onGiveDamage(24,100.0f,false).code==-1); }     // proteção desligada
    printf("OK dano\n");

    // verificação periódica: arma não autorizada é removida, mantém as válidas
    { WeaponState s; serverGiveWeapon(s,24,100,0); s.weaponTick=0;
      int slotW[13]={0}, slotA[13]={0};
      slotW[2]=24; slotA[2]=100;   // deagle autorizada
      slotW[7]=35; slotA[7]=5;     // RPG não autorizado (slot 7)
      auto o=checkWeaponsPeriodic(s,slotW,slotA,3000,true,true,0);
      assert(o.r.code==WEAPON && o.resetWeapons);
      assert(o.keep.size()==1 && o.keep[0].first==24); }
    printf("OK periódico armas\n");

    // fake kill: assassino desconectado
    { Detector d=mk("P 10 1 1 1 4\n"); WeaponState s;
      auto o=onDeath(s,7,false,false,false,1000,d,false); assert(o.r.code==FAKEKILL && o.clearKiller);
      // assassino válido e perto: ok
      WeaponState s2; auto o2=onDeath(s2,7,true,false,true,1000,d,false); assert(o2.r.code==-1); }
    printf("OK fake kill\n");

    // c-bug: agacha 300ms após atirar, limite 600ms
    { WeaponState s; s.cbugTick=1000;
      assert(onCrouch(s,true,1300,600,true).code==CBUG);
      WeaponState s2; s2.cbugTick=1000;
      assert(onCrouch(s2,true,2000,600,true).code==-1); }  // demorou mais que 600ms
    printf("OK c-bug\n");
    return 0;
}
