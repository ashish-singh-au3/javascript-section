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
