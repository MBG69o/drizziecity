// EagleEYE plugin - categoria MOVIMENTO (velocidade a pe, teleporte, airbreak,
// pickup falso, checkpoint falso). A funcao de movimento compartilha o
// rastreamento de posicao, entao tambem resolve velocidade em veiculo (cat.
// veiculos) e posicao invalida (crasher) no mesmo tick. Portado do v2.2.0.
#ifndef EE_CAT_MOVEMENT_H
#define EE_CAT_MOVEMENT_H

#include <vector>
#include "ee_cat_player.h"   // CatResult
#include "ee_detect.h"

namespace ee {

struct MoveState {
    float lastX = 0, lastY = 0, lastZ = 0;
    long lastPosTick = 0;
    int lastState = 0;
    long posImmuneUntil = 0;    // elevadores, teleportes do servidor
    long speedImmuneUntil = 0;
};

// vehModel: -1 = sem veiculo, 0 = veiculo inexistente (crasher), >0 = modelo.
// Pode devolver varias deteccoes no mesmo tick (velocidade + teleporte + ...).
std::vector<CatResult> checkMovement(MoveState& s, int pstate,
    float x, float y, float z, float vx, float vy, float vz,
    int vehModel, bool surfing, long now, const Detector& cfg, bool playerImmune);

// Pickup falso: pegar um pickup estando longe dele (dist em metros).
CatResult checkPickup(float dist, bool active, int limit);

// Checkpoint falso: entrar num checkpoint estando alem do raio + limite.
CatResult checkCheckpoint(float dist, float size, bool race, bool active, int limit);

} // namespace ee

#endif // EE_CAT_MOVEMENT_H
