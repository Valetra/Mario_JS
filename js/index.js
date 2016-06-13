function start()
{
    var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');
    drawBackGround(ctx);
    drawScene(ctx);
}