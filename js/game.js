function init()
{
    initPlayer();
    initCollMap();
}

var scrollSum = 0;

function scroller(canvas)
{
    if (g_player.x - scrollSum >= screen.width / 2)
    {
        scrollSum += g_player.vx;
        canvas.style.marginLeft = scrollSum * (-1) + 'px';
    }
}

var enemy1 = true;
var enemy2 = true;
var enemy3 = true;
var enemy4 = true;
var enemy5 = true;
var enemy6 = true;
var enemy7 = true;
var enemy8 = true;
var enemy9 = true;

POS_OF_ENEMY_1_X = 700;

POS_OF_ENEMY_2 = 1376;

function initEnemies()
{
    if (g_player.x > 0 && enemy1)
    {
        g_enemies_array.push(new Enemy(g_ctx, 700, GROUND_LINE, pic));
        enemy1 = false;
    }
    if (g_player.x > POS_OF_ENEMY_2 - (screen.width / 2) && enemy2)
    {
        g_enemies_array.push(new Enemy(g_ctx, POS_OF_ENEMY_2, 383, pic));
        enemy2 = false
    }
   /* g_enemies_array.push(new Enemy(g_ctx, 1616, 383, pic));
    g_enemies_array.push(new Enemy(g_ctx, 1670, 383, pic));
    g_enemies_array.push(new Enemy(g_ctx, 200, 200, pic));*/
}

function initPlayer()
{
    g_player = new Player(g_ctx, START_POSITION_OF_MARIO_X, START_POSITION_OF_MARIO_Y, pic);
}

function initCollMap()
{
    generateCollMap();
}
