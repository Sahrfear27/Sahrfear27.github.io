
export function calcDownpayment(houseCost: number) {
    let downPayment = 0;

    // Using the switch statement
    if ((houseCost >= 0) && (houseCost < 50000)) {
        downPayment = (5 / 100) * houseCost;
    }
    else if ((houseCost >= 50000) && (houseCost < 100000)) {
        downPayment = (2500) + ((10 / 100) * (houseCost - 50000));
    }
    else if ((houseCost >= 100000) && (houseCost < 200000)) {
        downPayment = (7500) + ((15 / 100) * (houseCost - 100000));
    }
    else if (houseCost >= 200000){
        downPayment = (20000) + ((10 / 100) * (houseCost - 200000));
    }
    return downPayment;
}
// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));
