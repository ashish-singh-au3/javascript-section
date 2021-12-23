function isAnagramOrNot(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1Refined = str1.split("").sort().join("");
  const str2Refined = str2.split("").sort().join("");

  return str1Refined === str2Refined;
}

console.log(isAnagramOrNot("!CaT", "RAt")); //f
console.log(isAnagramOrNot("olleH!!!-", "HEllO")); //t
