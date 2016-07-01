var ctx = null;
var pic = new Image();
pic.src = PATH_TO_SPRITE;

var g_upKeyDown = false;
var g_rightKeyDown = false;
var g_downKeyDown = false;
var g_leftKeyDown = false;
var g_allowToJump = true;

var coll_map = [];
var g_enemies_array = [];
var g_score = 0;