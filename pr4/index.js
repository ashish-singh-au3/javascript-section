let count = 0;

const getData = () => {
  console.log("Fetching API...", count++);
};

let debounce = (fn, delay) => {
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

const mainFunction = debounce(getData, 300);
