const nums = [1, 2, 3, 4, 5];

const useOfMap = nums
  .map((num) => {
    return num * 2;
  })
  .filter((num) => {
    return num < 8;
  }); //furthe methods chaining can be done

console.log(useOfMap);

const useOfFind = nums.find((num) => {
  return num <= 3;
});

console.log(useOfFind); //will return first instance only that is 1 from nums arr

const numbers = [1, 2, 3];

for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

// numbers.forEach((number) => console.log(number));

//pr

var a = 2;
var a = 5; //redeclared and overwrites the prev val

console.log(a); //5

let b = 3;

//let b = 6;

console.log(b); //err cz let can not be redeclared , but can be redeclared without initialization

const c = 10;

//const c = 20;

console.log(c); //err cs can't be redeclared and a new value can't be reassigned

const words = ["react", "script", "interview", "style", "javascript"];

const useOfFilterTwo = words.filter((word) => {
  return word.length < 6;
});

console.log(useOfFilterTwo);

//without arr method

let newArr = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArr.push(words[i]);
  }
}
console.log(newArr);

// diff map & foreach

let otherArr = [1, 2, 3, 4, 5, 6];

const ans = otherArr
  .map((other) => {
    return other % 2 === 0 ? other * 2 : other * 1;
  })
  .filter((other) => {
    return other < 10;
  }); //further chaining of arr methods can be done

console.log(ans);

const ansForEach = otherArr.forEach((other) => {
  return other * 2; //undefined
});

console.log(ansForEach);
