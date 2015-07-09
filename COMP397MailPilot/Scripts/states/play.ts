module states {

    export class Play {

        //CONSTRUCTOR
        constructor() {
            this.main();
        }

        // PUBLIC METHODS
        // update method
        public update() {
            wood.update();
            mouse.update();
            cheese.update();

            for (var cat = 0; cat < 3; cat++) {
                cats[cat].update();
                collision.check(cats[cat]);
            }

            collision.check(cheese);

            scoreboard.update();
        }

        // main method
        public main() {
            // instantiate new game container
            game = new createjs.Container();

            //add wood object to stage
            wood = new objects.Wood(assets.loader.getResult("wood"));
            game.addChild(wood);

            //add cheese object to stage
            cheese = new objects.Cheese("cheese");
            game.addChild(cheese);

            // add mousee object to stage
            mouse = new objects.Mouse("mouse");
            game.addChild(mouse);

            // add 3 cats objects to stage
            for (var cat = 0; cat < 3; cat++) {
                cats[cat] = new objects.Cat("cat");
                game.addChild(cats[cat]);
            }


            //add scoreboard
            scoreboard = new objects.ScoreBoard();

            //add collision manager
            collision = new managers.Collision();

            //add game container to stage
            stage.addChild(game);
        }
    }
} 