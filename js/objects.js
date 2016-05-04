function GameObject()
{
    var gameObject =
	{
	    x: 0,
	    y: 0,
	    tag: "gameObject",
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
    brick.tag = "brick";
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
        CONTEXT.fillStyle = "rgb(" + this.x + ", " + this.y + ", "+this.y+")";
        CONTEXT.strikeStyle = "black";
        CONTEXT.rect(this.x, this.y, this.width, this.height);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.closePath();
    }

    gameObjects.push(brick);
    return brick;
}

function Boundry(_x, _y, _width, _height)
{
    boundry = new GameObject();
    boundry.tag = "boundry";
    boundry.x = _x;
    boundry.y = _y;
    boundry.width = _width
    boundry.height = _height;
    boundry.Update = function ()
    {

    }
    boundry.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = "rgb(" + brick.x + ", " + brick.y + ", 102)";
        CONTEXT.strikeStyle = "black";
        CONTEXT.rect(this.x, this.y, this.width, this.height);
        CONTEXT.fill();
        CONTEXT.stroke();
        CONTEXT.closePath();
    }

    gameObjects.push(boundry);
    return boundry;
}

function Ball()
{
    var ball = new GameObject()
    ball.speed = 300;
    ball.x = room_width / 2;
    ball.y = room_height / 2;
    ball.tag = "ball";
    ball.width = 16;
    ball.height = 16;
    ball.velocityX = 3;
    ball.velocityY = 3;
    ball.Update = function ()
    {
        if (this.y>room_height)
        {
            this.x = room_width / 2;
            this.y = room_height / 2;
        }
        this.velocityX = this.velocityX > 0 ? speed : -speed;
        this.velocityY = this.velocityY > 0 ? speed : -speed;
        //ball.colisionCD -= 1;
        //ball.colisionCD = ball.colisionCD < 0 ? 0 : ball.colisionCD;
        this.x += this.velocityX;
        this.y += this.velocityY;
        // if (ball.colisionCD <= 0)
        for (var i = 0; i < gameObjects.length; i++)
        {
            if (this.x >= room_width)
            {
                this.velocityX *= -1;

                // this.velocityX = this.velocityX >= 0 ? -3 : 3;
            }
            else if (this.y <= 0)
            {
                this.velocityY *= -1;;
            }
            if (gameObjects[i].tag != "ball")
                if (this.x < gameObjects[i].x + gameObjects[i].width &&
                     this.x + this.width > gameObjects[i].x &&
                     this.y < gameObjects[i].y + gameObjects[i].height &&
                     this.height + this.y > gameObjects[i].y)
                {
                    /*
                     *   if (this.y < gameObjects[i].y + gameObjects[i].height)
                       {
                           this.velocityY = -this.velocityY;
                       }
                       else if (this.y > gameObjects[i].y + gameObjects[i].height)
                       {
                           console.log(gameObjects[i].tag)
                           this.velocityX *= -1;
                       }
   
                       if (this.x < gameObjects[i].x)
                       {
                           this.velocityX *= -1;
                       }
                       else if (this.x > gameObjects[i].x + gameObjects[i].width)
                       {
                           this.velocityX *= -1;
                       }
                     */
                    if (gameObjects[i].tag == "brick")
                    {
                        gameObjects[i].y -= 1000;
                        destroyedBlocks += 1;
                        speed += 0.25;
                        console.log("speed: " + speed);
                        console.log("velocity: "+ this.velocityX);
                    }
                    if (this.x + this.width / 2 < gameObjects[i].x || this.x + this.width / 2 > gameObjects[i].x + gameObjects[i].width)
                    {
                        this.velocityX *= -1;
                      
                    }
                    else //if (this.x+this.width/2 > gameObjects[i].x && this.x+this.width/2 < gameObjects[i].x+gameObjects[i].width)
                    {
                        this.velocityY *= -1;
                    }
                }
        }

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
    paddle.speed = 330;
    paddle.tag = "paddle";
    paddle.x = 0;
    paddle.y = room_height - paddle.height;
    paddle.width = 96;
    paddle.Update = function ()
    {
        if (left == true)
        {
            this.x -= (speed*110) * deltaTime;
        }
        if (right == true)
        {
            this.x += (speed*110) * deltaTime;
        }
    }

    paddle.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = "blue";
        CONTEXT.rect(this.x, this.y, this.width, this.height);
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