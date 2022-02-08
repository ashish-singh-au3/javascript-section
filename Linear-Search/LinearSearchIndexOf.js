function linearSearchIndexOfValue(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(
  linearSearchIndexOfValue(["travel", "mango", "backpack", "samosa"], "samosa")
); //3
console.log(
  linearSearchIndexOfValue(["travel", "mango", "backpack", "samosa"], "jalebi")
); //-1

function linearSearchIndexOf2(arr, val) {
  return arr.indexOf(val);
}

console.log(linearSearchIndexOf2([5, 2, 10, 11, 55, 6], 6)); //5
console.log(linearSearchIndexOf2([5, 2, 10, 11, 55, 6], 20)); //-1
