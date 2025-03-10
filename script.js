
const display = document.getElementById("user-input");
let currentInput = "0";
let previousInput = "";
let operator = null;

const updateDisplay = () => {
    display.textContent = currentInput;
};

const clearDisplay = () => {
    currentInput = "0";
    previousInput = "";
    operator = null;
    updateDisplay();
};


const deleteLastCharacter = () => {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === "") {
        currentInput = "0";
    }
    updateDisplay();
};

const appendNumber = (num) => {
    if (currentInput === "0") {
        currentInput = num;
    } else {
        currentInput += num;
    }
    updateDisplay();
};


const setOperator = (op) => {
    if (operator !== null) {
        calculate();
    }
    previousInput = currentInput;
    currentInput = "0";
    operator = op;
};


const calculate = () => {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            if (current === 0) {
                result = "Error";
            } else {
                result = prev / current;
            }
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = "";
    updateDisplay();
};


document.querySelectorAll(".numbers").forEach((button) => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

document.querySelectorAll(".key-operate").forEach((button) => {
    button.addEventListener("click", () => {
        setOperator(button.textContent);
    });
});

document.querySelector(".key-others.operations").addEventListener("click", () => {
    clearDisplay();
});

document.querySelector(".key-others.operations:nth-child(2)").addEventListener("click", () => {
    deleteLastCharacter();
});

document.querySelector(".key-operate.operations:nth-last-child(2)").addEventListener("click", () => {
    calculate();
});

document.querySelector(".back a").addEventListener("click", () => {
    window.location.href = "index.html";  // Redirect to home screen
});
