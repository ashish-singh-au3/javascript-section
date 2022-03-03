// const name3 = {
//   first: "ash",
//   sec: "singh",
// };

// const statements = {
//   one: "says what's up?",
//   two: "I am ignoring this",
//   three: "cut the crap",
// };

// statements.__proto__ = name3;

// console.log(statements.first + " " + statements.one);

const promise1 = Promise.resolve("3");
const promise2 = 42;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
