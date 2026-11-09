/*
 *  ===========================================================================
 *   EagleEYE Anti-Cheat - include para FILTERSCRIPTS
 *  ===========================================================================
 *
 *   Faz com que dinheiro, vida, colete, armas, teleportes, jetpack, reparos
 *   e dialogs feitos pelo filterscript sejam registrados pelo anti-cheat do
 *   gamemode (evita falsos positivos).
 *
 *   USO (no topo do filterscript):
 *
 *       #define FILTERSCRIPT
 *       #include <open.mp>          // ou <a_samp>
 *       #include <eagleeye_fs>
 *
 *   Requer que o gamemode use <eagleeye>. Se o gamemode não tiver o
 *   anti-cheat carregado, as funções caem para os natives normais.
 */

#if defined _eagleeye_fs_included
	#endinput
#endif
#define _eagleeye_fs_included

#if !defined _INC_a_samp && !defined _INC_open_mp && !defined _samp_included
	#error "[EagleEYE] Inclua <a_samp> ou <open.mp> ANTES de <eagleeye_fs>."
#endif

#if defined _eagleeye_included
	#error "[EagleEYE] Use <eagleeye_fs> apenas em filterscripts (o gamemode usa <eagleeye>)."
#endif

#if defined _INC_open_mp
	#define EEFS_OMP        (1)
	#define EEFS_T_WEAPON   WEAPON
	#define EEFS_T_SACTION  SPECIAL_ACTION
	#define EEFS_T_BOOL     bool
#else
	#define EEFS_OMP        (0)
	#define EEFS_T_WEAPON   _
	#define EEFS_T_SACTION  _
	#define EEFS_T_BOOL     _
#endif

#define EEFS_ON() (existproperty(0, "EAGLEEYE_ON"))

// ---------- dinheiro
stock EEFS_T_BOOL:EEFS_GivePlayerMoney(playerid, money)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_GiveMoney", "ii", playerid, money);
	return GivePlayerMoney(playerid, money);
}
#if defined _ALS_GivePlayerMoney
	#undef GivePlayerMoney
#else
	#define _ALS_GivePlayerMoney
#endif
#define GivePlayerMoney EEFS_GivePlayerMoney

stock EEFS_T_BOOL:EEFS_ResetPlayerMoney(playerid)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_ResetMoney", "i", playerid);
	return ResetPlayerMoney(playerid);
}
#if defined _ALS_ResetPlayerMoney
	#undef ResetPlayerMoney
#else
	#define _ALS_ResetPlayerMoney
#endif
#define ResetPlayerMoney EEFS_ResetPlayerMoney

stock EEFS_GetPlayerMoney(playerid)
{
	if (EEFS_ON()) return CallRemoteFunction("EE_R_GetMoney", "i", playerid);
	return GetPlayerMoney(playerid);
}
#if defined _ALS_GetPlayerMoney
	#undef GetPlayerMoney
#else
	#define _ALS_GetPlayerMoney
#endif
#define GetPlayerMoney EEFS_GetPlayerMoney

// ---------- vida / colete
stock EEFS_T_BOOL:EEFS_SetPlayerHealth(playerid, Float:health)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_SetHealth", "if", playerid, health);
	return SetPlayerHealth(playerid, health);
}
#if defined _ALS_SetPlayerHealth
	#undef SetPlayerHealth
#else
	#define _ALS_SetPlayerHealth
#endif
#define SetPlayerHealth EEFS_SetPlayerHealth

stock EEFS_T_BOOL:EEFS_SetPlayerArmour(playerid, Float:armour)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_SetArmour", "if", playerid, armour);
	return SetPlayerArmour(playerid, armour);
}
#if defined _ALS_SetPlayerArmour
	#undef SetPlayerArmour
#else
	#define _ALS_SetPlayerArmour
#endif
#define SetPlayerArmour EEFS_SetPlayerArmour

// ---------- armas
stock EEFS_T_BOOL:EEFS_GivePlayerWeapon(playerid, EEFS_T_WEAPON:weaponid, ammo)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_GiveWeapon", "iii", playerid, _:weaponid, ammo);
	return GivePlayerWeapon(playerid, weaponid, ammo);
}
#if defined _ALS_GivePlayerWeapon
	#undef GivePlayerWeapon
#else
	#define _ALS_GivePlayerWeapon
#endif
#define GivePlayerWeapon EEFS_GivePlayerWeapon

stock EEFS_T_BOOL:EEFS_ResetPlayerWeapons(playerid)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_ResetWeapons", "i", playerid);
	return ResetPlayerWeapons(playerid);
}
#if defined _ALS_ResetPlayerWeapons
	#undef ResetPlayerWeapons
#else
	#define _ALS_ResetPlayerWeapons
#endif
#define ResetPlayerWeapons EEFS_ResetPlayerWeapons

