function Player(ctx, x, y, pic)
{
    this.alive = true;
    this.showing = true;
    this.sit = false;
    this.jump = false;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gameEnd = false;
    this.playerImg = MARIO_R;
    this.die = function() {
        this.alive = false;
        this.playerImg = DEAD_MARIO;
        this.speedY = 0;
        this.speedY += -8;
        mainMusic.pause();
        var element = document.getElementById('end');
        element.innerHTML = 'game over';
        if (!this.gameEnd)
        {
            var dieMusic = document.getElementById("die");
            dieMusic.play();
        }

    }
    this.win = function() {
        this.gameEnd = true;
        this.speedX = 3;
        mainMusic.pause();
        var winMusic = document.getElementById("levelComplite");
        winMusic.play();
        var element = document.getElementById('end');
        element.innerHTML = 'you win!';
        if (this.x > END_POS_OF_PLAYER)
        {
            this.showing = false;
        }
    }
    this.draw = function() {
        if (this.alive)
        {
            if (Math.floor(this.speedX) > 0)
            {
                this.playerImg = MARIO_R;
            }
            else if (Math.floor(this.speedX) < 0)
            {
                this.playerImg = MARIO_L;
            }
        }
        if (this.showing)
        {
            ctx.drawImage
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

function processingKeystrokes(player)
{
    window.addEventListener('keydown', function()
    {
        keyDown(event.keyCode, player);
    });
    window.addEventListener('keyup', function()
    {
        keyUp(event.keyCode, player);
    });
}