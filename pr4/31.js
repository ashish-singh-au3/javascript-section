let stocks = {
  fruits: ["Apple", "Banana", "Strawberry", "Litchi"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject("Promise rejected");
    }
  });
};

console.log(
  order(2000, () => console.log(`Order received, start prep`))
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.fruits[1]} was selected as fruit`)
      );
    })
    .then(() => {
      return order(1000, () => console.log(`Fruit has been chopped`));
    })
    .then(() => {
      return order(3000, () =>
        console.log(`${stocks.liquid[0]} & ${stocks.liquid[1]} was added`)
      );
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.holder[0]} was selected as holder`)
      );
    })
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.toppings[0]} was added as toppings`)
      );
    })
    .then(() => {
      return order(3000, () => console.log(`Icecream is ready to be served`));
    })
    .catch(() => {
      console.log("Promise rejected");
    })
);
