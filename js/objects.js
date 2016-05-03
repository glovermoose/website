function GameObject()
{
    var gameObject =
	{
	    x: 0,
	    y: 0,
	    width: 32,
	    height: 32,
	    Update: function () { },
	    Draw: function () { }
	}
    return gameObject;
}

function Brick(_x, _y)
{
    brick = new GameObject();
    brick.x = _x;
    brick.y = _y;
    brick.height = 32;
    brick.width = 64;
    brick.Update = function ()
    {

    }
    brick.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = "rgb(" + brick.x + ", " + brick.y + ", 102)";
        CONTEXT.rect(ball.x, ball.y, ball.width, ball.height);
        CONTEXT.fill();
        CONTEXT.closePath();
    }
}

function Ball()
{
    var ball = new GameObject()
    ball.speed = 300;
    ball.x = room_width / 2;
    ball.y = room_height / 2;
    ball.width = 16;
    ball.height = 16;
    ball.velocityX = 5;
    ball.velocityY = 5;
    ball.Update = function ()
    {
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
    }

    ball.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = "green";
        CONTEXT.rect(ball.x, ball.y, ball.width, ball.height);
        CONTEXT.fill();
        CONTEXT.closePath();
    }
    gameObjects.push(ball);
    return ball;
}

function Paddle()
{
    var paddle = new GameObject();
    paddle.speed = 350;
    paddle.x = 0;
    paddle.y = room_height - paddle.height;
    paddle.width = 96;
    paddle.Update = function ()
    {
        if (left == true)
        {
            paddle.x -= paddle.speed * deltaTime;
        }
        if (right == true)
        {
            paddle.x += paddle.speed * deltaTime;
        }
    }

    paddle.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = "blue";
        CONTEXT.rect(paddle.x, paddle.y, paddle.width, paddle.height);
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