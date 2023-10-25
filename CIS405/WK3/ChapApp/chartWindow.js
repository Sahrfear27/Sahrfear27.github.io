
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
    let typingMessage = document.getElementById('type-message').value;
    let p = document.createElement('p');
    let br = document.createElement('br');
    if((typingMessage) && (activeUser === "Sagar"))
    {
        p.innerHTML = activeUser + ': ' + typingMessage;
        p.style.color="white";
        p.style.background="blue";
        p.style.borderRadius="10px";
        p.style.textAlign="left";
        p.style.padding="5px";
        p.style.width = "max-content";
        // p.style.display = "inline-block";
        p.style.float = "left";
    }
    else if((typingMessage) && (activeUser === "Sahrfear"))
    {
        p.innerHTML = activeUser + ': ' + typingMessage ;
        p.style.color="white";
        p.style.background="#343A3F";
        p.style.borderRadius="10px";
        p.style.textAlign="right";
        p.style.padding="5px";
        // p.style.display = "inline-block";
        p.style.float = "right";
    }
    else{
        p.innerHTML = "";
        p.style.color = "red"
    }
    typingArea.appendChild(p);
    // Append br to the typing area
    // typingArea.appendChild(br);
    typingMessage.value = '';
}


function clearChat(){
    let clearChat = document.getElementById('mainText');
    clearChat.style.display = "none";
    clearChat = "";

}