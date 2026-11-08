/*
 *  ===========================================================================
 *   Drizzie City Anti-Cheat (DCAC) v2 - include para GAMEMODE
 *   Compatível com SA-MP 0.3.7 (R2+) / 0.3.DL e open.mp
 *  ===========================================================================
 *
 *   Todas as proteções podem ser ativadas/desativadas pelo Discord (bot em
 *   anticheat/bot). O servidor fala com o bot via HTTP nativo (não precisa de
 *   nenhum plugin .dll/.so extra).
 *
 *   ID FIXO DO SERVIDOR
 *   -------------------
 *   Na primeira vez que o gamemode inicia, o servidor se registra no bot e
 *   recebe um ID fixo (ex.: DC-7K2QMX) + uma chave de login. Eles ficam salvos
 *   em scriptfiles/dcac_servidor.cfg e aparecem no console:
 *
 *       [DCAC] ID do servidor: DC-7K2QMX | Chave de login: ABCD-EFGH-JKLM
 *       [DCAC] No Discord use: /ac login id:DC-7K2QMX chave:ABCD-EFGH-JKLM
 *
 *   Digite "dcac" no console/RCON para ver novamente.
 *   FAÇA BACKUP do arquivo dcac_servidor.cfg (ele é a identidade do servidor).
 *
 *   USO (no topo do gamemode):
 *
 *       #include <open.mp>          // ou <a_samp>
 *
 *       #define DCAC_API_HOST "127.0.0.1:8090"     // ip:porta do bot (sem http://)
 *       #include <drizzie_ac>
 *
 *   Opcionais (antes do include):
 *       #define DCAC_REGISTER_KEY "..."   // se o bot exigir AC_REGISTER_KEY
 *       #define DCAC_SERVER_ID    "DC-XXXXXX"  // fixa o ID manualmente
 *       #define DCAC_SERVER_TOKEN "..."        // token desse ID (ver /ac token no Discord)
 *
 *   Inclua o drizzie_ac LOGO DEPOIS do a_samp/open.mp e ANTES de qualquer
 *   outro include. Filterscripts usam <drizzie_ac_fs>.
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
	#error "[DCAC] Em filterscripts use <drizzie_ac_fs>, nao <drizzie_ac>."
#endif

#if !defined DCAC_API_HOST
	#define DCAC_API_HOST "127.0.0.1:8090"
#endif
#if !defined DCAC_REGISTER_KEY
	#define DCAC_REGISTER_KEY ""
#endif
#if !defined DCAC_ID_FILE
	#define DCAC_ID_FILE "dcac_servidor.cfg"
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
	#define DCAC_T_KEY        KEY
	#define DCAC_T_CPTYPE     CP_TYPE
	#define DCAC_T_BOOL       bool
#else
	#define DCAC_OMP          (0)
	#define DCAC_T_WEAPON     _
	#define DCAC_T_PSTATE     _
	#define DCAC_T_BULLET     _
	#define DCAC_T_SACTION    _
	#define DCAC_T_KEY        _
	#define DCAC_T_CPTYPE     _
	#define DCAC_T_BOOL       _
#endif

#if !defined MAX_PICKUPS
	#define MAX_PICKUPS (4096)
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
#define DCAC_VEH_TROLL      (14)  // mover veículos desocupados / trailers (troll)
#define DCAC_PING           (15)  // ping alto
#define DCAC_IPFLOOD        (16)  // muitas conexões simultâneas do mesmo IP
#define DCAC_TUNING         (17)  // tuning fora da oficina (crasher)
#define DCAC_DIALOG         (18)  // resposta falsa de dialog (spoof)
#define DCAC_GODMODE        (19)  // godmode (leva tiro e não perde vida)
#define DCAC_RANGE          (20)  // alcance de tiro impossível (silent aim / range hack)
#define DCAC_DAMAGE         (21)  // dano acima do permitido pela arma
#define DCAC_AMMO           (22)  // munição infinita / munição criada
#define DCAC_CRASHER        (23)  // dados inválidos (bullet/seat/posição crasher)
#define DCAC_FAKESPAWN      (24)  // spawn sem permissão do servidor
#define DCAC_ADVERT         (25)  // divulgação de IPs no chat
#define DCAC_VEH_SPAM       (26)  // spam de entrar/sair de veículos
#define DCAC_FAKEPICKUP     (27)  // pegar pickup à distância
#define DCAC_FAKECP         (28)  // entrar em checkpoint à distância
#define DCAC_CBUG           (29)  // c-bug (desligado por padrão)
#define DCAC_RCON           (30)  // brute force no RCON
#define DCAC_FAKENPC        (31)  // NPC falso (conexão externa como NPC)
#define DCAC_RECONNECT      (32)  // flood de reconexões (bots)
#define DCAC_AIMBOT         (33)  // precisão suspeita (aimbot)
#define DCAC_MAX            (34)

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
	acLastUpdate,
	acIp[16],
	// dinheiro
	acMoney,
	acMoneyTick,
	// vida / colete
	Float:acHealth,
	Float:acArmour,
	acHealthTick,
	acArmourTick,
	// armas / munição
	acWeapons[13],
	acAmmo[13],
	acWeaponTick,
	acSpawnWeapons[3],
	acSpawnAmmo[3],
	acAmmoStrikes,
	acLastShotAmmo,
	acLastShotWeapon,
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
	// godmode
	acGodTick,
	acGodHits,
	Float:acGodHP,
	// checkpoints
	bool:acCP,
	Float:acCPX,
	Float:acCPY,
	Float:acCPZ,
	Float:acCPSize,
	bool:acRCP,
	Float:acRCPX,
	Float:acRCPY,
	Float:acRCPZ,
	Float:acRCPSize
}

enum E_DCAC_PICKUP
{
	bool:dpkValid,
	Float:dpkX,
	Float:dpkY,
	Float:dpkZ
}

static stock const gDCAC_Names[DCAC_MAX][] =
{
	"Dinheiro", "Vida", "Colete", "Armas", "Velocidade a pe", "Velocidade em veiculo",
	"Teleporte", "Airbreak/Fly", "Jetpack", "Reparo de veiculo", "Fake kill",
	"Rapid fire", "Flood", "Puxar veiculo", "Veiculo troll", "Ping alto",
	"Conexoes por IP", "Tuning invalido", "Dialog falso", "Godmode", "Alcance de tiro",
	"Dano hack", "Municao", "Crasher", "Spawn falso", "Divulgacao", "Spam de veiculo",
	"Pickup falso", "Checkpoint falso", "C-Bug", "RCON brute force", "NPC falso",
	"Flood de reconexao", "Aimbot"
};

// textos auxiliares (evita ternários com strings de tamanhos diferentes)
static stock const gDCAC_ActPast[2][8]   = {"kickado", "banido"};
static stock const gDCAC_ActShort[2][5]  = {"kick", "ban"};
static stock const gDCAC_OnOff[2][11]    = {"DESATIVADO", "ATIVO"};
static stock const gDCAC_MoveMode[2][8]  = {"a pe", "veiculo"};
static stock const gDCAC_BotState[2][8]  = {"online", "OFFLINE"};

// padrões usados até o primeiro contato com o bot (ou se ele estiver offline)
static stock const gDCAC_Defaults[DCAC_MAX][E_DCAC_PROT] =
{
	{true,  DCAC_ACTION_KICK, 3,  0},    // 0  dinheiro
	{true,  DCAC_ACTION_KICK, 3,  0},    // 1  vida
	{true,  DCAC_ACTION_KICK, 3,  0},    // 2  colete
	{true,  DCAC_ACTION_KICK, 2,  0},    // 3  armas
	{true,  DCAC_ACTION_KICK, 3,  70},   // 4  velocidade a pé (km/h)
	{true,  DCAC_ACTION_KICK, 3,  360},  // 5  velocidade veículo (km/h)
	{true,  DCAC_ACTION_KICK, 3,  80},   // 6  teleporte (m)
	{true,  DCAC_ACTION_KICK, 3,  14},   // 7  airbreak (m/s)
	{true,  DCAC_ACTION_KICK, 1,  0},    // 8  jetpack
	{true,  DCAC_ACTION_KICK, 3,  0},    // 9  reparo veículo
	{true,  DCAC_ACTION_KICK, 1,  4},    // 10 fake kill (mortes em 5s)
	{true,  DCAC_ACTION_KICK, 3,  25},   // 11 rapid fire (tiros/s)
	{true,  DCAC_ACTION_KICK, 3,  5},    // 12 flood (msgs em 3s)
	{true,  DCAC_ACTION_KICK, 2,  30},   // 13 puxar veículo (m)
	{true,  DCAC_ACTION_KICK, 2,  20},   // 14 veículo troll (m)
	{false, DCAC_ACTION_KICK, 1,  800},  // 15 ping (ms)
	{true,  DCAC_ACTION_KICK, 1,  3},    // 16 conexões por IP
	{true,  DCAC_ACTION_KICK, 1,  0},    // 17 tuning
	{true,  DCAC_ACTION_KICK, 1,  0},    // 18 dialog
	{true,  DCAC_ACTION_KICK, 2,  6},    // 19 godmode (tiros sem perder vida)
	{true,  DCAC_ACTION_KICK, 3,  30},   // 20 alcance (% acima do alcance da arma)
	{true,  DCAC_ACTION_KICK, 2,  0},    // 21 dano hack
	{true,  DCAC_ACTION_KICK, 2,  12},   // 22 munição (tiros sem gastar munição)
	{true,  DCAC_ACTION_KICK, 1,  0},    // 23 crasher
	{true,  DCAC_ACTION_KICK, 1,  0},    // 24 spawn falso
	{true,  DCAC_ACTION_KICK, 2,  0},    // 25 divulgação
	{true,  DCAC_ACTION_KICK, 2,  8},    // 26 spam de veículo (em 5s)
	{true,  DCAC_ACTION_KICK, 2,  15},   // 27 pickup falso (m)
	{true,  DCAC_ACTION_KICK, 2,  10},   // 28 checkpoint falso (m além do raio)
	{false, DCAC_ACTION_WARN, 3,  600},  // 29 c-bug (ms entre tiro e agachar)
	{true,  DCAC_ACTION_KICK, 1,  3},    // 30 rcon (tentativas erradas)
	{true,  DCAC_ACTION_KICK, 1,  0},    // 31 npc falso
	{true,  DCAC_ACTION_KICK, 1,  5},    // 32 reconexão (conexões em 30s)
	{true,  DCAC_ACTION_WARN, 2,  92}    // 33 aimbot (% de acerto em 40 tiros)
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
	gDCAC_ServerId[24],
	gDCAC_Token[72],
	gDCAC_LoginKey[24],
	bool:gDCAC_RegisterPending = false,
	gDCAC_RegisterCounter = 0,
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
	gDCAC_ClassWeapons[DCAC_MAX_CLASSES][6],
	gDCAC_Pickups[MAX_PICKUPS][E_DCAC_PICKUP],
	// histórico de conexões (flood de reconexão)
	gDCAC_ConnIp[64][16],
	gDCAC_ConnTick[64],
	gDCAC_ConnIdx = 0,
	// tentativas de RCON
	gDCAC_RconIp[32][16],
	gDCAC_RconCount[32],
	gDCAC_RconTick[32];

forward OnAntiCheatDetect(playerid, code, const detail[]);
forward OnAntiCheatPunish(playerid, code, action, const detail[]);
forward OnAntiCheatAdminCheck(playerid);

forward DCAC_Tick();
forward DCAC_OnConfig(index, response_code, data[]);
forward DCAC_OnRegister(index, response_code, data[]);
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
static stock DCAC_RawRemoveFromVehicle(playerid)       { RemovePlayerFromVehicle(playerid); }
static stock DCAC_RawSetPos(playerid, Float:x, Float:y, Float:z) { SetPlayerPos(playerid, x, y, z); }

static stock DCAC_RawGiveWeapon(playerid, weaponid, ammo)
{
	#if DCAC_OMP
		GivePlayerWeapon(playerid, WEAPON:weaponid, ammo);
	#else
		GivePlayerWeapon(playerid, weaponid, ammo);
	#endif
}

static stock DCAC_RawSetAmmo(playerid, weaponid, ammo)
{
	#if DCAC_OMP
		SetPlayerAmmo(playerid, WEAPON:weaponid, ammo);
	#else
		SetPlayerAmmo(playerid, weaponid, ammo);
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

// alcance máximo (metros) das armas de fogo
static stock Float:DCAC_WeaponRange(weaponid)
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

// dano máximo por acerto (valores padrão do SA-MP)
static stock Float:DCAC_WeaponDamage(weaponid)
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

static stock bool:DCAC_IsBulletWeapon(weaponid)
{
	return (22 <= weaponid <= 34) || weaponid == 38;
}

static stock bool:DCAC_BadFloat(Float:v, Float:limit)
{
	// NaN é diferente de si mesmo
	return (v != v) || v > limit || v < -limit;
}

static stock bool:DCAC_ValidPlayer(playerid)
{
	return (0 <= playerid < MAX_PLAYERS) && IsPlayerConnected(playerid) && !gDCAC_P[playerid][acNPC];
}

static stock bool:DCAC_ValidVehicle(vehicleid)
{
	return (0 < vehicleid < MAX_VEHICLES);
}

static stock bool:DCAC_IsPaused(playerid)
{
	return GetTickCount() - gDCAC_P[playerid][acLastUpdate] > 1500;
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

static stock DCAC_Copy(dest[], const src[], size = sizeof dest)
{
	strmid(dest, src, 0, strlen(src), size);
}

// procura IPs (1.2.3.4) ou portas (:7777) no texto
static stock bool:DCAC_HasAdvert(const text[])
{
	// grupos: quantos octetos válidos (0-255, sem zero à esquerda) seguidos de separador
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
	gDCAC_P[playerid][acLastUpdate] = tick;
	GetPlayerIp(playerid, gDCAC_P[playerid][acIp], 16);
	gDCAC_P[playerid][acMoney] = 0;
	gDCAC_P[playerid][acMoneyTick] = tick;
	gDCAC_P[playerid][acHealth] = 100.0;
	gDCAC_P[playerid][acArmour] = 0.0;
	gDCAC_P[playerid][acHealthTick] = tick;
	gDCAC_P[playerid][acArmourTick] = tick;
	for (new s = 0; s < 13; s++)
	{
		gDCAC_P[playerid][acWeapons][s] = 0;
		gDCAC_P[playerid][acAmmo][s] = 0;
	}
	for (new s = 0; s < 3; s++)
	{
		gDCAC_P[playerid][acSpawnWeapons][s] = 0;
		gDCAC_P[playerid][acSpawnAmmo][s] = 0;
	}
	gDCAC_P[playerid][acWeaponTick] = tick;
	gDCAC_P[playerid][acAmmoStrikes] = 0;
	gDCAC_P[playerid][acLastShotAmmo] = 0;
	gDCAC_P[playerid][acLastShotWeapon] = 0;
	gDCAC_P[playerid][acLastPosTick] = 0;
	gDCAC_P[playerid][acLastState] = 0;
	gDCAC_P[playerid][acPosImmuneUntil] = tick + 5000;
	gDCAC_P[playerid][acSpeedImmuneUntil] = tick + 5000;
	gDCAC_P[playerid][acJetpack] = false;
	gDCAC_P[playerid][acSpawnAllowed] = false;
	gDCAC_P[playerid][acShotTick] = 0;
	gDCAC_P[playerid][acShotCount] = 0;
	gDCAC_P[playerid][acFloodTick] = 0;
	gDCAC_P[playerid][acFloodCount] = 0;
	gDCAC_P[playerid][acDeathTick] = 0;
	gDCAC_P[playerid][acDeathCount] = 0;
	gDCAC_P[playerid][acPingStrikes] = 0;
	gDCAC_P[playerid][acDialog] = -1;
	gDCAC_P[playerid][acVehSpamTick] = 0;
	gDCAC_P[playerid][acVehSpamCount] = 0;
	gDCAC_P[playerid][acCbugTick] = 0;
	gDCAC_P[playerid][acAimShots] = 0;
	gDCAC_P[playerid][acAimHits] = 0;
	gDCAC_P[playerid][acGodTick] = 0;
	gDCAC_P[playerid][acGodHits] = 0;
	gDCAC_P[playerid][acCP] = false;
	gDCAC_P[playerid][acRCP] = false;
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

// ID fixo deste servidor no bot (vazio enquanto não registrado)
stock AC_GetServerId(dest[], size = sizeof dest)
{
	DCAC_Copy(dest, gDCAC_ServerId, size);
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
stock AC_AllowWeapon(playerid, weaponid, ammo = 9999)
{
	new slot = DCAC_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acWeapons][slot] = weaponid;
		gDCAC_P[playerid][acAmmo][slot] = ammo;
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
	gDCAC_PollCounter = gDCAC_PollSeconds * 1000 / DCAC_TICK_MS;
}

/* ===========================================================================
 *  Identidade do servidor (ID fixo + token)
 * ========================================================================= */
