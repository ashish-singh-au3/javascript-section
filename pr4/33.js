// function random(a, b) {
//   setTimeout(() => {
//     let sum = a + b;
//     console.log(sum);
//   }, 2000);
// }

// console.log(random(2, 3));

function randomTwo() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
}

console.log(randomTwo()); /// 3 3 3
