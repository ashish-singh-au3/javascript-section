function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("heLlo"));

function reverseStringTwo(string) {
  let res = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    res = char + res;
  }
  return res;
}
console.log(reverseStringTwo("heLlo123"));
