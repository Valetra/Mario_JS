function start()
{
    var canvas = document.getElementById("canvas");
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    g_ctx = canvas.getContext('2d');
    init();
    drawGame();
}
start();