function collision(object, side, map)
{
    var func = getSideFunc(side);
    var result = false;

    for (var i = 0; i < map.length; i ++)
    {
        if (func(i, object.x, object.y, object.vy))
        {
            if (func == isUpCollide)
            {
                object.y = map[i].y + CELL_SIZE;
            }
            else if (func == isDownCollide)
            {
                object.y = map[i].y - CELL_SIZE;
            }
            result = true;
            break;
        }
    }
    return result;

    function isLeftCollide(i, x, y, vy)
    {
        return ((x > map[i].x) && (x < map[i].x + CELL_SIZE) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isRightCollide(i, x, y, vy)
    {
        return ((x + CELL_SIZE > map[i].x) && (x < map[i].x) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isUpCollide(i, x, y, vy)
    {
        return ((x + CELL_SIZE > map[i].x && x < map[i].x + CELL_SIZE) &&
                (y - EPSILON + vy < map[i].y + CELL_SIZE ) && (y > map[i].y))
    }

    function isDownCollide(i, x, y, vy)
    {
        return ((y + CELL_SIZE + vy + EPSILON > map[i].y) && (y < map[i].y) &&
                ((x + CELL_SIZE > map[i].x && x < map[i].x + CELL_SIZE)));
    }

    function getSideFunc(side)
    {
        var result;
        switch (side)
        {
            case UP:
                result = isUpCollide;
                break;
            case RIGHT:
                result = isRightCollide;
                break;
            case DOWN:
                result = isDownCollide;
                break;
            case LEFT:
                result = isLeftCollide;
                break;
        }
        return result;
    }
}

function update(player)
{
    gravityProcess(player);
    if (player.alive)
    {
        tryToKillEnemy(player);
        processKeys(player);
        resetSpeed(player);
        sitting(player);
        brakingDistance(player);
    }
}

function tryToKillEnemy(player)
{
    if (collision(player, UP, g_enemies_array) || collision(player, RIGHT, g_enemies_array) || collision(player, LEFT, g_enemies_array))
    {
        player.die();
        var element = document.getElementById('gameOver');
        element.innerHTML = 'game over';
    }
    else if (collision(player, DOWN, g_enemies_array))
    {
        g_enemy.die();
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
        if (!collision(player, RIGHT, g_coll_map))
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
        if (!collision(player, LEFT, g_coll_map))
        {
            if (player.vx > -MAX_SPEED)
            {
                player.vx -= (player.vx > 0)? STOP_PATH: MARIO_OFFSET;
            }
            player.x += player.vx;
        }
    }
}

function sitting(player)
{
    player.sit = g_downKeyDown;
}

function brakingDistance(player)
{
    if ((!g_rightKeyDown) && (!g_leftKeyDown) && !collision(player, RIGHT, g_coll_map) && !collision(player, LEFT, g_coll_map))
    {
        if (Math.floor(player.vx) != 0)
        {
            player.vx = (player.vx > 0) ? player.vx - STOP_PATH: player.vx + STOP_PATH;
            player.x += player.vx;
        }
        else
        {
            player.vx = 0;
        }
    }
}

function resetSpeed(player)
{
    if (collision(player, LEFT, g_coll_map) || collision(player, RIGHT, g_coll_map))
    {
        player.vx = 0;
    }
    if (collision(player, UP, g_coll_map) || collision(player, DOWN, g_coll_map))
    {
        player.vy = 0;
    }
}

function gravityProcess(player)
{
    if (!player.alive || !collision(player, DOWN, g_coll_map))
    {
        player.jump = true;
        player.vy += GRAVITY;
        player.y += player.vy;
    }
    else if (collision(player, DOWN, g_coll_map))
    {
        setTimeout(function(){
            player.jump = false;
        }, WAITING_BEFORE_JUMP);
    }
}
