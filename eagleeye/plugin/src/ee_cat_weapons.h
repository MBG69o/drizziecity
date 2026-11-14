// EagleEYE plugin - categoria ARMAS E COMBATE.
// armas, fake kill, rapid fire, alcance, dano, municao, c-bug, aimbot.
// Portado do include v2.2.0. Funcoes puras testaveis; a camada sampgdk
// fornece os valores (GetPlayerWeaponData, GetPlayerAmmo, distancias...).
#ifndef EE_CAT_WEAPONS_H
#define EE_CAT_WEAPONS_H

#include <string>
#include <vector>
#include "ee_cat_player.h"   // Correction, CatResult

namespace ee {

int weaponSlot(int weaponid);
float weaponRange(int weaponid);
float weaponDamage(int weaponid);
bool isBulletWeapon(int weaponid);

struct WeaponState {
    int weapons[13] = {0};   // armas dadas pelo servidor (por slot)
    int ammo[13] = {0};
    long weaponTick = 0;
    // rapid fire
    long shotTick = 0;
    int shotCount = 0;
    // municao
    int ammoStrikes = 0;
    int lastShotAmmo = 0;
    int lastShotWeapon = 0;
    // aimbot
    int aimShots = 0;
    int aimHits = 0;
    // c-bug
    long cbugTick = 0;
    // fake kill
    long deathTick = 0;
    int deathCount = 0;

    void onSpawnWeapons(long now);
};

// hooks dos natives do gamemode
void serverGiveWeapon(WeaponState& s, int weaponid, int ammo, long now);
void serverResetWeapons(WeaponState& s, long now);
void serverSetAmmo(WeaponState& s, int weaponid, int ammo, long now);
void serverSpawnWeapon(WeaponState& s, int weaponid, int ammo);  // da classe/SetSpawnInfo

// OnPlayerWeaponShot. targetDist = distancia do atirador ao alvo (-1 se n/a).
// Preenche r com a PRIMEIRA deteccao; block=true => anular o tiro (return 0).
struct ShotResult { CatResult r; bool block = false; };
ShotResult onWeaponShot(WeaponState& s, int weaponid, int hittype, int hitid,
                        float fX, float fY, float fZ, bool validPlayerTarget,
                        bool validVehTarget, int ammoNow, float targetDist,
                        long now, const struct Detector& cfg, bool immune);

// OnPlayerGiveDamage: dano acima do maximo da arma.
CatResult onGiveDamage(int weaponid, float amount, bool active);

// Verificacao periodica de armas/municao. slotW/slotA = o que o jogador TEM
// agora (lido por slot). Se achar arma nao autorizada, devolve resetAndKeep
// (a camada reseta e devolve as mantidas).
struct WeaponCheck {
    CatResult r;
    bool resetWeapons = false;
    std::vector<std::pair<int, int>> keep;  // (weaponid, ammo) a devolver
    int ammoFixWeapon = -1;                 // corrige municao desta arma...
    int ammoFixValue = 0;                   // ...para este valor (SetPlayerAmmo)
};
WeaponCheck checkWeaponsPeriodic(WeaponState& s, const int slotW[13], const int slotA[13],
                                 long now, bool checkWeapon, bool checkAmmo, int ammoLimit);

// OnPlayerDeath (fake kill). Retorna clearKiller=true se a kill for falsa.
struct DeathResult { CatResult r; bool clearKiller = false; };
DeathResult onDeath(WeaponState& s, int killerid, bool killerConnected, bool killerIsNpc,
                    bool killerStreamed, long now, const struct Detector& cfg, bool immune);

// OnPlayerKeyStateChange: agachou logo apos atirar (c-bug).
CatResult onCrouch(WeaponState& s, bool onFoot, long now, int maxMs, bool active);

} // namespace ee

#endif // EE_CAT_WEAPONS_H
