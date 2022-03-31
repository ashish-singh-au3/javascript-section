const stock = {
  liquid: ["water", "milk"],
  spices: ["tea leaves", "cinnamon", "masala", "sugar"],
  holder: ["kulhad", "cup"],
};

let shopOpen = true;

function preparation(time) {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(resolve, time);
    } else {
      reject(console.log("Promise rejected"));
    }
  });
}

async function finalSteps() {
  try {
    await preparation(2000);
    console.log(`Order placed by customer`);

    await preparation(3000);
    console.log(`${stock.liquid[0]} was added in the container`);

    await preparation(2000);
    console.log(`${stock.spices[0]} , ${stock.spices[2]} was added `);

    await preparation(5000);
    console.log(`${stock.liquid[1]} was added. Let the chai to get it boiled.`);

    await preparation(2000);
    console.log(`${stock.holder[0]} was selected by the customer`);

    await preparation(1000);
    console.log("Chai is served to the customer");
  } catch {
    console.log("Error found");
  } finally {
    console.log("Shop is closed");
  }
}
finalSteps();
