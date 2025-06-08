let tex=[];
let texture_loader=new THREE.TextureLoader(loadingManager);


tex["sky"]=new THREE.CubeTextureLoader(loadingManager).setPath("./textures/sky/").load(["lf.jpg","rt.jpg","up.jpg","dn.jpg","ft.jpg","bk.jpg"]);
environment_main=tex["sky"];


tex["wall"]=texture_loader.load("./textures/wall.jpg");
tex["wall"].colorSpace=THREE.SRGBColorSpace;
tex["building_d"]=texture_loader.load("./textures/building_d.jpg");
tex["building_d"].colorSpace=THREE.SRGBColorSpace;
tex["building_s"]=texture_loader.load("./textures/building_s.png");
tex["building_3_d"]=texture_loader.load("./textures/building_3_d.jpg");
tex["building_3_d"].colorSpace=THREE.SRGBColorSpace;
tex["building_3_d"].wrapS=tex["building_3_d"].wrapT=THREE.RepeatWrapping;
tex["building_3_d"].repeat.set(2,1);
tex["building_3_s"]=texture_loader.load("./textures/building_3_s.png");
tex["building_3_s"].wrapS=tex["building_3_s"].wrapT=THREE.RepeatWrapping;
tex["building_3_s"].repeat.set(2,1);


tex["cell"]=texture_loader.load("./textures/cell.jpg");
tex["cell"].colorSpace=THREE.SRGBColorSpace;
tex["cell"].wrapS=tex["cell"].wrapT=THREE.RepeatWrapping;
tex["cell"].repeat.set(40,40);


tex["asphalt_d"]=texture_loader.load("./textures/asphalt_d.jpg");
tex["asphalt_d"].colorSpace=THREE.SRGBColorSpace;
tex["asphalt_d"].wrapS=tex["asphalt_d"].wrapT=THREE.RepeatWrapping;
tex["asphalt_d"].repeat.set(60,60);


tex["asphalt_n"]=texture_loader.load("./textures/asphalt_n.jpg");
tex["asphalt_n"].wrapS=tex["asphalt_n"].wrapT=THREE.RepeatWrapping;


tex["asphalt_r"]=texture_loader.load("./textures/asphalt_r.jpg");
tex["asphalt_r"].wrapS=tex["asphalt_r"].wrapT=THREE.RepeatWrapping;
tex["asphalt_r"].repeat.set(60,60);


tex["asphalt_ao"]=texture_loader.load("./textures/asphalt_ao.jpg");
tex["asphalt_ao"].wrapS=tex["asphalt_ao"].wrapT=THREE.RepeatWrapping;


tex["asphalt_h"]=texture_loader.load("./textures/asphalt_h.jpg");
tex["asphalt_h"].wrapS=tex["asphalt_h"].wrapT=THREE.RepeatWrapping;


tex["indicator"]=texture_loader.load("./textures/atlas/indicator.png");


tex["ammo_d"]=texture_loader.load("./models/ammo/ammo_d.png");
tex["ammo_d"].colorSpace=THREE.SRGBColorSpace;
tex["ammo_ao"]=texture_loader.load("./models/ammo/ammo_ao.png");
tex["ammo_items"]=texture_loader.load("./models/ammo/ammo_items.png");
tex["ammo_items"].colorSpace=THREE.SRGBColorSpace;
tex["ammo_ms"]=texture_loader.load("./models/ammo/ammo_ms.jpg");
tex["ammo_n"]=texture_loader.load("./models/ammo/ammo_n.png");


tex["soldier_body_d"]=texture_loader.load("./models/soldier/soldier_body_d.png");
tex["soldier_body_d"].colorSpace=THREE.SRGBColorSpace;
tex["soldier_body_d"].wrapS=tex["soldier_body_d"].wrapT=THREE.RepeatWrapping;
tex["soldier_body_n"]=texture_loader.load("./models/soldier/soldier_body_n.png");
tex["soldier_body_s"]=texture_loader.load("./models/soldier/soldier_body_s.png");
tex["soldier_head_d"]=texture_loader.load("./models/soldier/soldier_head_d.png");
tex["soldier_head_d"].colorSpace=THREE.SRGBColorSpace;
tex["soldier_head_n"]=texture_loader.load("./models/soldier/soldier_head_n.png");
tex["soldier_head_s"]=texture_loader.load("./models/soldier/soldier_head_s.png");


tex["gun_d"]=texture_loader.load("./models/gun/gun_d.png");
tex["gun_d"].colorSpace=THREE.SRGBColorSpace;
tex["gun_ao"]=texture_loader.load("./models/gun/gun_ao.png");
tex["gun_m"]=texture_loader.load("./models/gun/gun_m.png");
tex["gun_n"]=texture_loader.load("./models/gun/gun_n.png");
tex["gun_r"]=texture_loader.load("./models/gun/gun_r.png");


tex["uaz_d"]=texture_loader.load("./models/uaz/uaz_d.jpg");
tex["uaz_d"].colorSpace=THREE.SRGBColorSpace;
tex["uaz_n"]=texture_loader.load("./models/uaz/uaz_n.jpg");
tex["uaz_s"]=texture_loader.load("./models/uaz/uaz_s.jpg");
tex["uaz_m"]=texture_loader.load("./models/uaz/uaz_m.jpg");
tex["uaz_ao"]=texture_loader.load("./models/uaz/uaz_ao.jpg");
tex["uaz_o"]=texture_loader.load("./models/uaz/uaz_o.jpg");


tex["uaz_glass_d"]=texture_loader.load("./models/uaz/uaz_glass_d.jpg");
tex["uaz_glass_d"].colorSpace=THREE.SRGBColorSpace;
tex["uaz_glass_n"]=texture_loader.load("./models/uaz/uaz_glass_n.jpg");
tex["uaz_glass_s"]=texture_loader.load("./models/uaz/uaz_glass_s.jpg");
tex["uaz_glass_m"]=texture_loader.load("./models/uaz/uaz_glass_m.jpg");
tex["uaz_glass_ao"]=texture_loader.load("./models/uaz/uaz_glass_ao.jpg");
tex["uaz_glass_o"]=texture_loader.load("./models/uaz/uaz_glass_o.jpg");
