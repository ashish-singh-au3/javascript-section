// function add(a, b) {
//   console.log(a + b);
// }

// function neww(cb) {
//   const a = 2;
//   const b = 5;
//   cb(a, b);
// }

// neww(add);

// let names = {
//   first: "qwerty",
//   sec: "asdfgh",
// };

// let namesTwo = {
//   first: "Name2",
//   sec: "End",
// };

// let printNames = function (random, more) {
//   console.log(
//     "THis is to console result as " +
//       this.first +
//       "  " +
//       this.sec +
//       " " +
//       random +
//       " " +
//       more
//   );
// };

// printNames.call(names, "I am random", "I am more");

// printNames.apply(namesTwo, ["I am random2", "I am more 2"]);

// let useBind = printNames.bind(names);
// useBind();

//Prototypal inheritance

// let statements = {
//   first: "qwerty",
//   sec: "asdfgh",
// };

// let randomm = {
//   year: 1990,
//   sen: "learn & earn",
// };
// randomm.__proto__ = statements;

// console.log(randomm.year + " " + randomm.first);

// //Higher order func

// function doTask() {
//   return function () {
//     console.log("I am hof");
//   };
// }

// const hof = doTask();
// hof();

//currying

function mul(a, b, c) {
  return a * b * c;
}
console.log(mul(2, 3, 4));

function mulUsingCurrying(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(mulUsingCurrying(1)(2)(3));

//spread ope

function add(n1, n2, n3) {
  console.log(n1 + n2 + n3);
}

const nums = [1, 2, 3, 4, 5, 6, 7];

const result = add(...nums);
console.log(result);

let num2 = [1, 2, 3, 4];

num2 = [...num2, 5, 6, 7, 8];

//merging using spr

let num3 = [1, 2, 3, 5, 9];
let num4 = [4, 6];

let merged = [...num3, ...num4];
console.log(merged);

console.log(num2);

//rest

const obj = {
  firstName: "Elon",
  lastName: "Musk",
  country: "US",
  companies: ["Paypal", "Tesla", "SpaceX"],
};
const { firstName, lastName, ...rest } = obj;
console.log(firstName); // Elon
console.log(lastName); // Musk
console.log(rest);
