
function Draw()
{
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    player.Draw();
}


function Update()
{
    player.Update();
}
function loop()
{
    Update();
    Draw();

}

setInterval(function ()
{
    GetDealtaTime();

    loop();
}
, 1000 / Time.FPS)