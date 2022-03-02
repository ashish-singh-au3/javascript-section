let count = 0;

const getData = () => {
  console.log("fetching ...", count++);
};

let debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;

    clearInterval(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const mainFunc = debounce(getData, 300);
