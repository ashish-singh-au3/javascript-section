const personDetails = [
  {
    name: "rishabh",
    birth: 1997,
    city: "Delhi",
    gender: "male",
  },
  {
    name: "Amit",
    birth: 1997,
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
];

const useOfFind = personDetails.find((personDetail) => {
  return personDetail.gender === "female";
});

console.log(useOfFind);

const useOfMap = personDetails.map((personDetail) => {
  return {
    name: personDetail.name,
    birth: personDetail.birth,
    gender: personDetail.gender,
    city: personDetail.city,
    age: new Date().getFullYear() - personDetail.birth,
  };
});

console.log(
  "THis will return the same old array in addition to age property",
  useOfMap
);

const useOfFilter = personDetails.filter((personDetail) => {
  return personDetail.birth === 1997;
});

console.log(useOfFilter);
