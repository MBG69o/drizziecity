// EagleEYE plugin - infraestrutura de deteccao (independente do SDK).
// O motor (config + tolerancia + fila de relatorios) e testavel isolado;
// as categorias (ee_cat_*.cpp) alimentam este motor com numeros ja lidos
// do jogo pela camada sampgdk.
#ifndef EE_DETECT_H
#define EE_DETECT_H

#include <array>
#include <cstdint>
#include <map>
#include <string>
#include <vector>

namespace ee {

// IDs iguais aos de bot/src/protections.js e do include v2.2.0.
enum Prot {
    MONEY = 0, HEALTH, ARMOUR, WEAPON, SPEED_FOOT, SPEED_VEH, TELEPORT, AIRBREAK,
    JETPACK, VEH_HEALTH, FAKEKILL, RAPIDFIRE, FLOOD, CARWARP, VEH_TROLL, PING,
    IPFLOOD, TUNING, DIALOG, GODMODE, RANGE, DAMAGE, AMMO, CRASHER, FAKESPAWN,
    ADVERT, VEH_SPAM, FAKEPICKUP, FAKECP, CBUG, RCON, FAKENPC, RECONNECT, AIMBOT,
    // categoria EXTRA (v2.3.0)
    NICKNAME, ANIMCRASH, SKINHACK, OBJSPAM, PMFLOOD, HORNSPAM, WORLDJUMP, FREEZEBYPASS,
    PROT_COUNT
};

enum Action { WARN = 0, KICK = 1, BAN = 2 };

struct ProtConfig {
    bool enabled = false;
    int action = KICK;
    int tolerance = 1;
    int value = 0;
};

struct Report {
    int playerId;
    std::string name;
    std::string ip;
    int code;
    int action;
    int hits;
    int tolerance;
    std::string detail;
};

// Comando enviado pelo bot (desbanir, kick, pm, freeze, aviso, adm, plist).
struct Command {
    int id;
    std::string type;
    std::string arg;
};

static const long EE_HIT_WINDOW_MS = 60000;
static const long EE_REPORT_COOLDOWN_MS = 5000;

class Detector {
public:
    bool global = true;
    int version = -1;
    int pollSeconds = 10;
    std::array<ProtConfig, PROT_COUNT> prot;
    std::vector<std::string> whitelist;
    std::string newToken;   // linha "T": o bot trocou o token

    // Interpreta a resposta do bot. Retorna:
    //   1 = configuracao completa aplicada
    //   0 = "OK" (sem mudanca)  |  -1 = "WAIT"  |  -2 = "NOLICENSE"  |  -3 = invalida
    int applyConfig(const std::string& body, std::vector<Command>& outCommands);

    bool isEnabled(int code) const {
        return global && code >= 0 && code < PROT_COUNT && prot[code].enabled;
    }
    int valueOf(int code) const { return (code >= 0 && code < PROT_COUNT) ? prot[code].value : 0; }

    bool isWhitelisted(const std::string& name) const;

    // Registra uma deteccao. immune = jogador imune (gamemode/whitelist).
    // Retorna a acao a aplicar: -1 nenhuma, 0 aviso, 1 kick, 2 ban.
    int detect(int playerId, const std::string& name, const std::string& ip,
               int code, const std::string& detail, long nowMs, bool immune);

    std::vector<Report> drainReports();
    void resetPlayer(int playerId);

private:
    struct Hit { long tick = 0; int count = 0; long reportTick = 0; };
    std::map<int, std::array<Hit, PROT_COUNT>> hits_;
    std::vector<Report> reports_;
};

} // namespace ee

#endif // EE_DETECT_H
