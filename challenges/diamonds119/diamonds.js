/*
Create a function that displays a four pointed diamond in an n x n grid.
N is an odd integer supplied
as argument to the function. Argument will always be odd.

create function diamond which accepts an integer n

create a loop which starts at 1 goes until n and increases by 2 each turn
log to the console an * and include any spaces on the left of the rows that
are less than n
*/
"use strict";

function diamond(num) {
  if (num === 1) return console.log("*");
  for (let index = 1; index <= num; index += 2) {
    let spaces = Math.floor((num - index) / 2);
    console.log(" ".repeat(spaces) + "*".repeat(index));
  }
  for (let index = (num - 2); index >= 1; index -= 2) {
    let spaces = (num - index) / 2;
    console.log(" ".repeat(spaces) + "*".repeat(index));
  }
}

// diamond(1);
// diamond(3);
diamond(9);