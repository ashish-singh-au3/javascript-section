//Write a function which takes in a string and returns counts of each character in the string.

function characterCount(str) {
  //creating an object which will return in the end
  var result = {};

  //loop over string for each character
  for (var i = 0; i < str.length; i++) {
    //initiating a new var here
    var char = str[i].toLowerCase();
    //if the character is a num or letter AND is a key in object then add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(characterCount("hello my Pin is 1234"));
