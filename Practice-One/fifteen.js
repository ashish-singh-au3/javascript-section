// Write a function that returns the provided string with
// the first letter of each word capitalized. Make sure the
// rest of the word is in lower case.
// --- Examples
//   capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
//   capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

function capitalizeAlgorithm(str) {
  const arrOfWords = str.split(" ");
  const arrOfWordsCasedFormat = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCasedFormat.push(
      word[0].toUpperCase() + word.slice(1).toLowerCase()
    );
  }
  return arrOfWordsCasedFormat.join(" ");
}

console.log(capitalizeAlgorithm("sHoRt AnD sToUt"));
