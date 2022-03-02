const callBack = () => {
  let a = 3;
  let b = 3;
  console.log("This will print after 2 sec that is", a + b);
};

setTimeout(callBack, 2000);

const array = [1, 2, 3, 4, 5, 6, 7, 8];

let result = array
  .map((arr) => {
    return arr * 2;
  })
  .filter((arr) => {
    return arr < 10 && arr % 2 == 0;
  });

console.log(result);
