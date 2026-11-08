/*
 *  ===========================================================================
 *   Drizzie City Anti-Cheat (DCAC) - include para GAMEMODE
 *   Compatível com SA-MP 0.3.7 (R2+) / 0.3.DL e open.mp
 *  ===========================================================================
 *
 *   Todas as proteções podem ser ativadas/desativadas pelo Discord (bot em
 *   anticheat/bot). O servidor consulta o bot periodicamente via HTTP nativo
 *   (não precisa de nenhum plugin .dll/.so extra).
 *
 *   USO (no topo do gamemode):
 *
 *       #include <open.mp>          // ou <a_samp>
 *
 *       #define DCAC_API_HOST "127.0.0.1:8090"     // ip:porta do bot
 *       #define DCAC_API_KEY  "troque_esta_chave"  // = AC_API_KEY do bot
 *       #include <drizzie_ac>
 *
 *       // ... demais includes (zcmd, sscanf, streamer, etc.)
 *
 *   Inclua o drizzie_ac LOGO DEPOIS do a_samp/open.mp e ANTES de qualquer
 *   outro include que chame GivePlayerMoney, GivePlayerWeapon, SetPlayerPos,
 *   etc., para que todas as chamadas passem pelo anti-cheat.
 *
 *   Filterscripts que dão dinheiro/armas/vida/teleportam devem usar
 *   <drizzie_ac_fs> (veja o README).
 *
 *   IMPORTANTE: os IDs das proteções abaixo DEVEM ser os mesmos do arquivo
 *   anticheat/bot/src/protections.js.
 */

#if defined _drizzie_ac_included
	#endinput
#endif
#define _drizzie_ac_included

#if !defined _INC_a_samp && !defined _INC_open_mp && !defined _samp_included
	#error "[DCAC] Inclua <a_samp> ou <open.mp> ANTES de <drizzie_ac>."
#endif

#if defined FILTERSCRIPT
	#error "[DCAC] Em filterscripts use <drizzie_ac_fs>, não <drizzie_ac>."
#endif

#if !defined DCAC_API_KEY
	#error "[DCAC] Defina DCAC_API_KEY (mesma chave AC_API_KEY do bot) antes de incluir <drizzie_ac>."
#endif

#if !defined DCAC_API_HOST
	#define DCAC_API_HOST "127.0.0.1:8090"
#endif

#if !defined _INC_open_mp
	#include <a_http>   // no open.mp o HTTP já vem em <open.mp>
#endif

/* ---------------------------------------------------------------------------
 *  Compatibilidade de tags (open.mp usa tags fortes em vários natives)
 * ------------------------------------------------------------------------- */
#if defined _INC_open_mp
	#define DCAC_OMP          (1)
	#define DCAC_T_WEAPON     WEAPON
	#define DCAC_T_PSTATE     PLAYER_STATE
	#define DCAC_T_BULLET     BULLET_HIT_TYPE
	#define DCAC_T_SACTION    SPECIAL_ACTION
	#define DCAC_T_BOOL       bool
#else
	#define DCAC_OMP          (0)
	#define DCAC_T_WEAPON     _
	#define DCAC_T_PSTATE     _
	#define DCAC_T_BULLET     _
	#define DCAC_T_SACTION    _
	#define DCAC_T_BOOL       _
#endif

/* ---------------------------------------------------------------------------
 *  Configurações de compilação (podem ser definidas antes do include)
 * ------------------------------------------------------------------------- */
#if !defined DCAC_TICK_MS
	#define DCAC_TICK_MS            (1000)   // intervalo das verificações
#endif
#if !defined DCAC_HIT_WINDOW_MS
	#define DCAC_HIT_WINDOW_MS      (60000)  // janela para somar detecções
#endif
#if !defined DCAC_REPORT_COOLDOWN
	#define DCAC_REPORT_COOLDOWN    (5000)   // anti-spam de logs no Discord
#endif
#if !defined DCAC_MAX_WHITELIST
	#define DCAC_MAX_WHITELIST      (64)
#endif
#if !defined DCAC_MAX_CLASSES
	#define DCAC_MAX_CLASSES        (320)
#endif
#if !defined DCAC_COLOR
	#define DCAC_COLOR              (0xFF4040FF)
#endif

/* ---------------------------------------------------------------------------
 *  Proteções (IDs sincronizados com o bot)
 * ------------------------------------------------------------------------- */
#define DCAC_MONEY          (0)   // dinheiro (money hack)
#define DCAC_HEALTH         (1)   // vida (health hack / refil)
#define DCAC_ARMOUR         (2)   // colete (armour hack)
#define DCAC_WEAPON         (3)   // armas (weapon hack)
#define DCAC_SPEED_FOOT     (4)   // velocidade a pé (km/h)
#define DCAC_SPEED_VEH      (5)   // velocidade em veículo (km/h)
#define DCAC_TELEPORT       (6)   // teleporte (metros/tick)
#define DCAC_AIRBREAK       (7)   // airbreak / fly (m/s sem velocidade)
#define DCAC_JETPACK        (8)   // jetpack
#define DCAC_VEH_HEALTH     (9)   // reparo de veículo (car godmode/repair)
#define DCAC_FAKEKILL       (10)  // fake kill / flood de mortes
#define DCAC_RAPIDFIRE      (11)  // rapid fire (tiros/segundo)
#define DCAC_FLOOD          (12)  // flood de chat/comandos
#define DCAC_CARWARP        (13)  // puxar/teleportar para veículo
#define DCAC_VEH_TROLL      (14)  // mover veículos desocupados (troll)
#define DCAC_PING           (15)  // ping alto
#define DCAC_IPFLOOD        (16)  // muitas conexões do mesmo IP (bots)
#define DCAC_TUNING         (17)  // tuning fora da oficina (crasher)
#define DCAC_DIALOG         (18)  // resposta falsa de dialog (spoof)
#define DCAC_MAX            (19)

#define DCAC_ACTION_WARN    (0)   // apenas avisa (log + admins)
#define DCAC_ACTION_KICK    (1)
#define DCAC_ACTION_BAN     (2)

enum E_DCAC_PROT
{
	bool:dpEnabled,
	dpAction,
	dpTolerance,
	dpValue
}

enum E_DCAC_PLAYER
{
	bool:acNPC,
	bool:acImmune,         // imunidade definida pelo gamemode
	bool:acWhitelisted,    // imunidade definida pelo Discord
	bool:acPunished,
	acSerial,
	acConnectTick,
	acSpawnTick,
	// dinheiro
	acMoney,
	acMoneyTick,
	// vida / colete
	Float:acHealth,
	Float:acArmour,
	acHealthTick,
	acArmourTick,
	// armas
	acWeapons[13],
	acWeaponTick,
	acSpawnWeapons[3],
	acSpawnAmmo[3],
	// posição
	Float:acLastX,
	Float:acLastY,
	Float:acLastZ,
	acLastPosTick,
	acLastState,
	acPosImmuneUntil,
	acSpeedImmuneUntil,
	// especiais
	bool:acJetpack,
	acShotTick,
	acShotCount,
	acFloodTick,
	acFloodCount,
	acDeathTick,
	acDeathCount,
	acPingStrikes,
	acDialog
}

static stock const gDCAC_Names[DCAC_MAX][] =
{
	"Dinheiro", "Vida", "Colete", "Armas", "Velocidade a pe", "Velocidade em veiculo",
	"Teleporte", "Airbreak/Fly", "Jetpack", "Reparo de veiculo", "Fake kill",
	"Rapid fire", "Flood", "Puxar veiculo", "Veiculo troll", "Ping alto",
	"Conexoes por IP", "Tuning invalido", "Dialog falso"
};

// padrões usados até o primeiro contato com o bot (ou se ele estiver offline)
//                                         ativo   acao               tol  valor
static stock const gDCAC_Defaults[DCAC_MAX][E_DCAC_PROT] =
{
	{true,  DCAC_ACTION_KICK, 3,  0},    // dinheiro
	{true,  DCAC_ACTION_KICK, 3,  0},    // vida
	{true,  DCAC_ACTION_KICK, 3,  0},    // colete
	{true,  DCAC_ACTION_KICK, 2,  0},    // armas
	{true,  DCAC_ACTION_KICK, 3,  70},   // velocidade a pé (km/h)
	{true,  DCAC_ACTION_KICK, 3,  360},  // velocidade veículo (km/h)
	{true,  DCAC_ACTION_KICK, 3,  80},   // teleporte (m)
	{true,  DCAC_ACTION_KICK, 3,  14},   // airbreak (m/s)
	{true,  DCAC_ACTION_KICK, 1,  0},    // jetpack
	{true,  DCAC_ACTION_KICK, 3,  0},    // reparo veículo
	{true,  DCAC_ACTION_KICK, 1,  4},    // fake kill (mortes em 5s)
	{true,  DCAC_ACTION_KICK, 3,  25},   // rapid fire (tiros/s)
	{true,  DCAC_ACTION_KICK, 3,  5},    // flood (msgs em 3s)
	{true,  DCAC_ACTION_KICK, 2,  30},   // puxar veículo (m)
	{true,  DCAC_ACTION_KICK, 2,  20},   // veículo troll (m)
	{false, DCAC_ACTION_KICK, 1,  800},  // ping (ms)
	{true,  DCAC_ACTION_KICK, 1,  3},    // conexões por IP
	{true,  DCAC_ACTION_KICK, 1,  0},    // tuning
	{true,  DCAC_ACTION_KICK, 1,  0}     // dialog
};

