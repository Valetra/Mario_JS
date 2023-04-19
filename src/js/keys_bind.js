function keyDown(keyCode)
{
    switch (keyCode)
    {
        case LEFT_ARROW:
            g_leftKeyDown = true;
            break;
        case TOP_ARROW:
            g_upKeyDown = true;
            break;
        case RIGHT_ARROW:
            g_rightKeyDown = true;
            break;
        case DOWN_ARROW:
            g_downKeyDown = true;
            break;
    }
}

function keyUp(keyCode)
{
    switch (keyCode)
    {
        case LEFT_ARROW:
            g_leftKeyDown = false;
            break;
        case TOP_ARROW:
            g_upKeyDown = false;
            g_allowToJump = true;
            break;
        case RIGHT_ARROW:
            g_rightKeyDown = false;
            break;
        case DOWN_ARROW:
            g_downKeyDown = false;
            break;
    }
}
