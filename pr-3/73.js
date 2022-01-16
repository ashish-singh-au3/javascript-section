function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("doG")); //f
console.log(isPalindrome("MaDam")); //t
