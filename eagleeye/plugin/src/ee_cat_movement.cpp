#include "ee_cat_movement.h"
#include <cmath>
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string mfmt(const char* f, ...) {
    char buf[128]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}
static float vsize(float x, float y, float z) { return std::sqrt(x * x + y * y + z * z); }
static bool badFloat(float v, float limit) { return (v != v) || v > limit || v < -limit; }

std::vector<CatResult> checkMovement(MoveState& s, int pstate,
    float x, float y, float z, float vx, float vy, float vz,
    int vehModel, bool surfing, long now, const Detector& cfg, bool playerImmune) {
    std::vector<CatResult> out;

    // crasher: posicao impossivel
    if (badFloat(x, 20000.0f) || badFloat(y, 20000.0f) || badFloat(z, 50000.0f) || z < -1000.0f) {
        CatResult r; r.code = CRASHER; r.detail = mfmt("posicao invalida (%.0f, %.0f, %.0f)", x, y, z);
        out.push_back(r); s.lastPosTick = 0; return out;
    }
    if (pstate == 2 && vehModel == 0) {
        CatResult r; r.code = CRASHER; r.detail = "veiculo inexistente";
        out.push_back(r); return out;
    }

    bool immune = playerImmune || now < s.posImmuneUntil;

    // velocidade
    if (!playerImmune && now >= s.speedImmuneUntil && !surfing) {
        if (pstate == 1 && vz > -0.3f && cfg.isEnabled(SPEED_FOOT)) {
            float kmh = vsize(vx, vy, 0.0f) * 180.0f;
            if (kmh > (float)cfg.valueOf(SPEED_FOOT)) {
                CatResult r; r.code = SPEED_FOOT; r.detail = mfmt("%.0f km/h a pe (limite %d)", kmh, cfg.valueOf(SPEED_FOOT));
                out.push_back(r);
            }
        } else if (pstate == 2 && vz > -0.5f && cfg.isEnabled(SPEED_VEH)) {
            float kmh = vsize(vx, vy, vz) * 180.0f;
            if (kmh > (float)cfg.valueOf(SPEED_VEH)) {
                CatResult r; r.code = SPEED_VEH; r.detail = mfmt("%.0f km/h no veiculo %d (limite %d)", kmh, vehModel, cfg.valueOf(SPEED_VEH));
                out.push_back(r);
            }
        }
    }

    // teleporte / airbreak (compara com o tick anterior)
    if (!immune && s.lastPosTick && s.lastState == pstate && !surfing) {
        long dt = now - s.lastPosTick;
        if (dt > 0 && dt < 3000) {
            float dist = vsize(x - s.lastX, y - s.lastY, 0.0f);
            float posSpeed = dist / ((float)dt / 1000.0f);
            float velSpeed = vsize(vx, vy, 0.0f) * 50.0f;

            if (cfg.isEnabled(TELEPORT)) {
                float limit = (float)cfg.valueOf(TELEPORT);
                if (pstate == 2) {
                    float dyn = velSpeed * ((float)dt / 1000.0f) * 2.0f + 40.0f;
                    if (dyn > limit) limit = dyn;
                }
                if (dist > limit) {
                    CatResult r; r.code = TELEPORT; r.detail = mfmt("%.0f m em %ld ms", dist, dt);
                    out.push_back(r);
                }
            }
            if (cfg.isEnabled(AIRBREAK)) {
                float limit = (float)cfg.valueOf(AIRBREAK);
                if (pstate == 2) limit *= 2.5f;
                if (posSpeed > limit && velSpeed < posSpeed * 0.25f) {
                    CatResult r; r.code = AIRBREAK;
                    r.detail = mfmt("%.1f m/s com velocidade %.1f m/s (%s)", posSpeed, velSpeed, pstate == 2 ? "veiculo" : "a pe");
                    out.push_back(r);
                }
            }
        }
    }

    s.lastX = x; s.lastY = y; s.lastZ = z;
    s.lastPosTick = now; s.lastState = pstate;
    return out;
}

CatResult checkPickup(float dist, bool active, int limit) {
    CatResult r;
    if (active && dist > (float)limit) { r.code = FAKEPICKUP; r.detail = mfmt("pickup a %.0f m", dist); }
    return r;
}

CatResult checkCheckpoint(float dist, float size, bool race, bool active, int limit) {
    CatResult r;
    if (active && dist > size + (float)limit) {
        r.code = FAKECP;
        r.detail = mfmt("%s a %.0f m", race ? "race checkpoint" : "checkpoint", dist);
    }
    return r;
}

} // namespace ee
