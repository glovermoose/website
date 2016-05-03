function GameObject()
{
	var gameObject = 
	{
		x:0,
		y:0,
		width:32,
		height:32,
		Update:function(){},
		Draw:function(){}
	}
	return gameObject;
}

function Paddle()
{
	var paddle = new GameObject();
	paddle.x = 0;
	paddle.y = room_height - paddle.height;
	paddle.width = 96;
	paddle.Update = function()
	{
if (left == true) {
//alert(Date.now);
paddle.x-=2 * deltaTime;
}
if (right == true) {paddle.x+=2 * deltaTime};
	}

	paddle.Draw = function()
	{
CONTEXT.beginPath();
CONTEXT.strokeStyle = "blue";
CONTEXT.rect(paddle.x,paddle.y,paddle.width,paddle.height);
CONTEXT.fill();
CONTEXT.closePath();
	}
	gameObjects.push(paddle);
	return paddle;
}

function CreatePaddle()
{
	r = new Paddle();
	gameObjects.push(r);
}