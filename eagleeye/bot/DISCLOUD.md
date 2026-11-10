# 🦅 EagleEYE na Discloud (como site)

O EagleEYE roda como **um único app**: ele é ao mesmo tempo a **API** que os servidores SA-MP/open.mp acessam e o **bot do Discord**. Na Discloud ele precisa ser publicado como **site**. Um app do tipo "bot" não recebe conexões de fora, e aí os servidores do jogo não conseguem falar com ele.

> Não consegui consultar a documentação da Discloud ao preparar este guia. Confira no painel ou na documentação deles os itens marcados com ⚠️.

## 1. Arquivos para enviar
Envie o `.zip` com o **conteúdo** da pasta `eagleeye/bot`, sem `node_modules`, `data` e `test`:
```
discloud.config
package.json
package-lock.json
src/
```
A Discloud instala as dependências a partir do `package.json`.

## 2. `discloud.config`
```
NAME=EagleEYE
TYPE=site
ID=eagleeye
MAIN=src/index.js
RAM=512
AUTORESTART=true
VERSION=latest
```
- `TYPE=site`: faz a Discloud expor o app na internet.
- `ID=eagleeye`: o **subdomínio** do site. Troque por um nome livre. **Use o domínio que o botão "Abrir" do painel abre** (no nosso caso foi `eagleeye.discloud.dev`; o campo "Domínio" mostrava `.app`, que não funcionou). ⚠️ Confirme se o seu plano permite sites e qual é a RAM mínima para eles.
- Se você já tem o app como "bot", crie um **app novo** como site, ou altere o tipo, e desligue o antigo para não ficar com dois bots no Discord ao mesmo tempo.

## 3. Variáveis (menu **Variáveis** no painel)
| Variável | Valor |
|---|---|
| `DISCORD_TOKEN` | token do bot |
| `DISCORD_GUILD_ID` | ID do Discord do projeto |
| `AC_BOT_ADMIN_IDS` | seu ID do Discord (opcional) |
| `AC_API_HOST` | `0.0.0.0` |
| `AC_API_PORT` | `8080` (porta que a Discloud usa para sites; com outra porta o site dá erro 502) |
| `AC_TRUST_PROXY` | `true` (a Discloud fica na frente do app; assim o bot vê o IP real dos servidores) |
| `AC_STATUS_INTERVAL` | `30` (opcional: segundos entre as trocas de status do bot) |
| `AC_RATE_LIMIT` | `120` (opcional: requisições por minuto por IP na API) |
| `AC_RATE_BURST` | `60` (opcional: pico de requisições por IP) |
| `AC_MAX_CONNECTIONS` | `1000` (opcional: conexões simultâneas na API) |

## 4. Testar a API
No navegador, abra `https://eagleeye.discloud.dev`. Deve aparecer a página **"EagleEYE API"**.

Depois, **a partir da máquina do servidor SA-MP**, teste os dois endereços:
```bash
curl "http://eagleeye.discloud.dev/ac/config?id=x&token=x"
curl "https://eagleeye.discloud.dev/ac/config?id=x&token=x"
```
O esperado é a resposta `unauthorized`.

## 5. Configurar o gamemode
Use a forma que funcionou no teste:

- **O `http://` respondeu `unauthorized`** (sem redirecionar): funciona no SA-MP e no open.mp. ✅ Testado: a Discloud aceita HTTP simples.
  ```pawn
  #define EE_API_HOST "eagleeye.discloud.dev"
  #include <eagleeye>
  ```
- **Só o `https://` funcionou:**
  - **open.mp:** tente
    ```pawn
    #define EE_API_HOST "https://eagleeye.discloud.dev"
    #include <eagleeye>
    ```
    Algumas versões do open.mp aceitam HTTPS no `HTTP()`. Se o console continuar mostrando `Nao foi possivel falar com o bot`, a sua versão não aceita.
  - **SA-MP 0.3.7:** o `HTTP()` não faz HTTPS, então não há como usar só HTTPS. Nesse caso o bot precisa ficar numa VPS com HTTP simples (veja o README principal).

Recompile o gamemode e ligue o servidor. O console mostra o token, e você faz `/ac login token:...` no Discord do projeto.

## 6. Dados e backup
Os servidores, donos, bans e o histórico ficam na pasta `data/` dentro do app.
- Use o botão **Backup** da Discloud com frequência.
- ⚠️ Confira se um **Commit** ou **Rebuild** apaga arquivos criados pelo app. Se apagar, faça backup antes de enviar uma versão nova. Se a pasta `data/` se perder, cada dono precisa refazer o `/ac login` (o token dos servidores continua o mesmo).