static stock
	gDCAC_Prot[DCAC_MAX][E_DCAC_PROT],
	bool:gDCAC_Global = true,
	gDCAC_Version = 0,
	gDCAC_PollSeconds = 10,
	gDCAC_PollCounter = 0,
	bool:gDCAC_PollPending = false,
	gDCAC_PollSentTick = 0,
	bool:gDCAC_Offline = false,
	gDCAC_LastCmd = 0,
	gDCAC_Whitelist[DCAC_MAX_WHITELIST][MAX_PLAYER_NAME + 1],
	gDCAC_WhitelistCount = 0,
	gDCAC_Timer = -1,
	gDCAC_SerialCounter = 0,
	gDCAC_P[MAX_PLAYERS][E_DCAC_PLAYER],
	gDCAC_Hits[MAX_PLAYERS][DCAC_MAX],
	gDCAC_HitTick[MAX_PLAYERS][DCAC_MAX],
	gDCAC_ReportTick[MAX_PLAYERS][DCAC_MAX],
	Float:gDCAC_VehHealth[MAX_VEHICLES],
	gDCAC_VehImmuneUntil[MAX_VEHICLES],
	gDCAC_ClassWeapons[DCAC_MAX_CLASSES][6];

forward OnAntiCheatDetect(playerid, code, const detail[]);
forward OnAntiCheatPunish(playerid, code, action, const detail[]);
forward OnAntiCheatAdminCheck(playerid);

forward DCAC_Tick();
forward DCAC_OnConfig(index, response_code, data[]);
forward DCAC_OnReport(index, response_code, data[]);
forward DCAC_DoPunish(playerid, serial, action, code);

/* ===========================================================================
 *  Chamadas "cruas" aos natives (antes dos hooks, sem tags)
 * ========================================================================= */
static stock DCAC_RawGiveMoney(playerid, money)        { GivePlayerMoney(playerid, money); }
static stock DCAC_RawResetMoney(playerid)              { ResetPlayerMoney(playerid); }
static stock DCAC_RawGetMoney(playerid)                { return GetPlayerMoney(playerid); }
static stock DCAC_RawSetHealth(playerid, Float:v)      { SetPlayerHealth(playerid, v); }
static stock DCAC_RawSetArmour(playerid, Float:v)      { SetPlayerArmour(playerid, v); }
static stock DCAC_RawResetWeapons(playerid)            { ResetPlayerWeapons(playerid); }
static stock DCAC_RawSetVehHealth(vehicleid, Float:v)  { SetVehicleHealth(vehicleid, v); }
static stock DCAC_RawState(playerid)                   { return _:GetPlayerState(playerid); }
static stock DCAC_RawWeapon(playerid)                  { return _:GetPlayerWeapon(playerid); }
static stock DCAC_RawSpecialAction(playerid)           { return _:GetPlayerSpecialAction(playerid); }

static stock DCAC_RawGiveWeapon(playerid, weaponid, ammo)
{
	#if DCAC_OMP
		GivePlayerWeapon(playerid, WEAPON:weaponid, ammo);
	#else
		GivePlayerWeapon(playerid, weaponid, ammo);
	#endif
}

static stock DCAC_RawWeaponData(playerid, slot, &weapon, &ammo)
{
	#if DCAC_OMP
		new WEAPON:w;
		GetPlayerWeaponData(playerid, WEAPON_SLOT:slot, w, ammo);
		weapon = _:w;
	#else
		GetPlayerWeaponData(playerid, slot, weapon, ammo);
	#endif
}

static stock DCAC_RawClearSpecial(playerid)
{
	#if DCAC_OMP
		SetPlayerSpecialAction(playerid, SPECIAL_ACTION_NONE);
	#else
		SetPlayerSpecialAction(playerid, 0);
	#endif
}

static stock DCAC_RawStreamed(targetid, forplayerid)
{
	return IsPlayerStreamedIn(targetid, forplayerid) ? 1 : 0;
}

/* ===========================================================================
 *  Utilidades
 * ========================================================================= */
static stock DCAC_WeaponSlot(weaponid)
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

static stock bool:DCAC_ValidPlayer(playerid)
{
	return (0 <= playerid < MAX_PLAYERS) && IsPlayerConnected(playerid) && !gDCAC_P[playerid][acNPC];
}

static stock bool:DCAC_ValidVehicle(vehicleid)
{
	return (0 < vehicleid < MAX_VEHICLES);
}

static stock DCAC_UrlEncode(const src[], dest[], size = sizeof dest)
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

static stock DCAC_Token(const src[], &idx, dest[], size = sizeof dest)
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

static stock bool:DCAC_IsAdmin(playerid)
{
	if (funcidx("OnAntiCheatAdminCheck") != -1)
		return CallLocalFunction("OnAntiCheatAdminCheck", "i", playerid) != 0;
	return IsPlayerAdmin(playerid) ? true : false;
}

static stock DCAC_RefreshWhitelist(playerid)
{
	new name[MAX_PLAYER_NAME + 1];
	GetPlayerName(playerid, name, sizeof name);
	gDCAC_P[playerid][acWhitelisted] = false;
	for (new i = 0; i < gDCAC_WhitelistCount; i++)
	{
		if (!strcmp(name, gDCAC_Whitelist[i], true))
		{
			gDCAC_P[playerid][acWhitelisted] = true;
			break;
		}
	}
}

static stock DCAC_ResetPlayer(playerid)
{
	new tick = GetTickCount();
	gDCAC_P[playerid][acNPC] = IsPlayerNPC(playerid) ? true : false;
	gDCAC_P[playerid][acImmune] = false;
	gDCAC_P[playerid][acWhitelisted] = false;
	gDCAC_P[playerid][acPunished] = false;
	gDCAC_P[playerid][acSerial] = ++gDCAC_SerialCounter;
	gDCAC_P[playerid][acConnectTick] = tick;
	gDCAC_P[playerid][acSpawnTick] = tick;
	gDCAC_P[playerid][acMoney] = 0;
	gDCAC_P[playerid][acMoneyTick] = tick;
	gDCAC_P[playerid][acHealth] = 100.0;
	gDCAC_P[playerid][acArmour] = 0.0;
	gDCAC_P[playerid][acHealthTick] = tick;
	gDCAC_P[playerid][acArmourTick] = tick;
	for (new s = 0; s < 13; s++) gDCAC_P[playerid][acWeapons][s] = 0;
	for (new s = 0; s < 3; s++)
	{
		gDCAC_P[playerid][acSpawnWeapons][s] = 0;
		gDCAC_P[playerid][acSpawnAmmo][s] = 0;
	}
	gDCAC_P[playerid][acWeaponTick] = tick;
	gDCAC_P[playerid][acLastPosTick] = 0;
	gDCAC_P[playerid][acLastState] = 0;
	gDCAC_P[playerid][acPosImmuneUntil] = tick + 5000;
	gDCAC_P[playerid][acSpeedImmuneUntil] = tick + 5000;
	gDCAC_P[playerid][acJetpack] = false;
	gDCAC_P[playerid][acShotTick] = 0;
	gDCAC_P[playerid][acShotCount] = 0;
	gDCAC_P[playerid][acFloodTick] = 0;
	gDCAC_P[playerid][acFloodCount] = 0;
	gDCAC_P[playerid][acDeathTick] = 0;
	gDCAC_P[playerid][acDeathCount] = 0;
	gDCAC_P[playerid][acPingStrikes] = 0;
	gDCAC_P[playerid][acDialog] = -1;
	for (new c = 0; c < DCAC_MAX; c++)
	{
		gDCAC_Hits[playerid][c] = 0;
		gDCAC_HitTick[playerid][c] = 0;
		gDCAC_ReportTick[playerid][c] = 0;
	}
}

static stock DCAC_LoadDefaults()
{
	for (new c = 0; c < DCAC_MAX; c++)
	{
		gDCAC_Prot[c][dpEnabled]   = gDCAC_Defaults[c][dpEnabled];
		gDCAC_Prot[c][dpAction]    = gDCAC_Defaults[c][dpAction];
		gDCAC_Prot[c][dpTolerance] = gDCAC_Defaults[c][dpTolerance];
		gDCAC_Prot[c][dpValue]     = gDCAC_Defaults[c][dpValue];
	}
}

/* ===========================================================================
 *  API pública para o gamemode
 * ========================================================================= */
stock AC_GetProtectionName(code, dest[], size = sizeof dest)
{
	if (0 <= code < DCAC_MAX) strmid(dest, gDCAC_Names[code], 0, strlen(gDCAC_Names[code]), size);
	else strmid(dest, "Desconhecida", 0, 12, size);
}

stock bool:AC_IsEnabled(code)
{
	return gDCAC_Global && (0 <= code < DCAC_MAX) && gDCAC_Prot[code][dpEnabled];
}

stock AC_GetValue(code)
{
	return (0 <= code < DCAC_MAX) ? gDCAC_Prot[code][dpValue] : 0;
}

// imunidade total (ex.: admins em serviço). Não persiste entre conexões.
stock AC_SetPlayerImmune(playerid, bool:immune)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acImmune] = immune;
}

stock bool:AC_IsPlayerImmune(playerid)
{
	return gDCAC_P[playerid][acImmune] || gDCAC_P[playerid][acWhitelisted];
}

// imunidade temporária de posição (ex.: elevadores, objetos que movem o player)
stock AC_PositionImmunity(playerid, ms = 3000)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		new until = GetTickCount() + ms;
		if (until > gDCAC_P[playerid][acPosImmuneUntil]) gDCAC_P[playerid][acPosImmuneUntil] = until;
		if (until > gDCAC_P[playerid][acSpeedImmuneUntil]) gDCAC_P[playerid][acSpeedImmuneUntil] = until;
		gDCAC_P[playerid][acLastPosTick] = 0;
	}
}

// libera uma arma que o jogador ganhou por meios que o AC não enxerga (pickups etc.)
stock AC_AllowWeapon(playerid, weaponid)
{
	new slot = DCAC_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acWeapons][slot] = weaponid;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
}

stock AC_GetServerMoney(playerid)
{
	return gDCAC_P[playerid][acMoney];
}

// força uma nova leitura da configuração do Discord
stock AC_ReloadConfig()
{
	gDCAC_Version = -1;
	gDCAC_PollCounter = gDCAC_PollSeconds;
}

/* ===========================================================================
 *  Núcleo: detecção / punição / log
 * ========================================================================= */
