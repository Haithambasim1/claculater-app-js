const buttons = document.querySelectorAll(".calc-button");
const display = document.querySelector(".display_area");
let firstOperand = null;
let operator = null;
let currentOperand = "";

buttons.forEach((button) => {
  button.addEventListener(`click`, (event) => {
    const target = event.target;
    const value = target.innerText;
    if (target.id == "clear") {
      firstOperand = null;
      operator = null;
      currentOperand = "";
      display.innerText = "";
    } else if (target.id == "plus-minus") {
      display.innerHTML = -1 * display.innerHTML;
    } else if (target.id == "persanteag") {
      display.innerHTML = parseFloat(display.innerHTML) / 100;
    } else if (
      target.id == "divide" ||
      target.id == "multiply" ||
      target.id == "minus" ||
      target.id == "plus"
    ) {
      operator = value;
      firstOperand = parseFloat(display.innerText);
      currentOperand = "";
    } else if (target.id == "equls") {
      if (operator && firstOperand !== null) {
        const secondOperand = parseFloat(display.innerText);
        let result;
        switch (operator) {
          case "+":
            result = firstOperand + secondOperand;
            break;
          case "-":
            result = firstOperand - secondOperand;
            break;
          case "*":
            result = firstOperand * secondOperand;
            break;
          case "/":
            result = firstOperand / secondOperand;
            break;
          default:
            break;
        }
        display.innerText = result;
        firstOperand = result;
        operator = null;
        currentOperand = "";
      }
    } else {
      if (value === "," && currentOperand.includes(",")) {
        return;
      }
      currentOperand += value;
      display.innerText = currentOperand;
    }
  });
});
