function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("heLlo"));

function reverseStringTwo(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
}

console.log(reverseStringTwo("abcdeF"));
