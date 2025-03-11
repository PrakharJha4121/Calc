let currentInput = "0";
let previousInput = "";
let operator = null;

function updateDisplay() {
    document.getElementById("user-input").innerText = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    operator = null;
    updateDisplay();
}

function deleteLastCharacter() {
    let length = currentInput.length; // .length is used to find len
    if (length > 1) {
        currentInput = currentInput.substring(0, length - 1);
    } 
    else {
        currentInput = "0";
    }
    updateDisplay();
}

function appendNumber(num) {
    
    currentInput = currentInput + num;
    updateDisplay();
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = "0";
    operator = op;
}

function calculate() {
    let result = 0;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    if (operator === "+") {
        result = prev + current;
    }
    else if (operator === "-") {
        result = prev - current;
    } 
    else if (operator === "*") {
        result = prev * current;
    } 
    else if (operator === "/") {
        if (current !== 0) {
            result = prev / current;
        } 
        else {
            result = "Error";
        }
    } 

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
}
