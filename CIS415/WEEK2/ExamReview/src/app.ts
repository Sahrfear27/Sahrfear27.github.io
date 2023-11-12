const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };
const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// Type of Donations
type Donations = {
    funderId: number,
    amount: number,
}

type Days = {
    donations: Donations[];
    date: string
}
const dailyRecord: Days[] = [day1, day2];

//Daily total
function dailyTotal(dailyRecord: Days[]) {
    let totalAmount = 0;
    for (let day of dailyRecord) {
        //day1
        for (let donation of day.donations) {
            // Add the donation amount to the totalAmount
            totalAmount += donation.amount;
        }
    }
    return totalAmount
}
console.log(dailyTotal([day2]));


function dailyTotalReduce(dailyRecord: Days) {
    let donation = dailyRecord.donations;
    return donation.reduce((total, donations) => total + donations.amount, 0)
}


function totalDonations(dailyRecord: Days[]): number {
    let totalDonations = 0;
    for (let day of dailyRecord) {
        // Call the dailyTotl function
        totalDonations += dailyTotal([day]);
    }
    return totalDonations;
}
console.log(totalDonations(dailyRecord));


function findBigDonations(donationDate: Days[], amount: number) {
    let returnDate = [];
    for (let date of donationDate) {
        for (let day of date.donations) {
            if (day.amount > amount) {
                returnDate.push(date.date);
                returnDate.push(day.amount);
            }
        }
    }
    return returnDate;
}
console.log(findBigDonations(dailyRecord, 10));

function averageDonation(dailyRecord: Days[]): number {
    let sumOfElement = 0;
    for (let record of dailyRecord) {
        for (let day of record.donations) {
            sumOfElement += 1;
        }
    }
    // Get the daily total from the dailyTotalFunction
    let dailyTotalAmount = dailyTotal(dailyRecord);
    let average = dailyTotalAmount / sumOfElement;
    return average;
}
console.log(averageDonation([day1]));


let str = "Widget wid id";
console.log(str.indexOf("id"));

console.log(str.includes("Widgets"));

let str2 = "stringify";
console.log(str2.slice(0, 5));

let word = "Slice is Cool"; //use slice and trim

for (let i = 0; i < word.length; i++) {
    console.log(word.slice(i).trim());
}

let arr1 = ["I", "Study", "Javascript"];
arr1.splice(1, 1); //At index 1 remove 1;
console.log(arr1);

let arr2 = ["I", "Study", "Javascript"];
arr2.splice(2, 1, "python"); //At index 2 remove 1 abd replace with python
console.log(arr2);

let arr3 = ["I", "study", "JavaScript", "right", "now"];
arr3.splice(0, 3, "Let", "Dance"); //At index 0, remove 3 items and replace with Let Dance
console.log(arr3);

let arr4 = ["I", "study", "JavaScript"]; //Add complex language javascript
arr4.splice(2, 0, "Complex", "Language");
console.log(arr4);


// The for each

let names = ["Bilbo", "Gandalf", "Nazgul"];
let numbers = [1, 5, 16, 3, 1081];
numbers.forEach((ele) => (ele % 2 === 0) ? console.log(ele) : null);

const arr = [1, 2, 3, 4, 5];
function replaceInterior(arr: number[], num: number): number[] {
    let result = arr.slice();
    result.splice(1,arr.length-2, num)
    return result;
}
console.log(replaceInterior(arr, 999));

function printThis(input:string){
    console.log(input);
}
printThis();