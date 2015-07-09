module objects {
    // LABEL CLASS
    export class Label extends createjs.BitmapText {
        // INSTANCE VARIALBES
        public width: number;
        public height: number;

        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(labelString: string, x: number, y: number) {
            super(labelString, assets.fontAtlas);

            this.setSize(40); // set default font size to 40 px;

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.x = x;
            this.y = y;
        }

        setSize(newSize: number) {
            var fontSize: number = newSize / 100;
            this.scaleX = fontSize;
            this.scaleY = fontSize;
        }
    }
}