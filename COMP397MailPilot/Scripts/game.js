/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/wood.ts" />
/// <reference path="objects/mouse.ts" />
/// <reference path="objects/cheese.ts" />
/// <reference path="objects/cat.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
// Score Variables
var finalScore = 0;
var highScore = 0;
// State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
// Game Variables
var wood;
var mouse;
var cheese;
var cats = [];
var scoreboard;
// Game Managers
var assets;
var collision;
// Game Objects
var gameOver;
var play;
var menu;
// Preloader Function
function preload() {
    // instantiate asset manager class
    assets = new managers.Asset();
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = 0;
    changeState(currentState);
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    currentStateFunction.update();
    if (stateChanged) {
        changeState(currentState);
    }
    stage.update(); // Refreshes our stage
    stats.end(); // End metering
}
// Our Game Kicks off in here
function changeState(state) {
    stateChanged = false;
    switch (state) {
        case 0:
            // Instantiate Menu State
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case 1:
            // Instantiate Play State
            play = new states.Play();
            currentStateFunction = play;
            break;
        case 2:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
}
//# sourceMappingURL=game.js.map