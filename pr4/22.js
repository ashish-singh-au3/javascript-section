//Food prep in js

let stocks = {
  cuisine: ["North", "chinese", "itlian"],
  spices: ["turmeric", "corriander powder", "red chilli", "mix spices"],
  addon: ["rice", "chapati"],
  plate: ["half", "full"],
};

let isShopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Promise rejected"));
    }
  });
};

console.log(
  order(2000, () => console.log(`${stocks.cuisine[1]} was ordered`))
    .then(() => {
      return order(0000, () => console.log(`Start preparation of food`));
    })
    .then(() => {
      return order(3000, () =>
        console.log(`Add ${stocks.spices[1]} & ${stocks.spices[2]} as spices`)
      );
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.addon[1]} was selected as add on`)
      );
    })
    .then(() => {
      return order(1000, () =>
        console.log(`Customer selected ${stocks.plate[0]} plate while ordering`)
      );
    })
    .then(() => {
      return order(3000, () => console.log(`Food is ready to be served`));
    })
    .catch(() => {
      return console.log("Shop is closed");
    })
);
