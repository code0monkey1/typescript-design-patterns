// Abstract Factory (Creational):

// Provides an interface for creating families of related or dependent objects without specifying their concrete classes.

// Example:

interface Button {
  render(): void;
}

class WindowsButton implements Button {
  render(): void {
    console.log('Rendering a Windows button.');
  }
}

class MacOSButton implements Button {
  render(): void {
    console.log('Rendering a macOS button.');
  }
}

interface GUIFactory {
  createButton(): Button;
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
}

class MacOSFactory implements GUIFactory {
  createButton(): Button {
    return new MacOSButton();
  }
}

// Usage
function createUI(factory: GUIFactory): void {
  const button = factory.createButton();
  button.render();
}

const windowsFactory = new WindowsFactory();
const macosFactory = new MacOSFactory();

createUI(windowsFactory); // Output: Rendering a Windows button.
createUI(macosFactory); // Output: Rendering a macOS button.
