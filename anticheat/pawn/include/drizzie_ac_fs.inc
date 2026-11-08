/*
 *  ===========================================================================
 *   Drizzie City Anti-Cheat (DCAC) - include para FILTERSCRIPTS
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
 *       #include <drizzie_ac_fs>
 *
 *   Requer que o gamemode use <drizzie_ac>. Se o gamemode não tiver o
 *   anti-cheat carregado, as funções caem para os natives normais.
 */

#if defined _drizzie_ac_fs_included
	#endinput
#endif
#define _drizzie_ac_fs_included

#if !defined _INC_a_samp && !defined _INC_open_mp && !defined _samp_included
	#error "[DCAC] Inclua <a_samp> ou <open.mp> ANTES de <drizzie_ac_fs>."
#endif

#if defined _drizzie_ac_included
	#error "[DCAC] Use <drizzie_ac_fs> apenas em filterscripts (o gamemode usa <drizzie_ac>)."
#endif

#if defined _INC_open_mp
	#define DCACFS_OMP        (1)
	#define DCACFS_T_WEAPON   WEAPON
	#define DCACFS_T_SACTION  SPECIAL_ACTION
	#define DCACFS_T_BOOL     bool
#else
	#define DCACFS_OMP        (0)
	#define DCACFS_T_WEAPON   _
	#define DCACFS_T_SACTION  _
	#define DCACFS_T_BOOL     _
#endif

#define DCACFS_ON() (existproperty(0, "DCAC_ON"))

// ---------- dinheiro
stock DCACFS_T_BOOL:DCACFS_GivePlayerMoney(playerid, money)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_GiveMoney", "ii", playerid, money);
	return GivePlayerMoney(playerid, money);
}
#if defined _ALS_GivePlayerMoney
	#undef GivePlayerMoney
#else
	#define _ALS_GivePlayerMoney
#endif
#define GivePlayerMoney DCACFS_GivePlayerMoney

stock DCACFS_T_BOOL:DCACFS_ResetPlayerMoney(playerid)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_ResetMoney", "i", playerid);
	return ResetPlayerMoney(playerid);
}
#if defined _ALS_ResetPlayerMoney
	#undef ResetPlayerMoney
#else
	#define _ALS_ResetPlayerMoney
#endif
#define ResetPlayerMoney DCACFS_ResetPlayerMoney

stock DCACFS_GetPlayerMoney(playerid)
{
	if (DCACFS_ON()) return CallRemoteFunction("DCAC_R_GetMoney", "i", playerid);
	return GetPlayerMoney(playerid);
}
#if defined _ALS_GetPlayerMoney
	#undef GetPlayerMoney
#else
	#define _ALS_GetPlayerMoney
#endif
#define GetPlayerMoney DCACFS_GetPlayerMoney

// ---------- vida / colete
stock DCACFS_T_BOOL:DCACFS_SetPlayerHealth(playerid, Float:health)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_SetHealth", "if", playerid, health);
	return SetPlayerHealth(playerid, health);
}
#if defined _ALS_SetPlayerHealth
	#undef SetPlayerHealth
#else
	#define _ALS_SetPlayerHealth
#endif
#define SetPlayerHealth DCACFS_SetPlayerHealth

stock DCACFS_T_BOOL:DCACFS_SetPlayerArmour(playerid, Float:armour)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_SetArmour", "if", playerid, armour);
	return SetPlayerArmour(playerid, armour);
}
#if defined _ALS_SetPlayerArmour
	#undef SetPlayerArmour
#else
	#define _ALS_SetPlayerArmour
#endif
#define SetPlayerArmour DCACFS_SetPlayerArmour

// ---------- armas
stock DCACFS_T_BOOL:DCACFS_GivePlayerWeapon(playerid, DCACFS_T_WEAPON:weaponid, ammo)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_GiveWeapon", "iii", playerid, _:weaponid, ammo);
	return GivePlayerWeapon(playerid, weaponid, ammo);
}
#if defined _ALS_GivePlayerWeapon
	#undef GivePlayerWeapon
#else
	#define _ALS_GivePlayerWeapon
#endif
#define GivePlayerWeapon DCACFS_GivePlayerWeapon

stock DCACFS_T_BOOL:DCACFS_ResetPlayerWeapons(playerid)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_ResetWeapons", "i", playerid);
	return ResetPlayerWeapons(playerid);
}
#if defined _ALS_ResetPlayerWeapons
	#undef ResetPlayerWeapons
#else
	#define _ALS_ResetPlayerWeapons
#endif
#define ResetPlayerWeapons DCACFS_ResetPlayerWeapons

