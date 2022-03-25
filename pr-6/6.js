document.querySelector("#products").addEventListener("click", (e) => {
  console.log(e);

  if (e.target.tagName === "LI") {
    window.location.href += "#" + e.target.id;
  }
});

let count = 0;
const fetchData = () => {
  console.log("Fetching the data...", count++);
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

const mainFunc = debounce(fetchData, 300);
