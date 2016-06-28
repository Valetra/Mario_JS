function drawGame() //game loop
{
    initEnemies(array_of_enemies_position);
    scroller(canvas);
    render();
    update(g_player);
    window.requestAnimationFrame(drawGame);
}

function init()
{
    initPlayer();
    initCollMap();
    initFirstTwoEnemies();
}

function initFirstTwoEnemies()
{
    g_enemies_array.push(new Enemy(g_ctx, array_of_enemies_position[0].x, array_of_enemies_position[0].y, pic));
    g_enemies_array.push(new Enemy(g_ctx, array_of_enemies_position[1].x, array_of_enemies_position[1].y, pic));
}
var scrollSum = 0;

function scroller(canvas)
{
    if (g_player.x - scrollSum >= screen.width / 2)
    {
        scrollSum += g_player.vx;
        canvas.style.marginLeft = scrollSum * (-1) + 'px';
    }
}

var array_of_enemies_position =
    [
        {showed: true, x: 700,  y: GROUND_LINE},
        {showed: true, x: 1000, y: GROUND_LINE},
        {showed: false, x: 1370, y: GROUND_LINE},
        {showed: false, x: 1410, y: GROUND_LINE},
        {showed: false, x: 2600, y: 117},
        {showed: false, x: 2650, y: 117},
        {showed: false, x: 3000, y: GROUND_LINE},
        {showed: false, x: 3100, y: GROUND_LINE},
        {showed: false, x: 3800, y: GROUND_LINE},
        {showed: false, x: 3850, y: GROUND_LINE},
        {showed: false, x: 4000, y: GROUND_LINE},
        {showed: false, x: 5500, y: GROUND_LINE},
        {showed: false, x: 5550, y: GROUND_LINE},
    ];

function initEnemies(array_of_enemies_position)
{
    for (var i = 0; i < array_of_enemies_position.length; i++)
    {
        if (g_player.x >= array_of_enemies_position[i].x - SCREEN_HALF && !array_of_enemies_position[i].showed)
        {
            g_enemies_array.push(new Enemy(g_ctx, array_of_enemies_position[i].x, array_of_enemies_position[i].y, pic));
            array_of_enemies_position[i].showed = true;
        }
    }
}

function initPlayer()
{
    g_player = new Player(g_ctx, START_POSITION_OF_MARIO_X, START_POSITION_OF_MARIO_Y, pic);
}

function initCollMap()
{
    generateCollMap();
}
