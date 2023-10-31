
import promptSync from "prompt-sync";
const prompt = promptSync();



// Programming homeworks
// Q1
// Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales from $300 and up to but less than $500
// • 2% for sales $500 or above
// • If the salesman is not salaried then
// • 2% for sales from $300 and up to but less than $500
// • 3% for sales $500 or above


// let saleStatus = prompt("Enter the status of the sales ( salaried or not salaried)");
// let sales = prompt("Enter the status of the sales ( salaried or not salaried)");


// const MIN_COMMISSION = 300;
// const MAX_COMMISSION = 500;
// let saleCommission = null;
// if(saleStatus === "salaried"){
//     if(sales < MIN_COMMISSION)
//     {
//         saleCommission = 0;
//     }
//     else if((sales >= MIN_COMMISSION) || (sales <= MAX_COMMISSION))
//     {
//         saleCommission = (1/100) * MIN_COMMISSION;
//     }
//     else{
//         saleCommission = (2/100) * MIN_COMMISSION;
//     }
// }
// else{
//     if(sales >= MIN_COMMISSION || sales <= MAX_COMMISSION){
//         saleCommission = (2/100) * MIN_COMMISSION;  
//     }
//     else if(sales >= MAX_COMMISSION)
//     {
//         saleCommission = (3/100) * MIN_COMMISSION;
//     }
// }

// console.log(`The sale commission for ${sales} sales is ${saleCommission}`);

// Q2
// Write a loop that continually prompts for age until you enter age older than 18
// • Write both while and do while versions

// Using the do while loop
// let userAge = null; //set to nothing
// do{
//    userAge = prompt("Enter your age");
// }
// while(userAge > 18);


// // Using the while loop
// let userAge2 = prompt("Enter your age");

// while(userAge2 > 18){
//    userAge2 = prompt("Enter your age")
// }

// Q3
// . Make a defining table and program to print out the balance of a savings account that
// compounds interest monthly. Prompt the user for the
// • initial amount
// • annual interest rate
// • number of years to compound
// Do not use the mathematical formula for compound interest. Use a loop that calculates the
// interest for each month and compounds that over the iteration—i.e., add it to the current
// balance. Ask the professor or TA if this is not clear.

const initialAmount = parseFloat(prompt("Eter the initial amount"));
const ANNUAL_INTEREST_RATE = parseFloat(prompt("Eter the  interest rate"));
const NUM_YEARS = parseFloat(prompt("Eter the num of  years"));

// Validate the input
if(isNaN(initialAmount) || isNaN(ANNUAL_INTEREST_RATE) || isNaN(NUM_YEARS))
{
    console.log(`Input are invalid. Please provide the amput`)
}
else 
{
    // Calculate monthly interest
    let monthlyInterestRate = (ANNUAL_INTEREST_RATE / 100) / 12;
    let currentBalance = initialAmount;
   

    // Loop through the NUM_YEARS and calculate the interest for each month
    for(let year = 1; year <= NUM_YEARS; year++)
    {
        // Loop through the month
        for (let month=1; month<= 12; month++)
        {
            // Calculate the interest rate for month and add it to the balance
           let monthlyInterestAmount = currentBalance * monthlyInterestRate;
            currentBalance += monthlyInterestAmount;
        }
        
    }
    console.log(currentBalance);
}


// Q4
// Write code to print the number patterns on the console
// 12345
// 12345
// 12345
// 12345
// 12345
// let count1 = "";
// for (let i = 1; i < 6; i++) {

//     for (let j = 1; j < 6; j++) {
//         count1 += j;
       
//     }
//     console.log(count1);
//     count1 = "";
// }
// console.log("\n")
// // Other way
// for (let k = 1; k <= 5; k++) {
//     const patterns = '12345';
//     console.log(patterns);
// }

// console.log("\n")
// // 1
// // 22
// // 333
// // 4444
// // 55555
// for (let a = 1; a <= 5; a++) {
//     let str2 = ""
//     for (let c = 1; c <= a; c++) {
//        str2 += a;
       
//     }
//     console.log(str2);
// }

// // Other way
// for (let t = 0; t <= 5; t++) {
//     console.log(String(t).repeat(t));
// }

// console.log("\n");

// // 55555
// // 4444
// // 333
// // 22
// // 1
// for (let m = 5; m > 0; m--) {
//     let pattern2 = ""
//     for (let n = m; n > 0; n--) {
//         pattern2 += m;
//     }
//     console.log(pattern2);
    
// }


// Q5
// Cost of House Down Payment
// Make a defining table and then write a program that calculates down payment for a home loan based
// on following rules. Your program should prompt for the cost and write the down payment amount to
// the console.

//      Cost of House                Down Payment
//      $0 to less than 50K          5% of the cost
//      $50K to less than 100K       $1000 + 10% of (cost - $50K)
//      $100K to less than 200K      $2000 + 15% of (cost - $100K)
//      $200K and above              $5000 + 10% of (cost - $200K)

// const houseCost = parseInt(prompt("Enter the cost of the house"));
// let downPayment = null;
// if(isNaN(houseCost)){
//     console.log("Please enter a numeric cost")
// }
// else if((houseCost >= 0) && (houseCost < 50000)){
//     downPayment = (5/100) * houseCost;
//     console.log(`The down payment is $:${downPayment.toFixed(2)}`);
// }
// else if((houseCost >= 50000) && (houseCost < 100000)){
//     downPayment = (1000) + ((10/100) * (houseCost - 50));
//    console.log(`The down payment is $:${downPayment.toFixed(2)}`);
// }
// else if((houseCost >= 100000) && (houseCost < 200000)){
//     downPayment = (2000) + ((15/100) * (houseCost - 100));
//    console.log(`The down payment is $:${downPayment.toFixed(2)}`);
// }
// else{
//     downPayment = (5000) + ((10/100) * (houseCost - 200));
//    console.log(`The down payment is $:${downPayment.toFixed(2)}`);
// }

// Q6
// Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the /
// and % operators to find the digits.
// Input Output
// 123 6
// 102 3
// 8 8

// let userInput = parseInt(prompt("Enter an integer number"));
// // Using the % and / operator
// let sum = 0;
// // Make the user input to be abs
// let number = Math.abs(userInput);
// while(number > 0){
//     let lastDigit = number % 10;
//     sum += lastDigit;

//     number = Math.floor(number/10)
// }
// console.log(`The sum is ${sum}`);

// // Using the array.form() method
// // type case the string into an integer
// let myFunc = num => Number(num);
// let numList = Array.from(String(userInput),myFunc);
// let sum2 = 0;
// for(let num of numList){
//     sum2 += num;
// }
// console.log(sum2);
