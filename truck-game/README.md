# 🚛 Drizzie Truck — Rotas & Cargas

Jogo mobile de caminhão em 3D para **Android 6.0 (API 23) até o Android 15 (API 35)**.
Faça entregas pela cidade, suba de nível, compre caminhões mais fortes e libere cargas de **1 t até 85 t**.

> **Versão de testes:** tudo liberado — nível máximo, todos os caminhões na garagem, R$ 10 milhões
> (repostos automaticamente), cargas sem limite de capacidade e cargas de carreta/bitrem também em caminhões
> rígidos (puxadas como reboque por cambão no engate traseiro). Desligue com `TEST_MODE = false` em `web/src/main.js`.

## Como jogar

| Ação | Celular | Teclado (teste no PC) |
|---|---|---|
| Ligar o motor | botão **Ligar Motor** | `E` |
| Acelerar / Frear | pedais à direita | `W`/`↑` e `S`/`↓`/`Espaço` |
| Câmbio | seletor **D / N / R** (ou automático em Ajustes) | `R` ré, `N` neutro |
| Direção | **volante** (arraste), setas ou inclinação do celular | `A` `D` / `←` `→` |
| Freio de mão / Faróis / Freio-motor | **P** / **◐** / **FM** sob o velocímetro | `P` / `L` / `B` |
| Abastecer, trocar estepe, guincho | botão que aparece no centro quando disponível | `F` |
| Pisca-pisca (seta) | setas ◀ ▶ acima do volante (desligam sozinhas após a curva), ⚠ alerta | `Z` / `X` |
| Buzina / Câmera / Mapa / Menu | centro do volante / 🎥 / toque no minimapa / ☰ | `H` / `C` / `M` / `Esc` |

1. Abra o **menu ☰ → Fretes** e aceite uma carga.
2. Siga a seta verde e a rota laranja do GPS até o local de **coleta** e pare dentro da área amarela.
3. Leve a carga até o **destino** antes do prazo. Batidas avariam a carga e reduzem o pagamento.
4. Ganhe dinheiro + XP, suba de nível e compre caminhões na **Garagem 🚚**.

### Física

* Cada caminhão tem bitola, altura do centro de gravidade, tração (4x2, 6x2, 6x4, 8x4), aderência dos pneus,
  esterçamento e inércia próprios; cada carreta/carga muda massa e centro de gravidade (contêiner e
  transformador altos, bobinas baixas, tanque com líquido que balança).
* Curva rápida demais: o caminhão **sai de frente** (derrapa e perde velocidade) ou, se a carga for alta,
  **tomba**. O tombamento é simulado como corpo rígido girando sobre os pneus de fora: as rodas internas
  levantam, e se a força lateral diminuir a tempo o caminhão volta ao chão (com tranco); se passar do ângulo
  crítico, a gravidade termina de derrubar. A carreta (mais alta) costuma tombar primeiro e arrasta o cavalo
  pela quinta-roda. Deitado, o conjunto arrasta até parar, o motor apaga e é preciso chamar o guincho pesado. Tração e frenagem limitadas pelo piso (na lama o 6x2 carregado patina).
* **Relevo**: a gravidade age sempre — o caminhão perde força e velocidade nas subidas (carregado sobe devagar)
  e embala nas descidas, podendo passar do limitador. Parado na rampa sem freio, desce de ré.
* **Freio-motor (FM)** segura o caminhão nas descidas. Descer só no pedal aquece os freios, que perdem eficiência
  (aviso "freios superaquecidos").
* **Lama**: as estradas de lama têm poças fundas. Parar ou patinar dentro delas faz o caminhão afundar e atolar —
  aí só com o **guincho** (pago). Passe embalado e com aceleração leve.
* **Pneu furado**: chance maior em cascalho/terra, alta velocidade, excesso de peso e batidas. Puxa para um lado
  e limita a 60 km/h. Pare e use o **estepe** (um por vez) ou vá a um posto (**borracharia**).
* **Combustível**: cada caminhão tem tanque e consumo próprios (autonomia da Mini Carga ~27 km até ~150 km do
  Colosso, na escala do mapa). Consumo cresce com carga, subidas e acelerador. **Postos** à beira das rodovias
  (⛽ no mapa) e o Posto Rodoviário da cidade abastecem e consertam pneus. Sem diesel, o motor apaga.
* **Bitrem**: duas carretas articuladas (soja, toras e combustível — até 50 t), exige cavalo 6x4 ou 8x4.

### Progressão

* **19 tipos de carga**: encomendas (1 t), medicamentos, eletrônicos, hortifrúti, móveis, bebidas, ração,
  trator agrícola, toras, contêiner, soja a granel, combustível, cimento, bobinas de aço, vigas, escavadeira,
  transformador (56 t), pá eólica (62 t) e prensa industrial (85 t).
