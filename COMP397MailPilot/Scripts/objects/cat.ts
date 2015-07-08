module objects {
    //Cat Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Cat extends objects.GameObject {
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "";
            this.reset();
        }

        //Private Methods +++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            //check if cat has left the screen
            if (this.x > 680 + this.width) {
                this.reset();
            }
        }

        private reset(): void {

            this.x = -this.height; //start cat off stage  
            this.y = Math.floor(Math.random() * 640); //start cat at random location

            this.dy = Math.floor(Math.random() * 4) - 2;      
            this.dx = Math.floor(Math.random() * 5) + 5;                                      
        }

        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y += this.dy; //moves cat down the stage
            this.x += this.dx; //drifts cat right and left
            this.checkBounds();
        }
    }
}