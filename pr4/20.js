//callbacks pr

function cube(num) {
  console.log(num * num * num);
}

function mainFunction(callback) {
  const num = 2;
  callback(num);
}

console.log(mainFunction(cube));

function resultOfAddition(value) {
  console.log("The sum is :", value);
}

function addMain(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
}

console.log(addMain(10, 5, resultOfAddition));

function resultOfCube(finalResult) {
  console.log("The cube of given input is:", finalResult);
}

function cubeTwo(n, cb) {
  let cubeRes = n * n * n;

  cb(cubeRes);
}

console.log(cubeTwo(3, resultOfCube));
