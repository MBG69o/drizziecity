#include "ee_cat_vehicles.h"
#include <cmath>
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string vfmt(const char* f, ...) {
    char buf[128]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}
static float vsize(float x, float y, float z) { return std::sqrt(x * x + y * y + z * z); }
static bool badFloat(float v, float limit) { return (v != v) || v > limit || v < -limit; }

VehHealthResult checkVehicleHealth(VehHealthState& v, float cur, long now, bool active) {
    VehHealthResult out;
    if (now < v.immuneUntil) { v.health = cur; return out; }
    if (cur > v.health + 10.0f) {
        if (active) {
            out.r.code = VEH_HEALTH;
            out.r.detail = vfmt("veiculo %.0f hp (permitido %.0f)", cur, v.health);
            out.correct = true;
            out.setTo = v.health;
            v.immuneUntil = now + 2000;
        } else {
            v.health = cur;
        }
    } else if (cur < v.health) {
        v.health = cur;
    }
    return out;
}

CatResult vehicleSpam(VehSpamState& s, long now, int limit, bool active) {
    CatResult r;
    if (!active) return r;
    if (now - s.tick > 5000) { s.tick = now; s.count = 0; }
    if (++s.count > limit) {
        s.count = 0;
        r.code = VEH_SPAM;
        r.detail = "entrou/saiu de veiculos em excesso";
    }
    return r;
}

CarWarpResult checkCarWarp(float vehX, float vehY, float vehZ,
                           float lastX, float lastY, float lastZ,
                           bool oldOnFoot, bool withinPosImmune, bool lastPosRecent,
                           bool active, int limit) {
    CarWarpResult out;
    if (!active || !oldOnFoot || withinPosImmune || !lastPosRecent) return out;
    float dist = vsize(vehX - lastX, vehY - lastY, vehZ - lastZ);
    if (dist > (float)limit) {
        out.r.code = CARWARP;
        out.r.detail = vfmt("entrou no veiculo a %.0f m", dist);
        out.correct = true;
        out.backX = lastX; out.backY = lastY; out.backZ = lastZ;
    }
    return out;
}

UnoccupiedResult checkUnoccupied(float newX, float newY, float newZ,
                                 float velX, float velY, float velZ,
                                 float vehX, float vehY, float vehZ,
                                 long now, long vehImmuneUntil,
                                 const Detector& cfg, bool immune) {
    UnoccupiedResult out;
    if (immune) return out;
    if (cfg.isEnabled(CRASHER) && (badFloat(newX, 20000.0f) || badFloat(newY, 20000.0f) || badFloat(newZ, 50000.0f)
        || badFloat(velX, 100.0f) || badFloat(velY, 100.0f) || badFloat(velZ, 100.0f))) {
        out.r.code = CRASHER; out.r.detail = "sync de veiculo invalido"; out.block = true;
        return out;
    }
    if (cfg.isEnabled(VEH_TROLL) && now >= vehImmuneUntil) {
        float dist = vsize(newX - vehX, newY - vehY, newZ - vehZ);
        if (dist > (float)cfg.valueOf(VEH_TROLL) || vsize(velX, velY, velZ) > 3.0f) {
            out.r.code = VEH_TROLL; out.r.detail = vfmt("moveu veiculo por %.0f m", dist); out.block = true;
        }
    }
    return out;
}

CatResult checkTuning(int componentid, int interior, bool active) {
    CatResult r;
    if (active && interior == 0) {
        r.code = TUNING;
        r.detail = vfmt("componente %d fora da oficina", componentid);
    }
    return r;
}

CatResult checkSeat(int seat, int vehModel, bool active) {
    CatResult r;
    if (active && ((seat > 10 && seat != 128) || vehModel == 0)) {
        r.code = CRASHER;
        r.detail = vfmt("assento %d no veiculo (modelo %d)", seat, vehModel);
    }
    return r;
}

} // namespace ee
