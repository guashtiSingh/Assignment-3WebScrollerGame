var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Plane Class ++++++++++++++++++++++++++++++++++++++++++++
    var Plane = (function (_super) {
        __extends(Plane, _super);
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        function Plane(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;
            //up and down value
            this.y = 430;
        }
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Plane.prototype.update = function () {
            this.x = stage.mouseX; //position plane uner mouse
        };
        return Plane;
    })(createjs.Bitmap);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map