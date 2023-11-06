{
  //  Abstraction in OOP  : 1. interface 2. abstract

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car Engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am Just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //  abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
      console.log(`I am testing the car engine`);
    }
  }

  class ToyotaCar extends Car2 {
      startEngine(): void {
        console.log(`I am starting the car engine`);
      }
      stopEngine(): void {
        console.log(`I am stopping the car engine`);
      }
      move(): void {
        console.log(`I am moving the car engine`);
      }
      
  }

//   const hondaCar = new Car2();
//   hondaCar.startEngine();

  //
}
