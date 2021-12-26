{
  /*
    function reverseAString(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }
  return res;
}

console.log(reverseAString("abcDe"));
 */
}

//one liner

function reverseAString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseAString("abcDe"));
