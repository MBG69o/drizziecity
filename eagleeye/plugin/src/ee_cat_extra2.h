// EagleEYE plugin - categoria EXTRA 2 (v2.10.0).
// special action invalida, troca de arma rapida demais, texto crasher no chat,
// objeto anexado invalido e spam de agachar. Funcoes puras e testaveis.
#ifndef EE_CAT_EXTRA2_H
#define EE_CAT_EXTRA2_H

#include <string>
#include "ee_cat_player.h"   // CatResult
#include "ee_cat_extra.h"    // CountState

namespace ee {

// Special action valida no SA-MP: 0..13, 20..25 e 68 (handup). Fora disso o
// cliente forcou uma acao impossivel (crasher / action hack).
bool validSpecialAction(int action);
CatResult checkSpecialAction(int action, bool active);

// Troca de arma rapida demais: trocar de arma varias vezes abaixo de minMs.
struct WeaponSwitchState { int last = -1; long tick = 0; int strikes = 0; };
CatResult checkWeaponSwitch(WeaponSwitchState& s, int weapon, long now, int minMs, bool active);

// Texto que trava os outros clientes: caracteres de controle ou cores demais.
bool hasChatCrash(const std::string& text);
CatResult checkChatCrash(const std::string& text, bool active);

// Objeto anexado invalido: slot 0..9, modelo > 0 e bone 1..18.
CatResult checkAttachment(int index, int model, int bone, bool active);

// Spam de agachar/levantar (crouch) numa janela de 3s.
CatResult checkCrouchSpam(CountState& s, long now, int limit, bool active);

} // namespace ee

#endif // EE_CAT_EXTRA2_H
