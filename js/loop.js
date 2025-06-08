function loop(){


if(stop==1){ return; }


requestAnimationFrame(loop);


stats.update();


let started=performance.now();


delta=clock.getDelta();
controls.update(delta);
camera_data_update();
indicators_calculations();


let max=mixers.length;


for(let n=0;n<max;n++){
mixers[n].update(delta);
}


gpuPanel_shader_name=""; 
if(gpuPanel_shader_name==""){ gpuPanel.startQuery(); }


renderer.clear(); 
renderer.render(scene,camera); 
renderer_stats_update(0);
renderer.clearDepth(); 
renderer_hud.render(scene_hud,camera_hud);
renderer_stats_update(1,renderer_hud);


if(gpuPanel_shader_name==""){ gpuPanel.endQuery(); }


}
