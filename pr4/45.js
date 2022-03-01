// const timer = () => {
//   setInterval(() => {
//     console.log("I will print after every 2 seconds");
//   }, 2000);
// };
// clearInterval(timer);

// console.log(timer());

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
