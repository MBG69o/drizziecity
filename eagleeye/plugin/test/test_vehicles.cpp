#include "ee_cat_vehicles.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
static Detector mk(const char* l){ Detector d; std::vector<Command> c; d.applyConfig(std::string("EAGLE 1 1 10\n")+l+"END\n",c); return d; }
int main(){
    // reparo/car godmode: vida sobe de 500 para 1000
    { VehHealthState v; v.health=500;
      auto o=checkVehicleHealth(v,1000,1000,true);
      assert(o.r.code==VEH_HEALTH && o.correct && o.setTo==500); }
    // reparo legítimo (pay'n'spray) com imunidade: aceita
    { VehHealthState v; v.health=500; v.immuneUntil=2000;
      auto o=checkVehicleHealth(v,1000,1000,true); assert(o.r.code==-1 && v.health==1000); }
    // dano: vida cai, baseline acompanha
    { VehHealthState v; v.health=1000; auto o=checkVehicleHealth(v,700,1000,true); assert(o.r.code==-1 && v.health==700); }
    printf("OK reparo veículo\n");

    // spam de veículo: limite 2 em 5s
    { VehSpamState s;
      assert(vehicleSpam(s,1000,2,true).code==-1);
      assert(vehicleSpam(s,1100,2,true).code==-1);
      assert(vehicleSpam(s,1200,2,true).code==VEH_SPAM); }
    printf("OK spam veículo\n");

    // car warp: entrou num veículo a 50m (limite 30), a pé, recente, sem imunidade
    { auto o=checkCarWarp(50,0,0, 0,0,0, true,false,true, true,30);
      assert(o.r.code==CARWARP && o.correct && o.backX==0);
      // dentro de 30m: ok
      assert(checkCarWarp(10,0,0, 0,0,0, true,false,true, true,30).r.code==-1);
      // imune por posição: não detecta
      assert(checkCarWarp(50,0,0, 0,0,0, true,true,true, true,30).r.code==-1); }
    printf("OK car warp\n");

    // veículo troll: empurrou o veículo 50m (limite 20)
    { Detector d=mk("P 14 1 1 1 20\nP 23 1 1 1 0\n");
      auto o=checkUnoccupied(50,0,0, 0,0,0, 0,0,0, 1000,0, d,false);
      assert(o.r.code==VEH_TROLL && o.block); }
    // sync inválido (crasher)
    { Detector d=mk("P 14 1 1 1 20\nP 23 1 1 1 0\n");
      auto o=checkUnoccupied(0,0,0, 999,0,0, 0,0,0, 1000,0, d,false);
      assert(o.r.code==CRASHER && o.block); }
    printf("OK veículo troll\n");

    // tuning fora da oficina (interior 0)
    { assert(checkTuning(1010,0,true).code==TUNING);
      assert(checkTuning(1010,1,true).code==-1);   // dentro da oficina
      assert(checkTuning(1010,0,false).code==-1); }
    printf("OK tuning\n");

    // assento inválido
    { assert(checkSeat(50,400,true).code==CRASHER);  // assento > 10
      assert(checkSeat(128,400,true).code==-1);      // 128 = passageiro válido
      assert(checkSeat(0,0,true).code==CRASHER);     // veículo inexistente
      assert(checkSeat(0,400,true).code==-1); }
    printf("OK assento\n");
    return 0;
}
