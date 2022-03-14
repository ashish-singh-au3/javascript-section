let count = 0;

const getData = () => {
  console.log("Fetching...", count++);
};

let newFunc = (fn, delay) => {
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

const deBounce = newFunc(getData, 300);
