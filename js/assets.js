var CANVAS = document.getElementById("myCanvas");
var CONTEXT = CANVAS.getContext("2d");
var snakeBodyPos = 0;
var tick = false;
var pretick = false;
var tickSpeed = 0.2;
var tickTimer = 0.0;
var score = 0;
var realLength = 0;
var tailEndx = 0;
var tailEndy = 0;

function SnapToGridx(x, gridWidth)
{
    var newx = (x / gridWidth) * gridWidth;
    
    return newx
}

function SnapToGridy(y, gridHeight)
{
   var newy = (y / gridHeight) * gridHeight;

    return newy
}

var Time = {
    lastUpdate: 0,
    now: 0,
    deltaTime: 0,
    FPS: 30
}; // time variables

var Room = {
    offset: new Vector2(0, 0),
    width: 640,
    height: 640,

}; // room variables

var Input = {
    mouse_x: 0,
    mouse_y: 0,
    mouse_left: false,
    mosue_right: false,
    keyboard_down: false,
    keyboard_up: false,
    keybaord_left: false,
    keyboard_right: false,
    keybaord_space: false,
}; // Input variables

var Images = {
    startButton: new Image(),
    icon: new Image(),
    cherry: new Image(),
    optionsButton: new Image(),
    mysteryButtton: new Image(),
}; // image pointers
{
    Images.startButton.src = 'images/Start_Button.png';
    Images.startButton.myx = Room.width / 2 - 207/2 ;
    Images.startButton.myy = 150 - Images.startButton.height / 2;

    // Images.igon.src = 'images/ICON.png';

    Images.optionsButton.src = 'images/Options_Button.png';
    Images.optionsButton.myx = Room.width / 2;
    Images.optionsButton.myy = 300;

    Images.cherry.src = 'images/cherry.png'

    Images.mysteryButtton.src = 'images/Noice_Button.png';
    Images.mysteryButtton.myx = Room.width / 2;
    Images.mysteryButtton.myy = 450;
} // image sources

function GetDealtaTime()
{
    Time.now = Date.now();
    Time.deltaTime = Time.now - Time.lastUpdate;
    Time.lastUpdate = Time.now;
    Time.deltaTime /= 1000;
}

function GetRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function InRect(x, y, box_x, box_y, box_w, box_h)
{
    if (x > box_x)
    {
        if (y > box_y)
        {
            if (x < box_x + box_w)
            {
                if (y < box_y + box_h)
                {
                    return true;
                }
            }
        }
    }
    return false;
}// returns true or false if position is within rectangle

function DrawFillRect(x, y, height, width, string_color)
{
    CONTEXT.beginPath();
    CONTEXT.fillStyle = string_color;
    CONTEXT.fillRect(x, y, width, height);
    CONTEXT.fill();
    CONTEXT.closePath();
}

function DrawRect(x, y, height, width)
{
    CONTEXT.beginPath();
    CONTEXT.rect(x, y, width, height);
    CONTEXT.stroke();
    CONTEXT.closePath();
}

$(CANVAS).mousemove(function (e)
{
    $(CANVAS).mousemove(function (e)
    {
        var offset = $(this).offset();
        Input.mouse_x = Math.floor(e.pageX - offset.left);
        Input.mouse_y = Math.ceil(e.pageY - offset.top);
        //Input.mouse_x = e.pagex - offset.left;
        //Input.mouse_y = e.pageY - offset.top;
    });
}); // broken AF

$(CANVAS).mousedown(function (event)
{
    if (event.which == 1)
    {
        Input.mouse_left = true;
        //  console.log("left mb down");
    }
});

$(CANVAS).mouseup(function (event)
{
    if (event.which == 1)
    {
        Input.mouse_left = false;
    }
});

window.onkeydown = function (e)
{
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 38)
    { //up key
        Input.keyboard_up = true;
    }

   else if (code == 40)
    { //down key
        Input.keyboard_down = true;
    }

    else if(code == 37)
    { //up key
        Input.keyboard_left = true;
    }

    else if(code == 39)
    { //down key
        Input.keyboard_right = true;
    }

    else if (code == 32)
    { //down key
        NewBody();
    }
};

window.onkeyup = function (e)
{
    var code = e.keyCode ? e.keyCode : e.which;
    if (code == 38)
    { //up key
        Input.keyboard_up = false;
    }

    if (code == 40)
    { //down key
        Input.keyboard_down = false;
    }

    if (code == 37)
    { //up key
        Input.keyboard_left = false;
    }

    if (code == 39)
    { //down key
        Input.keyboard_right = false;
    }
};

$(CANVAS).keyup(function (event)
{
    if (event.keyCode == 37)
    {
        Input.keyboard_left = false;
    }

    if (event.keyCode == 39)
    {
        Input.keyboard_right = false;
    }

    if (event.keyCode == 38)
    {
        Input.keyboard_up = false;
    }

    if (event.keyCode == 40)
    {
        Input.keyboard_down = false;
    }

    if (event.keyCode == 32)
    {
        Input.keyboard_space = false;
    }
});
