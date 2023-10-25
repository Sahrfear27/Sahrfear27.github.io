
let activeUser = "";

function setActiveUser(user)
 {
    activeUser = user;
    let activeUserElement = document.getElementById('active-user');
    activeUserElement.style.color = "black";
    activeUserElement.style.textShadow = "1px 12px 9px rgba(0,0,0,0.6)";
    activeUserElement.style.fontWeight = "bold";
    activeUserElement.style.letterSpacing = "3px";


    activeUserElement.innerHTML = user + " is typing...";
}

function sendMessage() 
{
    let typingArea = document.getElementById('mainText');
    let typingMessage = document.getElementById('type-message');
    let p = document.createElement('p');
    p.innerHTML = activeUser + ': ' + typingMessage.value;
    

    if (activeUser === "Sagar")
    {
        p.style.color="white";
        p.style.background="blue";
        p.style.borderRadius="10px";
        p.style.textAlign="left";
        p.style.padding="5px";
        p.style.width = "max-content"
        // p.style.textShadow = "1px 2px 7px rgba(0,0,0,0.6)";

     

    } else if (activeUser === "Sahrfear") 
    {
        p.style.color="white";
        p.style.background="#343A3F";
        p.style.borderRadius="10px";
        p.style.textAlign="right";
        p.style.padding="5px";
        // p.style.textShadow = "1px 2px 7px rgba(0,0,0,0.6)";
       
    }

    typingArea.appendChild(p);
    typingMessage.value = '';
}
