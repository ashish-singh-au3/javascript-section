function one(callback_two) {
  callback_two();

  console.log("function one");
}

function two() {
  console.log("function two");
}

console.log(one(two));

function square(num) {
  console.log(num * num);
}

function mainFunction(callback) {
  const num = 5;
  callback(num);
}

console.log(mainFunction(square));
