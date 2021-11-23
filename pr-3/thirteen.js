function reverseString(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
}

function reverseStringTwo(str) {
  return str.split("").reverse().join("");
}

console.log(reverseStringTwo("qwerty"));
console.log(reverseString("hello"));
