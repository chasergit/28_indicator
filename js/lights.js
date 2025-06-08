function lights_set(){


let ambient=new THREE.AmbientLight(0xfffff0,0.2);
//scene.add(ambient);


//scene.fog=new THREE.FogExp2(0x8A7E9B,2);


let sun=new THREE.DirectionalLight(0xFEEFC2,5);
sun.position.set(40,100,40);
sun.castShadow=true;
sun.shadow.mapSize.width=2048;
sun.shadow.mapSize.height=2048;
sun.shadow.camera.near=1;
sun.shadow.camera.far=200;
sun.shadow.camera.left=-50;
sun.shadow.camera.right=50;
sun.shadow.camera.top=50;
sun.shadow.camera.bottom=-50;
sun.shadow.bias=-0.0004;
//sun.shadow.radius=3;
scene.add(sun);


scene.add(new THREE.DirectionalLightHelper(sun,100));
let helper = new THREE.CameraHelper(sun.shadow.camera);
scene.add(helper);


const hemiLight = new THREE.HemisphereLight(0xFEEFC2,0x444444,3);
hemiLight.position.set(0,2,0);
scene.add(hemiLight);


let hemiLightHelper=new THREE.HemisphereLightHelper(hemiLight,0.2);
scene.add(hemiLightHelper);


}
