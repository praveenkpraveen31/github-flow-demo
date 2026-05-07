// Main application with validation

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Result: ' + result;
    resultDiv.classList.add('show');
}

// Validation functions
function validateInput(value) {
    if (!value || value.trim() === '') {
        return false;
    }
    return true;
}

// Add with validation
function add(a, b) {
    if (!validateInput(a) || !validateInput(b)) {
        displayResult('Invalid input');
        return;
    }
    const result = parseFloat(a) + parseFloat(b);
    displayResult(result);
}

// Multiply with validation
function multiply(a, b) {
    if (!validateInput(a) || !validateInput(b)) {
        displayResult('Invalid input');
        return;
    }
    const result = parseFloat(a) * parseFloat(b);
    displayResult(result);
}

// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});
