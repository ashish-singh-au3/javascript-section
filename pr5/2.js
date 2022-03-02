// function closure() {
//   let count = 0;

//   function counter() {
//     for (let i = 0; i < 10; i++) {
//       setTimeout(() => {
//         count++;

//         console.log(count);
//       }, i * 1000);
//     }
//   }
//   counter();
// }
// closure();

function add() {
  const a = 3;
  const b = 4;

  function sum() {
    console.log(a + b);
  }
  sum();
}

console.log(add());
