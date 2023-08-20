// Strategy Pattern:

// The Strategy pattern defines a family of interchangeable algorithms, encapsulates each algorithm, and makes them interchangeable.

// typescript

// Strategy Pattern

interface DiscountStrategy {
  applyDiscount(orderTotal: number): number;
}

class TenPercentDiscount implements DiscountStrategy {
  applyDiscount(orderTotal: number): number {
    return orderTotal * 0.1;
  }
}

class TwentyPercentDiscount implements DiscountStrategy {
  applyDiscount(orderTotal: number): number {
    return orderTotal * 0.2;
  }
}

class Order {
  constructor(private discountStrategy: DiscountStrategy) {}

  calculateTotal(orderTotal: number): number {
    const discount = this.discountStrategy.applyDiscount(orderTotal);
    return orderTotal - discount;
  }
}

// Usage

const tenPercentDiscount = new TenPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();

const order = new Order(tenPercentDiscount);
const totalAmount = order.calculateTotal(100);
console.log(totalAmount); // Output: 90
