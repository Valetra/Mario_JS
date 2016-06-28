var isUpCollision;
var isRightCollision;
var isDownCollision;
var isLeftCollision;

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

function update(player)
{
    for (var i = 0; i < g_enemies_array.length; i++)
    {
        updateEnemies(g_enemies_array[i]);
        g_enemies_array[i].x += g_enemies_array[i].vx;
        g_enemies_array[i].draw();
    }
    processingKeystrokes();
    upCollision = collision(player, UP, g_coll_map);
    rightCollision = collision(player, RIGHT, g_coll_map);
    downCollision = collision(player, DOWN, g_coll_map);
    leftCollision = collision(player, LEFT, g_coll_map);
    gravityProcess(player);
    if (player.alive)
    {
        tryToKillEnemy(player);
        tryToDie(player);
        processKeys(player);
        leftScreenCollision();
        resetSpeed(player);
        sitting(player);
        brakingDistance(player);
    }
}

function tryToKillEnemy(player)
{
    var result = collision(player, DOWN, g_enemies_array);
    if (result.coll && g_enemies_array[result.pos].alive)
    {
        g_enemies_array[result.pos].die();
        g_player.vy = 0;
        g_player.vy -= 5;
        setTimeout(function() {
            g_enemies_array.splice(result.pos, 1);
        },100);
    }
}

function tryToDie(player)
{
    if (collision(player, UP, g_enemies_array).coll || collision(player, RIGHT, g_enemies_array).coll || collision(player, LEFT, g_enemies_array).coll)
    {
        player.die();
        var element = document.getElementById('gameOver');
        element.innerHTML = 'game over';
    }
    if (g_player.y > 700)
    {
        player.die();
    }
}

function processKeys(player)
{
    if (g_upKeyDown)
    {
        if (!player.jump)
        {
            if (g_allowToJump)
            {
                g_allowToJump = false;
                player.vy += MAX_JUMP;
                player.y += player.vy;
            }
        }
    }
    if (g_rightKeyDown)
    {
        if (!rightCollision.coll)
        {
            if (player.vx < MAX_SPEED)
            {
                 player.vx += (player.vx < 0)? STOP_PATH: MARIO_OFFSET;
            }
            player.x += player.vx;
        }
    }
    else if (g_leftKeyDown)
    {
        if (!leftCollision.coll && g_player.x >= scrollSum)
        {
            if (player.vx > -MAX_SPEED)
            {
                player.vx -= (player.vx > 0)? STOP_PATH: MARIO_OFFSET;
            }
            player.x += player.vx;
        }
    }
}

function sitting(player)//Пока не используется
{
    player.sit = g_downKeyDown;
}
