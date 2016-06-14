function drawBackGround(ctx)
{
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawScene(ctx)
{
    map = []; // (x and y) are coordinates of cells
    drawGround(ctx);
    drawAllObjects(ctx);
    //pic.onload = function()
    {
        for (var i = 0 ; i < map.length; i++)
        {
            var xWhereToStartClipping = 0;
            var yWhereToStartClipping = getImagePlaceOnSprite(map[i].type);
            var clippedImageWidth = CELL_SIZE;
            var clippedImageHeight = CELL_SIZE;
            var xWhereToPlaceImage = map[i].x * CELL_SIZE;
            var yWhereToPlaceImage = map[i].y * CELL_SIZE;
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
}