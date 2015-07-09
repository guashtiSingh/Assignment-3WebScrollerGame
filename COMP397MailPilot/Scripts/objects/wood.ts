/// <reference path="../managers/asset.ts" />

module objects {
    // Wood Class ++++++++++++++++++++++++++++++++++++++
    export class Wood extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.loader.getResult("wood"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if wood has left screen
            if (this.x == 0) {
                this.reset();
            }
        }

        private reset(): void {
            this.x = -805; //reset wood offscreen     
            this.y = 0;
        }

        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.x += this.dx; //moves wood down the stage
            this.checkBounds();
        }
    }
} 