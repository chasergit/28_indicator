function indicator_damage_bullets_update(){


let mw=mesh["ammo"].matrixWorld.elements;


let x=mw[12]-camera_position_x;
let z=mw[14]-camera_position_z;
let divider=1/Math.sqrt(x*x+z*z);
x*=divider;
z*=divider;


let rotation=Math.atan2(camera_2d_direction_z,camera_2d_direction_x)-Math.atan2(z,x);


let item=indicator["damage_bullets"]["enemy_damage"]


item.rotation=rotation;


item.offset[0]=Math.sin(-rotation)*damage_distance;
item.offset[1]=Math.cos(-rotation)*damage_distance;


}
