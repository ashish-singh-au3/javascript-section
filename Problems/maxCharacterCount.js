function maxCharacterCount(str) {
  let charCountObject = {};
  let maxChar = "";
  let maxCount = 0;

  //filling character count object

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObject[char] = charCountObject[char] + 1 || 1; //if the char is already
    //there then it will add 1 else it will initialise 1

    if (charCountObject[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObject[char];
    }
  }
  return maxChar;
}

console.log(maxCharacterCount("1337"));
console.log(maxCharacterCount("I Hateeeeeee Dssss Algoooooooooo"));