static stock DCAC_PrintLogin()
{
	print("[DCAC] ---------------------------------------------------------------");
	if (gDCAC_LoginKey[0])
	{
		printf("[DCAC] ID do servidor: %s | Chave de login: %s", gDCAC_ServerId, gDCAC_LoginKey);
		printf("[DCAC] No Discord use: /ac login id:%s chave:%s", gDCAC_ServerId, gDCAC_LoginKey);
	}
	else printf("[DCAC] ID do servidor: %s | Chave de login: (aguardando o bot)", gDCAC_ServerId);
	print("[DCAC] Guarde essa chave! Quem tiver ela pode configurar o anti-cheat.");
	print("[DCAC] ---------------------------------------------------------------");
}

static stock DCAC_LoadIdentity()
{
	gDCAC_ServerId[0] = EOS;
	gDCAC_Token[0] = EOS;
	#if defined DCAC_SERVER_ID && defined DCAC_SERVER_TOKEN
		DCAC_Copy(gDCAC_ServerId, DCAC_SERVER_ID);
		DCAC_Copy(gDCAC_Token, DCAC_SERVER_TOKEN);
	#else
		new File:f = fopen(DCAC_ID_FILE, io_read);
		if (f)
		{
			new line[128], len;
			while (fread(f, line))
			{
				len = strlen(line);
				while (len > 0 && (line[len - 1] == '\n' || line[len - 1] == '\r' || line[len - 1] == ' ')) line[--len] = EOS;
				if (!strcmp(line, "id=", false, 3) && len > 3) strmid(gDCAC_ServerId, line, 3, len, sizeof gDCAC_ServerId);
				else if (!strcmp(line, "token=", false, 6) && len > 6) strmid(gDCAC_Token, line, 6, len, sizeof gDCAC_Token);
			}
			fclose(f);
		}
	#endif
	if (gDCAC_ServerId[0] == EOS || gDCAC_Token[0] == EOS)
	{
		gDCAC_ServerId[0] = EOS;
		gDCAC_Token[0] = EOS;
		return 0;
	}
	return 1;
}

