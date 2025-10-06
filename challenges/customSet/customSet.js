/*
Create a custom set

Set will be all numbers
*/

"use strict";

class CustomSet {
  constructor(data = []) {
    this.data = data.reduce((acc, n) => {
      if (!acc.includes(n)) acc.push(n);
      return acc;
    }, []);
  }

  isEmpty() {
    return this.data.length === 0;
  }

  contains(datum) {
    return this.data.includes(datum);
  }

  isSubset(otherSet) {
    if (this.isEmpty()) return true;
    for (let value of this.data) {
      if (!otherSet.contains(value)) return false;
    }
    return true;
  }

  isDisjoint(otherSet) {
    if (this.isEmpty() || otherSet.isEmpty()) return true;
    if (this.data.some(element => {
      return otherSet.contains(element);
    })) return false;
    return true;
  }

  isSame(otherSet) {
    if (this.data.length !== otherSet.data.length) return false;
    return this.isSubset(otherSet);
  }

  add(datum) {
    if (!this.contains(datum)) this.data.push(datum);
    return this;
  }

  intersection(otherSet) {
    let newCustomSet = [];
    if (this.isEmpty() || otherSet.isEmpty()) return new CustomSet();
    for (let value of this.data) {
      if (otherSet.contains(value)) {
        newCustomSet.push(value);
      }
    }
    return new CustomSet(newCustomSet);
  }

  difference(otherSet) {
    let result = [];
    if (this.isEmpty()) return new CustomSet(result);
    for (let value of this.data) {
      if (!otherSet.contains(value)) result.push(value);
    }
    return new CustomSet(result);
  }

  union(otherSet) {
    let result = [];
    for (let value of otherSet.data) {
      result.push(value);
    }
    for (let value of this.data) {
      result.push(value);
    }
    return new CustomSet(result);
  }
}

module.exports = CustomSet;
