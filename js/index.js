function start(ctx, pic, arrayOfEnemiesPosition, coll_map)
{
    var canvas = document.getElementById("canvas");
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    ctx = canvas.getContext('2d');
    var player = null;
    player = initPlayer(player, ctx, pic);
    init(player, ctx, arrayOfEnemiesPosition, pic, coll_map);
    processingKeystrokes(player);
    drawGame(player, canvas, arrayOfEnemiesPosition, ctx, pic, coll_map);
}
start(ctx, pic, arrayOfEnemiesPosition, coll_map);