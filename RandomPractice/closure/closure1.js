function outerFunction() {
    let outerVar = 10;

    function innerFunction() {
      console.log(outerVar); // innerFunction has access to outerVar
    }

    return innerFunction;
}

const closure = outerFunction(); // closure now holds a reference to innerFunction
closure(); // This will log 10 because innerFunction still has access to outerVar