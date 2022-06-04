const defaultResult = 0;
let currentResult = defaultResult;

function getUserInputNum() {
    return +userInput.value;
}

function add() {
    const userNum = getUserInputNum();
    const calcDescription = `${currentResult} + ${userNum}`
    currentResult = currentResult + userNum;
    outputResult(currentResult, calcDescription);
    userInput.value = 0;
}

addBtn.addEventListener('click', add);