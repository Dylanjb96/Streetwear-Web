// JavaScript Code for Streetwear Login Page

// DOM elements
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

// Event listener for switching to sign-up form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})

// Event listener for switching to sign-in form
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})

// Validation for sign-up form
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = signUpForm.querySelector('input[type="text"]');
    const emailInput = signUpForm.querySelector('input[type="email"]');
    const passwordInput = signUpForm.querySelector('input[type="password"]');

    // Clear previous errors
    clearErrors(signUpForm);

    // Get form input values
    const name = nameInput.value.trim();
    console.log(name); // Check the value of the name input
    console.log(/[A-Z]/.test(name)); // Check if the regular expression matches

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate input fields
    if (!nameInput.value.trim()) {
        displayError(nameInput, "Please enter your name.");
        return;
    } else if (!emailInput.value.trim()) {
        displayError(emailInput, "Please enter your email.");
        return;
    } else if (!passwordInput.value.trim()) {
        displayError(passwordInput, "Please enter your password.");
        return;
    } else if (password.length !== 7) {
        displayError(passwordInput, "Password must be 7 letters long or more.");
        return;
    } else if (!/[A-Z]/.test(name)) {
        displayError(nameInput, "Must contain at least one capital letter.");
        return;
    } else {
        const validDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
        const emailDomain = email.split('@')[1];
        if (!validDomains.includes(emailDomain)) {
            displayError(emailInput, "Email must be from Gmail, Outlook, or Yahoo domains.");
            return;
        }
    }
});


// Validation for sign-in form
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = signInForm.querySelector('input[type="email"]');
    const passwordInput = signInForm.querySelector('input[type="password"]');

    // Clear previous errors
    clearErrors(signInForm);

    // Get form input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate input fields
    if (!emailInput.value.trim()) {
        displayError(emailInput, "Please enter your email.");
        return;
    } else if (!passwordInput.value.trim()) {
        displayError(passwordInput, "Please enter your password.")
        return;
    } else if (password.length !== 7) {
        displayError(passwordInput, "Password must be 7 letters long or more.");
        return;
    } else {
        const validDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
        const emailDomain = email.split('@')[1];
        console.log(email);
        console.log(emailDomain);
        console.log(validDomains);

        if (!validDomains.includes(emailDomain)) {
            displayError(emailInput, "Email must be from Gmail, Outlook, or Yahoo.");
            return;
        }
    }
});

// Function to display error messages
function displayError(inputElement, message) {
    inputElement.classList.add('input-error');
    const errorElement = document.createElement('p');
    errorElement.textContent = message;
    errorElement.classList.add('error-message');
    inputElement.parentNode.appendChild(errorElement);
}

// Function to clear error messages
function clearErrors(form) {
    const errorElements = form.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.parentNode.removeChild(element);
    });

    const inputErrorElements = form.querySelectorAll('.input-error');
    inputErrorElements.forEach(element => {
        element.classList.remove('input-error');
    });
}

// Loader animation
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disapper");
}