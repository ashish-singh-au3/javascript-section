function x() {
  let a = 2;

  function y() {
    setTimeout(() => {
      console.log(a);
    }, 2000);
  }
  let b = "Hello";
  console.log(b);
  y();
}
console.log(x());
