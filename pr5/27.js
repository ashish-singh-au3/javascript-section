// function timer() {
//   let count = 10;
//   function inner(i) {
//     for (let i = 0; i <= 10; i++) {
//       setTimeout(() => {
//         console.log(count);
//         count--;
//       }, i * 1000);
//     }
//   }
//   inner();
// }

// timer();

function one() {
  setTimeout(() => {
    for (var i = 0; i < 3; i++) {
      console.log(i);
    }
  }, 1000);
}

one();

// function two() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
// two();
