function pushGround()
{
    pushGroundPart(0, 66);
    pushGroundPart(68, 83);
    pushGroundPart(87, 153);
    pushGroundPart(155, 220);
}

function drawGameObjects(type, cell_y_pos, cell_x_pos)
{
    switch (type)
    {
        case ANTHILL_TYPE:
            drawAntHill(cell_x_pos, cell_y_pos);
            break;
        case BRICK_TYPE:
            drawBrick(cell_x_pos, cell_y_pos);
            break;
        case TREE_TYPE:
            drawTree(cell_x_pos, cell_y_pos);
            break;
        case BIG_TUBE_TYPE:
            drawBigTube(cell_x_pos, cell_y_pos);
            break;
        case BIG_BUSH_TYPE:
            drawBigBush(cell_x_pos, cell_y_pos);
            break;
        case SMALL_BUSH_TYPE:
            drawSmallBush(cell_x_pos, cell_y_pos);
            break;
        case BIG_CLOUD_TYPE:
            drawBigCloud(cell_x_pos, cell_y_pos);
            break;
        case SMALL_CLOUD_TYPE:
            drawSmallCloud(cell_x_pos, cell_y_pos);
            break;
        case TUBE_TYPE:
            drawTube(cell_x_pos, cell_y_pos);
            break;
        case QUESTION_BLOCK_TYPE:
            drawQuestionBlock(cell_x_pos, cell_y_pos);
            break;
        case QUBE_TYPE:
            drawCube(cell_x_pos, cell_y_pos);
            break;
        case FLAG_TYPE:
            drawFlagPole(cell_x_pos, cell_y_pos);
            break;
    }
}

function pushGroundPart(xPosFrom, xPosTo)
{
    var xPosLast = xPosFrom;
    var j = 13;
    for (j; j < CELLS_COUNT_Y; j++)
    {
        for (xPosFrom; xPosFrom < xPosTo; xPosFrom++)
        {
            map.push({x: xPosFrom * CELL_SIZE, y: j * CELL_SIZE, type: GROUND, coll: 1});
        }
        xPosFrom = xPosLast;
    }
}

function getImagePlaceOnSprite(type)
{
    return (type - 1) * CELL_SIZE;
}

function drawFlagPole(j, i)
{
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: FLAG_TOP});
    map.push({x: i * CELL_SIZE, y: (j + 1) * CELL_SIZE, type: FLAG});
    map.push({x: i * CELL_SIZE, y: (j + 1) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 2) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 3) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 4) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 5) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 6) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 7) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 8) * CELL_SIZE, type: POLE});
    map.push({x: i * CELL_SIZE, y: (j + 9) * CELL_SIZE, type: POLE});
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

function drawBigCloud(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_2});
    map.push({x: (i + 2) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: BIG_CLOUD_3});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_4});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_5});
    map.push({x: (i + 2) * CELL_SIZE, y: j * CELL_SIZE, type: BIG_CLOUD_6});
}

function drawSmallCloud(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: SMALL_CLOUD_1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: SMALL_CLOUD_2});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_CLOUD_3});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: SMALL_CLOUD_4});
}

function drawTube(j, i)
{
    map.push({x: i * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_1, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: (j - 1) * CELL_SIZE, type: TUBE_2, coll: 1});
    map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_3, coll: 1});
    map.push({x: (i + 1) * CELL_SIZE, y: j * CELL_SIZE, type: TUBE_4, coll: 1});
}

function drawBigTube(j, i)
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
