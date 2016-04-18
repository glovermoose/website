/*=============================================
-----------------------------------
Copyright (c) 2016 Daniel Welsh
-----------------------------------
@file: main.js
@date: 16/04/2016
@author: Daniel Welsh
@brief: The main.js
===============================================*/



//$(CANVAS).keydown(function (event)
//{
//    if (event.which = 37)
//    {
//        Input.keyboard_left = true;
//    }

//    if (event.which == 39)
//    {
//        Input.keyboard_right = true;
//    }

//    if (event.which == 38)
//    {
//        Input.keyboard_up = true;
//    }

//    if (event.which == 40)
//    {
//        Input.keyboard_down = true;
//    }

//    if (event.which == 32)
//    {
//        Input.keyboard_space = true;
//    }
//});


var loop = function () { }; /// create deligate to swap between menu loop and game loop depending on clicks
function GameLoop()
{
    tickTimer += Time.deltaTime;
    if (tickTimer>=tickSpeed)
    {
        tickTimer = 0;
        tick = true;
    }
    DrawFillRect(0, 0, Room.width, Room.height, "white")

  
        head.Update();
        head.Draw();

    tick = false;
}

loop = function()
{
    if (Images.startButton.complete)
    {
      //  Images.startButton.myx -= Images.startButton.width / 2;
        CONTEXT.drawImage(Images.startButton, Images.startButton.myx , Images.startButton.myy );
    }

    if (Images.optionsButton.complete)
    {
        CONTEXT.drawImage(Images.optionsButton, Room.width / 2 - (Images.optionsButton.width / 2), 250)
    }

    if (Images.mysteryButtton.complete)
    {
        CONTEXT.drawImage(Images.mysteryButtton, Room.width / 2 - (Images.mysteryButtton.width / 2), 400)
    }

    if (Input.mouse_left)
    {
        if (InRect(Input.mouse_x,Input.mouse_y,Images.startButton.myx,Images.startButton.myy,Images.startButton.width,Images.startButton.height))
        {
            loop = GameLoop;
        }
    }
    ///////
    CONTEXT.beginPath();
    CONTEXT.rect(Images.startButton.myx , Images.startButton.myy , Images.startButton.width, Images.startButton.height);
    CONTEXT.stroke();
    CONTEXT.closePath();
    ///////
}

setInterval(function ()
{
    GetDealtaTime();
    document.getElementById("left").innerHTML = "left: " + Input.keyboard_left;
    document.getElementById("down").innerHTML = "down: " + Input.keyboard_down;
    document.getElementById("right").innerHTML = "right: " + Input.keyboard_right;
    document.getElementById("up").innerHTML = "up: " + Input.keyboard_up;
    loop();
}
, 1000 / Time.FPS)

