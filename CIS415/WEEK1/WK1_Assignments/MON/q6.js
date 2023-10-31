import promptSync from "prompt-sync";
const prompt = promptSync();

// Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the /
// and % operators to find the digits.
// Input Output
// 123 6
// 102 3
// 8   8

let userInput = parseInt(prompt("Enter an integer number"));
// Using the % and / operator
let sum = 0;
// Make the user input to be abs
let number = Math.abs(userInput);
while(number > 0){
    let lastDigit = number % 10;
    sum += lastDigit;

    number = Math.floor(number/10)
}
console.log(`The sum is ${sum}`);

// Using the array.form() method
// type case the string into an integer
let myFunc = num => Number(num);
let numList = Array.from(String(userInput),myFunc);
let sum2 = 0;
for(let num of numList){
    sum2 += num;
}
console.log(sum2);
