#if defined _eagleeye_included
	#endinput
#endif
#define _eagleeye_included

#if !defined _INC_a_samp && !defined _INC_open_mp && !defined _samp_included
	#error "[EagleEYE] Inclua <a_samp> ou <open.mp> ANTES de <eagleeye>."
#endif

#if defined FILTERSCRIPT
	#error "[EagleEYE] Em filterscripts use <eagleeye_fs>, nao <eagleeye>."
#endif

#define EE_VERSION "2.5.0"

#if !defined EE_API_HOST
	#define EE_API_HOST "127.0.0.1:8090"
#endif
#if !defined EE_ID_FILE
	#define EE_ID_FILE "eagleeye_servidor.cfg"
#endif

#if !defined _INC_open_mp
	#include <a_http>
#endif

#if defined _INC_open_mp
	#define EE_OMP          (1)
	#define EE_T_WEAPON     WEAPON
	#define EE_T_PSTATE     PLAYER_STATE
	#define EE_T_BULLET     BULLET_HIT_TYPE
	#define EE_T_SACTION    SPECIAL_ACTION
	#define EE_T_KEY        KEY
	#define EE_T_CPTYPE     CP_TYPE
	#define EE_T_BOOL       bool
#else
	#define EE_OMP          (0)
	#define EE_T_WEAPON     _
	#define EE_T_PSTATE     _
	#define EE_T_BULLET     _
	#define EE_T_SACTION    _
	#define EE_T_KEY        _
	#define EE_T_CPTYPE     _
	#define EE_T_BOOL       _
#endif

#if EE_OMP
	#define EE_CVAR_NAME "name"
	#define EE_CVAR_PORT "network.port"
	#define EE_CVAR_RCONPASS "rcon.password"
#else
	#define EE_CVAR_NAME "hostname"
	#define EE_CVAR_PORT "port"
	#define EE_CVAR_RCONPASS "rcon_password"
#endif

#if !defined MAX_PICKUPS
	#define MAX_PICKUPS (4096)
#endif

#if !defined EE_TICK_MS
	#define EE_TICK_MS            (1000)
#endif
#if !defined EE_HIT_WINDOW_MS
	#define EE_HIT_WINDOW_MS      (60000)
#endif
#if !defined EE_REPORT_COOLDOWN
	#define EE_REPORT_COOLDOWN    (5000)
#endif
#if !defined EE_MAX_WHITELIST
	#define EE_MAX_WHITELIST      (64)
#endif
#if !defined EE_MAX_CLASSES
	#define EE_MAX_CLASSES        (320)
#endif
#if !defined EE_COLOR
	#define EE_COLOR              (0xFF4040FF)
#endif

#define EE_MONEY          (0)
#define EE_HEALTH         (1)
#define EE_ARMOUR         (2)
#define EE_WEAPON         (3)
#define EE_SPEED_FOOT     (4)
#define EE_SPEED_VEH      (5)
#define EE_TELEPORT       (6)
#define EE_AIRBREAK       (7)
#define EE_JETPACK        (8)
#define EE_VEH_HEALTH     (9)
#define EE_FAKEKILL       (10)
#define EE_RAPIDFIRE      (11)
#define EE_FLOOD          (12)
#define EE_CARWARP        (13)
#define EE_VEH_TROLL      (14)
#define EE_PING           (15)
#define EE_IPFLOOD        (16)
#define EE_TUNING         (17)
#define EE_DIALOG         (18)
#define EE_GODMODE        (19)
#define EE_RANGE          (20)
#define EE_DAMAGE         (21)
#define EE_AMMO           (22)
#define EE_CRASHER        (23)
#define EE_FAKESPAWN      (24)
#define EE_ADVERT         (25)
#define EE_VEH_SPAM       (26)
#define EE_FAKEPICKUP     (27)
#define EE_FAKECP         (28)
#define EE_CBUG           (29)
#define EE_RCON           (30)
#define EE_FAKENPC        (31)
#define EE_RECONNECT      (32)
#define EE_AIMBOT         (33)
#define EE_NICKNAME       (34)
#define EE_ANIMCRASH      (35)
#define EE_SKINHACK       (36)
#define EE_OBJSPAM        (37)
#define EE_PMFLOOD        (38)
#define EE_HORNSPAM       (39)
#define EE_WORLDJUMP      (40)
#define EE_FREEZEBYPASS   (41)
#define EE_MAX            (42)

#define EE_ACTION_WARN    (0)
#define EE_ACTION_KICK    (1)
#define EE_ACTION_BAN     (2)

enum E_EE_PROT
{
	bool:dpEnabled,
	dpAction,
	dpTolerance,
	dpValue
}

enum E_EE_PLAYER
{
	bool:acNPC,
	bool:acImmune,
	bool:acWhitelisted,
	bool:acPunished,
	acSerial,
	acConnectTick,
	acSpawnTick,
	acLastUpdate,
	acIp[16],

	acMoney,
	acMoneyTick,

	Float:acHealth,
	Float:acArmour,
	acHealthTick,
	acArmourTick,

	acWeapons[13],
	acAmmo[13],
	acWeaponTick,
	acSpawnWeapons[3],
	acSpawnAmmo[3],
	acAmmoStrikes,
	acLastShotAmmo,
	acLastShotWeapon,

	Float:acLastX,
	Float:acLastY,
	Float:acLastZ,
	acLastPosTick,
	acLastState,
	acPosImmuneUntil,
	acSpeedImmuneUntil,

	bool:acJetpack,
	bool:acSpawnAllowed,
	acShotTick,
	acShotCount,
	acFloodTick,
	acFloodCount,
	acDeathTick,
	acDeathCount,
	acPingStrikes,
	acDialog,
	acVehSpamTick,
	acVehSpamCount,
	acCbugTick,
	acAimShots,
	acAimHits,

	acGodTick,
	acGodHits,
	Float:acGodHP,

	bool:acCP,
	Float:acCPX,
	Float:acCPY,
	Float:acCPZ,
	Float:acCPSize,
	bool:acRCP,
	Float:acRCPX,
	Float:acRCPY,
	Float:acRCPZ,
	Float:acRCPSize,

	acObjTick,
	acObjCount,
	acPmTick,
	acPmCount,
	acHornTick,
	acHornCount,
	bool:acFrozen,
	acInterior,
	acVWorld,
	acWorldImmuneUntil
}

enum E_EE_PICKUP
{
	bool:dpkValid,
	Float:dpkX,
	Float:dpkY,
	Float:dpkZ
}

static stock const gEE_Names[EE_MAX][] =
{
	"Dinheiro", "Vida", "Colete", "Armas", "Velocidade a pe", "Velocidade em veiculo",
	"Teleporte", "Airbreak/Fly", "Jetpack", "Reparo de veiculo", "Fake kill",
	"Rapid fire", "Flood", "Puxar veiculo", "Veiculo troll", "Ping alto",
	"Conexoes por IP", "Tuning invalido", "Dialog falso", "Godmode", "Alcance de tiro",
	"Dano hack", "Municao", "Crasher", "Spawn falso", "Divulgacao", "Spam de veiculo",
	"Pickup falso", "Checkpoint falso", "C-Bug", "RCON brute force", "NPC falso",
	"Flood de reconexao", "Aimbot", "Nick invalido", "Animacao crasher",
	"Skin invalido", "Spam de objeto", "Flood de PM", "Spam de buzina",
	"Troca de interior", "Anti-freeze"
};

static stock const gEE_ActPast[2][8]   = {"kickado", "banido"};
static stock const gEE_ActShort[2][5]  = {"kick", "ban"};
static stock const gEE_OnOff[2][11]    = {"DESATIVADO", "ATIVO"};
static stock const gEE_MoveMode[2][8]  = {"a pe", "veiculo"};
static stock const gEE_BotState[2][8]  = {"online", "OFFLINE"};

static stock const gEE_Defaults[EE_MAX][E_EE_PROT] =
{
	{true,  EE_ACTION_KICK, 3,  0},
	{true,  EE_ACTION_KICK, 3,  0},
	{true,  EE_ACTION_KICK, 3,  0},
	{true,  EE_ACTION_KICK, 2,  0},
	{true,  EE_ACTION_KICK, 3,  70},
	{true,  EE_ACTION_KICK, 3,  360},
	{true,  EE_ACTION_KICK, 3,  80},
	{true,  EE_ACTION_KICK, 3,  14},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 3,  0},
	{true,  EE_ACTION_KICK, 1,  4},
	{true,  EE_ACTION_KICK, 3,  25},
	{true,  EE_ACTION_KICK, 3,  5},
	{true,  EE_ACTION_KICK, 2,  30},
	{true,  EE_ACTION_KICK, 2,  20},
	{false, EE_ACTION_KICK, 1,  800},
	{true,  EE_ACTION_KICK, 1,  3},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 2,  6},
	{true,  EE_ACTION_KICK, 3,  30},
	{true,  EE_ACTION_KICK, 2,  0},
	{true,  EE_ACTION_KICK, 2,  12},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 2,  0},
	{true,  EE_ACTION_KICK, 2,  8},
	{true,  EE_ACTION_KICK, 2,  15},
	{true,  EE_ACTION_KICK, 2,  10},
	{false, EE_ACTION_WARN, 3,  600},
	{true,  EE_ACTION_KICK, 1,  3},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 1,  5},
	{true,  EE_ACTION_WARN, 2,  92},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 1,  0},
	{true,  EE_ACTION_KICK, 2,  8},
	{true,  EE_ACTION_KICK, 3,  5},
	{false, EE_ACTION_WARN, 3,  10},
	{true,  EE_ACTION_KICK, 2,  0},
	{true,  EE_ACTION_KICK, 2,  0}
};

static stock
	gEE_Prot[EE_MAX][E_EE_PROT],
	bool:gEE_Global = true,
	gEE_Version = 0,
	gEE_PollSeconds = 10,
	gEE_PollCounter = 0,
	bool:gEE_PollPending = false,
	gEE_PollSentTick = 0,
	bool:gEE_Offline = false,
	gEE_LastCmd = 0,
	gEE_ServerId[24],
	gEE_Token[72],
	bool:gEE_Linked = false,
	bool:gEE_WaitNotified = false,
	bool:gEE_LastGlobal = true,
	bool:gEE_ConfigLoaded = false,
	gEE_SecurityCounter = 0,
	gEE_Whitelist[EE_MAX_WHITELIST][MAX_PLAYER_NAME + 1],
	gEE_WhitelistCount = 0,
	gEE_Timer = -1,
	gEE_SerialCounter = 0,
	gEE_P[MAX_PLAYERS][E_EE_PLAYER],
	gEE_Hits[MAX_PLAYERS][EE_MAX],
	gEE_HitTick[MAX_PLAYERS][EE_MAX],
	gEE_ReportTick[MAX_PLAYERS][EE_MAX],
	Float:gEE_VehHealth[MAX_VEHICLES],
	gEE_VehImmuneUntil[MAX_VEHICLES],
	gEE_ClassWeapons[EE_MAX_CLASSES][6],
	gEE_Pickups[MAX_PICKUPS][E_EE_PICKUP],

	gEE_ConnIp[64][16],
	gEE_ConnTick[64],
	gEE_ConnIdx = 0,

	gEE_RconIp[32][16],
	gEE_RconCount[32],
	gEE_RconTick[32],

	gEE_PListBody[8192];

forward OnEagleEyeDetect(playerid, code, const detail[]);
forward OnEagleEyePunish(playerid, code, action, const detail[]);
forward OnEagleEyeAdminCheck(playerid);

forward EE_Tick();
forward EE_OnConfig(index, response_code, data[]);
forward EE_OnReport(index, response_code, data[]);
forward EE_DoPunish(playerid, serial, action, code);

static stock EE_RawGiveMoney(playerid, money)        { GivePlayerMoney(playerid, money); }
static stock EE_RawResetMoney(playerid)              { ResetPlayerMoney(playerid); }
static stock EE_RawGetMoney(playerid)                { return GetPlayerMoney(playerid); }
static stock EE_RawSetHealth(playerid, Float:v)      { SetPlayerHealth(playerid, v); }
static stock EE_RawSetArmour(playerid, Float:v)      { SetPlayerArmour(playerid, v); }
static stock EE_RawResetWeapons(playerid)            { ResetPlayerWeapons(playerid); }
static stock EE_RawSetVehHealth(vehicleid, Float:v)  { SetVehicleHealth(vehicleid, v); }
static stock EE_RawState(playerid)                   { return _:GetPlayerState(playerid); }
static stock EE_RawWeapon(playerid)                  { return _:GetPlayerWeapon(playerid); }
static stock EE_RawSpecialAction(playerid)           { return _:GetPlayerSpecialAction(playerid); }
static stock EE_RawRemoveFromVehicle(playerid)       { RemovePlayerFromVehicle(playerid); }
static stock EE_RawSetPos(playerid, Float:x, Float:y, Float:z) { SetPlayerPos(playerid, x, y, z); }

static stock EE_RawGiveWeapon(playerid, weaponid, ammo)
{
	#if EE_OMP
		GivePlayerWeapon(playerid, WEAPON:weaponid, ammo);
	#else
		GivePlayerWeapon(playerid, weaponid, ammo);
	#endif
}

static stock EE_RawSetAmmo(playerid, weaponid, ammo)
{
	#if EE_OMP
		SetPlayerAmmo(playerid, WEAPON:weaponid, ammo);
	#else
		SetPlayerAmmo(playerid, weaponid, ammo);
	#endif
}

static stock EE_RawWeaponData(playerid, slot, &weapon, &ammo)
{
	#if EE_OMP
		new WEAPON:w;
		GetPlayerWeaponData(playerid, WEAPON_SLOT:slot, w, ammo);
		weapon = _:w;
	#else
		GetPlayerWeaponData(playerid, slot, weapon, ammo);
	#endif
}

static stock EE_RawClearSpecial(playerid)
{
	#if EE_OMP
		SetPlayerSpecialAction(playerid, SPECIAL_ACTION_NONE);
	#else
		SetPlayerSpecialAction(playerid, 0);
	#endif
}

static stock EE_RawStreamed(targetid, forplayerid)
{
	return IsPlayerStreamedIn(targetid, forplayerid) ? 1 : 0;
}

static stock EE_WeaponSlot(weaponid)
{
	switch (weaponid)
	{
		case 0, 1:           return 0;
		case 2 .. 9:         return 1;
		case 22 .. 24:       return 2;
		case 25 .. 27:       return 3;
		case 28, 29, 32:     return 4;
		case 30, 31:         return 5;
		case 33, 34:         return 6;
		case 35 .. 38:       return 7;
		case 16 .. 18, 39:   return 8;
		case 41 .. 43:       return 9;
		case 10 .. 15:       return 10;
		case 44 .. 46:       return 11;
		case 40:             return 12;
	}
	return -1;
}

static stock Float:EE_WeaponRange(weaponid)
{
	switch (weaponid)
	{
		case 22, 23, 24, 26, 28, 32: return 35.0;
		case 25, 27:                 return 40.0;
		case 29:                     return 45.0;
		case 30:                     return 70.0;
		case 31:                     return 90.0;
		case 33:                     return 100.0;
		case 34:                     return 320.0;
		case 38:                     return 75.0;
	}
	return 0.0;
}

static stock Float:EE_WeaponDamage(weaponid)
{
	switch (weaponid)
	{
		case 22:     return 8.25;
		case 23:     return 13.2;
		case 24:     return 46.2;
		case 25, 26: return 49.5;
		case 27:     return 39.6;
		case 28, 32: return 6.6;
		case 29:     return 8.25;
		case 30, 31: return 9.9;
		case 33:     return 24.75;
		case 34:     return 41.25;
		case 38:     return 46.2;
	}
	return 0.0;
}

static stock bool:EE_IsBulletWeapon(weaponid)
{
	return (22 <= weaponid <= 34) || weaponid == 38;
}

static stock bool:EE_BadFloat(Float:v, Float:limit)
{

	return (v != v) || v > limit || v < -limit;
}

static stock bool:EE_ValidPlayer(playerid)
{
	return (0 <= playerid < MAX_PLAYERS) && IsPlayerConnected(playerid) && !gEE_P[playerid][acNPC];
}

static stock bool:EE_ValidVehicle(vehicleid)
{
	return (0 < vehicleid < MAX_VEHICLES);
}

static stock bool:EE_IsPaused(playerid)
{
	return GetTickCount() - gEE_P[playerid][acLastUpdate] > 1500;
}

