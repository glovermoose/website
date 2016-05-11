var deltaTime = 0;
var lastTime = 0;

var room_width = 512;
var room_height = 512;

var currentKey = "";

var gameObjects = [];
var keydown = false;
var left = false;
var right = false;
var space = false;

var CANVAS = document.getElementById("myCanvas");
var CONTEXT = CANVAS.getContext("2d");

function log(string)
{
    console.log(string);
}

window.onkeydown = function (e)
{
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == 39)
    {
        right = true;
        //alert(right);
    } else if (key == 37)
    {
        left = true;
    }
    keydown = true;
    myKeyPress(e);
}
function drawCircle(x,y,r)
{
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = "red";
    CONTEXT.arc(x, y, r, 0, 2 * Math.PI);
    CONTEXT.stroke();
}
function drawLine(x1,y1,x2,y2)
{
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = "red";
    CONTEXT.lineWidth = 6;
    CONTEXT.moveTo(x1, y1);
    CONTEXT.lineTo(x2, y2);
    CONTEXT.stroke();

    CONTEXT.beginPath();
    CONTEXT.strokeStyle = "yellow";
    CONTEXT.lineWidth = 3;
    CONTEXT.moveTo(x1, y1);
    CONTEXT.lineTo(x2, y2);
    CONTEXT.stroke();
    
    CONTEXT.beginPath();
    CONTEXT.strokeStyle = "blue";
    CONTEXT.lineWidth = 1;
    CONTEXT.moveTo(x1, y1);
    CONTEXT.lineTo(x2, y2);
    CONTEXT.stroke();
    //CONTEXT.closePath();
    CONTEXT.lineWidth = 1;
}

window.onkeyup = function (e)
{
    /*   var key = e.keyCode ? e.keyCode : e.which;
    
       if (key == 39) {
           right = false;
           //alert(right);
       }else if (key == 37) {
           left = false;
       }
       */
    keydown = false;
}

function myKeyPress(e)
{
    var keynum;

    if (window.event)
    { // IE                    
        keynum = e.keyCode;
    } else if (e.which)
    { // Netscape/Firefox/Opera                   
        keynum = e.which;
    }
    currentKey = String.fromCharCode(keynum);
    //alert(String.fromCharCode(keynum));
}

function GetDeltaTime()
{
    var now = Date.now();
    deltaTime = (now - lastTime) / 1000;
    lastTime = now;
}

function getDistance(x1,y1,x2,y2)
{
    return Math.abs(Math.abs(x1) - Math.abs(x2)) + Math.abs(Math.abs(y1) - Math.abs(y2));
}

function getRandomInt(a, b)
{
    return Math.floor((Math.random() * b) + a);
}


AngleToRadians = function (angle)
{
    return angle * Math.PI / 180;
}

function RadianToVector2(radian)
{
    return [Math.cos(radian), Math.sin(radian)];
}

AngleToVector = function (angle)
{
    return RadianToVector2(AngleToRadians(angle));
}

VectorsToAngle = function (x1, y1, x2, y2)
{
    // todo vecors to angle
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}