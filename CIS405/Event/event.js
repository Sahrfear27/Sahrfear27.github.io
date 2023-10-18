function favoriteCars(){
    let x = document.getElementById('fcars').value;
    document.getElementById('selected').innerHTML = "You selected " + x;
}

// Function to determine the user input
function myColors(){
    let y = document.getElementById('choices').value;
    if(y === "Pupple"){
        document.getElementById('text').style.backgroundColor = 'purple';
    }
    else if(y === 'Orange')
    {
        document.getElementById('text').style.backgroundColor = 'orange';
    }
    else{
        document.getElementById('text').style.backgroundColor = 'Blue';
    }
}


function changeDisplay()
{
    document.getElementById('showText').innerHTML = "Bnanas are yellow in color";
    // document.getElementById('showText').style.display ='none';
    // let count = 1;  
    // for(let i = 1; i < 2; i++)
    //     document.getElementById('showText').innerHTML = "Bnanas are yellow in color";
  
}