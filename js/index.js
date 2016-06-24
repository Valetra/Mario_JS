var g_player = new Player(g_ctx, START_POSITION_OF_MARIO_X, START_POSITION_OF_MARIO_Y, pic);
var g_enemy = new Enemy(g_ctx, START_ENEMY_POS_X, START_ENEMY_POS_Y, pic);

function start()
{
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    generateCollMap();

    function drawGame() //game loop
    {
        render();
        update(g_player);
        updateEnemy(g_enemy);
        g_enemy.x += g_enemy.vx;
        g_player.draw();
        g_enemy.draw();
        window.requestAnimationFrame(drawGame);
    }
    processingKeystrokes();
    drawGame();
}
