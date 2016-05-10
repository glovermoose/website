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

function Earth()
{
	earth = new GameObject();
	earth.width = 64;
	earth.height = 64;
    earth.x = CANVAS.clientWidth/2;
    earth.y = CANVAS.clientHeight/2;
	earth.shields =3;
    earth.timer = 0.0;
    earth.toSpawn = 10;
	earth.Update = function()
	{
        this.timer += deltaTime;
            if(this.timer >= this.toSpawn)
            {
                alien = new Alien();
                this.timer=0.0;
                this.toSpawn -= this.toSpawn> 1 ? 0.05 : 0 ; 
            }
      //alert(deltaTime);
	}

	earth.Draw = function()
	{
		for (var i = 0; i < this.shields; i++) {
					CONTEXT.beginPath();
		CONTEXT.strokeStyle = 'green';
		CONTEXT.arc(this.x,this.y,this.width+(i*10),0,2*Math.PI);
		CONTEXT.stroke();
		CONTEXT.closePath();

					CONTEXT.beginPath();
		CONTEXT.strokeStyle = 'red';
		CONTEXT.arc(this.x,this.y,this.width+(i*10)+2,0,2*Math.PI);
		CONTEXT.stroke();
		CONTEXT.closePath();

		}
		CONTEXT.beginPath();
		CONTEXT.fillStyle = 'blue';
		CONTEXT.arc(this.x,this.y,this.width,0,2*Math.PI);
		CONTEXT.fill();
		CONTEXT.closePath();
	}
    gameObjects.push(earth);
	return earth
}

function Alien()
{
	alien = new GameObject();
	alien.x=getRandomInt(0,800);
    alien.y=getRandomInt(0,800);
	alien.velocityX = 0;
    alien.width = 8;
    alien.velocityY = 0;
    alien.word = wordsArray[getRandomInt(0,wordsArray.length)];
	alien.Update = function()
	{
        
		//move towards earth 
       [this.velocityX,this.velocityY] = RadianToVector2(AngleToRadians(VectorsToAngle(this.x,this.y,CANVAS.clientWidth/2,CANVAS.clientHeight/2)));
        this.x+=this.velocityX;
        this.y+=this.velocityY;
	}
    alien.Draw = function()
    {
        CONTEXT.beginPath();
           CONTEXT.fillStyle = 'green';
        CONTEXT.font="20px Georgia";
        CONTEXT.fillText(this.word,this.x,this.y+30);
        
        CONTEXT.fillStyle = 'green';
		CONTEXT.arc(this.x,this.y,this.width,0,2*Math.PI);
		CONTEXT.fill();
		CONTEXT.closePath();
    }
	gameObjects.push(alien);
	return alien;
}