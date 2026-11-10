# 🦅 EagleEYE Anti-Cheat

Anti-cheat **server-side** para **SA-MP 0.3.7 / 0.3.DL** e **open.mp** com **34 proteções**, configurado pelo **Discord** com comandos `/ac`.

**Vários servidores, um bot.** Na primeira vez que o servidor liga, o próprio include **gera um token de acesso** (ex.: `EE-7K2QMX-ABCD-EFGH-JKLM-NPQR`) e mostra no console. O dono faz `/ac login token:...` no Discord, o bot passa a reconhecer aquele servidor e salva o token dele. O servidor do jogo e o bot **podem estar em máquinas diferentes**. Um mesmo bot pode atender quantos servidores você quiser, cada um com a sua configuração, seus donos e seu canal de logs.

```
┌──────────────────────┐  1º boot: gera o token      ┌──────────────────────┐   /ac login token      ┌──────────┐
│ Servidor A (EE-7K2..)│ ──────────────────────────▶ │                      │ ◀───────────────────── │ Discord  │
│ Servidor B (EE-Q9M..)│ ── GET /ac/config (10s) ──▶ │ Bot EagleEYE (Node)  │ ─── logs por servidor ▶│ (donos)  │
│ Servidor C ...       │ ── POST /ac/report ───────▶ │                      │                        │          │
└──────────────────────┘                             └──────────────────────┘                        └──────────┘
```

O servidor do jogo usa só o **native `HTTP()`**, que já vem no SA-MP e no open.mp. Por isso **não precisa de nenhum plugin `.dll`/`.so` extra**.

## 📦 O que vem no pacote

| Arquivo | Para quê |
|---|---|
| `pawn/include/eagleeye.inc` | Include principal. Vai no **gamemode** e contém todas as proteções. |
| `pawn/include/eagleeye_fs.inc` | Include para **filterscripts**. Evita falsos positivos quando um FS dá dinheiro, armas ou vida, teleporta, cria checkpoints ou pickups. |
| `pawn/examples/` | Exemplos de gamemode e filterscript. |
| `bot/` | Bot do Discord + API que os servidores consultam. |

## 🔑 Token de acesso e login

1. Na **primeira** inicialização, o **próprio include gera o token** e salva em `scriptfiles/eagleeye_servidor.cfg`. Não existe etapa de registro.
2. O console mostra:
   ```
   [EagleEYE] Token de acesso: EE-7K2QMX-ABCD-EFGH-JKLM-NPQR
   [EagleEYE] No Discord use: /ac login token:EE-7K2QMX-ABCD-EFGH-JKLM-NPQR
   ```
   O começo do token (`EE-7K2QMX`) é o **ID fixo** do servidor. Para ver de novo, digite `eagleeye` no console ou no RCON.
3. O servidor já começa a consultar o bot no endereço `EE_API_HOST`. Enquanto ninguém fez login, o bot responde **"aguardando login"**, e o servidor usa a configuração padrão.
4. No **Discord do projeto**, o cliente roda `/ac login token:EE-7K2QMX-ABCD-EFGH-JKLM-NPQR`. O bot reconhece o servidor (que já se conectou com esse token), guarda o hash do token e salva o dono em `data/donos.json`:
   ```json
   {
     "294929472947294828472": { "servidor": "Drizzie RP", "IDF": "EE-7K2QMX" }
   }
   ```
5. **Confirmação:** o servidor nasce com o anti-cheat **desligado**. Depois do login, o bot mostra o servidor encontrado com o botão **✅ Confirmar e ativar**. Só esse dono pode clicar. A qualquer momento, `/ac meuservidor` busca o servidor pelo ID do Discord do cliente e mostra o mesmo botão.
6. O token **nunca muda sozinho**, mesmo reiniciando o servidor ou o bot. **Faça backup do `eagleeye_servidor.cfg`.** Se ele se perder, o servidor gera um token novo (com outro ID) e o dono precisa fazer login de novo.

**Bot e servidor em máquinas diferentes:** funciona normalmente. O único requisito é que o servidor do jogo consiga acessar o bot por **HTTP simples** no endereço de `EE_API_HOST` (IP ou domínio público + porta). Hospedagens que só expõem HTTPS ou que não aceitam conexões de entrada não servem para a API. Veja a seção de instalação.

