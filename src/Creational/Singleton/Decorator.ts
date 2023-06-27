// Step 1: Define the base class or interface
interface Carb {
  drive(): void;
  honk(): void;
}

// Step 2: Implement the base class
class BasicCar implements Carb {
  drive() {
    console.log("The car is moving.");
  }

  honk() {
    console.log("The car is honking.");
  }
}

// Step 3: Create decorators
class GlowDecorator implements Carb {
  private car: Carb;

  constructor(car: Carb) {
    this.car = car;
  }

  drive() {
    this.car.drive();
    console.log("The car is glowing in the dark!");
  }

  honk() {
    this.car.honk();
  }
}

class MusicDecorator implements Carb {
  private car: Carb;

  constructor(car: Carb) {
    this.car = car;
  }

  drive() {
    this.car.drive();
  }

  honk() {
    this.car.honk();
    console.log("The car is playing music!");
  }
}

// Step 4: Use the decorators
let myCar: Carb = new BasicCar();
myCar.drive(); // Output: "The car is moving."
myCar.honk(); // Output: "The car is honking."

// Decorate the car with additional functionality
myCar = new GlowDecorator(myCar);
myCar.drive(); // Output: "The car is moving." followed by "The car is glowing in the dark!"
myCar.honk(); // Output: "The car is honking."

myCar = new MusicDecorator(myCar);
myCar.drive(); // Output: "The car is moving." followed by "The car is glowing in the dark!"
myCar.honk(); // Output: "The car is honking." followed by "The car is playing music!"


interface Carc{
   
    getDescription():string

    getCost():number

}


class ModelX implements Carc{

  getDescription(): string {
    return 'ModelX'
  }
  getCost(): number {
    return 1
  }
 
}


class EnhancedSeatsDecorator implements Carc{

  constructor(private car:Carc){ }

  getDescription(): string {
    return this.car.getDescription()+',Enhanced Seats'
  }
  getCost(): number {
    return this.car.getCost()+10
  }

}

let carc = new ModelX()

carc = new EnhancedSeatsDecorator(carc)

console.log(carc.getCost())
console.log(carc.getDescription())