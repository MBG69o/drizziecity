#include "ee_cat_player.h"
#include "ee_detect.h"
#include <cstdio>
#include <cstdarg>

namespace ee {

static std::string fmt(const char* f, ...) {
    char buf[128];
    va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

void PlayerState::onSpawn(long now) {
    allowedHealth = 100.0f;
    allowedArmour = 0.0f;
    healthTick = now;
    armourTick = now;
    spawnTick = now;
    jetpackGranted = false;
    godTick = 0;
    godHits = 0;
}

CatResult checkMoney(PlayerState& p, long clientMoney, long now, bool active) {
    CatResult r;
    if (now - p.moneyTick < 3000) return r;
    long server = p.serverMoney;
    if (clientMoney > server) {
        if (active) {
            r.code = MONEY;
            r.detail = fmt("cliente $%ld / servidor $%ld", clientMoney, server);
            r.corr.type = Correction::SetMoney;
            r.corr.money = server;
            p.moneyTick = now;
        } else {
            p.serverMoney = clientMoney;  // sem protecao: aceita
        }
    } else if (clientMoney < server) {
        p.serverMoney = clientMoney;      // gasto legitimo (cassino, oficina...)
    }
    return r;
}

CatResult checkHealth(PlayerState& p, float h, long now, bool active) {
    CatResult r;
    if (now - p.healthTick < 2500) return r;
    if (h > p.allowedHealth + 1.0f) {
        if (active) {
            r.code = HEALTH;
            r.detail = fmt("vida %.0f (permitido %.0f)", h, p.allowedHealth);
            r.corr.type = Correction::SetHealth;
            r.corr.value = p.allowedHealth;
            p.healthTick = now;
        } else {
            p.allowedHealth = h;
        }
    } else if (h < p.allowedHealth) {
        p.allowedHealth = h;
    }
    return r;
}

CatResult checkArmour(PlayerState& p, float a, long now, bool active) {
    CatResult r;
    if (now - p.armourTick < 2500) return r;
    if (a > p.allowedArmour + 1.0f) {
        if (active) {
            r.code = ARMOUR;
            r.detail = fmt("colete %.0f (permitido %.0f)", a, p.allowedArmour);
            r.corr.type = Correction::SetArmour;
            r.corr.value = p.allowedArmour;
            p.armourTick = now;
        } else {
            p.allowedArmour = a;
        }
    } else if (a < p.allowedArmour) {
        p.allowedArmour = a;
    }
    return r;
}

void godmodeOnDamage(PlayerState& victim, float amount, long now) {
    if (amount <= 0.0f) return;
    if (!victim.godTick) {
        victim.godTick = now;
        victim.godHP = 0.0f;   // definido no primeiro check com hp+armour atual
        victim.godHits = 0;
    }
    victim.godHits++;
}

CatResult checkGodmode(PlayerState& p, float h, float a, long now, bool active, int minHits) {
    CatResult r;
    if (!p.godTick) return r;
    // guarda a vida+colete de referencia na primeira avaliacao apos o 1o dano
    if (p.godHP == 0.0f) p.godHP = h + a;
    if (now - p.godTick >= 2000) {
        if (active && p.godHits >= minHits && (h + a) >= p.godHP - 1.0f
            && p.healthTick < p.godTick && p.armourTick < p.godTick) {
            r.code = GODMODE;
            r.detail = fmt("%d tiros sem perder vida", p.godHits);
        }
        p.godTick = 0;
        p.godHits = 0;
        p.godHP = 0.0f;
    }
    return r;
}

CatResult checkJetpack(PlayerState& p, int specialAction, bool onFoot, bool active) {
    CatResult r;
    if (specialAction == 2) {
        if (!p.jetpackGranted && active) {
            r.code = JETPACK;
            r.detail = "jetpack sem permissao";
            r.corr.type = Correction::ClearJetpack;
        }
    } else if (p.jetpackGranted && onFoot) {
        p.jetpackGranted = false;
    }
    return r;
}

CatResult checkSpawn(PlayerState& p, bool active) {
    CatResult r;
    if (!p.spawnAllowed && active) {
        r.code = FAKESPAWN;
        r.detail = "spawn sem permissao do servidor";
    }
    p.spawnAllowed = false;
    return r;
}

} // namespace ee
