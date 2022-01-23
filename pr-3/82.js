function reverseInteger(n) {
  let reversedInt = n.toString().split("").reverse().join("");
  reversedInt = parseInt(reversedInt);

  if (n < 0) {
    return reversedInt * -1;
  } else {
    return reversedInt;
  }
}

console.log(reverseInteger(-12345));
