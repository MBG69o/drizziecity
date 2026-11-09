# 🛡️ Drizzie City Anti-Cheat (DCAC) v2

Anti-cheat **server-side** para **SA-MP 0.3.7 / 0.3.DL** e **open.mp** com **34 proteções**, configurado pelo **Discord** com comandos `/ac`.

**Vários servidores, um bot.** Cada servidor que usa o include recebe um **ID fixo** (ex.: `DC-7K2QMX`) e uma **chave de login**. O dono faz `/ac login` no Discord e passa a controlar as proteções daquele servidor. Um mesmo bot pode atender quantos servidores você quiser, cada um com a sua configuração, seus donos e seu canal de logs.

```
┌──────────────────────┐  1º boot: GET /ac/register  ┌─────────────────────┐   /ac login id chave   ┌──────────┐
│ Servidor A (DC-7K2..)│ ──────────────────────────▶ │                     │ ◀───────────────────── │ Discord  │
│ Servidor B (DC-Q9M..)│ ── GET /ac/config (10s) ──▶ │  Bot DCAC (Node.js) │ ─── logs por servidor ▶│ (donos)  │
│ Servidor C ...       │ ── POST /ac/report ───────▶ │                     │                        │          │
└──────────────────────┘                             └─────────────────────┘                        └──────────┘
```

O servidor do jogo usa só o **native `HTTP()`**, que já vem no SA-MP e no open.mp. Por isso **não precisa de nenhum plugin `.dll`/`.so` extra**.

## 📦 O que vem no pacote

| Arquivo | Para quê |
|---|---|
| `pawn/include/drizzie_ac.inc` | Include principal. Vai no **gamemode** e contém todas as proteções. |
| `pawn/include/drizzie_ac_fs.inc` | Include para **filterscripts**. Evita falsos positivos quando um FS dá dinheiro, armas ou vida, teleporta, cria checkpoints ou pickups. |
| `pawn/examples/` | Exemplos de gamemode e filterscript. |
| `bot/` | Bot do Discord + API que os servidores consultam. |

## 🔑 ID fixo e login

1. Na **primeira** inicialização, o gamemode se registra sozinho no bot e salva a identidade em `scriptfiles/dcac_servidor.cfg`.
2. O console mostra:
   ```
   [DCAC] ID do servidor: DC-7K2QMX | Chave de login: ABCD-EFGH-JKLM
   [DCAC] No Discord use: /ac login id:DC-7K2QMX chave:ABCD-EFGH-JKLM
   ```
   Para ver de novo, digite `dcac` no console ou no RCON.
3. No **Discord do projeto**, o cliente roda `/ac login id:DC-7K2QMX chave:ABCD-EFGH-JKLM`. Quem faz o login vira **dono** do servidor, e o bot salva o vínculo em `data/donos.json`:
   ```json
   {
     "294929472947294828472": { "servidor": "Drizzie RP", "IDF": "DC-7K2QMX" }
   }
   ```
4. **Confirmação:** o servidor nasce com o anti-cheat **desligado**. Depois do login, o bot mostra o servidor encontrado com o botão **✅ Confirmar e ativar**. Só esse dono pode clicar. A qualquer momento, `/ac meuservidor` busca o servidor pelo ID do Discord do cliente e mostra o mesmo botão.
5. O ID **nunca muda**, mesmo reiniciando o servidor ou o bot. **Faça backup do `dcac_servidor.cfg`**: ele guarda o token secreto que identifica o servidor.

Segurança:
- O bot guarda só o **hash** do token.
- A chave de login pode ser trocada com `/ac novachave`.
- Login errado 5 vezes bloqueia a pessoa por 10 minutos.
- O registro de servidores é limitado a 5 por IP por hora.

Perdeu o `dcac_servidor.cfg` mas quer manter o ID? Um dono usa `/ac token`: o bot gera um token novo e mostra como recriar o arquivo. Outra opção é fixar no gamemode com `#define DCAC_SERVER_ID` e `#define DCAC_SERVER_TOKEN`.

## 🔒 Proteções (34)

Todas podem ser ligadas e desligadas pelo Discord. No painel elas aparecem divididas em 5 categorias.

