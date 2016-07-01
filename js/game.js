function drawGame(player, canvas, arrayOfEnemiesPosition, ctx, pic, coll_map) //game loop
{
    initEnemies(arrayOfEnemiesPosition, player, ctx, pic);
    scroller(canvas, player);
    render(player, ctx, pic);
    update(player);
    window.requestAnimationFrame(function() {
        drawGame(player, canvas, arrayOfEnemiesPosition, ctx, pic, coll_map);
    });
}

function init(player, ctx, arrayOfEnemiesPosition, pic, coll_map)
{
    initCollMap(player, ctx, pic, coll_map);
    initEnemies(arrayOfEnemiesPosition, player, ctx, pic);
}

function initEnemies(arrayOfEnemiesPosition, player, ctx, pic)
{
    for (var i = 0; i < arrayOfEnemiesPosition.length; i++)
    {
        if (arrayOfEnemiesPosition[i].x < screen.width && !arrayOfEnemiesPosition[i].showed)
        {
            g_enemies_array.push(new Enemy(ctx, arrayOfEnemiesPosition[i].x, arrayOfEnemiesPosition[i].y, pic));
            arrayOfEnemiesPosition[i].showed = true;
        }
        if (player.x >= arrayOfEnemiesPosition[i].x - screen.width && !arrayOfEnemiesPosition[i].showed)
        {
            g_enemies_array.push(new Enemy(ctx, arrayOfEnemiesPosition[i].x, arrayOfEnemiesPosition[i].y, pic));
            arrayOfEnemiesPosition[i].showed = true;
        }
    }
}

var scrollSum = 0;

function scroller(canvas, player)
{
    if (player.x < END_OF_MAP - screen.width / 2)
    {
        if (player.x - scrollSum >= screen.width / 2)
        {
            scrollSum += player.speedX;
            canvas.style.marginLeft = scrollSum * (-1) + 'px';
        }
    }
}

function initPlayer(player, ctx, pic)
{
    return player = new Player(ctx, START_POSITION_OF_MARIO_X, START_POSITION_OF_MARIO_Y, pic);
}

function initCollMap(player, ctx, pic)
{
    generateCollMap(player, ctx, pic, coll_map);
}
