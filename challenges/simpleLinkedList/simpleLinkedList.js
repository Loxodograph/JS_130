/*
Simple linked list - each element contains data and a next field pointing to
the next element in the list.
*/

"use strict";

class Element {
  constructor(value, nextElement = null) {
    this.value = value;
    this.nextElement = nextElement;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElement || null;
  }

  isTail() {
    return this.next() === null;
  }
}


class SimpleLinkedList {
  constructor() {
    this.headEl = null;
  }

  size() {
    let count = 0;
    let node = this.headEl;
    while (node) {
      count += 1;
      node = node.next();
    }
    return count;
  }

  isEmpty() {
    return this.headEl === null;
  }

  push(datum) {
    this.headEl = new Element(datum, this.headEl);
  }

  head() {
    return this.headEl;
  }

  peek() {
    const head = this.headEl;
    return head ? this.headEl.datum() : null;
  }

  pop() {
    if (this.headEl === null) return null;
    const head = this.headEl;
    this.headEl = this.headEl.next();
    return head.datum();
  }

  static fromArray(data = []) {
    let list = new SimpleLinkedList();
    let newData = (data || []).slice().reverse();
    newData.forEach(datum => {
      list.push(datum);
    });
    return list;
  }

  toArray() {
    let listArray = [];
    let node = this.headEl;
    while (node) {
      listArray.push(node.datum());
      node = node.next();
    }
    return listArray;
  }

  reverse() {
    let array = this.toArray();
    array = array.reverse();
    return SimpleLinkedList.fromArray(array);
  }
}

module.exports = { SimpleLinkedList, Element };