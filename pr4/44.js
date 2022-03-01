let names = {
  first: "ash",
  second: "singh",
};

let printName = function () {
  console.log("My name is " + this.first + " " + this.second + " .");
};

printName.call(names);

let names2 = {
  first: "rish",
  second: "chauhan",
};

printName.call(names2);

let useBind = printName.bind(names);
console.log(useBind());
