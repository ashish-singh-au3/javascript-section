let count = 0;

const getData = () => {
  console.log("fetching data ...", count++);
};

let debounce = function (fn, delay) {
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

let mainFunc = debounce(getData, 400);
