



const form = document.getElementById('form');
const firstName = document.getElementById('loginFirstName');
const secondName = document.getElementById('loginLastName');
const password = document.getElementById('loginPassword');

// Retrive the data from the local storage
const storedFirstName = localStorage.getItem('first-name')
const storedSecondName = localStorage.getItem('last-name');
const storedPassword = localStorage.getItem('valid-password');


// Check if form is valid
form.addEventListener('submit', (e) =>{
    validateInputs();
    const firstUser = firstName.value;
    const secondUser = secondName.value;
    if(isFormValid() == true){
        form.submit();
        localStorage.setItem('first-User',firstUser);
        localStorage.setItem('second-user', secondUser);

    }else{
        e.preventDefault();  
    }
})

function isFormValid() {
    const inputContainers = form.querySelectorAll('.form_group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result =false;
        }
    })
    return result;
}

const setError =(element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};
const setSuccess = (element) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText =' ';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const secondNameValue = secondName.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue !== storedFirstName){
        setError(firstName,'invalid firstname');
    }else{
        setSuccess(firstName);
    }

    if(secondNameValue!==storedSecondName){
        setError(secondName,'invalid secondname');   
    }else{
        setSuccess(secondName);
    }

    if(passwordValue !== storedPassword){
        setError(password,"Invalid password");
    }else{
        setSuccess(password);
    }
};