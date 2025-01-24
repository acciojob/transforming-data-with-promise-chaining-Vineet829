const number = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = parseInt(number.value, 10);
      if (!isNaN(value)) {
        output.innerHTML = `Result: ${value}`;
        resolve(value);
      } else {
        reject("Invalid input. Please enter a valid number.");
      }
    }, 2000);
  });
}

function displayData(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      output.innerHTML = `Result: ${num}`;
      resolve(num);
    }, 2000);
  });
}

function multiply(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = num * 2;
      output.innerHTML = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function sub(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = num - 3;
      output.innerHTML = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function divide(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = num / 2;
      output.innerHTML = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

function add(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = num + 10;
      output.innerHTML = `Result: ${result}`;
      resolve(result);
    }, 1000);
  });
}

const transFormData = (e) => {
  e.preventDefault();
  getData()
    .then((res) => displayData(res))
    .then((res) => multiply(res))
    .then((res) => sub(res))
    .then((res) => divide(res))
    .then((res) => add(res))
    .then((finalResult) => {
      output.innerHTML = `Final Result: ${finalResult}`;
    })
    .catch((err) => {
      output.innerHTML = `Error: ${err}`;
    });
};

btn.addEventListener("click", (e) => transFormData(e));

