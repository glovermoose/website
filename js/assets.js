var deltaTime =0;
var lastTime=0;

var room_width =640;
var room_height = 640;

var gameObjects = [];

var left =false;
var right = false;
var space = false;

var CANVAS = document.getElementById("myCanvas");
var CONTEXT = CANVAS.getContext("2d");

window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 39) {
       right = true;
   }else if (key == 37) {
       left = true;
   }
}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 39) {
       right = false;
   }else if (key == 37) {
       left = false;
   }
}


function GetDeltaTime()
{
	var now = Date.now();
deltaTime = (now - lastTime)/1000;
lastTime = now; 
}

