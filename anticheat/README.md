# 🛡️ Drizzie City Anti-Cheat (DCAC)

Anti-cheat **server-side** para **SA-MP 0.3.7 / 0.3.DL** e **open.mp**. Os donos configuram tudo pelo **Discord** com comandos `/ac`: ligam e desligam proteções, escolhem a punição, a tolerância e os limites. Cada detecção aparece num canal de logs.

```
┌──────────────────────┐   HTTP (native, a cada 10s)    ┌─────────────────────┐   slash commands   ┌──────────┐
│ Gamemode + drizzie_ac│ ─── GET  /ac/config ─────────▶ │  Bot DCAC (Node.js) │ ◀───────────────── │ Discord  │
│  (SA-MP / open.mp)   │ ─── POST /ac/report ─────────▶ │  API + discord.js   │ ─── logs/embeds ─▶ │ (donos)  │
└──────────────────────┘ ◀── config/comandos ────────── └─────────────────────┘                    └──────────┘
```

O servidor do jogo usa só o **native `HTTP()`**, que já vem no SA-MP e no open.mp. Por isso **não precisa de nenhum plugin `.dll`/`.so` extra**: nada para compilar e nenhum binário de terceiros rodando no seu servidor.

## 📦 O que vem no pacote

| Arquivo | Para quê |
|---|---|
| `pawn/include/drizzie_ac.inc` | Include principal. Vai no **gamemode** e contém todas as proteções. |
| `pawn/include/drizzie_ac_fs.inc` | Include para **filterscripts**. Evita falsos positivos quando um FS dá dinheiro, armas ou vida, ou teleporta alguém. |
| `pawn/examples/` | Exemplos de gamemode e filterscript. |
| `bot/` | Bot do Discord + API que o servidor consulta (o "plugin" de integração). |

## 🔒 Proteções

Todas podem ser ligadas e desligadas pelo Discord. Os IDs abaixo são os mesmos no include e no bot.

| ID | Proteção (`/ac … protecao:`) | O que faz | Limite (`/ac limite`) |
|---|---|---|---|
| 0 | Dinheiro | Money hack. O dinheiro fica salvo no servidor, e o valor criado no cliente é removido. `GetPlayerMoney` passa a retornar o valor do servidor. | – |
| 1 | Vida | Vida acima do que o servidor deu volta ao valor certo. | – |
| 2 | Colete | Mesma coisa, para o colete. | – |
| 3 | Armas | Arma que o servidor não deu é removida. Tiros com arma não autorizada são anulados. | – |
| 4 | Velocidade a pé | Speed hack a pé. | km/h (70) |
| 5 | Velocidade em veículo | Speed hack em veículo. | km/h (360) |
| 6 | Teleporte | Deslocamento grande que não foi feito pelo servidor. | metros (80) |
| 7 | Airbreak/Fly | O jogador se move, mas a velocidade reportada fica perto de zero (airbreak, noclip, fly). | m/s (14) |
| 8 | Jetpack | Jetpack que não veio de `SetPlayerSpecialAction`. | – |
| 9 | Reparo de veículo | Car godmode ou reparo instantâneo. Pay'n'Spray é liberado automaticamente. | – |
| 10 | Fake kill | Morte com assassino inválido ou que não estava perto, e flood de mortes. A kill falsa chega ao gamemode como `INVALID_PLAYER_ID`. | mortes em 5s (4) |
| 11 | Rapid fire | Tiros por segundo acima do limite. A minigun é ignorada. | tiros/s (25) |
| 12 | Flood | Flood de chat e de comandos. As mensagens extras são bloqueadas. | msgs em 3s (5) |
| 13 | Puxar veículo | Car warp: entrar num veículo que estava longe. | metros (30) |
| 14 | Veículo troll | Mover ou arremessar veículos desocupados. A sincronização é bloqueada. | metros (20) |
| 15 | Ping alto | Ping acima do limite por 5s seguidos. **Vem desligada.** | ms (800) |
| 16 | Conexões por IP | Muitas contas do mesmo IP (bots, flood de conexão). | conexões (3) |
| 17 | Tuning inválido | Tuning fora da oficina (crasher). | – |
| 18 | Dialog falso | Resposta de um dialog que não foi aberto. No open.mp essa checagem já é nativa. | – |

**Ações:** `aviso` (só registra o log e avisa os admins), `kick` ou `ban` (`BanEx`).
**Tolerância:** quantas detecções em 60 segundos são necessárias para punir. Abaixo disso, cada detecção é só um aviso no log.

## 🚀 Instalação

### 1. Bot do Discord

1. Crie uma aplicação em <https://discord.com/developers/applications>. Na aba **Bot**, gere o token.
2. Convide o bot com os escopos `bot` e `applications.commands`. Ele precisa da permissão **Enviar mensagens / Inserir links** no canal de logs.
3. Configure e inicie (Node.js 18 ou superior):

```bash
cd anticheat/bot
cp .env.example .env      # preencha DISCORD_TOKEN, DISCORD_GUILD_ID, AC_OWNER_IDS e AC_API_KEY
npm install
npm start
```

> **AC_API_KEY**: use uma chave longa e aleatória, com pelo menos 16 caracteres (só letras, números, `_` e `-`). Por exemplo: `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"`.
>
> Se o bot rodar em outra máquina, libere a porta `AC_API_PORT` (padrão 8090) **só para o IP do servidor SA-MP**, usando `AC_ALLOWED_IPS` e o firewall.

Para manter o bot rodando, use `pm2 start src/index.js --name dcac` ou um serviço systemd.

### 2. Gamemode

