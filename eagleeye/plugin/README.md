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

## O que falta para o binário final

- **Baixar o SDK do SA-MP + sampgdk** e compilar o `.dll`/`.so` (veja `BUILD.md`). Não deu para baixar no ambiente onde isto foi montado.
- **Portar a lógica de detecção** das 34 proteções (hoje no `eagleeye.inc` v2.2.0) para `src/ee_detections.cpp`. É a etapa que esconde as regras dentro do binário, e deve ser feita e **testada num servidor real**, porque C++ mal testado derruba o servidor. O esqueleto (`ee_plugin.cpp`) já tem o ponto de entrada onde ela encaixa.

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