Segurança:
- O bot guarda só o **hash** do token.
- O `/ac login` só funciona com o token de um servidor que **já se conectou** ao bot. Não dá para "reservar" um token inventado.
- `/ac servidor novachave` gera um token novo: o bot entrega ao servidor na próxima consulta, o servidor salva no `.cfg` e mostra no console, e o antigo para de valer.
- Login errado 5 vezes bloqueia a pessoa por 10 minutos.
- Para fixar o token no código em vez do `.cfg`: `#define EE_SERVER_TOKEN "EE-XXXXXX-XXXX-XXXX-XXXX-XXXX"`.

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
cd eagleeye/bot
cp .env.example .env      # preencha DISCORD_TOKEN e DISCORD_GUILD_ID (Discord do projeto)
npm install
npm start                 # ou: pm2 start src/index.js --name eagleeye
```

- No `.env`, `AC_API_HOST=0.0.0.0` faz a API aceitar conexões de fora. `AC_API_PORT` é a porta (padrão 8090).
- Libere a porta `AC_API_PORT` no firewall para os servidores do jogo.
- A API precisa responder por **HTTP simples** (o `HTTP()` do SA-MP não faz HTTPS). Teste a partir da máquina do servidor do jogo: `curl "http://ENDERECO_DO_BOT:8090/ac/config?id=x&token=x"` deve responder `unauthorized`.

> **Hospedando na Discloud?** Publique o bot como **site** (não como bot) seguindo [`bot/DISCLOUD.md`](bot/DISCLOUD.md). O `discloud.config` já vem pronto em `bot/`.

### 2. Gamemode

1. Copie `pawn/include/eagleeye.inc` (e `eagleeye_fs.inc`) para a pasta `pawno/include` ou `qawno/include`.
2. Confira se a pasta `scriptfiles/` existe no servidor.
3. No topo do gamemode, **logo depois** do `a_samp`/`open.mp` e **antes** dos outros includes:

```pawn
#include <open.mp>                     // ou <a_samp>

#define EE_API_HOST "ip-ou-dominio-do-bot:8090"  // endereço PÚBLICO do bot, sem http://
#include <eagleeye>

