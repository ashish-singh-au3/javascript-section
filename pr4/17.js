function one(num) {
  console.log(num * num);
}

function two(callback) {
  const num = 5;
  callback(num);
}

console.log(two(one));

function result(value) {
  console.log("Call Back Funciton", value);
}

function addNumbers(num1, num2, callBackFunction) {
  let sum = num1 + num2;

  callBackFunction(sum);
}

// Test case
console.log(addNumbers(15, 15, result));
