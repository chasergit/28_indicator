function init_core(){


scene.background=tex["sky"];


tex["atlas_indicator"]=DataArrayTexture_set([tex["indicator"]]);


atlas_set();


texa_frames_gen("coin",atlas["coin"],4,4,16);
texa_frames_gen("digits",atlas["digits_distance"],16,1,16);
texa_frames_gen("digits_big",atlas["digits_big"],10,1,10);


modules_to_resize.push(indicator_border_set);
modules_to_resize.push(indicator_to_resize);
indicator_border_set();
indicators_set();
indicator_set();


music_effects_gen();
sounds_effects_gen();
sounds_volume_gen(10);
lights_set();


soldiers_set();
gun_set();
other_set();


}


function indicator_border_set(){


indicator_border=[];
indicator_border["ammo"]={left:-canvas_half_width+40,right:canvas_half_width-40,top:canvas_half_height-52,bottom:-canvas_half_height+40};


}


function soldiers_set(){


mesh["soldier_attack_1"]=SkeletonUtils.clone(mesh["soldier"]);
mesh["soldier_attack_1"].animations=mesh["soldier"].animations;
mixer["soldier_attack_1"]=new THREE.AnimationMixer(mesh["soldier_attack_1"]);
action["soldier_attack_1"]=THREE.AnimationUtils.subclip(mesh["soldier_attack_1"].animations[0],'attack',0,100);
action["soldier_attack_1"]=mixer["soldier_attack_1"].clipAction(action["soldier_attack_1"]);
action["soldier_attack_1"].time=0;
action["soldier_attack_1"].play();
mixers.push(mixer["soldier_attack_1"]);
mesh["soldier_attack_1"].animations=[];
mesh["soldier_attack_1"].scale.set(0.025,0.025,0.025);
mesh["soldier_attack_1"].position.set(-2,0,-8);
mesh["soldier_attack_1"].rotation.y=0;
mesh["soldier_attack_1"].children[1].frustumCulled=false;
mesh["soldier_attack_1"].children[1].onAfterRender=function(){
this.frustumCulled=true;
this.onAfterRender=function(){};
}
scene.add(mesh["soldier_attack_1"]);


mesh["soldier_attack_2"]=SkeletonUtils.clone(mesh["soldier"]);
mesh["soldier_attack_2"].animations=mesh["soldier"].animations;
mixer["soldier_attack_2"]=new THREE.AnimationMixer(mesh["soldier_attack_2"]);
action["soldier_attack_2"]=THREE.AnimationUtils.subclip(mesh["soldier_attack_2"].animations[0],'attack',0,100);
action["soldier_attack_2"]=mixer["soldier_attack_2"].clipAction(action["soldier_attack_2"]);
action["soldier_attack_2"].time=0;
action["soldier_attack_2"].play();
mixers.push(mixer["soldier_attack_2"]);
mesh["soldier_attack_2"].animations=[];
mesh["soldier_attack_2"].scale.set(0.025,0.025,0.025);
mesh["soldier_attack_2"].position.set(2,0,-8);
mesh["soldier_attack_2"].rotation.y=0;
mesh["soldier_attack_2"].children[1].frustumCulled=false;
mesh["soldier_attack_2"].children[1].onAfterRender=function(){
this.frustumCulled=true;
this.onAfterRender=function(){};
}
scene.add(mesh["soldier_attack_2"]);


}


function gun_set(){


let hand;
mesh["soldier_attack_1"].traverse(function(child){
if(child.name=="swatRightHand"){ hand=child; }
});


mesh["gun"].parent=hand;
mesh["gun"].position.set(-12,-2,3);
mesh["gun"].scale.set(2000,2000,2000);
mesh["gun"].rotation.set(1.57,3.3,0);


}


function other_set(){


// ____________________ SPHERE ____________________


mat["sphere"]=new THREE.MeshStandardMaterial({
color:0xffffff,
envMap:environment_main,
metalness:1,
roughness:0,
})


mesh["sphere"]=new THREE.Mesh(new THREE.SphereGeometry(1,32,32),mat["sphere"]);
mesh["sphere"].position.set(-5,1,-10);
mesh["sphere"].castShadow=true;
mesh["sphere"].receiveShadow=true;
scene.add(mesh["sphere"]);


mat["wall"]=new THREE.MeshStandardMaterial({
map:tex["wall"],bumpMap:tex["wall"],bumpScale:0.005,metalness:0.16
})


mesh["wall"]=new THREE.Mesh(new THREE.BoxGeometry(2,2,2),mat["wall"]);
mesh["wall"].position.set(0,1,-10);
mesh["wall"].castShadow=true;
mesh["wall"].receiveShadow=true;
scene.add(mesh["wall"]);


mat["building"]=new THREE.MeshPhongMaterial({
envMap:scene.background,
reflectivity:0.005,
map:tex["building_d"],
bumpMap:tex["building_d"],
bumpScale:0.005,
specularMap:tex["building_s"],
shininess:30
});


mesh["building"]=new THREE.Mesh(new THREE.BoxGeometry(21,20,14),mat["building"]);
mesh["building"].position.set(-10,10,-20);
mesh["building"].castShadow=true;
mesh["building"].receiveShadow=true;
scene.add(mesh["building"]);


mesh["building_2"]=new THREE.Mesh(new THREE.BoxGeometry(21,20,14),mat["building"]);
mesh["building_2"].position.set(11.0,10,-20);
mesh["building_2"].scale.x=-1;
mesh["building_2"].castShadow=true;
mesh["building_2"].receiveShadow=true;
scene.add(mesh["building_2"]);


mat["building_3"]=new THREE.MeshPhongMaterial({
envMap:scene.background,
reflectivity:0.01,
map:tex["building_3_d"],
bumpMap:tex["building_3_d"],
bumpScale:0.005,
specularMap:tex["building_3_s"],
shininess:200
});


mesh["building_3"]=new THREE.Mesh(new THREE.BoxGeometry(8.4,19.2,1),mat["building_3"]);
mesh["building_3"].position.set(0.5,10.4,-12.5);
mesh["building_3"].castShadow=true;
mesh["building_3"].receiveShadow=true;
scene.add(mesh["building_3"]);


mat["asphalt"]=new THREE.MeshStandardMaterial({
map:tex["asphalt_d"],
bumpMap:tex["asphalt_r"],
bumpScale:0.005,
aoMap:tex["asphalt_ao"],
roughnessMap:tex["asphalt_r"],
roughness:1.0,
metalnessMap:tex["asphalt_r"],
metalness:1.0
});


mesh["ground"]=new THREE.Mesh(new THREE.BoxGeometry(100,1,100),mat["asphalt"]);
mesh["ground"].position.set(0,-0.5,0);
mesh["ground"].receiveShadow=true;
scene.add(mesh["ground"]);


}
