// The Mediator pattern is a Behavioral Design Pattern. It focuses on defining an object that encapsulates how a set of objects interact and communicate with each other, promoting loose coupling between these objects. The Mediator acts as a central hub that coordinates interactions between various objects, allowing them to communicate without direct references to each other.

// In other words, the Mediator pattern promotes a "many-to-many" relationship between objects, where each object communicates with a single mediator rather than directly communicating with other objects.

//The primary goal of the Mediator pattern is to reduce the dependencies between objects and promote better maintainability and flexibility. It's particularly useful in scenarios where a complex network of interactions between objects exists, and you want to avoid the tight coupling that would arise from direct communication.

// Key participants in the Mediator pattern include:

// Mediator: Defines an interface for communication between Colleague objects.

// ConcreteMediator: Implements the Mediator interface and manages the communication and interactions between Colleague objects.

// Colleague: Objects that need to communicate with each other. They communicate through the Mediator rather than directly with each other.

// ConcreteColleague: Implements the Colleague interface and communicates with other Colleague objects through the Mediator.

// Example in TypeScript:

interface Mediator {
  notify(sender: Colleague, message: string): void;
}

class ConcreteMediator implements Mediator {
  private colleagueA: Colleague;
  private colleagueB: Colleague;

  setColleagueA(colleagueA: Colleague): void {
    this.colleagueA = colleagueA;
  }

  setColleagueB(colleagueB: Colleague): void {
    this.colleagueB = colleagueB;
  }

  isColleague(object: unknown): object is Colleague {
    return (
      (object as Colleague).receive !== undefined &&
      (object as Colleague).send !== undefined
    );
  }
  notify(sender: Colleague, message: string): void {
    if (this.isColleague(this.colleagueA) && sender === this.colleagueA) {
      this.colleagueB.receive(message);
    } else if (sender === this.colleagueB) {
      this.colleagueA.receive(message);
    }
  }
}

abstract class Colleague {
  constructor(private mediator: Mediator) {}

  send(message: string): void {
    this.mediator.notify(this, message);
  }

  abstract receive(message: string): void;
}

class ConcreteColleagueA extends Colleague {
  receive(message: string): void {
    console.log(`Colleague A received: ${message}`);
  }
}

class ConcreteColleagueB extends Colleague {
  receive(message: string): void {
    console.log(`Colleague B received: ${message}`);
  }
}

// Usage

const mediator = new ConcreteMediator();
const colleagueA = new ConcreteColleagueA(mediator);
const colleagueB = new ConcreteColleagueB(mediator);

mediator.setColleagueA(colleagueA);
mediator.setColleagueB(colleagueB);

colleagueA.send('Hello from A');
colleagueB.send('Hi from B');