static stock DCAC_Report(playerid, code, action, hits, const detail[])
{
	new name[MAX_PLAYER_NAME + 1], ip[16], ename[MAX_PLAYER_NAME * 3 + 1], edetail[200], body[400], url[256];
	GetPlayerName(playerid, name, sizeof name);
	GetPlayerIp(playerid, ip, sizeof ip);
	DCAC_UrlEncode(name, ename);
	DCAC_UrlEncode(detail, edetail);
	format(body, sizeof body, "id=%d&nome=%s&ip=%s&cod=%d&acao=%d&hits=%d&tol=%d&det=%s",
		playerid, ename, ip, code, action, hits, gDCAC_Prot[code][dpTolerance], edetail);
	format(url, sizeof url, "%s/ac/report?key=%s", DCAC_API_HOST, DCAC_API_KEY);
	HTTP(playerid, HTTP_POST, url, body, "DCAC_OnReport");
}

public DCAC_OnReport(index, response_code, data[])
{
	return 1;
}

static stock DCAC_NotifyAdmins(const msg[])
{
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && DCAC_IsAdmin(i)) SendClientMessage(i, DCAC_COLOR, msg);
	}
}

static stock DCAC_Punish(playerid, code, action, const detail[])
{
	new name[MAX_PLAYER_NAME + 1], msg[180];
	GetPlayerName(playerid, name, sizeof name);
	gDCAC_P[playerid][acPunished] = true;

	format(msg, sizeof msg, "[Anti-Cheat] %s (%d) foi %s. Motivo: %s.",
		name, playerid, (action == DCAC_ACTION_BAN) ? ("banido") : ("kickado"), gDCAC_Names[code]);
	DCAC_NotifyAdmins(msg);
	printf("[DCAC] %s (%d) punido (%s) - %s: %s", name, playerid,
		(action == DCAC_ACTION_BAN) ? ("ban") : ("kick"), gDCAC_Names[code], detail);

	// o gamemode pode tratar a punição (ex.: ban no próprio MySQL) retornando 1
	if (funcidx("OnAntiCheatPunish") != -1)
	{
		if (CallLocalFunction("OnAntiCheatPunish", "iiis", playerid, code, action, detail)) return 1;
	}

	format(msg, sizeof msg, "Voce foi %s pelo Anti-Cheat. Motivo: %s.",
		(action == DCAC_ACTION_BAN) ? ("banido") : ("kickado"), gDCAC_Names[code]);
	SendClientMessage(playerid, DCAC_COLOR, msg);
	SetTimerEx("DCAC_DoPunish", 400, false, "iiii", playerid, gDCAC_P[playerid][acSerial], action, code);
	return 1;
}

public DCAC_DoPunish(playerid, serial, action, code)
{
	if (!IsPlayerConnected(playerid) || gDCAC_P[playerid][acSerial] != serial) return 0;
	if (action == DCAC_ACTION_BAN)
	{
		new reason[64];
		format(reason, sizeof reason, "DCAC: %s", gDCAC_Names[code]);
		BanEx(playerid, reason);
	}
	else Kick(playerid);
	return 1;
}

// retorna 1 se a detecção foi registrada
stock DCAC_Detect(playerid, code, const detail[] = "-")
{
	if (!gDCAC_Global || !(0 <= code < DCAC_MAX) || !gDCAC_Prot[code][dpEnabled]) return 0;
	if (!DCAC_ValidPlayer(playerid) || gDCAC_P[playerid][acPunished]) return 0;
	if (gDCAC_P[playerid][acImmune] || gDCAC_P[playerid][acWhitelisted]) return 0;

	new det[128];
	if (detail[0] == EOS) det = "-";
	else strmid(det, detail, 0, strlen(detail), sizeof det);

	// o gamemode pode ignorar a detecção retornando 0
	if (funcidx("OnAntiCheatDetect") != -1)
	{
		if (!CallLocalFunction("OnAntiCheatDetect", "iis", playerid, code, det)) return 0;
	}

	new tick = GetTickCount();
	if (tick - gDCAC_HitTick[playerid][code] > DCAC_HIT_WINDOW_MS) gDCAC_Hits[playerid][code] = 0;
	gDCAC_HitTick[playerid][code] = tick;
	new hits = ++gDCAC_Hits[playerid][code];

	new action = gDCAC_Prot[code][dpAction], tol = gDCAC_Prot[code][dpTolerance];
	if (tol < 1) tol = 1;

	if (action != DCAC_ACTION_WARN && hits >= tol)
	{
		DCAC_Report(playerid, code, action, hits, det);
		DCAC_Punish(playerid, code, action, det);
		return 1;
	}

	if (tick - gDCAC_ReportTick[playerid][code] >= DCAC_REPORT_COOLDOWN)
	{
		gDCAC_ReportTick[playerid][code] = tick;
		new name[MAX_PLAYER_NAME + 1], msg[180];
		GetPlayerName(playerid, name, sizeof name);
		format(msg, sizeof msg, "[Anti-Cheat] Suspeita: %s (%d) - %s [%d/%d] (%s)", name, playerid, gDCAC_Names[code], hits, tol, det);
		DCAC_NotifyAdmins(msg);
		DCAC_Report(playerid, code, DCAC_ACTION_WARN, hits, det);
	}
	return 1;
}

/* ===========================================================================
 *  Comunicação com o bot (config remota)
 * ========================================================================= */
static stock DCAC_Poll()
{
	new tick = GetTickCount();
	if (gDCAC_PollPending && tick - gDCAC_PollSentTick < 30000) return;

	new players = 0;
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && !IsPlayerNPC(i)) players++;
	}
	new url[256];
	format(url, sizeof url, "%s/ac/config?key=%s&v=%d&players=%d&ack=%d&max=%d",
		DCAC_API_HOST, DCAC_API_KEY, gDCAC_Version, players, gDCAC_LastCmd, GetMaxPlayers());
	gDCAC_PollPending = true;
	gDCAC_PollSentTick = tick;
	HTTP(0, HTTP_GET, url, "", "DCAC_OnConfig");
}

static stock DCAC_RunCommand(id, const type[], const arg[])
{
	if (id <= gDCAC_LastCmd) return;
	gDCAC_LastCmd = id;
	// strcmp() do Pawn retorna 0 para strings vazias: valida antes
	if (type[0] == EOS || arg[0] == EOS) return;

	if (!strcmp(type, "unbanip"))
	{
		// aceita apenas IPv4 (dígitos, pontos e *) para evitar injeção no RCON
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
		printf("[DCAC] IP %s desbanido via Discord.", arg);
	}
	else if (!strcmp(type, "kick"))
	{
		new pid = strval(arg);
		if (DCAC_ValidPlayer(pid))
		{
			SendClientMessage(pid, DCAC_COLOR, "Voce foi kickado por um administrador (Discord).");
			SetTimerEx("DCAC_DoPunish", 400, false, "iiii", pid, gDCAC_P[pid][acSerial], DCAC_ACTION_KICK, 0);
		}
	}
	else if (!strcmp(type, "aviso"))
	{
		// aviso global enviado pelo Discord (arg = texto com '_' no lugar de espaços)
		new msg[144];
		strmid(msg, arg, 0, strlen(arg), sizeof msg);
		for (new i = 0; msg[i] != EOS; i++) if (msg[i] == '_') msg[i] = ' ';
		new out[160];
		format(out, sizeof out, "[Anti-Cheat] %s", msg);
		SendClientMessageToAll(DCAC_COLOR, out);
	}
}

public DCAC_OnConfig(index, response_code, data[])
{
	gDCAC_PollPending = false;
	if (response_code != 200)
	{
		if (!gDCAC_Offline)
		{
			gDCAC_Offline = true;
			printf("[DCAC] Nao foi possivel falar com o bot (%s) - codigo %d. Usando a ultima configuracao.", DCAC_API_HOST, response_code);
		}
		return 1;
	}
	if (gDCAC_Offline)
	{
		gDCAC_Offline = false;
		print("[DCAC] Conexao com o bot restabelecida.");
	}

	// resposta truncada/inválida: ignora por segurança
	if (strfind(data, "END") == -1) return 1;

	new len = strlen(data), pos = 0, line[160], tok[32], idx, end;
	new bool:fullConfig = false;

	while (pos < len)
	{
		end = strfind(data, "\n", false, pos);
		if (end == -1) end = len;
		strmid(line, data, pos, end, sizeof line);
		pos = end + 1;

		idx = 0;
		if (!DCAC_Token(line, idx, tok)) continue;

		if (!strcmp(tok, "DCAC"))
		{
			// DCAC <versao> <global> <poll>
			DCAC_Token(line, idx, tok); gDCAC_Version = strval(tok);
			DCAC_Token(line, idx, tok); gDCAC_Global = strval(tok) != 0;
			DCAC_Token(line, idx, tok);
			new p = strval(tok);
			if (3 <= p <= 300) gDCAC_PollSeconds = p;
			gDCAC_WhitelistCount = 0;
			fullConfig = true;
		}
		else if (!strcmp(tok, "P") && fullConfig)
		{
			// P <id> <ativo> <acao> <tolerancia> <valor>
			DCAC_Token(line, idx, tok);
			new c = strval(tok);
			if (!(0 <= c < DCAC_MAX)) continue;
			DCAC_Token(line, idx, tok); gDCAC_Prot[c][dpEnabled] = strval(tok) != 0;
			DCAC_Token(line, idx, tok); gDCAC_Prot[c][dpAction] = clamp(strval(tok), 0, 2);
			DCAC_Token(line, idx, tok); gDCAC_Prot[c][dpTolerance] = clamp(strval(tok), 1, 100);
			DCAC_Token(line, idx, tok); gDCAC_Prot[c][dpValue] = strval(tok);
		}
		else if (!strcmp(tok, "W") && fullConfig)
		{
			if (gDCAC_WhitelistCount < DCAC_MAX_WHITELIST)
			{
				DCAC_Token(line, idx, gDCAC_Whitelist[gDCAC_WhitelistCount], MAX_PLAYER_NAME + 1);
				if (gDCAC_Whitelist[gDCAC_WhitelistCount][0] != EOS) gDCAC_WhitelistCount++;
			}
		}
		else if (!strcmp(tok, "C"))
		{
			// C <id> <tipo> <argumento>
			new type[16], arg[144];
			DCAC_Token(line, idx, tok);
			new cid = strval(tok);
			DCAC_Token(line, idx, type);
			DCAC_Token(line, idx, arg);
			DCAC_RunCommand(cid, type, arg);
		}
	}

	if (fullConfig)
	{
		for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
		{
			if (IsPlayerConnected(i)) DCAC_RefreshWhitelist(i);
		}
		printf("[DCAC] Configuracao v%d carregada do Discord (anti-cheat %s).", gDCAC_Version, gDCAC_Global ? ("ATIVO") : ("DESATIVADO"));
	}
	return 1;
}

