// EagleEYE plugin - categoria VEICULOS (reparo/car godmode, puxar veiculo,
// veiculo troll, tuning, spam de veiculo, assento invalido). Portado do v2.2.0.
#ifndef EE_CAT_VEHICLES_H
#define EE_CAT_VEHICLES_H

#include "ee_cat_player.h"   // CatResult
#include "ee_detect.h"

namespace ee {

struct VehHealthState { float health = 1000.0f; long immuneUntil = 0; };
struct VehSpamState { long tick = 0; int count = 0; };

// Reparo/car godmode: vida do veiculo subiu sem reparo legitimo.
struct VehHealthResult { CatResult r; bool correct = false; float setTo = 0.0f; };
VehHealthResult checkVehicleHealth(VehHealthState& v, float cur, long now, bool active);

// Spam de entrar/sair de veiculos.
CatResult vehicleSpam(VehSpamState& s, long now, int limit, bool active);

// Car warp: entrou num veiculo distante. Devolve correct=true e as coords
// para onde devolver o jogador.
struct CarWarpResult { CatResult r; bool correct = false; float backX = 0, backY = 0, backZ = 0; };
CarWarpResult checkCarWarp(float vehX, float vehY, float vehZ,
                           float lastX, float lastY, float lastZ,
                           bool oldOnFoot, bool withinPosImmune, bool lastPosRecent,
                           bool active, int limit);

// OnUnoccupiedVehicleUpdate: crasher (floats invalidos) ou troll (empurrou o
// veiculo). block=true => rejeitar a sincronizacao.
struct UnoccupiedResult { CatResult r; bool block = false; };
UnoccupiedResult checkUnoccupied(float newX, float newY, float newZ,
                                 float velX, float velY, float velZ,
                                 float vehX, float vehY, float vehZ,
                                 long now, long vehImmuneUntil,
                                 const Detector& cfg, bool immune);

// Tuning fora da oficina.
CatResult checkTuning(int componentid, int interior, bool active);

// Assento invalido / veiculo inexistente (crasher).
CatResult checkSeat(int seat, int vehModel, bool active);

} // namespace ee

#endif // EE_CAT_VEHICLES_H
