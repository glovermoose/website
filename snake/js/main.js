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
    tickTimer += Time.deltaTime;
    if (tickTimer >= tickSpeed)
    {
        tickTimer = 0;
        tick = true;
    }
    DrawFillRect(0, 0, Room.width, Room.height, "rgb(183, 224, 158)")


    for (var i = 0; i < objects.length; i++)
    {
        objects[i].Update();
        fruit.Update();
        //head.Update();
        //body.Update();
        objects[i].Draw();
        fruit.Draw();
        //head.Draw();
        //body.Draw();
    }

    tick = false;
}

loop = function ()
{
    if (Images.startButton.complete)
    {
        //  Images.startButton.myx -= Images.startButton.width / 2;
        CONTEXT.drawImage(Images.startButton, Images.startButton.myx, Images.startButton.myy);
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
        if (InRect(Input.mouse_x, Input.mouse_y, Images.startButton.myx, Images.startButton.myy, Images.startButton.width, Images.startButton.height))
        {
            loop = GameLoop;
        }
    }
    ///////

    ///////
}

setInterval(function ()
{
    GetDealtaTime();
    document.getElementById("left").innerHTML = "score: " + score;

    loop();
}
, 1000 / Time.FPS)

