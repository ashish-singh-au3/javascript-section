// const course = {
//   name: "Introduction to JavaScript",
//   isPaid: true,
//   cost: {
//     amount: 999,
//     currency: "INR",
//   },
// };

// const flattenObj = (obj) => {
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

// console.log(flattenObj(course));

// function infiniteCurrying(a) {
//   return function (b) {
//     if (b) return infiniteCurrying(a + b);
//     return a;
//   };
// }

// console.log(infiniteCurrying(1)(2)(3)(4)());

const promise1 = Promise.resolve(3);
const promise2 = 30;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});

const nums = [1, 0, 0, 1, 1, 1, 1, 0, 1];

const res = nums.filter((num) => {
  return num === 1;
});

console.log(res.length);

function mul(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(mul(1)(2)(3));

function mul2(a) {
  return function (b) {
    if (b) return mul2(a * b);
    return a;
  };
}
console.log(mul2(1)(2)(3)(4)());

// function add(a) {
//   return function (b) {
//     if (b) return add(a + b);
//     return a;
//   };
// }

// console.log(add(1)(2)(3)(4)());
