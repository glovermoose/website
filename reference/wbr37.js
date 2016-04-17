function GameObject() // GameObject Fucntion
{
    var gameObject = { // gameObject object
        name: "GameObject " + instanceId,
        tag: "null",
        position: new Vector2(),
        velocity: new Vector2(),
        rotation: 0,
        radius: 5,
        width: 32,
        height: 16,
        scale: 1,
        color: 'blue',
        isVisible: true,
        image: new Image(),
        GetWidth: function ()
        {
            return this.width * this.scale;
        },
        GetHeight: function ()
        {
            return this.height * this.scale;
        },
        Update: function (deltaTime)
        {
          
        },
        Draw: function ()
        {
           
        },
        //use this function to handle collision response
        OnCollisionStay: function (col)
        {

        }
    };
    
    // enemy -------------------------------------------
    function Enemy()
{
    // will make multiple enemies
    var enemy = new GameObject();
    enemy.name = "Enemy " + enemyCount;

    //Count up the enemy count by 1
    //   If enemy dies, new one will have a new number  (possibly the same number as a dead one)
    enemyCount++;

    enemy.tag = "Enemy";

    //enemy specific parameters
    enemy.speed = 20.0;  //decimal point to indicate "float"
    enemy.damage = 1.0;
    enemy.attackRate = 1.0;
    enemy.attackTimer = 0.0;
    enemy.Update = FollowPlayer;

    enemy.OnCollisionStay = function (col)
    {
        // Check if the collider that was hit was of type "Player" using it's tag
        if (col.tag == "Player")
        {
            // Check if attackTimer is >= attackRate
            if (this.attackTimer >= this.attackRate)
            {
                // Decrease the health of the player
                col.health -= this.damage;

                CreateExplosion(this.position, 10, 20, randomRedColor());

                // Print the player's health
                //console.log("Player's Health: " + col.health);// shows health in Chrome dev window

                // Reset attack Timer
                this.attackTimer = 0.0;
            }

        }
    }

    return enemy;
}