const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 6, 7];

const useOfFilter = numbers.filter((num, idx) => {
  return numbers.indexOf(num) === idx;
});

console.log(useOfFilter);
