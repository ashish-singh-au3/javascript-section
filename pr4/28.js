let stocks = {
  cuisine: ["North", "chinese", "italian"],
  spices: ["turmeric", "corriander powder", "red chilli", "mix spices"],
  addon: ["rice", "chapati"],
  plate: ["half plate", "full plate"],
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
  order(2000, () => console.log(`${stocks.cuisine[2]} was selected as cuisine`))
    .then(() => {
      return order(0000, () => console.log(`Start the preparation of food`));
    })
    .then(() => {
      return order(2000, () => console.log(`add the spices ${stocks.spices}`));
    })
    .then(() => {
      return order(3000, () => console.log(`let the food in gas for 3 sec`));
    })
    .then(() => {
      return order(1000, () =>
        console.log(`${stocks.addon[0]} was selected as add on`)
      );
    })
    .then(() => {
      return order(2000, () =>
        console.log(`${stocks.plate[0]} is pulled out as serving container`)
      );
    })
    .then(() => {
      return order(3000, () => console.log(`Food is ready to be served`));
    })
    .catch(() => {
      console.log("Shop is closed");
    })
);
