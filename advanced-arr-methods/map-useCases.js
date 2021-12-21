const persons = [
  { name: "Kevin", born: 1990, id: 2 },
  { name: "josh", born: 1998, id: 3 },
];

//Add info in persons array

const newArrayIncludingPersonsAge = persons.map((personObj) => {
  return {
    name: personObj.name,
    born: personObj.born,
    id: personObj.id,
    age: new Date().getFullYear() - personObj.born,
  };
});

//get only ids

const personsIds = persons.map((personObj) => {
  return personObj.id;
});

console.log("persons", persons);
console.log("newArrayIncludingPersonsAge", newArrayIncludingPersonsAge);
console.log("personsIds", personsIds);
