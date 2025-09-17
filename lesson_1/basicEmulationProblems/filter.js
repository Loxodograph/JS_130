/*
Problem
write a function that acts like the built in filter function
we need to emulate the basic behavior
filter elements of an array by examining the array values

you don't need to support multiple arguments to the callback

Examples and test cases, see below

Data Structures array

algorithm

create a function filter that accepts an array and callback function
if callback evaluates to true, add element to new array;
return new array
*/

function filter(array, callback) {
  let results = [];

  for (let index = 0; index < array.length; index++) {
    if (callback(array[index])) results.push(array[index]);
  }
  return results;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]