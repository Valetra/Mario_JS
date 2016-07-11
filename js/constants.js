//Configuration
CELL_SIZE =                  32;
CELLS_COUNT_X =              220;
CELLS_COUNT_Y =              16;
END_OF_MAP =                 CELL_SIZE * CELLS_COUNT_X;
PATH_TO_SPRITE =             'img/marioBigSprite.png';
MARIO_OFFSET =               0.1;
GROUND_LINE =                383;
START_POSITION_OF_MARIO_X =  62;
START_POSITION_OF_MARIO_Y =  GROUND_LINE;
CONVERT_TO_SEC =             1000;
PATH_TO_CASTLE_IMG =         'img/castle.png';
END_POS_OF_PLAYER =          6624;
WIN_POS =                    6240;
BOTTOM_DEATH_COEFF =         4.5 / 5;
HURRY_TIME =                 100;
CHANGE_TIME_MS =             500;
WAIT_TO_DEL_ENEMY =          100;
DIE_JUMP =                   -8;
WIN_PLAYER_SPEED =           3;
REWARD_FOR_KILL_ENEMY =      100;

//Strings of collision function
UP =                         'up';
RIGHT =                      'right';
DOWN =                       'down';
LEFT =                       'left';

//Physics
MAX_SPEED =                  5;
GRAVITY =                    0.45;
MAX_JUMP =                   -10.9;
STOP_PATH =                  0.3;
EPSILON =                    1;
WAITING_BEFORE_JUMP =        100;
EPSILON_2 =                  5;
EPSILON_3 =                  31;
DROP =                       5;

//Keyboards
LEFT_ARROW =                 37;
TOP_ARROW =                  38;
RIGHT_ARROW =                39;
DOWN_ARROW =                 40;