static stock EE_UrlEncode(const src[], dest[], size = sizeof dest)
{
	static const hex[] = "0123456789ABCDEF";
	new o = 0, c;
	for (new i = 0; src[i] != EOS && o < size - 4; i++)
	{
		c = src[i] & 0xFF;
		if (('a' <= c <= 'z') || ('A' <= c <= 'Z') || ('0' <= c <= '9') || c == '-' || c == '_' || c == '.' || c == '~')
		{
			dest[o++] = c;
		}
		else
		{
			dest[o++] = '%';
			dest[o++] = hex[c >> 4];
			dest[o++] = hex[c & 0xF];
		}
	}
	dest[o] = EOS;
}

static stock EE_Token(const src[], &idx, dest[], size = sizeof dest)
{
	new len = strlen(src), o = 0;
	while (idx < len && src[idx] <= ' ') idx++;
	while (idx < len && src[idx] > ' ')
	{
		if (o < size - 1) dest[o++] = src[idx];
		idx++;
	}
	dest[o] = EOS;
	return o;
}

static stock EE_Copy(dest[], const src[], size = sizeof dest)
{
	strmid(dest, src, 0, strlen(src), size);
}

static stock bool:EE_HasAdvert(const text[])
{

	new groups = 0, digits = 0, value = 0, first = 0, c;
	for (new i = 0; ; i++)
	{
		c = text[i];
		if ('0' <= c <= '9')
		{
			if (digits == 0) first = c;
			digits++;
			value = value * 10 + (c - '0');
			continue;
		}
		new bool:octet = (1 <= digits <= 3) && value <= 255 && !(digits > 1 && first == '0');
		if (groups >= 3 && octet) return true;
		if ((c == '.' || c == ',' || c == '_' || c == '-') && octet) groups++;
		else groups = 0;
		digits = 0;
		value = 0;
		if (c == ':')
		{
			new d = 0;
			while ('0' <= text[i + 1 + d] <= '9') d++;
			if (4 <= d <= 5) return true;
		}
		if (c == EOS) break;
	}
	return false;
}

static stock bool:EE_IsAdmin(playerid)
{
	if (funcidx("OnEagleEyeAdminCheck") != -1)
		return CallLocalFunction("OnEagleEyeAdminCheck", "i", playerid) != 0;
	return IsPlayerAdmin(playerid) ? true : false;
}

static stock EE_RefreshWhitelist(playerid)
{
	new name[MAX_PLAYER_NAME + 1];
	GetPlayerName(playerid, name, sizeof name);
	gEE_P[playerid][acWhitelisted] = false;
	for (new i = 0; i < gEE_WhitelistCount; i++)
	{
		if (!strcmp(name, gEE_Whitelist[i], true))
		{
			gEE_P[playerid][acWhitelisted] = true;
			break;
		}
	}
}

static stock EE_ResetPlayer(playerid)
{
	new tick = GetTickCount();
	gEE_P[playerid][acNPC] = IsPlayerNPC(playerid) ? true : false;
	gEE_P[playerid][acImmune] = false;
	gEE_P[playerid][acWhitelisted] = false;
	gEE_P[playerid][acPunished] = false;
	gEE_P[playerid][acSerial] = ++gEE_SerialCounter;
	gEE_P[playerid][acConnectTick] = tick;
	gEE_P[playerid][acSpawnTick] = tick;
	gEE_P[playerid][acLastUpdate] = tick;
	GetPlayerIp(playerid, gEE_P[playerid][acIp], 16);
	gEE_P[playerid][acMoney] = 0;
	gEE_P[playerid][acMoneyTick] = tick;
	gEE_P[playerid][acHealth] = 100.0;
	gEE_P[playerid][acArmour] = 0.0;
	gEE_P[playerid][acHealthTick] = tick;
	gEE_P[playerid][acArmourTick] = tick;
	for (new s = 0; s < 13; s++)
	{
		gEE_P[playerid][acWeapons][s] = 0;
		gEE_P[playerid][acAmmo][s] = 0;
	}
	for (new s = 0; s < 3; s++)
	{
		gEE_P[playerid][acSpawnWeapons][s] = 0;
		gEE_P[playerid][acSpawnAmmo][s] = 0;
	}
	gEE_P[playerid][acWeaponTick] = tick;
	gEE_P[playerid][acAmmoStrikes] = 0;
	gEE_P[playerid][acLastShotAmmo] = 0;
	gEE_P[playerid][acLastShotWeapon] = 0;
	gEE_P[playerid][acLastPosTick] = 0;
	gEE_P[playerid][acLastState] = 0;
	gEE_P[playerid][acPosImmuneUntil] = tick + 5000;
	gEE_P[playerid][acSpeedImmuneUntil] = tick + 5000;
	gEE_P[playerid][acJetpack] = false;
	gEE_P[playerid][acSpawnAllowed] = false;
	gEE_P[playerid][acShotTick] = 0;
	gEE_P[playerid][acShotCount] = 0;
	gEE_P[playerid][acFloodTick] = 0;
	gEE_P[playerid][acFloodCount] = 0;
	gEE_P[playerid][acDeathTick] = 0;
	gEE_P[playerid][acDeathCount] = 0;
	gEE_P[playerid][acPingStrikes] = 0;
	gEE_P[playerid][acDialog] = -1;
	gEE_P[playerid][acVehSpamTick] = 0;
	gEE_P[playerid][acVehSpamCount] = 0;
	gEE_P[playerid][acCbugTick] = 0;
	gEE_P[playerid][acAimShots] = 0;
	gEE_P[playerid][acAimHits] = 0;
	gEE_P[playerid][acGodTick] = 0;
	gEE_P[playerid][acGodHits] = 0;
	gEE_P[playerid][acCP] = false;
	gEE_P[playerid][acRCP] = false;
	gEE_P[playerid][acObjTick] = 0;
	gEE_P[playerid][acObjCount] = 0;
	gEE_P[playerid][acPmTick] = 0;
	gEE_P[playerid][acPmCount] = 0;
	gEE_P[playerid][acHornTick] = 0;
	gEE_P[playerid][acHornCount] = 0;
	gEE_P[playerid][acFrozen] = false;
	gEE_P[playerid][acInterior] = 0;
	gEE_P[playerid][acVWorld] = 0;
	gEE_P[playerid][acWorldImmuneUntil] = tick + 5000;
	for (new c = 0; c < EE_MAX; c++)
	{
		gEE_Hits[playerid][c] = 0;
		gEE_HitTick[playerid][c] = 0;
		gEE_ReportTick[playerid][c] = 0;
	}
}

static stock EE_LoadDefaults()
{
	for (new c = 0; c < EE_MAX; c++)
	{
		gEE_Prot[c][dpEnabled]   = gEE_Defaults[c][dpEnabled];
		gEE_Prot[c][dpAction]    = gEE_Defaults[c][dpAction];
		gEE_Prot[c][dpTolerance] = gEE_Defaults[c][dpTolerance];
		gEE_Prot[c][dpValue]     = gEE_Defaults[c][dpValue];
	}
}

stock EE_GetProtectionName(code, dest[], size = sizeof dest)
{
	if (0 <= code < EE_MAX) strmid(dest, gEE_Names[code], 0, strlen(gEE_Names[code]), size);
	else strmid(dest, "Desconhecida", 0, 12, size);
}

stock bool:EE_IsEnabled(code)
{
	return gEE_Global && (0 <= code < EE_MAX) && gEE_Prot[code][dpEnabled];
}

stock EE_GetValue(code)
{
	return (0 <= code < EE_MAX) ? gEE_Prot[code][dpValue] : 0;
}

stock EE_GetServerId(dest[], size = sizeof dest)
{
	EE_Copy(dest, gEE_ServerId, size);
}

stock EE_SetPlayerImmune(playerid, bool:immune)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acImmune] = immune;
}

stock bool:EE_IsPlayerImmune(playerid)
{
	return gEE_P[playerid][acImmune] || gEE_P[playerid][acWhitelisted];
}

stock EE_PositionImmunity(playerid, ms = 3000)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		new until = GetTickCount() + ms;
		if (until > gEE_P[playerid][acPosImmuneUntil]) gEE_P[playerid][acPosImmuneUntil] = until;
		if (until > gEE_P[playerid][acSpeedImmuneUntil]) gEE_P[playerid][acSpeedImmuneUntil] = until;
		gEE_P[playerid][acLastPosTick] = 0;
	}
}

stock EE_AllowWeapon(playerid, weaponid, ammo = 9999)
{
	new slot = EE_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acWeapons][slot] = weaponid;
		gEE_P[playerid][acAmmo][slot] = ammo;
		gEE_P[playerid][acWeaponTick] = GetTickCount();
	}
}

stock EE_GetServerMoney(playerid)
{
	return gEE_P[playerid][acMoney];
}

stock EE_ReloadConfig()
{
	gEE_Version = -1;
	gEE_PollCounter = gEE_PollSeconds * 1000 / EE_TICK_MS;
}

#define EE_TOKEN_LEN (29)

static stock bool:EE_ValidToken(const t[])
{
	if (strlen(t) != EE_TOKEN_LEN || t[0] != 'E' || t[1] != 'E' || t[2] != '-') return false;
	for (new i = 3; i < EE_TOKEN_LEN; i++)
	{
		if (i == 9 || i == 14 || i == 19 || i == 24)
		{
			if (t[i] != '-') return false;
		}
		else if (!(('0' <= t[i] <= '9') || ('A' <= t[i] <= 'Z'))) return false;
	}
	return true;
}

static stock EE_GenerateToken(dest[], size = sizeof dest)
{

	static const alpha[] = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
	new host[64], seed = GetTickCount() ^ (gettime() * 7919) ^ random(cellmax);
	GetConsoleVarAsString(EE_CVAR_NAME, host, sizeof host);
	for (new i = 0; host[i] != EOS; i++) seed = seed * 31 + host[i];
	new out[EE_TOKEN_LEN + 1], o = 0, r;
	out[o++] = 'E'; out[o++] = 'E'; out[o++] = '-';
	for (new i = 0; i < 22; i++)
	{
		if (i == 6 || i == 10 || i == 14 || i == 18) out[o++] = '-';

		seed ^= seed << 13;
		seed ^= seed >>> 17;
		seed ^= seed << 5;
		r = (seed ^ random(cellmax) ^ GetTickCount()) & 0x7FFFFFFF;
		out[o++] = alpha[r % (sizeof alpha - 1)];
	}
	out[o] = EOS;
	EE_Copy(dest, out, size);
}

static stock EE_SetToken(const token[])
{
	EE_Copy(gEE_Token, token);
	strmid(gEE_ServerId, token, 0, 9, sizeof gEE_ServerId);
}

static stock EE_PrintLogin()
{
	print("[EagleEYE] ---------------------------------------------------------------");
	printf("[EagleEYE] Token de acesso: %s", gEE_Token);
	if (!gEE_Linked) printf("[EagleEYE] No Discord use: /ac login token:%s", gEE_Token);
	print("[EagleEYE] Guarde esse token! Quem tiver ele pode configurar o anti-cheat.");
	print("[EagleEYE] ---------------------------------------------------------------");
}

static stock EE_LoadIdentity()
{
	gEE_ServerId[0] = EOS;
	gEE_Token[0] = EOS;
	new token[72];
	#if defined EE_SERVER_TOKEN
		EE_Copy(token, EE_SERVER_TOKEN);
	#else
		new File:f = fopen(EE_ID_FILE, io_read);
		if (f)
		{
			new line[128], len;
			while (fread(f, line))
			{
				len = strlen(line);
				while (len > 0 && (line[len - 1] == '\n' || line[len - 1] == '\r' || line[len - 1] == ' ')) line[--len] = EOS;
				if (!strcmp(line, "token=", false, 6) && len > 6) strmid(token, line, 6, len, sizeof token);
			}
			fclose(f);
		}
	#endif
	if (!EE_ValidToken(token)) return 0;
	EE_SetToken(token);
	return 1;
}

static stock EE_SaveIdentity()
{
	new File:f = fopen(EE_ID_FILE, io_write);
	if (!f)
	{
		printf("[EagleEYE] ERRO: nao foi possivel salvar scriptfiles/%s (a pasta scriptfiles existe?)", EE_ID_FILE);
		return 0;
	}
	new line[128];
	fwrite(f, "# EagleEYE Anti-Cheat - token deste servidor. NAO compartilhe!\r\n");
	format(line, sizeof line, "token=%s\r\n", gEE_Token);
	fwrite(f, line);
	fclose(f);
	return 1;
}

static stock EE_ReportRaw(playerid, const name[], const ip[], code, action, hits, const detail[])
{
	if (gEE_ServerId[0] == EOS) return;
	new ename[MAX_PLAYER_NAME * 3 + 1], edetail[200], body[400], url[256];
	EE_UrlEncode(name, ename);
	EE_UrlEncode(detail, edetail);
	format(body, sizeof body, "id=%d&nome=%s&ip=%s&cod=%d&acao=%d&hits=%d&tol=%d&det=%s",
		playerid, ename, ip, code, action, hits, gEE_Prot[code][dpTolerance], edetail);
	format(url, sizeof url, "%s/ac/report?id=%s&token=%s", EE_API_HOST, gEE_ServerId, gEE_Token);
	HTTP(2, HTTP_POST, url, body, "EE_OnReport");
}

static stock EE_Report(playerid, code, action, hits, const detail[])
{
	new name[MAX_PLAYER_NAME + 1];
	GetPlayerName(playerid, name, sizeof name);
	EE_ReportRaw(playerid, name, gEE_P[playerid][acIp], code, action, hits, detail);
}

static stock EE_SendPlayerList()
{
	if (gEE_ServerId[0] == EOS) return;
	new name[MAX_PLAYER_NAME + 1], ename[MAX_PLAYER_NAME * 3 + 1], entry[96], url[256], count = 0;
	gEE_PListBody = "p=";
	for (new i = 0, j = GetPlayerPoolSize(); i <= j && count < 80; i++)
	{
		if (!IsPlayerConnected(i) || IsPlayerNPC(i)) continue;
		GetPlayerName(i, name, sizeof name);
		EE_UrlEncode(name, ename);
		format(entry, sizeof entry, "%d%%2C%s%%2C%d%%2C%d%%3B", i, ename, GetPlayerPing(i), GetPlayerScore(i));
		strcat(gEE_PListBody, entry);
		count++;
	}
	format(url, sizeof url, "%s/ac/players?id=%s&token=%s", EE_API_HOST, gEE_ServerId, gEE_Token);
	HTTP(3, HTTP_POST, url, gEE_PListBody, "EE_OnReport");
}

public EE_OnReport(index, response_code, data[])
{
	return 1;
}

static stock EE_NotifyAdmins(const msg[])
{
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && EE_IsAdmin(i)) SendClientMessage(i, EE_COLOR, msg);
	}
}

static stock EE_SecurityNotice(const msg[])
{
	new out[180];
	format(out, sizeof out, "[EagleEYE] [Seguranca] %s", msg);
	print(out);
	EE_NotifyAdmins(out);
}

static stock bool:EE_IsAttackCode(code)
{
	return code == EE_RECONNECT || code == EE_IPFLOOD || code == EE_CRASHER || code == EE_RCON || code == EE_FAKENPC;
}

static stock EE_Punish(playerid, code, action, const detail[])
{
	new name[MAX_PLAYER_NAME + 1], msg[180];
	GetPlayerName(playerid, name, sizeof name);
	gEE_P[playerid][acPunished] = true;

	format(msg, sizeof msg, "[EagleEYE] %s (%d) foi %s. Motivo: %s.",
		name, playerid, gEE_ActPast[(action == EE_ACTION_BAN) ? 1 : 0], gEE_Names[code]);
	EE_NotifyAdmins(msg);
	printf("[EagleEYE] %s (%d) punido (%s) - %s: %s", name, playerid,
		gEE_ActShort[(action == EE_ACTION_BAN) ? 1 : 0], gEE_Names[code], detail);
	if (EE_IsAttackCode(code))
	{
		format(msg, sizeof msg, "Possivel ataque contido (%s): %s (%s) foi %s.", gEE_Names[code], name, gEE_P[playerid][acIp], gEE_ActPast[(action == EE_ACTION_BAN) ? 1 : 0]);
		EE_SecurityNotice(msg);
	}

	if (funcidx("OnEagleEyePunish") != -1)
	{
		if (CallLocalFunction("OnEagleEyePunish", "iiis", playerid, code, action, detail)) return 1;
	}

	format(msg, sizeof msg, "Voce foi %s pelo EagleEYE. Motivo: %s.",
		gEE_ActPast[(action == EE_ACTION_BAN) ? 1 : 0], gEE_Names[code]);
	SendClientMessage(playerid, EE_COLOR, msg);
	SetTimerEx("EE_DoPunish", 400, false, "iiii", playerid, gEE_P[playerid][acSerial], action, code);
	return 1;
}

