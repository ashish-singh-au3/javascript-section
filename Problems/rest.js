function myFun(a, b, ...args) {
  console.log("a will print", a);
  console.log("b will print", b);
  console.log("args will take all the values as array and will print", args);
}

console.log(myFun("one", "two", "three", "four", "five"));
