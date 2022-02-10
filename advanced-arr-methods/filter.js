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

const showObjectsOnlyWhoseGenderIsFemale = personDetails.filter(
  (personDetail) => {
    {
      /* if (personDetail.gender === "female") {
      return true;
    } else {
      return false;
    }  */
      //shorter form
      return personDetail.gender === "female";
    }
  }
);

//More filteration with age

const adultFemales = personDetails.filter((personDetail) => {
  const age = new Date().getFullYear() - personDetail.birth;
  return age >= 18 && personDetail.gender === "female";
});

console.log("THis will return only adult females", adultFemales);

console.log(
  "This will only return the objects having gender as female:",
  showObjectsOnlyWhoseGenderIsFemale
);
