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

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let title = `-----${this.title}-----`;
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`;
  }

  forEach(callback) {
    for (let index = 0; index < this.todos.length; index++) {
      callback(this.todos[index]);
    }
  }

  filter(callback) {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo);
      }
    });
    return newList;
  }

  findByTitle(title) {
    return this.filter(item => {
      return title === item.getTitle();
    }).first();
  }

  allDone() {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (todo.isDone()) {
        newList.add(todo);
      }
    });
    return newList;
  }

  allNotDone() {
    let newList = new TodoList(this.title);
    this.forEach(todo => {
      if (!todo.isDone()) {
        newList.add(todo);
      }
    });
    return newList;
  }

  markDone(title) {
    this.forEach(todo => {
      if (todo.getTitle() === title) {
        todo.markDone();
      }
    });
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let todo7 = new Todo("Go to the gym");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
list.add(todo7);
todo1.markDone();
todo5.markDone();
// let doneTodos = list.filter(todo => todo.isDone()).first();
// console.log(doneTodos);

// console.log(list.findByTitle("Buy milk"));
// console.log(list.findByTitle("Milk buyer"));
// console.log(list.findByTitle("Go to the gym"));

// console.log(list.allDone());
// console.log(list.allNotDone());

list.markAllDone();
list.markAllUndone();
console.log(list.toArray());