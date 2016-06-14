function start()
{
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    var x = 190; // good position
    var y = 384; // good position
    
    function player(ctx, x, y)
    {
        ctx.drawImage
            (
                pic,
                0,
                getImagePlaceOnSprite(MARIO),
                CELL_SIZE,
                CELL_SIZE,
                x,
                y,
                CELL_SIZE,
                CELL_SIZE
            );
    }
    
    function drawGame() //game loop
    {
        drawBackGround(ctx);
        drawScene(ctx);
        player(ctx, x, y);
        window.requestAnimationFrame(drawGame);
    }
    
    window.addEventListener('keydown', keyDown);
    
    pic = new Image();
    pic.src = PATH_TO_SPRITE;
    
    drawGame();
    
    function keyDown(event)
    {
        ctx.fillStyle = BACKGROUND_COLOR;
        e = event;
        if(e.keyCode == LEFT_ARROW)
        {
            x -= THE_OFFSET_AXIS;
        }
        if(e.keyCode == TOP_ARROW)
        {
            y -= THE_OFFSET_AXIS;
        }
        if(e.keyCode == RIGHT_ARROW)
        {
            x += THE_OFFSET_AXIS;
        }
        if(e.keyCode == DOWN_ARROW)
        {
            y += THE_OFFSET_AXIS;
        }
    }
}