import promptSync from "prompt-sync";
const prompt = promptSync();


// Cost of House Down Payment
// Make a defining table and then write a program that calculates down payment for a home loan based
// on following rules. Your program should prompt for the cost and write the down payment amount to
// the console.

//      Cost of House                Down Payment
//      $0 to less than 50K          5% of the cost
//      $50K to less than 100K       $1000 + 10% of (cost - $50K)
//      $100K to less than 200K      $2000 + 15% of (cost - $100K)
//      $200K and above              $5000 + 10% of (cost - $200K)

const houseCost = parseInt(prompt("Enter the cost of the house"));
let downPayment = null;
if(isNaN(houseCost)){
    console.log("Please enter a numeric cost")
}
else if((houseCost >= 0) && (houseCost < 50000)){
    downPayment = (5/100) * houseCost;
    console.log(`The down payment is $:${downPayment.toFixed(2)}`);
}
else if((houseCost >= 50000) && (houseCost < 100000)){
    downPayment = (1000) + ((10/100) * (houseCost - 50));
   console.log(`The down payment is $:${downPayment.toFixed(2)}`);
}
else if((houseCost >= 100000) && (houseCost < 200000)){
    downPayment = (2000) + ((15/100) * (houseCost - 100));
   console.log(`The down payment is $:${downPayment.toFixed(2)}`);
}
else{
    downPayment = (5000) + ((10/100) * (houseCost - 200));
   console.log(`The down payment is $:${downPayment.toFixed(2)}`);
}