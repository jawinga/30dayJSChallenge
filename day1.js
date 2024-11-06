/**
 * @return {Function}
 */

const createHelloWorld = function () {
  return function (...arg) {
    console.log("Hello World");
  };
};

const f = createHelloWorld();
f();
