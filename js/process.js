var isUpCollision;
var isRightCollision;
var isDownCollision;
var isLeftCollision;

function updateEnemies(enemy)
{
    if (collision(enemy, DOWN, coll_map).coll)
    {
        enemy.speedY = 0;
    }
    else
    {
        enemy.speedY += GRAVITY;
    }
    enemy.y += enemy.speedY;
    if (collision(enemy, LEFT, coll_map).coll || collision(enemy, RIGHT, coll_map).coll || collision(enemy, LEFT, g_enemies_array).coll || collision(enemy, RIGHT, g_enemies_array).coll)
    {
        enemy.speedX = - enemy.speedX;
    }
}

function showVictoriousScreen(player)
{
    if (player.x >= WIN_POS)
    {
        player.win();
    }
}

function pushEnemies()
{
    for (var i = 0; i < g_enemies_array.length; i++)
    {
        updateEnemies(g_enemies_array[i]);
        g_enemies_array[i].x += g_enemies_array[i].speedX;
        g_enemies_array[i].draw();
    }
}

function update(player)
{
    pushEnemies();
    showVictoriousScreen(player);

    upCollision = collision(player, UP, coll_map);
    rightCollision = collision(player, RIGHT, coll_map);
    downCollision = collision(player, DOWN, coll_map);
    leftCollision = collision(player, LEFT, coll_map);
    gravityProcess(player);
    if (player.alive)
    {
        tryToKillEnemy(player);
        tryToDie(player);
        processKeys(player);
        leftScreenCollision(player);
        resetSpeed(player);
        sitting(player);
        brakingDistance(player);
        updateScore();
    }
}

function updateScore()
{
    var score = document.getElementById("score");
    score.innerHTML = 'score: ' + g_score;
}

function tryToKillEnemy(player)
{
    
    var result = collision(player, DOWN, g_enemies_array);
    if (result.coll && g_enemies_array[result.pos].alive)
    {
        console.log('KILL', player.alive);
        g_enemies_array[result.pos].die();
        player.speedY = 0;
        player.speedY -= 5;
        setTimeout(function() {
            g_enemies_array.splice(result.pos, 1);
        }, 100);
    }
}

function tryToDie(player)
{
    if (collision(player, UP, g_enemies_array).coll || collision(player, RIGHT, g_enemies_array).coll || collision(player, LEFT, g_enemies_array).coll)
    {
        console.log('DIE ', player.alive);
        player.die();
    }
    if (player.y > (BOTTOM_DEATH * screen.height))
    {
        player.die();
    }
}

function processKeys(player)
{
    if (!player.gameEnd && g_upKeyDown && !player.jump && g_allowToJump)
    {
        var jumpSound = document.getElementById("jump");
        jumpSound.play();
        g_allowToJump = false;
        player.speedY += MAX_JUMP;
        player.y += player.speedY;
    }
    if (g_rightKeyDown && !rightCollision.coll)
    {
        if (player.speedX < MAX_SPEED)
        {
             player.speedX += (player.speedX < 0)? STOP_PATH: MARIO_OFFSET;
        }
        player.x += player.speedX;
    }
    else if (g_leftKeyDown)
    {
        if (!leftCollision.coll && player.x >= scrollSum)
        {
            if (player.speedX > -MAX_SPEED)
            {
                player.speedX -= (player.speedX > 0)? STOP_PATH: MARIO_OFFSET;
            }
            player.x += player.speedX;
        }
    }
}

function sitting(player)//Пока не используется
{
    player.sit = g_downKeyDown;
}
