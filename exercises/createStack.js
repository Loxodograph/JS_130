function newStack() {
  let _stack = [];

  return {

    pop() {
      return _stack.pop();
    },

    push(value) {
      _stack.push(value);
    },

    printStack() {
      _stack.forEach(item => console.log(item));
    }
  };
}

let createdStack = newStack();

createdStack.push('shoe');
createdStack.push('food');
createdStack.printStack();
createdStack.pop();
createdStack.printStack();
