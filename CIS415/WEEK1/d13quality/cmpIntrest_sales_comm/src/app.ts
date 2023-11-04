

export function computeSalesCommission(salesAmount: number, status: boolean) {
    let saleCommission = 0;
    if (status == true) {
        if (salesAmount < 300) {
            saleCommission = 0;
        }
        else if ((salesAmount >= 300) && (salesAmount <= 500)) {
            saleCommission = (1 / 100) * salesAmount;
        }
        else if ((salesAmount > 500)) {
            saleCommission = (2 / 100) * (salesAmount - 500) + ((1 / 100) * 500)
        }
    }
    else {
        if (salesAmount < 300) {
            saleCommission = 0;
        }
        else if ((salesAmount >= 300) && (salesAmount <= 500)) {
            saleCommission = ((2 / 100) * salesAmount);
        }
        else {
            saleCommission = ((3 / 100) * (salesAmount - 500)) + ((2 / 100) * 500);
        }
    }
    return saleCommission;
}
console.log("expect 0: ", computeSalesCommission(3500, true));


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
console.log("expect 110.47", compoundInterest(100, 10, 1));