static stock DCAC_SaveIdentity()
{
	new File:f = fopen(DCAC_ID_FILE, io_write);
	if (!f)
	{
		printf("[DCAC] ERRO: nao foi possivel salvar scriptfiles/%s (a pasta scriptfiles existe?)", DCAC_ID_FILE);
		return 0;
	}
	new line[128];
	fwrite(f, "# Drizzie City Anti-Cheat - identidade deste servidor. NAO compartilhe o token!\r\n");
	format(line, sizeof line, "id=%s\r\n", gDCAC_ServerId);
	fwrite(f, line);
	format(line, sizeof line, "token=%s\r\n", gDCAC_Token);
	fwrite(f, line);
	fclose(f);
	return 1;
}

static stock DCAC_Register()
{
	if (gDCAC_RegisterPending) return;
	new host[64], ehost[192], url[512];
	GetConsoleVarAsString("hostname", host, sizeof host);
	DCAC_UrlEncode(host, ehost);
	format(url, sizeof url, "%s/ac/register?rk=%s&host=%s&port=%d", DCAC_API_HOST, DCAC_REGISTER_KEY, ehost, GetConsoleVarAsInt("port"));
	gDCAC_RegisterPending = true;
	HTTP(1, HTTP_GET, url, "", "DCAC_OnRegister");
	print("[DCAC] Registrando este servidor no bot do Discord...");
}

public DCAC_OnRegister(index, response_code, data[])
{
	gDCAC_RegisterPending = false;
	if (response_code != 200)
	{
		printf("[DCAC] Falha ao registrar no bot (%s) - codigo %d. Tentando novamente em 60s.", DCAC_API_HOST, response_code);
		if (response_code == 403) print("[DCAC] O bot exige uma chave de registro: defina DCAC_REGISTER_KEY igual ao AC_REGISTER_KEY do bot.");
		return 1;
	}
	// REG <id> <token> <chave de login>
	new idx = 0, tok[16];
	DCAC_Token(data, idx, tok);
	if (strcmp(tok, "REG") || tok[0] == EOS) return 1;
	DCAC_Token(data, idx, gDCAC_ServerId);
	DCAC_Token(data, idx, gDCAC_Token);
	DCAC_Token(data, idx, gDCAC_LoginKey);
	if (gDCAC_ServerId[0] == EOS || gDCAC_Token[0] == EOS)
	{
		gDCAC_ServerId[0] = EOS;
		gDCAC_Token[0] = EOS;
		return 1;
	}
	DCAC_SaveIdentity();
	print("[DCAC] Servidor registrado com sucesso!");
	DCAC_PrintLogin();
	gDCAC_Version = 0;
	DCAC_Poll();
	return 1;
}

/* ===========================================================================
 *  Núcleo: detecção / punição / log
 * ========================================================================= */
static stock DCAC_ReportRaw(playerid, const name[], const ip[], code, action, hits, const detail[])
{
	if (gDCAC_ServerId[0] == EOS) return;
	new ename[MAX_PLAYER_NAME * 3 + 1], edetail[200], body[400], url[256];
	DCAC_UrlEncode(name, ename);
	DCAC_UrlEncode(detail, edetail);
	format(body, sizeof body, "id=%d&nome=%s&ip=%s&cod=%d&acao=%d&hits=%d&tol=%d&det=%s",
		playerid, ename, ip, code, action, hits, gDCAC_Prot[code][dpTolerance], edetail);
	format(url, sizeof url, "%s/ac/report?id=%s&token=%s", DCAC_API_HOST, gDCAC_ServerId, gDCAC_Token);
	HTTP(2, HTTP_POST, url, body, "DCAC_OnReport");
}

static stock DCAC_Report(playerid, code, action, hits, const detail[])
{
	new name[MAX_PLAYER_NAME + 1];
	GetPlayerName(playerid, name, sizeof name);
	DCAC_ReportRaw(playerid, name, gDCAC_P[playerid][acIp], code, action, hits, detail);
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
		name, playerid, gDCAC_ActPast[(action == DCAC_ACTION_BAN) ? 1 : 0], gDCAC_Names[code]);
	DCAC_NotifyAdmins(msg);
	printf("[DCAC] %s (%d) punido (%s) - %s: %s", name, playerid,
		gDCAC_ActShort[(action == DCAC_ACTION_BAN) ? 1 : 0], gDCAC_Names[code], detail);

	// o gamemode pode tratar a punição (ex.: ban no próprio MySQL) retornando 1
	if (funcidx("OnAntiCheatPunish") != -1)
	{
		if (CallLocalFunction("OnAntiCheatPunish", "iiis", playerid, code, action, detail)) return 1;
	}

	format(msg, sizeof msg, "Voce foi %s pelo Anti-Cheat. Motivo: %s.",
		gDCAC_ActPast[(action == DCAC_ACTION_BAN) ? 1 : 0], gDCAC_Names[code]);
	SendClientMessage(playerid, DCAC_COLOR, msg);
	SetTimerEx("DCAC_DoPunish", 400, false, "iiii", playerid, gDCAC_P[playerid][acSerial], action, code);
	return 1;
}

public DCAC_DoPunish(playerid, serial, action, code)
{
	if (!IsPlayerConnected(playerid) || gDCAC_P[playerid][acSerial] != serial) return 0;
	// floods de conexão: bloqueia o IP por 2 minutos além do kick
	if ((code == DCAC_RECONNECT || code == DCAC_IPFLOOD) && action == DCAC_ACTION_KICK)
	{
		BlockIpAddress(gDCAC_P[playerid][acIp], 120000);
	}
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
	else DCAC_Copy(det, detail);

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
	if (gDCAC_ServerId[0] == EOS) return;
	new tick = GetTickCount();
	if (gDCAC_PollPending && tick - gDCAC_PollSentTick < 30000) return;

	new players = 0;
	for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
	{
		if (IsPlayerConnected(i) && !IsPlayerNPC(i)) players++;
	}
	new host[64], ehost[192], url[512];
	GetConsoleVarAsString("hostname", host, sizeof host);
	DCAC_UrlEncode(host, ehost);
	format(url, sizeof url, "%s/ac/config?id=%s&token=%s&v=%d&players=%d&ack=%d&max=%d&port=%d&host=%s",
		DCAC_API_HOST, gDCAC_ServerId, gDCAC_Token, gDCAC_Version, players, gDCAC_LastCmd, GetMaxPlayers(), GetConsoleVarAsInt("port"), ehost);
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
		UnBlockIpAddress(arg);
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
		DCAC_Copy(msg, arg);
		for (new i = 0; msg[i] != EOS; i++) if (msg[i] == '_') msg[i] = ' ';
		new out[160];
		format(out, sizeof out, "[Anti-Cheat] %s", msg);
		SendClientMessageToAll(DCAC_COLOR, out);
	}
}

