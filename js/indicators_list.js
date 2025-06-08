let indicator=[]; // INDICATORS
let indicator_border=[]; // INDICATOR BRIDGES


indicator["ammo_data"]=[];
indicator["area"]=[];
indicator["coin"]=[];
indicator["player"]=[];
indicator["player_stat"]=[];
indicator["ammmo"]=[];
indicator["damage_bullets"]=[];


let damage_distance=200;
let blend=1;
let damage_count=8;
let p=6.28/damage_count;


function indicator_to_resize(){


indicator["player"]["test_left"]={offset:[-canvas_half_width+60,-canvas_half_height+20],scale:[100,20],rotation:0,color:[1,0.7,0,0.8],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};


indicator["player"]["health_bg"]={offset:[canvas_half_width-150,-canvas_half_height+120],scale:[248,38],rotation:0,color:[1,1,1,0.2],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};
indicator["player"]["health_color"]={offset:[canvas_half_width-150,-canvas_half_height+120],scale:[240,30],rotation:0,color:[1.2*0.55,1.2*0.73,1.2*0.25,0.9],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};


indicator["player"]["water_bg"]={offset:[canvas_half_width-150,-canvas_half_height+80],scale:[248,38],rotation:0,color:[1,1,1,0.2],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};
indicator["player"]["water_color"]={offset:[canvas_half_width-150,-canvas_half_height+80],scale:[240,30],rotation:0,color:[1.2*0.29,1.2*0.57,1.2*0.78,0.9],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};


indicator["player"]["food_bg"]={offset:[canvas_half_width-150,-canvas_half_height+40],scale:[248,38],rotation:0,color:[1,1,1,0.2],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};
indicator["player"]["food_color"]={offset:[canvas_half_width-150,-canvas_half_height+40],scale:[240,30],rotation:0,color:[1.2*0.76,1.2*0.43,1.2*0.2,0.9],blend:1,frame:atlas["color"][0],texture:atlas["color"][1]};


}


function indicators_set(){


indicator["damage_bullets"]["enemy_damage"]={type:0,time:1000,offset:[328,200],scale:[128,32],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["damage"][0],texture:atlas["damage"][1]};


indicator["area"]["a"]={offset:[200,100],scale:[44,44],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["area_a"][0],texture:atlas["area_a"][1]};
indicator["area"]["b"]={offset:[264,100],scale:[44,44],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["area_b"][0],texture:atlas["area_b"][1]};
indicator["area"]["c"]={offset:[328,100],scale:[44,44],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["area_c"][0],texture:atlas["area_c"][1]};
indicator["area"]["d"]={offset:[392,100],scale:[44,44],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["area_d"][0],texture:atlas["area_d"][1]};


for(let n=0;n<damage_count;n++){
let rot=n*p;
let x=Math.sin(-rot)*damage_distance;
let y=Math.cos(-rot)*damage_distance;
indicator["area"]["damage_"+n]={offset:[x,y],scale:[128,32],rotation:rot,color:[1,0,0,1],blend:blend,frame:atlas["damage"][0],texture:atlas["damage"][1]};
}


texa_gen("coin_clone","coin",0.06,0);


indicator["coin"]["coin_clone_1"]={type:0,time:1000,offset:[328,260],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa["coin_clone"].frame[0],texture:atlas["coin_clone"][1]};
indicator["coin"]["coin_clone_2"]={type:0,time:1000,offset:[360,260],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa["coin_clone"].frame[0],texture:atlas["coin_clone"][1]};
indicator["coin"]["coin_clone_3"]={type:0,time:1000,offset:[392,260],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa["coin_clone"].frame[0],texture:atlas["coin_clone"][1]};


indicator["coin"]["coin_1"]={type:0,time:1000,offset:[328,300],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa_set("coin_1","coin",0.032,0),texture:atlas["coin_clone"][1]};
indicator["coin"]["coin_2"]={type:0,time:1000,offset:[380,300],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa_set("coin_2","coin",0.032,0),texture:atlas["coin_clone"][1]};
indicator["coin"]["coin_3"]={type:0,time:1000,offset:[560,320],scale:[64,64],rotation:0,color:[1,1,1,1],blend:1,frame:texa_set("coin_3","coin",0.62,0,1),texture:atlas["coin_clone"][1]};


indicator["coin"]["coin_4"]={type:0,time:1000,offset:[450,220],scale:[32,32],rotation:0,color:[1,1,1,1],blend:1,frame:texa_set("coin_4","coin",0.01,0,30),texture:atlas["coin_clone"][1]};


}


