

const form = document.getElementById('form');
const firstName = document.getElementById('loginFirstName');
const secondName = document.getElementById('loginLastName');
const password = document.getElementById('loginPassword');
const storedFirstName = localStorage.getItem('first-name')
const storedSecondName = localStorage.getItem('last-name');
const storedPassword = localStorage.getItem('valid-password');

form.addEventListener('submit', (e) =>{
    validateInputs();
    if(isFormValid() == true){
        form.submit();
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