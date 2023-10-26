
let activeUser = "";

function setActiveUser(user)
 {
    activeUser = user;
    let activeUserElement = document.getElementById('active-user');
    activeUserElement.style.color = "black"
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
        // p.style.margin="10px";
        // p.style.marginTop="20px";

    } else if (activeUser === "Sahrfear") 
    {
        p.style.color="white";
        p.style.background="#343A3F";
        p.style.borderRadius="10px";
        p.style.textAlign="right";
        p.style.padding="5px";
        // p.style.float = "right";
        // p.style.width = "max-content"
        // p.style.margin="10px";
        // p.style.marginBottom="20px";
       
    }

    typingArea.appendChild(p);
    typingMessage.value = '';
}