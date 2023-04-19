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
        this.speedY += DIE_JUMP;
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
        this.speedX = WIN_PLAYER_SPEED;
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
    var self = this;
    this.changePlayerImg = function()
    {
        setIntervalForAnimation(function(animationFrame)
        {
            if (self.speedX > 0 && !self.jump)
            {
                if (self.playerImg == MARIO_R ||
                    self.playerImg == JUMP_MARIO_L ||
                    self.playerImg == JUMP_MARIO_R ||
                    self.playerImg == MARIO_L ||
                    self.playerImg == MARIO_L1 ||
                    self.playerImg == MARIO_L2 ||
                    self.playerImg == MARIO_L3)
                {
                    self.playerImg = MARIO_R1;
                }
                else if (self.playerImg == MARIO_R1 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_L ||
                         self.playerImg == MARIO_L1 ||
                         self.playerImg == MARIO_L2 ||
                         self.playerImg == MARIO_L3)
                {
                    self.playerImg = MARIO_R2;
                }
                else if (self.playerImg == MARIO_R2 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_L ||
                         self.playerImg == MARIO_L1 ||
                         self.playerImg == MARIO_L2 ||
                         self.playerImg == MARIO_L3)
                {
                    self.playerImg = MARIO_R3;
                }
                else if (self.playerImg == MARIO_R3 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_L ||
                         self.playerImg == MARIO_L1 ||
                         self.playerImg == MARIO_L2 ||
                         self.playerImg == MARIO_L3)
                {
                    self.playerImg = MARIO_R1;
                }
            }
            if (self.speedX < 0 && !self.jump)
            {
                if (self.playerImg == MARIO_L ||
                    self.playerImg == JUMP_MARIO_L ||
                    self.playerImg == JUMP_MARIO_R ||
                    self.playerImg == MARIO_R ||
                    self.playerImg == MARIO_R1 ||
                    self.playerImg == MARIO_R2 ||
                    self.playerImg == MARIO_R3)
                {
                    self.playerImg = MARIO_L1;
                }
                else if (self.playerImg == MARIO_L1 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_R ||
                         self.playerImg == MARIO_R1 ||
                         self.playerImg == MARIO_R2 ||
                         self.playerImg == MARIO_R3)
                {
                    self.playerImg = MARIO_L2;
                }
                else if (self.playerImg == MARIO_L2 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_R ||
                         self.playerImg == MARIO_R1 ||
                         self.playerImg == MARIO_R2 ||
                         self.playerImg == MARIO_R3)
                {
                    self.playerImg = MARIO_L3;
                }
                else if (self.playerImg == MARIO_L3 ||
                         self.playerImg == JUMP_MARIO_L ||
                         self.playerImg == JUMP_MARIO_R ||
                         self.playerImg == MARIO_R ||
                         self.playerImg == MARIO_R1 ||
                         self.playerImg == MARIO_R2 ||
                         self.playerImg == MARIO_R3)
                {
                    self.playerImg = MARIO_L1;
                }
            }
            if (self.alive)
            {
                if (self.jump && self.speedX > 0)
                {
                    self.playerImg = JUMP_MARIO_R;
                }
                else if (self.jump && self.speedX < 0)
                {
                    self.playerImg = JUMP_MARIO_L;
                }
                if (self.jump && self.speedX == 0 && self.playerImg == MARIO_R)
                {
                    self.playerImg = JUMP_MARIO_R;
                }
                else if (self.jump && self.speedX == 0 && self.playerImg == MARIO_L)
                {
                    self.playerImg = JUMP_MARIO_L;
                }
                if (self.speedX == 0 && !self.jump)
                {
                    if (self.playerImg == MARIO_L1 ||
                        self.playerImg == MARIO_L2 ||
                        self.playerImg == MARIO_L3 ||
                        self.playerImg == JUMP_MARIO_L)
                    {
                        self.playerImg = MARIO_L;
                    }
                    if (self.playerImg == MARIO_R1 ||
                        self.playerImg == MARIO_R2 ||
                        self.playerImg == MARIO_R3 ||
                        self.playerImg == JUMP_MARIO_R)
                    {
                        self.playerImg = MARIO_R;
                    }
                }
            }
            if (!self.alive)
            {
                cancelAnimationFrame(animationFrame);
            }
        }, 100);
    }
    this.draw = function ()
    {
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
    this.changePlayerImg();
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