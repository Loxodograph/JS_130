// question 5
// write a function named makeMultipleLister that you can call
// with a number as an argument. You should return a new function
// that when invoked logs every positive integer multiple of that
// number less than 100

// examples:
// let lister = makeMultipleLister()
// lister();

// 17, 34, 51, 68, 85

// problem
// Write function makeMultipleLister.
// accepts number as an argument.
// return a new function
// log every positive integer multiple of that number under 100;

// algorithm
/*
1. create function makeMultipleLister which accepts num parameter
2. create counter variable equal to 1
3. create new function multiplesUnderOneHundred which accepts counter and number
4. while product is less than 100
  5. product is equal to number by counter
*/

// function makeMultipleLister(number) {
//   let counter = 1;
//   return function() {
//     let product = number * counter;
//     while (product <= 100) {
//       console.log(product);
//       counter++;
//       product = number * counter;
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// question 6
// write program that uses two functions add and subtract
// to manipulate a running total.
// when you invoke either function with a number, it should add or subtract
// that number from the running total and log the new total
// to the console.

// function total() {
//   let total = 0;

//   const add = function (num) {
//     total += num;
//     console.log(total);
//   };

//   const subtract = function (num) {
//     total -= num;
//     console.log(total);
//   };

//   return [add, subtract];
// }

// let functions = total();
// let add = functions[0];
// let subtract = functions[1];

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// question 8

// write a function named later that takes two arguments
// a function and an argument for that function
// the return value should be a new function that
// calls the input function with the provided argument

/*
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
*/

// function later(fun, argument) {
//   return function() {
//     return fun(argument);
//   };
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

/*
write a function later2 that takes two arguments
a function and an argument for that function
return value should be a new function that takes an argument
the new function should call the input function with the argument provided
to later2 and the argument provided to the returned function

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!

*/

// function later2(fun, argument) {
//   return (argument2) => fun(argument, argument2);
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!


// example 10

"use strict";


function bind(arg1, arg2) {
  return () => arg2.call(arg1);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }