let num = 2 + 2;
switch(num) 
{
    case 2: //The same as if num if equal to 2. The cases checks for strict equality
        console.log("The value is small"); 
        break;
    case 5:
        console.log("The value is large");
        break;
    case 4:
        console.log("Exactly");
        break;
    case 6:
        console.log("The value is too large");
        break;
    default:
        console.log("I dont know this value");
}

// Rewrite this using the if else statement
switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

//   Using if else
if(browser === 'Edge'){
    console.log("You've got the Edge")
}
else if((browser === "Chrome") || (browser === "Firefox") || (browser === "Safari") || (browser === "Opera")){
    console.log("Okay we support these browsers too");
}
else{
    console.log("We hope that this page looks ok")
}


// Rewrite  this using the switch statement
 let a = +prompt('a?', '');

if (a == 0) {
    alert( 0 );
  }
  if (a == 1) {
    alert( 1 );
  }
  
  if (a == 2 || a == 3) {
    alert( '2,3' );
  }

  switch(a){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
  }