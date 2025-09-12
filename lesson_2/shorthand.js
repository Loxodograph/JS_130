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

const foo = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }
