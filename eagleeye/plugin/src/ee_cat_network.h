// EagleEYE plugin - categoria REDE, CHAT E SERVIDOR.
// flood, divulgacao, dialog, ping, conexoes por IP, flood de reconexao,
// RCON brute force, NPC falso. Portado do v2.2.0.
#ifndef EE_CAT_NETWORK_H
#define EE_CAT_NETWORK_H

#include <map>
#include <string>
#include "ee_cat_player.h"   // CatResult

namespace ee {

struct FloodState { long tick = 0; int count = 0; };
struct PingState { int strikes = 0; };

// Flood de chat/comandos. block=true => bloquear a mensagem.
struct FloodResult { CatResult r; bool block = false; };
FloodResult checkFlood(FloodState& s, long now, int limit, bool active);

// Divulgacao: IP ou porta de outro servidor no texto.
bool hasAdvert(const std::string& text);
struct AdvertResult { CatResult r; bool block = false; };
AdvertResult checkAdvert(const std::string& text, bool active);

// Ping alto por 5 verificacoes seguidas.
CatResult checkPing(PingState& s, int ping, int limit, bool active);

// Conexoes simultaneas do mesmo IP (count ja inclui o novo jogador).
CatResult checkIpFlood(int sameIpCount, int limit, bool active);

// Flood de reconexao: conexoes do mesmo IP em 30s (count inclui a atual).
CatResult checkReconnect(int recentCount, int limit, bool active);

// NPC conectando de um IP que nao e o do proprio servidor.
CatResult checkFakeNpc(const std::string& ip, const std::string& bindIp, bool active);

// Resposta de dialog que nao foi aberto (so SA-MP; no open.mp e nativo).
CatResult checkDialog(int dialogId, int expectedId, bool active);

// RCON brute force: conta senhas erradas por IP; bloqueia o IP ao estourar.
class RconGuard {
public:
    struct Result { CatResult r; bool blockIp = false; std::string ip; bool hit = false; };
    // success=true limpa o contador do IP.
    Result onAttempt(const std::string& ip, bool success, long now, int limit, bool active);
private:
    struct Rec { int count = 0; long tick = 0; };
    std::map<std::string, Rec> ips_;
};

} // namespace ee

#endif // EE_CAT_NETWORK_H
