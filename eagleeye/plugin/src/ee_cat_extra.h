// EagleEYE plugin - categoria EXTRA (v2.3.0).
// nome invalido/spoof, animacao crasher, skin invalido, flood de objetos,
// flood de PM, spam de buzina, troca de interior/VW sem o servidor e
// mover-se congelado pelo servidor.
//
// Como as demais categorias, a logica aqui e pura e testavel: recebe os
// valores ja lidos do jogo e devolve a deteccao. A camada sampgdk alimenta
// com GetPlayerName/anim/skin/interior/etc.
#ifndef EE_CAT_EXTRA_H
#define EE_CAT_EXTRA_H

#include <string>
#include "ee_cat_player.h"   // CatResult

namespace ee {

// Estado de contagem por janela (flood de objetos/PM/buzina).
struct CountState { long tick = 0; int count = 0; };

// Nome: so letras, numeros e [ ] ( ) $ @ . _ = sao validos no SA-MP, com
// 3 a 24 caracteres. Fora disso o cliente adulterou o nick (spoof/crasher).
bool validNick(const std::string& name);
CatResult checkNickname(const std::string& name, bool active);

// Animacao: indice valido no SA-MP vai de 0 a 1702. Fora disso e um
// ApplyAnimation forjado que trava os outros clientes (crasher).
CatResult checkAnim(int animIndex, bool active);

// Skin: ids validos vao de 0 a 311 (o 74 nao existe). Fora disso o cliente
// forcou um modelo invalido (crasher/skin hack).
CatResult checkSkin(int skinId, bool active);

// Flood de objetos (CreateObject/AttachObject) numa janela de 5s.
CatResult checkObjectSpam(CountState& s, long now, int limit, bool active);

// Flood de mensagens privadas (PM) numa janela de 5s.
CatResult checkPmFlood(CountState& s, long now, int limit, bool active);

// Spam de buzina/sirene (tecla de buzina) numa janela de 3s.
CatResult checkHornSpam(CountState& s, long now, int limit, bool active);

// Troca de interior ou virtual world que o servidor nao fez (teleporte por
// interior). serverChanged = o gamemode mudou o interior/VW agora.
CatResult checkWorldJump(int oldInterior, int newInterior,
                         int oldWorld, int newWorld,
                         bool serverChanged, bool active);

// Mover-se enquanto congelado pelo servidor (anti-freeze bypass).
CatResult checkFreezeBypass(bool frozen, bool moved, bool active);

} // namespace ee

#endif // EE_CAT_EXTRA_H
