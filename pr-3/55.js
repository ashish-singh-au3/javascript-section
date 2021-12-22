const countryDetails = [
  { city: "Alaska", temp: 98, founded: 1800 },
  { city: "Nevada", temp: 90, founded: 1900 },
];

//add info of age of the city

const arrayAfterAddingTheAgeOfCity = countryDetails.map((country) => {
  return {
    city: country.city,
    temp: country.temp,
    founded: country.founded,
    age: new Date().getFullYear() - country.founded,
  };
});

console.log("countryDetails array's val remains same that is", countryDetails);
console.log("array after adding the age is", arrayAfterAddingTheAgeOfCity);
