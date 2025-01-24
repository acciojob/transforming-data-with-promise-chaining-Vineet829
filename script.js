const inputElement = document.getElementById("ip");
const buttonElement = document.getElementById("btn");
const outputElement = document.getElementById("output");

buttonElement.addEventListener("click", () => {
  const inputValue = parseInt(inputElement.value);

  if (isNaN(inputValue)) {
    outputElement.textContent = "Please enter a valid number.";
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  })
    .then((number) => {
      outputElement.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number * 2);
        }, 1000);
      });
    })
    .then((number) => {
      outputElement.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number - 3);
        }, 1000);
      });
    })
    .then((number) => {
      outputElement.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number / 2);
        }, 1000);
      });
    })
    .then((number) => {
      outputElement.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number + 10);
        }, 1000);
      });
    })
    .then((finalNumber) => {
      outputElement.textContent = `Final Result: ${finalNumber}`;
    })
    .catch((error) => {
      outputElement.textContent = `Error: ${error.message}`;
    });
});

