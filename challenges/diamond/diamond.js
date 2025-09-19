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
    let alphabetArray = Diamond.ALPHABET.slice(0, letterCode);
    let diamondLineArray = [];
    let totalWidth = (2 * (letterCode - 1)) + 1;
    diamondLineArray.push(...(this.forwardIteration(alphabetArray,
      this.returnLetter, totalWidth)));
    diamondLineArray.push(...(this.backwardsIteration(alphabetArray,
      this.returnLetter, totalWidth)));
    console.log(diamondLineArray);
    return diamondLineArray.join("");
  }

  static returnA() {
    return "A\n";
  }

  static returnAWithSpaces(spaces) {
    return " ".repeat(spaces) + "A" + " ".repeat(spaces) + "\n";
  }

  static returnLetter(letter, totalWidth) {
    let letterCode = Diamond.ALPHABET.indexOf(letter.toUpperCase()) + 1;
    let totalInnerSpaces = Math.floor((2 * (letterCode - 2)) + 1);
    let totalOuterSpaces = Math.ceil(((totalWidth -
      (totalInnerSpaces + 2))) / 2);

    if (letter === "A") return Diamond.returnAWithSpaces((Math.floor((totalWidth / 2))));
    return " ".repeat(totalOuterSpaces) + letter + " ".repeat(totalInnerSpaces) + letter + " ".repeat(totalOuterSpaces) + "\n";
  }

  static forwardIteration(array, callback, argument) {
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
      resultArray.push(callback(array[index], argument));
    }
    return resultArray;
  }

  static backwardsIteration(array, callback, argument) {
    let resultArray = [];
    for (let index = array.length - 2;
      index >= 0; index--) {
      resultArray.push(callback(array[index], argument));
    }
    return resultArray;
  }
}

module.exports = Diamond;