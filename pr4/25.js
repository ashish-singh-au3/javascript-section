function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Madam")); //t
console.log(isPalindrome("heLlo")); //f

//reverse an int

function reverse(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  } else {
    return reversed;
  }
}

console.log(reverse(-123456));
console.log(reverse(78912));
