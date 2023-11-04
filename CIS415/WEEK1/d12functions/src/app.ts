// // function add(a: number, b: number): number {
// //     return a + b;
// //    }
// //    const sum1: number = add(10,15);
// //    const sum2: number = add(4, 5 ) ;
// //    console.log("sum1 is: ", sum1, " sum2 is: ", sum2);


// // Q1
// // Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// // number argument for salesAmount. It should return the sales commission based on following
// // rules. First make a defining table for the function.
// // • If the salesman is salaried then
// // • These is no commission for sales below $300
// // • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// // • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// // first 500)
// // • If the salesman is not salaried then
// // • no commission for sales below $300
// // • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// // • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// // first 500)
// // console.log("expect 0: ", computeSalesCommission(true, 200));

// function computeSalesCommission(salesAmount: number, status: boolean) {
//     let saleCommission = 0;
//     if (status == true) {
//         if (salesAmount < 300) {
//             saleCommission = 0;
//         }
//         else if ((salesAmount >= 300) && (salesAmount <= 500)) {
//             saleCommission = (1 / 100) * salesAmount;
//         }
//         else if ((salesAmount > 500)) {
//             saleCommission = ((2 / 100) * salesAmount) + ((1 / 100) * 500)
//         }
//     }
//     else {
//         if (salesAmount < 300) {
//             saleCommission = 0;
//         }
//         else if ((salesAmount >= 300) && (salesAmount <= 500)) {
//             saleCommission = ((2 / 100) * salesAmount);
//         }
//         else {
//             saleCommission = ((3 / 100) * salesAmount) + ((2 / 100) * 500);
//         }
//     }
//     return saleCommission;
// }

// console.log("expect 0: ", computeSalesCommission(300, true));


// //Q2
// // Make a defining table and function that will return the balance of a savings account that
// // compounds interest monthly. Parameters for the function will be:
// // • initial amount
// // • annual interest rate
// // • number of years to compound
// // Do not look up mathematical formulas for how to compute compound interest. Use a for loop that will
// // add the appropriate interest each month.


// function compoundInterest(initialAmount: number, annualInterestRate: number, numberofYears: number) {
//     // Get the  monthly interest rate
//     let monthlyInterestRate = (annualInterestRate / 100) / 12;
//     let currentBalance = initialAmount;
//     for (let year = 1; year <= numberofYears; year++) {

//         for (let month = 1; month <= 12; month++) {
//             // Get the monthly Interest amount 
//             let monthlyInterestAmount = currentBalance * monthlyInterestRate;
//             currentBalance += monthlyInterestAmount;
//         }

//     }

//     return currentBalance;
// }
// console.log("expect 110.47", compoundInterest(100, 10, 1));


// // Q3
// // . Cost of House Down Payment
// // Make a defining table and then write a function that calculates down payment for a home loan based on
// // following rules. Your function should have a parameter for the cost and return the down payment
// // amount.
// // Cost of House Down Payment
// // $0 to less than 50K 5% of the cost
// // $50K to less than 100K $2500 + 10% of (cost - $50K)
// // $100K to less than 200K $7500 + 15% of (cost - $100K)
// // $200K and above $20000 + 10% of (cost - $200K)

// function calcDownpayment(houseCost: number) {
//     let downPayment = null;

//     // Using the switch statement
//     if ((houseCost >= 0) && (houseCost < 50000)) {
//         downPayment = (5 / 100) * houseCost;
//     }
//     else if ((houseCost >= 50000) && (houseCost < 100000)) {
//         downPayment = (1000) + ((10 / 100) * (houseCost - 50));
//     }
//     else if ((houseCost >= 100000) && (houseCost < 200000)) {
//         downPayment = (2000) + ((15 / 100) * (houseCost - 100));
//     }
//     else {
//         downPayment = (5000) + ((10 / 100) * (houseCost - 200));
//     }
//     return downPayment.toFixed(2);
// }

// console.log("expect 2000: ", calcDownpayment(40000));
// // console.log("expect 2500: ", calcDownpayment(50000));

// // Q4
// // Write functions sumDigits and multDigits that take an integer parameter and return the sum or
// // product of the digits in the number. Use the / and % operators to find the digits.
// // Input sumDigits Output multDigits Output
// //  1234    10  24
// //  102     3   0
// //  8       8   8

// function sumDigit(numberInput:number){
//     let sum = 0;
//      numberInput = Math.abs(numberInput);
//     while(numberInput > 0){
//         // Get the last digit of the number and add to sum
//         let lastDigit = numberInput % 10;
//         sum += lastDigit;

//         // divide numberInput by 10 to get the next digit
//         numberInput = Math.floor(numberInput/10);
//     }

//     return sum;
// }
// console.log(sumDigit(123));

// function multDigits(userNumber:number){
//     let multiply = 1;
//     while(userNumber > 0){
//         // Get the last digit, multiply and add it to multiply
//         let lastNumber = userNumber %10;
//         multiply *= lastNumber;

//         // divide userNumber by 10 to get the next digit
//         userNumber = Math.floor(userNumber/10);
//     }
//     return multiply;
// }

// console.log(multDigits(1234));


// // Q5
// //  Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
// // and returns the temperature in Celsius.
// function convertFahrenheit(fahrenheitTemp:number){
//     let celciusTemperature = (fahrenheitTemp- 32) * 5/9;
//     return celciusTemperature;
// }
// console.log("expect 0: ", convertFahrenheit (32));

// // Q6
//  Write a function that takes x and y co-ordinates of two points as inputs and returns the distance
// between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));

// function coordinateXY(x1: number, y1: number, x2: number, y2: number) {

//     let xDistance = (x2 - x1) ** 2;
//     let yDistance = (y2 - y1) ** 2;
//     debugger;
//     let distance = Math.sqrt(xDistance + yDistance);
//     return distance;
// }

// console.log("expect 7.07 : ", coordinateXY(0, 0, 5, 5));



// Area of a traingle
function computeArea(a: number, b: number, c: number) {
    //   Call the function and pass in the parameters as arguements
    let s = semiParameter(a, b, c);

    // Calculate the area
    debugger;
    const area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
    return area;
}
function semiParameter(a: number, b: number, c: number) {
    const semi = (a + b + c) / 2;
    return semi;
}

console.log(`The area of the triangle with sides 3,4,5 is ${computeArea(3, 4, 5)} `);



function compoundInterest(deposit: number, rate: number, years: number) {
    const monthlyRate = rate / 12 / 100;
    const numPayments = years * 12;
    let balance = deposit;
    for (let i = 1; i <= numPayments; i++) {
    balance = balance + balance * monthlyRate;
    // debugger;
    }
    return balance;
    }
    console.log("expect 110.47", compoundInterest(100, 10, 1));
    console.log("expect 16470.09", compoundInterest(10000, 5, 10));