* **7 caminhões** — Cavalo 360 e Rodomax 480 usam o modelo Volvo FH 460 (Rick Modding); cargas de prancha
  usam o reboque prancha com texturas PBR. Mini Carga 1.0 e Leve Baú 4.5 usam modelos 3D importados (Labo e Canter, fornecidos
  pelo dono do projeto em FBX/OBJ, convertidos para GLB otimizado); os demais são modelados no código. Caminhões com potência e capacidade diferentes — de um VUC 160 cv (5 t) ao Colosso 750 8x4 (90 t).
  Uma carga só fica disponível quando o jogador tem **nível** suficiente **e** um caminhão **forte** o bastante.
* Implementos diferentes por carga: baú, tanque, graneleiro, prancha (madeira/contêiner/bobinas/vigas) e
  prancha rebaixada para cargas indivisíveis. A carreta é articulada (física de engate real).
* Física baseada em potência × massa: com 60 t o caminhão acelera e freia de forma bem diferente de vazio.
* HUD limpo: minimapa, frete em uma linha, um único mostrador (velocidade, rotação, marcha, combustível).
* Bônus por entrega no prazo, multa por atraso, avarias, 30 níveis, estatísticas e salvamento automático.

## Mundo

* **Terreno contínuo** com serras, vales e colinas (ruído fractal), encostas rochosas, vale do rio escavado e
  litoral descendo ao mar; as estradas acompanham o relevo com rampa máxima, cortes e aterros.
* **Tipos de estrada**: asfalto (rodovias), **calçamento** (ruas de Vila Serrana e Monte Alto), **cascalho**
  (Estrada da Olaria), **terra** (Estrada do Café) e **lama** (Trilha do Rio Escuro) — cada piso com aderência,
  resistência ao rolamento e trepidação próprias.

* **Mapa de ~17 x 12 km com 10 cidades** — Drizzie City e Santa Luzia (metrópoles), Rio Claro, Nova Esperança,
  Campo Verde e Vila Serrana (interior), Porto Azul e Lagoa Dourada (litoral com porto), Monte Alto e Pedra Branca
  (serra, calçamento). Saídas para outros estados pela BR-116 (Divisa Norte) e BR-364 (Divisa Leste), terminando
  no posto fiscal. Fretes de até ~22 km (40–45 min ao volante), com prazo proporcional.
* **20 estradas**: BR-101, SP-280, BR-040, RS-030, BR-153, BR-277, BR-376, BR-470, SC-401, BR-282, BR-364,
  SP-055, Rodovia do Sol, BR-116 e estradas de terra, cascalho e lama até fazendas, usina e aquicultura.
* **Ruas realistas**: asfalto com remendos, trincas, manchas de óleo, trilhas de pneu e pintura gasta; sarjeta,
  meio-fio, calçada de pedra portuguesa (centro) ou bloquete (bairros), árvores na calçada, faixas de pedestre,
  faixa de retenção, setas, "PARE" pintado + placa, bocas de lobo e tampas de bueiro.
* **Semáforos funcionando** nas metrópoles, portos, Rio Claro e Campo Verde (verde/amarelo/vermelho por eixo);
  os carros param no vermelho e respeitam o PARE. Avançar o vermelho gera multa de R$ 293,47.
* **Tráfego com modelos detalhados**: sedã, hatch, SUV, picape cabine dupla, van, ônibus urbano e caminhão leve —
  carroceria com caixas de roda, estufa de vidro, colunas, para-choques, grade, retrovisores, placa Mercosul,
  faróis, lanternas e rodas de liga leve; cores de frota real.
* **Faróis**: desligado / baixo / alto (botão ◐ sob o velocímetro ou `L`). O alto ilumina bem mais longe.
* **Clima**: sol, nublado, chuva e tempestade (automático ou fixo em Ajustes). Chuva com gotas, céu escuro e
  menos visibilidade; pista molhada brilha e perde aderência (terra vira barro, a lama fica mais funda);
  tempestade com raios, clarões e trovões que chegam com atraso pela distância. **Alagamentos** nas baixadas
  perto do rio/litoral e em cruzamentos das cidades: a água sobe com a chuva, freia o caminhão e pode
  **afogar o motor** (caminhões leves a partir de ~55 cm, pesados ~95 cm).
* **Córregos e vaus**: Ribeirão das Pedras, Rio Pequeno, Córrego Fundo, Ribeirão do Café e Córrego Escuro.
  Estradas de terra passam **por dentro d'água** (vau, ~45 cm — mais fundo depois de chuva forte, pode afogar o
  motor) ou por **pontes de madeira** (tábuas, longarinas, guarda-corpo e estacas); no asfalto, pontes baixas de
  concreto. Placas de aviso antes de cada travessia. Novos locais: Fazenda Três Rios (Estrada do Vau), Laticínio
  Ponte Velha e Granja Córrego Fundo; novas cargas: leite em tanque, queijos, frango congelado e ração para granja.
