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
