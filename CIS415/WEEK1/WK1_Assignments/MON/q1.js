
import promptSync from "prompt-sync";
const prompt = promptSync();

// Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales from $300 and up to but less than $500
// • 2% for sales $500 or above
// • If the salesman is not salaried then
// • 2% for sales from $300 and up to but less than $500
// • 3% for sales $500 or above


let saleStatus = prompt("Enter the status of the sales ( salaried or not salaried)");
let sales = prompt("Enter the status of the sales ( salaried or not salaried)");


const MIN_COMMISSION = 300;
const MAX_COMMISSION = 500;
let saleCommission = null;
if(saleStatus === "salaried"){
    if(sales < MIN_COMMISSION)
    {
        saleCommission = 0;
    }
    else if((sales >= MIN_COMMISSION) || (sales <= MAX_COMMISSION))
    {
        saleCommission = (1/100) * MIN_COMMISSION;
    }
    else{
        saleCommission = (2/100) * MIN_COMMISSION;
    }
}
else{
    if(sales >= MIN_COMMISSION || sales <= MAX_COMMISSION){
        saleCommission = (2/100) * MIN_COMMISSION;  
    }
    else if(sales >= MAX_COMMISSION)
    {
        saleCommission = (3/100) * MIN_COMMISSION;
    }
}

console.log(`The sale commission for ${sales} sales is ${saleCommission}`);