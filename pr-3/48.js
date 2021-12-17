function linearSearchIndexOfValue(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
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
