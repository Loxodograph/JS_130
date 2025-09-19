/*
Problem
Write a program that generates the lyrics to 99 bottles of beer
according to verse

Examples, see test suite

Data Structure

Algorithm

create a method that outputs a single verse
create a method that takes up to 2 verse numbers and
outputs the verses until the second number is reached
*/

"use strict";


class BeerSong {
  static BEER_WORDS = {
    0: {
      amount: "one",
      bottle: "bottles"
    },
    1: {
      amount: "it",
      bottle: "bottle",
    },
    2: {
      amount: "one",
      bottle: "bottles"
    }
  }

  static verse(bottlesOfBeer) {
    let access = bottlesOfBeer;
    if (bottlesOfBeer > 2) access = 2;

    let number = bottlesOfBeer;

    let bottle = this.BEER_WORDS[access].bottle;
    let amount = this.BEER_WORDS[access].amount;

    let remaining = (number - 1);
    if (remaining < 0) {
      return this.finalVerse();
    }

    let verse = `${number} ${bottle} of beer on the wall, ${number} ${bottle} of beer.\nTake ${amount} down and pass it around, ${remaining === 0 ? "no more" : remaining} ${remaining === 1 ? "bottle" : "bottles"} of beer on the wall.\n`;
    return verse;
  }

  static finalVerse() {
    let remaining = "no more";
    let number = "No more";
    let bottle = this.BEER_WORDS[0].bottle;
    return `${number} ${bottle} of beer on the wall, ${remaining} ${bottle} of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
  }

  static verses(start, end) {
    let lyrics = [];
    for (let current = start; current >= end; current--) {
      lyrics.push(this.verse(current));
    }
    return lyrics.join("\n");
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}


module.exports = BeerSong;