1. Copie `pawn/include/drizzie_ac.inc` (e `drizzie_ac_fs.inc`) para a pasta `pawno/include` ou `qawno/include`.
2. No topo do gamemode, **logo depois** do `a_samp`/`open.mp` e **antes** dos outros includes:

```pawn
#include <open.mp>                // ou <a_samp>

#define DCAC_API_HOST "127.0.0.1:8090"              // IP:porta do bot (sem http://)
#define DCAC_API_KEY  "a_mesma_chave_do_AC_API_KEY"
#include <drizzie_ac>

#include <sscanf2>
#include <zcmd>
// ...
```

3. Compile e reinicie o servidor. No console deve aparecer:
   `[DCAC] Configuracao vX carregada do Discord (anti-cheat ATIVO).`

### 3. Filterscripts

Todo filterscript que dá dinheiro, armas, vida ou colete, ou que teleporta jogadores, deve usar:

```pawn
#define FILTERSCRIPT
#include <open.mp>          // ou <a_samp>
#include <drizzie_ac_fs>
```

## 💬 Comandos do Discord

| Comando | Descrição |
|---|---|
| `/ac painel` | Painel com menu e botões para ligar e desligar proteções com cliques. |
| `/ac status` | Estado de cada proteção, servidor online/offline, jogadores e sincronização. |
| `/ac ativar protecao:<…>` / `/ac desativar protecao:<…>` | Liga ou desliga uma proteção (ou **todas**). |
| `/ac acao protecao:<…> tipo:<aviso\|kick\|ban>` | Escolhe a punição. |
| `/ac tolerancia protecao:<…> quantidade:<n>` | Quantas detecções antes de punir. |
| `/ac limite protecao:<…> valor:<n>` | Altera limites (velocidade, ping, tiros/s…). |
| `/ac global ativo:<true/false>` | Liga ou desliga o anti-cheat inteiro. |
| `/ac intervalo segundos:<n>` | Frequência com que o servidor busca a configuração (3–300s). |
| `/ac logs canal:<#canal>` | Canal das detecções. |
| `/ac historico [nick]` | Últimas detecções. |
| `/ac imune adicionar/remover/listar nick:<…>` | Nicks ignorados pelo AC (ex.: staff). |
| `/ac desbanir ip:<ip>` | `unbanip` + `reloadbans` no servidor. |
| `/ac kick id:<id>` | Kicka um jogador pelo ID. |
| `/ac anunciar mensagem:<…>` | Mensagem do AC para todos no jogo. |
| `/ac restaurar` | Volta tudo para o padrão. |
| `/ac donos adicionar/remover/listar usuario:<@> cargo:<@>` | Quem pode usar o `/ac`. Só os **super donos** (IDs em `AC_OWNER_IDS` e o dono do servidor do Discord) podem alterar essa lista. |

As alterações chegam ao servidor em até `intervalo` segundos (padrão 10), **sem reiniciar o gamemode**. Se o bot cair, o servidor continua usando a última configuração recebida.

## 🧩 API para o gamemode

```pawn
// Callbacks opcionais
public OnAntiCheatDetect(playerid, code, const detail[])            { return 1; } // retorne 0 para ignorar
public OnAntiCheatPunish(playerid, code, action, const detail[])    { return 0; } // retorne 1 se você mesmo punir (ex.: ban no MySQL)
public OnAntiCheatAdminCheck(playerid)                              { return IsPlayerAdmin(playerid); } // quem vê os avisos no jogo

// Funções
AC_SetPlayerImmune(playerid, true);        // imunidade total (ex.: admin em serviço)
AC_PositionImmunity(playerid, 3000);       // imunidade de posição por X ms (elevadores, objetos móveis…)
AC_AllowWeapon(playerid, weaponid);        // libera uma arma recebida por pickup ou outro meio externo
AC_IsEnabled(DCAC_JETPACK);                // a proteção está ativa?
AC_GetServerMoney(playerid);               // dinheiro real (servidor)
AC_ReloadConfig();                         // força buscar a configuração agora
AC_CommandFloodCheck(playerid);            // para Pawn.CMD: chame em OnPlayerCommandReceived (retorna true = bloquear)
```

Defines opcionais (antes do `#include <drizzie_ac>`): `DCAC_TICK_MS`, `DCAC_HIT_WINDOW_MS`, `DCAC_REPORT_COOLDOWN`, `DCAC_COLOR` e `DCAC_KEEP_STUNT_BONUS` (por padrão o AC desliga o stunt bonus, que dá dinheiro no cliente).

## ⚠️ Possíveis falsos positivos

- **Máquinas de refrigerante e lanchonetes do singleplayer** curam no cliente, e o AC desfaz essa cura. Em RP o mais comum é removê-las com `RemoveBuildingForPlayer`. Outra opção é desligar a proteção **Vida**.
- **Pickups de arma, vida e colete** criados com `CreatePickup`/streamer: depois de entregar o item, chame `AC_AllowWeapon` / `SetPlayerHealth` / `SetPlayerArmour` no `OnPlayerPickUp(Dynamic)Pickup`.
- **Objetos móveis** (elevadores, plataformas do streamer): use `AC_PositionImmunity`.
- **Pawn.CMD**: os comandos não passam por `OnPlayerCommandText`. Use `AC_CommandFloodCheck` no `OnPlayerCommandReceived`.
- Com lag forte, velocidade, teleporte e airbreak podem disparar. Ajuste pelo Discord com `/ac tolerancia` ou `/ac limite`, ou deixe essas proteções em `aviso`.

Recomendação: comece com as proteções em **aviso** por alguns dias, acompanhe o canal de logs e ajuste os limites antes de passar para kick ou ban.

## 🧪 Testes do bot

```bash
cd anticheat/bot && npm test
```
