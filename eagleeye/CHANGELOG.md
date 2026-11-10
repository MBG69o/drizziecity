# 🦅 EagleEYE — Changelog

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
