const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7];

const useOfFilter = numbers.filter((num, idx) => {
  return numbers.indexOf(num) === idx;
});

console.log(useOfFilter);

const useOfMap = numbers
  .map((number) => {
    return number * number;
  })
  .filter((number) => {
    return number >= 1;
  });

console.log(useOfMap);
