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
