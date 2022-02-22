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
];

const filterPersonWHoseGenderIsFemale = personDetails.filter((personDetail) => {
  {
    return personDetail.gender === "female";
  }
});

console.log(filterPersonWHoseGenderIsFemale);

const filterMultipleFactors = personDetails.filter((personDetail) => {
  const age = new Date().getFullYear() - personDetail.birth;

  return age >= 18 && personDetail.city === "Delhi";
});

console.log(filterMultipleFactors);
