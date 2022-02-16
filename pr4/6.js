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
