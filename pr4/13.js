//Synchronous vs Asynchronous

//Sync => everything will execute from top to bottom if third console fails then the whole chain will fail
console.log("I ");

console.log("eat");

console.log("icecream");

console.log("with spoon");

//Async => async doesn't car about the order it will execute as per the instructions

console.log("I ");

console.log(" don't eat");

setTimeout(() => {
  console.log("food");
}, 4000);
console.log("without spoon");
