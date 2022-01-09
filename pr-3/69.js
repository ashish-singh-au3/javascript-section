function reverseAnInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 1) {
    return reversed * -1;
  } else {
    return reversed;
  }
}

console.log(reverseAnInt(123456));
console.log(reverseAnInt(-147));
