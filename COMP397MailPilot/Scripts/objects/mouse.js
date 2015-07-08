var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //Mouse Class ++++++++++++++++++++++++++++++++++++++++++++
    var Mouse = (function (_super) {
        __extends(Mouse, _super);
        //Constructor ++++++++++++++++++++++++++++++++++++++++
        function Mouse(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.width * 0.5;
            //up and down value
            this.x = 530;
        }
        //Public Methods +++++++++++++++++++++++++++++++++++++
        Mouse.prototype.update = function () {
            this.y = stage.mouseY; //position Mouse under mouse
        };
        return Mouse;
    })(createjs.Bitmap);
    objects.Mouse = Mouse;
})(objects || (objects = {}));
//# sourceMappingURL=mouse.js.map