// Builder Pattern (Creational):

// Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

class Product {
  constructor(public part1: string, public part2: string) {}
}

class ProductBuilder {
  private part1: string = '';
  private part2: string = '';

  build(): Product {
    return new Product(this.part1, this.part2);
  }

  withPart1(part1: string): ProductBuilder {
    this.part1 = part1;
    return this;
  }

  withPart2(part2: string): ProductBuilder {
    this.part2 = part2;
    return this;
  }
}

const product = new ProductBuilder()
  .withPart1('Part A')
  .withPart2('Part B')
  .build();
