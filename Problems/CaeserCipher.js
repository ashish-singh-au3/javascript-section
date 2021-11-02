// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caeserCipher(str, shift) {
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    const idx = alphabetArr.indexOf(character);

    if (idx === -1) {
      result += character;
      continue;
    }
    const encodedIndex = (idx + shift) % 26;
    result += alphabetArr[encodedIndex];
  }
  return result;
}

console.log(caeserCipher("abcd", 1));
console.log(caeserCipher("yz", 1));
console.log(caeserCipher("gurer ner 9 qbtf!", 13));
