// EagleEYE plugin - categoria JOGADOR (dinheiro, vida, colete, jetpack,
// godmode, spawn falso). Portado do include v2.2.0.
//
// A logica aqui e pura e testavel: recebe os valores ja lidos do jogo e
// devolve o que fazer (detectar + corrigir). A camada sampgdk (ee_plugin/
// ee_detections) chama GetPlayerMoney/SetPlayerHealth/etc. e os hooks dos
// natives que o gamemode usa para dar dinheiro/vida/arma.
#ifndef EE_CAT_PLAYER_H
#define EE_CAT_PLAYER_H

#include <string>

namespace ee {

// Correcao que a camada de jogo deve aplicar junto com a deteccao.
struct Correction {
    enum Type { None, SetMoney, SetHealth, SetArmour, ClearJetpack } type = None;
    long money = 0;
    float value = 0.0f;
};

struct CatResult {
    int code = -1;            // Prot detectado, ou -1
    std::string detail;
    Correction corr;
};

// Estado por jogador para as verificacoes de JOGADOR.
struct PlayerState {
    // dinheiro
    long serverMoney = 0;
    long moneyTick = 0;
    // vida / colete
    float allowedHealth = 100.0f;
    float allowedArmour = 0.0f;
    long healthTick = 0;
    long armourTick = 0;
    long spawnTick = 0;
    // jetpack
    bool jetpackGranted = false;
    // spawn
    bool spawnAllowed = false;
    // godmode
    long godTick = 0;
    int godHits = 0;
    float godHP = 0.0f;

    void onSpawn(long now);
};

// --- eventos que o gamemode gera (via hooks dos natives) -------------------
inline void serverGiveMoney(PlayerState& p, long amount, long now) { p.serverMoney += amount; p.moneyTick = now; }
inline void serverResetMoney(PlayerState& p, long now) { p.serverMoney = 0; p.moneyTick = now; }
inline void serverSetHealth(PlayerState& p, float h, long now) { p.allowedHealth = h; p.healthTick = now; }
inline void serverSetArmour(PlayerState& p, float a, long now) { p.allowedArmour = a; p.armourTick = now; }
inline void serverGrantJetpack(PlayerState& p) { p.jetpackGranted = true; }
inline void serverAllowSpawn(PlayerState& p) { p.spawnAllowed = true; }

// --- verificacoes periodicas (active = protecao ligada E jogador nao imune) -
// Dinheiro: compara o dinheiro do cliente com o do servidor.
CatResult checkMoney(PlayerState& p, long clientMoney, long now, bool active);

// Vida e colete: acima do permitido -> corrige e detecta.
CatResult checkHealth(PlayerState& p, float curHealth, long now, bool active);
CatResult checkArmour(PlayerState& p, float curArmour, long now, bool active);

// Godmode: levou tiros (acumulados por onGiveDamage) e a vida nao caiu.
CatResult checkGodmode(PlayerState& p, float curHealth, float curArmour, long now, bool active, int minHits);

// Jetpack: specialAction 2 sem o servidor ter dado. onFoot = estado a pe.
CatResult checkJetpack(PlayerState& p, int specialAction, bool onFoot, bool active);

// Dano para o godmode: registra no ESTADO DA VITIMA.
void godmodeOnDamage(PlayerState& victim, float amount, long now);

// Spawn falso (OnPlayerSpawn): consome spawnAllowed. Retorna FAKESPAWN se
// o spawn nao foi autorizado pelo servidor.
CatResult checkSpawn(PlayerState& p, bool active);

} // namespace ee

#endif // EE_CAT_PLAYER_H
