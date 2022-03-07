// function main() {
//   let count = 10;
//   function timer(i) {
//     for (let i = 0; i < 10; i++) {
//       setTimeout(() => {
//         console.log(count);
//         count--;
//       }, i * 1000);
//     }
//   }
//   timer();
// }
// main();

// function add() {
//   let a = 5;
//   let b = 6;

//   function clos() {
//     console.log(a + b);
//   }
//   clos();
// }
// add();

// function add(a, b) {
//   console.log(a + b);
// }

// function cbEx(cb) {
//   const a = 4;
//   const b = 6;
//   cb(a, b);
// }
// cbEx(add);

// const something = {
//   one: "what's up",
//   two: "nothing much",
// };

// const somethingTwo = {
//   three: "fed up",
//   four: "it's hard",
//   five: " actually",
// };

// something.__proto__ = somethingTwo;

// console.log(something.three + " " + something.one + " " + something.four);

// const stockForPrepChai = {
//   addOns: ["sugar", "tea leaves", "masala powder", "cardamom"],
//   liquid: ["water", "milk"],
//   holder: ["kulhad", "cup", "cutting"],
// };

// let isChaiShopOpen = true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isChaiShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Promise rej"));
//     }
//   });
// };

// console.log(
//   order(2000, () => console.log(`Order receive start prod`))
//     .then(() => {
//       return order(1000, () =>
//         console.log(
//           `${stockForPrepChai.addOns[0]},${stockForPrepChai.addOns[1]},${stockForPrepChai.addOns[2]} was added `
//         )
//       );
//     })
//     .then(() => {
//       return order(2000, () =>
//         console.log(`${stockForPrepChai.liquid} was added too`)
//       );
//     })
//     .then(() => {
//       return order(3000, () => console.log("Let the chai to get boil"));
//     })
//     .then(() => {
//       return order(2000, () => console.log("Chai is ready to be served"));
//     })
//     .catch(() => {
//       console.log("error found");
//     })
// );

// const stock = {
//   addOns: ["sugar", "tea leaves", "masala powder", "cardamom"],
//   liquid: ["water", "milk"],
//   holder: ["kulhad", "cup", "cutting"],
// };

// let shopOpen = true;

// function preparation(time) {
//   return new Promise((resolve, reject) => {
//     if (shopOpen) {
//       setTimeout(resolve, time);
//     } else {
//       reject(console.log("Promise rejected"));
//     }
//   });
// }

// async function execution() {
//   try {
//     await preparation(2000);
//     console.log("Order rec, start prep chai");

//     await preparation(2000);
//     console.log(`${stock.addOns} was added in the container`);

//     await preparation(1000);
//     console.log(`${stock.liquid} was added too`);

//     await preparation(3000);
//     console.log("Let the chai to get boiled");

//     await preparation(2000);
//     console.log("Chai is ready to be served");
//   } catch {
//     console.log("error");
//   } finally {
//     console.log("Its closing time now");
//   }
// }
// execution();

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((value) => {
//   console.log(value);
// });

// function ex() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function ex() {
//   function log(i) {
//     for (var i = 0; i < 3; i++) {
//       console.log(i);
//     }
//   }
//   setTimeout(log, i * 1000);
// }
// ex();

// function main() {
//   let count = 10;
//   function timer(i) {
//     for (let i = 0; i < 10; i++) {
//       setTimeout(() => {
//         console.log(count);
//         count--;
//       }, i * 1000);
//     }
//   }
//   timer();
// }
// main();

// function ex() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// function ex() {
//   let count = 0;
//   function log() {
//     for (let i = 0; i < 3; i++) {
//       console.log(count);
//       count++;
//     }
//   }
//   setTimeout(log, 2000);
// }
// ex();

// function doTask() {
//   function something() {
//     console.log("I will do something");
//   }
//   something();
// }

// let x = doTask();
// console.log(x);

// const course = {
//   name: "Introduction to JavaScript",
//   isPaid: true,
//   cost: {
//     amount: 999,
//     currency: "INR",
//   },
// };

// const { name, isPaid, cost } = course;

// console.log(name);
// console.log(isPaid);

// console.log(cost);

// function add(n1, n2, n3) {
//   console.log(n1 + n2 + n3);
// }

// const nums = [1, 2, 3, 4, 5, 6];

// const res = add(...nums);
// console.log(res);

// let nums = [1, 2, 3, 4, 5, 6];

// nums = [a, b, ...rest];

// console.log(a), console.log(b);
// console.log(...rest);

// const array = [1, 2, 3, 4, 5];

// const useOfMap = array
//   .map((arr) => {
//     return arr * 2;
//   })
//   .filter((arr) => {
//     return arr % 2 === 0 && arr < 6;
//   });

// console.log(useOfMap);

// array.forEach((arr) => {
//   console.log(arr);
// });

// const course = {
//   name: "Introduction to JavaScript",
//   isPaid: true,
//   cost: {
//     amount: 999,
//     currency: "INR",
//   },
// };

// let flatten = (object) => {
//   let res = {};
//   for (const [key, value] of Object.entries(object)) {
//     if (typeof value === "object") {
//       for (const [internalKey, internalValue] of Object.entries(value)) {
//         res[key + " . " + internalKey] = internalValue;
//       }
//     } else {
//       res[key] = value;
//     }
//   }
//   return res;
// };

// console.log(flatten(course));

// let arr = [
//   [1, 2],
//   [3, 4, [5, 6], 7],
//   [8, 9],
// ];

// // let res = [].concat(...arr);
// // console.log(res);

// console.log(arr.flat(2));

// function currying(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }
// console.log(currying(1)(2)(3));

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)());
