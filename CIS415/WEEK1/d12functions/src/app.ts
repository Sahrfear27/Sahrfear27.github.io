// function add(a: number, b: number): number {
//     return a + b;
//    }
//    const sum1: number = add(10,15);
//    const sum2: number = add(4, 5 ) ;
//    console.log("sum1 is: ", sum1, " sum2 is: ", sum2);


// Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// number argument for salesAmount. It should return the sales commission based on following
// rules. First make a defining table for the function.
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// first 500)
// • If the salesman is not salaried then
// • no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500)
// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));

function computeSalesCommission(salesAmount: number, status: boolean) {
    let saleCommission =0;
    if(status == true)
    {
        if(salesAmount < 300){
            saleCommission = 0;
        }
        else if((salesAmount >= 300) && (salesAmount <= 500)){
         saleCommission = (1/100) * salesAmount;
        }
        else if((salesAmount > 500)){
         saleCommission = ((2/100) * salesAmount) + ((1/100) * 500)
        }
    }
    else{
        if(salesAmount < 300){
            saleCommission = 0;
        }
        else if((salesAmount >= 300) && (salesAmount <= 500))
        {
            saleCommission = ((2/100) * salesAmount);
        }
        else{
            saleCommission = ((3/100)* salesAmount) + ((2/100) * 500);
        }
    }
    return saleCommission;
   }
  
console.log("expect 0: ", computeSalesCommission(300,true));