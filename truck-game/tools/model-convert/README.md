# Conversão de modelos 3D para o jogo

Os modelos ficam em `web/models/*.glb` (frente em +Z, Y para cima, metros, origem no eixo traseiro / pino-rei).

* `volvo_export.py` — abre um `.blend`, classifica materiais por papel (paint, chrome, glass, dark, interior,
  red, lamp, amber), remove rodas (o jogo usa as próprias nas posições originais), simplifica e exporta GLB
  com metadados (`meta`: entre-eixos, rodas, quinta roda).
  `python -m pip install bpy==4.2.0` (Python 3.11) e
  `python volvo_export.py -- entrada.blend saida.glb 60000`
* `flatbed_export.py` — importa um FBX com texturas PBR, separa as rodas por eixo (`axle_N`) e exporta GLB.
* `convert-fbx-obj.js` — conversor no navegador (three.js + meshoptimizer) usado para Labo e Canter.
* Compressão final: `npx @gltf-transform/cli meshopt entrada.glb saida.glb`
