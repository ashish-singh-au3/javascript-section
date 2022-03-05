// const magic = {
//   one: "pigeon",
//   two: " death car",
// };

// const magicDescription = {
//   three: "disappears",
//   four: " rolls out",
// };

// magicDescription.__proto__ = magic;

// console.log(magicDescription.two + " " + magicDescription.four);

// const course = {
//   name: "Introduction to JavaScript",
//   isPaid: true,
//   cost: {
//     amount: 999,
//     currency: "INR",
//   },
// };

// const obj = {
//   a: {
//     b: 5,
//     d: 3,
//   },
// };

// const letsFlattenThis = (object) => {
//   let result = {};

//   for (const [key, value] of Object.entries(object)) {
//     if (typeof value === "object") {
//       for (const [internalKey, internalValue] of Object.entries(value)) {
//         result[key + " _ " + internalKey] = internalValue;
//       }
//     } else {
//       result[key] = value;
//     }
//   }
//   return result;
// };

// console.log(letsFlattenThis(obj));

// a simple function to add something
// const add = (n) => n + 10;
// add(9);
// // a simple memoized function to add something
// const memoizedAdd = () => {
//   let cache = {};
//   return (n) => {
//     if (n in cache) {
//       console.log("Fetching from cache");
//       return cache[n];
//     } else {
//       console.log("Calculating result");
//       let result = n + 10;
//       cache[n] = result;
//       return result;
//     }
//   };
// };
// // returned function from memoizedAdd
// const newAdd = memoizedAdd();
// console.log(newAdd(9)); // calculated
// console.log(newAdd(9)); // cached

function currying(a) {
  return (b) => {
    return (c) => {
      return (d) => {
        return (e) => {
          return a * b * c * d * e;
        };
      };
    };
  };
}

console.log(currying(1)(2)(3)(2)(4));

// function counter() {
//   let count = 0;

//   function inner(i) {
//     setTimeout(() => {
//       for (let i = 0; i < 5; i++) {
//         console.log(i);
//       }
//     }, 1000);
//   }
//   inner();
// }
// console.log(counter());

// function main() {
//   function inner() {
//     for (var i = 0; i < 3; i++) {
//       console.log(i);
//     }
//   }
//   setTimeout(inner, 2000);
// }
// main();

function counter() {
  let count = 10;

  for (let i = 0; i < 10; i++) {
    function timer(i) {
      setTimeout(() => {
        console.log(count);
        count--;
      }, i * 1000);
    }
    timer(i);
  }
}
counter();

// function newCo() {
//   let count = 10;

//   for (let i = 0; i < 10; i++) {
//     function timer(i) {
//       setTimeout(() => {
//         console.log(count);
//         count--;
//       }, i * 1000);
//     }
//     timer(i);
//   }
// }
// newCo();
