/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/wood.ts" />
/// <reference path="objects/mouse.ts" />
/// <reference path="objects/cheese.ts" />
/// <reference path="objects/cat.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "wood", src: "assets/images/wood.jpg" },
    { id: "mouse", src: "assets/images/mouse.png" },
    { id: "cheese", src: "assets/images/cheese.png" },
    { id: "cat", src: "assets/images/cat.png" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "engine", src: "assets/audio/engine.ogg" }
];

// Game Variables
var wood: objects.Wood;
var mouse: objects.Mouse;
var cheese: objects.Cheese;
var cats:objects.Cat[] = [];

// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
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
    wood.update();
    mouse.update();
    cheese.update();

    for (var cat = 0; cat < 3; cat++) {
        cats[cat].update();
        checkCollision(cats[cat]);
    }
    checkCollision(cheese);
    stage.update();

    stats.end(); // end measuring
}

//Check the distance between mouse and cheese
function checkCollision(gameObject: objects.GameObject) {
    var p1: createjs.Point = new createjs.Point;
    var p2: createjs.Point = new createjs.Point;

    p1.x = mouse.x;
    p2.y = mouse.y;

    p2.x = gameObject.x;
    p2.y = gameObject.y;


    if (utility.distance(p1, p2) < (mouse.height * 0.5 + gameObject.height * 0.5)) {
        if (gameObject.isColliding == false) {
            createjs.Sound.play(gameObject.sound);
        }
        gameObject.isColliding = true;
    } else {
        gameObject.isColliding = false;
    }
}


// Our Main Game Function
function main() {
    //add wood object to stage
    wood = new objects.Wood(assets.getResult("wood"));
    stage.addChild(wood);

    //add cheese object to stage
    cheese = new objects.Cheese(assets.getResult("cheese"));
    stage.addChild(cheese);

    //add Mouse object to stage
    mouse = new objects.Mouse(assets.getResult("mouse"));
    stage.addChild(mouse);

    //add multiple cat object to stage
    for (var cat = 0; cat < 3; cat++) {
        cats[cat] = new objects.Cat(assets.getResult("cat"));
        stage.addChild(cats[cat]);
    }

}