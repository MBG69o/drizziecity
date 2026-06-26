# Drizzie City — Portal Oficial

Portal completo do servidor SA-MP / Open.MP com integração direta ao banco de dados do servidor.

## Tecnologias

- Node.js (Express)
- MySQL
- Tailwind CSS
- Socket.io (WebSocket)
- Discord OAuth2 + Bot
- Mercado Pago API
- EJS (templating)

## Arquitetura

```
src/
├── app.js
├── config/ (database, config central)
├── controllers/ (lógica das rotas)
├── routes/ (endpoints)
├── models/ (queries)
├── services/ (integrações)
├── helpers/ (utilitários)
├── middlewares/ (auth, validation)
├── websocket/ (socket.io)
├── bot/ (Discord bot)
├── views/ (EJS templates)
└── public/ (assets)
```

## Como usar (desenvolvimento local)

1. Copie `.env.example` para `.env` e preencha as variáveis:
   ```bash
   cp .env.example .env
   ```

2. Instale dependências:
   ```bash
   npm ci
   ```

3. Build CSS:
   ```bash
   npm run build:css
   ```

4. Execute migrações SQL (revise antes):
   ```bash
   mysql -u root -p samp < database/schema-full.sql
   ```

5. Inicie em dev:
   ```bash
   npm run dev
   ```

   Ou com Docker:
   ```bash
   docker-compose up --build
   ```

## Endpoints principais

- `GET /` — Home
- `POST /auth/login` — Login (nickname + senha)
- `GET /auth/discord` — Redirect para Discord OAuth
- `GET /player/me` — Painel do jogador
- `GET /shop` — Catálogo de produtos
- `POST /shop/checkout` — Criar pedido
- `POST /shop/webhook/mercadopago` — Webhook MP
- `GET /admin` — Painel admin
- `GET /api/docs` — Swagger UI

## Configuração importante

### Discord Bot
1. Crie uma aplicação em https://discord.com/developers/applications
2. Adicione um bot e copie o token para `DISCORD_BOT_TOKEN` em `.env`
3. Configure scopes: `identify`, `email`
4. Defina `DISCORD_REDIRECT_URI` com seu domínio/ngrok
5. Para tickets, crie um canal e defina `DISCORD_TICKETS_CHANNEL_ID`

### Mercado Pago
1. Configure credenciais de teste/produção em `.env` (MP_ACCESS_TOKEN, MP_PUBLIC_KEY)
2. Configure webhook em painel MP: `POST /shop/webhook/mercadopago`
3. Teste em sandbox antes de produção

### SMTP (Email)
1. Defina `SMTP_*` em `.env` para reset de senha

### Algoritmo de senha
**CRÍTICO**: Adapte `src/helpers/password.helper.js` para casar com o algoritmo do seu gamemode.
Se não souber qual é, envie um sample da tabela Accounts (hash + salt) para análise.

## Segurança em produção

- Habilite HTTPS e cookies seguros (ajustar `secure: true` em session config)
- Use Redis para sessões em vez de MySQL (configurable)
- Configure CORS corretamente (ALLOWED_ORIGINS)
- Valide webhooks do Mercado Pago (implementar verificação de signature)
- Remova rotas de dev antes de publicar
- Use secret manager para credenciais (não em .env)
- Faça backups regulares do banco

## Notas

- `shop.service.applyPayment` contém lógica genérica de aplicação de benefícios. Adapte as queries para seu esquema real.
- `password.helper.js` é um adapter — ajuste conforme o algoritmo do gamemode.
- Teste tudo em dev antes de produção.

## Licença

Privado
