#include "ee_cat_extra.h"
#include "ee_detect.h"
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string xfmt(const char* f, ...) {
    char buf[160]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

bool validNick(const std::string& name) {
    size_t n = name.size();
    if (n < 3 || n > 24) return false;
    for (size_t i = 0; i < n; i++) {
        unsigned char c = (unsigned char)name[i];
        bool ok = (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') ||
                  (c >= '0' && c <= '9') ||
                  c == '[' || c == ']' || c == '(' || c == ')' ||
                  c == '$' || c == '@' || c == '.' || c == '_' || c == '=';
        if (!ok) return false;
    }
    return true;
}

CatResult checkNickname(const std::string& name, bool active) {
    CatResult r;
    if (active && !validNick(name)) {
        r.code = NICKNAME;
        r.detail = xfmt("nick invalido: \"%s\"", name.substr(0, 40).c_str());
    }
    return r;
}

CatResult checkAnim(int animIndex, bool active) {
    CatResult r;
    if (active && (animIndex < 0 || animIndex > 1702)) {
        r.code = ANIMCRASH;
        r.detail = xfmt("animacao %d fora da faixa (0-1702)", animIndex);
    }
    return r;
}

CatResult checkSkin(int skinId, bool active) {
    CatResult r;
    if (active && (skinId < 0 || skinId > 311 || skinId == 74)) {
        r.code = SKINHACK;
        r.detail = xfmt("skin invalido %d", skinId);
    }
    return r;
}

static CatResult floodWindow(CountState& s, long now, int limit, bool active,
                             long windowMs, int code, const char* what) {
    CatResult r;
    if (!active) return r;
    if (now - s.tick > windowMs) { s.tick = now; s.count = 0; }
    if (++s.count > limit) {
        s.count = 0;
        r.code = code;
        r.detail = what;
    }
    return r;
}

CatResult checkObjectSpam(CountState& s, long now, int limit, bool active) {
    return floodWindow(s, now, limit, active, 5000, OBJSPAM, "criou objetos em excesso");
}

CatResult checkPmFlood(CountState& s, long now, int limit, bool active) {
    return floodWindow(s, now, limit, active, 5000, PMFLOOD, "mensagens privadas em excesso");
}

CatResult checkHornSpam(CountState& s, long now, int limit, bool active) {
    return floodWindow(s, now, limit, active, 3000, HORNSPAM, "buzina em excesso");
}

CatResult checkWorldJump(int oldInterior, int newInterior,
                         int oldWorld, int newWorld,
                         bool serverChanged, bool active) {
    CatResult r;
    if (!active || serverChanged) return r;
    if (newInterior != oldInterior) {
        r.code = WORLDJUMP;
        r.detail = xfmt("mudou de interior %d para %d sem o servidor", oldInterior, newInterior);
    } else if (newWorld != oldWorld) {
        r.code = WORLDJUMP;
        r.detail = xfmt("mudou de virtual world %d para %d sem o servidor", oldWorld, newWorld);
    }
    return r;
}

CatResult checkFreezeBypass(bool frozen, bool moved, bool active) {
    CatResult r;
    if (active && frozen && moved) {
        r.code = FREEZEBYPASS;
        r.detail = "moveu-se estando congelado pelo servidor";
    }
    return r;
}

} // namespace ee
