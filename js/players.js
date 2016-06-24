function Player(g_ctx, x, y, pic)
{
    this.alive = true;
    this.showing = true;
    this.die = function(){
        this.alive = false;
        this.playerImg = DEAD_MARIO;
        this.vy += -5;
    }
    this.sit = false;
    this.jump = false;
    this.vx = 0;
    this.vy = 0;
    this.x = x;
    this.y = y;
    this.playerImg = MARIO_R;
    this.draw = function(){
        if (this.alive)
        {
            if (Math.floor(this.vx) > 0)
            {
                this.playerImg = MARIO_R;
            }
            else if (Math.floor(this.vx) < 0)
            {
                this.playerImg = MARIO_L;
            }
        }
        if (this.showing)
        {
            g_ctx.drawImage
            (
                pic,
                0,
                getImagePlaceOnSprite(this.playerImg),
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

function processingKeystrokes()
{
    window.addEventListener('keydown', function()
    {
        keyDown(event.keyCode, g_player);
    });
    window.addEventListener('keyup', function()
    {
        keyUp(event.keyCode, g_player);
    });
}
