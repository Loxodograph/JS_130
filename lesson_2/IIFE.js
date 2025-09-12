// thousands of lines of messy JavaScript code!

// function findLargest() {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if ((array[index] % 2) === 0 && (array[index] > largest)) {
//       largest = array[index];
//     }
//   }

//   return largest;
// }

// console.log(findLargest()); // 24

// more messy JavaScript code


// (function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);

// sum += sum(numbers);  // ?

// throws an error because sum is the name of a variable and
// the name of a function

// (function(num) {
//   while (num >= 0) {
//     console.log(num);
//     num--;
//   }
// })(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

/*
the parentheses surrounding the function turn the function
into a function expression, giving the function it's own local
scope for the name foo. this prevents it from being added to the global
scope
*/

// let bar = (function (start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

