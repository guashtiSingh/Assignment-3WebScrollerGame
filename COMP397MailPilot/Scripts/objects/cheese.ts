module objects {
    //Cheese Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Cheese extends createjs.Bitmap {
        //Public properties ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;
        isColliding; boolean = false;
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;

            this.reset();
        }

        //Private Methods +++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            //check if the cheese has left the screen
            if (this.x > 680 + this.width) {
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