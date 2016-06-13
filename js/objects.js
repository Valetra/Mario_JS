function drawAllObjects() //rendering an object from bottom left corner, exept lines of object
{
    drawGround(14);
    antHill(13, 2);
    tree(13, 7);
    bigBush(13, 14);
    questionBlock(10, 17);
    antHill(13, 18);
    brick(10, 20);
    questionBlock(10, 21);
    brick(10, 22);
    questionBlock(10, 23);
    brick(10, 24);
    questionBlock(7, 22);
    smallCloud(3, 18);
    bigCloud(4, 30);
    smallBush(13, 25);
    tube(13, 34);
    bigBush(13, 40);
    bigTube(13, 46);
    poisonousPlant(10, 46);
    smallCloud(4, 43);
    bigCloud(2, 55);
}

function drawLineOf(Object, y, from, to)
{
    for (from; from < to; from++)
    {
        map[y][from].y = Object;
    }
}

function drawGround(i)
{
    for (i; i <= CELLS_COUNT_Y; i++)
    {
        drawLineOf(GROUND, i, 0, CELLS_COUNT_X);
    }
}

function tree(y, x)
{
    map[y][x].y = TREE_1;
    map[y - 1][x].y = TREE_2;
    map[y - 2][x].y = TREE_3;
}

function poisonousPlant(y, x)
{
    map[y][x].y = POISONOUS_PLANT_1;
    map[y][x + 1].y = POISONOUS_PLANT_2;
    map[y - 1][x].y = POISONOUS_PLANT_3;
    map[y -1][x + 1].y = POISONOUS_PLANT_4;
}

function bigBush(y, x)
{
    map[y][x].y = BIG_BUSH_1;
    map[y][x + 1].y = BIG_BUSH_2;
    map[y][x + 2].y = BIG_BUSH_3;
}

function smallBush(y, x)
{
    map[y][x].y = SMALL_BUSH_1;
    map[y][x + 1].y = SMALL_BUSH_2;
}

function bigCloud(y, x)
{
    map[y - 1][x].y = BIG_CLOUD_1;
    map[y - 1][x + 1].y = BIG_CLOUD_2;
    map[y - 1][x + 2].y = BIG_CLOUD_3;
    map[y][x].y = BIG_CLOUD_4;
    map[y][x + 1].y = BIG_CLOUD_5;
    map[y][x + 2].y = BIG_CLOUD_6;
}

function smallCloud(y, x)
{
    map[y - 1][x].y = SMALL_CLOUD_1;
    map[y - 1][x + 1].y = SMALL_CLOUD_2;
    map[y][x].y = SMALL_CLOUD_3;
    map[y][x + 1].y = SMALL_CLOUD_4;
}

function antHill(y, x)
{
    map[y][x].y = ANTHILL_1;
    map[y][x + 1].y = ANTHILL_2;
    map[y][x + 2].y = ANTHILL_3;
    map[y - 1][x + 1].y = ANTHILL_4;
}

function tube(y, x)
{
    map[y - 1][x].y = TUBE_1;
    map[y - 1][x + 1].y = TUBE_2;
    map[y][x].y = TUBE_3;
    map[y][x + 1].y = TUBE_4;
}

function bigTube(y, x)
{
    map[y - 2][x].y = TUBE_1;
    map[y - 2][x + 1].y = TUBE_2;
    map[y - 1][x].y = TUBE_3;
    map[y - 1][x + 1].y = TUBE_4;
    map[y][x].y = TUBE_3;
    map[y][x + 1].y = TUBE_4;
}

function noQuestionBlock(y, x)
{
    map[y][x].y = NO_QUESTION_BLOCK;
}

function coin(y, x)
{
     map[y][x].y = COIN;
}

function brick(y, x)
{
    map[y][x].y = BRICK;
}

function cube(y, x)
{
     map[y][x].y = CUBE;
}

function questionBlock(y, x)
{
     map[y][x].y = QUESTION_BLOCK;
}