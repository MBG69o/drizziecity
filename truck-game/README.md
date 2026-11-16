# 🚛 Drizzie Truck — Rotas & Cargas

Jogo mobile de caminhão em 3D para **Android 6.0 (API 23) até o Android 15 (API 35)**.
Faça entregas pela cidade, suba de nível, compre caminhões mais fortes e libere cargas de **1 t até 85 t**.

## Como jogar

| Ação | Celular | Teclado (teste no PC) |
|---|---|---|
| Ligar o motor | botão **Ligar Motor** | `E` |
| Acelerar / Frear | pedais à direita | `W`/`↑` e `S`/`↓`/`Espaço` |
| Câmbio | seletor **D / N / R** (ou automático em Ajustes) | `R` ré, `N` neutro |
| Direção | **volante** (arraste), setas ou inclinação do celular | `A` `D` / `←` `→` |
| Freio de mão / Faróis | **(P)** no painel / botão de farol | `P` / `L` |
| Pisca-pisca (seta) | setas ◀ ▶ acima do volante (desligam sozinhas após a curva), ⚠ alerta | `Z` / `X` |
| Buzina / Câmera / Mapa | centro do volante / 🎥 / toque no minimapa | `H` / `C` / `M` |

1. Abra a **Central de Fretes 📋** e aceite uma carga.
2. Siga a seta verde e a rota laranja do GPS até o local de **coleta** e pare dentro da área amarela.
3. Leve a carga até o **destino** antes do prazo. Batidas avariam a carga e reduzem o pagamento.
4. Ganhe dinheiro + XP, suba de nível e compre caminhões na **Garagem 🚚**.

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
* Bônus por entrega no prazo, multa por atraso, avarias, 30 níveis, estatísticas e salvamento automático.

## Mundo

* **4 cidades** — Drizzie City (metrópole), Vila Serrana (interior), Porto Azul (litoral com porto) e Monte Alto
  (serra, com mineradora e vinícola, pela BR-040).
* **Rodovias entre cidades** (BR-101, SP-280 e RS-030) com curvas, aclives/declives, aterros com taludes,
  defensas metálicas, balizadores, placas de destino e de velocidade.
* Estradas atravessando **mata fechada**, **pontes sobre o rio** com pilares, lavouras, morros com
  aerogeradores e o mar ao sul. Locais de carga à beira da estrada (fazenda, serraria, pedreira, parque eólico).
* GPS calcula a rota por ruas e rodovias entre as cidades; tráfego de carros, ônibus e caminhões.

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
