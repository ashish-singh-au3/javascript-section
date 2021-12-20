const nums = [1, 2, 3];
const doubleNums = []; //we have to fill this with value 2,4,6

//standard way

for (let i = 0; i < nums.length; i++) {
  doubleNums.push(nums[i] * 2);
}

console.log("doubleNums", doubleNums); // (3)[2,4,6]
