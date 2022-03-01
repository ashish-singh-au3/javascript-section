// function x() {
//   let a = 2;

//   function y() {
//     setTimeout(() => {
//       console.log(a);
//     }, 2000);
//   }
//   let b = "Hello";
//   console.log(b);
//   y();
// }
// console.log(x());

// function main() {
//   let count = 0;

//   function counter() {
//     count++;
//     console.log(count);
//   }

//   setInterval(counter, 2000);
// }

// let newFin = main();
// console.log(newFin);

function sum(a) {
  return function (b) {
    return a + b; // takes "a" from the outer lexical environment
  };
}

console.log(sum(2)(1));
