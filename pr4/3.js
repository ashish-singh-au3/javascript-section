const personDetails = [
  {
    name: "rishabh",
    birth: 1997,
    city: "Delhi",
  },
  {
    name: "Amit",
    birth: 1999,
    city: "Chennai",
  },
  {
    name: "Nimit",
    birth: 2000,
    city: "Punjab",
  },
  {
    name: "shubham",
    birth: 1996,
    city: "Lucknow",
  },
];

//add persons age

const personDetailsWithAge = personDetails.map((personDetail) => {
  return {
    name: personDetail.name,
    birth: personDetail.birth,
    city: personDetail.city,
    age: new Date().getFullYear() - personDetail.birth,
  };
});

console.log("Person Details array without age", personDetails);

console.log("New Person array with age", personDetailsWithAge);

//get only city

const personDetailOnlyCity = personDetails.map((personDetail) => {
  return {
    city: personDetail.city,
  };
});

console.log("THis will return only cities of the person", personDetailOnlyCity);

//Another example

const numbers = [1, 2, 3, 4];

const doubleTheValueOfNums = numbers.map((number) => {
  return number * 2;
});

console.log("These are first set of numbers arr : ", numbers);
console.log(
  "THese numbers are doubled from the numbers array:",
  doubleTheValueOfNums
);