### 🧍 Jogador
| ID | Proteção | O que faz | Limite padrão |
|---|---|---|---|
| 0 | Dinheiro | Money hack. O dinheiro fica salvo no servidor, e o valor criado no cliente é removido. `GetPlayerMoney` retorna o valor do servidor. | – |
| 1 | Vida | Vida acima do que o servidor deu volta ao valor certo. | – |
| 2 | Colete | Mesma coisa, para o colete. | – |
| 8 | Jetpack | Jetpack que não veio de `SetPlayerSpecialAction`. | – |
| 19 | Godmode | O jogador leva tiros (contados pelo `OnPlayerGiveDamage` de quem atira) e a vida não cai. Ignora jogadores pausados e do mesmo time. | 6 tiros |
| 24 | Spawn falso | Spawn que o servidor não autorizou, como pular a tela de login. | – |

### 🔫 Armas e combate
| ID | Proteção | O que faz | Limite padrão |
|---|---|---|---|
| 3 | Armas | Arma que o servidor não deu é removida. Tiros com arma não autorizada são anulados. | – |
| 10 | Fake kill | Morte com assassino inválido ou que não estava perto, e flood de mortes. A kill falsa chega ao gamemode como `INVALID_PLAYER_ID`. | 4 mortes/5s |
| 11 | Rapid fire | Tiros por segundo acima do limite. A minigun é ignorada. | 25 tiros/s |
| 20 | Alcance de tiro | Acerto além do alcance real da arma (silent aim, range hack). O tiro é anulado. | +30% |
| 21 | Dano hack | Dano maior que o máximo da arma. | – |
| 22 | Munição | Munição criada no cliente (é corrigida) e munição infinita. | 12 tiros |
| 29 | C-Bug | Agachar logo depois de atirar. **Vem desligada**, para servidores que proíbem c-bug. | 600 ms |
| 33 | Aimbot | Taxa de acerto em jogadores acima do limite numa janela de 40 tiros. Por padrão é só **aviso**. | 92% |

### 🏃 Movimento
| ID | Proteção | O que faz | Limite padrão |
|---|---|---|---|
| 4 | Velocidade a pé | Speed hack a pé. | 70 km/h |
| 6 | Teleporte | Deslocamento grande que não foi feito pelo servidor. | 80 m |
| 7 | Airbreak/Fly | O jogador se move, mas a velocidade reportada fica perto de zero (airbreak, noclip, fly). | 14 m/s |
| 27 | Pickup falso | Pegar um pickup estando longe dele. O gamemode não recebe o evento. | 15 m |
| 28 | Checkpoint falso | Entrar num checkpoint ou race checkpoint estando longe dele. | 10 m além do raio |

### 🚗 Veículos
| ID | Proteção | O que faz | Limite padrão |
|---|---|---|---|
| 5 | Velocidade em veículo | Speed hack em veículo. | 360 km/h |
| 9 | Reparo de veículo | Car godmode ou reparo instantâneo. Pay'n'Spray é liberado automaticamente. | – |
| 13 | Puxar veículo | Car warp: entrar num veículo que estava longe. | 30 m |
| 14 | Veículo troll | Mover ou arremessar veículos desocupados e puxar trailers à distância. A sincronização é bloqueada. | 20 m |
| 17 | Tuning inválido | Tuning fora da oficina (crasher). | – |
| 26 | Spam de veículo | Entrar e sair de veículos em excesso. | 8 em 5s |

### 🌐 Rede, chat e servidor
| ID | Proteção | O que faz | Limite padrão |
|---|---|---|---|
| 12 | Flood | Flood de chat e de comandos. As mensagens extras são bloqueadas. | 5 msgs/3s |
| 15 | Ping alto | Ping acima do limite por 5s seguidos. **Vem desligada.** | 800 ms |
| 16 | Conexões por IP | Muitas contas simultâneas do mesmo IP. O kick também bloqueia o IP por 2 min. | 3 |
| 18 | Dialog falso | Resposta de um dialog que não foi aberto. No open.mp essa checagem já é nativa. | – |
| 23 | Crasher | Dados inválidos: bala impossível, assento inválido, posição NaN ou fora do mapa, sync de veículo inválido, veículo inexistente. | – |
| 25 | Divulgação | IPs ou portas de outros servidores no chat e em comandos. A mensagem é bloqueada. | – |
| 30 | RCON brute force | Muitas senhas RCON erradas: o IP é bloqueado por 1h e o caso vai para o log. | 3 tentativas |
| 31 | NPC falso | Conexão externa se passando por NPC. | – |
| 32 | Flood de reconexão | Muitas conexões do mesmo IP em 30s (bots). O kick também bloqueia o IP por 2 min. | 5 |

