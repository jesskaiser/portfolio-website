(function() {
  let form = document.querySelector('#contact-form');
  let emailField = document.querySelector('#contact-email');
  let phoneField = document.querySelector('#contact-telephone');
  let firstName = document.querySelector('#fname');
  let lastName = document.querySelector('#lname');

  function showErrorMessage(input, errorMessage) {
    // .input-wrapper DIV
    let inputWrapper = input.parentElement;
    // remove an error message
    let error = inputWrapper.querySelector('.error-message');
    if (error) {
      inputWrapper.removeChild(error);
    }

    // add an error if the errorMessage isn’t null
    if (errorMessage) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = errorMessage;
      inputWrapper.appendChild(error);
    }
  }

  // email field validation
  function validateEmail() {
    let value = emailField.value;
    // if the field is empty --> mandatory field
    if (!value) {
      showErrorMessage(emailField, 'Email is a required field.');
      return false;
    }
    // if it doesn't contain '@' 
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailField, 'You must enter a valid email address.');
      return false;
    }
    // if it doesn't contain '.'
    if (value.indexOf('.') === -1) {
      showErrorMessage(emailField, 'You must enter a valid email address.');
      return false;
    }
    // no error message
    showErrorMessage(emailField, null);
    return true;

  }

  // phone number field validation
  function validatePhoneNumber() {
    let value = phoneField.value;
    // regex pattern to match
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/im;
    // if the field is not empty --> not mandatory field
    if (value) {
      if (!regex.test(value)) {
        showErrorMessage(phoneField, 'You must enter a valid phone number');
        return false;
      }
    }
    // no error message
    showErrorMessage(phoneField, null);
    return true;
  }

  function validateName(nameField) {
    let value = nameField.value;
    // console.log(value);
    let regex = /^[a-zA-Z]*$/g;
    if (!value) {
      showErrorMessage(nameField, 'Name is required.');
      return false;
    }
    if (!regex.test(value)) {
      showErrorMessage(nameField, 'You must enter a valid name.');
      return false;
    }
    //no error message
    showErrorMessage(nameField, null);
    return true;
  }
  // validate the form
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPhone = validatePhoneNumber();
    return isValidEmail && isValidPhone;
  }

  // event listener for the form 
  form.addEventListener('submit', (e) => {
    // Do not submit to the server
    e.preventDefault();
    // if form validation is successful-> errorMessage alert
    if (validateForm()) {
      alert('Success!');
    }
  });
  // event listener for input field
  emailField.addEventListener('input', validateEmail);
  phoneField.addEventListener('input', validatePhoneNumber);
  firstName.addEventListener('input', function() {
    validateName(firstName);
  });
  lastName.addEventListener('input', function() {
    validateName(lastName);
  });
  // lastName.addEventListener('input', validateName());

  // return
})();