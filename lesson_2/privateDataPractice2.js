/*
Create function makeCounterLogger that takes a number
argument and returns a function.
We invoke the returned function with a second number and count
up or down from the first number to the second number.
*/

// function makeCounterLogger(num) {
//   return function (num2) {
//     let num1 = num;
//     if (num1 >= num2) {
//       while (num1 >= num2) {
//         console.log(num1);
//         num1--;
//       }
//     } else {
//       while (num2 >= num1) {
//         console.log(num1);
//         num1++;
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);


// countlog(2);

/*
Build simple todo list program that uses the techniques.

makeList function that creates and returns new function that
implements a todo list.

when called with argument that is not on the list, add argument to list
when called with argument already on list, remove from list
when called without arguments, print all items on list
  if list is empty print appropriate message
*/

// function makeList() {
//   let list = [];

//   return function (listItem) {
//     if (listItem) {
//       if (list.includes(listItem)) {
//         list.splice(list.indexOf(listItem), 1);
//         console.log(`${listItem} removed!`);
//       } else {
//         list.push(listItem);
//         console.log(`${listItem} added!`);
//       }
//     } else {
//       if (list.length === 0) {
//         console.log("The list is empty");
//       } else {
//         list.forEach(item => console.log(item));
//       }
//     }

//   };
// }
// let list = makeList();
// list();

// list("make breakfast");
// list("read book");
// list();
// list("make breakfast");
// list();

// function makeList() {
//   let list = [];
//   return {
//     add(item) {
//       list.push(item);
//       console.log(`${item} added!`);
//     },
//     list() {
//       list.forEach(item => console.log(item));
//     },
//     remove(item) {
//       if (list.includes(item)) {
//         list.splice(list.indexOf(item), 1);
//         console.log(`${item} removed!`);
//       }
//     }
//   }
// }

// let list = makeList();
// list.add("peas");
// list.list();
// list.add("corn");
// list.list();
// list.remove("peas");
// list.list();
