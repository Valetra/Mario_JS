/*Заметки:
1) переименовать параметры push`a
2) придумать как отрисовывать объекты проще
*/
function drawAllObjects()
{
    drawAntHill(12, 19);
    drawTree(12, 5);
    drawPoisonousPlant(11, 45);
    drawbigTube(12, 27);
    drawBigBush(12, 9);
    drawSmallBush(12, 36);
    drawSmallBush(12, 42);
    drawbigCloud(4, 5);
    drawsmallCloud(3, 24);
    drawbigCloud(2, 32);
    drawbigCloud(5, 46);
    drawtube(12, 45);
    drawBrick(9, 17);
    drawBrick(9, 19);
    drawBrick(12, 6);
    drawBrick(12, 10);
    drawCube(8, 38);
    drawCube(8, 37);
    drawCube(8, 36);
    drawCube(5, 40);
    drawCube(5, 41);
    drawCube(5, 42);
    drawQuestionBlock(9, 10);
    drawQuestionBlock(9, 16);
    drawQuestionBlock(9, 18);
    drawQuestionBlock(9, 20);
    drawQuestionBlock(6, 18);
}

function drawGround()
{
    var i = 0;
    var j = 13;
    for (j; j < CELLS_COUNT_Y; j++)
    {
        for (i; i < CELLS_COUNT_X; i++)
        {
            map.push({x: i * CELL_SIZE, y: j * CELL_SIZE, type: GROUND, coll: 1});
        }
        i = 0;
    }
}

function getImagePlaceOnSprite(type)
{
    return (type - 1) * CELL_SIZE;
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
