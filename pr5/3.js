let names = {
  first: "test",
  second: "One",
};

let printName = function (p1, p2) {
  console.log("I am " + this.first + " " + this.second + " " + p1 + " " + p2);
};
printName.call(names, "1", "0");

let anotherSet = {
  first: "Test2",
  second: "Two",
};

printName.apply(anotherSet, ["2", "3"]);

let useBind = printName.bind(names, "10", "Using bind");
console.log(useBind());

const nums = [1, 2, 3];
function sum(x, y, z) {
  console.log(x + y + z);
}

console.log(sum(...nums));

console.log(typeof NaN); //

console.log(typeof ""); //
