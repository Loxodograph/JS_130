/*
Problem
  - Write a program that, given a word, computes the scrabble score
  aeioulnrst = 1
  dg = 2
  bcmp = 3
  fhvwy = 4
  k = 5
  jx = 8
  qz = 10

Example
Cabbage totals 14
3 for c
2 A at 1 point each
6 points for b at 3 points each
2 points g
1 points e

Data Structure


Algorithm


Code


*/

class Scrabble {

  static scores = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
  }
  constructor(scrabbleWord) {
    this.scrabbleWord = scrabbleWord;
  }

  static score(word) {
    if (!word) return 0;
    let wordSplit = word.toLowerCase().split("");
    let score = 0;
    for (let idx = 0; idx < wordSplit.length; idx++) {
      for (let key in Scrabble.scores) {
        if (Scrabble.scores[key].includes(wordSplit[idx])) {
          score += Number(key);
        }
      }
    }
    return score;
  }

  score() {
    return Scrabble.score(this.scrabbleWord);
  }
}

module.exports = Scrabble;