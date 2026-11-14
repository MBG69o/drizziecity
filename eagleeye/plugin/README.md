# 🦅 EagleEYE — versão em plugin (.dll / .so)

Versão do EagleEYE empacotada como **plugin nativo**, para vender/alugar sem entregar o código-fonte e com **licença revogável**. O cliente recebe só o binário, o include e uma chave de licença.

## Arquitetura (plugin ↔ include)

O **plugin é o cérebro** e a **include é o corpo**:

| | Plugin (`eagleeye.dll`/`.so`) | Include (`eagleeye_plugin.inc`) |
|---|---|---|
| Host/caminho/chave da API | **guardados ocultos** (ofuscados) | não tem |
| Token do servidor | **gera e guarda cifrado** | só lê para mostrar |
| Rede com o bot (licença, config, relatórios) | **faz tudo** (thread própria) | não faz nada |
| Configuração das proteções | recebe do bot e **expõe por natives** | **lê** pelos natives |
| Detecção (lê o estado do jogo) | — | faz, e **reporta pelo plugin** |

Assim o cliente nunca vê o endereço da API, nem a chave, nem o token — eles vivem **só dentro do binário**. A include compilada (modo `EE_USE_PLUGIN`) só conversa com o plugin por natives (`EE_Plugin_*`).

No gamemode, em vez de `#include <eagleeye>`, use **`#include <eagleeye_plugin>`**.

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

## Detecções portadas (51/51, testadas)

Toda a lógica das 51 proteções já está em C++, dividida por categoria e com testes que rodam (64 bits, sem o SDK):

| Arquivo | Categoria | Proteções |
|---|---|---|
| `ee_detect.cpp` | motor | parser da config do bot, tolerância/janela/cooldown, fila de relatórios |
| `ee_cat_player.cpp` | jogador | dinheiro, vida, colete, jetpack, godmode, spawn falso |
| `ee_cat_weapons.cpp` | armas | armas, fake kill, rapid fire, alcance, dano, munição, c-bug, aimbot |
| `ee_cat_movement.cpp` | movimento | velocidade a pé, teleporte, airbreak, pickup/checkpoint falso (+ velocidade em veículo e posição-crasher) |
| `ee_cat_vehicles.cpp` | veículos | reparo, car warp, veículo troll, tuning, spam, assento inválido |
| `ee_cat_network.cpp` | rede | flood, divulgação, dialog, ping, conexões por IP, reconexão, RCON, NPC falso |
| `ee_cat_extra.cpp` | extra | nick inválido, animação crasher, skin inválido, spam de objeto, flood de PM, spam de buzina, troca de interior, anti-freeze |
| `ee_cat_extra2.cpp` | extra 2 | ação especial inválida, troca de arma rápida, chat crasher, anexo inválido, spam de agachar |
| `ee_cat_extra3.cpp` | extra 3 | driveby ilegal, veículo de modelo inválido, bypass de espectador, troca de skin |

As detecções são **funções puras**: recebem os valores já lidos do jogo e devolvem a detecção + a correção. Rode `bash test/run.sh` para ver todos os testes.

## Build

`./build.sh` gera **`eagleeye.dll`** (Windows 32 bits) e **`eagleeye.so`** (Linux 32 bits) — o plugin **completo**: ponte com os natives (`ee_bridge`), núcleo seguro, motor de config (`ee_detect`) e o SDK oficial do SA-MP (`sdk/amxplugin.cpp`). **Não usa a sampgdk** — quem fala com o jogo é a include, então o plugin só precisa *expor* natives.

- A `.dll` exporta `Supports`/`Load`/`Unload`/`AmxLoad`/`AmxUnload` e importa só `KERNEL32`/`msvcrt`/`WS2_32`; a `.so`, só a glibc padrão.
- Pré-requisitos e geração dos segredos: veja `BUILD.md`.

> ⚠️ **Validação final num servidor real:** o build e o registro de natives estão comprovados aqui, mas o ambiente de montagem não roda um servidor SA-MP/open.mp. Teste o par plugin+include (`eagleeye_plugin.inc`) num servidor de teste antes de distribuir.

## Como o cliente instala

1. `plugins/eagleeye.dll` (Windows) ou `plugins/eagleeye.so` (Linux), e no `server.cfg`: `plugins eagleeye` (open.mp: em `legacy_plugins`).
2. `scriptfiles/eagleeye_licenca.txt` com a chave que você vendeu.
3. No gamemode: `#include <eagleeye>` (a casca, sem lógica).
4. Ligar o servidor, copiar o token do console e fazer `/ac login token:...` no Discord.

## Estrutura

```
plugin/
  src/        núcleo seguro (crypto, store, license, http)
              ee_bridge.cpp      <- ponte: estado + rede + natives + ciclo de vida
              ee_detect.cpp + ee_cat_*.cpp  <- motor e proteções portadas
  pawn/       eagleeye_plugin.inc (casca: #define EE_USE_PLUGIN + <eagleeye>)
  tools/      obfuscate.py (gera os segredos ofuscados)
  CMakeLists.txt, BUILD.md
```
