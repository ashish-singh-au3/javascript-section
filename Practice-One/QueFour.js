//Anagram =>  (rat) & (tar) are anagram

function anagramSol(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1AfterSorting = str1.split("").sort().join("");
  const str2AfterSorting = str2.split("").sort().join("");

  return str1AfterSorting === str2AfterSorting;
}

console.log(anagramSol("rat", "tar"));
console.log(anagramSol("cimee", "mice"));
