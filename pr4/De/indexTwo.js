let count = 0;
const getData = () => {
  console.log("Fetching data", count++);
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

const beautifulFunction = doSomeMagic(getData, 300);
