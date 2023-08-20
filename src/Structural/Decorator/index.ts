// Decorator Pattern (Structural):
// Adds behavior to objects dynamically without altering their class, allowing for flexible extension of functionality.

interface Coffee {
  cost(): number;
  description(): string;
}

class BasicCoffee implements Coffee {
  cost(): number {
    return 5;
  }

  description(): string {
    return 'Basic Coffee';
  }
}

class MilkDecorator implements Coffee {
  constructor(private coffee: Coffee) {}

  cost(): number {
    return this.coffee.cost() + 2;
  }

  description(): string {
    return `${this.coffee.description()} with Milk`;
  }
}

const coffee = new BasicCoffee();
const coffeeWithMilk = new MilkDecorator(coffee);
console.log(coffeeWithMilk.cost()); // Output: 7
console.log(coffeeWithMilk.description()); // Output: "Basic Coffee with Milk"
