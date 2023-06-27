var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GenericCar = /** @class */ (function () {
    function GenericCar() {
    }
    GenericCar.prototype.getDescription = function () {
        return this.description;
    };
    return GenericCar;
}());
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'ModelX';
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 2000;
    };
    return ModelX;
}(GenericCar));
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'ModelS';
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 40000;
    };
    return ModelS;
}(GenericCar));
var GenericCarDecorator = /** @class */ (function (_super) {
    __extends(GenericCarDecorator, _super);
    function GenericCarDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericCarDecorator;
}(GenericCar));
var EnhancedAutopilot = /** @class */ (function (_super) {
    __extends(EnhancedAutopilot, _super);
    function EnhancedAutopilot(decoratedCar) {
        var _this = _super.call(this) || this;
        _this.description = 'enhanced autopilot';
        _this.decoratedCar = decoratedCar;
        return _this;
    }
    EnhancedAutopilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 234;
    };
    EnhancedAutopilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ',Enhanced AutoPilot';
    };
    return EnhancedAutopilot;
}(GenericCarDecorator));
var BetterSeats = /** @class */ (function (_super) {
    __extends(BetterSeats, _super);
    function BetterSeats(decoratedCar) {
        var _this = _super.call(this) || this;
        _this.description = 'enhanced autopilot';
        _this.decoratedCar = decoratedCar;
        return _this;
    }
    BetterSeats.prototype.cost = function () {
        return this.decoratedCar.cost() * 0;
    };
    BetterSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ',BetterSeats';
    };
    return BetterSeats;
}(GenericCarDecorator));
var newTesla = new EnhancedAutopilot(new ModelS());
newTesla = new BetterSeats(newTesla);
console.log("Cost", newTesla.cost());
console.log("Description", newTesla.getDescription());
