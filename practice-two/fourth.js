function maxChar(str) {
  let characterCountobject = {};
  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    characterCountobject[char] = characterCountobject[char] + 1 || 1;

    if (characterCountobject[char] > maxCount) {
      maxChar = char;
      maxCount = characterCountobject[char];
    }
  }
  return maxChar;
}

console.log(maxChar("IIIIIIIIIII hateeee Dssss")); //I
