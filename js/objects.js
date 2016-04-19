function GameObject()
{
    var gameObject =
        {
            tag: "GameObject",
            arrayPos: 0,
            width: 32,
            height: 32,
            positionx: 0,
            positiony: 0,
            velocityx: 0,
            velocityy: 0,
            color: "white",
            awake: true,
            Update: function ()
            {

                this.position = this.velocity;
                this.velocity = Vector2.zero;
            },

            Draw: function ()
            {

            },
        };
}// Gameobject blueprint
var objects = [];

function Head()
{
    var head = new GameObject();
    head.positionx = 128;
    head.positiony = 128;
    head.velocityx = 0;
    head.velocityy = 0;
    head.wasPosx = 0,
    head.wasPosy = 0,
    head.gridposx = head.positionx / 32;
    head.gridposy = head.positiony / 32;
    head.height = 32;
    head.width = 32;
    head.tag = "head";
    head.snakePart = snakeBodyPos;
    head.direction = "right";
    snakeBodyPos++;

    head.Update = function ()
    {
        if (Input.keyboard_up)
        {
            this.direction = "up";
        }

        if (Input.keyboard_down)
        {
            this.direction = "down";
        }

        if (Input.keyboard_left)
        {
            this.direction = "left";
        }

        if (Input.keyboard_right)
        {
            this.direction = "right";
        }

        if (tick)
        {
            if (this.direction == "up")
            {
                this.velocityx = 0;
                this.velocityy = -this.height;
            }

            if (this.direction == "down")
            {
                this.velocityx = 0;
                this.velocityy = this.height;
            }

            if (this.direction == "left")
            {
                this.velocityy = 0;
                this.velocityx = -this.width;
            }

            if (this.direction == "right")
            {
                this.velocityy = 0;
                this.velocityx = this.width;
            }

            this.wasPosx = this.positionx;
            this.wasPosy = this.positiony;
            this.positionx += this.velocityx;
            this.velocityx = 0;
            this.positiony += this.velocityy;
            this.velocityx = 0;
            if (this.positionx < 0)
            {
                this.positionx = Room.width - 32;
            }

            if (this.positionx >= Room.width)
            {
                this.positionx = 0;
            }

            if (this.positiony < 0)
            {
                this.positiony = Room.height - 32;
            }

            if (this.positiony >= Room.height)
            {
                this.positiony = 0;
            }


        }

    }

    head.Draw = function ()
    {
        DrawFillRect(head.positionx, head.positiony, this.height, this.width, "rgb(75, 73, 74)")
    }
    return head;
}

head = new Head();
objects.push(head);

function Body()
{
    var body = new GameObject();
    body.tag = "body";
    body.snakePart = snakeBodyPos;
    body.height = 32,
    body.width = 32,
    body.wasPosx = 32,
   body.wasPosy = 32,
    body.positionx = objects[objects.length - 1].wasPosx,
    body.positiony = objects[objects.length - 1].wasPosy,
    snakeBodyPos++;
    // AddToArray(body);
    // objects.push(this);
    body.Update = function ()
    {
        if (this.positionx == head.positionx && this.positiony == head.positiony)
        {
            location.reload();
        }
        if (tick)
        {
            this.wasPosx = this.positionx;
            this.wasPosy = this.positiony;


            this.positionx = objects[this.snakePart - 1].wasPosx;
            this.positiony = objects[this.snakePart - 1].wasPosy;
        }
    }

    body.Draw = function ()
    {
        DrawFillRect(body.positionx, body.positiony, body.height, body.width, "rgb(75, 73, 74)")
    }
    return body;
}

function NewBody()
{
    body = new Body();
    objects.push(body);
}

function Fruit()
{
    fruit = new GameObject()
    fruit.positionx = (GetRandomInt(0, 19)) * 32;
    fruit.positiony = (GetRandomInt(0, 19)) * 32;
    fruit.image = Images.cherry;

    fruit.Update = function ()
    {
        if (this.positionx == head.positionx && this.positiony == head.positiony)
        {
            fruit.positionx = (GetRandomInt(0, 19)) * 32;
            fruit.positiony = (GetRandomInt(0, 19)) * 32;
            score += 1;
            tickSpeed -= 0.002;
            NewBody();
        }
    }

    fruit.Draw = function ()
    {
     //   DrawFillRect(this.positionx, this.positiony, 32, 32, "red")
        CONTEXT.drawImage(fruit.image, fruit.positionx, fruit.positiony);
        //CONTEXT.drawImage(cherry.src,fruit.positionx,fruit.positiony)
    }
    return fruit
}

fruit = new Fruit();
function AddToArray(object)
{
    for (var i = 0; i < realLength; i++)
    {
        if (objects[i] == "")
        {
            objects[i] = object;
            break;
        }
    }
    objects[realLength + 1] = object;
    realLength += 1;
}