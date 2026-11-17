# Servidor do multiplayer — Drizzie Truck

Servidor pequeno (Node.js + WebSocket) que só repassa a posição dos caminhões entre
os jogadores de uma sala (até 8). Não guarda nada: o save online fica no celular.

## Colocar no ar (Render, plano gratuito)

1. Crie uma conta em https://render.com (pode entrar com o GitHub).
2. Clique em **New → Blueprint** e escolha o repositório `drizziecity`.
   O Render lê o arquivo `render.yaml` da raiz e cria o serviço `drizzie-truck-mp`.
3. Clique em **Apply** e espere o deploy terminar (1–3 min).
4. Abra a URL do serviço (ex.: `https://drizzie-truck-mp.onrender.com`). Se aparecer
   "Drizzie Truck online: 0 jogador(es)…", está funcionando.

O jogo já vem configurado com `wss://drizzie-truck-mp.onrender.com`. Se o Render der
outro endereço, digite-o no jogo em **Multiplayer online → Servidor**.

No plano gratuito o servidor "dorme" após 15 min sem ninguém. A primeira conexão
depois disso demora até ~1 minuto (o jogo mostra "Acordando o servidor…").

## Rodar no computador (testes)

    cd truck-game/server
    npm install
    node server.js        # porta 8080 (ou PORT=xxxx)

No jogo, em **Servidor**, use `ws://IP-DO-COMPUTADOR:8080`.
