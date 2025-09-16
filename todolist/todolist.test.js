const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('todolist is an array', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('first element is todo1', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('calling last returns the last todo item', () => {
    expect(list.last()).toEqual(todo3);
  });

  test('shifting element returns first todo item', () => {
    let todo = list.shift();
    expect(todo).toEqual(todo1);
    expect(list.toArray()).toEqual([todo2, todo3]);
  });

  test('popping element returns last todo item', () => {
    let todo = list.pop();
    expect(todo).toEqual(todo3);
    expect(list.toArray()).toEqual([todo1, todo2]);
  });

  test("isDone returns false if not all todos done", () => {
    expect(list.isDone()).not.toBeTruthy();
  });

  test("add throws a TypeError when you add an item that is not a Todo", () => {
    expect(() => list.add("")).toThrow(TypeError);
    expect(() => list.add(0)).toThrow(TypeError);
    expect(() => list.add(new TodoList())).toThrow(TypeError);
  });

  test("itemAt should throw a ReferenceError when specifying index with no argument", () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(list.itemAt(1)).toEqual(todo2);
    expect(() => list.itemAt((list.todos.length)).toThrow(ReferenceError));
  });

  test("markDoneAt should mark item done", () => {
    list.todos.forEach((_, index) => list.markDoneAt(index));
    expect(list.todos[0].done.toBeTrue);
    expect(list.todos[1].done.toBeTrue);
    expect(() => list.markDoneAt(list.todos.length)).toThrow(ReferenceError);
  });

  test("MarkUndoneAt should mark todo at given index undone", () => {
    expect(() => list.markUndoneAt(6).toThrow(ReferenceError));
    todo1.markDone();
    todo2.markDone();
    todo3.markDone();

    list.markUndoneAt(1);

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(false);
    expect(todo3.isDone()).toBe(true);
  });

  test("markAllDone marks every todo done", () => {
    list.markAllDone();

    expect(todo1.isDone()).toBe(true);
    expect(todo2.isDone()).toBe(true);
    expect(todo3.isDone()).toBe(true);
    expect(list.isDone()).toBe(true);
  })

  test("removeAt removes todo at given index", () => {
    expect(() => list.removeAt(6)).toThrow(ReferenceError);
    expect(list.removeAt(1)).toEqual([todo2]);
    expect(list.toArray()).toEqual([todo1, todo3]);
  });

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  });

  test('ToString returns string representation for done todo', () => {
    list.markDoneAt(1);
    let string = `---- Today's Todos ----
[ ] Buy milk
[X] Clean room
[ ] Go to the gym`;

    expect(list.toString()).toBe(string);
  })

  test('ToString returns string representation for completed list', () => {
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

    expect(list.toString()).toBe(string);
  })

  test("forEach iterates over all elements", () => {
    let result = []
    list.forEach(element => {
      result.push(element); 
    })

    expect(result).toEqual(list.todos);
  })

  test("filter returns new todo list", () => {
    list.markDoneAt(1)
    let filteredList = list.filter(element => {element.isDone()});

    expect(filteredList).not.toBe(list.todos);
  })

  test("findByTitle finds element by title", () => {
    expect(list.findByTitle('Buy milk')).toEqual(todo1);
  })

  test("allDone returns list of all done elements", () => {
    list.markDoneAt(1);
    list.markDoneAt(0);
    let newList = list.allDone();

    expect(newList.todos).toEqual([todo1, todo2]);
  })

  test("allNotDone returns list of all not done elements", () => {
    list.markDoneAt(1);
    list.markDoneAt(0);
    let newList = list.allNotDone();

    expect(newList.todos).toEqual([todo3]);
  })

  test("markDone marks done using title", () => {
    list.markDone("Buy milk");

    let newList = list.allDone();

    expect(newList.todos).toEqual[todo1];
  })
});

