/*

Objective: Write an IIFE that returns a counter function. Each time this counter function is called,
 it should return the next number, starting from 1.

Steps:
Use an IIFE to create a counter function.
Inside the IIFE, initialize a count variable to 1.
The IIFE should return an inner function that increments count and returns the updated value.

*/

let counterFunction = (function (n) {
  return function () {
    return n++;
  };
})(4);

console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());

console.log(" ");

let counterFunction2 = function (n) {
  return function () {
    return n++;
  };
};

const executeCounter = counterFunction2(3);

console.log(executeCounter());
console.log(executeCounter());
console.log(executeCounter());
