var test =0;
//CreatePaddle();
p = new Paddle();
function gameloop()
{
GetDeltaTime();

for (var i = 0; i < gameObjects.length; i++) {
	gameObjects[i].Update();
}
CONTEXT.clearRect(0,0,room_width,room_height);
for (var i = 0; i < gameObjects.length; i++) {
	gameObjects[i].Draw();
}

}
setInterval(gameloop,1000/30);