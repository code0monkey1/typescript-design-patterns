"use strict";
class Car {
    getDescription() {
        return this.description;
    }
}
class ModelX extends Car {
    constructor() {
        super(...arguments);
        this.description = 'ModelX';
    }
    cost() {
        return 2000;
    }
}
class ModelS extends Car {
    constructor() {
        super(...arguments);
        this.description = 'ModelS';
    }
    cost() {
        return 40000;
    }
}
class CarDecorator extends Car {
}
class EnhancedAutopilot extends CarDecorator {
    constructor(decoratedCar) {
        super();
        this.description = 'enhanced autopilot';
        this.decoratedCar = decoratedCar;
    }
    cost() {
        return this.decoratedCar.cost() + 234;
    }
    getDescription() {
        return this.decoratedCar.getDescription() + ',Enhanced AutoPilot';
    }
}
let newTesla = new EnhancedAutopilot(new ModelS());
console.log("Cost", newTesla.cost());
console.log("Description", newTesla.getDescription());
