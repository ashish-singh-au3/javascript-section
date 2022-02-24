async function test() {
  try {
    await notDeclaredFunction;
  } catch (error) {
    console.log("Error found");
  } finally {
    console.log("Finally will run whether try passes or fails");
  }
}

console.log(test());
