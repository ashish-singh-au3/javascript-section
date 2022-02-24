const stockForPrepChai = {
  addOns: ["sugar", "tea leaves", "masala powder", "cardamom"],
  liquid: ["water", "milk"],
  holder: ["kulhad", "cup", "cutting"],
};

const chaiShopOpen = true;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (chaiShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Promise rejected"));
    }
  });
}

async function kitchenTasks() {
  try {
    await time(2000);
    console.log("Order received! Mast chai bana re baba");

    await time(1000);
    console.log(
      `${stockForPrepChai.addOns[0]}, ${stockForPrepChai.addOns[1]},${stockForPrepChai.addOns[2]} sab daalne ka`
    );

    await time(3000);
    console.log(`${stockForPrepChai.liquid} is added`);

    await time(2000);
    console.log(`Let the chai to get boiled`);

    await time(1000);
    console.log(`${stockForPrepChai.holder[1]} was selected as container`);

    await time(2000);
    console.log(`Garam chai ready h to be served`);
  } catch (error) {
    console.log("THrow error right away", error);
  } finally {
    console.log(
      "Finally doesn't care about the rest of code, it will run anyways bindaas.Dukaan band karo aur sone ka"
    );
  }
}

console.log(kitchenTasks());
