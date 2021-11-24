// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "samosa")); //3
console.log(linearSearch(["travel", "mango", "backpack", "samosa"], "jalebi")); //-1
