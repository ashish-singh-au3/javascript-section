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

let b = 6;

console.log(b); //err cz let can not be redeclared , but can be redeclared without initialization

const c = 10;

const c = 20;

console.log(c); //err cs can't be redeclared and a new value can't be reassigned
