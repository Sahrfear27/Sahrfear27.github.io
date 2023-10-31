
import promptSync from "prompt-sync";
const prompt = promptSync();


// Q1
// • create a file, prompt.js
// • add the following code and run the file
// • First need to install this function in node for the prompt
// • npm install prompt-sync
// • If do in parent directory do not need to do it inside any subfolders


let name = prompt("Enter your name");
console.log(`Hi ${name}`);


// Q2

// Following program asks user to input temperature value in degree Celsius and
// outputs the result in degree Fahrenheit. Make this program run on your
// machine.
const tempInCelsius = prompt("Enter value in celsius: ")
const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
console.log(tempInFahrenheit);


// Q3
// Write a program that computes volume of a cylinder based on user inputs for
// radius and height of a cylinder, using formula v = πr2h


const radius = prompt("Redius");
const height = prompt("Height");

const vol = Math.PI *  radius *  2 * height;
console.log(`Volume is ${vol}`)