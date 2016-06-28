function collision(object, side, map)
{
    var func = getSideFunc(side);
    var result = {pos: 0, coll: false};

    for (var i = 0; i < map.length; i ++)
    {
        if (func(i, object.x, object.y, object.vx, object.vy))
        {
            result = {pos: i, coll: true};
            break;
        }
    }
    return result;

    function isLeftCollide(i, x, y, vx, vy)
    {
        return ((x > map[i].x) && (x - 5 < map[i].x + CELL_SIZE) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isRightCollide(i, x, y, vx, vy)
    {
        return ((x + CELL_SIZE + 5 > map[i].x) && (x < map[i].x) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isUpCollide(i, x, y, vx, vy)
    {
        return ((x + CELL_SIZE > map[i].x && x < map[i].x + CELL_SIZE) &&
                (y - EPSILON + vy < map[i].y + CELL_SIZE ) && (y > map[i].y + CELL_SIZE + vy));
    }

    function isDownCollide(i, x, y, vx, vy)
    {
        return (((y + CELL_SIZE + vy + EPSILON > map[i].y) && (y + CELL_SIZE < map[i].y + vy + EPSILON)) &&
                ((x + CELL_SIZE > map[i].x) && (x < map[i].x + CELL_SIZE)));
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

function brakingDistance(player)
{
    if ((!g_rightKeyDown) && (!g_leftKeyDown) && !rightCollision.coll && !leftCollision.coll && g_player.x >= scrollSum)
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
    if (leftCollision.coll)
    {
        player.x = g_coll_map[leftCollision.pos].x + CELL_SIZE + 5;
        player.vx = 0;
    }
    if (rightCollision.coll)
    {
        player.x = g_coll_map[rightCollision.pos].x - CELL_SIZE - 5;
        player.vx = 0;
    }
    if (upCollision.coll)
    {
        player.y -= player.vy;
        player.vy = 0;
    }
    if (downCollision.coll && !g_upKeyDown)
    {
        player.y = g_coll_map[downCollision.pos].y - (EPSILON * 31);
        player.y -= EPSILON;
        player.vy = 0;
    }
}

function gravityProcess(player)
{
    if (!player.alive || !downCollision.coll)
    {
        player.jump = true;
        player.vy += GRAVITY;
        player.y += player.vy;
    }
    else if (downCollision.coll)
    {
        setTimeout(function() {
            player.jump = false;
        }, WAITING_BEFORE_JUMP);
    }
}
