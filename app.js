// getting all the required elements
const form = document.querySelector('form');
const firstNameField = document.querySelector('.first-name');
const firstNameInput = document.getElementById('first-name');

const lastNameField = document.querySelector('.last-name');
const lastNameInput = document.getElementById('last-name');

const emailField = document.querySelector('.email');
const emailInput = document.getElementById('email');
const emailError = emailField.querySelector('.error-text');

const passwordField = document.querySelector('.password');
const passwordInput = document.getElementById('password');
const passwordError = passwordField.querySelector('.error-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (firstNameInput.value.trim() === '') {
    firstNameField.classList.add('shake', 'error');
  }

  if (lastNameInput.value.trim() === '') {
    lastNameField.classList.add('shake', 'error');
  }

  if (emailInput.value.trim() === '') {
    emailField.classList.add('shake', 'error');
  } else {
    checkEmail(); // if the email value is not empty check if the email passed by the user matches the required pattern.
  }

  if (passwordInput.value.trim() === '') {
    passwordField.classList.add('shake', 'error');
  } else {
    checkPassword(); //if the password value is not empty check if the password passed by the user is less than 8 characters
  }

  removeError();
});

emailInput.addEventListener('input', () => {
  checkEmail(); // calling the function in the email input event listener to watch out for any changes made by the user in the email input
});

passwordInput.addEventListener('input', () => {
  checkPassword(); // calling the function in the password input event listener to watch out for any changes  made by the user made in the password input
});

// remove the error notification after 1min
function removeError() {
  setTimeout(() => {
    firstNameField.classList.remove('shake', 'error');
    lastNameField.classList.remove('shake', 'error');
    emailField.classList.remove('shake', 'error');
    passwordField.classList.remove('shake', 'error');
  }, 1000);
}

// function to check if the email matches the regEx validation pattern
function checkEmail() {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailInput.value.match(pattern)) {
    emailField.classList.add('shake', 'error');

    emailInput.value
      ? (emailError.textContent = 'Looks like this is not an email')
      : (emailError.textContent = 'email cannot be empty');
  } else {
    emailField.classList.remove('shake', 'error');
  }
}

// function to check if the password is less than 8 characters
function checkPassword() {
  if (passwordInput.value.length < 8) {
    passwordField.classList.add('shake', 'error');

    passwordInput.value.trim() !== ''
      ? (passwordError.textContent = 'password must be 8 characters or more')
      : (passwordError.textContent = 'password cannot be empty');
  } else {
    if (passwordInput.value.length > 8)
      passwordField.classList.remove('shake', 'error');
  }
}
