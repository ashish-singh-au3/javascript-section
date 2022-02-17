const nums = [2, 3, 4, 5, 6, 7];

const newNumbersArrUsingMap = nums
  .map((num) => {
    return num + 2;
  })
  .filter((num) => {
    return num >= 6;
  });

console.log(newNumbersArrUsingMap);

//null vs undefined

let a;

console.log(a); //undefined

let b = null;

console.log(b); //null

//console.log(c); not defined
