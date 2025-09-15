const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // modifies the arr
  console.log(`popped ${value} from the array`); // logs to console
  return value + bar + baz;
}

foo(qux);

