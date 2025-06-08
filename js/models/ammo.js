mat["ammo_crate"]=new THREE.MeshStandardMaterial({
map:tex["ammo_d"],
normalMap:tex["ammo_n"],
normalScale:{x:2,y:2},
aoMap:tex["ammo_ao"],
metalnessMap:tex["ammo_ms"],
metalness:0.4,
roughnessMap:tex["ammo_ms"],
roughness:1.2,
side:THREE.DoubleSide,
});


mat["ammo_items"]=new THREE.MeshStandardMaterial({
map:tex["ammo_items"],
});


OBJLoader.load("./models/ammo/ammo.obj",function(object){


while(object.children.length){


let name=object.children[0].name;


mesh[name]=object.children[0];


mesh[name].position.set(0,0,-8.25);
mesh[name].castShadow=true;
mesh[name].receiveShadow=true;


scene.add(mesh[name]);


}


indicator["ammo_data"]["ammo_1"]={name:"ammo",object:mesh["ammo"],object_mw:mesh["ammo"].matrixWorld.elements,offset_x:0,offset_y:1,offset_z:0,radius:0.5};
indicator["ammo_data"]["ammo_2"]={name:"ammo",object:mesh["ammo"],object_mw:mesh["ammo"].matrixWorld.elements,offset_x:2.1,offset_y:2.0,offset_z:0,radius:0.5};
indicator["ammo_data"]["ammo_3"]={name:"ammo",object:mesh["ammo"],object_mw:mesh["ammo"].matrixWorld.elements,offset_x:-1.9,offset_y:2.0,offset_z:0,radius:0.5};


});
