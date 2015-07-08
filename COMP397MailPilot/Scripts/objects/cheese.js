var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Cheese Class ++++++++++++++++++++++++++++++++++++++++++++
    var Cheese = (function (_super) {
        __extends(Cheese, _super);
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        function Cheese(imageString) {
            _super.call(this, imageString);
            this.dx = 5;
            this.reset();
        }
        //Private Methods +++++++++++++++++++++++++++++++++++++
        Cheese.prototype.checkBounds = function () {
            //check if the cheese has left the screen
            if (this.x > 680 + this.width) {
                this.reset();
            }
        };
        Cheese.prototype.reset = function () {
            this.x = -this.width; //start cheese off stage   
            this.y = Math.floor(Math.random() * 640); //start cheese at random location                                           
        };
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Cheese.prototype.update = function () {
            this.x += this.dx; //moves cheese down the stage
            this.checkBounds();
        };
        return Cheese;
    })(objects.GameObject);
    objects.Cheese = Cheese;
})(objects || (objects = {}));
//# sourceMappingURL=cheese.js.map