/*
Write a function that returns an array of all of
the divisors of the positive integer passed in as an
argument. The return value can be in any sequence
you wish, though its easiest to return them in order.
*/

let p = console.log;

p(divisors(1));          // [1]
p(divisors(7));          // [1, 7]
p(divisors(12));         // [1, 2, 3, 4, 6, 12]
p(divisors(98));         // [1, 2, 7, 14, 49, 98]

// This may take a minute or so to run
p(divisors(9995000429)); // [1, 99961, 99989, 9995000429]

function divisors(num) {
  let result = [];
  for (let idx = 1; idx <= Math.sqrt(num); idx++) {
    if (num % idx === 0) {
      result.push(idx);
      if (!result.includes(num / idx)) result.push(num / idx);
    }
  }
  return result.sort((a, b) => a - b);
}