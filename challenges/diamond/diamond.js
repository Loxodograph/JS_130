"use strict";

//Create a diamond using a given letter.

//First row is A, last Row is A
// All rows, except for first and last contain 2 identical letters
// Diamond is symmetrical
//
class Diamond {

  static ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  static makeDiamond(letter) {
    if (letter === "A") return this.returnA();

    let letterCode = Diamond.ALPHABET.indexOf(letter.toUpperCase()) + 1;
    let alphabetArray = Diamond.ALPHABET.slice(0, letterCode)
      .concat(Diamond.ALPHABET.slice(0, (letterCode - 1))
        .reverse());

    let totalWidth = (2 * (letterCode - 1)) + 1;

    let diamondLineArray = alphabetArray.map(char => {
      return this.makeRow(char, totalWidth);
    });

    return diamondLineArray.join("");
  }

  static returnA() {
    return "A\n";
  }

  static returnAWithSpaces(spaces) {
    return " ".repeat(spaces) + "A" + " ".repeat(spaces) + "\n";
  }

  static makeRow(letter, totalWidth) {
    let letterCode = Diamond.ALPHABET.indexOf(letter.toUpperCase()) + 1;
    let totalInnerSpaces = Math.floor((2 * (letterCode - 2)) + 1);
    let totalOuterSpaces = Math.ceil(((totalWidth -
      (totalInnerSpaces + 2))) / 2);

    if (letter === "A") return Diamond.returnAWithSpaces((Math.floor((totalWidth / 2))));
    return " ".repeat(totalOuterSpaces) + letter + " ".repeat(totalInnerSpaces) + letter + " ".repeat(totalOuterSpaces) + "\n";
  }
}

module.exports = Diamond;