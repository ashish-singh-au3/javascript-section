const arrayOfCities = [
  { name: "LosAngeles", founded: 1890, chairman: "Qwerty" },
  { name: "Nagasaki", founded: 1800, chairman: "kawasaki" },
  { name: "LosAngeles", founded: 1875, chairman: "HakunaMatata" },
  { name: "LosAngeles", founded: 1900, chairman: "Abcde" },
  { name: "LosAngeles", founded: 1790, chairman: "Xi jin" },
];

const arrayOfCitiesWithAge = arrayOfCities.map((arrayOfCity) => {
  return {
    name: arrayOfCity.name,
    founded: arrayOfCity.founded,
    chairman: arrayOfCity.chairman,
    age: new Date().getFullYear() - arrayOfCity.founded,
  };
});

console.log("this array has no age \n", arrayOfCities);
console.log("this is new array with age ", arrayOfCitiesWithAge);
