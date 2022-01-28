function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_]+/g, "");
  str2 = str2.toLowerCase().replace(/[\W_]+/g, "");

  const str1refined = str1.split("").sort().join("");
  const str2refined = str2.split("").sort().join("");

  return str1refined === str2refined;
}

console.log(isAnagram("Qwe!rtY", "ytrqwe")); //t
console.log(isAnagram("QwertY", "yt")); //f
