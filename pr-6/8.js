function currying(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
}

console.log(currying(1)(2)(4));

function infCur(a) {
  return function (b) {
    if (b) return infCur(a + b);
    return a;
  };
}

console.log(infCur(1)(2)(3)(4)(5)());
