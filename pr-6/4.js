let num1 = [1, 2, 3, 4];
let num2 = [5, 6, 7];

let res = [...num1, ...num2];
console.log(res);

function add(a, b, c) {
  console.log(a + b + c);
}

console.log(add(...num1));

function currying(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}
console.log(currying(1)(2)(3));

function infCurrying(a) {
  return function (b) {
    if (b) return infCurrying(a + b);
    return a;
  };
}
console.log(infCurrying(1)(2)(3)(4)(5)());
