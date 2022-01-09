/* Initialize */
let result = "0";
let onoff = 1;
let firstNumber = "";
let secondNumber = "";
let operator = "";
let ans = "";
let onoffR = 0;

/* Setting up functionalities of the calculator */
function process(char) {
  switch (char) {
    case "c":
      result = "0";
      onoff = 1;
      firstNumber = "";
      secondNumber = "";
      operator = "";
      ans = "";
      break;

    case "a":
      if (onoff === 1) {
        firstNumber = ans;
      } else secondNumber = ans;
      break;

    case "d":
      if (secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
      } else {
        if (isMath(firstNumber.slice(0, -1))) {
          onoff = 1;
          firstNumber = firstNumber.slice(0, -1);
        } else firstNumber = firstNumber.slice(0, -1);
      }

      break;

    case ".":
      if (onoff == 1) {
        if (firstNumber) {
          firstNumber += ".";
        } else firstNumber += "0.";
      } else {
        if (secondNumber) {
          secondNumber += ".";
        } else secondNumber += "0.";
      }
      break;

    case "pm":
      if (onoff == 1) {
        if (firstNumber) {
          firstNumber += "-";
        } else firstNumber = "-" + firstNumber;
      } else {
        if (secondNumber) {
          secondNumber += ".";
        } else secondNumber = "-" + secondNumber;
      }
      break;

    case "π":
      if (onoff === 1) {
        firstNumber = "3.14159";
      } else secondNumber = "3.14159";

      break;

    case "=":
      firstNum = Number(firstNumber.slice(0, -1));
      secondNumber = Number(secondNumber);
      switch (operator) {
        case "+":
          result = firstNum + secondNumber;
          break;
        case "-":
          result = firstNum - secondNumber;
          break;
        case "*":
          result = firstNum * secondNumber;
          break;
        case "/":
          result = firstNum / secondNumber;
          if (second === 0) result = "Math Error";
          break;
        case "^":
          result = Math.pow(firstNum, secondNumber);
          break;
        case "√":
          result = Math.pow(firstNum, 1 / secondNumber);
          break;
        case "%":
          result = firstNum % secondNumber;
          break;
        case "!":
          result = factorial(firstNum);
          break;
      }
      if (result === "Math Error") {
        onoff = 1;
      } else if (isNaN(result)) {
        onoff = 1;
        result = "Syntax Error";
      } else {
        ans = result;
        onoff = 1;
      }

      break;

    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
    case "√":
    case "%":
    case "!":
      operator = char;
      firstNumber += char;
      onoff = 2;
      break;

    default:
      if (onoff === 1) {
        if (first.length < 21) {
          firstNumber += char;
        }
      } else {
        if (secondNumber.length < 21) {
          secondNumber += char;
        }
      }

      break;
  }

  document.querySelector("#first").innerHTML = firstNumber;
  document.querySelector("#second").innerHTML = secondNumber;
  document.querySelector("#result").innerHTML = result;
}

function factorial(num) {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
}

function isMath(char) {
  if (
    char === "+" ||
    char === "-" ||
    char === "*" ||
    char === "/" ||
    char === "^" ||
    char === "√" ||
    char === "!" ||
    char === "%"
  )
    return true;
  else return false;
}
