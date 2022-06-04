const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    const userNum = +userInput.value;
    const calcDescription = `${currentResult} + ${userNum}`
    currentResult = currentResult + userNum;
    outputResult(currentResult, calcDescription);
    userInput.value = 0;
}

addBtn.addEventListener('click', add);