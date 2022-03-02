// const callBack = () => {
//   let a = 3;
//   let b = 3;
//   console.log("This will print after 2 sec that is", a + b);
// };

// setTimeout(callBack, 2000);

const array = [1, 2, 3, 4, 5, 6, 7, 8];

let result = array
  .map((arr) => {
    return arr * 2;
  })
  .filter((arr) => {
    return arr < 10 && arr % 2 == 0;
  });

console.log(result);

const details = [
  { name: "kris", city: "chennai", born: 1998 },
  { name: "Christopher", city: "Delhi", born: 1995 },

  { name: "Courtney", city: "Kanpur", born: 1999 },

  { name: "Tim", city: "Chandigarh", born: 1998 },
];

const printUsingMap = details
  .map((detail) => {
    return {
      name: detail.name,
      city: detail.city,
      born: detail.born,
      age: new Date().getFullYear() - detail.born,
    };
  })
  .filter((detail) => {
    return detail.age <= 24;
  });

console.log(printUsingMap);

const useFind = details.find((detail) => {
  return detail.born === 1998;
});
console.log("Find use", useFind);

const useOfForEach = details.forEach((detail, i) => {
  return detail[1];
});

console.log(useOfForEach);
