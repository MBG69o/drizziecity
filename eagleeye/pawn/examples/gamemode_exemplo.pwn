/*
 *  Exemplo mínimo de gamemode usando o EagleEYE Anti-Cheat.
 */
#include <a_samp>   // ou <open.mp>

// IP:porta do bot (sem http://). Na primeira inicialização o servidor se
// registra sozinho e mostra no console o ID fixo e a chave de login.
#define EE_API_HOST "127.0.0.1:8090"
#include <eagleeye>

main() {}

public OnGameModeInit()
{
	SetGameModeText("Drizzie City RP");
	AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 24, 50, 0, 0, 0, 0);
	AddStaticVehicle(411, 1960.0, 1340.0, 15.0, 0.0, 1, 1);
	return 1;
}

public OnPlayerSpawn(playerid)
{
	// use os natives normais: o include registra tudo automaticamente
	GivePlayerMoney(playerid, 5000);
	GivePlayerWeapon(playerid, 31, 200);
	SetPlayerArmour(playerid, 50.0);
	return 1;
}

// (opcional) chamado a cada detecção. Retorne 0 para ignorá-la.
public OnEagleEyeDetect(playerid, code, const detail[])
{
	// ex.: ignorar detecções de admins em serviço
	// if (PlayerInfo[playerid][pAdminDuty]) return 0;
	return 1;
}

// (opcional) chamado antes de kickar/banir. Retorne 1 se o gamemode
// tratar a punição (ex.: ban no MySQL do servidor); 0 = o AC aplica Kick/BanEx.
public OnEagleEyePunish(playerid, code, action, const detail[])
{
	return 0;
}

// (opcional) define quem recebe os avisos do AC no jogo (padrão: admins RCON)
public OnEagleEyeAdminCheck(playerid)
{
	return IsPlayerAdmin(playerid);
}

// (opcional) entregar itens de pickups/checkpoints sem falso positivo
public OnPlayerPickUpPickup(playerid, pickupid)
{
	// GivePlayerWeapon / SetPlayerHealth já registram tudo no AC
	return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
	if (!strcmp(cmdtext, "/jetpack", true))
	{
		SetPlayerSpecialAction(playerid, SPECIAL_ACTION_USEJETPACK); // liberado pelo AC
		return 1;
	}
	if (!strcmp(cmdtext, "/ls", true))
	{
		SetPlayerPos(playerid, 1529.6, -1691.2, 13.3); // teleporte do servidor: sem falso positivo
		return 1;
	}
	return 0;
}
