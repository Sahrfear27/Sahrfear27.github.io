
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

function sendMessage() {
    let typingArea = document.getElementById('mainText');
    let typingMessage = document.getElementById('type-message').value;

    if (typingMessage) {
        let messageDiv = document.createElement('div');
        messageDiv.style.marginTop = '10px'; // Add some space between messages

        let p = document.createElement('p');
        if (activeUser === "Sagar") {
            p.innerHTML = activeUser + ': ' + typingMessage;
            p.style.color = "white";
            p.style.background = "blue";
            p.style.borderRadius = "10px";
            p.style.textAlign = "left";
            p.style.padding = "5px";
           
        } else if (activeUser === "Sahrfear") {
            p.innerHTML = activeUser + ': ' + typingMessage;
            p.style.color = "white";
            p.style.background = "#343A3F";
            p.style.borderRadius = "10px";
            p.style.textAlign = "right";
            p.style.padding = "5px";
        }
        messageDiv.appendChild(p);
        typingArea.appendChild(messageDiv);
        typingMessage.value = '';
    }
}

// Clear the chat
function clearChat(){
  let clearChat = document.getElementById('mainText');
  clearChat.innerHTML = '';

}