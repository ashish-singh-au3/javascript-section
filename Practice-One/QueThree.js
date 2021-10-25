//Reverse an int , (-123456) => (654321)

function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  reversed = parseInt(reversed);

  if (n < 0) {
    //for  negative values
    return reversed * -1;
  }
  return reversed;
}

console.log(reverseInt([-123456]));
