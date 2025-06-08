vs["indicator"]=`


attribute vec2 offset;
attribute vec2 scale;
attribute float rotation;
attribute vec4 color;
attribute float blend;
attribute vec4 frame;
attribute float texture;
varying vec2 vUv;
varying vec4 vColor;
varying float vBlend;
varying vec4 vFrame;
varying float tex_num;


void main(){


float angle=rotation;


vec3 vPosition=vec3(position.x*scale.x*cos(angle)-position.y*scale.y*sin(angle),position.y*scale.y*cos(angle)+position.x*scale.x*sin(angle),position.z);
vPosition.x+=offset.x;
vPosition.y+=offset.y;


vUv=uv;
vColor=color;
vBlend=blend;
tex_num=texture;
vFrame=frame;


// БЕЗ modelViewMatrix
gl_Position=projectionMatrix*vec4(vPosition,1.0);


}


`;


fs["indicator"]=`


uniform sampler2DArray map;
varying vec2 vUv;
varying vec4 vColor;
varying float vBlend;
varying vec4 vFrame;
varying float tex_num;
out vec4 outColor;


void main(){


outColor=texture(map,vec3(vUv/vFrame.xy+vFrame.zw,tex_num))*vColor;


outColor.rgb*=outColor.a; 
outColor.a*=vBlend;


}


`;
