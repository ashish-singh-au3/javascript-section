document.querySelector("#products").addEventListener("click", (e) => {
  console.log(e);

  if (e.target.tagName === "LI") {
    window.location.href += "#" + e.target.id;
  }
});

let count = 0;

const getData = () => {
  console.log("Fetching data....", count++);
};

let mainFunction = (fn, delay) => {
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

let debounce = mainFunction(getData, 300);
