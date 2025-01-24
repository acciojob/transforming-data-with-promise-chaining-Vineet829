function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

document.getElementById("btn").addEventListener("click", () => {
  const inputNumber = Number(document.getElementById("ip").value);
  
  delay(2000, inputNumber)
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return delay(1000, result * 2);
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return delay(1000, result - 3);
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return delay(1000, result / 2);
    })
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return delay(1000, result + 10);
    })
    .then((result) => {
      document.getElementById("output").textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      console.error("Error occurred:", error);
      document.getElementById("output").textContent = "An error occurred!";
    });
});




