var ModelX = /** @class */ (function () {
    function ModelX() {
    }
    ModelX.prototype.getDescription = function () {
        return 'ModelX';
    };
    ModelX.prototype.getCost = function () {
        return 1;
    };
    return ModelX;
}());
var EnhancedSeatsDecorator = /** @class */ (function () {
    function EnhancedSeatsDecorator(car) {
        this.car = car;
    }
    EnhancedSeatsDecorator.prototype.getDescription = function () {
        return this.car.getDescription() + ',Enhanced Seats';
    };
    EnhancedSeatsDecorator.prototype.getCost = function () {
        return this.car.getCost() + 10;
    };
    return EnhancedSeatsDecorator;
}());
var carc = new ModelX();
carc = new EnhancedSeatsDecorator(carc);
console.log(carc.getCost());
console.log(carc.getDescription());
