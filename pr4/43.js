// let count = 0;

// function closureMain() {
//   let count = 0;
//   function counter() {
//     count++;
//     console.log(count);
//   }
//   setInterval(counter, 2000);
// }

// let newMeth = closureMain();
// console.log(newMeth);

function a() {
  let x = 10;

  let y = 5;
  function b() {
    console.log(x + y);
  }
  b();
}
a();

function closure() {
  function ex2() {
    for (var i = 0; i < 3; i++) {
      console.log(i);
    }
  }
  setTimeout(ex2, 2000);
}

closure();
