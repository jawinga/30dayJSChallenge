/**
 * @return {Function}
 */

const createHelloWorld = function () {
  return function () {
    console.log("Hello World");
  };
};

const f = createHelloWorld();
f();
