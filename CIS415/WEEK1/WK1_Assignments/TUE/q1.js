
import promptSync from "prompt-sync";
const prompt = promptSync();

//  Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// number argument for salesAmount. It should return the sales commission based on following
// rules. First make a defining table for the function.

// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the first 500)

// • If the salesman is not salaried 
// . then no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500)

// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));


// Input: -Status (salaried / not salaried), -