// ---------- posição
stock DCACFS_T_BOOL:DCACFS_SetPlayerPos(playerid, Float:x, Float:y, Float:z)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_PosImmunity", "ii", playerid, 3000);
	return SetPlayerPos(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPos
	#undef SetPlayerPos
#else
	#define _ALS_SetPlayerPos
#endif
#define SetPlayerPos DCACFS_SetPlayerPos

stock DCACFS_T_BOOL:DCACFS_SetPlayerPosFindZ(playerid, Float:x, Float:y, Float:z)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_PosImmunity", "ii", playerid, 3000);
	return SetPlayerPosFindZ(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPosFindZ
	#undef SetPlayerPosFindZ
#else
	#define _ALS_SetPlayerPosFindZ
#endif
#define SetPlayerPosFindZ DCACFS_SetPlayerPosFindZ

stock DCACFS_T_BOOL:DCACFS_SetPlayerVelocity(playerid, Float:x, Float:y, Float:z)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_PosImmunity", "ii", playerid, 4000);
	return SetPlayerVelocity(playerid, x, y, z);
}
#if defined _ALS_SetPlayerVelocity
	#undef SetPlayerVelocity
#else
	#define _ALS_SetPlayerVelocity
#endif
#define SetPlayerVelocity DCACFS_SetPlayerVelocity

stock DCACFS_T_BOOL:DCACFS_PutPlayerInVehicle(playerid, vehicleid, seatid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_PosImmunity", "ii", playerid, 3000);
	return PutPlayerInVehicle(playerid, vehicleid, seatid);
}
#if defined _ALS_PutPlayerInVehicle
	#undef PutPlayerInVehicle
#else
	#define _ALS_PutPlayerInVehicle
#endif
#define PutPlayerInVehicle DCACFS_PutPlayerInVehicle

stock DCACFS_T_BOOL:DCACFS_SetVehiclePos(vehicleid, Float:x, Float:y, Float:z)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_VehImmunity", "if", vehicleid, -1.0);
	return SetVehiclePos(vehicleid, x, y, z);
}
#if defined _ALS_SetVehiclePos
	#undef SetVehiclePos
#else
	#define _ALS_SetVehiclePos
#endif
#define SetVehiclePos DCACFS_SetVehiclePos

stock DCACFS_T_BOOL:DCACFS_SetVehicleVelocity(vehicleid, Float:x, Float:y, Float:z)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_VehImmunity", "if", vehicleid, -1.0);
	return SetVehicleVelocity(vehicleid, x, y, z);
}
#if defined _ALS_SetVehicleVelocity
	#undef SetVehicleVelocity
#else
	#define _ALS_SetVehicleVelocity
#endif
#define SetVehicleVelocity DCACFS_SetVehicleVelocity

// ---------- veículos
stock DCACFS_T_BOOL:DCACFS_SetVehicleHealth(vehicleid, Float:health)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_VehImmunity", "if", vehicleid, health);
	return SetVehicleHealth(vehicleid, health);
}
#if defined _ALS_SetVehicleHealth
	#undef SetVehicleHealth
#else
	#define _ALS_SetVehicleHealth
#endif
#define SetVehicleHealth DCACFS_SetVehicleHealth

stock DCACFS_T_BOOL:DCACFS_RepairVehicle(vehicleid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_VehImmunity", "if", vehicleid, 1000.0);
	return RepairVehicle(vehicleid);
}
#if defined _ALS_RepairVehicle
	#undef RepairVehicle
#else
	#define _ALS_RepairVehicle
#endif
#define RepairVehicle DCACFS_RepairVehicle

// ---------- jetpack
stock DCACFS_T_BOOL:DCACFS_SetPlayerSpecialAction(playerid, DCACFS_T_SACTION:actionid)
{
	if (_:actionid == 2 && DCACFS_ON()) CallRemoteFunction("DCAC_R_Jetpack", "i", playerid);
	return SetPlayerSpecialAction(playerid, actionid);
}
#if defined _ALS_SetPlayerSpecialAction
	#undef SetPlayerSpecialAction
#else
	#define _ALS_SetPlayerSpecialAction
#endif
#define SetPlayerSpecialAction DCACFS_SetPlayerSpecialAction

// ---------- munição
stock DCACFS_T_BOOL:DCACFS_SetPlayerAmmo(playerid, DCACFS_T_WEAPON:weaponid, ammo)
{
	if (DCACFS_ON()) return DCACFS_T_BOOL:CallRemoteFunction("DCAC_R_SetAmmo", "iii", playerid, _:weaponid, ammo);
	return SetPlayerAmmo(playerid, weaponid, ammo);
}
#if defined _ALS_SetPlayerAmmo
	#undef SetPlayerAmmo
#else
	#define _ALS_SetPlayerAmmo
#endif
#define SetPlayerAmmo DCACFS_SetPlayerAmmo

