//maps

const personDetails = [
  { name: "john", born: 1990, city: "Alaska" },
  { name: "wick", born: 1995, city: "Nevada" },
];

//add age information

const addPersonsAge = personDetails.map((personObject) => {
  return {
    name: personObject.name,
    born: personObject.born,
    city: personObject.city,
    age: new Date().getFullYear() - personObject.born,
  };
});

console.log("personDetails", personDetails);
console.log("addPersonsAge will be", addPersonsAge);
