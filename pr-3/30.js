function reverse(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    result = char + result;
  }
  return result;
}

console.log(reverse("abcdE"));

function reverseAnotherWay(str) {
  return str.split("").reverse().join("");
}

console.log(reverseAnotherWay("QwErty"));
