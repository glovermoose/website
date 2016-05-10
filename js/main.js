var test =0;
function gameloop()
{
GetDeltaTime();

for (var i = 0; i < gameObjects.length; i++) {
	gameObjects[i].Update();
}
CONTEXT.fillStyle = 'black';
CONTEXT.fillRect(0,0,CANVAS.clientWidth,CANVAS.clientHeight);
for (var i = 0; i < gameObjects.length; i++) {
	gameObjects[i].Draw();
}

}
setInterval(gameloop,1000/30);