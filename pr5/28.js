let nums = [1, 1, 1, 2, 3, 3, 4, 4, 4, 4, 5, 5, 6];

let res = nums.filter((num, idx) => {
  return nums.indexOf(num) === idx;
});

console.log(res);
