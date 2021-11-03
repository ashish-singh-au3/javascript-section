// Write a function that returns the number of vowels found within a string.
// Vowel characters are 'a', 'e', 'i', 'o', and 'u'.
// Make sure the function is case insensitive!
// --- Examples
//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function findAVowelInString(string) {
  string = string.toLowerCase();
  const vowels = "aeiou".split("");
  let count = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];

      if (char === vowel) {
        count++;
      }
    }
  }
  return count;
}

console.log(findAVowelInString("What"));
console.log(
  findAVowelInString("I am a world-class developer using iterations")
);
