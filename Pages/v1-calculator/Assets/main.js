const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const inputAnswer = document.querySelector(".inputAnswer");
const userInput = document.querySelector(".userInput");
const clear = document.getElementById("clear");
const deleteInputs = document.getElementById("delete");
const clearAll = document.getElementById("clearAll");
const historyArea = document.querySelector(".history");
const mainArea = document.querySelector(".calculator-container");



function displayHistory() {
  if (historyArea.style.display === "none") {
    historyArea.style.display = "";
  } else {
    historyArea.style.display = "none";
    mainArea.style.marginLeft = "";
  }
}

document
.getElementById("showHistory")
.addEventListener("click", displayHistory);

let history = [];

historyArea.style.display = "none";

let historyList = document.querySelector(".history ul");

function addToHistory(entry) {
  history.push(entry);
  let newHistoryItem = document.createElement("li");
  newHistoryItem.textContent = entry;
  historyList.appendChild(newHistoryItem);
  clearAll.style.display = 'block'
}

clearAll.addEventListener('click', () => {
  const userClick = confirm('Are you sure?')
  if (userClick) {
    historyList.textContent = '';
    clearAll.style.display = 'none'

    }
})


let operand1 = null;
let operator = null;



function displayNumber(event) {
  const clickedNumber = event.target;
  const inputValue = inputAnswer.textContent;

  if (inputValue.length >= 7) {
    alert('sorry you have reached the max number')
    return
  }

  if (inputValue === "0") {
    inputAnswer.textContent = clickedNumber.textContent;
  }else {
    inputAnswer.textContent += clickedNumber.textContent;
  }
}
numbers.forEach((number) => {
  number.addEventListener("click", displayNumber);
});

function displayDoubleZero(event) {
  const clickedNumber = event.target;
  const inputValue = inputAnswer.textContent;

  if (inputValue > 0) {
    inputValue.textContent += clickedNumber.textContent;
  } else {
    inputAnswer.textContent = 0;
  }
}

document
  .getElementById("doubleZero")
  .addEventListener("click", displayDoubleZero);

function clearInput() {
  userInput.style.visibility = "hidden";
  inputAnswer.textContent = "0";
  operand1 = null;
  operator = null;

  userInput.textContent = "0";
}

clear.addEventListener("click", clearInput);

function deleteInput() {
  let inputValue = inputAnswer.textContent;
  if (inputValue.length > 1) {
    inputValue = inputValue.slice(0, -1);
    inputAnswer.textContent = inputValue;
  } else {
    inputAnswer.textContent = "0";
  }
}

deleteInputs.addEventListener("click", deleteInput);

function performCalculation() {
  const inputValue = inputAnswer.textContent;

  if (operand1 !== null && operator !== null) {
    let result;

    switch (operator) {
      case "+":
        result = operand1 + parseFloat(inputValue);
        break;
      case "-":
        result = operand1 - parseFloat(inputValue);
        break;
      case "*":
        result = operand1 * parseFloat(inputValue);
        break;
      case "÷":
        result = operand1 / parseFloat(inputValue);
        break;
      case "%":
        result = (operand1 / 100) * (1), parseFloat(inputValue);
        break;
      default:
        break;
    }

    if (result % 1 === 0) {
      inputAnswer.textContent = result.toFixed(0);
    } else {
      inputAnswer.textContent = result.toFixed(2);
    }

    userInput.textContent = operand1 + " " + operator + " " + inputValue + " = ";
    const historyEntry = `${userInput.textContent} ${inputAnswer.textContent}`;
    addToHistory(historyEntry);

    operand1 = null;
    operator = null;

  }
}

operators.forEach(operatorButton => {
  operatorButton.addEventListener("click", () => {
    userInput.style.visibility = "visible";
    operand1 = parseFloat(inputAnswer.textContent);
    operator = operatorButton.textContent;
    userInput.textContent = operand1 + " " + operator;
    inputAnswer.textContent = "0";
  });
 

});

document
  .getElementById("calculate")
  .addEventListener("click", performCalculation);
  
  // navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

