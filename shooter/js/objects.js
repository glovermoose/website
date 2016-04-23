function GameObject()
{
    var gameObject =
        {
            Update:function()
            {

            },
            Draw:function()
            {
                DrawFillRect(this.position.x,this.position.y,this.widthHeight.x,this.widthHeight.y,"red");
            },
        }
}

function Player()
{
    player = new GameObject()
    
        player.X = 10;
        player.Y = 10;
        player.width = 10;
        player.height = 10;
        player.speed =30;

        player.Update = function()
        {
            if (Input.keyboard_right)
            {
                this.X += this.speed * Time.deltaTime;
            }

            if (Input.keybaord_left)
            {
                this.X -= this.speed * Time.deltaTime;
            }

            if (Input.keyboard_up)
            {
                this.Y -= this.speed * Time.deltaTime;
            }

            if (Input.keyboard_down)
            {
                this.Y += this.speed * Time.deltaTime;
            }
        }
        player.Draw = function()
        {
            DrawFillRect(player.X, player.Y, player.width, player.height, "red");
        }
        return player;
}

var player = new Player();