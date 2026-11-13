#include "ee_cat_extra3.h"
#include "ee_detect.h"
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string x3fmt(const char* f, ...) {
    char buf[96]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

CatResult checkDriveby(bool isDriver, int weapon, bool active) {
    CatResult r;
    // weapon 0 = nenhuma; armas de verdade vao de 1 a 46.
    if (active && isDriver && weapon >= 1 && weapon <= 46) {
        r.code = DRIVEBY;
        r.detail = x3fmt("motorista disparando arma %d", weapon);
    }
    return r;
}

bool validVehicleModel(int model) {
    return model >= 400 && model <= 611;
}

CatResult checkVehicleModel(int model, bool active) {
    CatResult r;
    if (active && !validVehicleModel(model)) {
        r.code = VEHMODEL;
        r.detail = x3fmt("modelo de veiculo invalido: %d", model);
    }
    return r;
}

CatResult checkSpectateBypass(bool spectating, bool acted, bool active) {
    CatResult r;
    if (active && spectating && acted) {
        r.code = SPECTATE;
        r.detail = "agiu enquanto estava em modo espectador";
    }
    return r;
}

CatResult checkSkinChange(int currentSkin, int serverSkin, bool active) {
    CatResult r;
    if (active && serverSkin >= 0 && currentSkin != serverSkin) {
        r.code = SKINCHANGE;
        r.detail = x3fmt("skin %d (servidor deu %d)", currentSkin, serverSkin);
    }
    return r;
}

} // namespace ee
