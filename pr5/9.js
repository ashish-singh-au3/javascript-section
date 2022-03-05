// const object1 = {
//   a: "somestring",
//   b: 42,
// };

// function neww() {
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key} : ${value}`);
//   }
// }

// neww();

const course = {
  name: "Introduction to JavaScript",
  isPaid: true,
  cost: {
    amount: 999,
    currency: "INR",
  },
};

const flattenObject = (object) => {
  let res = {};

  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      for (const [internalkey, internalvalue] of Object.entries(value)) {
        res[key + "." + internalkey] = internalvalue;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(flattenObject(course));
