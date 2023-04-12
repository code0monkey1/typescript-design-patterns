interface Car {
  make: string;
  model: string;
  year: number;
}

class Mercedes implements Car {
  make = 'Mercedes';
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

class BMW implements Car {
  make = 'BMW';
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

class AstonMartin implements Car {
  make = 'Aston Martin';
  model: string;
  year: number;

  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

class CarFactory {
  static createCar<T extends Car>(carType: new (model: string, year: number) => T, model: string, year: number): T {
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