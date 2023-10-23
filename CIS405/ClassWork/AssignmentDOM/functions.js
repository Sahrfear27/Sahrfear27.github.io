// OkayButton.html
function buttonClicked(){
    // Assign the document element to a variable
    let okayButton = document.getElementById('ok');
    okayButton.innerHTML = "OkayClicked";
    okayButton.style.background ="green";
    okayButton.style.color = "white";
}
function stayle()
{
    let stylePara = document.getElementById('para');
    stylePara.style.color = "red"
}


// FullName.html
function fullName(){
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let name = firstName.value + " " + lastName.value;

    let fullName = document.getElementById('fullName');
    fullName.value = name;
    
}

// Query Selectors
function styleElement(){
    // First div
    let bg = document.querySelector(".example");
    bg.style.backgroundColor ="blue";
    bg.style.color ="white";

    // Tag selectors ===> Will style the first p in the document
    let tags = document.querySelector("p,h1");
    tags.style.textAlign ="center"
    tags.style.color ="red"

    // Id selectro ==> Can also use the document.getElementById
    let ids = document.querySelector("#myId");
    ids.style.border = "1px solid black";
    ids.style.backgroundColor = "black";
    ids.style.color = "white";


    // All input tages ===> use .querySelectorAll: It is a collection or node list.
    // You can't directely set a style to a node list
    let someInput = document.querySelectorAll('input[type="text"]');
    // for(let ele of someInput)
    // {
    //     ele.style.color ="white";
    //     ele.style.backgroundColor ="black";
    // }
    // Also use foreach loop
    someInput.forEach(function(input) {
        input.style.color ="blue"
    })

    // First p of div
    let firstP = document.querySelector('div > p');
    firstP.style.color = "brown";

    //  first a element
    let firstA = document.querySelector('a[target]');
    firstA.style.textDecoration = "none";
    firstA.style.color = "purple";
}


// Swap Numbers
function swapNumbers(){
    let firstNumber = document.getElementById('num1');
    let secondNumber = document.getElementById('num2');

    // console.log(firstNumber,secondNumber)
    // Create a temporary variable
    let numbers = firstNumber.value;
    firstNumber.value = secondNumber.value;
    secondNumber.value = numbers
}