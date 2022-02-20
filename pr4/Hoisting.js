function withOutHoisting(a, b) {
  let sum = a + b;
  return sum;
}

console.log(withOutHoisting(2, 3));

console.log(withHoisting());

function withHoisting() {
  console.log("THis is hoisted ");
}

//sub
console.log(sub(3, 2));

function sub(x, y) {
  let diff = x - y;
  return diff;
}
