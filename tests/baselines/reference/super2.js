var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
}
var Base5 = (function () {
    function Base5() { }
    Base5.prototype.x = function () {
        return "BaseX";
    };
    Base5.prototype.y = function () {
        return "BaseY";
    };
    return Base5;
})();
var Sub5 = (function (_super) {
    __extends(Sub5, _super);
    function Sub5() {
        _super.apply(this, arguments);

    }
    Sub5.prototype.x = function () {
        return "SubX";
    };
    return Sub5;
})(Base5);
var SubSub5 = (function (_super) {
    __extends(SubSub5, _super);
    function SubSub5() {
        _super.apply(this, arguments);

    }
    SubSub5.prototype.x = function () {
        return _super.prototype.x.call(this);
    };
    SubSub5.prototype.y = function () {
        return _super.prototype.y.call(this);
    };
    return SubSub5;
})(Sub5);
var Base6 = (function () {
    function Base6() { }
    Base6.prototype.x = function () {
        return "BaseX";
    };
    return Base6;
})();
var Sub6 = (function (_super) {
    __extends(Sub6, _super);
    function Sub6() {
        _super.apply(this, arguments);

    }
    Sub6.prototype.y = function () {
        return "SubY";
    };
    return Sub6;
})(Base6);
var SubSub6 = (function (_super) {
    __extends(SubSub6, _super);
    function SubSub6() {
        _super.apply(this, arguments);

    }
    SubSub6.prototype.y = function () {
        return _super.prototype.y.call(this);
    };
    return SubSub6;
})(Sub6);
var results1 = new SubSub5();
var results2 = new SubSub6();
(results1.x() + results1.y()) + results2.y();