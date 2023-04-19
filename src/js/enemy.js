function Enemy(ctx, x, y, pic)
{
    this.alive = true;
    this.enemyImg = ENEMY_GOOMBA_L;
    this.speedX = -1;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.showing = true;
    var self = this;
    this.changeEnemyImage = function() {
        setIntervalForAnimation(function(animationFrame)
        {
            if (self.enemyImg == ENEMY_GOOMBA_L)
            {
                self.enemyImg = ENEMY_GOOMBA_R
            }
            else
            {
                self.enemyImg = ENEMY_GOOMBA_L
            }
        }, 200);
    }
    this.die = function() {
        this.showing = false;
        var kickSound = document.getElementById("kick");
        kickSound.play();
        this.alive = false;
        this.speedX = 0;
        this.enemyImg = DEAD_ENEMY_GOOMBA;
        g_score += REWARD_FOR_KILL_ENEMY;
    }
    this.draw = function() {
        if (this.showing)
        {
            ctx.drawImage
            (
                pic,
                0,
                getImagePlaceOnSprite(this.enemyImg),
                CELL_SIZE,
                CELL_SIZE,
                this.x,
                this.y,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }
    this.changeEnemyImage();
}