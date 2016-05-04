p = new Paddle();
b = new Ball();
lw = new Boundry(-5, 0, 5, room_height)
rw = new Boundry(room_width, 0, 5, room_height)
for (var i = 0; i < 5; i++)
{
    for (var e = 0; e < 10; e++)
    {
        brick = new Brick(e*64, i*40)
    }
}