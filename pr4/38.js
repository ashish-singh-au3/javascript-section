function wonderful() {
  let count = 0;

  function counter(params) {
    count++;
    console.log(count);
  }
  setInterval(counter, 2000);
}

var neww = wonderful();
console.log(neww);
