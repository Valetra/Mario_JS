function Enemy(ctx, x, y, pic)
{
    this.alive = true;
    this.enemyImg = ENEMY_GOOMBA_L;
    this.speedX = -1;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.showing = true;
    this.changeEnemyImage = function() {
        var self = this;
        animate({
            duration: 1000,
            timing: function(timeFraction) {
                return timeFraction;
            },
            draw: function(progress) {
                if (self.enemyImg == ENEMY_GOOMBA_L)
                {
                    self.enemyImg = ENEMY_GOOMBA_R;
                }
                else
                {
                    self.enemyImg = ENEMY_GOOMBA_L;
                }
            }
        });
    }
    this.die = function() {
        var kickSound = document.getElementById("kick");
        kickSound.play();
        this.alive = false;
        this.speedX = 0;
        this.enemyImg = DEAD_ENEMY_GOOMBA;
        g_score += 100;
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