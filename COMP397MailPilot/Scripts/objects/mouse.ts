module objects {
    //Mouse Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Mouse extends createjs.Bitmap {
        //Public properties ++++++++++++++++++++++++++++++++++
        width: number;
        height: number;
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;

            //up and down value
            this.x = 530;
        }
        
        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position Mouse under mouse
        }
    }
}