* **Acoplamento de carretas**: nos fretes de carreta, a carreta carregada espera no pátio apoiada nos pés de apoio.
  Dê ré com o cavalo alinhado até o pino-rei (o painel mostra distância e ângulo), pare e o engate é feito
  (mangueiras de ar/elétrica). No destino a carreta é desacoplada e fica no pátio do cliente.
* **Cabine em 1ª pessoa** (câmera 🎥 → Cabine): painel com quadro de instrumentos funcionando (velocímetro,
  conta-giros, marcha, combustível, relógio e luzes-espia), volante que gira com as mãos do motorista,
  braços, colunas, portas, para-sol, GPS no painel, capô nos bicudos, retrovisores externos com a imagem real
  de trás (qualidade média/alta), limpadores e gotas de chuva no para-brisa. Arraste a tela para olhar em volta.
* Estradas atravessando **mata fechada**, **pontes sobre o rio** com pilares, lavouras, morros com
  aerogeradores e o mar ao sul.
* GPS calcula a rota por ruas e rodovias entre as cidades.

## Gráficos e desempenho

* **Ciclo de dia e noite**: entardecer, noite estrelada com luar, janelas dos prédios acesas, postes com
  iluminação no asfalto, faróis do caminhão e do tráfego (facho de luz real no modo Médio/Ultra).
* Menu inicial sobre a própria cena 3D (caminhão na garagem com câmera cinematográfica).
* Caminhões cara-chata e bicudo modelados com cabine arredondada, grade, faróis, retrovisores, degraus,
  tanques, escapamentos, quinta roda, mangueiras e rodas com pneu/aro em perfil real; pintura com verniz e
  reflexos do ambiente (modos Médio/Ultra), poeira e desgaste.
* Estilos de velocímetro (Analógico, Digital, Esportivo, Clássico), cor do painel e tamanho dos controles.
* Interface em estilo simulador: volante, câmbio D/N/R, pedais, velocímetro e conta-giros analógicos.

* Texturas **HD geradas proceduralmente** (asfalto, faixas, fachadas, concreto, grama…) com *mipmaps* e
  filtragem anisotrópica — nítidas de perto e sem serrilhado/pixelização à distância. APK leve (sem imagens).
* Antisserrilhamento (MSAA) e renderização na resolução nativa da tela.
* Cidade inteira mesclada em poucas *draw calls*, árvores/postes instanciados, colisão em grade espacial.
* **Qualidade automática** (Leve / Médio / Ultra) conforme a GPU e memória do aparelho e **resolução dinâmica**
  que se ajusta para manter o jogo fluido em celulares fracos. Sombras reais nos modos Médio/Ultra.

## Estrutura

```
truck-game/
├── web/                 # código do jogo (Three.js r162 — compatível com WebGL 1 e 2)
│   ├── src/data.js      # mapa, locais, caminhões, cargas, níveis
│   ├── src/world.js     # cidade, zonas, depósitos, vegetação, colisores
│   ├── src/truck.js     # modelos 3D dos caminhões/carretas e física
│   ├── src/traffic.js   # tráfego com IA
│   ├── src/route.js     # GPS (menor caminho)
│   ├── src/textures.js  # texturas procedurais HD
│   ├── src/audio.js     # som do motor/buzina sintetizados
│   └── src/main.js      # jogo, fretes, progressão, HUD, menus
└── android/             # app Android nativo (WebView acelerada, minSdk 23, targetSdk 35)
```

## Compilar

**Pelo GitHub Actions:** todo push em `truck-game/**` roda o workflow *Drizzie Truck - APK Android*;
baixe o artefato `DrizzieTruck-apk` (contém `DrizzieTruck.apk`).

**Localmente** (Node 18+, JDK 17 e Android SDK 35):

```bash
cd truck-game/web && npm ci && npm run build      # gera android/app/src/main/assets/game
cd ../android && ./gradlew assembleRelease          # app/build/outputs/apk/release/app-release.apk
```

Para testar no navegador: `cd truck-game/web && npm run dev` e abra `http://localhost:8080`.

Para publicar na Play Store, defina `KEYSTORE_FILE`, `KEYSTORE_PASSWORD`, `KEY_ALIAS` e `KEY_PASSWORD`
antes do `assembleRelease` (sem elas, o release é assinado com a chave de debug, útil só para instalar direto).

## Modelos 3D importados

`web/models/*.glb` foram gerados a partir dos arquivos enviados (labo.fbx e canter.obj): peças classificadas
por material (pintura, vidro, interior, borracha, faróis…), unidade em metros, frente em +Z, origem no eixo
traseiro, polígonos reduzidos (~22 mil triângulos cada) e rodas substituídas pelas do jogo nas posições
originais. **Antes de publicar na Play Store, confirme que você tem direito de uso/redistribuição desses modelos.**
