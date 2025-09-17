/*
Problem

write a function which acts like array.prototype.map
emulate basic behavior - transform elements of an array
do not need thisArg argument

Examples

see below

Datastructure

arrays

Algorithm

create function map which takes array and a callback

*/

function map(array, callback, thisArg) {
  let finalArray = [];

  for (let index = 0; index < array.length; index++) {
    let value = array[index];
    finalArray.push(callback.call(thisArg, value));
  }

  return finalArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]