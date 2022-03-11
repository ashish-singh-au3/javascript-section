// function infinCur(a) {
//   return function (b) {
//     if (b) return infinCur(a * b);
//     return a;
//   };
// }

// console.log(infinCur(1)(2)(3)(4)());

// function cur(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// }
// console.log(cur(1)(2)(3));

// function sum(a, b) {
//   console.log(a + b);
// }
// function callB(cb) {
//   const a = 2;
//   const b = 3;
//   cb(a, b);
// }
// callB(sum);

// const promise1 = Promise.resolve(3);
// const promise2 = 42;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((value) => {
//   console.log(value);
// });

// const course = {
//   name: "Introduction to JavaScript",
//   isPaid: true,
//   cost: {
//     amount: 999,
//     currency: "INR",
//   },
// };

// const flatten = (obj) => {
//   let res = {};

//   for (const [key, value] of Object.entries(obj)) {
//     if (typeof value === "object") {
//       for (const [internalKey, internalValue] of Object.entries(value)) {
//         res[key + "." + internalKey] = internalValue;
//       }
//     } else {
//       res[key] = value;
//     }
//   }
//   return res;
// };

// console.log(flatten(course));

// function one() {
//   let a = 5;
//   function two() {
//     console.log(a);
//   }
//   two();
// }
// one();

// function outer() {
//   let count = 10;

//   function inner(i) {
//     for (let i = 0; i < count; i++) {
//       setTimeout(() => {
//         console.log(count);
//         count--;
//       }, i * 1000);
//     }
//   }
//   inner();
// }
// console.log(outer());

// function one() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// console.log(one());

// function outer() {
//   function inner() {
//     for (var i = 0; i < 5; i++) {
//       console.log(i);
//     }
//   }
//   setTimeout(inner, 1000);
// }
// outer();

// let obj = {
//   one: "what's up",
//   two: "new",
// };

// let printObj = function (state, city) {
//   console.log(this.one + " " + this.two + " " + state + ", " + city);
// };

// let obj2 = {
//   one: "this is obj2",
//   two: " kaam",
// };

// printObj.call(obj2, "UP", "kanpur");

// printObj.apply(obj, ["Punjab", "Chandigarh"]);

// let useBind = printObj.bind(obj2, "TN", "Chennai");
// useBind();

// // let nums2 = [6, 7, 8, 9, 10];

// // let res = [...nums, ...nums2];

// nums = [...nums, 6, 7, 8, 9];
// console.log(nums);

// let nums = [1, 2, 3, 4, 5, 1, 1, 1, 2, 2, 3, 3];

// const res = nums.filter((num, index) => {
//   return nums.indexOf(num) === index;
// });

// console.log(res);

// nums.forEach((element) => {
//   console.log(element);
// });

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let res = nums.slice(-2);

// console.log(res);

// setTimeout(function () {
//   console.log("workattech");
// }, 2000);
