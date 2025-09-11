/* Create a function named makeCounterLogger that takes a number
   as an argument and returns a function. When we invoke the
   returned function with a second number, it should count up and down
   from the first number to the second number, logging each number to the
   console
*/

//let countlog = makeCounterLogger(5);
//countlog(8);
// 5
// 6
// 7
// 8

// countlog(2);
// 5
// 4
// 3
// 2

// function makeCounterLogger(start) {
//   return function(finish) {
//     let number = start;
//     if (start > finish) {
//       while (number >= finish) {
//         console.log(number);
//         number -= 1;
//       }
//     } else if (finish > start) {
//       while (number <= finish) {
//         console.log(number);
//         number += 1;
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

/*

Write a makeList function that creates and returns a new function
that implements a todo list. The returned function
should:
  when called with an argument not present in list -
    add to list
  when called with argument present in list -
    remove from list
  when called without arguments
    print all items on list

*/

// function makeList() {
//   let list = [];
//   return function(args) {
//     if (args === undefined) {
//       if (list.length === 0) {
//         console.log("The list is empty");
//       } else {
//         console.log(list.join('\n'));
//       }
//     } else if (list.indexOf(args) > -1) {
// console.log(`${args} removed!`);
// list.splice(list.indexOf(args), 1);
//     } else if (list.indexOf(args) === -1) {
//       console.log(`${args} added`);
//       list.push(args);
//     }
//   };
// }

// let list = makeList();
// list();

// list('make breakfast');
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
//     remove(item) {
//       console.log(`${item} removed!`);
//       if (list.indexOf(item) > -1) {
//         list.splice(list.indexOf(item), 1);
//       }
//     },
//     list() {
//       console.log(list.join('\n'));
//     }
//   };
// }

function makeList() {
  return {
    items: [],
    add: function (item) {
      let index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(item + " added!");
      }
    },
    list: function () {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach(function (item) {
          console.log(item);
        });
      }
    },
    remove: function (item) {
      let index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}

let list = makeList();
list.add("peas");
list.list();
list.add("corn");
list.list();
list.remove("peas");
list.list();

