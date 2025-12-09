let num1 = "";
let num2 = "";
let operator = "";

let calcArr = [];

const buttons = document.querySelectorAll(".button");
const displayText = document.getElementById("display");

for (const button of buttons) {
  button.addEventListener("click", function () {
    checkForOperation(button);
    updateDisplay(button);
  });
}

function checkForOperation(button) { 
  if (button.classList.contains("operator")) {
    //console.log(`Operator selected: "${button.textContent.trim()}"`);

    if (calcArr.length === 2) {
      num1 = parseInt(calcArr.shift());
      operator = calcArr.shift();
      num2 = parseInt(getSecondNumber());

      let answer = operate(num1, operator, num2);
      displayText.textContent = answer;
    }
    
    calcArr.push(displayText.textContent.trim());
    calcArr.push(button.textContent.trim());

    //console.log(calcArr);
  }
}

function getSecondNumber() {
  let displayArr = displayText.textContent.trim().split("");
  let operatorIndex = displayArr.findIndex((char) => char === operator);
  let secondNumber = "";

  //console.log(`Operator index is: ${operatorIndex}`);
  //console.log(`Temporary array is ${displayArr}`);

  for (i = operatorIndex + 1; i < displayArr.length; i++) {
    secondNumber += displayArr[i];
  }

  return secondNumber;
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
