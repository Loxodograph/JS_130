// Write a function that takes a sorted Array of integers
// as an argument, and returns an array that includes all
// of the missing integers (in order) between the first
// and last elements of the argument.

let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []

function missing(arr) {
  let result = [];
  for (let idx = (arr[0] + 1); idx < arr[arr.length - 1]; idx++) {
    if (arr.indexOf(idx) === -1) {
      result.push(idx);
    }
  }
  return result;
}