/*
Task: Write an IIFE that creates a counter function. Each time this counter function is called,
it should log the current count and increment it by 1. 
The count should start at 1 and be stored privately within the IIFE.
*/

let counter = (function (n) {
  return function () {
    return n++;
  };
})(1);

console.log(counter());
console.log(counter());
console.log(counter());
