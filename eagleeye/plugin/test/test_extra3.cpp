#include "ee_cat_extra3.h"
#include "ee_detect.h"
#include <cstdio>
#include <cassert>
using namespace ee;
int main(){
    // driveby ilegal: motorista disparando
    assert(checkDriveby(true, 24, true).code==DRIVEBY);
    assert(checkDriveby(false, 24, true).code==-1);   // passageiro: ok
    assert(checkDriveby(true, 0, true).code==-1);      // sem arma: ok
    assert(checkDriveby(true, 24, false).code==-1);
    printf("OK driveby\n");

    // modelo de veiculo
    assert(validVehicleModel(400) && validVehicleModel(611) && validVehicleModel(500));
    assert(!validVehicleModel(399) && !validVehicleModel(612) && !validVehicleModel(0));
    assert(checkVehicleModel(9999, true).code==VEHMODEL);
    assert(checkVehicleModel(411, true).code==-1);
    printf("OK veh model\n");

    // spectate bypass
    assert(checkSpectateBypass(true, true, true).code==SPECTATE);
    assert(checkSpectateBypass(true, false, true).code==-1);  // parado em spectate: ok
    assert(checkSpectateBypass(false, true, true).code==-1);  // agindo normal: ok
    printf("OK spectate\n");

    // troca de skin sem servidor
    assert(checkSkinChange(100, 50, true).code==SKINCHANGE);
    assert(checkSkinChange(50, 50, true).code==-1);     // igual: ok
    assert(checkSkinChange(100, -1, true).code==-1);    // servidor desconhecido: ignora
    assert(checkSkinChange(100, 50, false).code==-1);
    printf("OK skin change\n");

    printf("extra3: OK\n");
    return 0;
}
