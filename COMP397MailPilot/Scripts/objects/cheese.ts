module objects {
    // Cheese Class ++++++++++++++++++++++++++++++++++++++
    export class Cheese extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super("cheese");

            this.name = "cheese";
            this.sound = "cheesesound";
            this.dx = 5;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if island has left screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = -this.width;//start cheese off stage   
            this.y = Math.floor(Math.random() * 640); //start cheese at random location                                           
        }


        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves cheese down the stage
            this.checkBounds();
        }
    }
}