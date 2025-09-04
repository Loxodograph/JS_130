// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;

  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(title) {
    if (title instanceof Todo) {
      this.todos.push(title);
    } else {
      console.log('TypeError: Can only add todo objects');
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) { // _ in name suggests a "private" method
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(item => {
      return item.isDone();
    });
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt() {
    this.todos.
  }
}

let list = new TodoList("Today's Todos");
let emptyList = new TodoList("Empty List");

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);

// console.log(list.itemAt(1));

list.markDoneAt(1);
// console.log(list);

list.markUndoneAt(1);
// console.log(list);

// console.log(list.isDone()); // false

list.markDoneAt(0);
list.markDoneAt(1);
list.markDoneAt(2);
list.markDoneAt(3);
// console.log(list.isDone()); // true

list.markUndoneAt(2);
// console.log(list.isDone()); // false

// Omitted code

console.log(list.shift());
console.log(list.pop());
console.log(list);

console.log(emptyList.shift());
console.log(emptyList.pop());
console.log(emptyList);