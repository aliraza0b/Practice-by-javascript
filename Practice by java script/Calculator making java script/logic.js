let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}
function deleteOneChar() {
    const currentDisplay = display.value;
    display.value = currentDisplay.slice(0, -1);
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}
