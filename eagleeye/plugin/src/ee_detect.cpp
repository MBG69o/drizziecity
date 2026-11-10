#include "ee_detect.h"
#include <cstdlib>
#include <cstring>

namespace ee {

static std::string lower(std::string s) {
    for (char& c : s) if (c >= 'A' && c <= 'Z') c += 32;
    return s;
}

// quebra uma linha em tokens separados por espaco
static std::vector<std::string> tokenize(const std::string& line) {
    std::vector<std::string> out;
    size_t i = 0, n = line.size();
    while (i < n) {
        while (i < n && (line[i] == ' ' || line[i] == '\t' || line[i] == '\r')) i++;
        size_t st = i;
        while (i < n && line[i] != ' ' && line[i] != '\t' && line[i] != '\r') i++;
        if (i > st) out.push_back(line.substr(st, i - st));
    }
    return out;
}

int Detector::applyConfig(const std::string& body, std::vector<Command>& outCommands) {
    if (body.find("END") == std::string::npos) return -3;  // truncada
    if (body.compare(0, 4, "WAIT") == 0) return -1;
    if (body.compare(0, 9, "NOLICENSE") == 0) return -2;

    bool full = false;
    size_t pos = 0, len = body.size();
    while (pos < len) {
        size_t end = body.find('\n', pos);
        if (end == std::string::npos) end = len;
        std::string line = body.substr(pos, end - pos);
        pos = end + 1;
        std::vector<std::string> t = tokenize(line);
        if (t.empty()) continue;

        if (t[0] == "EAGLE" && t.size() >= 4) {
            version = atoi(t[1].c_str());
            global = atoi(t[2].c_str()) != 0;
            int p = atoi(t[3].c_str());
            if (p >= 3 && p <= 300) pollSeconds = p;
            whitelist.clear();
            full = true;
        } else if (t[0] == "T" && t.size() >= 2) {
            newToken = t[1];
        } else if (t[0] == "P" && full && t.size() >= 6) {
            int c = atoi(t[1].c_str());
            if (c < 0 || c >= PROT_COUNT) continue;
            prot[c].enabled = atoi(t[2].c_str()) != 0;
            int a = atoi(t[3].c_str()); prot[c].action = a < 0 ? 0 : (a > 2 ? 2 : a);
            int tol = atoi(t[4].c_str()); prot[c].tolerance = tol < 1 ? 1 : (tol > 100 ? 100 : tol);
            prot[c].value = atoi(t[5].c_str());
        } else if (t[0] == "W" && full && t.size() >= 2) {
            whitelist.push_back(t[1]);
        } else if (t[0] == "C" && t.size() >= 4) {
            Command cmd;
            cmd.id = atoi(t[1].c_str());
            cmd.type = t[2];
            cmd.arg = t[3];
            outCommands.push_back(cmd);
        } else if (t[0] == "OK" && !full) {
            // "OK" sozinho: sem mudanca de config
        }
    }
    return full ? 1 : 0;
}

bool Detector::isWhitelisted(const std::string& name) const {
    std::string n = lower(name);
    for (const std::string& w : whitelist) if (lower(w) == n) return true;
    return false;
}

int Detector::detect(int playerId, const std::string& name, const std::string& ip,
                     int code, const std::string& detail, long nowMs, bool immune) {
    if (!global || code < 0 || code >= PROT_COUNT || !prot[code].enabled) return -1;
    if (immune || isWhitelisted(name)) return -1;

    Hit& h = hits_[playerId][code];
    if (nowMs - h.tick > EE_HIT_WINDOW_MS) h.count = 0;
    h.tick = nowMs;
    int hits = ++h.count;

    int action = prot[code].action;
    int tol = prot[code].tolerance < 1 ? 1 : prot[code].tolerance;

    if (action != WARN && hits >= tol) {
        reports_.push_back({ playerId, name, ip, code, action, hits, tol, detail });
        return action;
    }
    if (nowMs - h.reportTick >= EE_REPORT_COOLDOWN_MS) {
        h.reportTick = nowMs;
        reports_.push_back({ playerId, name, ip, code, WARN, hits, tol, detail });
    }
    return WARN;
}

std::vector<Report> Detector::drainReports() {
    std::vector<Report> out;
    out.swap(reports_);
    return out;
}

void Detector::resetPlayer(int playerId) {
    hits_.erase(playerId);
}

} // namespace ee
