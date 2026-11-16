import bpy, sys, json, math
from mathutils import Vector, Matrix
args = sys.argv[sys.argv.index('--') + 1:]
src, out, target = args[0], args[1], int(args[2])
bpy.ops.wm.open_mainfile(filepath=src)

def wbb(o):
    pts = [o.matrix_world @ Vector(c) for c in o.bound_box]
    return Vector([min(p[i] for p in pts) for i in range(3)]), Vector([max(p[i] for p in pts) for i in range(3)])

objs = [o for o in bpy.data.objects if o.type == 'MESH']
# rodas (pneus) -> metadados
tires = [o for o in objs if o.name.startswith('PNEU')]
wheels = []
for o in tires:
    mn, mx = wbb(o)
    c = (mn + mx) / 2
    wheels.append({'x': c.x, 'y': c.y, 'z': c.z, 'r': (mx.z - mn.z) / 2, 'w': mx.x - mn.x})
ground = min(w['z'] - w['r'] for w in wheels)
ys = sorted(set(round(w['y'], 1) for w in wheels))
yFront = max(w['y'] for w in wheels)
rearYs = [w['y'] for w in wheels if w['y'] < yFront - 1]
yRear = (min(rearYs) + max(rearYs)) / 2
# remove rodas, aros, cubos e peças fora do lugar
drop = lambda n: n.startswith(('PNEU', 'rim fh', '1.00', '5.00')) or n in ('cromiun.002', 'cromiun.003', 'tank fh.001')
for o in list(objs):
    if drop(o.name):
        bpy.data.objects.remove(o, do_unlink=True)
objs = [o for o in bpy.data.objects if o.type == 'MESH']
# quinta roda
fw = bpy.data.objects.get('tornamersa')
fmn, fmx = wbb(fw)
hitchY = (fmn.y + fmx.y) / 2
deckZ = fmx.z

# materiais por papel
ROLE = {}
def role_of(name):
    n = name or ''
    if n.startswith('VERMELHO VOLVO'): return 'paint'
    if n.startswith(('CROMADO', 'Cromado', 'cromiun', 'RODA')): return 'chrome'
    if n.startswith('VIDRO'): return 'glass'
    if n.startswith('Vermelho'): return 'red'
    if n.startswith('Branco'): return 'lamp'
    if n.startswith('Seta'): return 'amber'
    if n.startswith(('PRETO', 'Preto', 'cubo', 'Pneu')): return 'dark'
    return 'interior'
for r in ['paint', 'chrome', 'glass', 'red', 'lamp', 'amber', 'dark', 'interior']:
    m = bpy.data.materials.new(r); m.use_nodes = True
    ROLE[r] = m

# aplica modificadores (geometry nodes) e converte
bpy.ops.object.select_all(action='DESELECT')
for o in objs:
    o.hide_set(False); o.hide_viewport = False
    o.select_set(True)
bpy.context.view_layer.objects.active = objs[0]
bpy.ops.object.convert(target='MESH')
objs = [o for o in bpy.data.objects if o.type == 'MESH']
for o in objs:
    for i, slot in enumerate(o.material_slots):
        slot.material = ROLE[role_of(slot.material.name if slot.material else '')]

# simplificação proporcional (peças escondidas sob a cabine perdem mais)
tri = lambda o: sum(len(p.vertices) - 2 for p in o.data.polygons)
weights = {}
for o in objs:
    n = o.name
    w = 1.0
    if n.startswith(('MOLAS', 'CARDAN', 'APOIADOR', 'BOLSAS', 'EIXO', 'laders', 'suspension', 'suspencion', 'frame')): w = 0.25
    if n.startswith('cab interior'): w = 0.5
    if n.startswith(('Object', 'PANAL', 'cabfh', 'glass', 'ligh', 'mascara')): w = 1.6
    weights[o.name] = w
total = sum(tri(o) for o in objs)
import math as M
score = {o.name: M.sqrt(tri(o)) * weights[o.name] for o in objs}
ssum = sum(score.values())
for o in objs:
    t = tri(o)
    want = max(120, target * score[o.name] / ssum)
    ratio = min(1.0, want / max(1, t))
    if ratio < 0.98:
        md = o.modifiers.new('dec', 'DECIMATE'); md.ratio = ratio; md.use_collapse_triangulate = True
        bpy.context.view_layer.objects.active = o
        bpy.ops.object.modifier_apply(modifier='dec')
# junta tudo
bpy.ops.object.select_all(action='DESELECT')
for o in objs: o.select_set(True)
bpy.context.view_layer.objects.active = objs[0]
bpy.ops.object.join()
obj = bpy.context.view_layer.objects.active
obj.name = 'volvo'
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
# origem: eixo traseiro no chão; frente para -Y (vira +Z no glTF)
obj.data.transform(Matrix.Translation((0, -yRear, -ground)))
obj.data.transform(Matrix.Rotation(math.pi, 4, 'Z'))
bpy.ops.object.shade_smooth_by_angle(angle=math.radians(35))
# remove materiais duplicados de slot
mn, mx = wbb(obj)
conv = lambda w: {'x': round(-w['x'], 3), 'y': round(w['z'] - ground, 3), 'z': round(w['y'] - yRear, 3), 'r': round(w['r'], 3), 'w': round(w['w'], 3)}
wl = []
for w in wheels:
    c = conv(w)
    c['tag'] = ('F' if w['y'] > yFront - 0.3 else 'R') + ('L' if c['x'] > 0 else 'R')
    wl.append(c)
meta = {'wb': round(yFront - yRear, 3), 'wr': round(max(w['r'] for w in wheels), 3), 'zFront': round(-mn.y, 3), 'zRear': round(-mx.y, 3),
        'width': round(mx.x - mn.x, 3), 'height': round(mx.z, 3), 'hitchZ': round(hitchY - yRear, 3), 'deckY': round(deckZ - ground, 3)}
obj['wb'] = meta['wb']
obj['meta'] = json.dumps({**meta, 'wheels': wl})
print('META', json.dumps(meta), 'tris', tri(obj), 'from', total)
print('WHEELS', json.dumps(wl))
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_extras=True, export_yup=True, export_texcoords=False, export_normals=True, export_apply=True, export_animations=False, use_selection=False, export_lights=False, export_cameras=False)
