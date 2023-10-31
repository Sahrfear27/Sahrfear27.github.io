import promptSync from "prompt-sync";
const prompt = promptSync();


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