/*
 *  Exemplo de filterscript compatível com o Drizzie City Anti-Cheat.
 */
#define FILTERSCRIPT
#include <a_samp>   // ou <open.mp>
#include <drizzie_ac_fs>

public OnPlayerCommandText(playerid, cmdtext[])
{
	if (!strcmp(cmdtext, "/kitfs", true))
	{
		GivePlayerMoney(playerid, 1000);       // registrado no AC do gamemode
		GivePlayerWeapon(playerid, 24, 50);
		SetPlayerHealth(playerid, 100.0);
		return 1;
	}
	return 0;
}
