module managers {
    export class Collision {
        //CONSTRUCTOR +++++++++++++++++++++++++++
        constructor() {
        }

        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between plane and any other game object
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = mouse.x;
            p1.y = mouse.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;


            if (utility.distance(p1, p2) < ((mouse.height * 0.5) + (gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "cat") {
                        scoreboard.lives--;
                    }
                    if (gameObject.name == "cheese") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;

            }
            else {
                gameObject.isColliding = false;
            }
        }


    }
} 