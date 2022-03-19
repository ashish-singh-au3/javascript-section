function mul(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

console.log(mul(1)(2)(3));

function infCurrying(a) {
  return function (b) {
    if (b) return infCurrying(a * b);
    return a;
  };
}

console.log(infCurrying(1)(2)(3)(4)());

let obj1 = {
  first: "Hey",
  sec: "Hi",
};

let obj2 = {
  one: "I am something",
  two: "I am nothing",
};

obj2.__proto__ = obj1;

console.log(obj2.first + " " + obj2.two);
