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

const filterPersonDetailsWhoAreFemales = personDetails.filter(
  (personDetail) => {
    return personDetail.gender === "female";
  }
);

console.log(filterPersonDetailsWhoAreFemales);

const moreFilterByCalculatingAge = personDetails.filter((personDetail) => {
  const age = new Date().getFullYear() - personDetail.birth;
  return age >= 18 && personDetail.gender === "female";
});
console.log(moreFilterByCalculatingAge);
