
const form = document.getElementById("form");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const newPass = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");

// Adding event to submit
form.addEventListener("submit", (e) => {
    validateInputs();
    const fNameValue = firstName.value;
    const lNameValue = lastName.value;
    const setPassword = confirmPassword.value; 
    if(isFormValid() == true){
        form.submit();
       localStorage.setItem('first-name', fNameValue);
       localStorage.setItem('last-name', lNameValue);
       localStorage.setItem('valid-password', setPassword);
  }else{
      e.preventDefault();
  }
  
});


//   Validating form for each input error id any
function isFormValid() {
  const inputContainers = form.querySelectorAll('.form_group');
  let result =true;
  inputContainers.forEach((container)=>{
      if(container.classList.contains('error')){
          result=false;
      }
  })
  return result;
}

// setting behavior of error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// setting behavior of success
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = " ";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};



// Validating the inputData
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const newPassValue = newPass.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  // VAalidation for first name
  if (firstNameValue === "") {
    setError(firstName, "Firstname is required");
  } else {
    setSuccess(firstName);
  }

  // Validation for last name
  if (lastNameValue === "") {
    setError(lastName, "Lastname is required");
  } else {
    setSuccess(lastName);
  }

  // Validation for newPassword
  if (newPassValue === "") {
    setError(newPass, "Password is required");
  } else if (newPassValue.length < 6) {
    setError(newPass, "Password must be atleast 6 character");
  } else {
    setSuccess(newPass);
  }

  // Validation for confirm password
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please confirm your password");
  } else if (confirmPasswordValue !== newPassValue) {
    setError(confirmPassword, "Password doesn't match");
  } else {
    setSuccess(confirmPassword);
  }
};
