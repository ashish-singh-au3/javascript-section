const obj = {
  name: "test",
  price: 100,
  category: {
    min: "apparel",
    max: "footwear",
  },
  address: {
    new: "test address",
    old: "test old address",
  },
};

// const objectFlattening = (object) => {
//     let res = {}

//     for(const[key,value] of Object.entries(object)){
//         if(typeof value === "object"){
//             for(const[internalKey,internalValue] of Object.entries(value)){
//                 res(key + " : " + internalKey) = internalValue
//             }
//         }else{

//             res[key] = value
//         }
//     }
//     return res
// }

// console.log(objectFlattening(obj))

const flattenObject = (object) => {
  let res = {};
  for (const [key, value] of Object.entries(object)) {
    if (typeof value === "object") {
      for (const [internalKey, internalValue] of Object.entries(value)) {
        res[key + "." + internalKey] = internalValue;
      }
    } else {
      res[key] = value;
    }
  }
  return res;
};

console.log(flattenObject(obj));
