/*
Write a program that manages robot factory settings
a random name is generated for robots
When you reset robot a new name is generated

names should be random, not follow predictable sequence.

two upercase 3 digits ex - DL930

name method that generates a string in the above sequence
reset method that restores robot to factory settings. Existing name is wiped,
new one generated
*/
"use strict";

let seedrandom = require('seedrandom');

let rng = seedrandom('MySeed');
let rng2 = seedrandom('mySeed2');

class Robot {
  constructor() {
    this.NAME = "";
  }

  static NAMEHISTORY = [];

  name() {
    if (this.NAME.length > 0) return this.NAME;

    let newName = this.generateName();
    if (!this.NAME && !Robot.NAMEHISTORY.includes(newName)) {
      this.NAME = newName;
      Robot.NAMEHISTORY.push(newName);

    } else {
      while (Robot.NAMEHISTORY.includes(newName)) {
        newName = this.generateName();
      }
      this.NAME = newName;
      Robot.NAMEHISTORY.push(newName);
    }
    return this.NAME;
  }

  reset() {
    const index = Robot.NAMEHISTORY.indexOf(this.NAME);
    if (index !== -1) {
      Robot.NAMEHISTORY.splice(index, 1);
    }
    this.NAME = "";
  }

  generateName() {
    let letter1 = this.randomLetter();
    let letter2 = this.randomLetter();
    let number = this.randomNumber();
    return `${letter1}${letter2}${number}`;
  }

  randomLetter() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let randomIndex = Math.floor(rng() * 26);
    return alphabet[randomIndex];
  }

  randomNumber() {
    return Math.floor(rng2() * 899) + 100;
  }
}

module.exports = Robot;