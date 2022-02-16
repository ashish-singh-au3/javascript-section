const personDetails = [
  {
    name: "rishabh",
    birth: 1997,
    city: "Delhi",
    gender: "male",
  },
  {
    name: "Amit",
    birth: 1999,
    city: "Chennai",
    gender: "male",
  },
  {
    name: "Shreya",
    birth: 2005,
    city: "Punjab",
    gender: "female",
  },
  {
    name: "shubhi",
    birth: 1996,
    city: "Lucknow",
    gender: "female",
  },
  {
    name: "Sidhi",
    birth: 1995,
    city: "Punjab",
    gender: "female",
  },
  {
    name: "Akshat",
    birth: 1996,
    city: "Lucknow",
    gender: "male",
  },
];

const personFilterationBirth = personDetails.filter((personDetail) => {
  return personDetail.birth === 1996;
});

console.log(
  "THis will return only with person having birth 1996",
  personFilterationBirth
);

const personFilterWithMultipleConditions = personDetails.filter(
  (personDetail) => {
    return personDetail.birth === 1996 && personDetail.gender === "male";
  }
);
console.log(personFilterWithMultipleConditions);

//ANother ex difference bet filters & map

const numbers = [2, 3, 4, 5, 6];

const newNumber = numbers.filter((number) => {
  return number * 2;
});
console.log(newNumber); //it will not return  a new arr

const newTwo = numbers
  .map((number) => {
    return number * 2; // this will return a new arr
  })
  .filter((number) => {
    //hence we can perform further actions like filter etc
    return number >= 7;
  });
console.log(newTwo);