function indicator_player_update(){


indicator["player_stat"]=[];


let digits=[...(player.health).toString()];
let max=digits.length;
let left=canvas_half_width-254;
let top=-canvas_half_height+120;
for(let n=0;n<max;n++){
indicator["player_stat"].push({offset:[left+n*9,top],scale:[16,16],rotation:0,color:[1,1,1,0.8],blend:1,frame:texa_frames["digits_big"][digits[n]],texture:atlas["digits_big"][1]});
}


digits=[...(player.water).toString()];
max=digits.length;
left=canvas_half_width-254;
top=-canvas_half_height+80;
for(let n=0;n<max;n++){
indicator["player_stat"].push({offset:[left+n*9,top],scale:[16,16],rotation:0,color:[1,1,1,0.8],blend:1,frame:texa_frames["digits_big"][digits[n]],texture:atlas["digits_big"][1]});
}


digits=[...(player.food).toString()];
max=digits.length;
left=canvas_half_width-254;
top=-canvas_half_height+40;
for(let n=0;n<max;n++){
indicator["player_stat"].push({offset:[left+n*9,top],scale:[16,16],rotation:0,color:[1,1,1,0.8],blend:1,frame:texa_frames["digits_big"][digits[n]],texture:atlas["digits_big"][1]});
}


}


function indicator_ammo_update(){


indicator["ammo"]=[];


for(let n in indicator["ammo_data"]){


let item=indicator["ammo_data"][n];


// UPDATE INDICATOR MATRICES BEFORE RENDERING SO THEY DON'T JERK
item.object.updateMatrixWorld();


// POSITION ON SCREEN
let [position_origin_x,position_origin_y,position_origin_z,in_screen,screen_origin_x,screen_origin_y,screen_x,screen_y,rotation,divider]=indicator_get_screen(item);


// CARTRIDGES
indicator["ammo"].push({offset:[screen_x,screen_y],scale:[44,44],rotation:0,color:[1,1,1,1],blend:1,frame:atlas["ammo"][0],texture:atlas["ammo"][1]});


// ARROW IN THE ZONE
if(in_screen){
indicator["ammo"].push({offset:[screen_x*divider*100,screen_y*divider*100],scale:[16,16],rotation:rotation,color:[1,1,1,1],blend:1,frame:atlas["arrow"][0],texture:atlas["arrow"][1]});
}
// ARROW OUT OF ZONE
else{
let rotation=-Math.atan2(screen_origin_x-screen_x,screen_origin_y-screen_y);
indicator["ammo"].push({offset:[screen_x-Math.sin(rotation)*30,screen_y+Math.cos(-rotation)*30],scale:[16,16],rotation:rotation,color:[1,1,1,1],blend:1,frame:atlas["arrow"][0],texture:atlas["arrow"][1]});
}


// DISTANCE
let distance=Math.floor(-item.radius+Math.sqrt(Math.pow(position_origin_x-camera_position_x,2)+Math.pow(position_origin_y-camera_position_y,2)+Math.pow(position_origin_z-camera_position_z,2)));
// BYPASSING THE ERROR WHEN WE ARE INSIDE THE RADIUS AND THE DISTANCE BECOMES NEGATIVE
distance=Math.max(distance,0);
let digits=[...(distance).toString()];
let max=digits.length;
let left=screen_x-max*8/2;
for(let n=0;n<max;n++){
indicator["ammo"].push({offset:[left+n*8,screen_y+42],scale:[16,16],rotation:0,color:[1,1,1,1],blend:1,frame:texa_frames["digits"][digits[n]],texture:atlas["digits"][1]});
}
indicator["ammo"].push({offset:[left+max*8,screen_y+42],scale:[16,16],rotation:0,color:[1,1,1,1],blend:1,frame:texa_frames["digits"][10],texture:atlas["digits"][1]});


}


}


function indicators_calculations(){


// ONE-TIME ANIMATION. FIRST THEN THE ANIMATION IS RUNNING, THEN ONLY THE INDICATOR IS CREATED TO SHOW THE FIRST FRAME


let name="coin_3";
if(texa[name]){
if(texa_once(texa[name])){
indicator["coin"][name].frame=texa[name].frame[texa[name].current_frame];
}
else{
delete texa[name];
delete indicator["coin"][name];
}
}
	

// MULTIPLE ANIMATION. FIRST THEN THE ANIMATION IS RUNNING, THEN ONLY THE CREATION OF THE INDICATOR SO THAT THE FIRST FRAME IS DISPLAYED


if(texa["coin_4"]){
if(texa_repeats(texa["coin_4"])){
indicator["coin"]["coin_4"].frame=texa["coin_4"].frame[texa["coin_4"].current_frame];
}
else{
delete texa["coin_4"];
delete indicator["coin"]["coin_4"];	
}
}

	
// FOR ENDLESS ANIMATIONS
indicator["coin"]["coin_1"].frame=texa_loop(texa["coin_1"]);
indicator["coin"]["coin_2"].frame=texa_loop(texa["coin_2"]);


// FOR CLONES WE COPY ANIMATION
let item=texa_loop(texa["coin_clone"]);
indicator["coin"]["coin_clone_1"].frame=item;
indicator["coin"]["coin_clone_2"].frame=item;
indicator["coin"]["coin_clone_3"].frame=item;


indicator_ammo_update();
indicator_player_update();
indicator_damage_bullets_update();
indicators_update([indicator["area"],indicator["coin"],indicator["ammo"],indicator["damage_bullets"],indicator["player"],indicator["player_stat"]]);	
	
	
}