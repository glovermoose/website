function GameObject()
{
    var gameObject =
	{
	    x: 0,
	    y: 0,
	    width: 0,
	    height: 0,
	    word: "",
	    Update: function () { },
	    Draw: function () { }
	}
    return gameObject;
}

function Earth()
{
    earth = new GameObject();
    earth.width = 64;
    earth.height = 64;
    earth.tag = "earth"
    earth.x = CANVAS.clientWidth / 2;
    earth.y = CANVAS.clientHeight / 2;
    earth.shields = 3;
    earth.timer = 0.0;
    earth.toSpawn = 10;
    earth.target = -1;
    earth.DeleteStringIndex = function ()
    {
        this.word = this.word.slice(1, this.word.length)
        currentKey = "";
    }
    earth.Update = function ()
    {
        this.timer += deltaTime;
        if (this.timer >= this.toSpawn)
        {
            alien = new Alien();
            this.timer = 0.0;
            this.toSpawn -= this.toSpawn > 1 ? 0.05 : 0;
        }
        //alert(deltaTime);

        for (var i = 0; i < gameObjects.length; i++)
        {
            if (gameObjects[i].tag == "alien")
                if (getDistance(this.x, this.y, gameObjects[i].x, gameObjects[i].y) < this.width + gameObjects[i].width)
                {
                    this.shields -= 1;
                    gameObjects[i] = new GameObject(); // delete this line!!!!!
                }
        }

        if (currentKey != "")
        {
            if (this.target == -1)
            {
                for (var i = 0; i < gameObjects.length; i++)
                {
                    if (gameObjects[i].tag == "alien")
                        if (gameObjects[i].ReturnfirstLetterUpper() == currentKey)
                        {
                            this.target = i;
                            gameObjects[i].DeleteStringIndex();
                            log(i);
                            drawLine(this.x, this.y, gameObjects[i].x, gameObjects[i].y);
                            break;
                        }
                }
            }
            else
            {
                
                if (gameObjects[this.target].ReturnfirstLetterUpper() == currentKey)
                {
                    if (gameObjects[this.target].tag == "alien")
                    {
                    drawLine(this.x, this.y, gameObjects[this.target].x, gameObjects[this.target].y);
                    gameObjects[this.target].DeleteStringIndex();
                    }

                }
                drawCircle(gameObjects[this.target].x, gameObjects[this.target].y, gameObjects[this.target].width + 5);
            }
        }
    }
    earth.Draw = function ()
    {
        for (var i = 0; i < this.shields; i++)
        {
            CONTEXT.beginPath();
            CONTEXT.strokeStyle = 'green';
            CONTEXT.arc(this.x, this.y, this.width + (i * 10), 0, 2 * Math.PI);
            CONTEXT.stroke();
            CONTEXT.closePath();

            CONTEXT.beginPath();
            CONTEXT.strokeStyle = 'red';
            CONTEXT.arc(this.x, this.y, this.width + (i * 10) + 2, 0, 2 * Math.PI);
            CONTEXT.stroke();
            CONTEXT.closePath();

        }
        CONTEXT.beginPath();
        CONTEXT.fillStyle = 'blue';
        CONTEXT.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        CONTEXT.fill();
        CONTEXT.closePath();
    }
    gameObjects.push(earth);
    return earth
}

function Alien()
{
    alien = new GameObject();
    alien.x = getRandomInt(0, 800);
    alien.y = getRandomInt(0, 800);
    alien.velocityX = 0;
    alien.arraypos = gameObjects.length;
    alien.width = 8;
    alien.velocityY = 0;
    alien.tag = "alien"
    alien.word = wordsArray[getRandomInt(0, wordsArray.length)];

    alien.DeleteStringIndex = function ()
    {
        this.word = this.word.slice(1, this.word.length)
        currentKey = "";
    }

    alien.ReturnfirstLetterUpper = function ()
    {
        log(this.word.charAt(0).toUpperCase());
        return this.word.charAt(0).toUpperCase();
    }

    alien.Update = function ()
    {
        if (this.word == "")
        {
            //gameObjects.splice(this.arraypos, 0);
            gameObjects[0].target = -1;
            gameObjects[this.arraypos] = new GameObject(); // temp fix DO NOT KEEP
        }
        //move towards earth 
        [this.velocityX, this.velocityY] = RadianToVector2(AngleToRadians(VectorsToAngle(this.x, this.y, CANVAS.clientWidth / 2, CANVAS.clientHeight / 2)));
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    alien.Draw = function ()
    {
        CONTEXT.beginPath();
        CONTEXT.fillStyle = 'green';
        CONTEXT.font = "20px Georgia";
        CONTEXT.fillText(this.word, this.x, this.y + 30);

        CONTEXT.fillStyle = 'green';
        CONTEXT.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        CONTEXT.fill();
        CONTEXT.closePath();
    }
    gameObjects.push(alien);
    return alien;
}