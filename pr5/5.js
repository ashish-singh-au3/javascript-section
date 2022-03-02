function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  } else {
    return reversed;
  }
}
console.log(reverseInt(-12345));
console.log(reverseInt(12345));
