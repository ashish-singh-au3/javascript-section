function add(x) {
  return function sum(y) {
    console.log(x + y);
  };
}

let result = add(2);
result(3);

let substract = function (x, y) {
  console.log(x - y);
};

let res = substract.bind(this, 3);
res(5);
