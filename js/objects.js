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
        }

    }

    head.Draw = function ()
    {
        DrawFillRect(this.positionx, this.positiony, this.height, this.width, "blue")
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
    body.wasPosx = 0,
   body.wasPosy = 0,
    snakeBodyPos++;
    // AddToArray(body);
    objects.push(this);
    Update = function ()
    {
        if (tick)
        {
            this.wasPosx = this.positionx;
            this.wasPosy = this.positiony;
            this.positionx = objects[snakeBodyPos - 1].positionx;
            this.positiony = objects[snakeBodyPos - 1].positiony;
        }
    }

    Draw = function()
    {
        DrawFillRect(this.positionx, this.positiony, this.height, this.width, "blue")
    }
    return body;
}
body = new Body();

function Fruit()
{
    fruit = new GameObject()
    fruit.positionx = SnapToGridx(GetRandomInt(0, Room.width), 32)
    fruit.positiony = SnapToGridy(GetRandomInt(0, Room.height), 32);
    fruit.image = Images.cherry;

    Update = function ()
    {
        if (this.posistionx == head.positionx && this.posistiony == head.positiony)
        {
            fruit.positionx = SnapToGridx(GetRandomInt(0, Room.width), 32)
            fruit.positiony = SnapToGridy(GetRandomInt(0, Room.height), 32);
            score += 1;
            head.addbody();
        }
    }
}

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