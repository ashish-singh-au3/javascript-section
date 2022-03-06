function sum(a, b) {
  console.log(a + b);
}

function exampleForCb(cb) {
  const a = 10;
  const b = 20;
  cb(a, b);
}
exampleForCb(sum);

let name = {
  first: "test",
  sec: " test 2",
};

let printMyName = function () {
  console.log(this.first + this.sec);
};
printMyName.call(name);

Function.prototype.myBind = function (...args) {
  let obj = this;
  return function () {
    obj.call(args[0]);
  };
};

let customBind = printMyName.myBind(name);
customBind();
