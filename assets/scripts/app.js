const defaultResult = 0;
let currentResult = defaultResult;


// Gets input from input field
function getUserInputNum() {
    return +userInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNumb) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumb}`;
    outputResult(currentResult, calcDescription);   // from vendor file
}

function clearInput() {
    userInput.value = '';
}

function add() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult += enteredNumb;
    createAndWriteOutput('+', initialResult, currentResult);
    clearInput();
}

function subrtact() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult -= enteredNumb;
    createAndWriteOutput('-', initialResult, currentResult);
    clearInput();
}

function multiply() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult *= enteredNumb;
    createAndWriteOutput('*', initialResult, currentResult);
    clearInput();
}

function divide() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult /= enteredNumb;
    createAndWriteOutput('/', initialResult, currentResult);
    clearInput();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subrtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);