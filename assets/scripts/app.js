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

function calculationType(operationType) {
    if (
      operationType !== 'ADD' && 
      operationType !== 'SUBTRACT' && 
      operationType !== 'MULTIPLY' && 
      operationType !== 'DIVIDE'
    ) {
      return;
    }

    const enteredNumb = getUserInputNum();
    const initialResult = currentResult;
    let operator;
    
    if(operationType === 'ADD') {
        operator = '+'
        currentResult += enteredNumb;
    } else if(operationType === 'SUBTRACT') {
        operator = '-'
        currentResult -= enteredNumb;
    } else if (operationType === 'MULTIPLY') {
        operator = '*';
        currentResult *= enteredNumb;
    } else if (operationType === 'DIVIDE') {
        operator = '/';
        currentResult /= enteredNumb;
    }
    createAndWriteOutput(operator, initialResult, enteredNumb);
    writeToLog(operationType, initialResult, enteredNumb, currentResult);
}

function add() {
    calculationType('ADD')
    clearInput();
}

function subrtact() {
    calculationType('SUBTRACT');
    clearInput();
}

function multiply() {
    calculationType('MULTIPLY');
    clearInput();
}

function divide() {
    calculationType('DIVIDE');
    clearInput();
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subrtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);