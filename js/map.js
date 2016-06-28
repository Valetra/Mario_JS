function render()
{
    drawBackground();
    drawScene();
    g_player.draw();
}

function drawBackground()
{
    g_ctx.fillStyle = BACKGROUND_COLOR;
    g_ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function generateCollMap()
{
    render();
    for (var i = 0; i < map.length; i++)
    {
        if (map[i].coll == 1)
        {
            g_coll_map.push(map[i]);
        }
    }
}

function drawObjects()
{
    for (var i = 0; i < g_arrayOfObjects.length; i++)
    {
        drawGameObjects(g_arrayOfObjects[i].type, g_arrayOfObjects[i].x, g_arrayOfObjects[i].y);
    }
}

function drawScene()
{
    map = [];
    drawGround();
    drawObjects();
    for (var i = 0 ; i < map.length; i++)
    {
        var xWhereToStartClipping = 0;
        var yWhereToStartClipping = getImagePlaceOnSprite(map[i].type);
        var clippedImageWidth = CELL_SIZE;
        var clippedImageHeight = CELL_SIZE;
        var xWhereToPlaceImage = map[i].x;
        var yWhereToPlaceImage = map[i].y;
        var imageWidth = CELL_SIZE;
        var imageHeight = CELL_SIZE;
        // Iterate through all values of array 'map' and depending on the coordinates we need to draw a fragment
        g_ctx.drawImage
        (
            pic,
            xWhereToStartClipping,
            yWhereToStartClipping,
            clippedImageWidth,
            clippedImageHeight,
            xWhereToPlaceImage,
            yWhereToPlaceImage,
            imageWidth,
            imageHeight
        );
    }
}
