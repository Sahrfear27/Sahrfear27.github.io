
let activeUser = "";

function setActiveUser(user)
 {
    activeUser = user;
    let activeUserElement = document.getElementById('active-user');
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
        p.style.border="1px solid";
          p.style.borderRadius="10px";
        p.style.textAlign="left";
        p.style.padding="5px";

    } else if (activeUser === "Sahrfear") 
    {
        p.style.color="white";
        p.style.background="grey";
        p.style.border="1px solid";
        p.style.borderRadius="10px";
        p.style.textAlign="right";
        p.style.padding="5px";
    }

    typingArea.appendChild(p);
    typingMessage.value = '';
}
