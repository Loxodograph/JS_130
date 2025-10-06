"use strict";

class Octal {
  constructor(numeral) {
    this.numeral = numeral;
  }

  toDecimal() {
    let numberString = String(this.numeral);
    let digits = numberString.split("");
    let decimalDigits = [];
    if (digits.some(elements => elements.match(/[a-zA-z]/)) || digits.some(elements => elements.match(/[8-9]/))) return 0;
    for (let index = 0; index < digits.length; index++) {
      decimalDigits.push(digits[index] * (Math.pow(8, (digits.length - index - 1))));
    }
    return decimalDigits.reduce((a, b) => a + b, 0);
  }
}

module.exports = Octal;