**Ações:** `aviso` (só registra o log e avisa os admins), `kick` ou `ban` (`BanEx`).
**Tolerância:** quantas detecções em 60 segundos são necessárias para punir. Abaixo disso, cada detecção é só um aviso.

## 🚀 Instalação

### 1. Bot do Discord (uma vez, serve para todos os servidores)

> O bot **só funciona no Discord do projeto** (`DISCORD_GUILD_ID`, obrigatório). Se alguém adicioná-lo em outro Discord, ele sai sozinho na hora. Os comandos são registrados apenas no Discord do projeto, e interações vindas de qualquer outro lugar são recusadas.

1. Crie uma aplicação em <https://discord.com/developers/applications>. Na aba **Bot**, gere o token.
2. Convide o bot com os escopos `bot` e `applications.commands`. Ele precisa da permissão **Enviar mensagens / Inserir links** nos canais de log.
3. Configure e inicie (Node.js 18 ou superior):

```bash
cd anticheat/bot
cp .env.example .env      # preencha DISCORD_TOKEN e DISCORD_GUILD_ID (Discord do projeto)
npm install
npm start                 # ou: pm2 start src/index.js --name dcac
```

- **Bot público** (outros donos de servidor podem usar): deixe `AC_REGISTER_KEY` vazio.
- **Bot privado**: defina `AC_REGISTER_KEY`. Só gamemodes com `#define DCAC_REGISTER_KEY "mesma_chave"` conseguem se registrar.
- Libere a porta `AC_API_PORT` (padrão 8090) no firewall para os servidores do jogo.

### 2. Gamemode

1. Copie `pawn/include/drizzie_ac.inc` (e `drizzie_ac_fs.inc`) para a pasta `pawno/include` ou `qawno/include`.
2. Confira se a pasta `scriptfiles/` existe no servidor.
3. No topo do gamemode, **logo depois** do `a_samp`/`open.mp` e **antes** dos outros includes:

```pawn
#include <open.mp>                     // ou <a_samp>

#define DCAC_API_HOST "ip-do-bot:8090"  // sem http://
// #define DCAC_REGISTER_KEY "..."      // só se o bot exigir
#include <drizzie_ac>

#include <sscanf2>
#include <zcmd>
// ...
```

4. Compile e inicie. Copie o ID e a chave do console e faça `/ac login` no Discord.

### 3. Filterscripts

```pawn
#define FILTERSCRIPT
#include <open.mp>          // ou <a_samp>
#include <drizzie_ac_fs>
```

## 💬 Comandos do Discord

**Servidores**
| Comando | Descrição |
|---|---|
| `/ac login id:<IDF> chave:<CHAVE>` | Registra o servidor no nome de quem rodou o comando (vira dono e entra no `donos.json`) e pede a confirmação. |
| `/ac meuservidor` | Busca o servidor do cliente pelo ID do Discord e mostra o botão de confirmar a ativação. |
| `/ac servidores` | Lista os servidores a que você tem acesso e mostra qual está ativo. |
| `/ac usar id:<IDF>` | Para quem tem acesso a mais de um servidor: escolhe qual os comandos configuram. Sem isso, vale o servidor do `donos.json`. |
| `/ac logout` | Sai do servidor e remove a entrada do `donos.json`. Se for o último dono, o anti-cheat volta a aguardar confirmação. *(dono)* |
| `/ac novachave` | Gera uma nova chave de login. *(dono)* |
| `/ac token` | Gera um novo token da API, para recuperação. *(dono)* |
| `/ac nome [nome]` | Dá um apelido ao servidor. Sem nome, volta a usar o hostname. |

**Proteções** (valem para o servidor ativo)
| Comando | Descrição |
|---|---|
| `/ac painel` | Painel com botões de categoria, menu para ligar e desligar, e botão global. |
| `/ac status` | Todas as proteções, servidor online/offline, jogadores e sincronização. |
| `/ac ativar` / `/ac desativar protecao:<…>` | Liga ou desliga uma proteção, uma **categoria** ou **todas**. O campo tem autocomplete. |
| `/ac acao protecao:<…> tipo:<aviso\|kick\|ban>` | Escolhe a punição. |
| `/ac tolerancia protecao:<…> quantidade:<n>` | Quantas detecções antes de punir. |
| `/ac limite protecao:<…> valor:<n>` | Altera os limites (velocidade, ping, % de acerto…). |
| `/ac global ativo:<true/false>` | Liga ou desliga o anti-cheat inteiro. |
| `/ac intervalo segundos:<n>` | Frequência com que o servidor busca a configuração (3–300s). |
| `/ac logs canal:<#canal>` | Canal deste Discord que recebe as detecções do servidor ativo. |
| `/ac historico [nick]` | Últimas detecções. |
| `/ac imune adicionar/remover/listar nick:<…>` | Nicks ignorados pelo AC. |
| `/ac desbanir ip:<ip>` | `unbanip` + `reloadbans`, e desbloqueia o IP. |
| `/ac kick id:<id>` | Kicka um jogador. |
| `/ac anunciar mensagem:<…>` | Mensagem do AC para todos no jogo. |
| `/ac restaurar` | Volta tudo para o padrão. |
| `/ac donos adicionar/remover/listar usuario:<@> cargo:<@>` | Quem pode configurar o servidor. Só **donos** alteram. |

