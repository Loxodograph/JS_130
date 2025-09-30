"use strict";

class Staggered {
  constructor(sentence) {
    this.sentence = sentence;
  }

  stagger() {
    let toggle = true;

    return this.sentence.split("")
      .map((letter) => {
        if (letter.match(/[a-z]/i)) {
          if (toggle) {
            toggle = false;
            return letter.toUpperCase();
          } else {
            toggle = true;
            return letter.toLowerCase();
          }
        }
        return letter;
      }
      ).join("");
  }
}

module.exports = Staggered;