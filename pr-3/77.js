const arrayOfPersons = [
  { name: "chris", born: 1950, city: "Alaska" },
  { name: "alex", born: 1990, city: "NYC" },
  { name: "Brown", born: 1998, city: "D.C" },
  { name: "Shanky", born: 1999, city: "Alaska" },
  { name: "Newbie", born: 2012, city: "Arizona" },
];

//add age

const arrayOfPersonsWithTheirAges = arrayOfPersons.map((newPersonDetails) => {
  return {
    name: newPersonDetails.name,
    born: newPersonDetails.born,
    city: newPersonDetails.city,
    age: new Date().getFullYear() - newPersonDetails.born,
  };
});

console.log("this is old array without age calculation:", arrayOfPersons);
console.log(
  "this is new array with age calculation :",
  arrayOfPersonsWithTheirAges
);

//only city

const arrayOfPersonsWithJustCity = arrayOfPersonsWithTheirAges.map(
  (newPersonDetails) => {
    return {
      city: newPersonDetails.city,
    };
  }
);

console.log(arrayOfPersonsWithJustCity);
