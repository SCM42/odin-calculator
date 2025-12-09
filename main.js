let num1 = "";
let num2 = "";
let operator = "";

const buttons = document.querySelectorAll(".button");
const displayText = document.getElementById("display");

for (const button of buttons) {
  button.addEventListener("click", function () {
      updateDisplay(button);
  });
}

function updateDisplay(button) {
  if (button.id === "clear-sign") {
      displayText.textContent = "";
    } else {
      displayText.textContent += button.textContent.trim();
    }
}

//#region
function operate(x, operator, y) {
  let answer = 1;

  switch (operator) {
    case "+":
      answer = add(x, y);
      break;
    case "-":
      answer = subtract(x, y);
      break;
    case "*":
      answer = multiply(x, y);
      break;
    case "/":
      answer = divide(x, y);
      break;
  }

  return answer;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}
//#endregion
