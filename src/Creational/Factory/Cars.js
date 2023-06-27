"use strict";
class Mercedes {
    constructor(model, year) {
        this.make = 'Mercedes';
        this.model = model;
        this.year = year;
    }
}
class BMW {
    constructor(model, year) {
        this.make = 'BMW';
        this.model = model;
        this.year = year;
    }
}
class AstonMartin {
    constructor(model, year) {
        this.make = 'Aston Martin';
        this.model = model;
        this.year = year;
    }
}
class CarFactory {
    static createCar(carType, model, year) {
        return new carType(model, year);
    }
}
// Example usage:
const myMercedes = CarFactory.createCar(Mercedes, 'C-Class', 2021);
console.log(myMercedes); // Mercedes { make: 'Mercedes', model: 'C-Class', year: 2021 }
const myBMW = CarFactory.createCar(BMW, 'X5', 2022);
console.log(myBMW); // BMW { make: 'BMW', model: 'X5', year: 2022 }
const myAstonMartin = CarFactory.createCar(AstonMartin, 'DB11', 2020);
console.log(myAstonMartin); // AstonMartin { make: 'Aston Martin', model: 'DB11', year: 2020 }
