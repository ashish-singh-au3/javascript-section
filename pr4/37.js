var a = 2; //globally declared and accessible

function add() {
  let b = 3;
  console.log(a + b);
  const c = 5;
}

console.log(add());

//console.log(b); //b is not accessible since is declared inside the func and block scoped

//console.log(c); //undefined , not accessible

let count = 1;

function counter() {
  console.log(count); // 1
}
console.log(counter());

//wrapping above code inside another function

function parent() {
  let count = 1;

  function counter() {
    count++;
    console.log(count);
  }
  setInterval(counter, 2000);
}

console.log(parent());

console.log(test(2, 2));

function test(a, b) {
  let sum = a + b;
  console.log(sum);
}
