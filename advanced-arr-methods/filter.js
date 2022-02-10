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
    birth: 2000,
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

const showObjectsOnlyWhoseGenderIsFemale = personDetails.filter(
  (personDetail) => {
    if (personDetail.gender === "female") {
      return true;
    } else {
      return false;
    }
  }
);

console.log(
  "This will only return the objects having gender as female:",
  showObjectsOnlyWhoseGenderIsFemale
);
