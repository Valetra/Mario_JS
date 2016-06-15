function start()
{
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');
    canvas.width  = CELLS_COUNT_X * CELL_SIZE;
    canvas.height = CELLS_COUNT_Y * CELL_SIZE;
    var x = START_POSITION_OF_MARIO_X;
    var y = START_POSITION_OF_MARIO_Y;
    var dt = 0;
    var lastTime;
    
    function drawGame() //game loop
    {
        var now = Date.now();
        dt = (now - lastTime) / CONVERT_TO_SEC;
        drawBackGround(ctx);
        drawScene(ctx);
        player(ctx);
        lastTime = now;
        window.requestAnimationFrame(drawGame);
    }
    
    function player(ctx)
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
    
    function keyDown(event)
    {
        var last_x = x;
        var last_y = y;
        var e = event;
        if(e.keyCode == LEFT_ARROW)
        {
            x -= MARIO_OFFSET * dt;
        }
        if(e.keyCode == TOP_ARROW)
        {
            y -= MARIO_OFFSET * dt;
        }
        if(e.keyCode == RIGHT_ARROW)
        {
            x += MARIO_OFFSET * dt;
        }
        if(e.keyCode == DOWN_ARROW)
        {
            y += MARIO_OFFSET * dt;
        }
        //Collision
        if (y > GROUND_LINE)
        {
            y = last_y;
        }
        if (x < 0)
        {
            x = last_x;
        }
        for (var i = 0; i < coll_map.length; i ++)
        {
            if (isCollide(i))
            {
                x = last_x;
                y = last_y;
            }
        }
    }
    
    function isCollide(i)
    {
        return !(((y + CELL_SIZE) < (coll_map[i].y)) || (y > (coll_map[i].y + CELL_SIZE)) || ((x + CELL_SIZE) < coll_map[i].x) || (x > (coll_map[i].x + CELL_SIZE)));
    }
    
    window.addEventListener('keydown', keyDown);
    pic = new Image();
    pic.src = PATH_TO_SPRITE;
    drawGame();
}