let count = 0;
const getData = () => {
  console.log("fetching ...", count++);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const mainFunc = doSomeMagic(getData, 300);
// const debounce = function (fn, d) {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       getData.apply(context, arguments);
//     }, d);
//   };
// };

// // Debouncing in Javascript
// let counter = 0;
// const getData = () => {
//   // calls an API and gets Data
//   console.log("Fetching Data ..", counter++);
// }

// const betterFunction = debounce(getData, 300);

// const myDebounce = (callback, delay) => {
//   let timer;
//   return function (...args) {
//     if (timer) {
//       clearInterval(timer);
//     } else {
//       setTimeout(() => {
//         callback(...args);
//       }, d);
//     }
//   };
// };
