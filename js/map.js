function render(player, ctx, pic)
{
    drawBackground(ctx);
    drawScene(ctx, pic);
    player.draw(ctx);
}

function drawBackground(ctx)
{
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function generateCollMap(player, ctx, pic, coll_map)
{
    render(player, ctx, pic);
    for (var i = 0; i < map.length; i++)
    {
        if (map[i].coll == 1)
        {
            coll_map.push(map[i]);
        }
    }
}

function pushObjects(arrayOfObjects)
{
    for (var i = 0; i < arrayOfObjects.length; i++)
    {
        drawGameObjects(arrayOfObjects[i].type, arrayOfObjects[i].x, arrayOfObjects[i].y);
    }
}

function drawAll(ctx, pic)
{
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
}

function drawScene(ctx, pic)
{
    map = [];
    pushGround();
    pushObjects(arrayOfObjects);
    drawAll(ctx, pic);
    drawCastle(ctx);
}

function drawCastle(ctx)
{
    ctx.drawImage
        (
            CastlePic,
            6560,
            256
        );
}