#include <sscanf2>
#include <zcmd>
// ...
```

4. Compile e inicie. Copie o **token de acesso** do console e faça `/ac login token:...` no Discord.

> O padrão de `EE_API_HOST` é `127.0.0.1:8090`, que só funciona com o bot **na mesma máquina** do servidor. Se o bot estiver em outra hospedagem, defina o endereço público dele. Se não definir, o console mostra `Nao foi possivel falar com o bot (127.0.0.1:8090) - codigo 2`.

### 3. Filterscripts

```pawn
#define FILTERSCRIPT
#include <open.mp>          // ou <a_samp>
#include <eagleeye_fs>
```

## 💬 Comandos do Discord

Os comandos valem para o **seu** servidor. Vários clientes podem usar o bot ao mesmo tempo, no mesmo Discord, sem conflito: cada um só vê e configura os próprios servidores.

**Mais de um servidor?** Ao usar qualquer comando, aparece um **menu só para você** para escolher em qual servidor ele vai agir. O último escolhido já vem marcado.

**Principais**
| Comando | Descrição |
|---|---|
| `/ac login token:<TOKEN>` | Registra o servidor no seu nome (dono + `donos.json`) e pede a confirmação. |
| `/ac meuservidor` | Busca o seu servidor pelo seu ID do Discord e mostra o botão **Confirmar e ativar**. |
| `/ac painel` | Painel com categorias, menu para ligar e desligar, e botão global. |
| `/ac status` | Todas as proteções, servidor online/offline, jogadores e sincronização. |
| `/ac global ativo:<true/false>` | Liga ou desliga o anti-cheat inteiro. |
| `/ac historico [nick]` | Últimas detecções. |
| `/ac jogador nick:<…>` | Ficha do jogador: detecções por proteção, IPs usados, bans e eventos recentes. |
| `/ac seguranca` | Verificação de segurança: nota de 0 a 100, o que está bom ou ruim e botões para corrigir. |
| `/ac estatisticas [periodo]` | Total de avisos, kicks e bans, e o top 10 de proteções e de jogadores (24h, 7 ou 30 dias). |

**`/ac protecao`**
| Subcomando | Descrição |
|---|---|
| `ativar` / `desativar protecao:<…>` | Uma proteção, uma **categoria** ou **todas** (o campo tem autocomplete). |
| `acao protecao:<…> tipo:<aviso\|kick\|ban>` | Escolhe a punição. |
| `tolerancia protecao:<…> quantidade:<n>` | Quantas detecções em 60s antes de punir. |
| `limite protecao:<…> valor:<n>` | Altera os limites (velocidade, ping, % de acerto…). |
| `preset tipo:<…>` | Configuração pronta: **Padrão**, **Leve** (só avisos), **Roleplay**, **DM/TDM** ou **Rigoroso** (ban na primeira detecção de cheat óbvio). |
| `restaurar` | Volta tudo para o padrão. |
| `exportar` | Baixa a configuração num `.json` (backup ou para copiar para outro servidor). |
| `importar arquivo:<.json>` | Aplica um arquivo exportado. Os valores são validados antes de aplicar. |

**`/ac moderacao`**
| Subcomando | Descrição |
|---|---|
| `online` | Lista os jogadores online, com ID, nick, ping e score, consultando o servidor na hora. |
| `kick id:<id>` | Kicka um jogador. |
| `pm id:<id> mensagem:<…>` | Mensagem privada no jogo. |
| `congelar` / `descongelar id:<id>` | Trava ou destrava o jogador. |
| `anunciar mensagem:<…>` | Mensagem do AC para todos no jogo. |
| `bans` | Bans aplicados pelo AC (nick, IP, motivo, quando expira), com botões **Desbanir** e paginação. |
| `desbanir ip:<ip>` | `unbanip` + `reloadbans`. O ban correspondente também é marcado como desfeito. |

**`/ac servidor`**
| Subcomando | Descrição |
|---|---|
| `lista` / `usar id:<IDF>` | Seus servidores; escolher qual os comandos configuram. |
| `nome [nome]` | Dá um apelido ao servidor (atualiza o `donos.json`). |
| `logs canal:<#canal>` | Canal das detecções, alertas e resumos. |
| `intervalo segundos:<n>` | Frequência com que o servidor busca a configuração (3–300s). |
| `alertas ativo:<…>` | Avisa no canal quando o servidor **cai** ou **volta**. Vem ligado. |
| `resumo ativo:<…>` | Resumo diário das últimas 24h, à meia-noite (`AC_TIMEZONE`, padrão America/Sao_Paulo). |
| `banduracao horas:<n>` | Duração dos novos bans do AC. Quando vencem, o bot desbane sozinho. `0` = permanente. |
| `auditoria` | As últimas 15 alterações: quem mudou o quê e quando. |
| `notificacoes modo:<…>` | Onde receber os alertas de segurança: DM, canal, ambos ou desligado. |
| `novachave` / `logout` | Novo token de acesso (o servidor recebe sozinho), sair do servidor. *(só dono)* |

**`/ac imune adicionar/remover/listar`** e **`/ac donos adicionar/remover/listar`**: nicks ignorados pelo AC e quem pode configurar o servidor.

**Permissões** (cada cliente só enxerga e configura o próprio servidor):
- **Donos** são quem fez login com a chave. Eles podem tudo.
- **Admins e cargos** adicionados pelos donos podem configurar proteções e moderar.
- `AC_BOT_ADMIN_IDS` no `.env` dá acesso total a todos os servidores (suporte do projeto).

As alterações chegam ao servidor em até `intervalo` segundos (padrão 10), **sem reiniciar o gamemode**. Se o bot cair, o servidor continua usando a última configuração recebida.

## 🔔 Notificações de segurança

O bot avisa os **donos** de cada servidor, por DM e no canal de logs, sempre com base em eventos reais:

**Ataques e abuso**
| Notificação | Quando |
|---|---|
| 🚨 **Suposto ataque detectado** | 15 ou mais detecções em 5 minutos. |
| 🛡️ **Ataque de bots, RCON ou crasher** | Flood de conexões ou reconexões, NPC falso, crasher ou força bruta no RCON. |
| 🔐 **Tentativa de acesso bloqueada** | 10 tokens errados usando o ID do servidor em 10 minutos. |
| 🚨 **Token sendo usado em dois lugares** | O token aparece em dois IPs alternando ao mesmo tempo (vazamento). Vem com o botão **Gerar novo token**. |
| 🌐 **Servidor conectado de outro IP** | O servidor passou a se conectar de um endereço novo. |