public EE_DoPunish(playerid, serial, action, code)
{
	if (!IsPlayerConnected(playerid) || gEE_P[playerid][acSerial] != serial) return 0;

	if ((code == EE_RECONNECT || code == EE_IPFLOOD) && action == EE_ACTION_KICK)
	{
		BlockIpAddress(gEE_P[playerid][acIp], 120000);
	}
	if (action == EE_ACTION_BAN)
	{
		new reason[64];
		format(reason, sizeof reason, "EagleEYE: %s", gEE_Names[code]);
		BanEx(playerid, reason);
	}
	else Kick(playerid);
	return 1;
}

stock EE_Detect(playerid, code, const detail[] = "-")
{
	if (!gEE_Global || !(0 <= code < EE_MAX) || !gEE_Prot[code][dpEnabled]) return 0;
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acPunished]) return 0;
	if (gEE_P[playerid][acImmune] || gEE_P[playerid][acWhitelisted]) return 0;

	new det[128];
	if (detail[0] == EOS) det = "-";
	else EE_Copy(det, detail);

	if (funcidx("OnEagleEyeDetect") != -1)
	{
		if (!CallLocalFunction("OnEagleEyeDetect", "iis", playerid, code, det)) return 0;
	}

	new tick = GetTickCount();
	if (tick - gEE_HitTick[playerid][code] > EE_HIT_WINDOW_MS) gEE_Hits[playerid][code] = 0;
	gEE_HitTick[playerid][code] = tick;
	new hits = ++gEE_Hits[playerid][code];

	new action = gEE_Prot[code][dpAction], tol = gEE_Prot[code][dpTolerance];
	if (tol < 1) tol = 1;

	if (action != EE_ACTION_WARN && hits >= tol)
	{
		EE_Report(playerid, code, action, hits, det);
		EE_Punish(playerid, code, action, det);
		return 1;
	}

	if (tick - gEE_ReportTick[playerid][code] >= EE_REPORT_COOLDOWN)
	{
		gEE_ReportTick[playerid][code] = tick;
		new name[MAX_PLAYER_NAME + 1], msg[180];
		GetPlayerName(playerid, name, sizeof name);
		format(msg, sizeof msg, "[EagleEYE] Suspeita: %s (%d) - %s [%d/%d] (%s)", name, playerid, gEE_Names[code], hits, tol, det);
		EE_NotifyAdmins(msg);
		EE_Report(playerid, code, EE_ACTION_WARN, hits, det);
	}
	return 1;
}

static stock bool:EE_IsRconWeak()
{
	new pass[64];
	GetConsoleVarAsString(EE_CVAR_RCONPASS, pass, sizeof pass);
	if (strlen(pass) < 8) return true;
	if (!strcmp(pass, "changeme", true) || !strcmp(pass, "12345678", true) || !strcmp(pass, "password", true) || !strcmp(pass, "senha123", true)) return true;
	return false;
}

static stock EE_Poll()
{
	if (gEE_ServerId[0] == EOS) return;
	new tick = GetTickCount();
	if (gEE_PollPending && tick - gEE_PollSentTick < 30000) return;

	new players = 0;
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && !IsPlayerNPC(i)) players++;
	}
	new host[64], ehost[192], url[512];
	GetConsoleVarAsString(EE_CVAR_NAME, host, sizeof host);
	EE_UrlEncode(host, ehost);
	format(url, sizeof url, "%s/ac/config?id=%s&token=%s&v=%d&players=%d&ack=%d&max=%d&port=%d&ver=%s&rcw=%d&host=%s",
		EE_API_HOST, gEE_ServerId, gEE_Token, gEE_Version, players, gEE_LastCmd, GetMaxPlayers(), GetConsoleVarAsInt(EE_CVAR_PORT),
		EE_VERSION, EE_IsRconWeak() ? 1 : 0, ehost);
	gEE_PollPending = true;
	gEE_PollSentTick = tick;
	HTTP(0, HTTP_GET, url, "", "EE_OnConfig");
}

static stock EE_RunCommand(id, const type[], const arg[])
{
	if (id <= gEE_LastCmd) return;
	gEE_LastCmd = id;

	if (type[0] == EOS || arg[0] == EOS) return;

	if (!strcmp(type, "unbanip"))
	{

		new len = strlen(arg);
		if (len < 7 || len > 15) return;
		for (new i = 0; i < len; i++)
		{
			if (!(('0' <= arg[i] <= '9') || arg[i] == '.' || arg[i] == '*')) return;
		}
		new cmd[32];
		format(cmd, sizeof cmd, "unbanip %s", arg);
		SendRconCommand(cmd);
		SendRconCommand("reloadbans");
		UnBlockIpAddress(arg);
		printf("[EagleEYE] IP %s desbanido via Discord.", arg);
	}
	else if (!strcmp(type, "kick"))
	{
		new pid = strval(arg);
		if (EE_ValidPlayer(pid))
		{
			SendClientMessage(pid, EE_COLOR, "Voce foi kickado por um administrador (Discord).");
			SetTimerEx("EE_DoPunish", 400, false, "iiii", pid, gEE_P[pid][acSerial], EE_ACTION_KICK, 0);
		}
	}
	else if (!strcmp(type, "banip"))
	{
		new len = strlen(arg);
		if (len < 7 || len > 15) return;
		for (new i = 0; i < len; i++)
			if (!(('0' <= arg[i] <= '9') || arg[i] == '.' || arg[i] == '*')) return;
		for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
			if (EE_ValidPlayer(i) && !strcmp(gEE_P[i][acIp], arg))
				SetTimerEx("EE_DoPunish", 400, false, "iiii", i, gEE_P[i][acSerial], EE_ACTION_KICK, 0);
		BlockIpAddress(arg, 0);
		new cmd[32];
		format(cmd, sizeof cmd, "banip %s", arg);
		SendRconCommand(cmd);
		printf("[EagleEYE] IP %s banido via Discord (blacklist).", arg);
	}
	else if (!strcmp(type, "authcode"))
	{
		new len = strlen(arg);
		if (len < 4 || len > 8) return;
		for (new i = 0; i < len; i++) if (!('0' <= arg[i] <= '9')) return;
		print(" ");
		print("===================== EagleEYE =====================");
		printf("  Codigo de acesso ao site (vale 5 min): %s", arg);
		print("  Use esse codigo para entrar no painel web.");
		print("  Se voce nao pediu, ignore.");
		print("====================================================");
		print(" ");
	}
	else if (!strcmp(type, "kickname"))
	{
		for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
		{
			if (!EE_ValidPlayer(i)) continue;
			new nm[MAX_PLAYER_NAME + 1];
			GetPlayerName(i, nm, sizeof nm);
			if (!strcmp(nm, arg, true))
			{
				SendClientMessage(i, EE_COLOR, "Voce foi banido (blacklist via Discord).");
				SetTimerEx("EE_DoPunish", 400, false, "iiii", i, gEE_P[i][acSerial], EE_ACTION_KICK, 0);
			}
		}
	}
	else if (!strcmp(type, "pm"))
	{

		new sep = strfind(arg, "|");
		if (sep < 1) return;
		new idstr[8], msg[144], out[180];
		strmid(idstr, arg, 0, sep, sizeof idstr);
		strmid(msg, arg, sep + 1, strlen(arg), sizeof msg);
		new pid = strval(idstr);
		if (!EE_ValidPlayer(pid) || msg[0] == EOS) return;
		for (new i = 0; msg[i] != EOS; i++) if (msg[i] == '_') msg[i] = ' ';
		format(out, sizeof out, "[Staff via Discord] %s", msg);
		SendClientMessage(pid, 0xFFCC00FF, out);
	}
	else if (!strcmp(type, "freeze") || !strcmp(type, "unfreeze"))
	{
		new pid = strval(arg), bool:freeze = !strcmp(type, "freeze");
		if (!EE_ValidPlayer(pid)) return;
		TogglePlayerControllable(pid, !freeze);
		EE_PositionImmunity(pid, 3000);
		if (freeze) SendClientMessage(pid, 0xFFCC00FF, "[Staff via Discord] Voce foi congelado.");
		else SendClientMessage(pid, 0xFFCC00FF, "[Staff via Discord] Voce foi descongelado.");
	}
	else if (!strcmp(type, "plist"))
	{
		EE_SendPlayerList();
	}
	else if (!strcmp(type, "adm"))
	{
		new msg[144];
		EE_Copy(msg, arg);
		for (new i = 0; msg[i] != EOS; i++) if (msg[i] == '_') msg[i] = ' ';
		EE_SecurityNotice(msg);
	}
	else if (!strcmp(type, "aviso"))
	{

		new msg[144];
		EE_Copy(msg, arg);
		for (new i = 0; msg[i] != EOS; i++) if (msg[i] == '_') msg[i] = ' ';
		new out[160];
		format(out, sizeof out, "[EagleEYE] %s", msg);
		SendClientMessageToAll(EE_COLOR, out);
	}
}

public EE_OnConfig(index, response_code, data[])
{
	gEE_PollPending = false;
	if (response_code == 401)
	{
		if (!gEE_Offline) printf("[EagleEYE] O bot recusou o token deste servidor! Confira scriptfiles/%s.", EE_ID_FILE);
		gEE_Offline = true;
		return 1;
	}
	if (response_code != 200)
	{
		if (!gEE_Offline)
		{
			gEE_Offline = true;
			printf("[EagleEYE] Nao foi possivel falar com o bot (%s) - codigo %d. Usando a ultima configuracao.", EE_API_HOST, response_code);
		}
		return 1;
	}
	if (gEE_Offline)
	{
		gEE_Offline = false;
		print("[EagleEYE] Conexao com o bot restabelecida.");
	}

	if (strfind(data, "END") == -1) return 1;

	if (!strcmp(data, "WAIT", false, 4))
	{
		gEE_Linked = false;
		if (!gEE_WaitNotified)
		{
			gEE_WaitNotified = true;
			print("[EagleEYE] Conectado ao bot. Aguardando o dono fazer login no Discord:");
			EE_PrintLogin();
		}
		return 1;
	}
	if (!gEE_Linked)
	{
		gEE_Linked = true;
		print("[EagleEYE] Servidor vinculado no Discord! Configuracao recebida do bot.");
	}

	new len = strlen(data), pos = 0, line[160], tok[32], idx, end;
	new bool:fullConfig = false;

	while (pos < len)
	{
		end = strfind(data, "\n", false, pos);
		if (end == -1) end = len;
		strmid(line, data, pos, end, sizeof line);
		pos = end + 1;

		idx = 0;
		if (!EE_Token(line, idx, tok)) continue;

		if (!strcmp(tok, "EAGLE"))
		{

			EE_Token(line, idx, tok); gEE_Version = strval(tok);
			EE_Token(line, idx, tok); gEE_Global = strval(tok) != 0;
			EE_Token(line, idx, tok);
			new p = strval(tok);
			if (3 <= p <= 300) gEE_PollSeconds = p;
			gEE_WhitelistCount = 0;
			fullConfig = true;
		}
		else if (!strcmp(tok, "T"))
		{

			new newToken[40];
			EE_Token(line, idx, newToken);
			if (EE_ValidToken(newToken) && !strcmp(newToken, gEE_ServerId, false, 9) && strcmp(newToken, gEE_Token))
			{
				EE_SetToken(newToken);
				EE_SaveIdentity();
				print("[EagleEYE] Token de acesso trocado pelo Discord. Novo token:");
				EE_PrintLogin();
			}
		}
		else if (!strcmp(tok, "P") && fullConfig)
		{

			EE_Token(line, idx, tok);
			new c = strval(tok);
			if (!(0 <= c < EE_MAX)) continue;
			EE_Token(line, idx, tok); gEE_Prot[c][dpEnabled] = strval(tok) != 0;
			EE_Token(line, idx, tok); gEE_Prot[c][dpAction] = clamp(strval(tok), 0, 2);
			EE_Token(line, idx, tok); gEE_Prot[c][dpTolerance] = clamp(strval(tok), 1, 100);
			EE_Token(line, idx, tok); gEE_Prot[c][dpValue] = strval(tok);
		}
		else if (!strcmp(tok, "W") && fullConfig)
		{
			if (gEE_WhitelistCount < EE_MAX_WHITELIST)
			{
				EE_Token(line, idx, gEE_Whitelist[gEE_WhitelistCount], MAX_PLAYER_NAME + 1);
				if (gEE_Whitelist[gEE_WhitelistCount][0] != EOS) gEE_WhitelistCount++;
			}
		}
		else if (!strcmp(tok, "C"))
		{

			new type[16], arg[144];
			EE_Token(line, idx, tok);
			new cid = strval(tok);
			EE_Token(line, idx, type);
			EE_Token(line, idx, arg);
			EE_RunCommand(cid, type, arg);
		}
	}

	if (fullConfig)
	{
		for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
		{
			if (IsPlayerConnected(i)) EE_RefreshWhitelist(i);
		}
		printf("[EagleEYE] Configuracao v%d carregada do Discord (anti-cheat %s).", gEE_Version, gEE_OnOff[gEE_Global ? 1 : 0]);
		if (gEE_ConfigLoaded && gEE_LastGlobal && !gEE_Global)
		{
			EE_SecurityNotice("ATENCAO: o anti-cheat foi DESATIVADO pelo Discord. O servidor esta desprotegido!");
		}
		else if (gEE_ConfigLoaded && !gEE_LastGlobal && gEE_Global)
		{
			EE_SecurityNotice("Anti-cheat reativado pelo Discord. Servidor protegido.");
		}
		else if (!gEE_ConfigLoaded && !gEE_Global)
		{
			EE_SecurityNotice("O anti-cheat esta DESATIVADO. Ative as protecoes no Discord (/ac meuservidor ou /ac global).");
		}
		gEE_LastGlobal = gEE_Global;
		gEE_ConfigLoaded = true;
	}
	return 1;
}

static stock EE_CheckMoney(playerid, tick)
{
	if (tick - gEE_P[playerid][acMoneyTick] < 3000) return;
	new client = EE_RawGetMoney(playerid), server = gEE_P[playerid][acMoney];
	if (client > server)
	{
		new det[64];
		format(det, sizeof det, "cliente $%d / servidor $%d", client, server);
		if (EE_IsEnabled(EE_MONEY) && !EE_IsPlayerImmune(playerid))
		{
			EE_RawResetMoney(playerid);
			EE_RawGiveMoney(playerid, server);
			gEE_P[playerid][acMoneyTick] = tick;
			EE_Detect(playerid, EE_MONEY, det);
		}
		else gEE_P[playerid][acMoney] = client;
	}
	else if (client < server)
	{

		gEE_P[playerid][acMoney] = client;
	}
}

static stock EE_CheckHealth(playerid, tick)
{
	new Float:h, Float:a, det[64];
	GetPlayerHealth(playerid, h);
	GetPlayerArmour(playerid, a);

	if (tick - gEE_P[playerid][acHealthTick] >= 2500)
	{
		if (h > gEE_P[playerid][acHealth] + 1.0)
		{
			if (EE_IsEnabled(EE_HEALTH) && !EE_IsPlayerImmune(playerid))
			{
				format(det, sizeof det, "vida %.0f (permitido %.0f)", h, gEE_P[playerid][acHealth]);
				EE_RawSetHealth(playerid, gEE_P[playerid][acHealth]);
				gEE_P[playerid][acHealthTick] = tick;
				EE_Detect(playerid, EE_HEALTH, det);
			}
			else gEE_P[playerid][acHealth] = h;
		}
		else if (h < gEE_P[playerid][acHealth]) gEE_P[playerid][acHealth] = h;
	}

	if (tick - gEE_P[playerid][acArmourTick] >= 2500)
	{
		if (a > gEE_P[playerid][acArmour] + 1.0)
		{
			if (EE_IsEnabled(EE_ARMOUR) && !EE_IsPlayerImmune(playerid))
			{
				format(det, sizeof det, "colete %.0f (permitido %.0f)", a, gEE_P[playerid][acArmour]);
				EE_RawSetArmour(playerid, gEE_P[playerid][acArmour]);
				gEE_P[playerid][acArmourTick] = tick;
				EE_Detect(playerid, EE_ARMOUR, det);
			}
			else gEE_P[playerid][acArmour] = a;
		}
		else if (a < gEE_P[playerid][acArmour]) gEE_P[playerid][acArmour] = a;
	}

	if (gEE_P[playerid][acGodTick] && tick - gEE_P[playerid][acGodTick] >= 2000)
	{
		if (gEE_P[playerid][acGodHits] >= gEE_Prot[EE_GODMODE][dpValue]
			&& h + a >= gEE_P[playerid][acGodHP] - 1.0
			&& gEE_P[playerid][acHealthTick] < gEE_P[playerid][acGodTick]
			&& gEE_P[playerid][acArmourTick] < gEE_P[playerid][acGodTick])
		{
			format(det, sizeof det, "%d tiros sem perder vida", gEE_P[playerid][acGodHits]);
			EE_Detect(playerid, EE_GODMODE, det);
		}
		gEE_P[playerid][acGodTick] = 0;
		gEE_P[playerid][acGodHits] = 0;
	}
}

