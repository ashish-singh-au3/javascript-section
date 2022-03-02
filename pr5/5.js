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

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/[\W_+]/g, "");
  str2 = str2.toLowerCase().replace(/[\W_+]/g, "");

  const str1Refined = str1.split("").sort().join("");
  const str2Refined = str2.split("").sort().join("");

  return str1Refined === str2Refined;
}

console.log(isAnagram("!HeLLo-", "hello")); //t
console.log(isAnagram("no-", "hello")); //f

// const example = () => {
//   let a = 10;
//   console.log(a, "will be called after 2 sec");
// };

// console.log(setTimeout(example, 2000));

num = 4;
console.log(num);
var num;

add(2, 3);
function add(a, b) {
  let sum = a + b;
  console.log(sum);
}

function mul(num) {
  console.log(num * num);
}

function main(cb) {
  const num = 5;
  cb(num);
}
main(mul);

function add(a, b) {
  console.log(a + b);
}

function sec(cb) {
  const a = 4;
  const b = 3;
  cb(a, b);
}

sec(add);

const nums = [1, 2, 3, 4, 5, 6, 7];

const [first, seco, ...rest] = nums;

console.log(rest);

function spread(n1, n2, n3) {
  return n1 + n2 + n3;
}

const ns = [1, 2, 3, 4, 5, 6];

const result = spread(...ns);
console.log(result);

function spr(a, b, c) {
  return a + b + c;
}

const arr = ["qwe", "asd", "zxc", "tyu", "cvb"];

const fin = spr(...arr);
console.log(fin);
