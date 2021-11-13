function includesOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

console.log(includesOf(["travel", "mango", "backpack", "samosa"], "samosa")); //true
console.log(includesOf(["travel", "mango", "backpack", "samosa"], "jalebi")); //false
