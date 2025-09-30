/*
What do the 4 console.log statements print to the console?
*/

// let counter = 0;

// function makeCounter() {
//   return function() {
//     counter += 1;
//     return counter;
//   }
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// This prints 1, 2, 3, 4 because a closure is created for the
// global counter variable. Each incrementCounter call updates the
// global variable.

// function makeCounter() {
//   return function() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

/* This logs 1, 1, 1, 1
   In this example the let statement is moved to inside the returned
   function. When we create the function we create a new counter variable.

   this gets incremented by 1 and then returned.
*/

// function makeCounter() {
//   let counter = 0;

//   return function() {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// incrementCounter = makeCounter();
// console.log(incrementCounter());
// console.log(incrementCounter());

// This logs 1, 2, 1, 2
/* This code has a counter variable declared outside the scope
   of the returned function. The returned function creates an envelope
   with a reference to the counter variable inside.

   This means when we call makeCounter() on 58 and 62 we are creating
   a new let counter = 0 which is passed as a reference to the returned
   function.
*/

/* Write a function makeMultipleLister that you can call with
a number argument. Function should return a function that logs
every positive integer multiple of the number that is less than 100
*/

// function makeMultipleLister(num) {
//   let product = num;
//   let multiplicand = 1;
//   return function() {
//     while ((num * multiplicand) < 100) {
//       product = num * multiplicand;
//       console.log(product);
//       multiplicand++;
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

/*
Write a program that uses two functions to manipulate a running total
when you invoke either function with a number, it should add or subtract
from the running total and log to the console.
*/

// let runningTotal = 0;

// function add(num) {
//   runningTotal += num;
//   console.log(runningTotal);
// }

// function subtract(num) {
//   runningTotal -= num;
//   console.log(runningTotal);
// }

// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2); // prod = 2;
// let result = bar(3); // prod = 2 factor = 3. prod = 6 result = 6
// result += bar(4); // prod = 6; factor = 4; prod = 24 result = 30
// result += bar(5); // prod = 24, factor = 5, prod = 120 result = 150
// console.log(result);

// function later(callback, argument) {
//   return function() {
//     callback(argument);
//   };
// }

// const logger = message => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(callback, argument) {
//   return function (secondArgument) {
//     callback(argument, secondArgument);
//   }
// }

// const notify = function(message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

"use strict";

function bind(object, callback) {
  return function() {
    callback.call(object);
  }
}
let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }