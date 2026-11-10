#include "ee_cat_movement.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
#include <algorithm>
using namespace ee;
static Detector mk(const char* lines){ Detector d; std::vector<Command> c; d.applyConfig(std::string("EAGLE 1 1 10\n")+lines+"END\n",c); return d; }
static bool has(std::vector<CatResult>&v,int code){ for(auto&r:v) if(r.code==code) return true; return false; }
int main(){
    // velocidade a pé: limite 70 km/h. vel 1.0 m/tick *180 = 180 km/h
    { Detector d=mk("P 4 1 1 1 70\n"); MoveState s;
      auto v=checkMovement(s,1, 0,0,3, 1.0f,0,0, -1,false, 1000, d, false); assert(has(v,SPEED_FOOT)); }
    // velocidade normal (0.2 -> 36 km/h): nada
    { Detector d=mk("P 4 1 1 1 70\n"); MoveState s;
      auto v=checkMovement(s,1, 0,0,3, 0.2f,0,0, -1,false, 1000, d, false); assert(!has(v,SPEED_FOOT)); }
    printf("OK velocidade a pé\n");

    // teleporte: limite 80m. anda 300m em 500ms
    { Detector d=mk("P 6 1 1 1 80\n"); MoveState s;
      checkMovement(s,1, 0,0,3, 0,0,0, -1,false, 1000, d, false);       // 1ª posição
      auto v=checkMovement(s,1, 300,0,3, 0,0,0, -1,false, 1500, d, false);
      assert(has(v,TELEPORT)); }
    // teleporte do servidor: imune por posição -> não detecta
    { Detector d=mk("P 6 1 1 1 80\n"); MoveState s; s.posImmuneUntil=2000;
      checkMovement(s,1, 0,0,3, 0,0,0, -1,false, 1000, d, false);
      auto v=checkMovement(s,1, 300,0,3, 0,0,0, -1,false, 1500, d, false);
      assert(!has(v,TELEPORT)); }
    printf("OK teleporte\n");

    // airbreak: anda rápido pela posição mas velocidade reportada ~0
    { Detector d=mk("P 7 1 1 1 14\n"); MoveState s;
      checkMovement(s,1, 0,0,3, 0,0,0, -1,false, 1000, d, false);
      auto v=checkMovement(s,1, 30,0,3, 0,0,0, -1,false, 1500, d, false); // 60 m/s pos, 0 vel
      assert(has(v,AIRBREAK)); }
    printf("OK airbreak\n");

    // crasher: posição NaN / fora do mapa
    { Detector d=mk("P 23 1 1 1 0\n"); MoveState s;
      auto v=checkMovement(s,1, 0,0,-5000, 0,0,0, -1,false, 1000, d, false); assert(has(v,CRASHER)); }
    // veículo inexistente
    { Detector d=mk("P 23 1 1 1 0\n"); MoveState s;
      auto v=checkMovement(s,2, 0,0,3, 0,0,0, 0,false, 1000, d, false); assert(has(v,CRASHER)); }
    printf("OK crasher posição\n");

    // velocidade em veículo (cat. veículos, mesma função): limite 360
    { Detector d=mk("P 5 1 1 1 360\n"); MoveState s;
      auto v=checkMovement(s,2, 0,0,3, 3.0f,0,0, 400,false, 1000, d, false); assert(has(v,SPEED_VEH)); } // 540 km/h
    printf("OK velocidade veículo\n");

    // pickup falso: limite 15m, pega a 40m
    { assert(checkPickup(40,true,15).code==FAKEPICKUP);
      assert(checkPickup(5,true,15).code==-1);
      assert(checkPickup(40,false,15).code==-1); }
    // checkpoint falso: raio 3, limite 10 -> além de 13m
    { assert(checkCheckpoint(20,3,false,true,10).code==FAKECP);
      assert(checkCheckpoint(10,3,false,true,10).code==-1);
      assert(checkCheckpoint(20,3,true,true,10).code==FAKECP); }
    printf("OK pickup/checkpoint\n");
    return 0;
}
