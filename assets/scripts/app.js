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

const logEntries = []

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        enteredNumber: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries);
}

function clearInput() {
    userInput.value = null;
}

function add() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult += enteredNumb;
    createAndWriteOutput('+', initialResult, currentResult);
    writeToLog('ADD', initialResult, enteredNumb, currentResult);
    clearInput();
}

function subrtact() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult -= enteredNumb;
    createAndWriteOutput('-', initialResult, currentResult);
    writeToLog('SUBTRACT', initialResult, enteredNumb, currentResult);
    clearInput();
}

function multiply() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult *= enteredNumb;
    createAndWriteOutput('*', initialResult, currentResult);
    writeToLog('MULTIPLY', initialResult, enteredNumb, currentResult);
    clearInput();
}

function divide() {
    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    currentResult /= enteredNumb;
    createAndWriteOutput('/', initialResult, currentResult);
    writeToLog('DIVIDE', initialResult, enteredNumb, currentResult);
    clearInput();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subrtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);