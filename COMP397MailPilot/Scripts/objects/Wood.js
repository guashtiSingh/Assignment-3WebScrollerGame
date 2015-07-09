/// <reference path="../managers/asset.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Wood Class ++++++++++++++++++++++++++++++++++++++
    var Wood = (function (_super) {
        __extends(Wood, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Wood() {
            _super.call(this, assets.loader.getResult("wood"));
            this.dx = 5;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Wood.prototype.checkBounds = function () {
            // check if wood has left screen
            if (this.x == 0) {
                this.reset();
            }
        };
        Wood.prototype.reset = function () {
            this.x = -805; //reset wood offscreen     
            this.y = 0;
        };
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Wood.prototype.update = function () {
            this.x += this.dx; //moves wood down the stage
            this.checkBounds();
        };
        return Wood;
    })(createjs.Bitmap);
    objects.Wood = Wood;
})(objects || (objects = {}));
//# sourceMappingURL=wood.js.map