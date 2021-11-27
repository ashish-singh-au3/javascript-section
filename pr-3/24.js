function reverseAString(str) {
  let reveresedString = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    reveresedString = char + reveresedString;
  }
  return reveresedString;
}

console.log(reverseAString("HellO"));