**Jogadores**
| Notificação | Quando |
|---|---|
| 🕵️ **Possível evasão de ban** | Um IP banido pelo EagleEYE voltou com outro nick. Os admins no jogo também são avisados. |
| 🔁 **Jogador reincidente** | O mesmo nick foi punido 3 vezes em 24 horas. |
| 🔨 **Muitos bans em pouco tempo** | 5 bans ou mais em 5 minutos. |
| 🤔 **Possível falso positivo** | Uma proteção puniu 8 jogadores diferentes em 5 minutos. Vem com o botão **Mudar para aviso**. |

**Configuração e saúde do servidor**
| Notificação | Quando |
|---|---|
| ⚠️ **Servidor desprotegido** | Online há 30 minutos sem o anti-cheat confirmado, desligado, ou com menos da metade das proteções. Vem com um botão para resolver. |
| ⚠️ **Proteções essenciais desligadas** | Dinheiro, armas, jetpack, crasher, RCON, fake kill, airbreak, velocidade ou godmode desligadas. Vem com um botão para religar. |
| 🔴 **Servidor fora do ar** | Mais de 10 minutos sem contato com o bot. |
| ⏳ **Configuração não aplicada** | Online, mas há 30 minutos sem aplicar as mudanças feitas no Discord. |
| ⬆️ **Include desatualizado** | O servidor usa uma versão do `eagleeye.inc` mais antiga que a atual. |
| 🔑 **Senha do RCON fraca** | Menos de 8 caracteres ou uma senha padrão. O include só envia "fraca: sim/não", nunca a senha. |
| 📭 **Sem canal de logs** | O anti-cheat está ativo, mas sem canal para as detecções. |
| 👤 **Novo acesso** / 🔑 **Token trocado** / ⚙️ **Mudança importante** | Outra pessoa fez login, trocou o token, desligou o anti-cheat, aplicou um preset, restaurou ou importou a configuração, ou mexeu nas permissões. |
| 📊 **Relatório semanal** | A cada 7 dias: a nota de segurança, as detecções, os kicks, os bans e o que falta corrigir. |

Exemplo:
> Olá, @dono! Seu servidor **Drizzie RP** teve um suposto ataque detectado: **18 detecções em 5 minutos**. ✅ Conseguimos conter o ataque: **18** jogador(es) foram kickados pelo EagleEYE.

A mensagem só diz **"conseguimos conter"** quando o EagleEYE de fato puniu ou bloqueou alguém. Se as proteções estiverem em modo aviso, ela diz isso e sugere mudar para kick. Cada tipo de aviso tem um intervalo mínimo para não virar spam.

**Verificação de segurança:** `/ac seguranca` mostra a nota de **0 a 100** do servidor, com cada item verificado (anti-cheat ligado, proteções essenciais, punição, cobertura, canal de logs, versão do include, senha do RCON, notificações e sincronização) e botões para corrigir.

Configure com `/ac servidor notificacoes modo:` (`ambos`, `dm`, `canal` ou `desligado`). Se a DM do dono estiver fechada, a notificação vai para o canal de logs com menção.

No jogo, o include avisa no console e para os admins online:
- ataques contidos (bots, RCON, crasher);
- quando o anti-cheat é desligado ou religado pelo Discord;
- um lembrete a cada 10 minutos enquanto o servidor estiver desprotegido.

### Central de alertas da equipe
O canal `AC_ALERT_CHANNEL_ID` (padrão `1569638075166892072`) recebe os alertas de **todos** os servidores:
- todas as notificações de segurança (menos o relatório semanal), com o servidor e os donos;
- servidor caiu ou voltou;
- servidor novo cadastrado.

Ninguém é marcado nesse canal. Ele recebe os alertas mesmo que o dono tenha desligado as notificações dele. Para desligar a central, deixe a variável vazia.

## 🛡️ Proteção da API (anti-DDoS)

A API que os servidores do jogo acessam tem proteção contra abuso na camada HTTP (`bot/src/guard.js`):

| Proteção | Como funciona | Padrão |
|---|---|---|
| Limite por IP | Cada IP pode fazer um número limitado de requisições por minuto, com um pico permitido. Acima disso recebe `429`. | 120/min, pico 60 (`AC_RATE_LIMIT`, `AC_RATE_BURST`) |
| Bloqueio automático | IP que continua insistindo depois do `429` fica bloqueado. | 20 negadas/min → 10 min |
| Anti-adivinhação de token | Muitos tokens errados seguidos bloqueiam o IP. | 20 erros em 10 min → 30 min |
| Anti-lixo na memória | Cada IP só pode deixar poucos tokens novos "aguardando login" por hora. | 5/hora |
| Limite por servidor | Um servidor (token) não pode fazer requisições em excesso. | 180/min |
| Conexões lentas (slowloris) | Conexões que não terminam de enviar o pedido são derrubadas. | 10s cabeçalhos, 15s total |
| Tamanhos | Corpo, cabeçalhos e URL acima do limite são recusados na hora. | 4 KB / 8 KB / 2 KB |
| Conexões simultâneas | Teto de conexões abertas ao mesmo tempo. | 1000 (`AC_MAX_CONNECTIONS`) |

