# 🦅 EagleEYE — Changelog

## v2.6.0 — 12/11/2026

### 🕵️ Endpoints da API ocultos e protegidos
- **Caminho secreto** (`AC_PATH_SECRET`): os endpoints dos servidores de jogo passam a viver sob um prefixo secreto (ex.: `/x7f3k9q2/ac/config`). Sem ele, a raiz e os caminhos padrão respondem só `OK`/`404`, **sem revelar que ali roda um EagleEYE**.
- **Chave de aplicação** (`AC_APP_KEY`): toda requisição de servidor precisa mandar `&k=<chave>`; sem ela ou errada, **404 neutro** (nem confirma que o endpoint existe). Comparação em tempo constante.
- **Respostas neutras**: a página inicial deixa de anunciar a API quando o caminho secreto está ativo.
- Suporte nas três camadas: include (`EE_API_PATH` / `EE_API_KEY`), plugin (segredos **ofuscados** `api_path` / `api_key` no binário — o cliente não vê) e bot. No plugin, por ser compilado, o host, o caminho e a chave ficam realmente escondidos.

## v2.5.0 — 12/11/2026

### 🌐 Site de gerenciamento completo (login em 2 etapas)
- Um site no navegador (`/app`, servido pela própria API) onde o cliente **ativa/desliga proteções, ajusta ação/tolerância/limite, liga/desliga o anti-cheat, manda aviso no jogo e vê as detecções recentes e a reputação dos jogadores** — tudo sem precisar do Discord.
- **Login seguro em 2 etapas:** o cliente informa o **token do servidor** e recebe um **código de 6 dígitos válido por 5 minutos**, entregue **no console do servidor** (comando `authcode`) e, se houver dono vinculado, **na DM do Discord**. Só com o código o login é concluído.
- Código de uso único, no máximo 5 tentativas; sessão deslizante de 2h; escopo restrito aos servidores do próprio cliente (um cliente nunca vê o de outro). As mudanças chegam ao servidor em segundos, como nos comandos do Discord.

## v2.4.0 — 12/11/2026

### 🖥️ Dashboard web ao vivo
- Painel no navegador, servido pela mesma API da Discloud, com **todos os seus servidores em tempo real**: online/offline, jogadores, detecções das últimas 24h, nota de segurança e os piores jogadores por reputação. Atualiza sozinho a cada 8s.
- Acesso por **link pessoal e secreto** gerado no Discord com **`/ac painelweb`** (token de leitura, vale 30 dias; gerar de novo invalida o anterior).
- Defina `AC_PUBLIC_URL` (ex.: `https://eagleeye.discloud.dev`) para o link já sair com o domínio certo.

### 🏷️ Selo público "Protegido por EagleEYE" + página de status
- **`/ac selo publico`** liga uma página de status pública e um **selo em imagem (SVG)** para o dono exibir no fórum/site do servidor. **`/ac selo ver`** entrega o código pronto (BBCode e HTML).
- A página e o selo **não expõem nada sensível**: só nome, online/offline, anti-cheat ligado, nota e nº de jogadores. Desligado por padrão (`/ac selo privado`).

### 🧠 Trust Score (reputação de jogador)
- Cada jogador ganha uma **nota de confiança de 0 a 100**, por dono e compartilhada entre os servidores dele: cai a cada detecção (aviso −2, kick −8, ban −25) e sobe sozinha com o tempo limpo.
- Classificação 🟢 confiável / 🟡 observação / 🟠 risco / 🔴 crítico, visível em **`/ac jogador`** e no dashboard (piores reputações).

## v2.3.0 — 12/11/2026

### 🛡️ 8 novas proteções (agora 42 no total)
- **Nick inválido** — nome com caracteres impossíveis ou trocado no cliente (spoof). Checado automaticamente na conexão.
- **Animação crasher** — animação fora da faixa válida usada para travar os outros jogadores. Checada no `OnPlayerUpdate`.
- **Skin inválido** — modelo de skin fora da faixa válida (crasher/skin hack). Checado no spawn.
- **Spam de objeto** — criação/anexo de objetos em excesso. Helper `EE_ObjectSpamCheck(playerid)`.
- **Flood de PM** — mensagens privadas entre jogadores em excesso. Helper `EE_PMFloodCheck(playerid)`.
- **Spam de buzina** — buzina/sirene em excesso. Helper `EE_HornCheck(playerid)`.
- **Troca de interior** — mudança de interior/virtual world sem o servidor. Sem falso positivo: o include embrulha `SetPlayerInterior`/`SetPlayerVirtualWorld`.
- **Anti-freeze** — mover-se enquanto congelado pelo servidor. O include embrulha `TogglePlayerControllable`.
- Todas configuráveis pelo Discord (ativar, ação, tolerância, limite) e portadas para o plugin em C++ (`ee_cat_extra`, com testes).

### 🚫 Sistema de blacklist global (ban cruzado)
- Lista negra **por dono, compartilhada entre todos os seus servidores**. `/ac blacklist adicionar | remover | listar` (por nick ou IP).
- Ao adicionar, o EagleEYE **bane na hora em todos os seus servidores online** e bloqueia novas conexões do IP (novos comandos `banip` e `kickname` no include).
- A lista **não vaza entre clientes**: cada dono só vê e usa a própria.

### 🛡️ Modo escudo (lockdown automático)
- Quando um servidor sofre uma **rajada de detecções** (muitos jogadores ou muito volume em 5 min), o EagleEYE **endurece sozinho** as proteções abusadas (ban imediato, tolerância 1) por ~10 min e avisa no canal.
- **Reverte automaticamente** para a sua configuração quando o ataque passa.

