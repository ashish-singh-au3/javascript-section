const personDetails = [
  { name: "qwert", birth: 1990, city: "Nevada" },
  { name: "chris", birth: 1997, city: "LA" },
  { name: "bum", birth: 1970, city: "DC" },
];

console.log("person detail array:", personDetails);

//add age

const personDetailsArrayWithAge = personDetails.map((newPersonDetails) => {
  return {
    name: newPersonDetails.name,
    birth: newPersonDetails.birth,
    city: newPersonDetails.city,
    age: new Date().getFullYear() - newPersonDetails.birth,
  };
});

console.log("new array with age :", personDetailsArrayWithAge);

//get only age from arr

const getOnlyCityFromPersonsArray = personDetails.map((newPersonDetails) => {
  return {
    city: newPersonDetails.city,
  };
});

console.log("only city from array", getOnlyCityFromPersonsArray);
