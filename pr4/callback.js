//callbacks are basically calling a function inside another function

function one(callback_two) {
  //giving args
  callback_two();

  console.log("Step 1 ");
}

function two() {
  console.log("Step 2");
}

console.log(one(two)); //callback

function add(call_sub) {
  call_sub();

  console.log(5 + 5);
}

function sub() {
  console.log(5 - 5);
}

console.log(add(sub));

//async callbacks

function greet(name) {
  console.log("Hello", name);
}

setTimeout(greet, 2000, "Ashish");
