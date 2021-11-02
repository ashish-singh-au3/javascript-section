// Given a phrase, substitute each character by shifting it up
// the alphabet by a given integer. If necessary, the shifting
// should wrap around back to the beginning of the alphabet.
// Make sure the function only shifts letters.
// --- Examples
// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caeserCipherTwo(string, shift) {
  let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    const index = alphabetArray.indexOf(character);

    if (index === -1) {
      result += character;
      continue;
    }

    const encodedIndex = (index + shift) % 26;
    result += alphabetArray[encodedIndex];
  }
  return result;
}

console.log(caeserCipherTwo("abcd", 1));
console.log(caeserCipherTwo("yz", 1));
console.log(caeserCipherTwo("gurer ner 9 qbtf!", 13));
