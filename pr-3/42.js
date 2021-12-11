function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1; //in case value isn't present in arr
}
console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "samosa")); //3
console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "jalebi")); //-1
console.log(linearSearch([10, 40, 5, 8, 9, 12], 5));
