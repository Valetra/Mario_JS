function Enemy(g_ctx, x, y, pic)
{
    this.alive = true;
    this.enemyImg = ENEMY_GOOMBA_L;
    this.vx = -1;
    this.vy = 0;
    this.x = x;
    this.y = y;
    this.showing = true;
    this.setEnemyImage = function() {
        var self = this;
        var timerId = setInterval(function() {
            if (!self.alive)
            {
                clearInterval(timerId);
            }
            else
            {
                if (self.enemyImg == ENEMY_GOOMBA_L)
                {
                    self.enemyImg = ENEMY_GOOMBA_R;
                }
                else
                {
                    self.enemyImg = ENEMY_GOOMBA_L;
                }
            }
        }, 150);
    }
    this.die = function() {
        this.alive = false;
        this.vx = 0;
        this.enemyImg = DEAD_ENEMY_GOOMBA;
        var self = this;
        setTimeout(function() {
            self.showing = false;
        }, 500);
    }
    this.draw = function() {
        if (this.showing)
        {
            g_ctx.drawImage
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
    this.setEnemyImage();
}

function updateEnemies(enemy)
{
    if (collision(enemy, DOWN, g_coll_map).coll)
    {
        enemy.vy = 0;
    }
    else
    {
        enemy.vy += GRAVITY;
    }
    enemy.y += enemy.vy;
    if(collision(enemy, LEFT, g_coll_map).coll || collision(enemy, RIGHT, g_coll_map).coll || collision(enemy, LEFT, g_enemies_array).coll || collision(enemy, RIGHT, g_enemies_array).coll)
    {
        enemy.vx = - enemy.vx;
    }
}

