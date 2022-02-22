//every just returns the boolean i.e. true or false

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

const allMale = personDetails.every((personDetail) => {
  return personDetail.gender === "male";
});

console.log(allMale); //false because some are female and some are male
