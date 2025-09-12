// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// function foo() {
//   return {
//     bar: function() {
//       console.log("bar");
//     },
//     qux: function(arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function(arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// function foo([ one, , three ]) {
//   return [
//     three,
//     5,
//     one,
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let [ bar, qux, baz ] = result;

// function foo([arr]) {
//   return [
//     arr[2],
//     5,
//     arr[0],
//   ];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5);

// const {foo, ...rest} = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo);         // 42
// console.log(rest);        // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: 'a', b: 'b' },
// };

// const { first, second, ...rest } = obj;

// const arr = [1, 2, 3];
// const obj = { a: 'a', b: 'b', c: 'c' };

// let [first, second, third] = arr;

// console.log(second);

// let { a, b, c} = obj;

// console.log(b);

// const arr = [1, 2, 3];

// const [first, ...arr2] = arr;

// console.log(first, arr2)

// const arr = [1, 2, 3];

// let [ , second , ] = arr;
// console.log(second);

// const obj = { a: 'a', b: 'b', c: 'c' };

// let { c: tail, ...obj2} = obj;

// console.log(obj2);
// console.log(tail);

// function sum(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }

// // console.log(sum(1, 2));
// // console.log(sum(1, 2, 3));

// let nums = [1, 2, 3, 4];
// console.log(sum(...nums));

// const arr = [1, 2, 3];

// function prod(num1, num2) {
//   return num1 * num2;
// }

// console.log(prod(...arr));

let obj = {
  foo: 'foo',
  qux: 'qux',
  bar: 'bar',
};

let obj2 = {...obj};
let { ...obj3 } = obj;

console.log(obj2);
console.log(obj3);