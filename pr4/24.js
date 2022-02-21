function normal(a, b) {
  let sum = a + b;
  return sum;
}

console.log(normal(2, 3));

console.log(hoistedFunction(2));

function hoistedFunction(n) {
  return n * n * n;
}

//undefined

let x;

console.log(x); //unde

let y = null;

console.log(y); //null

//console.log(z); //not defined
