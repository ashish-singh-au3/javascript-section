// function cur(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }
// console.log(cur(1)(2)(3));

// function infCur(a) {
//   return function (b) {
//     if (b) return infCur(a * b);
//     return a;
//   };
// }

// console.log(infCur(1)(2)(3)(4)());

// let nums = [1, 2, 3, 3, 3, 2, 2, 4, 45, 5, 6];

// let res = nums.filter((num, idx) => {
//   return nums.indexOf(num) === idx;
// });

// console.log(res);

// const promise1 = Promise.resolve("3");
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "foo");
// });

// Promise.all([promise1, promise2, promise3]).then((value) => {
//   console.log(value);
// });

// let nums = [1, 2, 3, 4];

// nums = [...nums, 5, 6, 7];

// console.log(nums);

// let nums = [1, 2, 3, 4];

// let nums2 = [5, 6, 7];

// let res = [...nums, ...nums2];

// console.log(res);

// function mul(a, b) {
//   console.log(a * b);
// }

// function callBack(cb) {
//   const a = 5;
//   const b = 3;
//   cb(a, b);
// }
// callBack(mul);

// let count = 10;

// function timer(i) {
//   for (var i = 0; i < count; i++) {
//     setTimeout(() => {
//       console.log(count);
//       count--;
//     }, i * 1000);
//   }
// }
// timer();

// function one() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// one();

// function two() {
//   function log() {
//     for (var i = 0; i < 5; i++) {
//       console.log(i);
//     }
//   }
//   setTimeout(log, 1000);
// }
// two();

const course = {
  name: "Introduction to JavaScript",
  isPaid: true,
  cost: {
    amount: 999,
    currency: "INR",
    further: {
      new: 100,
      ran: "RUP",
    },
  },
};

const letsFlatten = (obj) => {
  let res = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      for (const [internalkey, internalvalue] of Object.entries(value)) {
        res[key + "." + internalkey] = internalvalue;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(letsFlatten(course));
