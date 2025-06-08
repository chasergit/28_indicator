let project=document.getElementById("project");
let canvas=document.getElementById("canvas");
let canvas_hud=document.getElementById("canvas_hud");
let screen_width=project.offsetWidth;
let screen_height=project.offsetHeight;
let canvas_half_width=screen_width/2;
let canvas_half_height=screen_height/2;
let screen_resolution=[screen_width,screen_height];
let screen_aspect_ratio=screen_width/screen_height;
let screen_texel_size=[1.0/screen_width,1.0/screen_height];
let pixel_ratio_origin=Math.min(window.devicePixelRatio,1); // WE CHOOSE A VALUE <=1, BECAUSE ON A PHONE IT IS BETTER TO HAVE NO MORE THAN 1
let pixel_ratio_quality=1;
let renderer_pixel_ratio=pixel_ratio_origin/pixel_ratio_quality;


let vs=[]; // VERTEX SHADER
let fs=[]; // FRAGMENT SHADER
let mat=[];
let mesh=[];
let helper=[];
let dummy=[]; // OBJECT3D(); FOR ROTATIONS, VECTORS
let uniforms=[]; // UNIFORMS OF YOUR SHADERS FOR QUICK ACCESS
let modules_to_resize=[]; // MODULES THAT ARE UPDATED WHEN THE SCREEN SIZE IS CHANGED
let mixers=[];
let mixer=[];
let action=[];
let atlas=[]; // ATLAS TEXTURES
let environment_main;


let degrees_to_radian=Math.PI/180;
let radian_to_degrees=180/Math.PI;
let PI_half=Math.PI/2;
let PI=Math.PI;
let PI_3=Math.PI*1.5;
let PI_2=Math.PI*2;


let vector3=new THREE.Vector3();


let player={};
player.health=100;
player.water=75;
player.food=92;


let clock=new THREE.Clock();
clock.autoStart=true;
let stop=1; // STOP AND START THE FUNCTION loop();
let delta=0;


let stats=new Stats();
project.appendChild(stats.dom);


project.appendChild(renderer_stats_canvas);


loadingManager.init_core=init_core;
loadingManager.init_end=init_end;


// ____________________ LOCKING THE MOUSE CURSOR ____________________


document.addEventListener("fullscreenchange",()=>{
if(document.fullscreenElement && document.body.requestPointerLock){ document.body.requestPointerLock(); }
});


// ____________________ FULL SCREEN____________________


function fullscreen_pointerlock(){
if(!document.fullscreenElement){ document.documentElement.requestFullscreen(); }
}


// ____________________ MOUSE CONTROL ____________________


document.addEventListener("mousemove",(event)=>{
if(document.pointerLockElement===document.body){ updatePosition(event); }
});


let renderer=new THREE.WebGLRenderer({canvas:canvas,antialias:true,alpha:true,premultipliedAlpha:true,logarithmicDepthBuffer:false});
renderer.setClearColor(0x000000,0); // BACKGROUND COLOR AND TRANSPARENCY (alpha). 0 - NOT TRANSPARENT, 1 - TRANSPARENT
renderer.setSize(screen_width,screen_height);
renderer.setPixelRatio(renderer_pixel_ratio);
renderer.autoClear=false;
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.VSMShadowMap;


let renderer_hud=new THREE.WebGLRenderer({canvas:canvas_hud,antialias:true,alpha:true,premultipliedAlpha:true,logarithmicDepthBuffer:false});
renderer_hud.setClearColor(0x000000,0); // BACKGROUND COLOR AND TRANSPARENCY (alpha). 0 - NOT TRANSPARENT, 1 - TRANSPARENT
renderer_hud.setSize(screen_width,screen_height);
renderer_hud.setPixelRatio(pixel_ratio_origin);


let gpuPanel;
window.gpuPanel=gpuPanel=new GPUStatsPanel(renderer.getContext());
window.gpuPanel_shader_name=""; // FOR MEASURE OF TIME OF POST-EFFECTS
stats.addPanel(gpuPanel);


let scene=new THREE.Scene();
let scene_hud=new THREE.Scene();


let camera=new THREE.PerspectiveCamera(60,screen_width/screen_height,0.05,10000);
camera.position.set(0,1,0);


let camera_hud=new THREE.OrthographicCamera(screen_width/-2,screen_width/2,screen_height/2,screen_height/-2,-1,1000000);
// MOVE AWAY IN Z SO ANY DISTANT OBJECTS COME INTO VIEW
camera_hud.position.z=100000;


let controls=new FirstPersonControls(camera,renderer_hud.domElement);
controls.movementSpeed=10;
controls.lookSpeed=0.2;
controls.lookVertical=true;
controls.lon=-1.5*180/Math.PI;


function on_window_resize(){


screen_width=project.offsetWidth;
screen_height=project.offsetHeight;
canvas_half_width=screen_width/2;
canvas_half_height=screen_height/2;
screen_resolution=[screen_width/pixel_ratio_quality,screen_height/pixel_ratio_quality];
screen_aspect_ratio=screen_width/screen_height;
screen_texel_size=[1.0/(screen_width*renderer_pixel_ratio),1.0/(screen_height*renderer_pixel_ratio)];


camera.aspect=screen_aspect_ratio;
camera.updateProjectionMatrix();


camera_hud.left=screen_width/-2;
camera_hud.right=screen_width/2;
camera_hud.top=screen_height/2;
camera_hud.bottom=screen_height/-2;
camera_hud.updateProjectionMatrix();


renderer.setSize(screen_width,screen_height);
renderer_hud.setSize(screen_width,screen_height);


controls.handleResize();


let max=modules_to_resize.length;
for(let n=0;n<max;n++){
modules_to_resize[n]();
}


}