
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/mouse.ts" />
/// <reference path="../objects/cheese.ts" />
/// <reference path="../objects/wood.ts" />
/// <reference path="../objects/cat.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // PLAY STATE
    export class Play {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public mouse: objects.Mouse;
        public cheese: objects.Cheese;
        public cats: objects.Cat[] = [];
        public wood: objects.Wood;
        public scoreboard: objects.ScoreBoard;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add wood(background) to game
            this.wood = new objects.Wood();
            this.game.addChild(this.wood);


            // Add Cheese to game
            this.cheese = new objects.Cheese();
            this.game.addChild(this.cheese);


            // Add Mouse to game
            this.mouse = new objects.Mouse();
            this.game.addChild(this.mouse);

            // Add Cats to game
            for (var cat = 3; cat > 0; cat--) {
                this.cats[cat] = new objects.Cat();
                this.game.addChild(this.cats[cat]);
            }

            this.scoreboard = new objects.ScoreBoard(this.game);



            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        // Calculate the distance between two points
        distance(p1: createjs.Point, p2: createjs.Point): number {

            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } // distance end

        // CHeck Collision Method
        checkCollision(collider: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.mouse.x;
            p1.y = this.mouse.y;
            p2.x = collider.x;
            p2.y = collider.y;
            // Check for Collision
            if (this.distance(p2, p1) < ((this.mouse.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) { // Collision has occurred
                    //createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    switch (collider.name) {
                        case "cheese":
                            this.scoreboard.score += 100;
                            break;
                        case "cat":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            } else {
                collider.isColliding = false;
            }
        } // checkCollision end

        // UPDATE METHOD
        public update() {

            this.wood.update();
            this.mouse.update();
            this.cheese.update();

            if (this.scoreboard.lives > 0) {
                for (var cat = 3; cat > 0; cat--) {
                    this.cats[cat].update();
                    this.checkCollision(this.cats[cat]);
                }

                this.checkCollision(this.cheese);
            }

            this.scoreboard.update();

            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                currentState = 2;
                stateChanged = true;
            }
        } // update method end


    }
} 