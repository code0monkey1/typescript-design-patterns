// Adapter Pattern (Structural):
// Converts the interface of a class into another interface that clients expect, allowing classes with incompatible interfaces to work together.

class Adaptee {
  specificRequest(): string {
    return "Adaptee's request";
  }
}

interface Target {
  request(): string;
}

class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    return `Adapter: ${this.adaptee.specificRequest()}`;
  }
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
console.log(adapter.request());
