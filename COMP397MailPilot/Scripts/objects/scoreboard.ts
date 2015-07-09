module objects {
    export class ScoreBoard {
        // PUBLIC PROPERTIES
        public score: number = 0;
        public lives: number = 5;
        private game: createjs.Container;

        private scoreLabel: createjs.BitmapText;
        private livesLabel: createjs.BitmapText;

        // CONSTRUCTOR +++++++++++++++++++
        constructor(game: createjs.Container) {

            this.livesLabel = new createjs.BitmapText("LIVES: ", assets.fontAtlas);
            this.livesLabel.scaleX = 0.4;
            this.livesLabel.scaleY = 0.4;
            this.livesLabel.x = 10;
            this.livesLabel.y = 10;
            game.addChild(this.livesLabel);

            this.scoreLabel = new createjs.BitmapText("SCORE: ", assets.fontAtlas);
            this.scoreLabel.scaleX = 0.4;
            this.scoreLabel.scaleY = 0.4;
            this.scoreLabel.x = 350;
            this.scoreLabel.y = 10;
            game.addChild(this.scoreLabel);
        }

        // PUBLIC METHODS +++++++++++++++++
        public update() {
            this.livesLabel.text = "LIVES: " + this.lives.toString();
            this.scoreLabel.text = "SCORE: " + this.score.toString();
        }
    }
} 