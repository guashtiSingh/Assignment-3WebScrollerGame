var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cat Class ++++++++++++++++++++++++++++++++++++++
    var Cat = (function (_super) {
        __extends(Cat, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Cat() {
            _super.call(this, "cat");
            this.sound = "meow";
            this.name = "cat";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Cat.prototype.checkBounds = function () {
            // check if cat has left screen
            if (this.x > 640 + this.width) {
                this.reset();
            }
        };
        Cat.prototype.reset = function () {
            this.x = -this.height; // start cat off stage 
            this.y = Math.floor(Math.random() * 640); // start cat at random location
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Cat.prototype.update = function () {
            this.y += this.dy; // moves cat side the stage
            this.x += this.dx; // drifts cat right and left
            this.checkBounds();
        };
        return Cat;
    })(objects.GameObject);
    objects.Cat = Cat;
})(objects || (objects = {}));
//# sourceMappingURL=cat.js.map