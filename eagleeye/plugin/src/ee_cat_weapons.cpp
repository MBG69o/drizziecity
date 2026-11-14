#include "ee_cat_weapons.h"
#include "ee_detect.h"
#include <cmath>
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string wfmt(const char* f, ...) {
    char buf[128]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

int weaponSlot(int w) {
    if (w == 0 || w == 1) return 0;
    if (w >= 2 && w <= 9) return 1;
    if (w >= 22 && w <= 24) return 2;
    if (w >= 25 && w <= 27) return 3;
    if (w == 28 || w == 29 || w == 32) return 4;
    if (w == 30 || w == 31) return 5;
    if (w == 33 || w == 34) return 6;
    if (w >= 35 && w <= 38) return 7;
    if ((w >= 16 && w <= 18) || w == 39) return 8;
    if (w >= 41 && w <= 43) return 9;
    if (w >= 10 && w <= 15) return 10;
    if (w >= 44 && w <= 46) return 11;
    if (w == 40) return 12;
    return -1;
}

float weaponRange(int w) {
    switch (w) {
        case 22: case 23: case 24: case 26: case 28: case 32: return 35.0f;
        case 25: case 27: return 40.0f;
        case 29: return 45.0f;
        case 30: return 70.0f;
        case 31: return 90.0f;
        case 33: return 100.0f;
        case 34: return 320.0f;
        case 38: return 75.0f;
    }
    return 0.0f;
}

float weaponDamage(int w) {
    switch (w) {
        case 22: return 8.25f;
        case 23: return 13.2f;
        case 24: return 46.2f;
        case 25: case 26: return 49.5f;
        case 27: return 39.6f;
        case 28: case 32: return 6.6f;
        case 29: return 8.25f;
        case 30: case 31: return 9.9f;
        case 33: return 24.75f;
        case 34: return 41.25f;
        case 38: return 46.2f;
    }
    return 0.0f;
}

bool isBulletWeapon(int w) { return (w >= 22 && w <= 34) || w == 38; }

static bool badFloat(float v, float limit) { return (v != v) || v > limit || v < -limit; }

void WeaponState::onSpawnWeapons(long now) {
    weaponTick = now;
    aimShots = 0; aimHits = 0;
}

void serverGiveWeapon(WeaponState& s, int w, int ammo, long now) {
    int slot = weaponSlot(w);
    if (slot < 0) return;
    if (s.weapons[slot] == w) s.ammo[slot] += ammo;
    else s.ammo[slot] = ammo;
    s.weapons[slot] = w;
    s.weaponTick = now;
}
void serverResetWeapons(WeaponState& s, long now) {
    for (int i = 0; i < 13; i++) { s.weapons[i] = 0; s.ammo[i] = 0; }
    s.weaponTick = now;
}
void serverSetAmmo(WeaponState& s, int w, int ammo, long now) {
    int slot = weaponSlot(w);
    if (slot < 0) return;
    s.ammo[slot] = ammo; s.weaponTick = now;
}
void serverSpawnWeapon(WeaponState& s, int w, int ammo) {
    int slot = weaponSlot(w);
    if (slot >= 0 && w > 0 && ammo > 0) { s.weapons[slot] = w; s.ammo[slot] = ammo; }
}

ShotResult onWeaponShot(WeaponState& s, int w, int ht, int hitid,
                        float fX, float fY, float fZ, bool validPlayerTarget,
                        bool validVehTarget, int ammoNow, float targetDist,
                        long now, const Detector& cfg, bool immune) {
    ShotResult out;
    if (immune) return out;

    // crasher: dados de bala invalidos
    if (cfg.isEnabled(CRASHER)) {
        bool bad = false;
        if (!isBulletWeapon(w) || ht < 0 || ht > 4) bad = true;
        else if (badFloat(fX, 20000.0f) || badFloat(fY, 20000.0f) || badFloat(fZ, 20000.0f)) bad = true;
        else if (ht == 1 && !validPlayerTarget) bad = true;
        else if (ht == 2 && !validVehTarget) bad = true;
        if (bad) { out.r.code = CRASHER; out.r.detail = wfmt("bala invalida (arma %d tipo %d alvo %d)", w, ht, hitid); out.block = true; return out; }
    }
    // arma que nao possui
    if (cfg.isEnabled(WEAPON)) {
        int slot = weaponSlot(w);
        if (slot < 0 || s.weapons[slot] != w) { out.r.code = WEAPON; out.r.detail = wfmt("atirou com arma id %d", w); out.block = true; return out; }
    }
    // rapid fire (minigun 38 ignorada)
    if (cfg.isEnabled(RAPIDFIRE) && w != 38) {
        if (now - s.shotTick >= 1000) { s.shotTick = now; s.shotCount = 0; }
        if (++s.shotCount > cfg.valueOf(RAPIDFIRE)) {
            out.r.code = RAPIDFIRE; out.r.detail = wfmt("%d tiros/s com arma %d", s.shotCount, w);
            s.shotCount = 0; out.block = true; return out;
        }
    }
    // municao infinita
    if (cfg.isEnabled(AMMO)) {
        if (w == s.lastShotWeapon && ammoNow >= s.lastShotAmmo && ammoNow > 0) {
            if (++s.ammoStrikes >= cfg.valueOf(AMMO)) {
                out.r.code = AMMO; out.r.detail = wfmt("%d tiros sem gastar municao (arma %d)", s.ammoStrikes, w);
                s.ammoStrikes = 0;
            }
        } else s.ammoStrikes = 0;
        s.lastShotWeapon = w; s.lastShotAmmo = ammoNow;
        if (out.r.code == AMMO) return out;
    }
    // alcance impossivel
    if ((ht == 1 || ht == 2) && cfg.isEnabled(RANGE) && targetDist >= 0.0f) {
        float range = weaponRange(w);
        if (range > 0.0f && targetDist > range * (1.0f + (float)cfg.valueOf(RANGE) / 100.0f) + 5.0f) {
            out.r.code = RANGE; out.r.detail = wfmt("acertou a %.0f m com arma %d (alcance %.0f m)", targetDist, w, range);
            out.block = true; return out;
        }
    }
    // aimbot: taxa de acerto em jogadores
    if (cfg.isEnabled(AIMBOT) && w != 38 && w != 25 && w != 26 && w != 27) {
        s.aimShots++;
        if (ht == 1) s.aimHits++;
        if (s.aimShots >= 40) {
            int pct = s.aimHits * 100 / s.aimShots;
            if (pct >= cfg.valueOf(AIMBOT)) { out.r.code = AIMBOT; out.r.detail = wfmt("%d%% de acerto em %d tiros", pct, s.aimShots); }
            s.aimShots = 0; s.aimHits = 0;
        }
    }
    // c-bug: registra o tiro para comparar com o agachar
    if (w == 24 || w == 25 || w == 27 || w == 33 || w == 34) s.cbugTick = now;
    return out;
}

CatResult onGiveDamage(int w, float amount, bool active) {
    CatResult r;
    if (active && isBulletWeapon(w)) {
        float maxd = weaponDamage(w);
        if (maxd > 0.0f && (amount > maxd * 1.05f + 0.5f || amount != amount)) {
            r.code = DAMAGE; r.detail = wfmt("%.1f de dano com arma %d (max %.1f)", amount, w, maxd);
        }
    }
    return r;
}

WeaponCheck checkWeaponsPeriodic(WeaponState& s, const int slotW[13], const int slotA[13],
                                 long now, bool checkWeapon, bool checkAmmo, int ammoLimit) {
    WeaponCheck out;
    if (now - s.weaponTick < 2500) return out;
    int bad = -1;
    for (int slot = 0; slot < 13; slot++) {
        int w = slotW[slot], ammo = slotA[slot];
        if (w <= 0 || ammo <= 0 || w == 46) continue;  // 46 = paraquedas
        if (w != s.weapons[slot]) { if (checkWeapon) { bad = w; break; } continue; }
        if (slot >= 2 && slot <= 9) {  // municao de armas de fogo
            if (ammo > s.ammo[slot] + 10) {
                if (checkAmmo) {
                    out.r.code = AMMO;
                    out.r.detail = wfmt("arma %d com %d balas (permitido %d)", w, ammo, s.ammo[slot]);
                    out.ammoFixWeapon = w;
                    out.ammoFixValue = s.ammo[slot];  // a camada chama SetPlayerAmmo(w, valor)
                    s.weaponTick = now;
                    return out;
                } else s.ammo[slot] = ammo;
            } else if (ammo < s.ammo[slot]) s.ammo[slot] = ammo;
        }
    }
    if (bad < 0) return out;
    // remove nao autorizadas, mantem as permitidas
    out.resetWeapons = true;
    for (int slot = 0; slot < 13; slot++) {
        int w = slotW[slot], ammo = slotA[slot];
        if (w > 0 && w == s.weapons[slot] && ammo > 0) out.keep.push_back({ w, ammo });
    }
    s.weaponTick = now;
    out.r.code = WEAPON;
    out.r.detail = wfmt("arma id %d", bad);
    return out;
}

DeathResult onDeath(WeaponState& s, int killerid, bool killerConnected, bool killerIsNpc,
                    bool killerStreamed, long now, const Detector& cfg, bool immune) {
    DeathResult out;
    if (immune || !cfg.isEnabled(FAKEKILL)) return out;
    // flood de mortes
    if (now - s.deathTick > 5000) { s.deathTick = now; s.deathCount = 0; }
    if (++s.deathCount > cfg.valueOf(FAKEKILL)) {
        out.r.code = FAKEKILL; out.r.detail = "flood de mortes"; s.deathCount = 0;
        return out;
    }
    // assassino invalido (killerid >= 0 significa que houve assassino)
    if (killerid >= 0) {
        bool fake = false; std::string det;
        if (!killerConnected) { fake = true; det = wfmt("assassino invalido (%d)", killerid); }
        else if (!killerIsNpc && !killerStreamed) { fake = true; det = wfmt("assassino %d nao estava perto", killerid); }
        if (fake) { out.r.code = FAKEKILL; out.r.detail = det; out.clearKiller = true; }
    }
    return out;
}

CatResult onCrouch(WeaponState& s, bool onFoot, long now, int maxMs, bool active) {
    CatResult r;
    if (active && onFoot && s.cbugTick && now - s.cbugTick < maxMs) {
        r.code = CBUG; r.detail = wfmt("agachou %ld ms apos atirar", now - s.cbugTick);
        s.cbugTick = 0;
    }
    return r;
}

} // namespace ee
