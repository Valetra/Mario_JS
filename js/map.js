function drawBackGround(ctx)
{
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function getCollObjects()
{
    for(var i = 0; i < map.length; i++)
    {
        if (map[i].coll == 1)
        {
            coll_map.push(map[i]);
        }
    }
}

function drawScene(ctx)
{
    map = [];
    coll_map = [];
    drawGround(ctx);
    drawAllObjects(ctx);
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
        ctx.drawImage
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
    getCollObjects();
}