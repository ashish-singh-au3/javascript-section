let stockForPrepChai = {
  addOns: ["sugar", "tea leaves", "masala powder", "cardamom"],
  liquid: ["water", "milk"],
  holder: ["kulhad", "cup", "cutting"],
};

let chaiShopOpen = true;

function time(miliseconds) {
  return new Promise((resolve, reject) => {
    if (chaiShopOpen) {
      setTimeout(resolve, miliseconds);
    } else {
      reject(console.log("Promise rejected"));
    }
  });
}

async function preparation() {
  try {
    await time(1000);
    console.log(`Order received from customer`);

    await time(3000);
    console.log(
      `Add ${stockForPrepChai.addOns[0]} ${stockForPrepChai.addOns[1]} ${stockForPrepChai.addOns[3]} for prep chai`
    );

    await time(2000);
    console.log(`Let the chai get boiled`);

    await time(2000);
    console.log(`add ${stockForPrepChai.liquid[1]} now`);

    await time(1000);
    console.log(
      `${stockForPrepChai.holder[0]} was selected as serving container`
    );

    await time(4000);
    console.log("Chai is ready to be served. ");
  } catch (error) {
    console.log("Process abrupted", error);
  } finally {
    console.log("It's night time and shop is closed");
  }
}

console.log(preparation());