static stock EE_CheckWeapons(playerid, tick)
{
	if (tick - gEE_P[playerid][acWeaponTick] < 2500) return;
	if (EE_IsPlayerImmune(playerid)) return;

	new w, ammo, bad = -1;
	new bool:checkWeapons = EE_IsEnabled(EE_WEAPON), bool:checkAmmo = EE_IsEnabled(EE_AMMO);

	for (new s = 0; s < 13; s++)
	{
		EE_RawWeaponData(playerid, s, w, ammo);
		if (w <= 0 || ammo <= 0 || w == 46) continue;
		if (w != gEE_P[playerid][acWeapons][s])
		{
			if (checkWeapons) { bad = w; break; }
			continue;
		}

		if (2 <= s <= 9)
		{
			if (ammo > gEE_P[playerid][acAmmo][s] + 10)
			{
				if (checkAmmo)
				{
					new det[64];
					format(det, sizeof det, "arma %d com %d balas (permitido %d)", w, ammo, gEE_P[playerid][acAmmo][s]);
					EE_RawSetAmmo(playerid, w, gEE_P[playerid][acAmmo][s]);
					gEE_P[playerid][acWeaponTick] = tick;
					EE_Detect(playerid, EE_AMMO, det);
				}
				else gEE_P[playerid][acAmmo][s] = ammo;
			}
			else if (ammo < gEE_P[playerid][acAmmo][s]) gEE_P[playerid][acAmmo][s] = ammo;
		}
	}
	if (bad == -1 && checkWeapons)
	{
		w = EE_RawWeapon(playerid);
		if (w > 0 && w != 46)
		{
			new slot = EE_WeaponSlot(w);
			if (slot == -1 || gEE_P[playerid][acWeapons][slot] != w) bad = w;
		}
	}
	if (bad == -1) return;

	new keepW[13], keepA[13];
	for (new s = 0; s < 13; s++)
	{
		EE_RawWeaponData(playerid, s, w, ammo);
		if (w > 0 && w == gEE_P[playerid][acWeapons][s]) { keepW[s] = w; keepA[s] = ammo; }
	}
	EE_RawResetWeapons(playerid);
	for (new s = 0; s < 13; s++)
	{
		if (keepW[s] > 0 && keepA[s] > 0) EE_RawGiveWeapon(playerid, keepW[s], keepA[s]);
	}
	gEE_P[playerid][acWeaponTick] = tick;

	new det[48];
	format(det, sizeof det, "arma id %d", bad);
	EE_Detect(playerid, EE_WEAPON, det);
}

static stock EE_CheckMovement(playerid, pstate, tick)
{
	new Float:x, Float:y, Float:z, Float:vx, Float:vy, Float:vz, det[96];
	new vehicleid = (pstate == 2) ? GetPlayerVehicleID(playerid) : 0;

	GetPlayerPos(playerid, x, y, z);

	if (EE_BadFloat(x, 20000.0) || EE_BadFloat(y, 20000.0) || EE_BadFloat(z, 50000.0) || z < -1000.0)
	{
		format(det, sizeof det, "posicao invalida (%.0f, %.0f, %.0f)", x, y, z);
		EE_Detect(playerid, EE_CRASHER, det);
		gEE_P[playerid][acLastPosTick] = 0;
		return;
	}
	if (vehicleid && GetVehicleModel(vehicleid) == 0)
	{
		EE_Detect(playerid, EE_CRASHER, "veiculo inexistente");
		return;
	}

	if (vehicleid) GetVehicleVelocity(vehicleid, vx, vy, vz);
	else GetPlayerVelocity(playerid, vx, vy, vz);

	new bool:immune = EE_IsPlayerImmune(playerid) || tick < gEE_P[playerid][acPosImmuneUntil];
	new bool:surfing = (GetPlayerSurfingVehicleID(playerid) != INVALID_VEHICLE_ID) || (GetPlayerSurfingObjectID(playerid) != INVALID_OBJECT_ID);

	if (!EE_IsPlayerImmune(playerid) && tick >= gEE_P[playerid][acSpeedImmuneUntil] && !surfing)
	{
		if (pstate == 1 && vz > -0.3 && EE_IsEnabled(EE_SPEED_FOOT))
		{
			new Float:kmh = VectorSize(vx, vy, 0.0) * 180.0;
			if (kmh > float(gEE_Prot[EE_SPEED_FOOT][dpValue]))
			{
				format(det, sizeof det, "%.0f km/h a pe (limite %d)", kmh, gEE_Prot[EE_SPEED_FOOT][dpValue]);
				EE_Detect(playerid, EE_SPEED_FOOT, det);
			}
		}
		else if (pstate == 2 && vz > -0.5 && EE_IsEnabled(EE_SPEED_VEH))
		{
			new Float:kmh = VectorSize(vx, vy, vz) * 180.0;
			if (kmh > float(gEE_Prot[EE_SPEED_VEH][dpValue]))
			{
				format(det, sizeof det, "%.0f km/h no veiculo %d (limite %d)", kmh, GetVehicleModel(vehicleid), gEE_Prot[EE_SPEED_VEH][dpValue]);
				EE_Detect(playerid, EE_SPEED_VEH, det);
			}
		}
	}

	if (!immune && gEE_P[playerid][acLastPosTick] && gEE_P[playerid][acLastState] == pstate && !surfing)
	{
		new dt = tick - gEE_P[playerid][acLastPosTick];
		if (dt > 0 && dt < 3000)
		{
			new Float:dx = x - gEE_P[playerid][acLastX], Float:dy = y - gEE_P[playerid][acLastY];
			new Float:dist = VectorSize(dx, dy, 0.0);
			new Float:posSpeed = dist / (float(dt) / 1000.0);
			new Float:velSpeed = VectorSize(vx, vy, 0.0) * 50.0;

			if (EE_IsEnabled(EE_TELEPORT))
			{
				new Float:limit = float(gEE_Prot[EE_TELEPORT][dpValue]);
				if (pstate == 2)
				{
					new Float:dyn = velSpeed * (float(dt) / 1000.0) * 2.0 + 40.0;
					if (dyn > limit) limit = dyn;
				}
				if (dist > limit)
				{
					format(det, sizeof det, "%.0f m em %d ms", dist, dt);
					EE_Detect(playerid, EE_TELEPORT, det);
				}
			}
			if (EE_IsEnabled(EE_AIRBREAK))
			{
				new Float:limit = float(gEE_Prot[EE_AIRBREAK][dpValue]);
				if (pstate == 2) limit *= 2.5;
				if (posSpeed > limit && velSpeed < posSpeed * 0.25)
				{
					format(det, sizeof det, "%.1f m/s com velocidade %.1f m/s (%s)", posSpeed, velSpeed, gEE_MoveMode[(pstate == 2) ? 1 : 0]);
					EE_Detect(playerid, EE_AIRBREAK, det);
				}
			}
		}
	}

	gEE_P[playerid][acLastX] = x;
	gEE_P[playerid][acLastY] = y;
	gEE_P[playerid][acLastZ] = z;
	gEE_P[playerid][acLastPosTick] = tick;
	gEE_P[playerid][acLastState] = pstate;
}

static stock EE_CheckVehicleHealth(playerid, tick)
{
	new vehicleid = GetPlayerVehicleID(playerid);
	if (!EE_ValidVehicle(vehicleid)) return;
	new Float:h;
	GetVehicleHealth(vehicleid, h);
	if (tick < gEE_VehImmuneUntil[vehicleid])
	{
		gEE_VehHealth[vehicleid] = h;
		return;
	}
	if (h > gEE_VehHealth[vehicleid] + 10.0)
	{
		if (EE_IsEnabled(EE_VEH_HEALTH) && !EE_IsPlayerImmune(playerid))
		{
			new det[64];
			format(det, sizeof det, "veiculo %.0f hp (permitido %.0f)", h, gEE_VehHealth[vehicleid]);
			EE_RawSetVehHealth(vehicleid, gEE_VehHealth[vehicleid]);
			gEE_VehImmuneUntil[vehicleid] = tick + 2000;
			EE_Detect(playerid, EE_VEH_HEALTH, det);
		}
		else gEE_VehHealth[vehicleid] = h;
	}
	else if (h < gEE_VehHealth[vehicleid]) gEE_VehHealth[vehicleid] = h;
}

public EE_Tick()
{
	new tick = GetTickCount();

	if (++gEE_PollCounter >= gEE_PollSeconds * 1000 / EE_TICK_MS)
	{
		gEE_PollCounter = 0;
		EE_Poll();
	}

	if (++gEE_SecurityCounter >= 600000 / EE_TICK_MS)
	{
		gEE_SecurityCounter = 0;
		if (gEE_Linked && !gEE_Global)
		{
			EE_SecurityNotice("Lembrete: o servidor esta DESPROTEGIDO (anti-cheat desligado). Ative no Discord.");
		}
		else if (!gEE_Linked)
		{
			printf("[EagleEYE] Lembrete: usando a configuracao padrao. Faca /ac login token:%s no Discord para configurar e receber alertas.", gEE_Token);
		}
	}

	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (!IsPlayerConnected(i) || gEE_P[i][acNPC] || gEE_P[i][acPunished]) continue;

		new pstate = EE_RawState(i);

		if (gEE_Global && tick - gEE_P[i][acConnectTick] > 30000 && EE_IsEnabled(EE_PING))
		{
			new ping = GetPlayerPing(i);
			if (ping > gEE_Prot[EE_PING][dpValue])
			{
				if (++gEE_P[i][acPingStrikes] >= 5)
				{
					new det[32];
					format(det, sizeof det, "%d ms (limite %d)", ping, gEE_Prot[EE_PING][dpValue]);
					gEE_P[i][acPingStrikes] = 0;
					EE_Detect(i, EE_PING, det);
				}
			}
			else gEE_P[i][acPingStrikes] = 0;
		}

		if (pstate != 1 && pstate != 2 && pstate != 3)
		{
			gEE_P[i][acLastPosTick] = 0;
			continue;
		}

		EE_CheckMoney(i, tick);

		if (tick - gEE_P[i][acSpawnTick] < 3000)
		{
			gEE_P[i][acLastPosTick] = 0;
			continue;
		}

		EE_CheckHealth(i, tick);
		EE_CheckWeapons(i, tick);

		new sa = EE_RawSpecialAction(i);
		if (sa == 2)
		{
			if (!gEE_P[i][acJetpack] && EE_IsEnabled(EE_JETPACK) && !EE_IsPlayerImmune(i))
			{
				EE_RawClearSpecial(i);
				EE_Detect(i, EE_JETPACK, "jetpack sem permissao");
			}
		}
		else if (gEE_P[i][acJetpack] && pstate == 1) gEE_P[i][acJetpack] = false;

		if (pstate == 3)
		{
			gEE_P[i][acLastPosTick] = 0;
			continue;
		}
		EE_CheckMovement(i, pstate, tick);
		if (pstate == 2) EE_CheckVehicleHealth(i, tick);
	}
	return 1;
}

public OnGameModeInit()
{
	EE_LoadDefaults();
	for (new v = 0; v < MAX_VEHICLES; v++) { gEE_VehHealth[v] = 1000.0; gEE_VehImmuneUntil[v] = 0; }
	for (new c = 0; c < EE_MAX_CLASSES; c++) for (new k = 0; k < 6; k++) gEE_ClassWeapons[c][k] = 0;
	for (new p = 0; p < MAX_PICKUPS; p++) gEE_Pickups[p][dpkValid] = false;
	#if !defined EE_KEEP_STUNT_BONUS
		#if EE_OMP
			EnableStuntBonusForAll(false);
		#else
			EnableStuntBonusForAll(0);
		#endif
	#endif
	setproperty(0, "EAGLEEYE_ON", 1);
	if (gEE_Timer != -1) KillTimer(gEE_Timer);
	gEE_Timer = SetTimer("EE_Tick", EE_TICK_MS, true);
	gEE_PollCounter = 0;
	printf("[EagleEYE] EagleEYE Anti-Cheat v%s carregado.", EE_VERSION);
	if (EE_IsRconWeak())
	{
		EE_SecurityNotice("A senha do RCON e fraca (menos de 8 caracteres ou senha padrao). Troque no server.cfg/config.json!");
	}

	#if defined EE_OnGameModeInit
		new ret = EE_OnGameModeInit();
	#else
		new ret = 1;
	#endif
	if (EE_LoadIdentity())
	{
		printf("[EagleEYE] ID do servidor: %s (digite 'eagleeye' no console para ver o token de acesso)", gEE_ServerId);
	}
	else
	{

		new token[EE_TOKEN_LEN + 1];
		EE_GenerateToken(token);
		EE_SetToken(token);
		EE_SaveIdentity();
		print("[EagleEYE] Primeira inicializacao: token de acesso gerado.");
		EE_PrintLogin();
	}
	EE_Poll();
	return ret;
}
#if defined _ALS_OnGameModeInit
	#undef OnGameModeInit
#else
	#define _ALS_OnGameModeInit
#endif
#define OnGameModeInit EE_OnGameModeInit
#if defined EE_OnGameModeInit
	forward EE_OnGameModeInit();
#endif

public OnGameModeExit()
{
	if (gEE_Timer != -1) { KillTimer(gEE_Timer); gEE_Timer = -1; }
	deleteproperty(0, "EAGLEEYE_ON");
	#if defined EE_OnGameModeExit
		return EE_OnGameModeExit();
	#else
		return 1;
	#endif
}
#if defined _ALS_OnGameModeExit
	#undef OnGameModeExit
#else
	#define _ALS_OnGameModeExit
#endif
#define OnGameModeExit EE_OnGameModeExit
#if defined EE_OnGameModeExit
	forward EE_OnGameModeExit();
#endif

