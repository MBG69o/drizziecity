// EagleEYE plugin - categoria EXTRA 3 (v2.11.0).
// driveby ilegal (motorista atirando), veiculo de modelo invalido (crasher),
// agir em modo espectador e troca de skin sem o servidor. Funcoes puras.
#ifndef EE_CAT_EXTRA3_H
#define EE_CAT_EXTRA3_H

#include "ee_cat_player.h"   // CatResult

namespace ee {

// Driveby ilegal: o MOTORISTA dispara uma arma (so passageiro faz driveby).
CatResult checkDriveby(bool isDriver, int weapon, bool active);

// Modelo de veiculo valido no GTA:SA: 400..611. Fora disso e crasher.
bool validVehicleModel(int model);
CatResult checkVehicleModel(int model, bool active);

// Agir (mover/atirar) enquanto o servidor colocou o jogador em modo espectador.
CatResult checkSpectateBypass(bool spectating, bool acted, bool active);

// Trocar de skin sem o servidor: skin atual != a ultima definida pelo servidor.
CatResult checkSkinChange(int currentSkin, int serverSkin, bool active);

} // namespace ee

#endif // EE_CAT_EXTRA3_H
