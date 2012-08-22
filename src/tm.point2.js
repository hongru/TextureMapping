/* TextureMapping.Point2 */

;(function (tm) {

    var Point2 = function (x, y) {
        this.X = x;
        this.Y = y;
    };
    
    Point2.prototype = {
        clone: function () {
            return new Point2(this.X, this.Y);
        },
        pos: function (x, y) {
            this.X = x;
            this.Y = y;
        },
        move: function (x, y) {
            this.X += x;
            this.Y += y;
        }
    };
    
    tm.Point2 = Point2;

})(TextureMapping);