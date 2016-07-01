function collision(object, side, map)
{
    var func = getSideFunc(side);
    var result = {pos: 0, coll: false};

    for (var i = 0; i < map.length; i ++)
    {
        if (func(i, object.x, object.y, object.speedX, object.speedY))
        {
            result = {pos: i, coll: true};
            break;
        }
    }
    return result;

    function isLeftCollide(i, x, y, speedX, speedY)
    {
        return ((x > map[i].x) && (x - 5 < map[i].x + CELL_SIZE) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isRightCollide(i, x, y, speedX, speedY)
    {
        return ((x + CELL_SIZE + 5 > map[i].x) && (x < map[i].x) &&
                ((y + CELL_SIZE > map[i].y && y < map[i].y + CELL_SIZE)));
    }

    function isUpCollide(i, x, y, speedX, speedY)
    {
        return ((x + CELL_SIZE > map[i].x && x < map[i].x + CELL_SIZE) &&
                (y - EPSILON + speedY < map[i].y + CELL_SIZE ) && (y > map[i].y + CELL_SIZE + speedY));
    }

    function isDownCollide(i, x, y, speedX, speedY)
    {
        return (((y + CELL_SIZE + speedY + EPSILON > map[i].y) && (y + CELL_SIZE < map[i].y + speedY + EPSILON)) &&
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

function leftScreenCollision(player)
{
    var lastPosX = player.x;
    if (player.x <= scrollSum)
    {
        player.x = lastPosX;
        player.speedX = 0;
    }
}

function brakingDistance(player)
{
    if ((!g_rightKeyDown) && (!g_leftKeyDown) && !rightCollision.coll && !leftCollision.coll && player.x >= scrollSum)
    {
        if (Math.floor(player.speedX) != 0)
        {
            player.speedX = (player.speedX > 0) ? player.speedX - STOP_PATH: player.speedX + STOP_PATH;
            player.x += player.speedX;
        }
        else
        {
            player.speedX = 0;
        }
    }
}

function resetSpeed(player)
{
    if (leftCollision.coll)
    {
        player.x = coll_map[leftCollision.pos].x + CELL_SIZE + 5;
        player.speedX = 0;
    }
    if (rightCollision.coll)
    {
        player.x = coll_map[rightCollision.pos].x - CELL_SIZE - 5;
        player.speedX = 0;
    }
    if (upCollision.coll)
    {
        player.y -= player.speedY;
        player.speedY = 0;
    }
    if (downCollision.coll && !g_upKeyDown)
    {
        player.y = coll_map[downCollision.pos].y - (EPSILON * 31);
        player.y -= EPSILON;
        if (player.alive)
        {
            player.speedY = 0;
        }
    }
}

function gravityProcess(player)
{
    if (!player.alive || !downCollision.coll)
    {
        player.jump = true;
        player.speedY += GRAVITY;
        player.y += player.speedY;
    }
    else if (downCollision.coll)
    {
        setTimeout(function() {
            player.jump = false;
        }, WAITING_BEFORE_JUMP);
    }
}