**Permissões** (cada cliente só enxerga e configura o próprio servidor):
- **Donos** são quem fez login com a chave. Eles podem tudo.
- **Admins e cargos** adicionados pelos donos podem configurar proteções.
- `AC_BOT_ADMIN_IDS` no `.env` dá acesso total a todos os servidores (suporte de quem hospeda o bot).

As alterações chegam ao servidor em até `intervalo` segundos (padrão 10), **sem reiniciar o gamemode**. Se o bot cair, o servidor continua usando a última configuração recebida.

## 🧩 API para o gamemode

```pawn
// Callbacks opcionais
public OnAntiCheatDetect(playerid, code, const detail[])            { return 1; } // retorne 0 para ignorar
public OnAntiCheatPunish(playerid, code, action, const detail[])    { return 0; } // retorne 1 se você mesmo punir (ex.: ban no MySQL)
public OnAntiCheatAdminCheck(playerid)                              { return IsPlayerAdmin(playerid); } // quem vê os avisos no jogo

// Funções
AC_GetServerId(id);                        // ID fixo do servidor
AC_SetPlayerImmune(playerid, true);        // imunidade total (ex.: admin em serviço)
AC_PositionImmunity(playerid, 3000);       // imunidade de posição por X ms (elevadores, objetos móveis…)
AC_AllowWeapon(playerid, weaponid, ammo);  // libera uma arma recebida por um meio que o AC não vê
AC_IsEnabled(DCAC_GODMODE);                // a proteção está ativa?
AC_GetServerMoney(playerid);               // dinheiro real (servidor)
AC_ReloadConfig();                         // força buscar a configuração agora
AC_CommandFloodCheck(playerid, cmdtext);   // para Pawn.CMD: chame em OnPlayerCommandReceived (true = bloquear)
```

Defines opcionais (antes do `#include <drizzie_ac>`):
- `DCAC_REGISTER_KEY`, `DCAC_SERVER_ID` + `DCAC_SERVER_TOKEN`, `DCAC_ID_FILE`;
- `DCAC_TICK_MS`, `DCAC_HIT_WINDOW_MS`, `DCAC_REPORT_COOLDOWN`, `DCAC_COLOR`;
- `DCAC_KEEP_STUNT_BONUS` (por padrão o AC desliga o stunt bonus, que dá dinheiro no cliente).

## ⚠️ Possíveis falsos positivos

- **Máquinas de refrigerante e lanchonetes do singleplayer** curam no cliente. Remova-as com `RemoveBuildingForPlayer` ou desligue a proteção **Vida**.
- **Ammu-Nation e interiores do singleplayer** dão armas no cliente. Desative as entradas com `DisableInteriorEnterExits()`.
- **Pickups e checkpoints do streamer** (`CreateDynamicPickup`/`CP`) não passam pelas proteções 27 e 28. Os natives normais passam. `AddStaticPickup` é convertido em `CreatePickup` para poder ser validado.
- **Objetos móveis** (elevadores do streamer): use `AC_PositionImmunity`.
- **Sistemas de dano customizado** que alteram o dano das armas: desligue **Dano hack**.
- **Pawn.CMD**: os comandos não passam por `OnPlayerCommandText`. Use `AC_CommandFloodCheck` no `OnPlayerCommandReceived`.
- **Godmode, munição e aimbot** são heurísticas e dependem de lag e sincronização. Comece em `aviso`.
- Com lag forte, velocidade, teleporte e airbreak podem disparar. Ajuste com `/ac tolerancia` e `/ac limite`.

Recomendação: deixe as proteções em **aviso** por alguns dias, acompanhe o canal de logs e ajuste os limites antes de passar para kick ou ban.

## 🧪 Testes do bot

```bash
cd anticheat/bot && npm test
```