public OnRconCommand(cmd[])
{
	if (!strcmp(cmd, "eagleeye", true) && cmd[0] != EOS)
	{
		EE_PrintLogin();
		if (!gEE_Linked) print("[EagleEYE] Situacao: aguardando login no Discord.");
		printf("[EagleEYE] Anti-cheat %s | config v%d | bot %s", gEE_OnOff[gEE_Global ? 1 : 0], gEE_Version, gEE_BotState[gEE_Offline ? 1 : 0]);
		return 1;
	}
	#if defined EE_OnRconCommand
		return EE_OnRconCommand(cmd);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnRconCommand
	#undef OnRconCommand
#else
	#define _ALS_OnRconCommand
#endif
#define OnRconCommand EE_OnRconCommand
#if defined EE_OnRconCommand
	forward EE_OnRconCommand(cmd[]);
#endif

public OnRconLoginAttempt(ip[], password[], success)
{
	if (gEE_Global && gEE_Prot[EE_RCON][dpEnabled])
	{
		new slot = -1, freeSlot = -1, tick = GetTickCount();
		for (new i = 0; i < sizeof gEE_RconIp; i++)
		{
			if (gEE_RconIp[i][0] != EOS && !strcmp(gEE_RconIp[i], ip)) { slot = i; break; }
			if (freeSlot == -1 && (gEE_RconIp[i][0] == EOS || tick - gEE_RconTick[i] > 600000)) freeSlot = i;
		}
		if (success)
		{
			if (slot != -1) gEE_RconIp[slot][0] = EOS;
		}
		else
		{
			if (slot == -1 && freeSlot != -1)
			{
				slot = freeSlot;
				EE_Copy(gEE_RconIp[slot], ip, 16);
				gEE_RconCount[slot] = 0;
			}
			if (slot != -1)
			{
				if (tick - gEE_RconTick[slot] > 600000) gEE_RconCount[slot] = 0;
				gEE_RconTick[slot] = tick;
				if (++gEE_RconCount[slot] >= gEE_Prot[EE_RCON][dpValue])
				{
					new det[64];
					format(det, sizeof det, "%d senhas RCON erradas do IP %s (IP bloqueado 1h)", gEE_RconCount[slot], ip);
					BlockIpAddress(ip, 3600000);
					new notice[96];
					format(notice, sizeof notice, "Ataque ao RCON contido: IP %s bloqueado por 1 hora.", ip);
					EE_SecurityNotice(notice);
					new bool:found = false;
					for (new p = 0, j = GetPlayerPoolSize(); p <= j; p++)
					{
						if (EE_ValidPlayer(p) && !strcmp(gEE_P[p][acIp], ip))
						{
							EE_Detect(p, EE_RCON, det);
							found = true;
						}
					}
					if (!found) EE_ReportRaw(-1, "(console/RCON externo)", ip, EE_RCON, gEE_Prot[EE_RCON][dpAction], gEE_RconCount[slot], det);
					gEE_RconIp[slot][0] = EOS;
				}
			}
		}
	}
	#if defined EE_OnRconLoginAttempt
		return EE_OnRconLoginAttempt(ip, password, success);
	#else
		#pragma unused password
		return 1;
	#endif
}
#if defined _ALS_OnRconLoginAttempt
	#undef OnRconLoginAttempt
#else
	#define _ALS_OnRconLoginAttempt
#endif
#define OnRconLoginAttempt EE_OnRconLoginAttempt
#if defined EE_OnRconLoginAttempt
	forward EE_OnRconLoginAttempt(ip[], password[], success);
#endif

public OnPlayerConnect(playerid)
{
	EE_ResetPlayer(playerid);
	EE_RefreshWhitelist(playerid);
	EE_CheckNickname(playerid);
	new tick = GetTickCount();

	if (gEE_P[playerid][acNPC] && EE_IsEnabled(EE_FAKENPC))
	{
		new bind[16];
		GetConsoleVarAsString("bind", bind, sizeof bind);
		if (strcmp(gEE_P[playerid][acIp], "127.0.0.1") && (bind[0] == EOS || strcmp(gEE_P[playerid][acIp], bind)))
		{
			gEE_P[playerid][acNPC] = false;
			new det[48];
			format(det, sizeof det, "NPC conectando do IP %s", gEE_P[playerid][acIp]);
			EE_Detect(playerid, EE_FAKENPC, det);
		}
	}

	if (!gEE_P[playerid][acNPC])
	{

		if (EE_IsEnabled(EE_IPFLOOD))
		{
			new count = 0;
			for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
			{
				if (i == playerid || !IsPlayerConnected(i) || IsPlayerNPC(i)) continue;
				if (!strcmp(gEE_P[playerid][acIp], gEE_P[i][acIp])) count++;
			}
			if (count >= gEE_Prot[EE_IPFLOOD][dpValue])
			{
				new det[48];
				format(det, sizeof det, "%d conexoes do IP %s", count + 1, gEE_P[playerid][acIp]);
				EE_Detect(playerid, EE_IPFLOOD, det);
			}
		}

		new recent = 0;
		for (new i = 0; i < sizeof gEE_ConnIp; i++)
		{
			if (gEE_ConnIp[i][0] != EOS && tick - gEE_ConnTick[i] < 30000 && !strcmp(gEE_ConnIp[i], gEE_P[playerid][acIp])) recent++;
		}
		EE_Copy(gEE_ConnIp[gEE_ConnIdx], gEE_P[playerid][acIp], 16);
		gEE_ConnTick[gEE_ConnIdx] = tick;
		gEE_ConnIdx = (gEE_ConnIdx + 1) % sizeof gEE_ConnIp;
		if (recent + 1 > gEE_Prot[EE_RECONNECT][dpValue] && EE_IsEnabled(EE_RECONNECT))
		{
			new det[48];
			format(det, sizeof det, "%d conexoes em 30s do IP %s", recent + 1, gEE_P[playerid][acIp]);
			EE_Detect(playerid, EE_RECONNECT, det);
		}
	}

	#if defined EE_OnPlayerConnect
		return EE_OnPlayerConnect(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerConnect
	#undef OnPlayerConnect
#else
	#define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect EE_OnPlayerConnect
#if defined EE_OnPlayerConnect
	forward EE_OnPlayerConnect(playerid);
#endif

public OnPlayerDisconnect(playerid, reason)
{
	#if defined EE_OnPlayerDisconnect
		new ret = EE_OnPlayerDisconnect(playerid, reason);
	#else
		new ret = 1;
	#endif
	gEE_P[playerid][acSerial] = 0;
	gEE_P[playerid][acPunished] = true;
	return ret;
}
#if defined _ALS_OnPlayerDisconnect
	#undef OnPlayerDisconnect
#else
	#define _ALS_OnPlayerDisconnect
#endif
#define OnPlayerDisconnect EE_OnPlayerDisconnect
#if defined EE_OnPlayerDisconnect
	forward EE_OnPlayerDisconnect(playerid, reason);
#endif

public OnPlayerUpdate(playerid)
{
	gEE_P[playerid][acLastUpdate] = GetTickCount();
	EE_CheckExtraUpdate(playerid);
	#if defined EE_OnPlayerUpdate
		return EE_OnPlayerUpdate(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerUpdate
	#undef OnPlayerUpdate
#else
	#define _ALS_OnPlayerUpdate
#endif
#define OnPlayerUpdate EE_OnPlayerUpdate
#if defined EE_OnPlayerUpdate
	forward EE_OnPlayerUpdate(playerid);
#endif

public OnPlayerRequestClass(playerid, classid)
{
	if (0 <= classid < EE_MAX_CLASSES)
	{
		for (new k = 0; k < 3; k++)
		{
			gEE_P[playerid][acSpawnWeapons][k] = gEE_ClassWeapons[classid][k * 2];
			gEE_P[playerid][acSpawnAmmo][k] = gEE_ClassWeapons[classid][k * 2 + 1];
		}
	}
	#if defined EE_OnPlayerRequestClass
		return EE_OnPlayerRequestClass(playerid, classid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerRequestClass
	#undef OnPlayerRequestClass
#else
	#define _ALS_OnPlayerRequestClass
#endif
#define OnPlayerRequestClass EE_OnPlayerRequestClass
#if defined EE_OnPlayerRequestClass
	forward EE_OnPlayerRequestClass(playerid, classid);
#endif

public OnPlayerRequestSpawn(playerid)
{
	#if defined EE_OnPlayerRequestSpawn
		new ret = EE_OnPlayerRequestSpawn(playerid);
	#else
		new ret = 1;
	#endif
	if (ret) gEE_P[playerid][acSpawnAllowed] = true;
	return ret;
}
#if defined _ALS_OnPlayerRequestSpawn
	#undef OnPlayerRequestSpawn
#else
	#define _ALS_OnPlayerRequestSpawn
#endif
#define OnPlayerRequestSpawn EE_OnPlayerRequestSpawn
#if defined EE_OnPlayerRequestSpawn
	forward EE_OnPlayerRequestSpawn(playerid);
#endif

public OnPlayerSpawn(playerid)
{
	new tick = GetTickCount();

	if (!gEE_P[playerid][acSpawnAllowed] && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_FAKESPAWN))
	{
		if (EE_Detect(playerid, EE_FAKESPAWN, "spawn sem permissao do servidor") && gEE_P[playerid][acPunished])
		{
			return 1;
		}
	}
	gEE_P[playerid][acSpawnAllowed] = false;

	EE_CheckSkin(playerid);

	gEE_P[playerid][acSpawnTick] = tick;
	gEE_P[playerid][acHealth] = 100.0;
	gEE_P[playerid][acArmour] = 0.0;
	gEE_P[playerid][acHealthTick] = tick;
	gEE_P[playerid][acArmourTick] = tick;
	gEE_P[playerid][acJetpack] = false;
	gEE_P[playerid][acGodTick] = 0;
	gEE_P[playerid][acGodHits] = 0;
	gEE_P[playerid][acLastPosTick] = 0;
	gEE_P[playerid][acPosImmuneUntil] = tick + 4000;
	gEE_P[playerid][acSpeedImmuneUntil] = tick + 4000;
	gEE_P[playerid][acWeaponTick] = tick;
	for (new s = 0; s < 13; s++)
	{
		gEE_P[playerid][acWeapons][s] = 0;
		gEE_P[playerid][acAmmo][s] = 0;
	}
	for (new k = 0; k < 3; k++)
	{
		new w = gEE_P[playerid][acSpawnWeapons][k], slot = EE_WeaponSlot(w);
		if (w > 0 && slot != -1 && gEE_P[playerid][acSpawnAmmo][k] > 0)
		{
			gEE_P[playerid][acWeapons][slot] = w;
			gEE_P[playerid][acAmmo][slot] = gEE_P[playerid][acSpawnAmmo][k];
		}
	}
	#if defined EE_OnPlayerSpawn
		return EE_OnPlayerSpawn(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerSpawn
	#undef OnPlayerSpawn
#else
	#define _ALS_OnPlayerSpawn
#endif
#define OnPlayerSpawn EE_OnPlayerSpawn
#if defined EE_OnPlayerSpawn
	forward EE_OnPlayerSpawn(playerid);
#endif

public OnPlayerDeath(playerid, killerid, EE_T_WEAPON:reason)
{
	new tick = GetTickCount();
	gEE_P[playerid][acLastPosTick] = 0;
	gEE_P[playerid][acPosImmuneUntil] = tick + 5000;
	gEE_P[playerid][acSpawnAllowed] = true;
	gEE_P[playerid][acGodTick] = 0;
	gEE_P[playerid][acGodHits] = 0;

	if (EE_ValidPlayer(playerid) && EE_IsEnabled(EE_FAKEKILL))
	{

		if (tick - gEE_P[playerid][acDeathTick] > 5000)
		{
			gEE_P[playerid][acDeathTick] = tick;
			gEE_P[playerid][acDeathCount] = 0;
		}
		if (++gEE_P[playerid][acDeathCount] > gEE_Prot[EE_FAKEKILL][dpValue])
		{
			EE_Detect(playerid, EE_FAKEKILL, "flood de mortes");
			gEE_P[playerid][acDeathCount] = 0;
		}

		if (killerid != INVALID_PLAYER_ID)
		{
			new bool:fake = false, det[64];
			if (killerid == playerid || !(0 <= killerid < MAX_PLAYERS) || !IsPlayerConnected(killerid))
			{
				fake = true;
				format(det, sizeof det, "assassino invalido (%d)", killerid);
			}
			else if (!IsPlayerNPC(killerid) && !EE_RawStreamed(killerid, playerid))
			{
				fake = true;
				format(det, sizeof det, "assassino %d nao estava perto", killerid);
			}
			if (fake)
			{
				EE_Detect(playerid, EE_FAKEKILL, det);
				killerid = INVALID_PLAYER_ID;
			}
		}
	}

	#if defined EE_OnPlayerDeath
		return EE_OnPlayerDeath(playerid, killerid, reason);
	#else
		#pragma unused reason
		return 1;
	#endif
}
#if defined _ALS_OnPlayerDeath
	#undef OnPlayerDeath
#else
	#define _ALS_OnPlayerDeath
#endif
#define OnPlayerDeath EE_OnPlayerDeath
#if defined EE_OnPlayerDeath
	forward EE_OnPlayerDeath(playerid, killerid, EE_T_WEAPON:reason);
#endif

static stock EE_VehicleSpamCheck(playerid)
{
	if (!EE_ValidPlayer(playerid) || !EE_IsEnabled(EE_VEH_SPAM)) return;
	new tick = GetTickCount();
	if (tick - gEE_P[playerid][acVehSpamTick] > 5000)
	{
		gEE_P[playerid][acVehSpamTick] = tick;
		gEE_P[playerid][acVehSpamCount] = 0;
	}
	if (++gEE_P[playerid][acVehSpamCount] > gEE_Prot[EE_VEH_SPAM][dpValue])
	{
		gEE_P[playerid][acVehSpamCount] = 0;
		EE_Detect(playerid, EE_VEH_SPAM, "entrou/saiu de veiculos em excesso");
	}
}

public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
	EE_VehicleSpamCheck(playerid);
	#if defined EE_OnPlayerEnterVehicle
		return EE_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterVehicle
	#undef OnPlayerEnterVehicle
#else
	#define _ALS_OnPlayerEnterVehicle
#endif
#define OnPlayerEnterVehicle EE_OnPlayerEnterVehicle
#if defined EE_OnPlayerEnterVehicle
	forward EE_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
#endif

public OnPlayerExitVehicle(playerid, vehicleid)
{
	EE_VehicleSpamCheck(playerid);
	#if defined EE_OnPlayerExitVehicle
		return EE_OnPlayerExitVehicle(playerid, vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerExitVehicle
	#undef OnPlayerExitVehicle
#else
	#define _ALS_OnPlayerExitVehicle
#endif
#define OnPlayerExitVehicle EE_OnPlayerExitVehicle
#if defined EE_OnPlayerExitVehicle
	forward EE_OnPlayerExitVehicle(playerid, vehicleid);
#endif

public OnPlayerStateChange(playerid, EE_T_PSTATE:newstate, EE_T_PSTATE:oldstate)
{
	new ns = _:newstate, tick = GetTickCount();
	if (ns == 2 || ns == 3)
	{
		new vehicleid = GetPlayerVehicleID(playerid);
		EE_VehicleSpamCheck(playerid);

		if (EE_ValidPlayer(playerid) && EE_IsEnabled(EE_CRASHER))
		{
			new seat = GetPlayerVehicleSeat(playerid);
			if ((seat > 10 && seat != 128) || (vehicleid && GetVehicleModel(vehicleid) == 0))
			{
				new det[48];
				format(det, sizeof det, "assento %d no veiculo %d", seat, vehicleid);
				if (EE_Detect(playerid, EE_CRASHER, det)) EE_RawRemoveFromVehicle(playerid);
			}
		}

		if (_:oldstate == 1 && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_CARWARP)
			&& tick >= gEE_P[playerid][acPosImmuneUntil] && gEE_P[playerid][acLastPosTick] && tick - gEE_P[playerid][acLastPosTick] < 2000
			&& vehicleid)
		{
			new Float:vx, Float:vy, Float:vz;
			GetVehiclePos(vehicleid, vx, vy, vz);
			new Float:dist = VectorSize(vx - gEE_P[playerid][acLastX], vy - gEE_P[playerid][acLastY], vz - gEE_P[playerid][acLastZ]);
			if (dist > float(gEE_Prot[EE_CARWARP][dpValue]))
			{
				new det[64];
				format(det, sizeof det, "entrou no veiculo %d a %.0f m", vehicleid, dist);
				if (EE_Detect(playerid, EE_CARWARP, det))
				{
					EE_RawRemoveFromVehicle(playerid);
					EE_RawSetPos(playerid, gEE_P[playerid][acLastX], gEE_P[playerid][acLastY], gEE_P[playerid][acLastZ]);
				}
			}
		}
	}
	gEE_P[playerid][acLastPosTick] = 0;
	if (ns == 2 || ns == 3 || ns == 1) gEE_P[playerid][acSpeedImmuneUntil] = tick + 1500;

	#if defined EE_OnPlayerStateChange
		return EE_OnPlayerStateChange(playerid, newstate, oldstate);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerStateChange
	#undef OnPlayerStateChange
#else
	#define _ALS_OnPlayerStateChange
#endif
#define OnPlayerStateChange EE_OnPlayerStateChange
#if defined EE_OnPlayerStateChange
	forward EE_OnPlayerStateChange(playerid, EE_T_PSTATE:newstate, EE_T_PSTATE:oldstate);
#endif

static stock bool:EE_FloodCheck(playerid)
{
	if (!EE_ValidPlayer(playerid) || !EE_IsEnabled(EE_FLOOD)) return false;
	new tick = GetTickCount();
	if (tick - gEE_P[playerid][acFloodTick] > 3000)
	{
		gEE_P[playerid][acFloodTick] = tick;
		gEE_P[playerid][acFloodCount] = 0;
	}
	if (++gEE_P[playerid][acFloodCount] > gEE_Prot[EE_FLOOD][dpValue])
	{
		if (EE_Detect(playerid, EE_FLOOD, "mensagens/comandos em excesso"))
		{
			SendClientMessage(playerid, EE_COLOR, "[EagleEYE] Pare de floodar!");
			return true;
		}
	}
	return false;
}

static stock bool:EE_AdvertCheck(playerid, const text[])
{
	if (!EE_ValidPlayer(playerid) || !EE_IsEnabled(EE_ADVERT) || EE_IsPlayerImmune(playerid)) return false;
	if (!EE_HasAdvert(text)) return false;
	new det[100];
	format(det, sizeof det, "%.80s", text);
	if (EE_Detect(playerid, EE_ADVERT, det))
	{
		SendClientMessage(playerid, EE_COLOR, "[EagleEYE] Divulgacao nao e permitida.");
		return true;
	}
	return false;
}

public OnPlayerText(playerid, text[])
{
	if (EE_FloodCheck(playerid)) return 0;
	if (EE_AdvertCheck(playerid, text)) return 0;
	#if defined EE_OnPlayerText
		return EE_OnPlayerText(playerid, text);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerText
	#undef OnPlayerText
#else
	#define _ALS_OnPlayerText
#endif
#define OnPlayerText EE_OnPlayerText
#if defined EE_OnPlayerText
	forward EE_OnPlayerText(playerid, text[]);
#endif

public OnPlayerCommandText(playerid, cmdtext[])
{
	if (EE_FloodCheck(playerid)) return 1;
	if (EE_AdvertCheck(playerid, cmdtext)) return 1;
	#if defined EE_OnPlayerCommandText
		return EE_OnPlayerCommandText(playerid, cmdtext);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnPlayerCommandText
	#undef OnPlayerCommandText
#else
	#define _ALS_OnPlayerCommandText
#endif
#define OnPlayerCommandText EE_OnPlayerCommandText
#if defined EE_OnPlayerCommandText
	forward EE_OnPlayerCommandText(playerid, cmdtext[]);
#endif

stock bool:EE_CommandFloodCheck(playerid, const cmdtext[] = "")
{
	if (EE_FloodCheck(playerid)) return true;
	if (cmdtext[0] != EOS && EE_AdvertCheck(playerid, cmdtext)) return true;
	return false;
}

public OnPlayerWeaponShot(playerid, EE_T_WEAPON:weaponid, EE_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
	new w = _:weaponid, ht = _:hittype;
	if (EE_ValidPlayer(playerid) && !EE_IsPlayerImmune(playerid))
	{
		new tick = GetTickCount(), det[64];

		if (EE_IsEnabled(EE_CRASHER))
		{
			new bool:bad = false;
			if (!EE_IsBulletWeapon(w) || ht < 0 || ht > 4) bad = true;
			else if (EE_BadFloat(fX, 20000.0) || EE_BadFloat(fY, 20000.0) || EE_BadFloat(fZ, 20000.0)) bad = true;
			else if (ht == 1 && !(0 <= hitid < MAX_PLAYERS)) bad = true;
			else if (ht == 2 && !(0 < hitid < MAX_VEHICLES)) bad = true;
			if (bad)
			{
				format(det, sizeof det, "bala invalida (arma %d tipo %d alvo %d)", w, ht, hitid);
				EE_Detect(playerid, EE_CRASHER, det);
				return 0;
			}
		}

		if (EE_IsEnabled(EE_WEAPON))
		{
			new slot = EE_WeaponSlot(w);
			if (slot == -1 || gEE_P[playerid][acWeapons][slot] != w)
			{
				format(det, sizeof det, "atirou com arma id %d", w);
				EE_Detect(playerid, EE_WEAPON, det);
				return 0;
			}
		}

		if (EE_IsEnabled(EE_RAPIDFIRE) && w != 38)
		{
			if (tick - gEE_P[playerid][acShotTick] >= 1000)
			{
				gEE_P[playerid][acShotTick] = tick;
				gEE_P[playerid][acShotCount] = 0;
			}
			if (++gEE_P[playerid][acShotCount] > gEE_Prot[EE_RAPIDFIRE][dpValue])
			{
				format(det, sizeof det, "%d tiros/s com arma %d", gEE_P[playerid][acShotCount], w);
				gEE_P[playerid][acShotCount] = 0;
				EE_Detect(playerid, EE_RAPIDFIRE, det);
				return 0;
			}
		}

		if (EE_IsEnabled(EE_AMMO))
		{
			new ammo = GetPlayerAmmo(playerid);
			if (w == gEE_P[playerid][acLastShotWeapon] && ammo >= gEE_P[playerid][acLastShotAmmo] && ammo > 0)
			{
				if (++gEE_P[playerid][acAmmoStrikes] >= gEE_Prot[EE_AMMO][dpValue])
				{
					format(det, sizeof det, "%d tiros sem gastar municao (arma %d)", gEE_P[playerid][acAmmoStrikes], w);
					gEE_P[playerid][acAmmoStrikes] = 0;
					EE_Detect(playerid, EE_AMMO, det);
				}
			}
			else gEE_P[playerid][acAmmoStrikes] = 0;
			gEE_P[playerid][acLastShotWeapon] = w;
			gEE_P[playerid][acLastShotAmmo] = ammo;
		}

		if ((ht == 1 || ht == 2) && EE_IsEnabled(EE_RANGE))
		{
			new Float:tx, Float:ty, Float:tz, bool:ok = false;
			if (ht == 1 && IsPlayerConnected(hitid)) { GetPlayerPos(hitid, tx, ty, tz); ok = true; }
			else if (ht == 2 && GetVehicleModel(hitid)) { GetVehiclePos(hitid, tx, ty, tz); ok = true; }
			if (ok)
			{
				new Float:range = EE_WeaponRange(w);
				new Float:dist = GetPlayerDistanceFromPoint(playerid, tx, ty, tz);
				if (range > 0.0 && dist > range * (1.0 + float(gEE_Prot[EE_RANGE][dpValue]) / 100.0) + 5.0)
				{
					format(det, sizeof det, "acertou a %.0f m com arma %d (alcance %.0f m)", dist, w, range);
					EE_Detect(playerid, EE_RANGE, det);
					return 0;
				}
			}
		}

		if (EE_IsEnabled(EE_AIMBOT) && w != 38 && w != 25 && w != 26 && w != 27)
		{
			gEE_P[playerid][acAimShots]++;
			if (ht == 1) gEE_P[playerid][acAimHits]++;
			if (gEE_P[playerid][acAimShots] >= 40)
			{
				new pct = gEE_P[playerid][acAimHits] * 100 / gEE_P[playerid][acAimShots];
				if (pct >= gEE_Prot[EE_AIMBOT][dpValue])
				{
					format(det, sizeof det, "%d%% de acerto em %d tiros", pct, gEE_P[playerid][acAimShots]);
					EE_Detect(playerid, EE_AIMBOT, det);
				}
				gEE_P[playerid][acAimShots] = 0;
				gEE_P[playerid][acAimHits] = 0;
			}
		}

		if (w == 24 || w == 25 || w == 27 || w == 33 || w == 34) gEE_P[playerid][acCbugTick] = tick;
	}
	#if defined EE_OnPlayerWeaponShot
		return EE_OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, fX, fY, fZ);
	#else
		#pragma unused hitid, fX, fY, fZ
		return 1;
	#endif
}
#if defined _ALS_OnPlayerWeaponShot
	#undef OnPlayerWeaponShot
#else
	#define _ALS_OnPlayerWeaponShot
#endif
#define OnPlayerWeaponShot EE_OnPlayerWeaponShot
#if defined EE_OnPlayerWeaponShot
	forward EE_OnPlayerWeaponShot(playerid, EE_T_WEAPON:weaponid, EE_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ);
#endif

public OnPlayerGiveDamage(playerid, damagedid, Float:amount, EE_T_WEAPON:weaponid, bodypart)
{
	new w = _:weaponid;
	if (EE_ValidPlayer(playerid) && !EE_IsPlayerImmune(playerid) && EE_IsBulletWeapon(w))
	{

		if (EE_IsEnabled(EE_DAMAGE))
		{
			new Float:maxd = EE_WeaponDamage(w);
			if (maxd > 0.0 && (amount > maxd * 1.05 + 0.5 || amount != amount))
			{
				new det[64];
				format(det, sizeof det, "%.1f de dano com arma %d (max %.1f)", amount, w, maxd);
				EE_Detect(playerid, EE_DAMAGE, det);
			}
		}

		if (EE_IsEnabled(EE_GODMODE) && EE_ValidPlayer(damagedid) && amount > 0.0
			&& EE_RawState(damagedid) == 1 && !EE_IsPaused(damagedid)
			&& !(GetPlayerTeam(playerid) != NO_TEAM && GetPlayerTeam(playerid) == GetPlayerTeam(damagedid))
			&& GetTickCount() - gEE_P[damagedid][acSpawnTick] > 5000)
		{
			if (!gEE_P[damagedid][acGodTick])
			{
				new Float:h, Float:a;
				GetPlayerHealth(damagedid, h);
				GetPlayerArmour(damagedid, a);
				gEE_P[damagedid][acGodTick] = GetTickCount();
				gEE_P[damagedid][acGodHP] = h + a;
				gEE_P[damagedid][acGodHits] = 0;
			}
			gEE_P[damagedid][acGodHits]++;
		}
	}
	#if defined EE_OnPlayerGiveDamage
		return EE_OnPlayerGiveDamage(playerid, damagedid, amount, weaponid, bodypart);
	#else
		#pragma unused bodypart
		return 1;
	#endif
}
#if defined _ALS_OnPlayerGiveDamage
	#undef OnPlayerGiveDamage
#else
	#define _ALS_OnPlayerGiveDamage
#endif
#define OnPlayerGiveDamage EE_OnPlayerGiveDamage
#if defined EE_OnPlayerGiveDamage
	forward EE_OnPlayerGiveDamage(playerid, damagedid, Float:amount, EE_T_WEAPON:weaponid, bodypart);
#endif

public OnPlayerKeyStateChange(playerid, EE_T_KEY:newkeys, EE_T_KEY:oldkeys)
{

	if ((_:newkeys & 2) && !(_:oldkeys & 2) && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_CBUG)
		&& EE_RawState(playerid) == 1 && gEE_P[playerid][acCbugTick]
		&& GetTickCount() - gEE_P[playerid][acCbugTick] < gEE_Prot[EE_CBUG][dpValue])
	{
		new det[48];
		format(det, sizeof det, "agachou %d ms apos atirar", GetTickCount() - gEE_P[playerid][acCbugTick]);
		gEE_P[playerid][acCbugTick] = 0;
		EE_Detect(playerid, EE_CBUG, det);
	}
	#if defined EE_OnPlayerKeyStateChange
		return EE_OnPlayerKeyStateChange(playerid, newkeys, oldkeys);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerKeyStateChange
	#undef OnPlayerKeyStateChange
#else
	#define _ALS_OnPlayerKeyStateChange
#endif
#define OnPlayerKeyStateChange EE_OnPlayerKeyStateChange
#if defined EE_OnPlayerKeyStateChange
	forward EE_OnPlayerKeyStateChange(playerid, EE_T_KEY:newkeys, EE_T_KEY:oldkeys);
#endif

public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
	if (EE_ValidVehicle(vehicleid) && EE_ValidPlayer(playerid) && !EE_IsPlayerImmune(playerid))
	{
		if (EE_IsEnabled(EE_CRASHER) && (EE_BadFloat(new_x, 20000.0) || EE_BadFloat(new_y, 20000.0) || EE_BadFloat(new_z, 50000.0)
			|| EE_BadFloat(vel_x, 100.0) || EE_BadFloat(vel_y, 100.0) || EE_BadFloat(vel_z, 100.0)))
		{
			EE_Detect(playerid, EE_CRASHER, "sync de veiculo invalido");
			return 0;
		}
		if (EE_IsEnabled(EE_VEH_TROLL) && GetTickCount() >= gEE_VehImmuneUntil[vehicleid])
		{
			new Float:x, Float:y, Float:z;
			GetVehiclePos(vehicleid, x, y, z);
			new Float:dist = VectorSize(new_x - x, new_y - y, new_z - z);
			if (dist > float(gEE_Prot[EE_VEH_TROLL][dpValue]) || VectorSize(vel_x, vel_y, vel_z) > 3.0)
			{
				new det[64];
				format(det, sizeof det, "moveu veiculo %d por %.0f m", vehicleid, dist);
				EE_Detect(playerid, EE_VEH_TROLL, det);
				return 0;
			}
		}
	}
	#if defined EE_OnUnoccupiedVehicleUpdate
		return EE_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z);
	#else
		#pragma unused passenger_seat
		return 1;
	#endif
}
#if defined _ALS_OnUnoccupiedVehicleUpdate
	#undef OnUnoccupiedVehicleUpdate
#else
	#define _ALS_OnUnoccupiedVehicleUpdate
#endif
#define OnUnoccupiedVehicleUpdate EE_OnUnoccupiedVehicleUpdate
#if defined EE_OnUnoccupiedVehicleUpdate
	forward EE_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z);
#endif

public OnTrailerUpdate(playerid, vehicleid)
{

	if (EE_ValidPlayer(playerid) && EE_ValidVehicle(vehicleid) && EE_IsEnabled(EE_VEH_TROLL) && !EE_IsPlayerImmune(playerid))
	{
		new Float:x, Float:y, Float:z;
		GetVehiclePos(vehicleid, x, y, z);
		new Float:dist = GetPlayerDistanceFromPoint(playerid, x, y, z);
		if (dist > 30.0 + float(gEE_Prot[EE_VEH_TROLL][dpValue]))
		{
			new det[64];
			format(det, sizeof det, "puxou trailer %d a %.0f m", vehicleid, dist);
			EE_Detect(playerid, EE_VEH_TROLL, det);
			return 0;
		}
	}
	#if defined EE_OnTrailerUpdate
		return EE_OnTrailerUpdate(playerid, vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnTrailerUpdate
	#undef OnTrailerUpdate
#else
	#define _ALS_OnTrailerUpdate
#endif
#define OnTrailerUpdate EE_OnTrailerUpdate
#if defined EE_OnTrailerUpdate
	forward EE_OnTrailerUpdate(playerid, vehicleid);
#endif

public OnPlayerPickUpPickup(playerid, pickupid)
{
	if (0 <= pickupid < MAX_PICKUPS && gEE_Pickups[pickupid][dpkValid] && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_FAKEPICKUP) && !EE_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gEE_Pickups[pickupid][dpkX], gEE_Pickups[pickupid][dpkY], gEE_Pickups[pickupid][dpkZ]);
		if (dist > float(gEE_Prot[EE_FAKEPICKUP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "pickup %d a %.0f m", pickupid, dist);
			if (EE_Detect(playerid, EE_FAKEPICKUP, det)) return 1;
		}
	}
	#if defined EE_OnPlayerPickUpPickup
		return EE_OnPlayerPickUpPickup(playerid, pickupid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerPickUpPickup
	#undef OnPlayerPickUpPickup
#else
	#define _ALS_OnPlayerPickUpPickup
#endif
#define OnPlayerPickUpPickup EE_OnPlayerPickUpPickup
#if defined EE_OnPlayerPickUpPickup
	forward EE_OnPlayerPickUpPickup(playerid, pickupid);
#endif

public OnPlayerEnterCheckpoint(playerid)
{
	if (gEE_P[playerid][acCP] && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_FAKECP) && !EE_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gEE_P[playerid][acCPX], gEE_P[playerid][acCPY], gEE_P[playerid][acCPZ]);
		if (dist > gEE_P[playerid][acCPSize] + float(gEE_Prot[EE_FAKECP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "checkpoint a %.0f m", dist);
			if (EE_Detect(playerid, EE_FAKECP, det)) return 1;
		}
	}
	#if defined EE_OnPlayerEnterCheckpoint
		return EE_OnPlayerEnterCheckpoint(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterCheckpoint
	#undef OnPlayerEnterCheckpoint
#else
	#define _ALS_OnPlayerEnterCheckpoint
#endif
#define OnPlayerEnterCheckpoint EE_OnPlayerEnterCheckpoint
#if defined EE_OnPlayerEnterCheckpoint
	forward EE_OnPlayerEnterCheckpoint(playerid);
#endif

public OnPlayerEnterRaceCheckpoint(playerid)
{
	if (gEE_P[playerid][acRCP] && EE_ValidPlayer(playerid) && EE_IsEnabled(EE_FAKECP) && !EE_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gEE_P[playerid][acRCPX], gEE_P[playerid][acRCPY], gEE_P[playerid][acRCPZ]);
		if (dist > gEE_P[playerid][acRCPSize] + float(gEE_Prot[EE_FAKECP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "race checkpoint a %.0f m", dist);
			if (EE_Detect(playerid, EE_FAKECP, det)) return 1;
		}
	}
	#if defined EE_OnPlayerEnterRaceCP
		return EE_OnPlayerEnterRaceCP(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterRaceCP
	#undef OnPlayerEnterRaceCheckpoint
#else
	#define _ALS_OnPlayerEnterRaceCP
#endif
#define OnPlayerEnterRaceCheckpoint EE_OnPlayerEnterRaceCP
#if defined EE_OnPlayerEnterRaceCP
	forward EE_OnPlayerEnterRaceCP(playerid);
#endif

public OnVehicleMod(playerid, vehicleid, componentid)
{
	if (EE_ValidPlayer(playerid) && EE_IsEnabled(EE_TUNING) && GetPlayerInterior(playerid) == 0)
	{
		new det[48];
		format(det, sizeof det, "componente %d fora da oficina", componentid);
		if (EE_Detect(playerid, EE_TUNING, det)) return 0;
	}
	#if defined EE_OnVehicleMod
		return EE_OnVehicleMod(playerid, vehicleid, componentid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleMod
	#undef OnVehicleMod
#else
	#define _ALS_OnVehicleMod
#endif
#define OnVehicleMod EE_OnVehicleMod
#if defined EE_OnVehicleMod
	forward EE_OnVehicleMod(playerid, vehicleid, componentid);
#endif

public OnVehicleRespray(playerid, vehicleid, color1, color2)
{

	if (EE_ValidVehicle(vehicleid))
	{
		gEE_VehHealth[vehicleid] = 1000.0;
		gEE_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	#if defined EE_OnVehicleRespray
		return EE_OnVehicleRespray(playerid, vehicleid, color1, color2);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleRespray
	#undef OnVehicleRespray
#else
	#define _ALS_OnVehicleRespray
#endif
#define OnVehicleRespray EE_OnVehicleRespray
#if defined EE_OnVehicleRespray
	forward EE_OnVehicleRespray(playerid, vehicleid, color1, color2);
#endif

public OnVehicleSpawn(vehicleid)
{
	if (EE_ValidVehicle(vehicleid))
	{
		gEE_VehHealth[vehicleid] = 1000.0;
		gEE_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	#if defined EE_OnVehicleSpawn
		return EE_OnVehicleSpawn(vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleSpawn
	#undef OnVehicleSpawn
#else
	#define _ALS_OnVehicleSpawn
#endif
#define OnVehicleSpawn EE_OnVehicleSpawn
#if defined EE_OnVehicleSpawn
	forward EE_OnVehicleSpawn(vehicleid);
#endif

#if !EE_OMP

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
	if (EE_ValidPlayer(playerid) && gEE_Global && gEE_Prot[EE_DIALOG][dpEnabled])
	{
		if (dialogid != gEE_P[playerid][acDialog])
		{
			new det[48];
			format(det, sizeof det, "dialog %d (esperado %d)", dialogid, gEE_P[playerid][acDialog]);
			if (EE_Detect(playerid, EE_DIALOG, det)) return 1;
		}
	}
	gEE_P[playerid][acDialog] = -1;
	#if defined EE_OnDialogResponse
		return EE_OnDialogResponse(playerid, dialogid, response, listitem, inputtext);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnDialogResponse
	#undef OnDialogResponse
#else
	#define _ALS_OnDialogResponse
#endif
#define OnDialogResponse EE_OnDialogResponse
#if defined EE_OnDialogResponse
	forward EE_OnDialogResponse(playerid, dialogid, response, listitem, inputtext[]);
#endif
#endif

forward EE_R_GiveMoney(playerid, amount);
forward EE_R_ResetMoney(playerid);
forward EE_R_GetMoney(playerid);
forward EE_R_SetHealth(playerid, Float:value);
forward EE_R_SetArmour(playerid, Float:value);
forward EE_R_GiveWeapon(playerid, weaponid, ammo);
forward EE_R_ResetWeapons(playerid);
forward EE_R_SetAmmo(playerid, weaponid, ammo);
forward EE_R_PosImmunity(playerid, ms);
forward EE_R_VehImmunity(vehicleid, Float:health);
forward EE_R_Jetpack(playerid);
forward EE_R_Dialog(playerid, dialogid);
forward EE_R_Spawn(playerid);
forward EE_R_Checkpoint(playerid, race, Float:x, Float:y, Float:z, Float:size);
forward EE_R_Pickup(pickupid, Float:x, Float:y, Float:z);

stock EE_T_BOOL:EE_GivePlayerMoney(playerid, money)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acMoney] += money;
		gEE_P[playerid][acMoneyTick] = GetTickCount();
	}
	return GivePlayerMoney(playerid, money);
}
#if defined _ALS_GivePlayerMoney
	#undef GivePlayerMoney
#else
	#define _ALS_GivePlayerMoney
#endif
#define GivePlayerMoney EE_GivePlayerMoney

stock EE_T_BOOL:EE_ResetPlayerMoney(playerid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acMoney] = 0;
		gEE_P[playerid][acMoneyTick] = GetTickCount();
	}
	return ResetPlayerMoney(playerid);
}
#if defined _ALS_ResetPlayerMoney
	#undef ResetPlayerMoney
#else
	#define _ALS_ResetPlayerMoney
#endif
#define ResetPlayerMoney EE_ResetPlayerMoney

stock EE_GetPlayerMoney(playerid)
{
	if (0 <= playerid < MAX_PLAYERS && IsPlayerConnected(playerid) && !IsPlayerNPC(playerid)) return gEE_P[playerid][acMoney];
	return GetPlayerMoney(playerid);
}
#if defined _ALS_GetPlayerMoney
	#undef GetPlayerMoney
#else
	#define _ALS_GetPlayerMoney
#endif
#define GetPlayerMoney EE_GetPlayerMoney

stock EE_T_BOOL:EE_SetPlayerHealth(playerid, Float:health)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acHealth] = health;
		gEE_P[playerid][acHealthTick] = GetTickCount();
	}
	return SetPlayerHealth(playerid, health);
}
#if defined _ALS_SetPlayerHealth
	#undef SetPlayerHealth
#else
	#define _ALS_SetPlayerHealth
#endif
#define SetPlayerHealth EE_SetPlayerHealth

stock EE_T_BOOL:EE_SetPlayerArmour(playerid, Float:armour)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acArmour] = armour;
		gEE_P[playerid][acArmourTick] = GetTickCount();
	}
	return SetPlayerArmour(playerid, armour);
}
#if defined _ALS_SetPlayerArmour
	#undef SetPlayerArmour
#else
	#define _ALS_SetPlayerArmour
#endif
#define SetPlayerArmour EE_SetPlayerArmour

static stock EE_TrackGiveWeapon(playerid, weaponid, ammo)
{
	new slot = EE_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		if (gEE_P[playerid][acWeapons][slot] == weaponid) gEE_P[playerid][acAmmo][slot] += ammo;
		else gEE_P[playerid][acAmmo][slot] = ammo;
		gEE_P[playerid][acWeapons][slot] = weaponid;
		gEE_P[playerid][acWeaponTick] = GetTickCount();
	}
}

stock EE_T_BOOL:EE_GivePlayerWeapon(playerid, EE_T_WEAPON:weaponid, ammo)
{
	EE_TrackGiveWeapon(playerid, _:weaponid, ammo);
	return GivePlayerWeapon(playerid, weaponid, ammo);
}
#if defined _ALS_GivePlayerWeapon
	#undef GivePlayerWeapon
#else
	#define _ALS_GivePlayerWeapon
#endif
#define GivePlayerWeapon EE_GivePlayerWeapon

stock EE_T_BOOL:EE_SetPlayerAmmo(playerid, EE_T_WEAPON:weaponid, ammo)
{
	new slot = EE_WeaponSlot(_:weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acAmmo][slot] = ammo;
		gEE_P[playerid][acWeaponTick] = GetTickCount();
	}
	return SetPlayerAmmo(playerid, weaponid, ammo);
}
#if defined _ALS_SetPlayerAmmo
	#undef SetPlayerAmmo
#else
	#define _ALS_SetPlayerAmmo
#endif
#define SetPlayerAmmo EE_SetPlayerAmmo

stock EE_T_BOOL:EE_ResetPlayerWeapons(playerid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		for (new s = 0; s < 13; s++)
		{
			gEE_P[playerid][acWeapons][s] = 0;
			gEE_P[playerid][acAmmo][s] = 0;
		}
		gEE_P[playerid][acWeaponTick] = GetTickCount();
	}
	return ResetPlayerWeapons(playerid);
}
#if defined _ALS_ResetPlayerWeapons
	#undef ResetPlayerWeapons
#else
	#define _ALS_ResetPlayerWeapons
#endif
#define ResetPlayerWeapons EE_ResetPlayerWeapons

// ======================================================================
//  Categoria EXTRA (v2.3.0): interior/VW, freeze, skin, animacao, nick,
//  spam de objeto/PM/buzina. Os wrappers abaixo fazem o EagleEYE conhecer
//  as mudancas legitimas do servidor, para nao gerar falso positivo.
// ======================================================================

stock EE_T_BOOL:EE_SetPlayerInterior(playerid, interiorid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acInterior] = interiorid;
		gEE_P[playerid][acWorldImmuneUntil] = GetTickCount() + 2000;
	}
	return SetPlayerInterior(playerid, interiorid);
}
#if defined _ALS_SetPlayerInterior
	#undef SetPlayerInterior
#else
	#define _ALS_SetPlayerInterior
#endif
#define SetPlayerInterior EE_SetPlayerInterior

stock EE_T_BOOL:EE_SetPlayerVirtualWorld(playerid, worldid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acVWorld] = worldid;
		gEE_P[playerid][acWorldImmuneUntil] = GetTickCount() + 2000;
	}
	return SetPlayerVirtualWorld(playerid, worldid);
}
#if defined _ALS_SetPlayerVirtualWorld
	#undef SetPlayerVirtualWorld
#else
	#define _ALS_SetPlayerVirtualWorld
#endif
#define SetPlayerVirtualWorld EE_SetPlayerVirtualWorld

stock EE_T_BOOL:EE_TogglePlayerControllable(playerid, EE_T_BOOL:toggle)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acFrozen] = (toggle == EE_T_BOOL:0) ? true : false;
		gEE_P[playerid][acPosImmuneUntil] = GetTickCount() + 2000;
	}
	return TogglePlayerControllable(playerid, toggle);
}
#if defined _ALS_TogglePlayerControllable
	#undef TogglePlayerControllable
