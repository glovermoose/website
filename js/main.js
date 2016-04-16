/*=============================================
-----------------------------------
Copyright (c) 2016 Daniel Welsh
-----------------------------------
@file: main.js
@date: 16/04/2016
@author: Daniel Welsh
@brief: The main.js
===============================================*/

var loop = function () { }; /// create deligate to swap between menu loop and game loop depending on clicks
function GameLoop()
{
    CONTEXT.save();
    CONTEXT.fillRect(0, 0, Room.width, Room.height);
    CONTEXT.restore();
}

loop = function()
{
    if (Images.startButton.complete)
    {
        CONTEXT.drawImage(Images.startButton, Images.startButton.myx - Images.startButton.width / 2, Images.startButton.myy - Images.startButton.height / 2);
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
        if (InRect(Input.mouse_x, Input.mouse_y, Images.startButton.myx, Images.startButton.myy, Images.startButton.myx + Images.startButton.width, Images.startButton.myy + Images.startButton.height))
        {
            loop = GameLoop();
        }
    }
    ///////
    CONTEXT.beginPath();
    CONTEXT.rect(Images.startButton.myx - Images.startButton.width / 2, Images.startButton.myy - Images.startButton.height / 2, Images.startButton.width, Images.startButton.height);
    CONTEXT.stroke();
    CONTEXT.closePath();
    ///////
}

setInterval(function ()
{
    GetDealtaTime();
    document.getElementById("deltaTime").innerHTML = "fps: " + Time.deltaTime * 1000;
    document.getElementById("mousex").innerHTML = "x: " + Input.mouse_x;
    document.getElementById("mousey").innerHTML = "Y: " + Input.mouse_y;
    loop();
}
, 1000 / Time.FPS)

