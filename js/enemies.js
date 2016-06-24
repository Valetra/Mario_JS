function Enemy(g_ctx, x, y, pic)
{
    this.alive = true;
    this.die = function(){
        this.alive = false;
    }
    this.enemyImg = ENEMY_GOOMBA_L;
    this.vx = -1.5;
    this.vy = 0;
    this.x = x;
    this.y = y;
    this.showing = true;
    setEnemyImage(this);
    this.draw = function(){
        if (!this.alive)
        {
            this.vx = 0;
            this.enemyImg = DEAD_ENEMY_GOOMBA;
            var self = this;
            setTimeout(function(){
                self.showing = false;
            }, 500);
        }
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
}

function setEnemyImage(enemy)
{
    setInterval(function(){
        if (enemy.enemyImg == ENEMY_GOOMBA_L)
        {
            enemy.enemyImg = ENEMY_GOOMBA_R;
        }
        else
        {
            enemy.enemyImg = ENEMY_GOOMBA_L;
        }
    }, 250);
}

function updateEnemy(enemy)
{
    g_enemies_array = [];
    if (collision(enemy, DOWN, g_coll_map))
    {
        enemy.vy = 0;
    }
    else
    {
        enemy.vy += GRAVITY;
    }
    enemy.y += enemy.vy;
    if(collision(enemy, LEFT, g_coll_map) || collision(enemy, RIGHT, g_coll_map))
    {
        enemy.vx = - enemy.vx;
    }
    g_enemies_array.push({x: enemy.x, y: enemy.y});
}
