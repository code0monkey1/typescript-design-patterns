//  Observer Pattern:

// The Observer pattern defines a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically.

// Observer Pattern

interface Observer {
  update(message: string): void;
}

class ConcreteObserver implements Observer {
  update(message: string): void {
    console.log(`Received message: ${message}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(message: string): void {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Usage

const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

const subject = new Subject();
subject.attach(observer1);
subject.attach(observer2);

subject.notify('Hello, observers!');
