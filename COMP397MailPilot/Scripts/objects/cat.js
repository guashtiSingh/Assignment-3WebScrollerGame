var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Cat Class ++++++++++++++++++++++++++++++++++++++++++++
    var Cat = (function (_super) {
        __extends(Cat, _super);
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        function Cat(imageString) {
            _super.call(this, imageString);
            this.sound = "";
            this.reset();
        }
        //Private Methods +++++++++++++++++++++++++++++++++++++
        Cat.prototype.checkBounds = function () {
            //check if cat has left the screen
            if (this.x > 680 + this.width) {
                this.reset();
            }
        };
        Cat.prototype.reset = function () {
            this.x = -this.height; //start cat off stage  
            this.y = Math.floor(Math.random() * 640); //start cat at random location
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Cat.prototype.update = function () {
            this.y += this.dy; //moves cat down the stage
            this.x += this.dx; //drifts cat right and left
            this.checkBounds();
        };
        return Cat;
    })(objects.GameObject);
    objects.Cat = Cat;
})(objects || (objects = {}));
//# sourceMappingURL=cat.js.map