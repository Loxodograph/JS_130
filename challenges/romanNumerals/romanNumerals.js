/* PEDAC
Write a program that converts decimal number to roman numerals

No need to go higher than 3 thousand
I II III IV V VI VII VII IX X

L is 50
C is 100
D is 500
M is 1000

1990 = M CM XC (1000, 900, 90) skip the final 0, doesn't
need to be represented

Test cases show we need a romanNumeral class with a constructor
that accepts a number and a toRoman method
that converts the number to roman numerals.

Algorithm

create object that contains numeric values of ROMAN_NUMERALS

create method toRoman
initialize an empty string
iterate over the ROMAN_NUMERALS object
*/
"use strict";

class RomanNumeral {
  static ROMAN_NUMERALS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,

  }
  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let romanNumerals = "";
    let currentNumberValue = this.number;
    for (const [numeral, value] of
      Object.entries(RomanNumeral.ROMAN_NUMERALS)) {
      while (value <= currentNumberValue) {
        romanNumerals += numeral;
        currentNumberValue -= value;
      }
    }
    return romanNumerals;

  }
}

module.exports = RomanNumeral;