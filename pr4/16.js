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
      reject(console.log("Promise is rejected"));
    }
  });
};

console.log(
  order(2000, () => console.log(`${stocks.fruits[1]} was selected`))
    .then(() => {
      return order(0000, () =>
        console.log(`Fruit was selected , start production`)
      );
    })
    .then(() => {
      return order(2000, () => console.log(`Fruit was chopped`));
    })
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.liquid[0]} && ${stocks.liquid[1]} were added`)
      );
    })
    .then(() => {
      return order(1000, () => console.log(`machine has started`));
    })
    .then(() => {
      return order(3000, () =>
        console.log(`${stocks.holder[1]} was selected as holder`)
      );
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.toppings[1]} was selected as topping`)
      );
    })
    .then(() => {
      return order(3000, () => console.log(`Ice cream is ready to be served`));
    })
    .catch(() => {
      console.log(`Customer left`);
    })
);
