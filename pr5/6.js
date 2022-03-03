// const names = {
//   first: "ash",
//   sec: "singh",
// };

// const statements = {
//   names: "work",
//   age: 23,
//   gender: "male",
// };

// statements.__proto__ = names;

// console.log(statements.names + " ," + statements.first);

// function add(a, b) {
//   console.log(a + b);
// }

// function res(cb) {
//   const a = 3;
//   const b = 5;
//   cb(a, b);
// }
// res(add);

//

// function square() {
//   let num = 5;

//   function two() {
//     console.log(num * num);
//   }
//   two();
// }
// square();

// function Student(name, age, mark) {
//   this.name = name;
//   this.age = age;
//   this.mark = mark;
// }

// const studentOne = new Student("Elon", 50, 98);
// const studentTwo = new Student("Mark", 37, 97);

// console.log(studentOne);

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

// const names = {
//   first: "rish",
//   sec: "chau",
// };

// let printNames = function () {
//   console.log(this.first + " " + this.sec);
// };

// printNames.call(names);

// const names2 = {
//   first: "rish",
//   sec: "sin",
// };

// printNames.apply(names2);

// let usebind = printNames.bind(names2);
// usebind();

// function mul(a, b, c) {
//   return a * b * c;
// }
// console.log(mul(2, 3, 2));

// function cur(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }

// console.log(cur(1)(2)(3));

// console.log("I am a");
// setTimeout(() => {
//   console.log("I am on loop");
// }, 0);

// setTimeout(() => {
//   console.log("I am another loop");
// }, 2000);

// console.log("I am b");

const promise1 = Promise.resolve("3");
const promise2 = 40;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

function test() {
  let count = 0;
  function testTwo() {
    setTimeout(() => {
      for (var i = 0; i < 4; i++) {
        console.log(i);
      }
    }, 2000);
  }
  testTwo();
}
test();