/* ===========================================================================
 *  Verificações periódicas
 * ========================================================================= */
static stock DCAC_CheckMoney(playerid, tick)
{
	if (tick - gDCAC_P[playerid][acMoneyTick] < 3000) return;
	new client = DCAC_RawGetMoney(playerid), server = gDCAC_P[playerid][acMoney];
	if (client > server)
	{
		new det[64];
		format(det, sizeof det, "cliente $%d / servidor $%d", client, server);
		if (AC_IsEnabled(DCAC_MONEY) && !AC_IsPlayerImmune(playerid))
		{
			DCAC_RawResetMoney(playerid);
			DCAC_RawGiveMoney(playerid, server);
			gDCAC_P[playerid][acMoneyTick] = tick;
			DCAC_Detect(playerid, DCAC_MONEY, det);
		}
		else gDCAC_P[playerid][acMoney] = client;
	}
	else if (client < server)
	{
		// gastos legítimos do lado do cliente (cassino, oficinas, pay'n'spray...)
		gDCAC_P[playerid][acMoney] = client;
	}
}

static stock DCAC_CheckHealth(playerid, tick)
{
	new Float:h, Float:a, det[64];
	GetPlayerHealth(playerid, h);
	GetPlayerArmour(playerid, a);

	if (tick - gDCAC_P[playerid][acHealthTick] >= 2500)
	{
		if (h > gDCAC_P[playerid][acHealth] + 1.0)
		{
			if (AC_IsEnabled(DCAC_HEALTH) && !AC_IsPlayerImmune(playerid))
			{
				format(det, sizeof det, "vida %.0f (permitido %.0f)", h, gDCAC_P[playerid][acHealth]);
				DCAC_RawSetHealth(playerid, gDCAC_P[playerid][acHealth]);
				gDCAC_P[playerid][acHealthTick] = tick;
				DCAC_Detect(playerid, DCAC_HEALTH, det);
			}
			else gDCAC_P[playerid][acHealth] = h;
		}
		else if (h < gDCAC_P[playerid][acHealth]) gDCAC_P[playerid][acHealth] = h;
	}

	if (tick - gDCAC_P[playerid][acArmourTick] >= 2500)
	{
		if (a > gDCAC_P[playerid][acArmour] + 1.0)
		{
			if (AC_IsEnabled(DCAC_ARMOUR) && !AC_IsPlayerImmune(playerid))
			{
				format(det, sizeof det, "colete %.0f (permitido %.0f)", a, gDCAC_P[playerid][acArmour]);
				DCAC_RawSetArmour(playerid, gDCAC_P[playerid][acArmour]);
				gDCAC_P[playerid][acArmourTick] = tick;
				DCAC_Detect(playerid, DCAC_ARMOUR, det);
			}
			else gDCAC_P[playerid][acArmour] = a;
		}
		else if (a < gDCAC_P[playerid][acArmour]) gDCAC_P[playerid][acArmour] = a;
	}
}

static stock DCAC_CheckWeapons(playerid, tick)
{
	if (tick - gDCAC_P[playerid][acWeaponTick] < 2500) return;
	if (!AC_IsEnabled(DCAC_WEAPON) || AC_IsPlayerImmune(playerid)) return;

	new w, ammo, bad = -1;
	for (new s = 0; s < 13; s++)
	{
		DCAC_RawWeaponData(playerid, s, w, ammo);
		if (w <= 0 || ammo <= 0 || w == 46) continue; // 46 = paraquedas
		if (w != gDCAC_P[playerid][acWeapons][s]) { bad = w; break; }
	}
	if (bad == -1)
	{
		w = DCAC_RawWeapon(playerid);
		if (w > 0 && w != 46)
		{
			new slot = DCAC_WeaponSlot(w);
			if (slot == -1 || gDCAC_P[playerid][acWeapons][slot] != w) bad = w;
		}
	}
	if (bad == -1) return;

	// remove as armas não autorizadas e devolve as permitidas
	new keepW[13], keepA[13];
	for (new s = 0; s < 13; s++)
	{
		DCAC_RawWeaponData(playerid, s, w, ammo);
		if (w > 0 && w == gDCAC_P[playerid][acWeapons][s]) { keepW[s] = w; keepA[s] = ammo; }
	}
	DCAC_RawResetWeapons(playerid);
	for (new s = 0; s < 13; s++)
	{
		if (keepW[s] > 0 && keepA[s] > 0) DCAC_RawGiveWeapon(playerid, keepW[s], keepA[s]);
	}
	gDCAC_P[playerid][acWeaponTick] = tick;

	new det[48];
	format(det, sizeof det, "arma id %d", bad);
	DCAC_Detect(playerid, DCAC_WEAPON, det);
}

static stock DCAC_CheckMovement(playerid, pstate, tick)
{
	new Float:x, Float:y, Float:z, Float:vx, Float:vy, Float:vz, det[96];
	new vehicleid = (pstate == 2) ? GetPlayerVehicleID(playerid) : 0;

	GetPlayerPos(playerid, x, y, z);
	if (vehicleid) GetVehicleVelocity(vehicleid, vx, vy, vz);
	else GetPlayerVelocity(playerid, vx, vy, vz);

	new bool:immune = AC_IsPlayerImmune(playerid) || tick < gDCAC_P[playerid][acPosImmuneUntil];
	new bool:surfing = (GetPlayerSurfingVehicleID(playerid) != INVALID_VEHICLE_ID) || (GetPlayerSurfingObjectID(playerid) != INVALID_OBJECT_ID);

	// ---- velocidade
	if (!AC_IsPlayerImmune(playerid) && tick >= gDCAC_P[playerid][acSpeedImmuneUntil] && !surfing)
	{
		if (pstate == 1 && vz > -0.3 && AC_IsEnabled(DCAC_SPEED_FOOT))
		{
			new Float:kmh = VectorSize(vx, vy, 0.0) * 180.0;
			if (kmh > float(gDCAC_Prot[DCAC_SPEED_FOOT][dpValue]))
			{
				format(det, sizeof det, "%.0f km/h a pe (limite %d)", kmh, gDCAC_Prot[DCAC_SPEED_FOOT][dpValue]);
				DCAC_Detect(playerid, DCAC_SPEED_FOOT, det);
			}
		}
		else if (pstate == 2 && vz > -0.5 && AC_IsEnabled(DCAC_SPEED_VEH))
		{
			new Float:kmh = VectorSize(vx, vy, vz) * 180.0;
			if (kmh > float(gDCAC_Prot[DCAC_SPEED_VEH][dpValue]))
			{
				format(det, sizeof det, "%.0f km/h no veiculo %d (limite %d)", kmh, GetVehicleModel(vehicleid), gDCAC_Prot[DCAC_SPEED_VEH][dpValue]);
				DCAC_Detect(playerid, DCAC_SPEED_VEH, det);
			}
		}
	}

	// ---- teleporte / airbreak (compara com a posição do último tick)
	if (!immune && gDCAC_P[playerid][acLastPosTick] && gDCAC_P[playerid][acLastState] == pstate && !surfing)
	{
		new dt = tick - gDCAC_P[playerid][acLastPosTick];
		if (dt > 0 && dt < 3000)
		{
			new Float:dx = x - gDCAC_P[playerid][acLastX], Float:dy = y - gDCAC_P[playerid][acLastY];
			new Float:dist = VectorSize(dx, dy, 0.0);
			new Float:posSpeed = dist / (float(dt) / 1000.0);      // m/s pela posição
			new Float:velSpeed = VectorSize(vx, vy, 0.0) * 50.0;    // m/s reportado

			if (AC_IsEnabled(DCAC_TELEPORT))
			{
				new Float:limit = float(gDCAC_Prot[DCAC_TELEPORT][dpValue]);
				if (pstate == 2)
				{
					new Float:dyn = velSpeed * (float(dt) / 1000.0) * 2.0 + 40.0;
					if (dyn > limit) limit = dyn;
				}
				if (dist > limit)
				{
					format(det, sizeof det, "%.0f m em %d ms", dist, dt);
					DCAC_Detect(playerid, DCAC_TELEPORT, det);
				}
			}
			if (AC_IsEnabled(DCAC_AIRBREAK))
			{
				new Float:limit = float(gDCAC_Prot[DCAC_AIRBREAK][dpValue]);
				if (pstate == 2) limit *= 2.5;
				if (posSpeed > limit && velSpeed < posSpeed * 0.25)
				{
					format(det, sizeof det, "%.1f m/s com velocidade %.1f m/s (%s)", posSpeed, velSpeed, (pstate == 2) ? ("veiculo") : ("a pe"));
					DCAC_Detect(playerid, DCAC_AIRBREAK, det);
				}
			}
		}
	}

	gDCAC_P[playerid][acLastX] = x;
	gDCAC_P[playerid][acLastY] = y;
	gDCAC_P[playerid][acLastZ] = z;
	gDCAC_P[playerid][acLastPosTick] = tick;
	gDCAC_P[playerid][acLastState] = pstate;
}