// ---------- posição
stock EEFS_T_BOOL:EEFS_SetPlayerPos(playerid, Float:x, Float:y, Float:z)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_PosImmunity", "ii", playerid, 3000);
	return SetPlayerPos(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPos
	#undef SetPlayerPos
#else
	#define _ALS_SetPlayerPos
#endif
#define SetPlayerPos EEFS_SetPlayerPos

stock EEFS_T_BOOL:EEFS_SetPlayerPosFindZ(playerid, Float:x, Float:y, Float:z)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_PosImmunity", "ii", playerid, 3000);
	return SetPlayerPosFindZ(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPosFindZ
	#undef SetPlayerPosFindZ
#else
	#define _ALS_SetPlayerPosFindZ
#endif
#define SetPlayerPosFindZ EEFS_SetPlayerPosFindZ

stock EEFS_T_BOOL:EEFS_SetPlayerVelocity(playerid, Float:x, Float:y, Float:z)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_PosImmunity", "ii", playerid, 4000);
	return SetPlayerVelocity(playerid, x, y, z);
}
#if defined _ALS_SetPlayerVelocity
	#undef SetPlayerVelocity
#else
	#define _ALS_SetPlayerVelocity
#endif
#define SetPlayerVelocity EEFS_SetPlayerVelocity

stock EEFS_T_BOOL:EEFS_PutPlayerInVehicle(playerid, vehicleid, seatid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_PosImmunity", "ii", playerid, 3000);
	return PutPlayerInVehicle(playerid, vehicleid, seatid);
}
#if defined _ALS_PutPlayerInVehicle
	#undef PutPlayerInVehicle
#else
	#define _ALS_PutPlayerInVehicle
#endif
#define PutPlayerInVehicle EEFS_PutPlayerInVehicle

stock EEFS_T_BOOL:EEFS_SetVehiclePos(vehicleid, Float:x, Float:y, Float:z)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_VehImmunity", "if", vehicleid, -1.0);
	return SetVehiclePos(vehicleid, x, y, z);
}
#if defined _ALS_SetVehiclePos
	#undef SetVehiclePos
#else
	#define _ALS_SetVehiclePos
#endif
#define SetVehiclePos EEFS_SetVehiclePos

stock EEFS_T_BOOL:EEFS_SetVehicleVelocity(vehicleid, Float:x, Float:y, Float:z)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_VehImmunity", "if", vehicleid, -1.0);
	return SetVehicleVelocity(vehicleid, x, y, z);
}
#if defined _ALS_SetVehicleVelocity
	#undef SetVehicleVelocity
#else
	#define _ALS_SetVehicleVelocity
#endif
#define SetVehicleVelocity EEFS_SetVehicleVelocity

// ---------- veículos
stock EEFS_T_BOOL:EEFS_SetVehicleHealth(vehicleid, Float:health)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_VehImmunity", "if", vehicleid, health);
	return SetVehicleHealth(vehicleid, health);
}
#if defined _ALS_SetVehicleHealth
	#undef SetVehicleHealth
#else
	#define _ALS_SetVehicleHealth
#endif
#define SetVehicleHealth EEFS_SetVehicleHealth

stock EEFS_T_BOOL:EEFS_RepairVehicle(vehicleid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_VehImmunity", "if", vehicleid, 1000.0);
	return RepairVehicle(vehicleid);
}
#if defined _ALS_RepairVehicle
	#undef RepairVehicle
#else
	#define _ALS_RepairVehicle
#endif
#define RepairVehicle EEFS_RepairVehicle

// ---------- jetpack
stock EEFS_T_BOOL:EEFS_SetPlayerSpecialAction(playerid, EEFS_T_SACTION:actionid)
{
	if (_:actionid == 2 && EEFS_ON()) CallRemoteFunction("EE_R_Jetpack", "i", playerid);
	return SetPlayerSpecialAction(playerid, actionid);
}
#if defined _ALS_SetPlayerSpecialAction
	#undef SetPlayerSpecialAction
#else
	#define _ALS_SetPlayerSpecialAction
#endif
#define SetPlayerSpecialAction EEFS_SetPlayerSpecialAction

// ---------- munição
stock EEFS_T_BOOL:EEFS_SetPlayerAmmo(playerid, EEFS_T_WEAPON:weaponid, ammo)
{
	if (EEFS_ON()) return EEFS_T_BOOL:CallRemoteFunction("EE_R_SetAmmo", "iii", playerid, _:weaponid, ammo);
	return SetPlayerAmmo(playerid, weaponid, ammo);
}
#if defined _ALS_SetPlayerAmmo
	#undef SetPlayerAmmo
#else
	#define _ALS_SetPlayerAmmo
#endif
#define SetPlayerAmmo EEFS_SetPlayerAmmo

