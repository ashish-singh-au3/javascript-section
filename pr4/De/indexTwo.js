let count = 0;
const getData = () => {
  console.log("fetch api ...", count++);
};

const doSomeThing = (fn, delay) => {
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

const mainFunction = doSomeThing(getData, 300);