static stock DCAC_CheckVehicleHealth(playerid, tick)
{
	new vehicleid = GetPlayerVehicleID(playerid);
	if (!DCAC_ValidVehicle(vehicleid)) return;
	new Float:h;
	GetVehicleHealth(vehicleid, h);
	if (tick < gDCAC_VehImmuneUntil[vehicleid])
	{
		gDCAC_VehHealth[vehicleid] = h;
		return;
	}
	if (h > gDCAC_VehHealth[vehicleid] + 10.0)
	{
		if (AC_IsEnabled(DCAC_VEH_HEALTH) && !AC_IsPlayerImmune(playerid))
		{
			new det[64];
			format(det, sizeof det, "veiculo %.0f hp (permitido %.0f)", h, gDCAC_VehHealth[vehicleid]);
			DCAC_RawSetVehHealth(vehicleid, gDCAC_VehHealth[vehicleid]);
			gDCAC_VehImmuneUntil[vehicleid] = tick + 2000;
			DCAC_Detect(playerid, DCAC_VEH_HEALTH, det);
		}
		else gDCAC_VehHealth[vehicleid] = h;
	}
	else if (h < gDCAC_VehHealth[vehicleid]) gDCAC_VehHealth[vehicleid] = h;
}

public DCAC_Tick()
{
	new tick = GetTickCount();

	if (++gDCAC_PollCounter >= gDCAC_PollSeconds * 1000 / DCAC_TICK_MS)
	{
		gDCAC_PollCounter = 0;
		DCAC_Poll();
	}

	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (!IsPlayerConnected(i) || gDCAC_P[i][acNPC] || gDCAC_P[i][acPunished]) continue;

		new pstate = DCAC_RawState(i);

		// ping (após 30s conectado)
		if (gDCAC_Global && tick - gDCAC_P[i][acConnectTick] > 30000 && AC_IsEnabled(DCAC_PING))
		{
			new ping = GetPlayerPing(i);
			if (ping > gDCAC_Prot[DCAC_PING][dpValue])
			{
				if (++gDCAC_P[i][acPingStrikes] >= 5)
				{
					new det[32];
					format(det, sizeof det, "%d ms (limite %d)", ping, gDCAC_Prot[DCAC_PING][dpValue]);
					gDCAC_P[i][acPingStrikes] = 0;
					DCAC_Detect(i, DCAC_PING, det);
				}
			}
			else gDCAC_P[i][acPingStrikes] = 0;
		}

		if (pstate != 1 && pstate != 2 && pstate != 3)
		{
			gDCAC_P[i][acLastPosTick] = 0;
			continue;
		}

		DCAC_CheckMoney(i, tick);

		if (tick - gDCAC_P[i][acSpawnTick] < 3000)
		{
			gDCAC_P[i][acLastPosTick] = 0;
			continue;
		}

		DCAC_CheckHealth(i, tick);
		DCAC_CheckWeapons(i, tick);

		// jetpack
		new sa = DCAC_RawSpecialAction(i);
		if (sa == 2)
		{
			if (!gDCAC_P[i][acJetpack] && AC_IsEnabled(DCAC_JETPACK) && !AC_IsPlayerImmune(i))
			{
				DCAC_RawClearSpecial(i);
				DCAC_Detect(i, DCAC_JETPACK, "jetpack sem permissao");
			}
		}
		else if (gDCAC_P[i][acJetpack] && pstate == 1) gDCAC_P[i][acJetpack] = false;

		if (pstate == 3)
		{
			gDCAC_P[i][acLastPosTick] = 0;
			continue;
		}
		DCAC_CheckMovement(i, pstate, tick);
		if (pstate == 2) DCAC_CheckVehicleHealth(i, tick);
	}
	return 1;
}

/* ===========================================================================
 *  Hooks de callbacks (ALS)
 * ========================================================================= */
public OnGameModeInit()
{
	DCAC_LoadDefaults();
	for (new v = 0; v < MAX_VEHICLES; v++) { gDCAC_VehHealth[v] = 1000.0; gDCAC_VehImmuneUntil[v] = 0; }
	for (new c = 0; c < DCAC_MAX_CLASSES; c++) for (new k = 0; k < 6; k++) gDCAC_ClassWeapons[c][k] = 0;
	#if !defined DCAC_KEEP_STUNT_BONUS
		#if DCAC_OMP
			EnableStuntBonusForAll(false);
		#else
			EnableStuntBonusForAll(0);
		#endif
	#endif
	setproperty(0, "DCAC_ON", 1);
	if (gDCAC_Timer != -1) KillTimer(gDCAC_Timer);
	gDCAC_Timer = SetTimer("DCAC_Tick", DCAC_TICK_MS, true);
	gDCAC_PollCounter = 0;
	print("[DCAC] Drizzie City Anti-Cheat carregado. Buscando configuracao no Discord...");

	#if defined DCAC_OnGameModeInit
		new ret = DCAC_OnGameModeInit();
	#else
		new ret = 1;
	#endif
	DCAC_Poll();
	return ret;
}
#if defined _ALS_OnGameModeInit
	#undef OnGameModeInit
#else
	#define _ALS_OnGameModeInit
#endif
#define OnGameModeInit DCAC_OnGameModeInit
#if defined DCAC_OnGameModeInit
	forward DCAC_OnGameModeInit();
#endif

public OnGameModeExit()
{
	if (gDCAC_Timer != -1) { KillTimer(gDCAC_Timer); gDCAC_Timer = -1; }
	deleteproperty(0, "DCAC_ON");
	#if defined DCAC_OnGameModeExit
		return DCAC_OnGameModeExit();
	#else
		return 1;
	#endif
}
#if defined _ALS_OnGameModeExit
	#undef OnGameModeExit
#else
	#define _ALS_OnGameModeExit
#endif
#define OnGameModeExit DCAC_OnGameModeExit
#if defined DCAC_OnGameModeExit
	forward DCAC_OnGameModeExit();
#endif

