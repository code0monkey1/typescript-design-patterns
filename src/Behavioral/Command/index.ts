// Command Pattern (Behavioral):

// Turns a request into a stand-alone object that contains all information about the request. This decouples sender and receiver.

interface Command {
  execute(): void;
}

class Light {
  turnOn(): void {
    console.log('Light is on');
  }

  turnOff(): void {
    console.log('Light is off');
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach((command) => command.execute());
  }
}

// Usage

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.addCommand(lightOnCommand);
remoteControl.addCommand(lightOffCommand);

remoteControl.executeCommands();
