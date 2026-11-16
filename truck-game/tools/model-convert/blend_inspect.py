import bpy, sys
from mathutils import Vector
bpy.ops.wm.open_mainfile(filepath=sys.argv[-1])
sc = bpy.context.scene
print('unit', sc.unit_settings.system, sc.unit_settings.scale_length)
for o in sorted(bpy.data.objects, key=lambda o: o.name):
    if o.type != 'MESH':
        print('  [%s] %s' % (o.type, o.name)); continue
    me = o.data
    tris = sum(len(p.vertices) - 2 for p in me.polygons)
    bb = [o.matrix_world @ Vector(c) for c in o.bound_box]
    mn = [min(v[i] for v in bb) for i in range(3)]; mx = [max(v[i] for v in bb) for i in range(3)]
    mats = [m.name for m in me.materials if m]
    print('%-34s tris=%7d mods=%s mats=%s bb=(%s)-(%s) parent=%s vis=%s' % (o.name, tris, [m.type for m in o.modifiers], mats[:6], ','.join('%.2f'%v for v in mn), ','.join('%.2f'%v for v in mx), o.parent.name if o.parent else '', not o.hide_render))
print('--- images')
for im in bpy.data.images:
    print(im.name, im.size[:], 'packed' if im.packed_file else im.filepath)
print('--- materials')
for m in bpy.data.materials:
    if not m.use_nodes: print(m.name, 'no nodes', tuple(m.diffuse_color)); continue
    bsdf = next((n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'), None)
    texs = [n.image.name for n in m.node_tree.nodes if n.type == 'TEX_IMAGE' and n.image]
    if bsdf:
        bc = bsdf.inputs['Base Color'].default_value
        print('%-30s base=(%.2f,%.2f,%.2f) metal=%.2f rough=%.2f alpha=%.2f tex=%s' % (m.name, bc[0], bc[1], bc[2], bsdf.inputs['Metallic'].default_value, bsdf.inputs['Roughness'].default_value, bsdf.inputs['Alpha'].default_value, texs))
    else: print(m.name, 'nodes', [n.type for n in m.node_tree.nodes][:8], texs)
