function drawAllObjects()
{
    drawAntHill(12, 19);
    drawTree(12, 5);
    drawPoisonousPlant(9, 27);
    drawPoisonousPlant(11, 45);
    drawbigTube(12, 27);
    drawBigBush(12, 9);
    drawSmallBush(12, 36);
    drawSmallBush(12, 42);
    drawbigCloud(4, 12);
    drawsmallCloud(3, 24);
    drawbigCloud(2, 32);
    drawbigCloud(5, 46);
    drawtube(12, 45);
    drawBrick(9, 17);
    drawBrick(9, 19);
    drawQuestionBlock(9, 13);
    drawQuestionBlock(9, 16);
    drawQuestionBlock(9, 18);
    drawQuestionBlock(9, 20);
    drawQuestionBlock(6, 18);
}

function drawGround(ctx)
{
    var i = 0;
    var j = 13;
    for (j; j < CELLS_COUNT_Y; j++)
    {
        for (i; i < CELLS_COUNT_X; i++)
        {
            map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: GROUND});
        }
        i = 0;
    }
}

function getImagePlaceOnSprite(type)
{
    var placeAtSpriteByVertical = 0;
    switch (type)
    {
        case COIN:
        {
            placeAtSpriteByVertical = (COIN - 1) * CELL_SIZE;
            break;
        }
        case BRICK:
        {
            placeAtSpriteByVertical = (BRICK - 1) * CELL_SIZE;
            break;
        }
        case NO_QUESTION_BLOCK:
        {
            placeAtSpriteByVertical = (NO_QUESTION_BLOCK - 1) * CELL_SIZE;
            break;
        }
        case CUBE:
        {
            placeAtSpriteByVertical = (CUBE - 1) * CELL_SIZE;
            break;
        }
        case GROUND:
        {
            placeAtSpriteByVertical = (GROUND - 1) * CELL_SIZE;
            break;
        }
        case MARIO:
        {
            placeAtSpriteByVertical = (MARIO - 1) * CELL_SIZE;
            break;
        }
        case ANTHILL_1:
        {
            placeAtSpriteByVertical = (ANTHILL_1 - 1) * CELL_SIZE;
            break;
        }
        case ANTHILL_2:
        {
            placeAtSpriteByVertical = (ANTHILL_2 - 1) * CELL_SIZE;
            break;
        }
        case ANTHILL_3:
        {
            placeAtSpriteByVertical = (ANTHILL_3 - 1) * CELL_SIZE;
            break;
        }
        case ANTHILL_4:
        {
            placeAtSpriteByVertical = (ANTHILL_4 - 1) * CELL_SIZE;
            break;
        }
        case TREE_1:
        {
            placeAtSpriteByVertical = (TREE_1 - 1) * CELL_SIZE;
            break;
        }
        case TREE_2:
        {
            placeAtSpriteByVertical = (TREE_2 - 1) * CELL_SIZE;
            break;
        }
        case TREE_3:
        {
            placeAtSpriteByVertical = (TREE_3 - 1) * CELL_SIZE;
            break;
        }
        case POISONOUS_PLANT_1:
        {
            placeAtSpriteByVertical = (POISONOUS_PLANT_1 - 1) * CELL_SIZE;
            break;
        }
        case POISONOUS_PLANT_2:
        {
            placeAtSpriteByVertical = (POISONOUS_PLANT_2 - 1) * CELL_SIZE;
            break;
        }
        case POISONOUS_PLANT_3:
        {
            placeAtSpriteByVertical = (POISONOUS_PLANT_3 - 1) * CELL_SIZE;
            break;
        }
        case POISONOUS_PLANT_4:
        {
            placeAtSpriteByVertical = (POISONOUS_PLANT_4 - 1) * CELL_SIZE;
            break;
        }
        case BIG_BUSH_1:
        {
            placeAtSpriteByVertical = (BIG_BUSH_1 - 1) * CELL_SIZE;
            break;
        }
        case BIG_BUSH_2:
        {
            placeAtSpriteByVertical = (BIG_BUSH_2 - 1) * CELL_SIZE;
            break;
        }
        case BIG_BUSH_3:
        {
            placeAtSpriteByVertical = (BIG_BUSH_3 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_BUSH_1:
        {
            placeAtSpriteByVertical = (SMALL_BUSH_1 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_BUSH_2:
        {
            placeAtSpriteByVertical = (SMALL_BUSH_2 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_1:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_1 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_2:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_2 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_3:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_3 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_4:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_4 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_5:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_5 - 1) * CELL_SIZE;
            break;
        }
        case BIG_CLOUD_6:
        {
            placeAtSpriteByVertical = (BIG_CLOUD_6 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_CLOUD_1:
        {
            placeAtSpriteByVertical = (SMALL_CLOUD_1 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_CLOUD_2:
        {
            placeAtSpriteByVertical = (SMALL_CLOUD_2 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_CLOUD_3:
        {
            placeAtSpriteByVertical = (SMALL_CLOUD_3 - 1) * CELL_SIZE;
            break;
        }
        case SMALL_CLOUD_4:
        {
            placeAtSpriteByVertical = (SMALL_CLOUD_4 - 1) * CELL_SIZE;
            break;
        }
        case TUBE_1:
        {
            placeAtSpriteByVertical = (TUBE_1 - 1) * CELL_SIZE;
            break;
        }
        case TUBE_2:
        {
            placeAtSpriteByVertical = (TUBE_2 - 1) * CELL_SIZE;
            break;
        }
        case TUBE_3:
        {
            placeAtSpriteByVertical = (TUBE_3 - 1) * CELL_SIZE;
            break;
        }
        case TUBE_4:
        {
            placeAtSpriteByVertical = (TUBE_4 - 1) * CELL_SIZE;
            break;
        }
        case NO_QUESTION_BLOCK:
        {
            placeAtSpriteByVertical = (NO_QUESTION_BLOCK - 1) * CELL_SIZE;
            break;
        }
        case COIN:
        {
            placeAtSpriteByVertical = (COIN - 1) * CELL_SIZE;
            break;
        }
        case BRICK:
        {
            placeAtSpriteByVertical = (BRICK - 1) * CELL_SIZE;
            break;
        }
        case CUBE:
        {
            placeAtSpriteByVertical = (CUBE - 1) * CELL_SIZE;
            break;
        }
        case QUESTION_BLOCK:
        {
            placeAtSpriteByVertical = (QUESTION_BLOCK - 1) * CELL_SIZE;
            break;
        }
    }
    return placeAtSpriteByVertical;
}

function drawAntHill(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: ANTHILL_1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: ANTHILL_2});
    map.push({x: (i + 2) * CELL_SIZE, y: j * CELL_SIZE, type: ANTHILL_3});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: ANTHILL_4});
}

function drawTree(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: TREE_1});
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TREE_2});
    map.push({x: i * CELL_SIZE, y: (j - 2) * CELL_SIZE, type: TREE_3});
}

function drawPoisonousPlant(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: POISONOUS_PLANT_1, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: POISONOUS_PLANT_2, coll: 1});
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: POISONOUS_PLANT_3, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: POISONOUS_PLANT_4, coll: 1});
}

