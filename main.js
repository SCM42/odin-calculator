let num1 = "";
let num2 = "";
let operator = "";

let calcArr = [];
let operationStored = false;

const buttons = document.querySelectorAll(".button");
const displayText = document.getElementById("display");

for (const button of buttons) {
  button.addEventListener("click", function () {
    updateDisplay(button);
    checkForOperation(button);
  });
}

function checkForOperation(button) {
  let answer = "";
  
  if (button.id === "equal-sign") {
    answer = assignValuesThenOperate();

    displayText.textContent = answer;
  }
  
  if (button.classList.contains("operator")) {
    if (calcArr.length === 2) {
      answer = assignValuesThenOperate();

      displayText.textContent = answer;
    }

    calcArr.push(displayText.textContent.trim());
    calcArr.push(button.textContent.trim());

    operationStored = true;
  }
}

function assignValuesThenOperate() {
  num1 = parseInt(calcArr.shift());
  operator = calcArr.shift();
  num2 = parseInt(displayText.textContent.trim());

  let answer = operate(num1, operator, num2);

  return answer;
}

function updateDisplay(button) {
  if (operationStored === true) {
    displayText.textContent = "";
    operationStored = false;
  }

  if (!button.classList.contains("operator")) {
    if (button.id === "clear-sign") {
      displayText.textContent = "";
    } else {
      displayText.textContent += button.textContent.trim();
    }
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
