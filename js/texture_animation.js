let texa=[]; // TEXTURE ANIMATIONS
let texa_frames=[]; // TEXTURE ANIMATION FRAMES


// ____________________ CREATING AN ARRAY OF FRAME FOR ANIMATION ____________________


function texa_frames_gen(name,item,columns,rows,frames_total){


texa_frames[name]=[];
let count=0;


for(let x=0;x<rows;x++){
for(let y=0;y<columns;y++){
texa_frames[name].push([item[0][0]*columns,item[0][1]*rows,item[0][2]+y*(1/item[0][0])/columns,1-(item[6]+item[5]/rows)/item[3]-(x*(1/item[0][1])/rows)]);
count++;
if(count==frames_total){ break; }
}
if(count==frames_total){ break; }
}


// COPY AS NEW TEXTURE
atlas[name]=[[item[0][0],item[0][1],item[0][2],item[0][3]],item[1],item[2],item[3],item[4],item[5],item[6]];


}


// ____________________ CREATING ANIMATION DATA AND RETURNING THE FIRST FRAME ____________________


function texa_set(name,anim,speed,current_frame,repeats_total){


texa[name]={}
let item=texa[name];
item.current_frame=current_frame;
item.passed_time=0;
item.frames_total=texa_frames[anim].length;
item.speed=speed;
if(repeats_total!=undefined){
item.frames_passed=current_frame;
item.frames_limit=repeats_total*item.frames_total;
}
item.frame=texa_frames[anim];
return item.frame[item.current_frame];


}


// ____________________ CREATING ANIMATION DATA FOR CLONING ____________________


function texa_gen(name,anim,speed,current_frame,repeats_total){


texa[name]={}
let item=texa[name];
item.current_frame=current_frame;
item.passed_time=0;
item.frames_total=texa_frames[anim].length;
item.speed=speed;
if(repeats_total!=undefined){
item.frames_passed=current_frame;
item.frames_limit=repeats_total*item.frames_total;
}
item.frame=texa_frames[anim];


item=atlas[anim];
// COPY AS NEW TEXTURE
atlas[name]=[[item[0][0],item[0][1],item[0][2],item[0][3]],item[1],item[2],item[3],item[4],item[5],item[6]];


}


// ____________________ TEXTURE ANIMATION ONE-TIME ____________________


/* 10,000 CALCULATIONS TAKES 0.10MS
let m=9090; for(let z=0;z<200;z++){ let s=performance.now(); for(let u=0;u<10000;u++){ texa_once(texa["coin_once"]); } let e=performance.now()-s; if(m>e){ m=e; } } console.log(m);
*/


function texa_once(item){


// ADD ELAPSED TIME TO ACCUMULATED TIME
item.passed_time+=delta;
// FINDING WHOLE FRAMES
let frames=Math.floor(item.passed_time/item.speed);
// WE SUBTRACT THE FOUND FOOTAGE FROM THE ACCUMULATED TIME
item.passed_time-=frames*item.speed;
// ADDING FRAMES
item.current_frame+=frames;
if(item.current_frame<item.frames_total){ return true; }


}


// ____________________ TEXTURE ANIMATION REUSABLE ____________________


/* 10,000 CALCULATIONS TAKES 0.20MS
let m=9090; for(let z=0;z<200;z++){ let s=performance.now(); for(let n=0;n<10000;n++){ texa_repeats(texa["coin_repeats"]); } let e=performance.now()-s; if(m>e){ m=e; } } console.log(m);
*/


function texa_repeats(item){


let speed=item.speed;
// ADD ELAPSED TIME TO ACCUMULATED TIME
item.passed_time+=delta;
// CUT OFF REPETITIONS AND TAKE ONLY CLEAN TIME
let clean=item.passed_time%(item.frames_total*speed);
// FINDING WHOLE FRAMES
let frames=Math.floor(clean/speed);
item.frames_passed+=Math.floor(item.passed_time/speed);
// WE RECORD NET TIME IN THE ACCUMULATED TIME WITH THE SUBTRACTION OF WHOLE FRAMES
item.passed_time=clean-frames*speed;
// FIND THE FRAME NUMBER TAKING INTO ACCOUNT REPETITION
item.current_frame=(item.current_frame+frames)%item.frames_total;
if(item.frames_passed<item.frames_limit){ return true; }


}


// ____________________ TEXTURE ANIMATION ENDLESS____________________


/* 10,000 CALCULATIONS TAKES 0.20MS
let m=9090; for(let z=0;z<200;z++){ let s=performance.now(); for(let u=0;u<10000;u++){ texa_loop(texa["coin_loop"]); } let e=performance.now()-s; if(m>e){ m=e; } } console.log(m);
*/


function texa_loop(item){


let speed=item.speed;
// ADD ELAPSED TIME TO ACCUMULATED TIME
item.passed_time+=delta;
// CUT OFF REPETITIONS AND TAKE ONLY CLEAN TIME
let clean=item.passed_time%(item.frames_total*speed);
// FINDING WHOLE FRAMES
let frames=Math.floor(clean/speed);
// WE RECORD NET TIME IN THE ACCUMULATED TIME WITH THE SUBTRACTION OF WHOLE FRAMES
item.passed_time=clean-frames*speed;
// FIND THE FRAME NUMBER TAKING INTO ACCOUNT REPETITION
item.current_frame=(item.current_frame+frames)%item.frames_total;
return item.frame[item.current_frame];


}