public OnPlayerConnect(playerid)
{
	DCAC_ResetPlayer(playerid);
	DCAC_RefreshWhitelist(playerid);

	if (!gDCAC_P[playerid][acNPC] && AC_IsEnabled(DCAC_IPFLOOD))
	{
		new ip[16], other[16], count = 0;
		GetPlayerIp(playerid, ip, sizeof ip);
		for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
		{
			if (i == playerid || !IsPlayerConnected(i) || IsPlayerNPC(i)) continue;
			GetPlayerIp(i, other, sizeof other);
			if (!strcmp(ip, other)) count++;
		}
		if (count >= gDCAC_Prot[DCAC_IPFLOOD][dpValue])
		{
			new det[48];
			format(det, sizeof det, "%d conexoes do IP %s", count + 1, ip);
			DCAC_Detect(playerid, DCAC_IPFLOOD, det);
		}
	}

	#if defined DCAC_OnPlayerConnect
		return DCAC_OnPlayerConnect(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerConnect
	#undef OnPlayerConnect
#else
	#define _ALS_OnPlayerConnect
#endif
#define OnPlayerConnect DCAC_OnPlayerConnect
#if defined DCAC_OnPlayerConnect
	forward DCAC_OnPlayerConnect(playerid);
#endif

public OnPlayerDisconnect(playerid, reason)
{
	#if defined DCAC_OnPlayerDisconnect
		new ret = DCAC_OnPlayerDisconnect(playerid, reason);
	#else
		new ret = 1;
	#endif
	gDCAC_P[playerid][acSerial] = 0;
	gDCAC_P[playerid][acPunished] = true; // ignora qualquer detecção tardia
	return ret;
}
#if defined _ALS_OnPlayerDisconnect
	#undef OnPlayerDisconnect
#else
	#define _ALS_OnPlayerDisconnect
#endif
#define OnPlayerDisconnect DCAC_OnPlayerDisconnect
#if defined DCAC_OnPlayerDisconnect
	forward DCAC_OnPlayerDisconnect(playerid, reason);
#endif

public OnPlayerRequestClass(playerid, classid)
{
	if (0 <= classid < DCAC_MAX_CLASSES)
	{
		for (new k = 0; k < 3; k++)
		{
			gDCAC_P[playerid][acSpawnWeapons][k] = gDCAC_ClassWeapons[classid][k * 2];
			gDCAC_P[playerid][acSpawnAmmo][k] = gDCAC_ClassWeapons[classid][k * 2 + 1];
		}
	}
	#if defined DCAC_OnPlayerRequestClass
		return DCAC_OnPlayerRequestClass(playerid, classid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerRequestClass
	#undef OnPlayerRequestClass
#else
	#define _ALS_OnPlayerRequestClass
#endif
#define OnPlayerRequestClass DCAC_OnPlayerRequestClass
#if defined DCAC_OnPlayerRequestClass
	forward DCAC_OnPlayerRequestClass(playerid, classid);
#endif

public OnPlayerSpawn(playerid)
{
	new tick = GetTickCount();
	gDCAC_P[playerid][acSpawnTick] = tick;
	gDCAC_P[playerid][acHealth] = 100.0;
	gDCAC_P[playerid][acArmour] = 0.0;
	gDCAC_P[playerid][acHealthTick] = tick;
	gDCAC_P[playerid][acArmourTick] = tick;
	gDCAC_P[playerid][acJetpack] = false;
	gDCAC_P[playerid][acLastPosTick] = 0;
	gDCAC_P[playerid][acPosImmuneUntil] = tick + 4000;
	gDCAC_P[playerid][acSpeedImmuneUntil] = tick + 4000;
	gDCAC_P[playerid][acWeaponTick] = tick;
	for (new s = 0; s < 13; s++) gDCAC_P[playerid][acWeapons][s] = 0;
	for (new k = 0; k < 3; k++)
	{
		new w = gDCAC_P[playerid][acSpawnWeapons][k], slot = DCAC_WeaponSlot(w);
		if (w > 0 && slot != -1 && gDCAC_P[playerid][acSpawnAmmo][k] > 0) gDCAC_P[playerid][acWeapons][slot] = w;
	}
	#if defined DCAC_OnPlayerSpawn
		return DCAC_OnPlayerSpawn(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerSpawn
	#undef OnPlayerSpawn
#else
	#define _ALS_OnPlayerSpawn
#endif
#define OnPlayerSpawn DCAC_OnPlayerSpawn
#if defined DCAC_OnPlayerSpawn
	forward DCAC_OnPlayerSpawn(playerid);
#endif

public OnPlayerDeath(playerid, killerid, DCAC_T_WEAPON:reason)
{
	new tick = GetTickCount();
	gDCAC_P[playerid][acLastPosTick] = 0;
	gDCAC_P[playerid][acPosImmuneUntil] = tick + 5000;

	if (DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_FAKEKILL))
	{
		// flood de mortes
		if (tick - gDCAC_P[playerid][acDeathTick] > 5000)
		{
			gDCAC_P[playerid][acDeathTick] = tick;
			gDCAC_P[playerid][acDeathCount] = 0;
		}
		if (++gDCAC_P[playerid][acDeathCount] > gDCAC_Prot[DCAC_FAKEKILL][dpValue])
		{
			DCAC_Detect(playerid, DCAC_FAKEKILL, "flood de mortes");
			gDCAC_P[playerid][acDeathCount] = 0;
		}

		// assassino inválido
		if (killerid != INVALID_PLAYER_ID)
		{
			new bool:fake = false, det[64];
			if (killerid == playerid || !(0 <= killerid < MAX_PLAYERS) || !IsPlayerConnected(killerid))
			{
				fake = true;
				format(det, sizeof det, "assassino invalido (%d)", killerid);
			}
			else if (!IsPlayerNPC(killerid) && !DCAC_RawStreamed(killerid, playerid))
			{
				fake = true;
				format(det, sizeof det, "assassino %d nao estava perto", killerid);
			}
			if (fake)
			{
				DCAC_Detect(playerid, DCAC_FAKEKILL, det);
				killerid = INVALID_PLAYER_ID; // gamemode não conta a kill falsa
			}
		}
	}

	#if defined DCAC_OnPlayerDeath
		return DCAC_OnPlayerDeath(playerid, killerid, reason);
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
#define OnPlayerDeath DCAC_OnPlayerDeath
#if defined DCAC_OnPlayerDeath
	forward DCAC_OnPlayerDeath(playerid, killerid, DCAC_T_WEAPON:reason);
#endif

public OnPlayerStateChange(playerid, DCAC_T_PSTATE:newstate, DCAC_T_PSTATE:oldstate)
{
	new ns = _:newstate, tick = GetTickCount();
	if ((ns == 2 || ns == 3) && _:oldstate == 1 && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_CARWARP)
		&& tick >= gDCAC_P[playerid][acPosImmuneUntil] && gDCAC_P[playerid][acLastPosTick] && tick - gDCAC_P[playerid][acLastPosTick] < 2000)
	{
		new vehicleid = GetPlayerVehicleID(playerid), Float:vx, Float:vy, Float:vz;
		if (vehicleid)
		{
			GetVehiclePos(vehicleid, vx, vy, vz);
			new Float:dist = VectorSize(vx - gDCAC_P[playerid][acLastX], vy - gDCAC_P[playerid][acLastY], vz - gDCAC_P[playerid][acLastZ]);
			if (dist > float(gDCAC_Prot[DCAC_CARWARP][dpValue]))
			{
				new det[64];
				format(det, sizeof det, "entrou no veiculo %d a %.0f m", vehicleid, dist);
				if (DCAC_Detect(playerid, DCAC_CARWARP, det))
				{
					RemovePlayerFromVehicle(playerid);
					SetPlayerPos(playerid, gDCAC_P[playerid][acLastX], gDCAC_P[playerid][acLastY], gDCAC_P[playerid][acLastZ]);
				}
			}
		}
	}
	gDCAC_P[playerid][acLastPosTick] = 0;
	if (ns == 2 || ns == 3 || ns == 1) gDCAC_P[playerid][acSpeedImmuneUntil] = tick + 1500;

	#if defined DCAC_OnPlayerStateChange
		return DCAC_OnPlayerStateChange(playerid, newstate, oldstate);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerStateChange
	#undef OnPlayerStateChange
#else
	#define _ALS_OnPlayerStateChange
#endif
#define OnPlayerStateChange DCAC_OnPlayerStateChange
#if defined DCAC_OnPlayerStateChange
	forward DCAC_OnPlayerStateChange(playerid, DCAC_T_PSTATE:newstate, DCAC_T_PSTATE:oldstate);
#endif

static stock bool:DCAC_FloodCheck(playerid)
{
	if (!DCAC_ValidPlayer(playerid) || !AC_IsEnabled(DCAC_FLOOD)) return false;
	new tick = GetTickCount();
	if (tick - gDCAC_P[playerid][acFloodTick] > 3000)
	{
		gDCAC_P[playerid][acFloodTick] = tick;
		gDCAC_P[playerid][acFloodCount] = 0;
	}
	if (++gDCAC_P[playerid][acFloodCount] > gDCAC_Prot[DCAC_FLOOD][dpValue])
	{
		if (DCAC_Detect(playerid, DCAC_FLOOD, "mensagens/comandos em excesso"))
		{
			SendClientMessage(playerid, DCAC_COLOR, "[Anti-Cheat] Pare de floodar!");
			return true;
		}
	}
	return false;
}

public OnPlayerText(playerid, text[])
{
	if (DCAC_FloodCheck(playerid)) return 0;
	#if defined DCAC_OnPlayerText
		return DCAC_OnPlayerText(playerid, text);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerText
	#undef OnPlayerText
#else
	#define _ALS_OnPlayerText
#endif
#define OnPlayerText DCAC_OnPlayerText
#if defined DCAC_OnPlayerText
	forward DCAC_OnPlayerText(playerid, text[]);
#endif

public OnPlayerCommandText(playerid, cmdtext[])
{
	if (DCAC_FloodCheck(playerid)) return 1;
	#if defined DCAC_OnPlayerCommandText
		return DCAC_OnPlayerCommandText(playerid, cmdtext);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnPlayerCommandText
	#undef OnPlayerCommandText
#else
	#define _ALS_OnPlayerCommandText
#endif
#define OnPlayerCommandText DCAC_OnPlayerCommandText
#if defined DCAC_OnPlayerCommandText
	forward DCAC_OnPlayerCommandText(playerid, cmdtext[]);
#endif

// Para Pawn.CMD: chame AC_CommandFloodCheck(playerid) no OnPlayerCommandReceived
stock bool:AC_CommandFloodCheck(playerid)
{
	return DCAC_FloodCheck(playerid);
}

public OnPlayerWeaponShot(playerid, DCAC_T_WEAPON:weaponid, DCAC_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
	new w = _:weaponid;
	if (DCAC_ValidPlayer(playerid) && !AC_IsPlayerImmune(playerid))
	{
		// atirou com arma que não possui
		if (AC_IsEnabled(DCAC_WEAPON))
		{
			new slot = DCAC_WeaponSlot(w);
			if (slot == -1 || gDCAC_P[playerid][acWeapons][slot] != w)
			{
				new det[48];
				format(det, sizeof det, "atirou com arma id %d", w);
				DCAC_Detect(playerid, DCAC_WEAPON, det);
				return 0;
			}
		}
		// rapid fire
		if (AC_IsEnabled(DCAC_RAPIDFIRE) && w != 38)
		{
			new tick = GetTickCount();
			if (tick - gDCAC_P[playerid][acShotTick] >= 1000)
			{
				gDCAC_P[playerid][acShotTick] = tick;
				gDCAC_P[playerid][acShotCount] = 0;
			}
			if (++gDCAC_P[playerid][acShotCount] > gDCAC_Prot[DCAC_RAPIDFIRE][dpValue])
			{
				new det[48];
				format(det, sizeof det, "%d tiros/s com arma %d", gDCAC_P[playerid][acShotCount], w);
				gDCAC_P[playerid][acShotCount] = 0;
				DCAC_Detect(playerid, DCAC_RAPIDFIRE, det);
				return 0;
			}
		}
	}
	#if defined DCAC_OnPlayerWeaponShot
		return DCAC_OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, fX, fY, fZ);
	#else
		#pragma unused hittype, hitid, fX, fY, fZ
		return 1;
	#endif
}
#if defined _ALS_OnPlayerWeaponShot
	#undef OnPlayerWeaponShot
#else
	#define _ALS_OnPlayerWeaponShot
#endif
#define OnPlayerWeaponShot DCAC_OnPlayerWeaponShot
#if defined DCAC_OnPlayerWeaponShot
	forward DCAC_OnPlayerWeaponShot(playerid, DCAC_T_WEAPON:weaponid, DCAC_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ);
#endif

public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
	if (DCAC_ValidVehicle(vehicleid) && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_VEH_TROLL)
		&& GetTickCount() >= gDCAC_VehImmuneUntil[vehicleid] && !AC_IsPlayerImmune(playerid))
	{
		new Float:x, Float:y, Float:z;
		GetVehiclePos(vehicleid, x, y, z);
		new Float:dist = VectorSize(new_x - x, new_y - y, new_z - z);
		if (dist > float(gDCAC_Prot[DCAC_VEH_TROLL][dpValue]) || VectorSize(vel_x, vel_y, vel_z) > 3.0)
		{
			new det[64];
			format(det, sizeof det, "moveu veiculo %d por %.0f m", vehicleid, dist);
			DCAC_Detect(playerid, DCAC_VEH_TROLL, det);
			return 0;
		}
	}
	#if defined DCAC_OnUnoccupiedVehicleUpdate
		return DCAC_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, new_x, new_y, new_z, vel_x, vel_y, vel_z);
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
#define OnUnoccupiedVehicleUpdate DCAC_OnUnoccupiedVehicleUpdate
#if defined DCAC_OnUnoccupiedVehicleUpdate
	forward DCAC_OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z);
#endif

public OnVehicleMod(playerid, vehicleid, componentid)
{
	if (DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_TUNING) && GetPlayerInterior(playerid) == 0)
	{
		new det[48];
		format(det, sizeof det, "componente %d fora da oficina", componentid);
		if (DCAC_Detect(playerid, DCAC_TUNING, det)) return 0;
	}
	#if defined DCAC_OnVehicleMod
		return DCAC_OnVehicleMod(playerid, vehicleid, componentid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleMod
	#undef OnVehicleMod
#else
	#define _ALS_OnVehicleMod
#endif
#define OnVehicleMod DCAC_OnVehicleMod
#if defined DCAC_OnVehicleMod
	forward DCAC_OnVehicleMod(playerid, vehicleid, componentid);
#endif

public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
	// pay'n'spray conserta o veículo: libera a vida do veículo
	if (DCAC_ValidVehicle(vehicleid))
	{
		gDCAC_VehHealth[vehicleid] = 1000.0;
		gDCAC_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	#if defined DCAC_OnVehicleRespray
		return DCAC_OnVehicleRespray(playerid, vehicleid, color1, color2);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleRespray
	#undef OnVehicleRespray
#else
	#define _ALS_OnVehicleRespray
#endif
#define OnVehicleRespray DCAC_OnVehicleRespray
#if defined DCAC_OnVehicleRespray
	forward DCAC_OnVehicleRespray(playerid, vehicleid, color1, color2);
#endif

public OnVehicleSpawn(vehicleid)
{
	if (DCAC_ValidVehicle(vehicleid))
	{
		gDCAC_VehHealth[vehicleid] = 1000.0;
		gDCAC_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	#if defined DCAC_OnVehicleSpawn
		return DCAC_OnVehicleSpawn(vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnVehicleSpawn
	#undef OnVehicleSpawn
#else
	#define _ALS_OnVehicleSpawn
#endif
#define OnVehicleSpawn DCAC_OnVehicleSpawn
#if defined DCAC_OnVehicleSpawn
	forward DCAC_OnVehicleSpawn(vehicleid);
#endif

#if !DCAC_OMP
// No open.mp a validação de dialogid já é feita pelo próprio servidor.
public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
	if (DCAC_ValidPlayer(playerid) && gDCAC_Global && gDCAC_Prot[DCAC_DIALOG][dpEnabled])
	{
		if (dialogid != gDCAC_P[playerid][acDialog])
		{
			new det[48];
			format(det, sizeof det, "dialog %d (esperado %d)", dialogid, gDCAC_P[playerid][acDialog]);
			if (DCAC_Detect(playerid, DCAC_DIALOG, det)) return 1;
		}
	}
	gDCAC_P[playerid][acDialog] = -1;
	#if defined DCAC_OnDialogResponse
		return DCAC_OnDialogResponse(playerid, dialogid, response, listitem, inputtext);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnDialogResponse
	#undef OnDialogResponse
#else
	#define _ALS_OnDialogResponse
#endif
#define OnDialogResponse DCAC_OnDialogResponse
#if defined DCAC_OnDialogResponse
	forward DCAC_OnDialogResponse(playerid, dialogid, response, listitem, inputtext[]);
#endif
#endif

/* ===========================================================================
 *  Funções remotas usadas pelos filterscripts (<drizzie_ac_fs>)
 * ========================================================================= */
forward DCAC_R_GiveMoney(playerid, amount);
forward DCAC_R_ResetMoney(playerid);
forward DCAC_R_GetMoney(playerid);
forward DCAC_R_SetHealth(playerid, Float:value);
forward DCAC_R_SetArmour(playerid, Float:value);
forward DCAC_R_GiveWeapon(playerid, weaponid, ammo);
forward DCAC_R_ResetWeapons(playerid);
forward DCAC_R_PosImmunity(playerid, ms);
forward DCAC_R_VehImmunity(vehicleid, Float:health);
forward DCAC_R_Jetpack(playerid);
forward DCAC_R_Dialog(playerid, dialogid);

/* ===========================================================================
 *  Hooks de natives
 * ========================================================================= */

// ---------- dinheiro
stock DCAC_T_BOOL:DCAC_GivePlayerMoney(playerid, money)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acMoney] += money;
		gDCAC_P[playerid][acMoneyTick] = GetTickCount();
	}
	return GivePlayerMoney(playerid, money);
}
#if defined _ALS_GivePlayerMoney
	#undef GivePlayerMoney
#else
	#define _ALS_GivePlayerMoney
#endif
#define GivePlayerMoney DCAC_GivePlayerMoney

stock DCAC_T_BOOL:DCAC_ResetPlayerMoney(playerid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acMoney] = 0;
		gDCAC_P[playerid][acMoneyTick] = GetTickCount();
	}
	return ResetPlayerMoney(playerid);
}
#if defined _ALS_ResetPlayerMoney
	#undef ResetPlayerMoney
#else
	#define _ALS_ResetPlayerMoney
#endif
#define ResetPlayerMoney DCAC_ResetPlayerMoney

// retorna sempre o valor do SERVIDOR (o do cliente pode estar hackeado)
stock DCAC_GetPlayerMoney(playerid)
{
	if (0 <= playerid < MAX_PLAYERS && IsPlayerConnected(playerid) && !IsPlayerNPC(playerid)) return gDCAC_P[playerid][acMoney];
	return GetPlayerMoney(playerid);
}
#if defined _ALS_GetPlayerMoney
	#undef GetPlayerMoney
#else
	#define _ALS_GetPlayerMoney
#endif
#define GetPlayerMoney DCAC_GetPlayerMoney

// ---------- vida / colete
stock DCAC_T_BOOL:DCAC_SetPlayerHealth(playerid, Float:health)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acHealth] = health;
		gDCAC_P[playerid][acHealthTick] = GetTickCount();
	}
	return SetPlayerHealth(playerid, health);
}
#if defined _ALS_SetPlayerHealth
	#undef SetPlayerHealth
#else
	#define _ALS_SetPlayerHealth
#endif
#define SetPlayerHealth DCAC_SetPlayerHealth

stock DCAC_T_BOOL:DCAC_SetPlayerArmour(playerid, Float:armour)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acArmour] = armour;
		gDCAC_P[playerid][acArmourTick] = GetTickCount();
	}
	return SetPlayerArmour(playerid, armour);
}
#if defined _ALS_SetPlayerArmour
	#undef SetPlayerArmour
