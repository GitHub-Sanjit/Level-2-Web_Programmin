{
  // oop - class

  class Animal {
    //parameter properties  ===========================================//
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }
  const dog = new Animal("German Shepard Bhai", "Dog", "Ghew Ghew");
  const cat = new Animal("Cat", "CAT", "MEW mew");
  dog.name;
  dog.makeSound();
  //
}