function drawBigBush(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: BIG_BUSH_1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_BUSH_2});
    map.push({x: (i + 2) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_BUSH_3});
}

function drawSmallBush(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_BUSH_1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_BUSH_2});
}

function drawbigCloud(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_2});
    map.push({x: (i + 2) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_3});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_4});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_5});
    map.push({x: (i + 2) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_6});
}

function drawsmallCloud(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: SMALL_CLOUD_1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: SMALL_CLOUD_2});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_CLOUD_3});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_CLOUD_4});
}

function drawtube(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_1, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_2, coll: 1});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_3, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_4, coll: 1});
}

function drawbigTube(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 2) * CELL_SIZE, type: TUBE_1, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 2) * CELL_SIZE, type: TUBE_2, coll: 1});
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_3, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_4, coll: 1});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_3, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_4, coll: 1});
}

function drawNoQuestionBlok(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: NO_QUESTION_BLOCK, coll: 1});
}

function drawCoin(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: COIN});
}

function drawBrick(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: BRICK, coll: 1});
}

function drawCube(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: CUBE, coll: 1});
}

function drawQuestionBlock(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: QUESTION_BLOCK, coll: 1});
}

/*
function drawLineOf(Object, y, from, to, collision)
{
    for (from; from < to; from++)
    {
        map[y][from].y = Object;
        if (collision = true)
        {
            map[y][from].coll = 1;
        }
    }
}
*/