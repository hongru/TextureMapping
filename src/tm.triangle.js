/* TextureMapping.Triangle */

;(function (tm) {

    // Triangle constructor
    tm.Triangle = function (parent, p0, p1, p2) {
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.next = false;
        // ---- pre calculation for transform----
        this.d    = p0.tx * (p2.ty - p1.ty) - p1.tx * p2.ty + p2.tx * p1.ty + (p1.tx - p2.tx) * p0.ty;
        this.pmy  = p1.ty - p2.ty;
        this.pmx  = p1.tx - p2.tx;
        this.pxy  = p2.tx * p1.ty - p1.tx * p2.ty;
        // ---- link for iteration ----
        if (!parent.firstTriangle) parent.firstTriangle = this; else parent.prev.next = this;
        parent.prev = this;
    }
    
})(TextureMapping);