public DCAC_OnConfig(index, response_code, data[])
{
	gDCAC_PollPending = false;
	if (response_code == 410)
	{
		// o bot não conhece mais este ID: registra de novo
		#if !defined DCAC_SERVER_ID
			print("[DCAC] O bot nao reconhece este ID de servidor. Registrando novamente...");
			gDCAC_ServerId[0] = EOS;
			gDCAC_Token[0] = EOS;
			DCAC_Register();
		#else
			print("[DCAC] O bot nao reconhece o DCAC_SERVER_ID definido no gamemode.");
		#endif
		return 1;
	}
	if (response_code == 401)
	{
		if (!gDCAC_Offline) printf("[DCAC] Token invalido para este ID! Confira scriptfiles/%s ou use /ac token no Discord.", DCAC_ID_FILE);
		gDCAC_Offline = true;
		return 1;
	}
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
		else if (!strcmp(tok, "K"))
		{
			// K <chave de login>
			DCAC_Token(line, idx, tok);
			if (tok[0] != EOS && strcmp(tok, gDCAC_LoginKey))
			{
				DCAC_Copy(gDCAC_LoginKey, tok);
				DCAC_PrintLogin();
			}
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
		printf("[DCAC] Configuracao v%d carregada do Discord (anti-cheat %s).", gDCAC_Version, gDCAC_OnOff[gDCAC_Global ? 1 : 0]);
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

	// godmode: levou tiros (OnPlayerGiveDamage do atirador) e a vida não caiu
	if (gDCAC_P[playerid][acGodTick] && tick - gDCAC_P[playerid][acGodTick] >= 2000)
	{
		if (gDCAC_P[playerid][acGodHits] >= gDCAC_Prot[DCAC_GODMODE][dpValue]
			&& h + a >= gDCAC_P[playerid][acGodHP] - 1.0
			&& gDCAC_P[playerid][acHealthTick] < gDCAC_P[playerid][acGodTick]
			&& gDCAC_P[playerid][acArmourTick] < gDCAC_P[playerid][acGodTick])
		{
			format(det, sizeof det, "%d tiros sem perder vida", gDCAC_P[playerid][acGodHits]);
			DCAC_Detect(playerid, DCAC_GODMODE, det);
		}
		gDCAC_P[playerid][acGodTick] = 0;
		gDCAC_P[playerid][acGodHits] = 0;
	}
}

static stock DCAC_CheckWeapons(playerid, tick)
{
	if (tick - gDCAC_P[playerid][acWeaponTick] < 2500) return;
	if (AC_IsPlayerImmune(playerid)) return;

	new w, ammo, bad = -1;
	new bool:checkWeapons = AC_IsEnabled(DCAC_WEAPON), bool:checkAmmo = AC_IsEnabled(DCAC_AMMO);

	for (new s = 0; s < 13; s++)
	{
		DCAC_RawWeaponData(playerid, s, w, ammo);
		if (w <= 0 || ammo <= 0 || w == 46) continue; // 46 = paraquedas
		if (w != gDCAC_P[playerid][acWeapons][s])
		{
			if (checkWeapons) { bad = w; break; }
			continue;
		}
		// munição criada no cliente (somente armas de fogo, slots 2..9)
		if (2 <= s <= 9)
		{
			if (ammo > gDCAC_P[playerid][acAmmo][s] + 10)
			{
				if (checkAmmo)
				{
					new det[64];
					format(det, sizeof det, "arma %d com %d balas (permitido %d)", w, ammo, gDCAC_P[playerid][acAmmo][s]);
					DCAC_RawSetAmmo(playerid, w, gDCAC_P[playerid][acAmmo][s]);
					gDCAC_P[playerid][acWeaponTick] = tick;
					DCAC_Detect(playerid, DCAC_AMMO, det);
				}
				else gDCAC_P[playerid][acAmmo][s] = ammo;
			}
			else if (ammo < gDCAC_P[playerid][acAmmo][s]) gDCAC_P[playerid][acAmmo][s] = ammo;
		}
	}
	if (bad == -1 && checkWeapons)
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

	// crasher: coordenadas impossíveis / NaN
	if (DCAC_BadFloat(x, 20000.0) || DCAC_BadFloat(y, 20000.0) || DCAC_BadFloat(z, 50000.0) || z < -1000.0)
	{
		format(det, sizeof det, "posicao invalida (%.0f, %.0f, %.0f)", x, y, z);
		DCAC_Detect(playerid, DCAC_CRASHER, det);
		gDCAC_P[playerid][acLastPosTick] = 0;
		return;
	}
	if (vehicleid && GetVehicleModel(vehicleid) == 0)
	{
		DCAC_Detect(playerid, DCAC_CRASHER, "veiculo inexistente");
		return;
	}

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
					format(det, sizeof det, "%.1f m/s com velocidade %.1f m/s (%s)", posSpeed, velSpeed, gDCAC_MoveMode[(pstate == 2) ? 1 : 0]);
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

	if (gDCAC_ServerId[0] == EOS)
	{
		// ainda não registrado: tenta a cada 60s
		if (++gDCAC_RegisterCounter >= 60000 / DCAC_TICK_MS)
		{
			gDCAC_RegisterCounter = 0;
			DCAC_Register();
		}
	}
	else if (++gDCAC_PollCounter >= gDCAC_PollSeconds * 1000 / DCAC_TICK_MS)
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
	for (new p = 0; p < MAX_PICKUPS; p++) gDCAC_Pickups[p][dpkValid] = false;
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
	gDCAC_RegisterCounter = 0;
	print("[DCAC] Drizzie City Anti-Cheat v2 carregado.");

	#if defined DCAC_OnGameModeInit
		new ret = DCAC_OnGameModeInit();
	#else
		new ret = 1;
	#endif
	if (DCAC_LoadIdentity())
	{
		printf("[DCAC] ID do servidor: %s (digite 'dcac' no console para ver a chave de login)", gDCAC_ServerId);
		DCAC_Poll();
	}
	else DCAC_Register();
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

public OnRconCommand(cmd[])
{
	if (!strcmp(cmd, "dcac", true) && cmd[0] != EOS)
	{
		if (gDCAC_ServerId[0] == EOS) print("[DCAC] Servidor ainda nao registrado no bot.");
		else DCAC_PrintLogin();
		printf("[DCAC] Anti-cheat %s | config v%d | bot %s", gDCAC_OnOff[gDCAC_Global ? 1 : 0], gDCAC_Version, gDCAC_BotState[gDCAC_Offline ? 1 : 0]);
		return 1;
	}
	#if defined DCAC_OnRconCommand
		return DCAC_OnRconCommand(cmd);
	#else
		return 0;
	#endif
}
#if defined _ALS_OnRconCommand
	#undef OnRconCommand
#else
	#define _ALS_OnRconCommand
#endif
#define OnRconCommand DCAC_OnRconCommand
#if defined DCAC_OnRconCommand
	forward DCAC_OnRconCommand(cmd[]);
#endif

public OnRconLoginAttempt(ip[], password[], success)
{
	if (gDCAC_Global && gDCAC_Prot[DCAC_RCON][dpEnabled])
	{
		new slot = -1, freeSlot = -1, tick = GetTickCount();
		for (new i = 0; i < sizeof gDCAC_RconIp; i++)
		{
			if (gDCAC_RconIp[i][0] != EOS && !strcmp(gDCAC_RconIp[i], ip)) { slot = i; break; }
			if (freeSlot == -1 && (gDCAC_RconIp[i][0] == EOS || tick - gDCAC_RconTick[i] > 600000)) freeSlot = i;
		}
		if (success)
		{
			if (slot != -1) gDCAC_RconIp[slot][0] = EOS;
		}
		else
		{
			if (slot == -1 && freeSlot != -1)
			{
				slot = freeSlot;
				DCAC_Copy(gDCAC_RconIp[slot], ip, 16);
				gDCAC_RconCount[slot] = 0;
			}
			if (slot != -1)
			{
				if (tick - gDCAC_RconTick[slot] > 600000) gDCAC_RconCount[slot] = 0;
				gDCAC_RconTick[slot] = tick;
				if (++gDCAC_RconCount[slot] >= gDCAC_Prot[DCAC_RCON][dpValue])
				{
					new det[64];
					format(det, sizeof det, "%d senhas RCON erradas do IP %s (IP bloqueado 1h)", gDCAC_RconCount[slot], ip);
					BlockIpAddress(ip, 3600000);
					printf("[DCAC] %s", det);
					new bool:found = false;
					for (new p = 0, j = GetPlayerPoolSize(); p <= j; p++)
					{
						if (DCAC_ValidPlayer(p) && !strcmp(gDCAC_P[p][acIp], ip))
						{
							DCAC_Detect(p, DCAC_RCON, det);
							found = true;
						}
					}
					if (!found) DCAC_ReportRaw(-1, "(console/RCON externo)", ip, DCAC_RCON, gDCAC_Prot[DCAC_RCON][dpAction], gDCAC_RconCount[slot], det);
					gDCAC_RconIp[slot][0] = EOS;
				}
			}
		}
	}
	#if defined DCAC_OnRconLoginAttempt
		return DCAC_OnRconLoginAttempt(ip, password, success);
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
#define OnRconLoginAttempt DCAC_OnRconLoginAttempt
#if defined DCAC_OnRconLoginAttempt
	forward DCAC_OnRconLoginAttempt(ip[], password[], success);
#endif

public OnPlayerConnect(playerid)
{
	DCAC_ResetPlayer(playerid);
	DCAC_RefreshWhitelist(playerid);
	new tick = GetTickCount();

	// NPC falso: NPCs só podem vir do próprio servidor
	if (gDCAC_P[playerid][acNPC] && AC_IsEnabled(DCAC_FAKENPC))
	{
		new bind[16];
		GetConsoleVarAsString("bind", bind, sizeof bind);
		if (strcmp(gDCAC_P[playerid][acIp], "127.0.0.1") && (bind[0] == EOS || strcmp(gDCAC_P[playerid][acIp], bind)))
		{
			gDCAC_P[playerid][acNPC] = false; // trata como jogador para poder punir
			new det[48];
			format(det, sizeof det, "NPC conectando do IP %s", gDCAC_P[playerid][acIp]);
			DCAC_Detect(playerid, DCAC_FAKENPC, det);
		}
	}

	if (!gDCAC_P[playerid][acNPC])
	{
		// conexões simultâneas do mesmo IP
		if (AC_IsEnabled(DCAC_IPFLOOD))
		{
			new count = 0;
			for (new i = 0, j = GetPlayerPoolSize(); i <= j; i++)
			{
				if (i == playerid || !IsPlayerConnected(i) || IsPlayerNPC(i)) continue;
				if (!strcmp(gDCAC_P[playerid][acIp], gDCAC_P[i][acIp])) count++;
			}
			if (count >= gDCAC_Prot[DCAC_IPFLOOD][dpValue])
			{
				new det[48];
				format(det, sizeof det, "%d conexoes do IP %s", count + 1, gDCAC_P[playerid][acIp]);
				DCAC_Detect(playerid, DCAC_IPFLOOD, det);
			}
		}

		// flood de reconexão (bots que entram e saem)
		new recent = 0;
		for (new i = 0; i < sizeof gDCAC_ConnIp; i++)
		{
			if (gDCAC_ConnIp[i][0] != EOS && tick - gDCAC_ConnTick[i] < 30000 && !strcmp(gDCAC_ConnIp[i], gDCAC_P[playerid][acIp])) recent++;
		}
		DCAC_Copy(gDCAC_ConnIp[gDCAC_ConnIdx], gDCAC_P[playerid][acIp], 16);
		gDCAC_ConnTick[gDCAC_ConnIdx] = tick;
		gDCAC_ConnIdx = (gDCAC_ConnIdx + 1) % sizeof gDCAC_ConnIp;
		if (recent + 1 > gDCAC_Prot[DCAC_RECONNECT][dpValue] && AC_IsEnabled(DCAC_RECONNECT))
		{
			new det[48];
			format(det, sizeof det, "%d conexoes em 30s do IP %s", recent + 1, gDCAC_P[playerid][acIp]);
			DCAC_Detect(playerid, DCAC_RECONNECT, det);
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

public OnPlayerUpdate(playerid)
{
	gDCAC_P[playerid][acLastUpdate] = GetTickCount();
	#if defined DCAC_OnPlayerUpdate
		return DCAC_OnPlayerUpdate(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerUpdate
	#undef OnPlayerUpdate
#else
	#define _ALS_OnPlayerUpdate
#endif
#define OnPlayerUpdate DCAC_OnPlayerUpdate
#if defined DCAC_OnPlayerUpdate
	forward DCAC_OnPlayerUpdate(playerid);
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

public OnPlayerRequestSpawn(playerid)
{
	#if defined DCAC_OnPlayerRequestSpawn
		new ret = DCAC_OnPlayerRequestSpawn(playerid);
	#else
		new ret = 1;
	#endif
	if (ret) gDCAC_P[playerid][acSpawnAllowed] = true;
	return ret;
}
#if defined _ALS_OnPlayerRequestSpawn
	#undef OnPlayerRequestSpawn
#else
	#define _ALS_OnPlayerRequestSpawn
#endif
#define OnPlayerRequestSpawn DCAC_OnPlayerRequestSpawn
#if defined DCAC_OnPlayerRequestSpawn
	forward DCAC_OnPlayerRequestSpawn(playerid);
#endif

public OnPlayerSpawn(playerid)
{
	new tick = GetTickCount();

	// spawn falso: o servidor não autorizou (ex.: spawnar durante o login)
	if (!gDCAC_P[playerid][acSpawnAllowed] && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_FAKESPAWN))
	{
		if (DCAC_Detect(playerid, DCAC_FAKESPAWN, "spawn sem permissao do servidor") && gDCAC_P[playerid][acPunished])
		{
			return 1; // não deixa o gamemode processar o spawn do cheater
		}
	}
	gDCAC_P[playerid][acSpawnAllowed] = false;

	gDCAC_P[playerid][acSpawnTick] = tick;
	gDCAC_P[playerid][acHealth] = 100.0;
	gDCAC_P[playerid][acArmour] = 0.0;
	gDCAC_P[playerid][acHealthTick] = tick;
	gDCAC_P[playerid][acArmourTick] = tick;
	gDCAC_P[playerid][acJetpack] = false;
	gDCAC_P[playerid][acGodTick] = 0;
	gDCAC_P[playerid][acGodHits] = 0;
	gDCAC_P[playerid][acLastPosTick] = 0;
	gDCAC_P[playerid][acPosImmuneUntil] = tick + 4000;
	gDCAC_P[playerid][acSpeedImmuneUntil] = tick + 4000;
	gDCAC_P[playerid][acWeaponTick] = tick;
	for (new s = 0; s < 13; s++)
	{
		gDCAC_P[playerid][acWeapons][s] = 0;
		gDCAC_P[playerid][acAmmo][s] = 0;
	}
	for (new k = 0; k < 3; k++)
	{
		new w = gDCAC_P[playerid][acSpawnWeapons][k], slot = DCAC_WeaponSlot(w);
		if (w > 0 && slot != -1 && gDCAC_P[playerid][acSpawnAmmo][k] > 0)
		{
			gDCAC_P[playerid][acWeapons][slot] = w;
			gDCAC_P[playerid][acAmmo][slot] = gDCAC_P[playerid][acSpawnAmmo][k];
		}
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
	gDCAC_P[playerid][acSpawnAllowed] = true; // respawn após a morte é legítimo
	gDCAC_P[playerid][acGodTick] = 0;
	gDCAC_P[playerid][acGodHits] = 0;

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

static stock DCAC_VehicleSpamCheck(playerid)
{
	if (!DCAC_ValidPlayer(playerid) || !AC_IsEnabled(DCAC_VEH_SPAM)) return;
	new tick = GetTickCount();
	if (tick - gDCAC_P[playerid][acVehSpamTick] > 5000)
	{
		gDCAC_P[playerid][acVehSpamTick] = tick;
		gDCAC_P[playerid][acVehSpamCount] = 0;
	}
	if (++gDCAC_P[playerid][acVehSpamCount] > gDCAC_Prot[DCAC_VEH_SPAM][dpValue])
	{
		gDCAC_P[playerid][acVehSpamCount] = 0;
		DCAC_Detect(playerid, DCAC_VEH_SPAM, "entrou/saiu de veiculos em excesso");
	}
}

public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
	DCAC_VehicleSpamCheck(playerid);
	#if defined DCAC_OnPlayerEnterVehicle
		return DCAC_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterVehicle
	#undef OnPlayerEnterVehicle
#else
	#define _ALS_OnPlayerEnterVehicle
#endif
#define OnPlayerEnterVehicle DCAC_OnPlayerEnterVehicle
#if defined DCAC_OnPlayerEnterVehicle
	forward DCAC_OnPlayerEnterVehicle(playerid, vehicleid, ispassenger);
#endif

public OnPlayerExitVehicle(playerid, vehicleid)
{
	DCAC_VehicleSpamCheck(playerid);
	#if defined DCAC_OnPlayerExitVehicle
		return DCAC_OnPlayerExitVehicle(playerid, vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerExitVehicle
	#undef OnPlayerExitVehicle
#else
	#define _ALS_OnPlayerExitVehicle
#endif
#define OnPlayerExitVehicle DCAC_OnPlayerExitVehicle
#if defined DCAC_OnPlayerExitVehicle
	forward DCAC_OnPlayerExitVehicle(playerid, vehicleid);
#endif

public OnPlayerStateChange(playerid, DCAC_T_PSTATE:newstate, DCAC_T_PSTATE:oldstate)
{
	new ns = _:newstate, tick = GetTickCount();
	if (ns == 2 || ns == 3)
	{
		new vehicleid = GetPlayerVehicleID(playerid);
		DCAC_VehicleSpamCheck(playerid);

		// crasher: assento inválido / veículo inexistente
		if (DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_CRASHER))
		{
			new seat = GetPlayerVehicleSeat(playerid);
			if ((seat > 10 && seat != 128) || (vehicleid && GetVehicleModel(vehicleid) == 0))
			{
				new det[48];
				format(det, sizeof det, "assento %d no veiculo %d", seat, vehicleid);
				if (DCAC_Detect(playerid, DCAC_CRASHER, det)) DCAC_RawRemoveFromVehicle(playerid);
			}
		}

		// car warp
		if (_:oldstate == 1 && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_CARWARP)
			&& tick >= gDCAC_P[playerid][acPosImmuneUntil] && gDCAC_P[playerid][acLastPosTick] && tick - gDCAC_P[playerid][acLastPosTick] < 2000
			&& vehicleid)
		{
			new Float:vx, Float:vy, Float:vz;
			GetVehiclePos(vehicleid, vx, vy, vz);
			new Float:dist = VectorSize(vx - gDCAC_P[playerid][acLastX], vy - gDCAC_P[playerid][acLastY], vz - gDCAC_P[playerid][acLastZ]);
			if (dist > float(gDCAC_Prot[DCAC_CARWARP][dpValue]))
			{
				new det[64];
				format(det, sizeof det, "entrou no veiculo %d a %.0f m", vehicleid, dist);
				if (DCAC_Detect(playerid, DCAC_CARWARP, det))
				{
					DCAC_RawRemoveFromVehicle(playerid);
					DCAC_RawSetPos(playerid, gDCAC_P[playerid][acLastX], gDCAC_P[playerid][acLastY], gDCAC_P[playerid][acLastZ]);
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

static stock bool:DCAC_AdvertCheck(playerid, const text[])
{
	if (!DCAC_ValidPlayer(playerid) || !AC_IsEnabled(DCAC_ADVERT) || AC_IsPlayerImmune(playerid)) return false;
	if (!DCAC_HasAdvert(text)) return false;
	new det[100];
	format(det, sizeof det, "%.80s", text);
	if (DCAC_Detect(playerid, DCAC_ADVERT, det))
	{
		SendClientMessage(playerid, DCAC_COLOR, "[Anti-Cheat] Divulgacao nao e permitida.");
		return true;
	}
	return false;
}

public OnPlayerText(playerid, text[])
{
	if (DCAC_FloodCheck(playerid)) return 0;
	if (DCAC_AdvertCheck(playerid, text)) return 0;
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
	if (DCAC_AdvertCheck(playerid, cmdtext)) return 1;
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

// Para Pawn.CMD: chame no OnPlayerCommandReceived. Retorna true = bloquear o comando.
stock bool:AC_CommandFloodCheck(playerid, const cmdtext[] = "")
{
	if (DCAC_FloodCheck(playerid)) return true;
	if (cmdtext[0] != EOS && DCAC_AdvertCheck(playerid, cmdtext)) return true;
	return false;
}

public OnPlayerWeaponShot(playerid, DCAC_T_WEAPON:weaponid, DCAC_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ)
{
	new w = _:weaponid, ht = _:hittype;
	if (DCAC_ValidPlayer(playerid) && !AC_IsPlayerImmune(playerid))
	{
		new tick = GetTickCount(), det[64];

		// crasher: dados de bala inválidos
		if (AC_IsEnabled(DCAC_CRASHER))
		{
			new bool:bad = false;
			if (!DCAC_IsBulletWeapon(w) || ht < 0 || ht > 4) bad = true;
			else if (DCAC_BadFloat(fX, 20000.0) || DCAC_BadFloat(fY, 20000.0) || DCAC_BadFloat(fZ, 20000.0)) bad = true;
			else if (ht == 1 && !(0 <= hitid < MAX_PLAYERS)) bad = true;
			else if (ht == 2 && !(0 < hitid < MAX_VEHICLES)) bad = true;
			if (bad)
			{
				format(det, sizeof det, "bala invalida (arma %d tipo %d alvo %d)", w, ht, hitid);
				DCAC_Detect(playerid, DCAC_CRASHER, det);
				return 0;
			}
		}

		// atirou com arma que não possui
		if (AC_IsEnabled(DCAC_WEAPON))
		{
			new slot = DCAC_WeaponSlot(w);
			if (slot == -1 || gDCAC_P[playerid][acWeapons][slot] != w)
			{
				format(det, sizeof det, "atirou com arma id %d", w);
				DCAC_Detect(playerid, DCAC_WEAPON, det);
				return 0;
			}
		}

		// rapid fire
		if (AC_IsEnabled(DCAC_RAPIDFIRE) && w != 38)
		{
			if (tick - gDCAC_P[playerid][acShotTick] >= 1000)
			{
				gDCAC_P[playerid][acShotTick] = tick;
				gDCAC_P[playerid][acShotCount] = 0;
			}
			if (++gDCAC_P[playerid][acShotCount] > gDCAC_Prot[DCAC_RAPIDFIRE][dpValue])
			{
				format(det, sizeof det, "%d tiros/s com arma %d", gDCAC_P[playerid][acShotCount], w);
				gDCAC_P[playerid][acShotCount] = 0;
				DCAC_Detect(playerid, DCAC_RAPIDFIRE, det);
				return 0;
			}
		}

		// munição infinita: atira e a munição não diminui
		if (AC_IsEnabled(DCAC_AMMO))
		{
			new ammo = GetPlayerAmmo(playerid);
			if (w == gDCAC_P[playerid][acLastShotWeapon] && ammo >= gDCAC_P[playerid][acLastShotAmmo] && ammo > 0)
			{
				if (++gDCAC_P[playerid][acAmmoStrikes] >= gDCAC_Prot[DCAC_AMMO][dpValue])
				{
					format(det, sizeof det, "%d tiros sem gastar municao (arma %d)", gDCAC_P[playerid][acAmmoStrikes], w);
					gDCAC_P[playerid][acAmmoStrikes] = 0;
					DCAC_Detect(playerid, DCAC_AMMO, det);
				}
			}
			else gDCAC_P[playerid][acAmmoStrikes] = 0;
			gDCAC_P[playerid][acLastShotWeapon] = w;
			gDCAC_P[playerid][acLastShotAmmo] = ammo;
		}

		// alcance impossível (silent aim / range hack)
		if ((ht == 1 || ht == 2) && AC_IsEnabled(DCAC_RANGE))
		{
			new Float:tx, Float:ty, Float:tz, bool:ok = false;
			if (ht == 1 && IsPlayerConnected(hitid)) { GetPlayerPos(hitid, tx, ty, tz); ok = true; }
			else if (ht == 2 && GetVehicleModel(hitid)) { GetVehiclePos(hitid, tx, ty, tz); ok = true; }
			if (ok)
			{
				new Float:range = DCAC_WeaponRange(w);
				new Float:dist = GetPlayerDistanceFromPoint(playerid, tx, ty, tz);
				if (range > 0.0 && dist > range * (1.0 + float(gDCAC_Prot[DCAC_RANGE][dpValue]) / 100.0) + 5.0)
				{
					format(det, sizeof det, "acertou a %.0f m com arma %d (alcance %.0f m)", dist, w, range);
					DCAC_Detect(playerid, DCAC_RANGE, det);
					return 0;
				}
			}
		}

		// aimbot: taxa de acerto em jogadores muito alta (janela de 40 tiros)
		if (AC_IsEnabled(DCAC_AIMBOT) && w != 38 && w != 25 && w != 26 && w != 27)
		{
			gDCAC_P[playerid][acAimShots]++;
			if (ht == 1) gDCAC_P[playerid][acAimHits]++;
			if (gDCAC_P[playerid][acAimShots] >= 40)
			{
				new pct = gDCAC_P[playerid][acAimHits] * 100 / gDCAC_P[playerid][acAimShots];
				if (pct >= gDCAC_Prot[DCAC_AIMBOT][dpValue])
				{
					format(det, sizeof det, "%d%% de acerto em %d tiros", pct, gDCAC_P[playerid][acAimShots]);
					DCAC_Detect(playerid, DCAC_AIMBOT, det);
				}
				gDCAC_P[playerid][acAimShots] = 0;
				gDCAC_P[playerid][acAimHits] = 0;
			}
		}

		// c-bug: registra o tiro para comparar com o agachar
		if (w == 24 || w == 25 || w == 27 || w == 33 || w == 34) gDCAC_P[playerid][acCbugTick] = tick;
	}
	#if defined DCAC_OnPlayerWeaponShot
		return DCAC_OnPlayerWeaponShot(playerid, weaponid, hittype, hitid, fX, fY, fZ);
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
#define OnPlayerWeaponShot DCAC_OnPlayerWeaponShot
#if defined DCAC_OnPlayerWeaponShot
	forward DCAC_OnPlayerWeaponShot(playerid, DCAC_T_WEAPON:weaponid, DCAC_T_BULLET:hittype, hitid, Float:fX, Float:fY, Float:fZ);
#endif

public OnPlayerGiveDamage(playerid, damagedid, Float:amount, DCAC_T_WEAPON:weaponid, bodypart)
{
	new w = _:weaponid;
	if (DCAC_ValidPlayer(playerid) && !AC_IsPlayerImmune(playerid) && DCAC_IsBulletWeapon(w))
	{
		// dano maior que o máximo da arma
		if (AC_IsEnabled(DCAC_DAMAGE))
		{
			new Float:maxd = DCAC_WeaponDamage(w);
			if (maxd > 0.0 && (amount > maxd * 1.05 + 0.5 || amount != amount))
			{
				new det[64];
				format(det, sizeof det, "%.1f de dano com arma %d (max %.1f)", amount, w, maxd);
				DCAC_Detect(playerid, DCAC_DAMAGE, det);
			}
		}

		// godmode: registra o dano na vítima para conferir no próximo tick
		if (AC_IsEnabled(DCAC_GODMODE) && DCAC_ValidPlayer(damagedid) && amount > 0.0
			&& DCAC_RawState(damagedid) == 1 && !DCAC_IsPaused(damagedid)
			&& !(GetPlayerTeam(playerid) != NO_TEAM && GetPlayerTeam(playerid) == GetPlayerTeam(damagedid))
			&& GetTickCount() - gDCAC_P[damagedid][acSpawnTick] > 5000)
		{
			if (!gDCAC_P[damagedid][acGodTick])
			{
				new Float:h, Float:a;
				GetPlayerHealth(damagedid, h);
				GetPlayerArmour(damagedid, a);
				gDCAC_P[damagedid][acGodTick] = GetTickCount();
				gDCAC_P[damagedid][acGodHP] = h + a;
				gDCAC_P[damagedid][acGodHits] = 0;
			}
			gDCAC_P[damagedid][acGodHits]++;
		}
	}
	#if defined DCAC_OnPlayerGiveDamage
		return DCAC_OnPlayerGiveDamage(playerid, damagedid, amount, weaponid, bodypart);
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
#define OnPlayerGiveDamage DCAC_OnPlayerGiveDamage
#if defined DCAC_OnPlayerGiveDamage
	forward DCAC_OnPlayerGiveDamage(playerid, damagedid, Float:amount, DCAC_T_WEAPON:weaponid, bodypart);
#endif

public OnPlayerKeyStateChange(playerid, DCAC_T_KEY:newkeys, DCAC_T_KEY:oldkeys)
{
	// c-bug: agachou logo depois de atirar com deagle/shotgun/rifles
	if ((_:newkeys & 2) && !(_:oldkeys & 2) && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_CBUG)
		&& DCAC_RawState(playerid) == 1 && gDCAC_P[playerid][acCbugTick]
		&& GetTickCount() - gDCAC_P[playerid][acCbugTick] < gDCAC_Prot[DCAC_CBUG][dpValue])
	{
		new det[48];
		format(det, sizeof det, "agachou %d ms apos atirar", GetTickCount() - gDCAC_P[playerid][acCbugTick]);
		gDCAC_P[playerid][acCbugTick] = 0;
		DCAC_Detect(playerid, DCAC_CBUG, det);
	}
	#if defined DCAC_OnPlayerKeyStateChange
		return DCAC_OnPlayerKeyStateChange(playerid, newkeys, oldkeys);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerKeyStateChange
	#undef OnPlayerKeyStateChange
#else
	#define _ALS_OnPlayerKeyStateChange
#endif
#define OnPlayerKeyStateChange DCAC_OnPlayerKeyStateChange
#if defined DCAC_OnPlayerKeyStateChange
	forward DCAC_OnPlayerKeyStateChange(playerid, DCAC_T_KEY:newkeys, DCAC_T_KEY:oldkeys);
#endif

public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
	if (DCAC_ValidVehicle(vehicleid) && DCAC_ValidPlayer(playerid) && !AC_IsPlayerImmune(playerid))
	{
		if (AC_IsEnabled(DCAC_CRASHER) && (DCAC_BadFloat(new_x, 20000.0) || DCAC_BadFloat(new_y, 20000.0) || DCAC_BadFloat(new_z, 50000.0)
			|| DCAC_BadFloat(vel_x, 100.0) || DCAC_BadFloat(vel_y, 100.0) || DCAC_BadFloat(vel_z, 100.0)))
		{
			DCAC_Detect(playerid, DCAC_CRASHER, "sync de veiculo invalido");
			return 0;
		}
		if (AC_IsEnabled(DCAC_VEH_TROLL) && GetTickCount() >= gDCAC_VehImmuneUntil[vehicleid])
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

public OnTrailerUpdate(playerid, vehicleid)
{
	// puxar trailers/veículos distantes com o próprio veículo
	if (DCAC_ValidPlayer(playerid) && DCAC_ValidVehicle(vehicleid) && AC_IsEnabled(DCAC_VEH_TROLL) && !AC_IsPlayerImmune(playerid))
	{
		new Float:x, Float:y, Float:z;
		GetVehiclePos(vehicleid, x, y, z);
		new Float:dist = GetPlayerDistanceFromPoint(playerid, x, y, z);
		if (dist > 30.0 + float(gDCAC_Prot[DCAC_VEH_TROLL][dpValue]))
		{
			new det[64];
			format(det, sizeof det, "puxou trailer %d a %.0f m", vehicleid, dist);
			DCAC_Detect(playerid, DCAC_VEH_TROLL, det);
			return 0;
		}
	}
	#if defined DCAC_OnTrailerUpdate
		return DCAC_OnTrailerUpdate(playerid, vehicleid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnTrailerUpdate
	#undef OnTrailerUpdate
#else
	#define _ALS_OnTrailerUpdate
#endif
#define OnTrailerUpdate DCAC_OnTrailerUpdate
#if defined DCAC_OnTrailerUpdate
	forward DCAC_OnTrailerUpdate(playerid, vehicleid);
#endif

public OnPlayerPickUpPickup(playerid, pickupid)
{
	if (0 <= pickupid < MAX_PICKUPS && gDCAC_Pickups[pickupid][dpkValid] && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_FAKEPICKUP) && !AC_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gDCAC_Pickups[pickupid][dpkX], gDCAC_Pickups[pickupid][dpkY], gDCAC_Pickups[pickupid][dpkZ]);
		if (dist > float(gDCAC_Prot[DCAC_FAKEPICKUP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "pickup %d a %.0f m", pickupid, dist);
			if (DCAC_Detect(playerid, DCAC_FAKEPICKUP, det)) return 1; // não repassa ao gamemode
		}
	}
	#if defined DCAC_OnPlayerPickUpPickup
		return DCAC_OnPlayerPickUpPickup(playerid, pickupid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerPickUpPickup
	#undef OnPlayerPickUpPickup
#else
	#define _ALS_OnPlayerPickUpPickup
#endif
#define OnPlayerPickUpPickup DCAC_OnPlayerPickUpPickup
#if defined DCAC_OnPlayerPickUpPickup
	forward DCAC_OnPlayerPickUpPickup(playerid, pickupid);
#endif

public OnPlayerEnterCheckpoint(playerid)
{
	if (gDCAC_P[playerid][acCP] && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_FAKECP) && !AC_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gDCAC_P[playerid][acCPX], gDCAC_P[playerid][acCPY], gDCAC_P[playerid][acCPZ]);
		if (dist > gDCAC_P[playerid][acCPSize] + float(gDCAC_Prot[DCAC_FAKECP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "checkpoint a %.0f m", dist);
			if (DCAC_Detect(playerid, DCAC_FAKECP, det)) return 1;
		}
	}
	#if defined DCAC_OnPlayerEnterCheckpoint
		return DCAC_OnPlayerEnterCheckpoint(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterCheckpoint
	#undef OnPlayerEnterCheckpoint
#else
	#define _ALS_OnPlayerEnterCheckpoint
#endif
#define OnPlayerEnterCheckpoint DCAC_OnPlayerEnterCheckpoint
#if defined DCAC_OnPlayerEnterCheckpoint
	forward DCAC_OnPlayerEnterCheckpoint(playerid);
#endif

public OnPlayerEnterRaceCheckpoint(playerid)
{
	if (gDCAC_P[playerid][acRCP] && DCAC_ValidPlayer(playerid) && AC_IsEnabled(DCAC_FAKECP) && !AC_IsPlayerImmune(playerid))
	{
		new Float:dist = GetPlayerDistanceFromPoint(playerid, gDCAC_P[playerid][acRCPX], gDCAC_P[playerid][acRCPY], gDCAC_P[playerid][acRCPZ]);
		if (dist > gDCAC_P[playerid][acRCPSize] + float(gDCAC_Prot[DCAC_FAKECP][dpValue]))
		{
			new det[48];
			format(det, sizeof det, "race checkpoint a %.0f m", dist);
			if (DCAC_Detect(playerid, DCAC_FAKECP, det)) return 1;
		}
	}
	#if defined DCAC_OnPlayerEnterRaceCP
		return DCAC_OnPlayerEnterRaceCP(playerid);
	#else
		return 1;
	#endif
}
#if defined _ALS_OnPlayerEnterRaceCP
	#undef OnPlayerEnterRaceCheckpoint
#else
	#define _ALS_OnPlayerEnterRaceCP
#endif
#define OnPlayerEnterRaceCheckpoint DCAC_OnPlayerEnterRaceCP
#if defined DCAC_OnPlayerEnterRaceCP
	forward DCAC_OnPlayerEnterRaceCP(playerid);
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
forward DCAC_R_SetAmmo(playerid, weaponid, ammo);
forward DCAC_R_PosImmunity(playerid, ms);
forward DCAC_R_VehImmunity(vehicleid, Float:health);
forward DCAC_R_Jetpack(playerid);
forward DCAC_R_Dialog(playerid, dialogid);
forward DCAC_R_Spawn(playerid);
forward DCAC_R_Checkpoint(playerid, race, Float:x, Float:y, Float:z, Float:size);
forward DCAC_R_Pickup(pickupid, Float:x, Float:y, Float:z);

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
static stock DCAC_TrackGiveWeapon(playerid, weaponid, ammo)
{
	new slot = DCAC_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		if (gDCAC_P[playerid][acWeapons][slot] == weaponid) gDCAC_P[playerid][acAmmo][slot] += ammo;
		else gDCAC_P[playerid][acAmmo][slot] = ammo;
		gDCAC_P[playerid][acWeapons][slot] = weaponid;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
}

stock DCAC_T_BOOL:DCAC_GivePlayerWeapon(playerid, DCAC_T_WEAPON:weaponid, ammo)
{
	DCAC_TrackGiveWeapon(playerid, _:weaponid, ammo);
	return GivePlayerWeapon(playerid, weaponid, ammo);
}
#if defined _ALS_GivePlayerWeapon
	#undef GivePlayerWeapon
#else
	#define _ALS_GivePlayerWeapon
#endif
#define GivePlayerWeapon DCAC_GivePlayerWeapon

stock DCAC_T_BOOL:DCAC_SetPlayerAmmo(playerid, DCAC_T_WEAPON:weaponid, ammo)
{
	new slot = DCAC_WeaponSlot(_:weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acAmmo][slot] = ammo;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
	return SetPlayerAmmo(playerid, weaponid, ammo);
}
#if defined _ALS_SetPlayerAmmo
	#undef SetPlayerAmmo
#else
	#define _ALS_SetPlayerAmmo
#endif
#define SetPlayerAmmo DCAC_SetPlayerAmmo

stock DCAC_T_BOOL:DCAC_ResetPlayerWeapons(playerid)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		for (new s = 0; s < 13; s++)
		{
			gDCAC_P[playerid][acWeapons][s] = 0;
			gDCAC_P[playerid][acAmmo][s] = 0;
		}
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

// ---------- spawn
stock DCAC_T_BOOL:DCAC_SpawnPlayer(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acSpawnAllowed] = true;
	return SpawnPlayer(playerid);
}
#if defined _ALS_SpawnPlayer
	#undef SpawnPlayer
#else
	#define _ALS_SpawnPlayer
#endif
#define SpawnPlayer DCAC_SpawnPlayer

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
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acSpawnTick] = GetTickCount();
		if (!toggle) gDCAC_P[playerid][acSpawnAllowed] = true; // sair do spectate gera spawn
	}
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

// ---------- checkpoints
stock DCAC_T_BOOL:DCAC_SetPlayerCheckpoint(playerid, Float:x, Float:y, Float:z, Float:size)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acCP] = true;
		gDCAC_P[playerid][acCPX] = x; gDCAC_P[playerid][acCPY] = y; gDCAC_P[playerid][acCPZ] = z;
		gDCAC_P[playerid][acCPSize] = size;
	}
	return SetPlayerCheckpoint(playerid, x, y, z, size);
}
#if defined _ALS_SetPlayerCheckpoint
	#undef SetPlayerCheckpoint
#else
	#define _ALS_SetPlayerCheckpoint
#endif
#define SetPlayerCheckpoint DCAC_SetPlayerCheckpoint

stock DCAC_T_BOOL:DCAC_DisablePlayerCheckpoint(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acCP] = false;
	return DisablePlayerCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerCheckpoint
	#undef DisablePlayerCheckpoint
#else
	#define _ALS_DisablePlayerCheckpoint
#endif
#define DisablePlayerCheckpoint DCAC_DisablePlayerCheckpoint

stock DCAC_T_BOOL:DCAC_SetPlayerRaceCheckpoint(playerid, DCAC_T_CPTYPE:type, Float:x, Float:y, Float:z, Float:nextx, Float:nexty, Float:nextz, Float:size)
{
	if (0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acRCP] = true;
		gDCAC_P[playerid][acRCPX] = x; gDCAC_P[playerid][acRCPY] = y; gDCAC_P[playerid][acRCPZ] = z;
		gDCAC_P[playerid][acRCPSize] = size;
	}
	return SetPlayerRaceCheckpoint(playerid, type, x, y, z, nextx, nexty, nextz, size);
}
#if defined _ALS_SetPlayerRaceCheckpoint
	#undef SetPlayerRaceCheckpoint
#else
	#define _ALS_SetPlayerRaceCheckpoint
#endif
#define SetPlayerRaceCheckpoint DCAC_SetPlayerRaceCheckpoint

stock DCAC_T_BOOL:DCAC_DisablePlayerRaceCP(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acRCP] = false;
	return DisablePlayerRaceCheckpoint(playerid);
}
#if defined _ALS_DisablePlayerRaceCP
	#undef DisablePlayerRaceCheckpoint
#else
	#define _ALS_DisablePlayerRaceCP
#endif
#define DisablePlayerRaceCheckpoint DCAC_DisablePlayerRaceCP

// ---------- pickups
static stock DCAC_TrackPickup(pickupid, Float:x, Float:y, Float:z)
{
	if (0 <= pickupid < MAX_PICKUPS)
	{
		gDCAC_Pickups[pickupid][dpkValid] = true;
		gDCAC_Pickups[pickupid][dpkX] = x;
		gDCAC_Pickups[pickupid][dpkY] = y;
		gDCAC_Pickups[pickupid][dpkZ] = z;
	}
	return pickupid;
}

stock DCAC_CreatePickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{
	return DCAC_TrackPickup(CreatePickup(model, type, x, y, z, virtualworld), x, y, z);
}
#if defined _ALS_CreatePickup
	#undef CreatePickup
#else
	#define _ALS_CreatePickup
#endif
#define CreatePickup DCAC_CreatePickup

stock DCAC_AddStaticPickup(model, type, Float:x, Float:y, Float:z, virtualworld = 0)
{
	// AddStaticPickup não retorna o ID: usa CreatePickup para poder validar
	return (DCAC_TrackPickup(CreatePickup(model, type, x, y, z, virtualworld), x, y, z) != -1) ? 1 : 0;
}
#if defined _ALS_AddStaticPickup
	#undef AddStaticPickup
#else
	#define _ALS_AddStaticPickup
#endif
#define AddStaticPickup DCAC_AddStaticPickup

stock DCAC_T_BOOL:DCAC_DestroyPickup(pickupid)
{
	if (0 <= pickupid < MAX_PICKUPS) gDCAC_Pickups[pickupid][dpkValid] = false;
	return DestroyPickup(pickupid);
}
#if defined _ALS_DestroyPickup
	#undef DestroyPickup
#else
	#define _ALS_DestroyPickup
#endif
#define DestroyPickup DCAC_DestroyPickup

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
	DCAC_TrackGiveWeapon(playerid, weaponid, ammo);
	DCAC_RawGiveWeapon(playerid, weaponid, ammo);
	return 1;
}
public DCAC_R_SetAmmo(playerid, weaponid, ammo)
{
	new slot = DCAC_WeaponSlot(weaponid);
	if (slot != -1 && 0 <= playerid < MAX_PLAYERS)
	{
		gDCAC_P[playerid][acAmmo][slot] = ammo;
		gDCAC_P[playerid][acWeaponTick] = GetTickCount();
	}
	DCAC_RawSetAmmo(playerid, weaponid, ammo);
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
public DCAC_R_Spawn(playerid)
{
	if (0 <= playerid < MAX_PLAYERS) gDCAC_P[playerid][acSpawnAllowed] = true;
	return 1;
}
public DCAC_R_Checkpoint(playerid, race, Float:x, Float:y, Float:z, Float:size)
{
	if (!(0 <= playerid < MAX_PLAYERS)) return 1;
	// size < 0.0 => checkpoint desativado
	if (race)
	{
		gDCAC_P[playerid][acRCP] = size >= 0.0;
		gDCAC_P[playerid][acRCPX] = x; gDCAC_P[playerid][acRCPY] = y; gDCAC_P[playerid][acRCPZ] = z;
		gDCAC_P[playerid][acRCPSize] = size;
	}
	else
	{
		gDCAC_P[playerid][acCP] = size >= 0.0;
		gDCAC_P[playerid][acCPX] = x; gDCAC_P[playerid][acCPY] = y; gDCAC_P[playerid][acCPZ] = z;
		gDCAC_P[playerid][acCPSize] = size;
	}
	return 1;
}
public DCAC_R_Pickup(pickupid, Float:x, Float:y, Float:z)
{
	// pickups criados por filterscripts: o ID pode coincidir com os do gamemode,
	// então apenas registramos a posição (x = -99999 => destruído)
	if (0 <= pickupid < MAX_PICKUPS)
	{
		if (x < -90000.0) gDCAC_Pickups[pickupid][dpkValid] = false;
		else DCAC_TrackPickup(pickupid, x, y, z);
	}
	return 1;
}
