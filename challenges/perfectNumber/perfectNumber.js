/*
Create a program that can tell whether a number is
Perfect - aliquot sum equal to original number
Abundant - aliquot sum is greater than original number
Deficient - aliquot sum is less than original number

An aliquot number is the sum of a numbers positive divisors, excluding
the number itself

examples
Need a class with static method classify
can also define helper functions

data structure
will use for loop to iterate over potential divisors

algorithm
create class perfectNumber
create static method classify
create method isDivisor to determine if number is evenly divisible
  by divisor

classify will throw an error if number inputted is less than or equal
  to 0

classify iterates from 1 to (number - 1)
determines if number is divisor
if so - adds to aliquot sum
*/

class PerfectNumber {

  static classify(number) {
    if (number <= 0) throw new Error("Only numbers greater than 0");
    let aliquotSum = PerfectNumber.aliquotSum(number);
    return PerfectNumber.determineNumberType(aliquotSum, number);
  }

  static isDivisor(dividend, divisor) {
    return dividend % divisor === 0;
  }

  static determineNumberType(aliquotSum, number) {
    if (aliquotSum === number) {
      return "perfect";
    } else if (aliquotSum < number) {
      return "deficient";
    } else if (aliquotSum > number) {
      return "abundant";
    }
    return undefined;
  }

  static aliquotSum(number) {
    let aliquot = 0;
    for (let divisor = 1; divisor < number; divisor++) {
      if (PerfectNumber.isDivisor(number, divisor)) aliquot += divisor;
    }
    return aliquot;
  }
}

module.exports = PerfectNumber;