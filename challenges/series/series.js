"use strict";

class Series {
  constructor(number) {
    this.number = number;
  }

  slices(length) {
    if (length > this.number.length) throw new Error();
    let seriesSlices = [];
    let numericNumber = this.toNumber();
    for (let index = 0; index <= (this.number.length - length); index++) {
      let slicedNumber = this.toSlice(numericNumber, index, length);
      seriesSlices.push(slicedNumber);
    }
    return seriesSlices;
  }

  toSlice(numberToSlice, startingIndex, length) {
    return numberToSlice.slice(startingIndex, (length + startingIndex));
  }

  toNumber() {
    return this.number.split("").map(number => Number(number));
  }

}

module.exports = Series;