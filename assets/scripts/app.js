const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, '');
    userInput.value = '';
}

addBtn.addEventListener('click', add);