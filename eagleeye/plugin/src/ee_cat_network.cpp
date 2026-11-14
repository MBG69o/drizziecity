#include "ee_cat_network.h"
#include "ee_detect.h"
#include <cstdarg>
#include <cstdio>

namespace ee {

static std::string nfmt(const char* f, ...) {
    char buf[160]; va_list a; va_start(a, f); vsnprintf(buf, sizeof buf, f, a); va_end(a);
    return std::string(buf);
}

FloodResult checkFlood(FloodState& s, long now, int limit, bool active) {
    FloodResult out;
    if (!active) return out;
    if (now - s.tick > 3000) { s.tick = now; s.count = 0; }
    if (++s.count > limit) {
        out.r.code = FLOOD; out.r.detail = "mensagens/comandos em excesso"; out.block = true;
    }
    return out;
}

bool hasAdvert(const std::string& text) {
    int groups = 0, digits = 0, value = 0, first = 0;
    size_t n = text.size();
    for (size_t i = 0; ; i++) {
        int c = (i < n) ? (unsigned char)text[i] : 0;
        if (c >= '0' && c <= '9') {
            if (digits == 0) first = c;
            digits++;
            value = value * 10 + (c - '0');
            continue;
        }
        bool octet = (digits >= 1 && digits <= 3) && value <= 255 && !(digits > 1 && first == '0');
        if (groups >= 3 && octet) return true;
        if ((c == '.' || c == ',' || c == '_' || c == '-') && octet) groups++;
        else groups = 0;
        digits = 0;
        value = 0;
        if (c == ':') {
            int d = 0;
            while (i + 1 + d < n && text[i + 1 + d] >= '0' && text[i + 1 + d] <= '9') d++;
            if (d >= 4 && d <= 5) return true;
        }
        if (c == 0) break;
    }
    return false;
}

AdvertResult checkAdvert(const std::string& text, bool active) {
    AdvertResult out;
    if (active && hasAdvert(text)) {
        out.r.code = ADVERT;
        out.r.detail = text.substr(0, 80);
        out.block = true;
    }
    return out;
}

CatResult checkPing(PingState& s, int ping, int limit, bool active) {
    CatResult r;
    if (!active) { s.strikes = 0; return r; }
    if (ping > limit) {
        if (++s.strikes >= 5) {
            s.strikes = 0;
            r.code = PING; r.detail = nfmt("%d ms (limite %d)", ping, limit);
        }
    } else s.strikes = 0;
    return r;
}

CatResult checkIpFlood(int sameIpCount, int limit, bool active) {
    CatResult r;
    if (active && sameIpCount >= limit) {
        r.code = IPFLOOD; r.detail = nfmt("%d conexoes do mesmo IP", sameIpCount);
    }
    return r;
}

CatResult checkReconnect(int recentCount, int limit, bool active) {
    CatResult r;
    if (active && recentCount > limit) {
        r.code = RECONNECT; r.detail = nfmt("%d conexoes em 30s do mesmo IP", recentCount);
    }
    return r;
}

CatResult checkFakeNpc(const std::string& ip, const std::string& bindIp, bool active) {
    CatResult r;
    if (active && ip != "127.0.0.1" && (bindIp.empty() || ip != bindIp)) {
        r.code = FAKENPC; r.detail = nfmt("NPC conectando do IP %s", ip.c_str());
    }
    return r;
}

CatResult checkDialog(int dialogId, int expectedId, bool active) {
    CatResult r;
    if (active && dialogId != expectedId) {
        r.code = DIALOG; r.detail = nfmt("dialog %d (esperado %d)", dialogId, expectedId);
    }
    return r;
}

RconGuard::Result RconGuard::onAttempt(const std::string& ip, bool success, long now, int limit, bool active) {
    Result out;
    out.ip = ip;
    if (success) { ips_.erase(ip); return out; }
    if (!active) return out;
    Rec& rec = ips_[ip];
    if (now - rec.tick > 600000) rec.count = 0;  // 10 min
    rec.tick = now;
    if (++rec.count >= limit) {
        out.hit = true;
        out.blockIp = true;
        out.r.code = RCON;
        out.r.detail = nfmt("%d senhas RCON erradas do IP %s (IP bloqueado 1h)", rec.count, ip.c_str());
        ips_.erase(ip);
    }
    return out;
}

} // namespace ee
