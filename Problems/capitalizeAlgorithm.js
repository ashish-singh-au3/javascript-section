function capitalizeAlgo(str) {
  //splitting the str first to make it easier
  let arrayOfWords = str.split(" "); // leaving space in split so that the words don't get clubbed together
  let arrayOfWordsCased = []; //empty

  for (let i = 0; i < arrayOfWords.length; i++) {
    //not iterating over str because in the next line we have splitted it
    const word = arrayOfWords[i];
    arrayOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }
  return arrayOfWordsCased.join(" ");
}

console.log(capitalizeAlgo("I haTe dS alGo"));
