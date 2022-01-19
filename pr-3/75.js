function isAnagramOrNot(string1, string2) {
  string1 = string1.toLowerCase().replace(/[\W_]+/g, "");
  string2 = string2.toLowerCase().replace(/[\W_]+/g, "");

  string1Sorted = string1.split("").sort().join("");
  string2Sorted = string2.split("").sort().join("");

  return string1Sorted === string2Sorted;
}

console.log(isAnagramOrNot("!HeLlO-", "olleH"));
console.log(isAnagramOrNot("pat", "Tar"));
