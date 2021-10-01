/* Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has
 it's corresponding value squared in the second array. 
 The frequency of values must be the same. */

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let frequencyCounter1 = {}; //first object for first array

  let frequencyCounter2 = {}; //sec object for sec array

  for (let val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]));
