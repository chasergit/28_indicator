/* 140525 1000 ЗА 0.1МС 10000 ЗА 1.2МС

for(let u=0;u<1000;u++){
indicator_area_a["abc_"+u]={offset:[200+u,100],scale:[128,64],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["indicator_area_a"],texture:0};
}
let min=9090;
for(let z=0;z<100;z++){
let started=performance.now();
indicators_update();
let elap=performance.now()-started;
if(min>elap){ min=elap; }
}
console.log(min);
*/


let indicator_attributes;


function indicator_set(){


let geometry=new THREE.InstancedBufferGeometry();
geometry.setAttribute('position',new THREE.Float32BufferAttribute(new Float32Array([-0.5,0.5,0,-0.5,-0.5,0,0.5,0.5,0,0.5,-0.5,0,0.5,0.5,0,-0.5,-0.5,0]),3));
geometry.setAttribute('uv',new THREE.Float32BufferAttribute(new Float32Array([0,1,0,0,1,1,1,0,1,1,0,0]),2));
geometry.setAttribute('offset',new THREE.InstancedBufferAttribute(new Float32Array(),2));
geometry.setAttribute('scale',new THREE.InstancedBufferAttribute(new Float32Array(),2));
geometry.setAttribute('rotation',new THREE.InstancedBufferAttribute(new Float32Array(),1));
geometry.setAttribute('color',new THREE.InstancedBufferAttribute(new Float32Array(),4));
geometry.setAttribute('blend',new THREE.InstancedBufferAttribute(new Float32Array(),1));
geometry.setAttribute('frame',new THREE.InstancedBufferAttribute(new Float32Array(),4));
geometry.setAttribute('texture',new THREE.InstancedBufferAttribute(new Float32Array(),1));


mat["indicator"]=new THREE.ShaderMaterial({
uniforms:{
map:{value:tex["atlas_indicator"]},
},
vertexShader:vs["indicator"],
fragmentShader:fs["indicator"],
glslVersion:THREE.GLSL3,
transparent:true,
depthTest:false,
depthWrite:false,
blending:THREE.CustomBlending,
blendEquation:THREE.AddEquation,
blendSrc:THREE.OneFactor,
blendDst:THREE.OneMinusSrcAlphaFactor
});


mesh["indicator"]=new THREE.Mesh(geometry,mat["indicator"]);
mesh["indicator"].frustumCulled=false;
mesh["indicator"].matrixAutoUpdate=false;
mesh["indicator"].updateMatrixWorld=function(){};
scene_hud.add(mesh["indicator"]);


indicator_attributes=mesh["indicator"].geometry.attributes;


}


function indicators_update(items){


let values=[];


let max=items.length;
for(let n=0;n<max;n++){
let max_2=items[n].length;
if(max_2){
for(let k=0;k<max_2;k++){
values.push(items[n][k]);
}	
}
else{
for(let i in items[n]){
values.push(items[n][i]);
}
}
}


let count=values.length;


let offset=new Float32Array(count*2);
let scale=new Float32Array(count*2);
let rotation=new Float32Array(count);
let color=new Float32Array(count*4);
let blend=new Float32Array(count);
let frame=new Float32Array(count*4);
let texture=new Float32Array(count);


let n=count;


while(n--){


let item=values[n];
rotation[n]=item.rotation;
texture[n]=item.texture;
blend[n]=item.blend;


let i0=n*2;
let i1=i0+1;
let i=item.scale;
scale[i0]=i[0];
scale[i1]=i[1];
i=item.offset;
offset[i0]=i[0];
offset[i1]=i[1];


i0=n*4;
i1=i0+1;
let i2=i0+2;
let i3=i0+3;
i=item.color;
color[i0]=i[0];
color[i1]=i[1];
color[i2]=i[2];
color[i3]=i[3];
i=item.frame;
frame[i0]=i[0];
frame[i1]=i[1];
frame[i2]=i[2];
frame[i3]=i[3];


}


indicator_attributes.offset=new THREE.InstancedBufferAttribute(offset,2).setUsage(THREE.StreamDrawUsage);
indicator_attributes.scale=new THREE.InstancedBufferAttribute(scale,2).setUsage(THREE.StreamDrawUsage);
indicator_attributes.rotation=new THREE.InstancedBufferAttribute(rotation,1).setUsage(THREE.StreamDrawUsage);
indicator_attributes.color=new THREE.InstancedBufferAttribute(color,4).setUsage(THREE.StreamDrawUsage);
indicator_attributes.blend=new THREE.InstancedBufferAttribute(blend,1).setUsage(THREE.StreamDrawUsage);
indicator_attributes.frame=new THREE.InstancedBufferAttribute(frame,4).setUsage(THREE.StreamDrawUsage);
indicator_attributes.texture=new THREE.InstancedBufferAttribute(texture,1).setUsage(THREE.StreamDrawUsage);


mesh["indicator"].geometry._maxInstanceCount=count;


}


function indicator_get_screen(item){
	

let object_mw=item.object_mw;


let position_origin_x=object_mw[12]+item.offset_x;
let position_origin_y=object_mw[13]+item.offset_y;
let position_origin_z=object_mw[14]+item.offset_z;


let target_position_x=position_origin_x;
let target_position_y=position_origin_y;
let target_position_z=position_origin_z;


let direction_x=target_position_x-camera_position_x;
let direction_y=target_position_y-camera_position_y;
let direction_z=target_position_z-camera_position_z;


let denominator=Math.sqrt((direction_x*direction_x+direction_y*direction_y+direction_z*direction_z)*camera_lengthSq);
let angleTo;
if(denominator===0){ angleTo=PI_half; }
else{
let theta=(direction_x*camera_direction_x+direction_y*camera_direction_y+direction_z*camera_direction_z)/denominator;
angleTo=Math.acos(Math.max(-1,Math.min(1,theta)));
}


let side=1;
if(angleTo>PI_half){ side=-1; }


vector3.set(target_position_x,target_position_y,target_position_z).project(camera);
target_position_x=vector3.x;
target_position_y=vector3.y;
target_position_z=vector3.z;


let screen_x=side*target_position_x*canvas_half_width;
let screen_y=side*target_position_y*canvas_half_height;
let rotation=-Math.atan2(screen_x,screen_y);	


if(side==-1 || Math.abs(target_position_x)>1 || Math.abs(target_position_y)>1){
let distance=Math.min(Math.abs(((canvas_half_width))/Math.cos((PI_half)-rotation)),Math.abs(((canvas_half_height))/Math.cos(-rotation)));
let divider=1/Math.sqrt(screen_x*screen_x+screen_y*screen_y)*distance;
screen_x*=divider;
screen_y*=divider;
}


let screen_origin_x=screen_x;
let screen_origin_y=screen_y;
let in_screen=1;
let border=indicator_border[item.name];


if(screen_x<border.left){ in_screen=0; screen_x=border.left; }
if(screen_x>border.right){ in_screen=0; screen_x=border.right; }
if(screen_y>border.top){ in_screen=0; screen_y=border.top; }
if(screen_y<border.bottom){ in_screen=0; screen_y=border.bottom; }


let divider=1/Math.sqrt(screen_x*screen_x+screen_y*screen_y);


return [position_origin_x,position_origin_y,position_origin_z,in_screen,screen_origin_x,screen_origin_y,screen_x,screen_y,rotation,divider];
	
	
}