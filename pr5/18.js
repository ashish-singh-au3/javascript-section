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
