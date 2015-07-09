
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/cat.ts" />
/// <reference path="../objects/cheese.ts" />
/// <reference path="../objects/wood.ts" />
/// <reference path="../objects/mouse.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {
    // MENU STATE
    export class Menu {
        // INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public wood: objects.Wood;
        public playButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {
            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add wood(background) to game
            this.wood = new objects.Wood();
            this.game.addChild(this.wood);

            //The Menu label
            var gameScrollerLabel: objects.Label = new objects.Label("TOM AND JERRY", 320, 100);
            gameScrollerLabel.setSize(60);
            gameScrollerLabel.regX = gameScrollerLabel.getBounds().width * 0.5;
            gameScrollerLabel.regY = gameScrollerLabel.getBounds().height * 0.5;
            this.game.addChild(gameScrollerLabel);

            //Add play button to the game screen
            this.playButton = new objects.Button("playButton", 320, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);


            stage.addChild(this.game);
        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        playButtonClicked() {
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            currentState = 1;
            stateChanged = true;
        }

        // UPDATE METHOD
        public update() {

            this.wood.update();

        } // update method end


    }
} 