#else
	#define _ALS_TogglePlayerControllable
#endif
#define TogglePlayerControllable EE_TogglePlayerControllable

// Checa nick invalido/spoof. Chamado automaticamente em OnPlayerConnect.
static stock EE_CheckNickname(playerid)
{
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acNPC] || !EE_IsEnabled(EE_NICKNAME)) return;
	new name[MAX_PLAYER_NAME + 1];
	GetPlayerName(playerid, name, sizeof name);
	new len = strlen(name);
	new bool:bad = (len < 3 || len > 24);
	for (new i = 0; !bad && i < len; i++)
	{
		new c = name[i];
		if (!((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (c >= '0' && c <= '9') ||
		      c == '[' || c == ']' || c == '(' || c == ')' ||
		      c == '$' || c == '@' || c == '.' || c == '_' || c == '='))
			bad = true;
	}
	if (bad)
	{
		new det[64];
		format(det, sizeof det, "nick invalido: %.40s", name);
		EE_Detect(playerid, EE_NICKNAME, det);
	}
}

// Checa skin invalido. Chamado automaticamente em OnPlayerSpawn.
static stock EE_CheckSkin(playerid)
{
	if (!EE_ValidPlayer(playerid) || EE_IsPlayerImmune(playerid) || !EE_IsEnabled(EE_SKINHACK)) return;
	new skin = GetPlayerSkin(playerid);
	if (skin < 0 || skin > 311 || skin == 74)
	{
		new det[48];
		format(det, sizeof det, "skin invalido %d", skin);
		EE_Detect(playerid, EE_SKINHACK, det);
	}
}

