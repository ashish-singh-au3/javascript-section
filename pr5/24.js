let nums = [1, 2, 2, 2, 3, 3, 4, 4, 5, 6];

let res = nums.filter((num, index) => {
  return nums.indexOf(num) === index;
});

console.log(res);

// let useOfForEach = nums.forEach((num) => {
//   console.log(num);
// });

// console.log(useOfForEach);

let useOfFind = nums.find((num) => {
  return num > 1 && num <= 5;
});

console.log(useOfFind);
