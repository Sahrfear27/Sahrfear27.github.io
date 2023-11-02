export function compoundInterest(initialAmount: number, annualInterestRate: number, numberofYears: number) {
    // Get the  monthly interest rate
    let monthlyInterestRate = (annualInterestRate / 100) / 12;
    let currentBalance = initialAmount;
    for (let year = 1; year <= numberofYears; year++) {

        for (let month = 1; month <= 12; month++) {
            // Get the monthly Interest amount 
            let monthlyInterestAmount = currentBalance * monthlyInterestRate;
            currentBalance += monthlyInterestAmount;
        }
    }
    return currentBalance;
}
console.log("expect 110.47", compoundInterest(10000, 5, 10));