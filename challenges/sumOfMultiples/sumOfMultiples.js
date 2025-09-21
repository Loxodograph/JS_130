/*
Problem

Create a program that given
  - Natural Number
  - Set of One Or More Numbers
finds the sum of all multiples of the set that are less than the first number
Default set is 3 & 5

example:
List of 20 and set of 3 & 5
3, 5, 6, 9, 10, 12, 15, 18
The sum is 78

Algorithm
Need class SumOfMultiples and export the module
Sum of Multiples takes three parameters, the upper limit,
  the first set, and the second set

SumOfMultiples has a static method 'to' which calculates
using 3 and 5

the to method has default parameters 3 and 5
the two method iterates from first set parameter * 1
up to set parameter * x which is < limit

create helper function to calculate all multiples of

*/
"use strict";

class SumOfMultiples {
  constructor() {
    this.set = [...arguments];
  }

  static to(upperLimit, ...multiples) {
    let arrayOfMultiples = [];
    if (multiples.length === 0) multiples = [3, 5];
    multiples.forEach(number => {
      let array = this.calculateMultiples(upperLimit, number);
      array.forEach(multiple => {
        if (!arrayOfMultiples.includes(multiple)) {
          arrayOfMultiples.push(multiple);
        }
      });
    });
    return this.calculateSum(arrayOfMultiples);
  }

  static calculateMultiples(upperLimit, multiplicand) {
    let multiplier = 1;
    let product = multiplicand * multiplier;
    let arrayOfMultiples = [];
    while (product < upperLimit) {
      arrayOfMultiples.push(product);
      multiplier++;
      product = multiplicand * multiplier;
    }
    return arrayOfMultiples;
  }

  static calculateSum(arrayOfMultiples) {
    return arrayOfMultiples.reduce((a, b) => a + b, 0);
  }

  to(upperLimit) {
    return SumOfMultiples.to(upperLimit, ...this.set);
  }
}


module.exports = SumOfMultiples;