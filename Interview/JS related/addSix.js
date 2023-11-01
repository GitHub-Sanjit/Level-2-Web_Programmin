// Write a function that would allow you to do this?

// let addSix = createBase(6);
// addSix(10); return 16
// addSix(21); return 27

function createBase(baseNumber) {
  return function (N) {
    return baseNumber + N;
  };
}

let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
