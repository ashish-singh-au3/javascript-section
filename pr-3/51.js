function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "samosa")); //3
console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "jalebi")); //-1
