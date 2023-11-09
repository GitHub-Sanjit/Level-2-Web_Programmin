function normal_sum(a: number, b: number): number {
  return a + b;
}
// console.log(normal_sum(1, 2));

// function sum(a:number) {
//     return function (b:number) {
//         return a + b;
//     }
// }

type Sum = (a: number) => (b: number) => number;
const sum: Sum = (a) => (b) => a + b;
// console.log(sum(2)(8));

type Increment = (x: number) => number;
const increment: Increment = sum(1);

type Decrement = (x: number) => number;
const decrement: Decrement = sum(-1);

// console.log(increment(7));
// console.log(decrement(7));

type Curry2 = <A, B, Z>(f: (a: A, b: B) => Z) => (a: A) => (b: B) => Z;
const curry2: Curry2 = (f) => (a) => (b) => f(a, b);

const sum2 = curry2(normal_sum);

console.log(sum2(1)(2));
