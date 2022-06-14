const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserInputNum() {
  return +userInput.value;
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBefore, calcNumb) {
  const calcDescription = `${resultBefore} ${operator} ${calcNumb}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

const logEntries = [];

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    enteredNumber: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function clearInput() { 
  userInput.value = null;
}

function calculationType(operationType) {

    const enteredNumb = getUserInputNum();

  if (
    operationType !== 'ADD' &&
    operationType !== 'SUBTRACT' &&
    operationType !== 'MULTIPLY' &&
    operationType !== 'DIVIDE' || 
    !enteredNumb
  ) {
    alert('Enter valid number!');
    return;
  }

  const initialResult = currentResult;
  let operator;

  if (operationType === 'ADD') {
    operator = '+';
    currentResult += enteredNumb;
    clearInput();
  } else if (operationType === 'SUBTRACT') {
    operator = '-';
    currentResult -= enteredNumb;
    clearInput();
  } else if (operationType === 'MULTIPLY') {
    operator = '*';
    currentResult *= enteredNumb;
    clearInput();
  } else if (operationType === 'DIVIDE') {
    operator = '/';
    currentResult /= enteredNumb;
    clearInput();
  }
  createAndWriteOutput(operator, initialResult, enteredNumb);
  writeToLog(operationType, initialResult, enteredNumb, currentResult);
}

function add() {
  calculationType('ADD');
}

function subrtact() {
  calculationType('SUBTRACT');
}

function multiply() {
  calculationType('MULTIPLY');
}

function divide() {
  calculationType('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subrtact);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
