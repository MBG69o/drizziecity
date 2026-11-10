/*
 *  EagleEYE - include "casca" para a versao em PLUGIN.
 *  ---------------------------------------------------------------------------
 *  Este arquivo NAO contem nenhuma logica de deteccao. Ele apenas declara os
 *  natives do plugin (dcac.dll / dcac.so) e repassa os callbacks do servidor
 *  para ele. Toda a protecao roda dentro do plugin compilado.
 *
 *  O cliente usa ESTE include no gamemode:
 *      #include <open.mp>   // ou <a_samp>
 *      #include <eagleeye>
 *
 *  E instala o plugin + a licenca:
 *      - plugins/eagleeye.dll  (Windows)  ou  plugins/eagleeye.so (Linux)
 *      - scriptfiles/eagleeye_licenca.txt  (a chave que voce vendeu)
 */
#if defined _eagleeye_included
    #endinput
#endif
#define _eagleeye_included

// Natives expostos pelo plugin. Se o plugin nao estiver carregado, estes
// natives nao existem e o servidor avisa no console (o gamemode segue normal).
native EE_Version(dest[], size = sizeof dest);
native EE_IsEnabled(code);
native EE_SetPlayerImmune(playerid, bool:immune);
native bool:EE_IsPlayerImmune(playerid);
native EE_Report(playerid, code, const detail[]);

// O plugin ja intercepta os callbacks internamente via sampgdk. Este include
// existe para o gamemode poder chamar os natives acima e para o compilador
// nao reclamar. Nao ha ALS hooking aqui: a casca nao enxerga as deteccoes.

forward OnEagleEyeDetect(playerid, code, const detail[]);
forward OnEagleEyePunish(playerid, code, action, const detail[]);

#if defined FILTERSCRIPT
    #error "[EagleEYE] Em filterscripts nao e necessario incluir nada: o plugin ja cobre todos os scripts."
#endif
