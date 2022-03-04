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

let statements = {
  first: "qwerty",
  sec: "asdfgh",
};

let randomm = {
  year: 1990,
  sen: "learn & earn",
};
randomm.__proto__ = statements;

console.log(randomm.year + " " + randomm.first);

//Higher order func

function doTask() {
  return function () {
    console.log("I am hof");
  };
}

const hof = doTask();
hof();
