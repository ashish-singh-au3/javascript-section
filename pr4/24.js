function normal(a, b) {
  let sum = a + b;
  return sum;
}

console.log(normal(2, 3));

console.log(hoistedFunction(2));

function hoistedFunction(n) {
  return n * n * n;
}
