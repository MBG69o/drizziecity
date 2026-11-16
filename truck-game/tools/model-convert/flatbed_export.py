import bpy, sys, json, math, bmesh
from mathutils import Vector, Matrix
args = sys.argv[sys.argv.index('--') + 1:]
src, texdir, out = args
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath=src)
obj = [o for o in bpy.data.objects if o.type == 'MESH'][0]
# texturas (1024 px)
mat = obj.data.materials[0]
nt = mat.node_tree
for n in nt.nodes:
    if n.type == 'TEX_IMAGE' and n.image:
        nm = n.image.name.lower()
        f = 'base' if 'basecolor' in nm else 'normal' if 'normal' in nm else 'metal' if 'metallic' in nm else 'rough'
        n.image = bpy.data.images.load(texdir + '/' + f + '.jpg')
        if f != 'base': n.image.colorspace_settings.name = 'Non-Color'
bpy.ops.object.select_all(action='DESELECT'); obj.select_set(True); bpy.context.view_layer.objects.active = obj
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
# separa partes soltas e acha as rodas (partes redondas perto do chão)
bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.separate(type='LOOSE'); bpy.ops.object.mode_set(mode='OBJECT')
parts = [o for o in bpy.data.objects if o.type == 'MESH']
def bb(o):
    pts = [o.matrix_world @ Vector(c) for c in o.bound_box]
    return Vector([min(p[i] for p in pts) for i in range(3)]), Vector([max(p[i] for p in pts) for i in range(3)])
wheelParts = []
for o in parts:
    mn, mx = bb(o); s = mx - mn
    if mx.z < 1.25 and s.z > 0.35 and abs(s.y - s.z) < 0.25 and abs(mn.x) > 0.4 and mn.z < 0.35 or (mx.z < 1.25 and s.z > 0.35 and abs(s.y - s.z) < 0.2 and abs((mn.x + mx.x) / 2) > 0.5):
        wheelParts.append((o, mn, mx))
# agrupa por eixo (y)
axles = {}
for o, mn, mx in wheelParts:
    k = round((mn.y + mx.y) / 2, 1)
    axles.setdefault(k, []).append((o, mn, mx))
ys_all = [bb(o) for o in parts]
ymin = min(a[0].y for a in ys_all); ymax = max(a[1].y for a in ys_all)
axleYs = sorted(axles.keys())
print('AXLES', axleYs, [len(v) for v in axles.values()], 'y', ymin, ymax)
# frente = ponta longe das rodas
wheelMid = sum(axleYs) / len(axleYs)
front_is_max = abs(ymax - wheelMid) > abs(ymin - wheelMid)
frontY = ymax if front_is_max else ymin
king = frontY - (1.0 if front_is_max else -1.0)   # pino-rei 1 m atrás da frente
sgn = 1 if front_is_max else -1
# junta corpo
body = [o for o in parts if o not in [w[0] for w in wheelParts]]
bpy.ops.object.select_all(action='DESELECT')
for o in body: o.select_set(True)
bpy.context.view_layer.objects.active = body[0]
bpy.ops.object.join(); B = bpy.context.view_layer.objects.active; B.name = 'trailer'
# transforma: frente -> -Y no Blender (vira +Z no glTF), origem no pino-rei
T = Matrix.Translation((0, -king, 0))
Rz = Matrix.Rotation(math.pi, 4, 'Z') if front_is_max else Matrix.Identity(4)
B.data.transform(Rz @ T)
info = []
for i, k in enumerate(axleYs):
    grp = axles[k]
    bpy.ops.object.select_all(action='DESELECT')
    for o, _, _ in grp: o.select_set(True)
    bpy.context.view_layer.objects.active = grp[0][0]
    bpy.ops.object.join(); A = bpy.context.view_layer.objects.active
    mn, mx = bb(A); c = (mn + mx) / 2
    A.data.transform(Rz @ T)
    # origem no centro do eixo
    cc = Rz @ T @ c
    A.data.transform(Matrix.Translation(-cc)); A.location = cc
    A.name = 'axle_%d' % i
    info.append({'z': round(cc.y, 3) * 1, 'r': round((mx.z - mn.z) / 2, 3)})
mn, mx = bb(B)
# coordenadas glTF: z_glTF = -y_blender (com frente em -Y)
meta = {'front': round(-mn.y, 3), 'back': round(-mx.y, 3), 'deckY': round(mx.z, 3), 'width': round(mx.x - mn.x, 3), 'axles': [round(-a['z'], 3) for a in info], 'wr': info[0]['r'] if info else 0.5}
B['meta'] = json.dumps(meta)
print('META', json.dumps(meta))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_extras=True, export_yup=True, export_image_format='JPEG', export_jpeg_quality=85, export_apply=True, export_animations=False)
