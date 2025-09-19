//Create a diamond using a given letter.

//First row is A, last Row is A
// All rows, except for first and last contain 2 identical letters
// Diamond is symmetrical
//
class Diamond {

  static ALPHABET = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
  static makeDiamond(letter) {
    if (letter === "A") return Diamond.returnA();
    let letterCount = Diamond.letterCount(letter);
    let diamond = "";
    let spaces = letterCount / 2;
    for (let lineCount = 1; lineCount <= letterCount; lineCount++) {
      if (spaces - lineCount < 0) {
        spaces = 0;
      } else {
        spaces -= lineCount;
      }
      diamond += (" ".repeat(spaces) + Diamond.ALPHABET[lineCount - 1] + " ".repeat(spaces) + Diamond.ALPHABET[lineCount - 1] + "\n");
    }
    console.log(diamond);
    return diamond;
  }

  static returnA() {
    return "A\n";
  }

  static letterCount(letter) {
    return Diamond.ALPHABET.indexOf(letter) + 1;
  }

}

Diamond.makeDiamond("B");
module.exports = Diamond;