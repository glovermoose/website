
function gameloop()
{
    GetDeltaTime();

    for (var i = 0; i < gameObjects.length; i++)
    {
        gameObjects[i].Update();
        for (var e = 0; e < gameObjects.length-1; e++)
        {
            if (gameObjects[i].x < gameObjects[i+1].x + gameObjects[i+1].width &&
       gameObjects[i].x + gameObjects[i].width > gameObjects[i+1].x &&
       gameObjects[i].y < gameObjects[i+1].y + gameObjects[i+1].height &&
       gameObjects[i].height + gameObjects[i].y > gameObjects[i+1].y)
            {
                console.log(gameObjects[i] + " collided with " + gameObjects[i+1]);
            }
        }
    }

    CONTEXT.clearRect(0, 0, room_width, room_height);
    for (var i = 0; i < gameObjects.length; i++)
    {
        gameObjects[i].Draw();
    }

}
setInterval(gameloop, 1000 / 30);