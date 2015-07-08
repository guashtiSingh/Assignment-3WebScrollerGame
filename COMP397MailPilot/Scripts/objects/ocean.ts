module objects {
    //Ocean Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Ocean extends createjs.Bitmap {
        //Public properties ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        dy: number = 5;
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        //Private Methods +++++++++++++++++++++++++++++++++++++
        private checkBounds(): void {

            //check if ocean has left the screen
            if (this.y == 0) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = 0;
            this.y = -960; //reset ocean offscreen                                              
        }

        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y += this.dy; //moves ocean down the stage
            this.checkBounds();
        }
    }
} 