#else
	#define _ALS_SetPlayerArmour
#endif
#define SetPlayerArmour DCAC_SetPlayerArmour

// ---------- armas
stock DCAC_T_BOOL:DCAC_GivePlayerWeapon(playerid, DCAC_T_WEAPON:weaponid, ammo)
{
	new slot = DCAC_WeaponSlot(_:weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acWeapons][slot] = _:weaponid;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
	return GivePlayerWeapon(playerid, weaponid, ammo);
}
#if defined _ALS_GivePlayerWeapon
	#undef GivePlayerWeapon
#else
	#define _ALS_GivePlayerWeapon
#endif
#define GivePlayerWeapon DCAC_GivePlayerWeapon

stock DCAC_T_BOOL:DCAC_ResetPlayerWeapons(playerid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		for (new s = 0; s < 13; s++) gDCAC_P[playerid][acWeapons][s] = 0;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
	return ResetPlayerWeapons(playerid);
}
#if defined _ALS_ResetPlayerWeapons
	#undef ResetPlayerWeapons
#else
	#define _ALS_ResetPlayerWeapons
#endif
#define ResetPlayerWeapons DCAC_ResetPlayerWeapons

stock DCAC_T_BOOL:DCAC_SetSpawnInfo(playerid, team, skin, Float:x, Float:y, Float:z, Float:rotation,
	DCAC_T_WEAPON:weapon1 = DCAC_T_WEAPON:0, weapon1_ammo = 0,
	DCAC_T_WEAPON:weapon2 = DCAC_T_WEAPON:0, weapon2_ammo = 0,
	DCAC_T_WEAPON:weapon3 = DCAC_T_WEAPON:0, weapon3_ammo = 0)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acSpawnWeapons][0] = _:weapon1; gDCAC_P[playerid][acSpawnAmmo][0] = weapon1_ammo;
		gDCAC_P[playerid][acSpawnWeapons][1] = _:weapon2; gDCAC_P[playerid][acSpawnAmmo][1] = weapon2_ammo;
		gDCAC_P[playerid][acSpawnWeapons][2] = _:weapon3; gDCAC_P[playerid][acSpawnAmmo][2] = weapon3_ammo;
	}
	return SetSpawnInfo(playerid, team, skin, x, y, z, rotation, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
}
#if defined _ALS_SetSpawnInfo
	#undef SetSpawnInfo
#else
	#define _ALS_SetSpawnInfo
#endif
#define SetSpawnInfo DCAC_SetSpawnInfo

