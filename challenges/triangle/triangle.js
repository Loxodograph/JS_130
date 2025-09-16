/*
Write a program to determine whether a triangle is equilateral
isoceles or scalene

equilateral = all three sides equal

isoceles = exactly two sides equal

scalene - all sides different

all sides must have length >0. Sum of any two sides is greater than length
of third side

we need a triangle class that accepts three side lengths
raise exception if any side is <= 0
raise exception if the side lengths dont describe a valid triangle

a method kind that returns a string representing type of triangle

*/

class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (this.isInvalid()) {
      throw new Error("Invalid triangle lengths");
    }
  }

  kind() {
    if (this.isEquilateral()) return "equilateral";
    if (this.isIsosceles()) return "isosceles";
    return "scalene";

  }

  isEquilateral() {
    return ((this.sides[0] === this.sides[1]) &&
      (this.sides[1] === this.sides[2]));
  }

  isIsosceles() {
    return (!this.isEquilateral() &&
      ((this.sides[0] === this.sides[1]) ||
        (this.sides[1] === this.sides[2]) ||
        (this.sides[0] === this.sides[2])));
  }

  isInvalid() {
    let [side1, side2, side3] = this.sides;

    return (side1 <= 0 || side2 <= 0 || side3 <= 0) ||
      ((side1 + side2) <= side3 ||
        (side1 + side3) <= side2 ||
        (side2 + side3) <= side1);
  }
}

module.exports = Triangle;