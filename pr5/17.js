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
