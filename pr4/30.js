const array = [1, 2, 3, 4, 5];

const newArr = array.filter((arr) => {
  return arr < 3;
});

console.log(newArr);

const arrayTwo = [1, 2, 3, 4, 5];

const newArrayTwo = arrayTwo.map((arrTwo) => {
  return arrTwo * 2;
});

console.log(arrayTwo);
console.log(newArrayTwo);