stock DCAC_AddPlayerClass(skin, Float:x, Float:y, Float:z, Float:angle,
	DCAC_T_WEAPON:weapon1 = DCAC_T_WEAPON:0, weapon1_ammo = 0,
	DCAC_T_WEAPON:weapon2 = DCAC_T_WEAPON:0, weapon2_ammo = 0,
	DCAC_T_WEAPON:weapon3 = DCAC_T_WEAPON:0, weapon3_ammo = 0)
{
	new classid = AddPlayerClass(skin, x, y, z, angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
	if (0 <= classid < DCAC_MAX_CLASSES)
	{
		gDCAC_ClassWeapons[classid][0] = _:weapon1; gDCAC_ClassWeapons[classid][1] = weapon1_ammo;
		gDCAC_ClassWeapons[classid][2] = _:weapon2; gDCAC_ClassWeapons[classid][3] = weapon2_ammo;
		gDCAC_ClassWeapons[classid][4] = _:weapon3; gDCAC_ClassWeapons[classid][5] = weapon3_ammo;
	}
	return classid;
}
#if defined _ALS_AddPlayerClass
	#undef AddPlayerClass
#else
	#define _ALS_AddPlayerClass
#endif
#define AddPlayerClass DCAC_AddPlayerClass

stock DCAC_AddPlayerClassEx(teamid, skin, Float:x, Float:y, Float:z, Float:angle,
	DCAC_T_WEAPON:weapon1 = DCAC_T_WEAPON:0, weapon1_ammo = 0,
	DCAC_T_WEAPON:weapon2 = DCAC_T_WEAPON:0, weapon2_ammo = 0,
	DCAC_T_WEAPON:weapon3 = DCAC_T_WEAPON:0, weapon3_ammo = 0)
{
	new classid = AddPlayerClassEx(teamid, skin, x, y, z, angle, weapon1, weapon1_ammo, weapon2, weapon2_ammo, weapon3, weapon3_ammo);
	if (0 <= classid < DCAC_MAX_CLASSES)
	{
		gDCAC_ClassWeapons[classid][0] = _:weapon1; gDCAC_ClassWeapons[classid][1] = weapon1_ammo;
		gDCAC_ClassWeapons[classid][2] = _:weapon2; gDCAC_ClassWeapons[classid][3] = weapon2_ammo;
		gDCAC_ClassWeapons[classid][4] = _:weapon3; gDCAC_ClassWeapons[classid][5] = weapon3_ammo;
	}
	return classid;
}
#if defined _ALS_AddPlayerClassEx
	#undef AddPlayerClassEx
#else
	#define _ALS_AddPlayerClassEx
#endif
#define AddPlayerClassEx DCAC_AddPlayerClassEx

// ---------- posição
stock DCAC_T_BOOL:DCAC_SetPlayerPos(playerid, Float:x, Float:y, Float:z)
{
	AC_PositionImmunity(playerid, 3000);
	return SetPlayerPos(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPos
	#undef SetPlayerPos
#else
	#define _ALS_SetPlayerPos
#endif
#define SetPlayerPos DCAC_SetPlayerPos

stock DCAC_T_BOOL:DCAC_SetPlayerPosFindZ(playerid, Float:x, Float:y, Float:z)
{
	AC_PositionImmunity(playerid, 3000);
	return SetPlayerPosFindZ(playerid, x, y, z);
}
#if defined _ALS_SetPlayerPosFindZ
	#undef SetPlayerPosFindZ
#else
	#define _ALS_SetPlayerPosFindZ
#endif
#define SetPlayerPosFindZ DCAC_SetPlayerPosFindZ

stock DCAC_T_BOOL:DCAC_SetPlayerVelocity(playerid, Float:x, Float:y, Float:z)
{
	AC_PositionImmunity(playerid, 4000);
	return SetPlayerVelocity(playerid, x, y, z);
}
#if defined _ALS_SetPlayerVelocity
	#undef SetPlayerVelocity
#else
	#define _ALS_SetPlayerVelocity
#endif
#define SetPlayerVelocity DCAC_SetPlayerVelocity

stock DCAC_T_BOOL:DCAC_PutPlayerInVehicle(playerid, vehicleid, seatid)
{
	AC_PositionImmunity(playerid, 3000);
	return PutPlayerInVehicle(playerid, vehicleid, seatid);
}
#if defined _ALS_PutPlayerInVehicle
	#undef PutPlayerInVehicle
#else
	#define _ALS_PutPlayerInVehicle
#endif
#define PutPlayerInVehicle DCAC_PutPlayerInVehicle

stock DCAC_T_BOOL:DCAC_TogglePlayerSpectating(playerid, DCAC_T_BOOL:toggle)
{
	AC_PositionImmunity(playerid, 5000);
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acSpawnTick] = GetTickCount();
	return TogglePlayerSpectating(playerid, toggle);
}
#if defined _ALS_TogglePlayerSpectating
	#undef TogglePlayerSpectating
#else
	#define _ALS_TogglePlayerSpectating
#endif
#define TogglePlayerSpectating DCAC_TogglePlayerSpectating

static stock DCAC_VehicleOccupantsImmunity(vehicleid, ms)
{
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && GetPlayerVehicleID(i) == vehicleid) AC_PositionImmunity(i, ms);
	}
	if (DCAC_ValidVehicle(vehicleid)) gDCAC_VehImmuneUntil[vehicleid] = GetTickCount() + ms;
}

stock DCAC_T_BOOL:DCAC_SetVehiclePos(vehicleid, Float:x, Float:y, Float:z)
{
	DCAC_VehicleOccupantsImmunity(vehicleid, 3000);
	return SetVehiclePos(vehicleid, x, y, z);
}
#if defined _ALS_SetVehiclePos
	#undef SetVehiclePos
#else
	#define _ALS_SetVehiclePos
#endif
#define SetVehiclePos DCAC_SetVehiclePos

stock DCAC_T_BOOL:DCAC_SetVehicleVelocity(vehicleid, Float:x, Float:y, Float:z)
{
	DCAC_VehicleOccupantsImmunity(vehicleid, 4000);
	return SetVehicleVelocity(vehicleid, x, y, z);
}
#if defined _ALS_SetVehicleVelocity
	#undef SetVehicleVelocity
#else
	#define _ALS_SetVehicleVelocity
#endif
#define SetVehicleVelocity DCAC_SetVehicleVelocity

// ---------- jetpack
stock DCAC_T_BOOL:DCAC_SetPlayerSpecialAction(playerid, DCAC_T_SACTION:actionid)
{
	if (0 <= playerid < MAX_PLAYERS && _:actionid == 2) gDCAC_P[playerid][acJetpack] = true;
	return SetPlayerSpecialAction(playerid, actionid);
}
#if defined _ALS_SetPlayerSpecialAction
	#undef SetPlayerSpecialAction
#else
	#define _ALS_SetPlayerSpecialAction
#endif
#define SetPlayerSpecialAction DCAC_SetPlayerSpecialAction

// ---------- veículos
stock DCAC_T_BOOL:DCAC_SetVehicleHealth(vehicleid, Float:health)
{
	if (DCAC_ValidVehicle(vehicleid)) gDCAC_VehHealth[vehicleid] = health;
	return SetVehicleHealth(vehicleid, health);
}
#if defined _ALS_SetVehicleHealth
	#undef SetVehicleHealth
#else
	#define _ALS_SetVehicleHealth
#endif
#define SetVehicleHealth DCAC_SetVehicleHealth

stock DCAC_T_BOOL:DCAC_RepairVehicle(vehicleid)
{
	if (DCAC_ValidVehicle(vehicleid))
	{
		gDCAC_VehHealth[vehicleid] = 1000.0;
		gDCAC_VehImmuneUntil[vehicleid] = GetTickCount() + 2000;
	}
	return RepairVehicle(vehicleid);
}
#if defined _ALS_RepairVehicle
	#undef RepairVehicle
#else
	#define _ALS_RepairVehicle
#endif
#define RepairVehicle DCAC_RepairVehicle

static stock DCAC_NewVehicle(vehicleid)
{
	if (DCAC_ValidVehicle(vehicleid))
	{
		gDCAC_VehHealth[vehicleid] = 1000.0;
		gDCAC_VehImmuneUntil[vehicleid] = GetTickCount() + 3000;
	}
	return vehicleid;
}

stock DCAC_CreateVehicle(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2, respawn_delay, DCAC_T_BOOL:addsiren = DCAC_T_BOOL:0)
{
	return DCAC_NewVehicle(CreateVehicle(modelid, x, y, z, angle, color1, color2, respawn_delay, addsiren));
}
#if defined _ALS_CreateVehicle
	#undef CreateVehicle
#else
	#define _ALS_CreateVehicle
#endif
#define CreateVehicle DCAC_CreateVehicle

stock DCAC_AddStaticVehicle(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2)
{
	return DCAC_NewVehicle(AddStaticVehicle(modelid, x, y, z, angle, color1, color2));
}
#if defined _ALS_AddStaticVehicle
	#undef AddStaticVehicle
#else
	#define _ALS_AddStaticVehicle
#endif
#define AddStaticVehicle DCAC_AddStaticVehicle

stock DCAC_AddStaticVehicleEx(modelid, Float:x, Float:y, Float:z, Float:angle, color1, color2, respawn_delay, DCAC_T_BOOL:addsiren = DCAC_T_BOOL:0)
{
	return DCAC_NewVehicle(AddStaticVehicleEx(modelid, x, y, z, angle, color1, color2, respawn_delay, addsiren));
}
#if defined _ALS_AddStaticVehicleEx
	#undef AddStaticVehicleEx
#else
	#define _ALS_AddStaticVehicleEx
#endif
#define AddStaticVehicleEx DCAC_AddStaticVehicleEx

// ---------- dialogs (somente SA-MP; o open.mp já valida sozinho)
#if !DCAC_OMP
stock DCAC_ShowPlayerDialog(playerid, dialogid, style, const caption[], const info[], const button1[], const button2[])
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acDialog] = dialogid;
	return ShowPlayerDialog(playerid, dialogid, style, caption, info, button1, button2);
}
#if defined _ALS_ShowPlayerDialog
	#undef ShowPlayerDialog
#else
	#define _ALS_ShowPlayerDialog
#endif
#define ShowPlayerDialog DCAC_ShowPlayerDialog
#endif

/* ===========================================================================
 *  Implementação das funções remotas (filterscripts)
 * ========================================================================= */
public DCAC_R_GiveMoney(playerid, amount)          { GivePlayerMoney(playerid, amount); return 1; }
public DCAC_R_ResetMoney(playerid)                 { ResetPlayerMoney(playerid); return 1; }
public DCAC_R_GetMoney(playerid)                   { return GetPlayerMoney(playerid); }
public DCAC_R_SetHealth(playerid, Float:value)     { SetPlayerHealth(playerid, value); return 1; }
public DCAC_R_SetArmour(playerid, Float:value)     { SetPlayerArmour(playerid, value); return 1; }
public DCAC_R_GiveWeapon(playerid, weaponid, ammo)
{
	#if DCAC_OMP
		GivePlayerWeapon(playerid, WEAPON:weaponid, ammo);
	#else
		GivePlayerWeapon(playerid, weaponid, ammo);
	#endif
	return 1;
}
public DCAC_R_ResetWeapons(playerid)               { ResetPlayerWeapons(playerid); return 1; }
public DCAC_R_PosImmunity(playerid, ms)            { AC_PositionImmunity(playerid, ms); return 1; }
public DCAC_R_VehImmunity(vehicleid, Float:health)
{
	// health < 0.0 => apenas imunidade de posição (SetVehiclePos/Velocity)
	if (DCAC_ValidVehicle(vehicleid) && health >= 0.0) gDCAC_VehHealth[vehicleid] = health;
	DCAC_VehicleOccupantsImmunity(vehicleid, 3000);
	return 1;
}
public DCAC_R_Jetpack(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acJetpack] = true;
	return 1;
}
public DCAC_R_Dialog(playerid, dialogid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acDialog] = dialogid;
	return 1;
}
