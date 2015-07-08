var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Cloud Class ++++++++++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        function Cloud(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;
            this.reset();
        }
        //Private Methods +++++++++++++++++++++++++++++++++++++
        Cloud.prototype.checkBounds = function () {
            //check if island has left the screen
            if (this.y > 480 + this.height) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.x = Math.floor(Math.random() * 640); //start cloud at random location
            this.y = -this.height; //start cloud off stage  
            this.dy = Math.floor(Math.random() * 5) + 5;
            this.dx = Math.floor(Math.random() * 4) - 2;
        };
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.y += this.dy; //moves cloud down the stage
            this.x += this.dx; //drifts cloud right and left
            this.checkBounds();
        };
        return Cloud;
    })(createjs.Bitmap);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map