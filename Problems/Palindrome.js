function isPalindrome(str) {
  str = str.toLowerCase(); // in case there is any uppercase

  const result = str.split("").reverse().join("");

  if (str === result) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
