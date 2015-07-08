 module objects {
    //Wood Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Wood extends createjs.Bitmap {
        //Public properties ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        //Private Methods +++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            //check if wood has left the screen
            if (this.x == 0) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = -500; //reset wood offscreen     
            this.y = 0;                                          
        }

        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves wood down the stage
            this.checkBounds();
        }
    }
} 