// ---------- spawn
stock DCACFS_T_BOOL:DCACFS_SpawnPlayer(playerid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Spawn", "i", playerid);
	return SpawnPlayer(playerid);
}
#if defined _ALS_SpawnPlayer
	#undef SpawnPlayer
#else
	#define _ALS_SpawnPlayer
#endif
#define SpawnPlayer DCACFS_SpawnPlayer

stock DCACFS_T_BOOL:DCACFS_TogglePlayerSpectating(playerid, DCACFS_T_BOOL:toggle)
{
	if (DCACFS_ON())
	{
		CallRemoteFunction("DCAC_R_PosImmunity", "ii", playerid, 5000);
		if (!toggle) CallRemoteFunction("DCAC_R_Spawn", "i", playerid);
	}
	return TogglePlayerSpectating(playerid, toggle);
}
#if defined _ALS_TogglePlayerSpectating
	#undef TogglePlayerSpectating
#else
	#define _ALS_TogglePlayerSpectating
#endif
#define TogglePlayerSpectating DCACFS_TogglePlayerSpectating

// ---------- checkpoints
#if defined _INC_open_mp
	#define DCACFS_T_CPTYPE CP_TYPE
#else
	#define DCACFS_T_CPTYPE _
#endif

stock DCACFS_T_BOOL:DCACFS_SetPlayerCheckpoint(playerid, Float:x, Float:y, Float:z, Float:size)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Checkpoint", "iiffff", playerid, 0, x, y, z, size);
	return SetPlayerCheckpoint(playerid, x, y, z, size);
}
#if defined _ALS_SetPlayerCheckpoint
	#undef SetPlayerCheckpoint
#else
	#define _ALS_SetPlayerCheckpoint
#endif
#define SetPlayerCheckpoint DCACFS_SetPlayerCheckpoint

stock DCACFS_T_BOOL:DCACFS_DisablePlayerCheckpoint(playerid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Checkpoint", "iiffff", playerid, 0, 0.0, 0.0, 0.0, -1.0);
	return DisablePlayerCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerCheckpoint
	#undef DisablePlayerCheckpoint
#else
	#define _ALS_DisablePlayerCheckpoint
#endif
#define DisablePlayerCheckpoint DCACFS_DisablePlayerCheckpoint

stock DCACFS_T_BOOL:DCACFS_SetPlayerRaceCP(playerid, DCACFS_T_CPTYPE:type, Float:x, Float:y, Float:z, Float:nextx, Float:nexty, Float:nextz, Float:size)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Checkpoint", "iiffff", playerid, 1, x, y, z, size);
	return SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size);
}
#if defined _ALS_SetPlayerRaceCheckpoint
	#undef SetPlayerRaceCheckpoint
#else
	#define _ALS_SetPlayerRaceCheckpoint
#endif
#define SetPlayerRaceCheckpoint DCACFS_SetPlayerRaceCP

stock DCACFS_T_BOOL:DCACFS_DisablePlayerRaceCP(playerid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Checkpoint", "iiffff", playerid, 1, 0.0, 0.0, 0.0, -1.0);
	return DisablePlayerRaceCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerRaceCP
	#undef DisablePlayerRaceCheckpoint
#else
	#define _ALS_DisablePlayerRaceCP
#endif
#define DisablePlayerRaceCheckpoint DCACFS_DisablePlayerRaceCP

// ---------- pickups (o pool de pickups é compartilhado com o gamemode)
stock DCACFS_CreatePickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{
	new id = CreatePickup(model, type, x, y, z, virtualworld);
	if (id != -1 && DCACFS_ON()) CallRemoteFunction("DCAC_R_Pickup", "ifff", id, x, y, z);
	return id;
}
#if defined _ALS_CreatePickup
	#undef CreatePickup
#else
	#define _ALS_CreatePickup
#endif
#define CreatePickup DCACFS_CreatePickup

stock DCACFS_T_BOOL:DCACFS_DestroyPickup(pickupid)
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Pickup", "ifff", pickupid, -99999.0, 0.0, 0.0);
	return DestroyPickup(pickupid);
}
#if defined _ALS_DestroyPickup
	#undef DestroyPickup
#else
	#define _ALS_DestroyPickup
#endif
#define DestroyPickup DCACFS_DestroyPickup

// ---------- dialogs (somente SA-MP)
#if !DCACFS_OMP
stock DCACFS_ShowPlayerDialog(playerid, dialogid, style, const caption[], const info[], const button1[], const button2[])
{
	if (DCACFS_ON()) CallRemoteFunction("DCAC_R_Dialog", "ii", playerid, dialogid);
	return ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2);
}
#if defined _ALS_ShowPlayerDialog
	#undef ShowPlayerDialog
#else
	#define _ALS_ShowPlayerDialog
#endif
#define ShowPlayerDialog DCACFS_ShowPlayerDialog
#endif
