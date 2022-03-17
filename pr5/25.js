// function infCurr(a) {
//   return function (b) {
//     if (b) return infCurr(a * b);
//     return a;
//   };
// }

// console.log(infCurr(1)(2)(3)(4)());

const obj1 = {
  first: "Ashish",
  sec: "Rishabh",
};

const obj2 = {
  stOne: "says Hello",
  stTwo: "says Hi",
};

obj2.__proto__ = obj1;

console.log(obj2.first + " " + obj2.stOne);
