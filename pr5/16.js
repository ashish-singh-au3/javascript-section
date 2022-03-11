// const nums = [1, 1, 1, 2, 2, 3, 4];

// const res = nums.filter((num, index) => {
//   return nums.indexOf(num) === index;
// });

// console.log(res);

// const array = ["banana", "apple", "orange", "banana", "apple"];

// const res2 = array.filter((arr, index) => {
//   return array.indexOf(arr) === index;
// });

// console.log(res2);

// function some() {
//   for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   }
// }
// some();

// function someTwo() {
//   function clo() {
//     for (var i = 0; i < 5; i++) {
//       console.log(i);
//     }
//   }
//   setTimeout(clo, 2000);
// }
// someTwo();

// function infCur(a) {
//   return function (b) {
//     if (b) return infCur(a * b);
//     return a;
//   };
// }

// console.log(infCur(1)(2)(3)(4)());

// function cur(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }

// console.log(cur(1)(2)(3));

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

{
  num = 2;
  console.log(num);
  var num;
}
function main() {
  let count = 10;
  function timer(i) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log(count);
        count--;
      }, i * 1000);
    }
  }
  timer();
}
main();
