var g_ctx = null;
var g_player = null;

function start()
{
    var canvas = document.getElementById("canvas");
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    g_ctx = canvas.getContext('2d');
    init();

    function drawGame() //game loop
    {
        initEnemies();
        scroller(canvas);
        render();
        update(g_player);
        g_player.draw();
        for (var i = 0; i < g_enemies_array.length; i++)
        {
            updateEnemies(g_enemies_array[i]);
            g_enemies_array[i].x += g_enemies_array[i].vx;
            g_enemies_array[i].draw();
        }
        window.requestAnimationFrame(drawGame);
    }

    processingKeystrokes();
    drawGame();
}
start();
