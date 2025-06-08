<?php


echo '<!DOCTYPE HTML>
<html>
<head>
<style>
html, body {
margin:0;
height:100%;
}
</style>
</head>
<body>


<div id="project" style="font-family:tahoma;height:100%;">
<div id="loading" style="position:absolute;display:block;top:50%;width:100%;text-align:center;font-family:arial;font-size:40px;color:#ffffff;text-shadow:1px 1px 4px #393342;">LOADED <span id="loading_amount"></span></div>
<div id="begin" style="cursor:pointer;z-index:2;position:absolute;display:none;top:50%;width:100%;text-align:center;font-family:arial;font-size:40px;color:#ffffff;text-shadow:1px 1px 4px #393342;">START</div>
<canvas id="canvas" style="display:block;"></canvas>
<canvas id="canvas_hud" style="display:block;position:absolute;top:0;left:0;"></canvas>
</div>


<script type="importmap">
{
"imports":{
"three": "./js/0_three/three_172.js",
"three/addons/": "./js/0_three/"
}
}
</script>


<script type="module">


"use strict"


import * as THREE from "three";
import Stats from "./js/stats/stats.js";
import GPUStatsPanel from "./js/stats/GPUStatsPanel.js";
import {FirstPersonControls} from "three/addons/controls/FirstPersonControls.js";
import * as SkeletonUtils from "three/addons/utils/SkeletonUtils.js";
import * as THREE_OBJLoader from "three/addons/loaders/OBJLoader.js"; // MODIFIED
import * as THREE_FBXLoader from "three/addons/loaders/FBXLoader.js"; // MODIFIED
';


$js_files=array(
'./js/stats/renderer_stats.js',
'./js/texture_animation.js',
'./js/indicator_damage_bullets.js',
'./js/init_core.js',
'./js/init_end.js',
'./js/objects/camera.js',
'./js/objects/indicator.js',
'./js/indicators_list.js',
'./js/lights.js',
'./js/sounds_list.js',
'./js/loader.js',
'./js/common.js',
'./shaders/indicator.js',
'./js/textures_list.js',
'./js/DataArrayTexture.js',
'./textures/atlas/indicator.js',
'./js/objects/atlas.js',
'./js/models/models_list.js',
'./js/models/ammo.js',
'./js/models/gun.js',
'./js/models/uaz.js',
'./js/models/soldier.js',
'./js/sounds.js',
'./js/loop.js',
);


foreach($js_files as $i){
echo file_get_contents($i);
}


echo '</script>
</body>
</html>';


?>