// Checa animacao crasher, troca de interior/VW e freeze bypass.
// Chamado automaticamente em OnPlayerUpdate.
static stock EE_CheckExtraUpdate(playerid)
{
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acNPC] || EE_IsPlayerImmune(playerid)) return;
	new tick = GetTickCount();

	if (EE_IsEnabled(EE_ANIMCRASH))
	{
		new idx = GetPlayerAnimationIndex(playerid);
		if (idx < 0 || idx > 1702)
		{
			new det[48];
			format(det, sizeof det, "animacao %d fora da faixa", idx);
			EE_Detect(playerid, EE_ANIMCRASH, det);
		}
	}

	if (EE_IsEnabled(EE_WORLDJUMP) && tick >= gEE_P[playerid][acWorldImmuneUntil])
	{
		new ci = GetPlayerInterior(playerid), cw = GetPlayerVirtualWorld(playerid);
		if (ci != gEE_P[playerid][acInterior])
		{
			new det[72];
			format(det, sizeof det, "mudou interior %d->%d sem o servidor", gEE_P[playerid][acInterior], ci);
			EE_Detect(playerid, EE_WORLDJUMP, det);
			gEE_P[playerid][acInterior] = ci;
		}
		else if (cw != gEE_P[playerid][acVWorld])
		{
			new det[72];
			format(det, sizeof det, "mudou VW %d->%d sem o servidor", gEE_P[playerid][acVWorld], cw);
			EE_Detect(playerid, EE_WORLDJUMP, det);
			gEE_P[playerid][acVWorld] = cw;
		}
	}

	if (EE_IsEnabled(EE_FREEZEBYPASS) && gEE_P[playerid][acFrozen] &&
	    EE_RawState(playerid) == PLAYER_STATE_ONFOOT && tick >= gEE_P[playerid][acPosImmuneUntil])
	{
		new Float:x, Float:y, Float:z;
		GetPlayerPos(playerid, x, y, z);
		new Float:dx = x - gEE_P[playerid][acLastX], Float:dy = y - gEE_P[playerid][acLastY], Float:dz = z - gEE_P[playerid][acLastZ];
		if ((dx * dx + dy * dy + dz * dz) > 9.0)   // moveu mais de 3 unidades estando congelado
		{
			EE_Detect(playerid, EE_FREEZEBYPASS, "moveu-se congelado pelo servidor");
			gEE_P[playerid][acPosImmuneUntil] = tick + 2000;
		}
	}
}

// Helper opt-in: chame em CreateObject/AttachObjectToPlayer do gamemode.
// Retorna true se o jogador estourou o limite (spam de objeto).
stock bool:EE_ObjectSpamCheck(playerid)
{
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acNPC] || EE_IsPlayerImmune(playerid) || !EE_IsEnabled(EE_OBJSPAM)) return false;
	new tick = GetTickCount();
	if (tick - gEE_P[playerid][acObjTick] > 5000) { gEE_P[playerid][acObjTick] = tick; gEE_P[playerid][acObjCount] = 0; }
	if (++gEE_P[playerid][acObjCount] > gEE_Prot[EE_OBJSPAM][dpValue])
	{
		gEE_P[playerid][acObjCount] = 0;
		return EE_Detect(playerid, EE_OBJSPAM, "criou objetos em excesso") ? true : false;
	}
	return false;
}

// Helper opt-in: chame no comando de mensagem privada (PM) do gamemode.
// Retorna true se o jogador estourou o limite (flood de PM).
stock bool:EE_PMFloodCheck(playerid)
{
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acNPC] || EE_IsPlayerImmune(playerid) || !EE_IsEnabled(EE_PMFLOOD)) return false;
	new tick = GetTickCount();
	if (tick - gEE_P[playerid][acPmTick] > 5000) { gEE_P[playerid][acPmTick] = tick; gEE_P[playerid][acPmCount] = 0; }
	if (++gEE_P[playerid][acPmCount] > gEE_Prot[EE_PMFLOOD][dpValue])
	{
		gEE_P[playerid][acPmCount] = 0;
		return EE_Detect(playerid, EE_PMFLOOD, "mensagens privadas em excesso") ? true : false;
	}
	return false;
}

// Helper opt-in: chame quando detectar a buzina (ex.: tecla no vehicle).
// Retorna true se o jogador estourou o limite (spam de buzina).
stock bool:EE_HornCheck(playerid)
{
	if (!EE_ValidPlayer(playerid) || gEE_P[playerid][acNPC] || EE_IsPlayerImmune(playerid) || !EE_IsEnabled(EE_HORNSPAM)) return false;
	new tick = GetTickCount();
	if (tick - gEE_P[playerid][acHornTick] > 3000) { gEE_P[playerid][acHornTick] = tick; gEE_P[playerid][acHornCount] = 0; }
	if (++gEE_P[playerid][acHornCount] > gEE_Prot[EE_HORNSPAM][dpValue])
	{
		gEE_P[playerid][acHornCount] = 0;
		return EE_Detect(playerid, EE_HORNSPAM, "buzina em excesso") ? true : false;
	}
	return false;
}

stock EE_T_BOOL:EE_SetSpawnInfo(playerid, team, skin, Float:x, Float:y, Float:z, Float:rotation,
	EE_T_WEAPON:weapon1 = EE_T_WEAPON:0, weapon1_ammo = 0,
	EE_T_WEAPON:weapon2 = EE_T_WEAPON:0, weapon2_ammo = 0,
	EE_T_WEAPON:weapon3 = EE_T_WEAPON:0, weapon3_ammo = 0)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acSpawnWeapons][0] = _:weapon1; gEE_P[playerid][acSpawnAmmo][0] = weapon1_ammo;
		gEE_P[playerid][acSpawnWeapons][1] = _:weapon2; gEE_P[playerid][acSpawnAmmo][1] = weapon2_ammo;
		gEE_P[playerid][acSpawnWeapons][2] = _:weapon3; gEE_P[playerid][acSpawnAmmo][2] = weapon3_ammo;
	}
	return SetSpawnInfo(playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
}
#if defined _ALS_SetSpawnInfo
	#undef SetSpawnInfo
