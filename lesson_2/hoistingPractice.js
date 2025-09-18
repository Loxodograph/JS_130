// var foo = function() {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo();

// This code will display "Bye" because the
// variable declaration is hoisted to the top
// then the code discards the var declaration
// then the code reassigns the function body to
// the console.log("Bye"); statement.
// then the code executes foo();

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

//first var foo = undefined is created
// then var index is created
// we then asign index to 0

// we log undefined.

// then we assign to foo Hello
// index becomes 1

// we log Hello

// we then assign foo to "bye"
// index becomes 2

// we log "bye"
// We log 2

//undefined
// Hello
// bye
// 2

// bar();

// var bar = function() {
//   console.log("foo!");
// };

// Change this code ^^ So it works

// bar();

// function bar() {
//   console.log("foo!");
// };

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function() {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

let Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};



Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);