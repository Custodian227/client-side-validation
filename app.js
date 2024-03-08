const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const zipInput = document.querySelector('#zip');
const zipError = document.querySelector('#zip-error');

const countryCodeInput = document.querySelector('#country');
const countryCodeError = document.querySelector('#country-error');

const passwordInput = document.querySelector('#password');
const passwordErrorLength = document.querySelector('#password-error-length');
const passwordUpperError = document.querySelector('#password-error-upper');
const passwordLowerError = document.querySelector('#password-error-lower');
const passwordDigitError = document.querySelector('#password-error-digit');
const passwordSpecialCharacterError = document.querySelector('#password-error-special');

const confirmationPasswordInput = document.querySelector('#confirmation');
const confirmationPasswordError = document.querySelector('#confirmation-error');

const submitButton = document.querySelector('#submit');

emailInput.addEventListener('blur', () => {
    validateEmail(emailInput.value);
});

zipInput.addEventListener('blur', () => {
    validateZipCode(zipInput.value);
});

countryCodeInput.addEventListener('blur', () => {
    validateCountryCode(countryCodeInput.value);
});

passwordInput.addEventListener('blur', () => {
    validatePassword(passwordInput.value);
});

confirmationPasswordInput.addEventListener('blur', () => {
    validateConfirmatiorPassword(passwordInput.value, confirmationPasswordInput.value);
});

submitButton.addEventListener('click', () => {
    const emailValidation = validateEmail(emailInput.value);
    const zipValidation = validateZipCode(zipInput.value);
    const countryCodeValidation = validateCountryCode(countryCodeInput.value);
    const passwordValidation = validatePassword(passwordInput.value);
    const confirmationPasswordValidation =     validateConfirmatiorPassword(passwordInput.value, confirmationPasswordInput.value);

    if (emailValidation && zipValidation && countryCodeValidation && passwordValidation && confirmationPasswordValidation) {
        alert('The form has been filled out successfully!');
    } else {
        alert('The form is not filled out correctly! Try again.');
    }
});

function validateEmail(email) {
    const constraint = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}', '');
    let validationResult = false;

    if (email == '') {
        emailError.textContent = 'This field is required!';

        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');

        validationResult = false;
    } else if (!constraint.test(email)) {
        emailError.textContent = 'The value does not match the email format! [ some@thing.co ]';

        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');

        validationResult = false;
    } else if (constraint.test(email)) {
        emailError.textContent = '';

        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');

        validationResult = true;
    }

    return validationResult;
}

function validateCountryCode(countryCode) {
    const constraint = new RegExp('^[A-Z]{2}$', '');
    let validationResult = false;

    if (countryCode == '') {
        countryCodeError.textContent = 'This field is required!';

        countryCodeInput.classList.remove('valid');
        countryCodeInput.classList.add('invalid');

        validationResult = false;
    } else if (!constraint.test(countryCode)) {
        countryCodeError.textContent = 'The value does not match the country code format! [LL]';

        countryCodeInput.classList.remove('valid');
        countryCodeInput.classList.add('invalid');

        validationResult = false;
    }
    else if (constraint.test(countryCode)) {
        countryCodeError.textContent = '';

        countryCodeInput.classList.remove('invalid');
        countryCodeInput.classList.add('valid');

        validationResult = true;
    }

    return validationResult;
}

function validateZipCode(zip) {
    const constraint = new RegExp('^[0-9]{5}(?:-[0-9]{4})?$', '');
    let validationResult = false;

    if (zip == '') {
        zipError.textContent = 'This field is required!';

        zipInput.classList.remove('valid');
        zipInput.classList.add('invalid');

        validationResult = false;
    } else if (!constraint.test(zip)) {
        zipError.textContent = 'The value does not match the ZIP code format! [ NNNNN or NNNNN-NNNN ]';

        zipInput.classList.remove('valid');
        zipInput.classList.add('invalid');

        validationResult = false;
    } else if (constraint.test(zip)) {
        zipError.textContent = '';

        zipInput.classList.remove('invalid');
        zipInput.classList.add('valid');

        validationResult = true;
    }

    return validationResult;
}

function validatePassword(password) {
    const upperCaseConstraint = new RegExp('(?=.*[A-Z])', '');
    const lowerCaseConstraint = new RegExp('(?=.*[a-z])', '');
    const digitConstraint = new RegExp('(?=.*[0-9])', '');
    const specialCharacterConstraint = new RegExp('(?=.*[!@#$%^&*-_])', '');

    let validationResult = false;

    if (password == '') {
        passwordErrorLength.textContent = 'This field is required!';
        passwordUpperError.textContent = '';
        passwordLowerError.textContent = '';
        passwordDigitError.textContent = '';

        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');

        validationResult = false;
    }
    //When the password input contains some value
    else if (password != null) {
        //Checking the validity with the length constraint
        if (password.length < 8) {
            passwordErrorLength.textContent = 'The password must be at least 8 characters long!';

            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');

            validationResult = false;
        }
        if (password.length >= 8) {
            passwordErrorLength.textContent = '';
        }
        //Checking the validity with the upper case constraint
        if (!upperCaseConstraint.test(password)) {
            passwordUpperError.textContent = 'The password must contain at least one upper case letter!';

            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');

            validationResult = false;
        }
        if (upperCaseConstraint.test(password)) {
            passwordUpperError.textContent = '';
        }
        //Checking the validity with the lower case constraint
        if (!lowerCaseConstraint.test(password)) {
            passwordLowerError.textContent = 'The password must contain at least one lower case letter!';

            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');

            validationResult = false;
        }
        if (lowerCaseConstraint.test(password)) {
            passwordLowerError.textContent = '';
        }
        //Checking the validity with the digit constraint
        if (!digitConstraint.test(password)) {
            passwordDigitError.textContent = 'The password must contain at least one digit!';

            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');

            validationResult = false;
        }
        if (digitConstraint.test(password)) {
            passwordDigitError.textContent = '';
        }
        //Checking the validity with the digit constraint
        if (!specialCharacterConstraint.test(password)) {
            passwordSpecialCharacterError.textContent = 'The password must contain at least one special character! [ #?!@$%^&*-_ ]';

            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');

            validationResult = false;
        }
        if (specialCharacterConstraint.test(password)) {
            passwordSpecialCharacterError.textContent = '';
        }
        //A scenario where all the validations have passed
        if (password.length >= 8 
            && upperCaseConstraint.test(password)
            && lowerCaseConstraint.test(password)
            && digitConstraint.test(password) 
            && specialCharacterConstraint.test(password)) 
        {
            passwordErrorLength.textContent = '';
            passwordUpperError.textContent = '';
            passwordLowerError.textContent = '';
            passwordDigitError.textContent = '';
            passwordSpecialCharacterError.textContent = '';

            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');

            validationResult = true;
        }
    }

    return validationResult;
}

function validateConfirmatiorPassword(originalPassword, confirmationPassword) {
    let validationResult = false;

    if (originalPassword !== confirmationPassword) {
        confirmationPasswordError.textContent = 'Passwords do not match!';

        confirmationPasswordInput.classList.remove('valid');
        confirmationPasswordInput.classList.add('invalid');

        validationResult = false;
    } else if (originalPassword === confirmationPassword) {
        confirmationPasswordError.textContent = '';

        confirmationPasswordInput.classList.remove('invalid');
        confirmationPasswordInput.classList.add('valid');

        validationResult = true;
    }

    return validationResult;
}