Um servidor do jogo faz entre 6 e 20 requisições por minuto, bem abaixo dos limites. Se vários servidores saírem do mesmo IP (a mesma hospedagem), aumente `AC_RATE_LIMIT`.

> **DDoS volumétrico** (inundação de rede muito grande) não tem como ser barrado por nenhum app: precisa ser filtrado antes, na rede. Na Discloud quem faz isso é a **Cloudflare**, que já fica na frente do site. Com `AC_TRUST_PROXY=true`, o bot usa o IP real enviado pela Cloudflare (`CF-Connecting-IP`) para aplicar os limites.

## 🧩 API para o gamemode

```pawn
// Callbacks opcionais
public OnEagleEyeDetect(playerid, code, const detail[])            { return 1; } // retorne 0 para ignorar
public OnEagleEyePunish(playerid, code, action, const detail[])    { return 0; } // retorne 1 se você mesmo punir (ex.: ban no MySQL)
public OnEagleEyeAdminCheck(playerid)                              { return IsPlayerAdmin(playerid); } // quem vê os avisos no jogo

// Funções
EE_GetServerId(id);                        // ID fixo do servidor
EE_SetPlayerImmune(playerid, true);        // imunidade total (ex.: admin em serviço)
EE_PositionImmunity(playerid, 3000);       // imunidade de posição por X ms (elevadores, objetos móveis…)
EE_AllowWeapon(playerid, weaponid, ammo);  // libera uma arma recebida por um meio que o AC não vê
EE_IsEnabled(EE_GODMODE);                // a proteção está ativa?
EE_GetServerMoney(playerid);               // dinheiro real (servidor)
EE_ReloadConfig();                         // força buscar a configuração agora
EE_CommandFloodCheck(playerid, cmdtext);   // para Pawn.CMD: chame em OnPlayerCommandReceived (true = bloquear)
```

Defines opcionais (antes do `#include <eagleeye>`):
- `EE_SERVER_TOKEN` (fixa o token no código), `EE_ID_FILE` (nome do arquivo em `scriptfiles`);
- `EE_TICK_MS`, `EE_HIT_WINDOW_MS`, `EE_REPORT_COOLDOWN`, `EE_COLOR`;
- `EE_KEEP_STUNT_BONUS` (por padrão o AC desliga o stunt bonus, que dá dinheiro no cliente).

## ⚠️ Possíveis falsos positivos

- **Máquinas de refrigerante e lanchonetes do singleplayer** curam no cliente. Remova-as com `RemoveBuildingForPlayer` ou desligue a proteção **Vida**.
- **Ammu-Nation e interiores do singleplayer** dão armas no cliente. Desative as entradas com `DisableInteriorEnterExits()`.
- **Pickups e checkpoints do streamer** (`CreateDynamicPickup`/`CP`) não passam pelas proteções 27 e 28. Os natives normais passam. `AddStaticPickup` é convertido em `CreatePickup` para poder ser validado.
- **Objetos móveis** (elevadores do streamer): use `EE_PositionImmunity`.
- **Sistemas de dano customizado** que alteram o dano das armas: desligue **Dano hack**.
- **Pawn.CMD**: os comandos não passam por `OnPlayerCommandText`. Use `EE_CommandFloodCheck` no `OnPlayerCommandReceived`.
- **Godmode, munição e aimbot** são heurísticas e dependem de lag e sincronização. Comece em `aviso`.
- Com lag forte, velocidade, teleporte e airbreak podem disparar. Ajuste com `/ac protecao tolerancia` e `/ac protecao limite`, ou use o preset **Leve** no começo.

Recomendação: deixe as proteções em **aviso** por alguns dias, acompanhe o canal de logs e ajuste os limites antes de passar para kick ou ban.

## 🧪 Testes do bot

```bash
cd eagleeye/bot && npm test
```
