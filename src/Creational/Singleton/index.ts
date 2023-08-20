/*
Singleton Pattern :
Ensures that a class has only one instance and provides a global point of access to that instance.

*/

class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
