setInterval(function ()
{
    GetDealtaTime();
    document.getElementById("left").innerHTML = "score: " + score;

    loop();
}
, 1000 / Time.FPS)