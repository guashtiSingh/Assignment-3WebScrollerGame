module objects {
    // Cat Class ++++++++++++++++++++++++++++++++++++++
    export class Cat extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super("cat");

            this.sound = "meow";
            this.name = "cat";
            
         
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cat has left screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = -this.height; // start cat off stage 
            this.y = Math.floor(Math.random() * 640); // start cat at random location
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx =  Math.floor(Math.random() * 5) + 5;
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cat side the stage
            this.x += this.dx; // drifts cat right and left
            this.checkBounds();
        }
    }
} 