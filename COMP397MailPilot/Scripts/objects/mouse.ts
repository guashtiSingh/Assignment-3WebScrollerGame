module objects {
    //Mouse Class ++++++++++++++++++++++++++++++++++++++++++++
    export class Mouse extends objects.GameObject {
        
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.sound = "background";
            //up and down value
            this.x = 530;
        }
        
        //Public Methods +++++++++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; //position Mouse under mouse
        }
    }
}