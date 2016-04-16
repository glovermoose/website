var CANVAS = document.getElementById("myCanvas");
var CONTEXT = CANVAS.getContext("2d");

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
    optionsButton: new Image(),
    mysteryButtton: new Image(),
}; // image pointers
{
    Images.startButton.src = 'images/Start_Button.png';
    Images.startButton.myx = Room.width / 2;
    Images.startButton.myy = 150;

   // Images.igon.src = 'images/ICON.png';

    Images.optionsButton.src = 'images/Options_Button.png';
    Images.optionsButton.myx = Room.width / 2;
    Images.optionsButton.myy = 300;

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

/*
 * returns true or false if position is within rectangle
 * position: position ( Vector2 );
 * box_x1: left x ( int );
 * box_y1: top y ( int );
 * box_x2: right x ( int );
 * box_y2: bottom y ( int );
 *///explanation
function InRect(x, y, box_x1, box_y1, box_x2, box_y2)
{
    if (x > box_x1)
    {
        if (y > box_y1)
        {
            if (x < box_x2)
            {
                if (y < box_y2)
                {
                    return true;
                }
            }
        }
    }
    return false;
}// returns true or false if position is within rectangle

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

$(CANVAS).keydown(function (event)
{
    if (event.keyCode == 37)
    {
        Input.keyboard_left = true;
    }

    if (event.keyCode == 39)
    {
        Input.keyboard_right = true;
    }

    if (event.keyCode == 38)
    {
        Input.keyboard_up = true;
    }

    if (event.keyCode == 40)
    {
        Input.keyboard_down = true;
    }

    if (event.keyCode == 32)
    {
        Input.keyboard_space = true;
    }
});

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
