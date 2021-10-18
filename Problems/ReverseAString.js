function reverseAstring(str) {
  const array = str.split(""); // splitting the string
  array.reverse(); //reversing the above result
  const result = array.join(""); //creating a new variable to hold the prev val
  return result;
}

console.log(reverseAstring("abcd"));
console.log(reverseAstring("Hello"));

//ANother way

function anotherWayOfReversingAstring(str) {
  return str.split("").reverse().join("");
}

console.log(anotherWayOfReversingAstring("qwerty"));

//Without using reverse() sol

function reverseAstringWithoutUsingReverse(str) {
  let result = ""; //empty arr

  for (let i = 0; i < str.length; i++) {
    const char = str[i]; //assigning char variable with first val
    result = char + result;
  }
  return result;
}

console.log(reverseAstringWithoutUsingReverse("asdfg"));