## v2.2.0 — 10/11/2026

### 🔑 Login com token de acesso
- **O servidor gera o próprio token** na primeira inicialização (`EE-XXXXXX-XXXX-XXXX-XXXX-XXXX`), salva em `scriptfiles/eagleeye_servidor.cfg` e mostra no console. Não existe mais etapa de registro.
- **Login só com o token:** `/ac login token:...`. Só funciona para servidores que já se conectaram ao bot, então ninguém consegue "reservar" um token inventado.
- **`/ac servidor novachave`** gera um token novo. O servidor recebe sozinho, e o antigo deixa de funcionar.
- **Servidor e bot podem ficar em máquinas diferentes:** basta o `EE_API_HOST` apontar para o endereço público do bot.

### 🖥️ Vários servidores e vários clientes
- Todos os clientes usam o bot no mesmo Discord, **sem conflito**: cada um só vê e configura os próprios servidores.
- **Quem tem mais de um servidor** recebe um menu, visível só para ele, para escolher o servidor a cada comando.

### 🔔 Notificações de segurança (DM e canal de logs)
- 🚨 **Suposto ataque detectado** (rajada de detecções) e 🛡️ **ataque de bots, RCON ou crasher**. A mensagem só diz "conseguimos conter" quando o EagleEYE realmente puniu ou bloqueou alguém.
- 🔐 **Tentativa de acesso** com tokens inválidos.
- 🚨 **Token usado em dois lugares** e 🌐 **servidor conectado de outro IP**, com o botão **Gerar novo token**.
- 🕵️ **Possível evasão de ban** (IP banido voltou com outro nick), 🔁 **jogador reincidente**, 🔨 **bans em massa** e 🤔 **possível falso positivo**, com o botão **Mudar para aviso**.
- ⚠️ **Servidor desprotegido**, **proteções essenciais desligadas**, 🔴 **servidor fora do ar**, ⏳ **configuração não aplicada**, ⬆️ **include desatualizado**, 🔑 **senha do RCON fraca** e 📭 **sem canal de logs**.
- 👤 **Novo acesso**, 🔑 **token trocado** e ⚙️ **mudanças importantes** feitas por outra pessoa.
- 📊 **Relatório semanal** com a nota de segurança.
- **`/ac servidor notificacoes`** escolhe onde receber: DM, canal, os dois ou desligado. Os botões funcionam direto na DM.

### 🛡️ Verificação de segurança
- **`/ac seguranca`** mostra a nota de **0 a 100** do servidor, com cada item verificado e botões para corrigir.

### 📡 Central de alertas da equipe
- O canal da equipe recebe os alertas de **todos** os servidores: segurança, servidor caiu/voltou e servidor novo cadastrado. Ninguém é marcado.

### 🧱 Proteção da API (anti-DDoS)
- Limite de requisições por IP, com bloqueio automático de quem insiste.
- Bloqueio de quem tenta adivinhar tokens.
- Limite de tokens novos por IP e de requisições por servidor.
- Proteção contra conexões lentas (*slowloris*), com limites de tamanho e de conexões simultâneas.
- Leitura do IP real atrás da Cloudflare.

### 🎮 Include (`eagleeye.inc` v2.2.0)
- Gera e guarda o token de acesso.
- Envia a versão do include e se a **senha do RCON é fraca**. A senha nunca é enviada.
- Avisos de segurança no console e para os admins no jogo: ataque contido, anti-cheat desligado ou religado, senha do RCON fraca e evasão de ban.
- Corrigidos os avisos `Deprecated console variable "hostname"/"port"` no open.mp.
- Removidos todos os comentários do código.

### 🤖 Bot
- **Status com dados reais:** "🦅 Vigiando N servidores", "👥 Analisando N jogadores simultaneamente", ameaças nas últimas 24h e bans.
- **Pronto para a Discloud como site:** `discloud.config`, página inicial, `/health` e guia `DISCLOUD.md`.

### ⬆️ Como atualizar
1. **Bot (Discloud):** faça **Backup**, envie o zip pelo **Commit** e reinicie. Confira as variáveis `AC_API_PORT=8080` e `AC_TRUST_PROXY=true`.
2. **Gamemode:** troque o `eagleeye.inc` (e o `eagleeye_fs.inc`), defina o `#define EE_API_HOST "eagleeye.discloud.dev"` e recompile.
3. **Pawn.CMD:** chame `EE_CommandFloodCheck(playerid, params)` no `OnPlayerCommandReceived`.

---

## v2.1.0 — 09/11/2026
- Renomeado para **EagleEYE**: includes `eagleeye.inc`/`eagleeye_fs.inc`, funções `EE_*` e callbacks `OnEagleEye*`.
- Moderação pelo Discord: online, kick, pm, congelar, anunciar, bans e desbanir.
- Bans com duração e desban automático, presets (Padrão, Leve, Roleplay, DM, Rigoroso), exportar e importar configuração.
- `/ac jogador`, `/ac estatisticas`, alertas de queda, resumo diário e auditoria.
- `donos.json`, confirmação de ativação pelo dono e bot restrito ao Discord do projeto.

## v2.0.0 — 08/11/2026
- 34 proteções em 5 categorias, painel por categoria e autocomplete.
- Vários servidores no mesmo bot, cada um com ID fixo.

## v1.0.0 — 08/11/2026
- Primeira versão: 19 proteções configuráveis pelo Discord.