// ---------- spawn
stock EEFS_T_BOOL:EEFS_SpawnPlayer(playerid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Spawn", "i", playerid);
	return SpawnPlayer(playerid);
}
#if defined _ALS_SpawnPlayer
	#undef SpawnPlayer
#else
	#define _ALS_SpawnPlayer
#endif
#define SpawnPlayer EEFS_SpawnPlayer

stock EEFS_T_BOOL:EEFS_TogglePlayerSpectating(playerid, EEFS_T_BOOL:toggle)
{
	if (EEFS_ON())
	{
		CallRemoteFunction("EE_R_PosImmunity", "ii", playerid, 5000);
		if (!toggle) CallRemoteFunction("EE_R_Spawn", "i", playerid);
	}
	return TogglePlayerSpectating(playerid, toggle);
}
#if defined _ALS_TogglePlayerSpectating
	#undef TogglePlayerSpectating
#else
	#define _ALS_TogglePlayerSpectating
#endif
#define TogglePlayerSpectating EEFS_TogglePlayerSpectating

// ---------- checkpoints
#if defined _INC_open_mp
	#define EEFS_T_CPTYPE CP_TYPE
#else
	#define EEFS_T_CPTYPE _
#endif

stock EEFS_T_BOOL:EEFS_SetPlayerCheckpoint(playerid, Float:x, Float:y, Float:z, Float:size)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Checkpoint", "iiffff", playerid, 0, x, y, z, size);
	return SetPlayerCheckpoint(playerid, x, y, z, size);
}
#if defined _ALS_SetPlayerCheckpoint
	#undef SetPlayerCheckpoint
#else
	#define _ALS_SetPlayerCheckpoint
#endif
#define SetPlayerCheckpoint EEFS_SetPlayerCheckpoint

stock EEFS_T_BOOL:EEFS_DisablePlayerCheckpoint(playerid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Checkpoint", "iiffff", playerid, 0, 0.0, 0.0, 0.0, -1.0);
	return DisablePlayerCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerCheckpoint
	#undef DisablePlayerCheckpoint
#else
	#define _ALS_DisablePlayerCheckpoint
#endif
#define DisablePlayerCheckpoint EEFS_DisablePlayerCheckpoint

stock EEFS_T_BOOL:EEFS_SetPlayerRaceCP(playerid, EEFS_T_CPTYPE:type, Float:x, Float:y, Float:z, Float:nextx, Float:nexty, Float:nextz, Float:size)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Checkpoint", "iiffff", playerid, 1, x, y, z, size);
	return SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size);
}
#if defined _ALS_SetPlayerRaceCheckpoint
	#undef SetPlayerRaceCheckpoint
#else
	#define _ALS_SetPlayerRaceCheckpoint
#endif
#define SetPlayerRaceCheckpoint EEFS_SetPlayerRaceCP

stock EEFS_T_BOOL:EEFS_DisablePlayerRaceCP(playerid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Checkpoint", "iiffff", playerid, 1, 0.0, 0.0, 0.0, -1.0);
	return DisablePlayerRaceCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerRaceCP
	#undef DisablePlayerRaceCheckpoint
#else
	#define _ALS_DisablePlayerRaceCP
#endif
#define DisablePlayerRaceCheckpoint EEFS_DisablePlayerRaceCP

// ---------- pickups (o pool de pickups é compartilhado com o gamemode)
stock EEFS_CreatePickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{
	new id = CreatePickup(model, type, x, y, z, virtualworld);
	if (id != -1 && EEFS_ON()) CallRemoteFunction("EE_R_Pickup", "ifff", id, x, y, z);
	return id;
}
#if defined _ALS_CreatePickup
	#undef CreatePickup
#else
	#define _ALS_CreatePickup
#endif
#define CreatePickup EEFS_CreatePickup

stock EEFS_T_BOOL:EEFS_DestroyPickup(pickupid)
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Pickup", "ifff", pickupid, -99999.0, 0.0, 0.0);
	return DestroyPickup(pickupid);
}
#if defined _ALS_DestroyPickup
	#undef DestroyPickup
#else
	#define _ALS_DestroyPickup
#endif
#define DestroyPickup EEFS_DestroyPickup

// ---------- dialogs (somente SA-MP)
#if !EEFS_OMP
stock EEFS_ShowPlayerDialog(playerid, dialogid, style, const caption[], const info[], const button1[], const button2[])
{
	if (EEFS_ON()) CallRemoteFunction("EE_R_Dialog", "ii", playerid, dialogid);
	return ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2);
}
#if defined _ALS_ShowPlayerDialog
	#undef ShowPlayerDialog
#else
	#define _ALS_ShowPlayerDialog
#endif
#define ShowPlayerDialog EEFS_ShowPlayerDialog
#endif
