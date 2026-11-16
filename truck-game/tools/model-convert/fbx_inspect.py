import bpy, sys
from mathutils import Vector
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath=sys.argv[-1])
for o in sorted(bpy.data.objects, key=lambda o: o.name):
    if o.type != 'MESH': print('[%s] %s' % (o.type, o.name)); continue
    me = o.data
    tris = sum(len(p.vertices) - 2 for p in me.polygons)
    bb = [o.matrix_world @ Vector(c) for c in o.bound_box]
    mn = [min(v[i] for v in bb) for i in range(3)]; mx = [max(v[i] for v in bb) for i in range(3)]
    print('%-30s tris=%6d mats=%s uv=%d bb=(%s)-(%s)' % (o.name, tris, [m.name for m in me.materials if m], len(me.uv_layers), ','.join('%.2f'%v for v in mn), ','.join('%.2f'%v for v in mx)))
for m in bpy.data.materials:
    if m.use_nodes: print(m.name, [(n.type, n.image.name if getattr(n, 'image', None) else '') for n in m.node_tree.nodes])
for im in bpy.data.images: print('img', im.name, im.filepath, im.size[:])
