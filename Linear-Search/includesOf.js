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

//short
function includes(arr2, val2) {
  return arr2.includes(val2);
}

console.log(includes([1, 5, 3, 8, 20], 5)); //t
