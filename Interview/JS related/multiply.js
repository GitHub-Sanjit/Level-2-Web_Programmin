function multiply(x) {
  return function (y) {
    return x * y;
  };
}
let m = multiply(5)(6);
console.log(m);
