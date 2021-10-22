function isAnagramEasySolution(str1, str2) {
  // regular expressions cleaning and making sure all the char are in lowercase
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1Sorted = str1.split("").sort().join("");
  const str2Sorted = str2.split("").sort().join("");

  /*  if (str1Sorted === str2Sorted) {
    return true;
  } else {
    return false;
  } */

  return str1Sorted === str2Sorted;
}

console.log(isAnagramEasySolution("Hello!", "olleh"));
console.log(isAnagramEasySolution("Hello!", "earth"));
