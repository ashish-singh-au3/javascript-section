const promise1 = Promise.resolve(3);
const promise2 = 40;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "bar");
});

Promise.all([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});
