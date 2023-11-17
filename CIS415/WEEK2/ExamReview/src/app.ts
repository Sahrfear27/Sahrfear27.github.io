import { assert } from "node:console";
import { describe } from "node:test";

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
    result.splice(1, arr.length - 2, num)
    return result;
}
console.log(replaceInterior(arr, 999));

function printThis(input: string) {
    console.log(input);
}
// printThis();


let words = "One two";
console.log(words.split(" "));
let nameArr = []
const pNames = ["Fred Smith", "Carl Lindstrom"];
const [fName, lName] = pNames;
// console.log(fName.split(" "))
// console.log(lName.split(" "))

function firstName(names: string[]): { firstName: string, lastName: string }[] {
    return names.map((fullName) => {
        // Unpack the element of the arr and assign it to variables firstName and lastName is splited form
        const [firstName, lastName] = fullName.split(" ");
        return {
            firstName,
            lastName,
        }
    })
}
console.log(firstName(pNames));


const arrSlic = [1, 2, 3, 4, 5];
function replaceEnds(arr: number[], num1: number, num2: number): number[] {
    let result = arr.slice();
    result.splice(0, 1, num1); //at 0, delete1 item and replace with num1;
    result.splice(result.length - 1, 1, num2);
    return result;
}
console.log(replaceEnds(arrSlic, 0, 100));


// Implement functions foos, square, and cube

// describe ("higher order", function(){
//     it("Test Square ", function(){
//         assert.strictEqual(foo(square,5), 25);
//     });

//     it("Test cube ", function(){
//         assert.strictEqual(foo(cube,10), 1000);
//     });
// });



function square(num: number): number {
    return num * num;
}
function cube(num: number): number {
    return num * num * num;
}
function foo(choice: (num: number)=> number, num : number): number{
    return choice(num);
}
console.log(foo(cube,4));
console.log(foo(square,6));

let personNames = ["Fred Smith", "Carl Lindstrom", "Sahrfear Macarthy", "Kai Macarthy"]

type person = {
    firstName: string,
    lastName: string,
}
function yourName(fullName: string[]):person[]{

  let personName:person[] = [];
    // Call a function for all the elements inside the name array 
  fullName.map((names)=> {
    // split the name and destructure them into first and last name
    const [fName, lName] = names.split(" ");

    // Create an object with the property firstName and last name 
    const personObject = {
        firstName:fName,
        lastName: lName,
    }

    // Push the object into the array and return the result
    personName.push(personObject);
  })
  return personName;
}
console.log(yourName(personNames));



let name = "John";
function sayHi(): void {
console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?