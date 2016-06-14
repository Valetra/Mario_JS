function start()
{
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');
    var x = 170; // good position
    var y = 416; // good position
    drawBackGround(ctx);
    
    function player(ctx, x, y)
    {
        ctx.fillStyle = "red";
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
    }
    
    function drawGame() //game loop
    {
        drawScene(ctx);
        player(ctx, x, y);
    }
    
    window.addEventListener('keydown', keyDown);
    setInterval(drawGame, FPS);
    
    function keyDown(event)
    {
        ctx.fillStyle = BACKGROUND_COLOR;
        e = event;
        if(e.keyCode == LEFT_ARROW)
        {
            x -= THE_OFFSET_AXIS;
            ctx.fillRect(x + THE_OFFSET_AXIS, y, CELL_SIZE, CELL_SIZE);
        }
        if(e.keyCode == TOP_ARROW)
        {
            y -= THE_OFFSET_AXIS;
            ctx.fillRect(x, y + THE_OFFSET_AXIS, CELL_SIZE, CELL_SIZE);
        }
        if(e.keyCode == RIGHT_ARROW)
        {
            x += THE_OFFSET_AXIS;
            ctx.fillRect(x - THE_OFFSET_AXIS, y, CELL_SIZE, CELL_SIZE);
        }
        if(e.keyCode == DOWN_ARROW)
        {
            y += THE_OFFSET_AXIS;
            ctx.fillRect(x, y - THE_OFFSET_AXIS, CELL_SIZE, CELL_SIZE);
        }
    }
}