#else
	#define _ALS_SetSpawnInfo
#endif
#define SetSpawnInfo EE_SetSpawnInfo

stock EE_AddPlayerClass(skin, Float:x, Float:y, Float:z, Float:angle,
	EE_T_WEAPON:weapon1 = EE_T_WEAPON:0, weapon1_ammo = 0,
	EE_T_WEAPON:weapon2 = EE_T_WEAPON:0, weapon2_ammo = 0,
	EE_T_WEAPON:weapon3 = EE_T_WEAPON:0, weapon3_ammo = 0)
{
	new classid = AddPlayerClass(skin, x, y, z, angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
	if (0 <= classid < EE_MAX_CLASSES)
	{
		gEE_ClassWeapons[classid][0] = _:weapon1; gEE_ClassWeapons[classid][1] = weapon1_ammo;
		gEE_ClassWeapons[classid][2] = _:weapon2; gEE_ClassWeapons[classid][3] = weapon2_ammo;
		gEE_ClassWeapons[classid][4] = _:weapon3; gEE_ClassWeapons[classid][5] = weapon3_ammo;
	}
	return classid;
}
#if defined _ALS_AddPlayerClass
	#undef AddPlayerClass
#else
	#define _ALS_AddPlayerClass
#endif
#define AddPlayerClass EE_AddPlayerClass

stock EE_AddPlayerClassEx(teamid, skin, Float:x, Float:y, Float:z, Float:angle,
	EE_T_WEAPON:weapon1 = EE_T_WEAPON:0, weapon1_ammo = 0,
	EE_T_WEAPON:weapon2 = EE_T_WEAPON:0, weapon2_ammo = 0,
	EE_T_WEAPON:weapon3 = EE_T_WEAPON:0, weapon3_ammo = 0)
{
	new classid = AddPlayerClassEx(teamid, skin, x, y, z, angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
	if (0 <= classid < EE_MAX_CLASSES)
	{
		gEE_ClassWeapons[classid][0] = _:weapon1; gEE_ClassWeapons[classid][1] = weapon1_ammo;
		gEE_ClassWeapons[classid][2] = _:weapon2; gEE_ClassWeapons[classid][3] = weapon2_ammo;
		gEE_ClassWeapons[classid][4] = _:weapon3; gEE_ClassWeapons[classid][5] = weapon3_ammo;
	}
	return classid;
}
#if defined _ALS_AddPlayerClassEx
	#undef AddPlayerClassEx
#else
	#define _ALS_AddPlayerClassEx
#endif
#define AddPlayerClassEx EE_AddPlayerClassEx

stock EE_T_BOOL:EE_SpawnPlayer(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acSpawnAllowed] = true;
	return SpawnPlayer(playerid);
}
#if defined _ALS_SpawnPlayer
	#undef SpawnPlayer
#else
	#define _ALS_SpawnPlayer
#endif
#define SpawnPlayer EE_SpawnPlayer

stock EE_T_BOOL:EE_SetPlayerPos(playerid, Float:x, Float:y, Float:z)
{
	EE_PositionImmunity(playerid, 3000);
	return SetPlayerPos(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPos
	#undef SetPlayerPos
#else
	#define _ALS_SetPlayerPos
#endif
#define SetPlayerPos EE_SetPlayerPos

stock EE_T_BOOL:EE_SetPlayerPosFindZ(playerid, Float:x, Float:y, Float:z)
{
	EE_PositionImmunity(playerid, 3000);
	return SetPlayerPosFindZ(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPosFindZ
	#undef SetPlayerPosFindZ
#else
	#define _ALS_SetPlayerPosFindZ
#endif
#define SetPlayerPosFindZ EE_SetPlayerPosFindZ

stock EE_T_BOOL:EE_SetPlayerVelocity(playerid, Float:x, Float:y, Float:z)
{
	EE_PositionImmunity(playerid, 4000);
	return SetPlayerVelocity(playerid, x, y, z);
}
#if defined _ALS_SetPlayerVelocity
	#undef SetPlayerVelocity
#else
	#define _ALS_SetPlayerVelocity
#endif
#define SetPlayerVelocity EE_SetPlayerVelocity

stock EE_T_BOOL:EE_PutPlayerInVehicle(playerid, vehicleid, seatid)
{
	EE_PositionImmunity(playerid, 3000);
	return PutPlayerInVehicle(playerid, vehicleid, seatid);
}
#if defined _ALS_PutPlayerInVehicle
	#undef PutPlayerInVehicle
#else
	#define _ALS_PutPlayerInVehicle
#endif
#define PutPlayerInVehicle EE_PutPlayerInVehicle

stock EE_T_BOOL:EE_TogglePlayerSpectating(playerid, EE_T_BOOL:toggle)
{
	EE_PositionImmunity(playerid, 5000);
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acSpawnTick] = GetTickCount();
		if (!toggle) gEE_P[playerid][acSpawnAllowed] = true;
	}
	return TogglePlayerSpectating(playerid, toggle);
}
#if defined _ALS_TogglePlayerSpectating
	#undef TogglePlayerSpectating
#else
	#define _ALS_TogglePlayerSpectating
#endif
#define TogglePlayerSpectating EE_TogglePlayerSpectating

static stock EE_VehicleOccupantsImmunity(vehicleid, ms)
{
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && GetPlayerVehicleID(i) == vehicleid) EE_PositionImmunity(i, ms);
	}
	if (EE_ValidVehicle(vehicleid)) gEE_VehImmuneUntil[vehicleid] = GetTickCount() + ms;
}

stock EE_T_BOOL:EE_SetVehiclePos(vehicleid, Float:x, Float:y, Float:z)
{
	EE_VehicleOccupantsImmunity(vehicleid, 3000);
	return SetVehiclePos(vehicleid, x, y, z);
}
#if defined _ALS_SetVehiclePos
	#undef SetVehiclePos
#else
	#define _ALS_SetVehiclePos
#endif
#define SetVehiclePos EE_SetVehiclePos

stock EE_T_BOOL:EE_SetVehicleVelocity(vehicleid, Float:x, Float:y, Float:z)
{
	EE_VehicleOccupantsImmunity(vehicleid, 4000);
	return SetVehicleVelocity(vehicleid, x, y, z);
}
#if defined _ALS_SetVehicleVelocity
	#undef SetVehicleVelocity
#else
	#define _ALS_SetVehicleVelocity
#endif
#define SetVehicleVelocity EE_SetVehicleVelocity

stock EE_T_BOOL:EE_SetPlayerSpecialAction(playerid, EE_T_SACTION:actionid)
{
	if (0 <= playerid < MAX_PLAYERS && _:actionid == 2) gEE_P[playerid][acJetpack] = true;
	return SetPlayerSpecialAction(playerid, actionid);
}
#if defined _ALS_SetPlayerSpecialAction
	#undef SetPlayerSpecialAction
#else
	#define _ALS_SetPlayerSpecialAction
#endif
#define SetPlayerSpecialAction EE_SetPlayerSpecialAction

stock EE_T_BOOL:EE_SetPlayerCheckpoint(playerid, Float:x, Float:y, Float:z, Float:size)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acCP] = true;
		gEE_P[playerid][acCPX] = x; gEE_P[playerid][acCPY] = y; gEE_P[playerid][acCPZ] = z;
		gEE_P[playerid][acCPSize] = size;
	}
	return SetPlayerCheckpoint(playerid, x, y, z, size);
}
#if defined _ALS_SetPlayerCheckpoint
	#undef SetPlayerCheckpoint
#else
	#define _ALS_SetPlayerCheckpoint
#endif
#define SetPlayerCheckpoint EE_SetPlayerCheckpoint

stock EE_T_BOOL:EE_DisablePlayerCheckpoint(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acCP] = false;
	return DisablePlayerCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerCheckpoint
	#undef DisablePlayerCheckpoint
#else
	#define _ALS_DisablePlayerCheckpoint
#endif
#define DisablePlayerCheckpoint EE_DisablePlayerCheckpoint

stock EE_T_BOOL:EE_SetPlayerRaceCheckpoint(playerid, EE_T_CPTYPE:type, Float:x, Float:y, Float:z, Float:nextx, Float:nexty, Float:nextz, Float:size)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acRCP] = true;
		gEE_P[playerid][acRCPX] = x; gEE_P[playerid][acRCPY] = y; gEE_P[playerid][acRCPZ] = z;
		gEE_P[playerid][acRCPSize] = size;
	}
	return SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size);
}
#if defined _ALS_SetPlayerRaceCheckpoint
	#undef SetPlayerRaceCheckpoint
#else
	#define _ALS_SetPlayerRaceCheckpoint
#endif
#define SetPlayerRaceCheckpoint EE_SetPlayerRaceCheckpoint

stock EE_T_BOOL:EE_DisablePlayerRaceCP(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acRCP] = false;
	return DisablePlayerRaceCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerRaceCP
	#undef DisablePlayerRaceCheckpoint
#else
	#define _ALS_DisablePlayerRaceCP
#endif
#define DisablePlayerRaceCheckpoint EE_DisablePlayerRaceCP

static stock EE_TrackPickup(pickupid, Float:x, Float:y, Float:z)
{
	if (0 <= pickupid < MAX_PICKUPS)
	{
		gEE_Pickups[pickupid][dpkValid] = true;
		gEE_Pickups[pickupid][dpkX] = x;
		gEE_Pickups[pickupid][dpkY] = y;
		gEE_Pickups[pickupid][dpkZ] = z;
	}
	return pickupid;
}

stock EE_CreatePickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{
	return EE_TrackPickup(CreatePickup(model, type, x, y, z, virtualworld), x, y, z);
}
#if defined _ALS_CreatePickup
	#undef CreatePickup
#else
	#define _ALS_CreatePickup
#endif
#define CreatePickup EE_CreatePickup

stock EE_AddStaticPickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{

	return (EE_TrackPickup(CreatePickup(model, type, x, y, z, virtualworld), x, y, z) != -1) ? 1 : 0;
}
#if defined _ALS_AddStaticPickup
	#undef AddStaticPickup
#else
	#define _ALS_AddStaticPickup
#endif
#define AddStaticPickup EE_AddStaticPickup

stock EE_T_BOOL:EE_DestroyPickup(pickupid)
{
	if (0 <= pickupid < MAX_PICKUPS) gEE_Pickups[pickupid][dpkValid] = false;
	return DestroyPickup(pickupid);
}
#if defined _ALS_DestroyPickup
	#undef DestroyPickup
#else
	#define _ALS_DestroyPickup
#endif
#define DestroyPickup EE_DestroyPickup

stock EE_T_BOOL:EE_SetVehicleHealth(vehicleid, Float:health)
{
	if (EE_ValidVehicle(vehicleid)) gEE_VehHealth[vehicleid] = health;
	return SetVehicleHealth(vehicleid, health);
}
#if defined _ALS_SetVehicleHealth
	#undef SetVehicleHealth
#else
	#define _ALS_SetVehicleHealth
#endif
#define SetVehicleHealth EE_SetVehicleHealth

stock EE_T_BOOL:EE_RepairVehicle(vehicleid)
{
	if (EE_ValidVehicle(vehicleid))
	{
		gEE_VehHealth[vehicleid] = 1000.0;
		gEE_VehImmuneUntil[vehicleid] = GetTickCount() + 2000;
	}
	return RepairVehicle(vehicleid);
}
#if defined _ALS_RepairVehicle
	#undef RepairVehicle
#else
	#define _ALS_RepairVehicle
#endif
#define RepairVehicle EE_RepairVehicle

static stock EE_NewVehicle(vehicleid)
{
	if (EE_ValidVehicle(vehicleid))
	{
		gEE_VehHealth[vehicleid] = 1000.0;
		gEE_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	return vehicleid;
}

stock EE_CreateVehicle(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2, respawn_delay, EE_T_BOOL:addsiren = EE_T_BOOL:0)
{
	return EE_NewVehicle(CreateVehicle(modelid, x, y, z, angle, color1, color2, respawn_delay, addsiren));
}
#if defined _ALS_CreateVehicle
	#undef CreateVehicle
#else
	#define _ALS_CreateVehicle
#endif
#define CreateVehicle EE_CreateVehicle

stock EE_AddStaticVehicle(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2)
{
	return EE_NewVehicle(AddStaticVehicle(modelid, x, y, z, angle, color1, color2));
}
#if defined _ALS_AddStaticVehicle
	#undef AddStaticVehicle
#else
	#define _ALS_AddStaticVehicle
#endif
#define AddStaticVehicle EE_AddStaticVehicle

stock EE_AddStaticVehicleEx(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2, respawn_delay, EE_T_BOOL:addsiren = EE_T_BOOL:0)
{
	return EE_NewVehicle(AddStaticVehicleEx(modelid, x, y, z, angle, color1, color2, respawn_delay, addsiren));
}
#if defined _ALS_AddStaticVehicleEx
	#undef AddStaticVehicleEx
#else
	#define _ALS_AddStaticVehicleEx
#endif
#define AddStaticVehicleEx EE_AddStaticVehicleEx

#if !EE_OMP
stock EE_ShowPlayerDialog(playerid, dialogid, style, const caption[], const info[], const button1[], const button2[])
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acDialog] = dialogid;
	return ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2);
}
#if defined _ALS_ShowPlayerDialog
	#undef ShowPlayerDialog
#else
	#define _ALS_ShowPlayerDialog
#endif
#define ShowPlayerDialog EE_ShowPlayerDialog
#endif

public EE_R_GiveMoney(playerid, amount)          { GivePlayerMoney(playerid, amount); return 1; }
public EE_R_ResetMoney(playerid)                 { ResetPlayerMoney(playerid); return 1; }
public EE_R_GetMoney(playerid)                   { return GetPlayerMoney(playerid); }
public EE_R_SetHealth(playerid, Float:value)     { SetPlayerHealth(playerid, value); return 1; }
public EE_R_SetArmour(playerid, Float:value)     { SetPlayerArmour(playerid, value); return 1; }
public EE_R_GiveWeapon(playerid, weaponid, ammo)
{
	EE_TrackGiveWeapon(playerid, weaponid, ammo);
	EE_RawGiveWeapon(playerid, weaponid, ammo);
	return 1;
}
public EE_R_SetAmmo(playerid, weaponid, ammo)
{
	new slot = EE_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gEE_P[playerid][acAmmo][slot] = ammo;
		gEE_P[playerid][acWeaponTick] = GetTickCount();
	}
	EE_RawSetAmmo(playerid, weaponid, ammo);
	return 1;
}
public EE_R_ResetWeapons(playerid)               { ResetPlayerWeapons(playerid); return 1; }
public EE_R_PosImmunity(playerid, ms)            { EE_PositionImmunity(playerid, ms); return 1; }
public EE_R_VehImmunity(vehicleid, Float:health)
{

	if (EE_ValidVehicle(vehicleid) && health >= 0.0) gEE_VehHealth[vehicleid] = health;
	EE_VehicleOccupantsImmunity(vehicleid, 3000);
	return 1;
}
public EE_R_Jetpack(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acJetpack] = true;
	return 1;
}
public EE_R_Dialog(playerid, dialogid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acDialog] = dialogid;
	return 1;
}
public EE_R_Spawn(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gEE_P[playerid][acSpawnAllowed] = true;
	return 1;
}
public EE_R_Checkpoint(playerid, race, Float:x, Float:y, Float:z, Float:size)
{
	if (!(0 <= playerid < MAX_PLAYERS)) return 1;

	if (race)
	{
		gEE_P[playerid][acRCP] = size >= 0.0;
		gEE_P[playerid][acRCPX] = x; gEE_P[playerid][acRCPY] = y; gEE_P[playerid][acRCPZ] = z;
		gEE_P[playerid][acRCPSize] = size;
	}
	else
	{
		gEE_P[playerid][acCP] = size >= 0.0;
		gEE_P[playerid][acCPX] = x; gEE_P[playerid][acCPY] = y; gEE_P[playerid][acCPZ] = z;
		gEE_P[playerid][acCPSize] = size;
	}
	return 1;
}
public EE_R_Pickup(pickupid, Float:x, Float:y, Float:z)
{

	if (0 <= pickupid < MAX_PICKUPS)
	{
		if (x < -90000.0) gEE_Pickups[pickupid][dpkValid] = false;
		else EE_TrackPickup(pickupid, x, y, z);
	}
	return 1;
}
