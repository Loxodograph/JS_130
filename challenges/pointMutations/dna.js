/*
Write a program that can calculate the Hamming distance between
two DNA strands

PEDAC
Problem
  - Given two strands of DNA
  - count number of differences between them
  - if one is shorter than other, we only need to check for differences between
    length of shorter one

Examples & Test Cases
  - create a DNA class
  - DNA class accepts strand string as argument. No thrown errors
  - Method named hammingDistance accepts second string as argument
    - returns differences between two strands

*/

class DNA {

  constructor(sequence) {
    this.sequence = sequence;
  }

  isValid() {
    return (this.sequence.length === 0);
  }

  hammingDistance(sequence2) {
    let count = 0;
    let iterationSequence = Math.min(this.sequence.length, sequence2.length);
    for (let letterIndex = 0; letterIndex < iterationSequence; letterIndex++) {
      if (sequence2[letterIndex] !== this.sequence[letterIndex]) {
        count++;
      }
    }
    return count;
  }
}

module.exports = DNA;