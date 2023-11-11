const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// Type of Donations
type Donations ={
    funderId: number,
    amount: number,
}

type Days ={
    donations: Donations[];
    date : string
}
const dailyRecord: Days[] = [day1, day2];

//Daily total
function dailyTotal(dailyRecord: Days[]){
    let totalAmount =0;
    for(let day of dailyRecord){
        //day1
        for(let donation of day.donations){
            // Add the donation amount to the totalAmount
            totalAmount += donation.amount;
        }
    }
    return totalAmount
}
console.log(dailyTotal([day2]));


function dailyTotalReduce(dailyRecord: Days){
    let donation = dailyRecord.donations;
    return donation.reduce((total, donations)=> total + donations.amount,0)
}


function totalDonations(dailyRecord: Days[]): number{
    let totalDonations = 0;
    for(let day of dailyRecord){
        // Call the dailyTotl function
        totalDonations += dailyTotal([day]);
    }
    return totalDonations;
}
console.log(totalDonations(dailyRecord));


function findBigDonations(donationDate:Days[], amount:number){
    let returnDate = [];
    for(let date of donationDate){
        for(let day of date.donations){
            if(day.amount > amount){
                returnDate.push(date.date);
                returnDate.push(day.amount);
            }
        }
    }
    return returnDate;
}
console.log(findBigDonations(dailyRecord, 10));

function averageDonation(dailyRecord:Days[]):  number{
    let sumOfElement = 0;
    for(let record of dailyRecord){
        for(let day of record.donations){
            sumOfElement += 1;
        }
    }
    // Get the daily total from the dailyTotalFunction
    let dailyTotalAmount = dailyTotal(dailyRecord);
    let average = dailyTotalAmount/sumOfElement;
    return average;
}
console.log(averageDonation([day1]));