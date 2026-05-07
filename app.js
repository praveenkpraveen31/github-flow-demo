// Main application

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Result: ' + result;
    resultDiv.classList.add('show');
}

// Override button functions to show results
function add(a, b) {
    const result = window.add ? a + b : a + b;
    displayResult(result);
}

function multiply(a, b) {
    const result = a * b;
    displayResult(result);
}
