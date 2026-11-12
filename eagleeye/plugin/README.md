# 🦅 EagleEYE — versão em plugin (.dll / .so)

Versão do EagleEYE empacotada como **plugin nativo**, para vender/alugar sem entregar o código-fonte e com **licença revogável**. O cliente recebe só o binário, o include "casca" e uma chave de licença.

## Por que plugin

| | Include (`.inc`) | Plugin (`.dll`/`.so`) |
|---|---|---|
| O cliente vê a lógica? | Sim (texto puro) | Não (binário compilado) |
| Token no servidor | arquivo de texto | arquivo **cifrado**, com detecção de adulteração |
| Exige licença | não | **sim**, validada com o seu bot |
| Você revoga o acesso | não | **sim**, na hora (`/ac licenca revogar`) |

> Limite honesto: nenhum binário é inviolável e o cliente sempre pode **remover** o plugin do servidor. Por isso a licença não é só local — ela é confirmada com o **seu** bot e você revoga quando quiser. Sem licença válida, o plugin para.

## O que já está pronto e testado

O **núcleo de segurança** está implementado e com testes que rodam (inclusive de compatibilidade entre o bot em Node e o plugin em C++):

- `ee_crypto` — XTEA-CBC, SHA-256 e HMAC próprios, sem dependências. *(round-trip e vetores conhecidos)*
- `ee_store` — token do servidor num arquivo cifrado; qualquer edição é detectada. *(teste de adulteração)*
- `ee_license` — formato com dígito verificador (offline) + resposta assinada do bot com anti-replay e janela de graça. *(teste cruzado Node ↔ C++)*
- `ee_http` — cliente HTTP simples (sem TLS), igual ao `HTTP()` do SA-MP.
- Segredos (host, pepper, chaves) **ofuscados** no binário via `tools/obfuscate.py`. *(confirmado: não aparecem em texto)*
- Sistema de licenças no **bot**: `/ac licenca criar | listar | revogar | reativar | info` (só admin), endpoint `/plugin/license` assinado e revogação em tempo real.

## Detecções portadas (42/42, testadas)

Toda a lógica das 42 proteções já está em C++, dividida por categoria e com testes que rodam (64 bits, sem o SDK):

| Arquivo | Categoria | Proteções |
|---|---|---|
| `ee_detect.cpp` | motor | parser da config do bot, tolerância/janela/cooldown, fila de relatórios |
| `ee_cat_player.cpp` | jogador | dinheiro, vida, colete, jetpack, godmode, spawn falso |
| `ee_cat_weapons.cpp` | armas | armas, fake kill, rapid fire, alcance, dano, munição, c-bug, aimbot |
| `ee_cat_movement.cpp` | movimento | velocidade a pé, teleporte, airbreak, pickup/checkpoint falso (+ velocidade em veículo e posição-crasher) |
| `ee_cat_vehicles.cpp` | veículos | reparo, car warp, veículo troll, tuning, spam, assento inválido |
| `ee_cat_network.cpp` | rede | flood, divulgação, dialog, ping, conexões por IP, reconexão, RCON, NPC falso |
| `ee_cat_extra.cpp` | extra | nick inválido, animação crasher, skin inválido, spam de objeto, flood de PM, spam de buzina, troca de interior, anti-freeze |

As detecções são **funções puras**: recebem os valores já lidos do jogo e devolvem a detecção + a correção. Rode `bash test/run.sh` para ver todos os testes.

## O que falta para o binário final

- **Baixar o SDK do SA-MP + sampgdk** e compilar o `.dll`/`.so` (veja `BUILD.md`). O proxy do ambiente onde isto foi montado bloqueia o download.
- **A cola sampgdk** (`ee_detections.cpp`): ligar os callbacks do servidor e os hooks dos natives (GivePlayerMoney, SetPlayerHealth...) às funções já portadas. É código de ligação, não de lógica, e precisa ser **testado num servidor real** antes de distribuir.

## Como o cliente instala

1. `plugins/eagleeye.dll` (Windows) ou `plugins/eagleeye.so` (Linux), e no `server.cfg`: `plugins eagleeye` (open.mp: em `legacy_plugins`).
2. `scriptfiles/eagleeye_licenca.txt` com a chave que você vendeu.
3. No gamemode: `#include <eagleeye>` (a casca, sem lógica).
4. Ligar o servidor, copiar o token do console e fazer `/ac login token:...` no Discord.

## Estrutura

```
plugin/
  src/        núcleo seguro (crypto, store, license, http) + ee_plugin.cpp
              ee_detections.cpp  <- portar as proteções aqui
  pawn/       eagleeye.inc (casca, sem lógica)
  tools/      obfuscate.py (gera os segredos ofuscados)
  CMakeLists.txt, BUILD.md
```
