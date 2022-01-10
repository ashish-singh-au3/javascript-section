const arrayOfCity = [
  {
    name: "Slovakia",
    founded: 1900,
    head: "qwerty",
  },
  {
    name: "Kyiv",
    founded: 1850,
    head: "None",
  },
];

//adding age of city

const arrayOfCityAfterAddingTheAge = arrayOfCity.map((citiesObject) => {
  return {
    name: citiesObject.name,
    founded: citiesObject.founded,
    head: citiesObject.head,
    age: new Date().getFullYear() - citiesObject.founded,
  };
});

//get only age

const cityAge = arrayOfCityAfterAddingTheAge.map((citiesObject) => {
  return {
    age: citiesObject.age,
  };
});

console.log("this is initial array of cities", arrayOfCity);
console.log("this is new array", arrayOfCityAfterAddingTheAge);

console.log("this will show the age of city", cityAge);
