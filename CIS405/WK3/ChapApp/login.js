const paragraph = document.querySelector('#para');

const params = new URLSearchParams(window.location.search);

params.forEach((key,value)=>{
    paragraph.append(`${key}= ${value}`);
    paragraph.append(document.createElement('br'));
})


localStorage.setItem('first-name', fNameValue);
localStorage.setItem('last-name', lNameValue);
localStorage.setItem('valid-password', setPassword);

// Get the first name value

let firstName = localStorage.setItem('first-Name', )


let  = localStorage.getItem('');
localStorage.setItem('signInDetails',JSON.stringify(accessToLogInPage));



// Validating the inputData
const validateInputs = () => {
const firstNameValue = first-Name.value.trim();
const lastNameValue = last-Name.value.trim();
const password = newPass.value.trim();
  
}

function signIn(){
    let submitButton = document.getElementById('submit');

}
    // VAalidation for first name
//     if (firstNameValue === "") {
//       setError(firstName, "Firstname is required");
//     } else {
//       setSuccess(firstName);
//     }
  
//     // Validation for last name
//     if (lastNameValue === "") {
//       setError(lastName, "Lastname is required");
//     } else {
//       setSuccess(lastName);
//     }
  
//     // Validation for newPassword
//     if (newPassValue === "") {
//       setError(newPass, "Password is required");
//     } else if (newPassValue.length < 6) {
//       setError(newPass, "Password must be atleast 6 character");
//     } else {
//       setSuccess(newPass);
//     }
  
//     // Validation for confirm password
//     if (confirmPasswordValue === "") {
//       setError(confirmPassword, "Please confirm your password");
//     } else if (confirmPasswordValue !== newPassValue) {
//       setError(confirmPassword, "Password doesn't match");
//     } else {
//       setSuccess(confirmPassword);
//     }
//   };
  