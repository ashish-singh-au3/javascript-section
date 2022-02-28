let count = 0;
const getData = () => {
  console.log("Fetch data ...", count++);
};

const bodyFunction = function (fn, delay) {
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

const mainFunction = bodyFunction(getData, 300);
