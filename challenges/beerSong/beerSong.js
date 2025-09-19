"use strict";
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

// class BeerSong {

//   static BEER = ["bottle", "bottles"];
//   static AMOUNT = ["it", "one"];

//   static verse(start, end) {
//     let finalVerse = this.singleVerse(start);
//     for (let currentVerse = start - 1; currentVerse >= end; currentVerse--) {
//       if (currentVerse === 0) {
//         finalVerse += this.finalVerse();
//       } else {
//         finalVerse += this.singleVerse(currentVerse);
//       }
//     }
//     return finalVerse;
//   }

//   static singleVerse(number) {
//     let bottle = this.BEER[0];
//     let amount = this.AMOUNT[0];
//     let remaining = number - 1 || "no more";
//     if (number > 1) amount = this.AMOUNT[1];
//     if (number > 1) bottle = this.BEER[1];
//     if (number - 1 === 1) bottle = this.BEER[0];
//     if (number - 1 === 0) amount = "no more";
//     let verse = `${number} ${bottle} of beer on the wall, ${number} ${bottle} of beer.\nTake ${amount} down and pass it around, ${remaining} ${bottle} of beer on the wall.\n`;
//     return verse;
//   }

//   static finalVerse() {
//     return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
//   }

//   static lyrics() {
//     return BeerSong.verse(99, 0);
//   }
// }

// console.log(BeerSong.verse(2, 0));

// module.exports = BeerSong;