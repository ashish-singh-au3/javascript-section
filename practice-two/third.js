function reverseInt(n) {
  let reversedValue = n.toString().split("").reverse("").join("");
  reversedValue = parseInt(reversedValue);

  if (n < 0) {
    return reversedValue * -1;
  } else {
    return reversedValue;
  }
}
console.log(reverseInt("1234")); // 4321
console.log(reverseInt("-5678")); // -8765
