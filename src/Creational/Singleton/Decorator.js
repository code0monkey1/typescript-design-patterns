// Step 2: Implement the base class
var BasicCar = /** @class */ (function () {
    function BasicCar() {
    }
    BasicCar.prototype.drive = function () {
        console.log("The car is moving.");
    };
    BasicCar.prototype.honk = function () {
        console.log("The car is honking.");
    };
    return BasicCar;
}());
// Step 3: Create decorators
var GlowDecorator = /** @class */ (function () {
    function GlowDecorator(car) {
        this.car = car;
    }
    GlowDecorator.prototype.drive = function () {
        this.car.drive();
        console.log("The car is glowing in the dark!");
    };
    GlowDecorator.prototype.honk = function () {
        this.car.honk();
    };
    return GlowDecorator;
}());
var MusicDecorator = /** @class */ (function () {
    function MusicDecorator(car) {
        this.car = car;
    }
    MusicDecorator.prototype.drive = function () {
        this.car.drive();
    };
    MusicDecorator.prototype.honk = function () {
        this.car.honk();
        console.log("The car is playing music!");
    };
    return MusicDecorator;
}());
// Step 4: Use the decorators
var myCar = new BasicCar();
myCar.drive(); // Output: "The car is moving."
myCar.honk(); // Output: "The car is honking."
// Decorate the car with additional functionality
myCar = new GlowDecorator(myCar);
myCar.drive(); // Output: "The car is moving." followed by "The car is glowing in the dark!"
myCar.honk(); // Output: "The car is honking."
myCar = new MusicDecorator(myCar);
myCar.drive(); // Output: "The car is moving." followed by "The car is glowing in the dark!"
myCar.honk(); // Output: "The car is honking." followed by "The car is playing music!"
