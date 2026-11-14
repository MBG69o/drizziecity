#include "ee_cat_extra2.h"
#include "ee_detect.h"
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string x2fmt(const char* f, ...) {
    char buf[128]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

bool validSpecialAction(int a) {
    return (a >= 0 && a <= 13) || (a >= 20 && a <= 25) || a == 68;
}

CatResult checkSpecialAction(int action, bool active) {
    CatResult r;
    if (active && !validSpecialAction(action)) {
        r.code = ACTIONHACK;
        r.detail = x2fmt("acao especial invalida: %d", action);
    }
    return r;
}

CatResult checkWeaponSwitch(WeaponSwitchState& s, int weapon, long now, int minMs, bool active) {
    CatResult r;
    if (weapon == s.last) return r;      // nao trocou
    long dt = now - s.tick;
    int prev = s.last;
    s.last = weapon;
    s.tick = now;
    if (prev < 0) return r;              // primeira leitura
    if (!active) { s.strikes = 0; return r; }
    if (dt >= 0 && dt < minMs) {
        if (++s.strikes >= 4) {
            s.strikes = 0;
            r.code = WEAPONSWITCH;
            r.detail = x2fmt("trocou de arma em %ld ms (limite %d)", dt, minMs);
        }
    } else if (s.strikes > 0) {
        s.strikes--;
    }
    return r;
}

bool hasChatCrash(const std::string& text) {
    int colors = 0, controls = 0;
    size_t n = text.size();
    for (size_t i = 0; i < n; i++) {
        unsigned char c = (unsigned char)text[i];
        // caracteres de controle (menos TAB) nao aparecem em texto normal
        if (c < 32 && c != '\t') controls++;
        if (c == '~') colors++;                       // codigos de cor do GTA (~r~, ~k~...)
        if (c == '{' && i + 7 <= n && text[i + 7] == '}') colors++;  // {RRGGBB}
    }
    return controls > 0 || colors > 12 || n > 200;
}

CatResult checkChatCrash(const std::string& text, bool active) {
    CatResult r;
    if (active && hasChatCrash(text)) {
        r.code = CHATCRASH;
        r.detail = "texto com caracteres/cores que travam o cliente";
    }
    return r;
}

CatResult checkAttachment(int index, int model, int bone, bool active) {
    CatResult r;
    if (active && (index < 0 || index > 9 || model <= 0 || bone < 1 || bone > 18)) {
        r.code = ATTACHHACK;
        r.detail = x2fmt("objeto anexado invalido (slot %d, modelo %d, bone %d)", index, model, bone);
    }
    return r;
}

CatResult checkCrouchSpam(CountState& s, long now, int limit, bool active) {
    CatResult r;
    if (!active) return r;
    if (now - s.tick > 3000) { s.tick = now; s.count = 0; }
    if (++s.count > limit) {
        s.count = 0;
        r.code = CROUCHSPAM;
        r.detail = "agachou/levantou em excesso";
    }
    return r;
}

} // namespace ee
