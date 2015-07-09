module objects {
    // Mouse Class ++++++++++++++++++++++++++++++++++++++
    export class Mouse extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            //this.sound = "backgroundMusic";
            
            //up and down value
            this.x = 530;

            createjs.Sound.play(this.sound, { "loop": -1 });
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position Mouse under mouse
        }
    }
} 