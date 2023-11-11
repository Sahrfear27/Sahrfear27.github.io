
// const x = 123;
// const y = 123;
// let a = [1, 2, 3];
// const b = [1, 2, 3]; 
// //explain why a === b is false and x === y is true;
// //a === b corresponds to false because a and b are referring to different location in the memory.
// // Their value are copied by reference, hence they are not equal in value.
// //X === y corresponds to true because x and y are primitive data types and the value of x is the same as the value of y

import { read } from "fs";

// let c = a;
// console.log(a == c);




// Declare the type of the  donations object
type Donations = {
    funderId: number,
    amount: number
}

const donation1: Donations = { funderId: 1, amount: 100 };
const donation2: Donations = { funderId: 2, amount: 10 };
const donation3: Donations = { funderId: 3, amount: 1 };
const donation4: Donations = { funderId: 4, amount: 5 };
const donation5: Donations = { funderId: 5, amount: 15 };

// Declare type of day object
type Days = {
    donations: Donations[],
    date: string
}
const day1: Days = { donations: [donation1, donation2], date: "01/10/2022", };
const day2: Days = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

const dailyRecord: Days[] = [day1, day2];

function dailyTotal(dailyRecords: Days[]): number {
    // Use a for loop to find the total amount donated for a given day;
    let totalAmount = 0;
    for (let day of dailyRecords) {
        for (let donation of day.donations) {
            totalAmount += donation.amount;
        }
    }
    return totalAmount;
}
console.log("expect 21: ", dailyTotal([day2]));

// Using the reduce method
function dailyTotalReduce(dailyRecord: Days): number {
    return dailyRecord.donations.reduce((total, donation) => total + donation.amount, 0);
}
console.log("expect 21: ", dailyTotal([day1]));

function totalDonations(dailyRecord: Days[]): number {
    // Loop through the number of days
    let totalDonation = 0;
    for (let day of dailyRecord) {
        // Call the dailuTotal Function
        totalDonation += dailyTotalReduce(day);

    }

    return totalDonation;
}
console.log("expect 21: ", dailyTotal(dailyRecord));

// Use reduce and pass in the call back function to get the total
function totalDonationsReduce(dailyRecord: Days[]): number {
    return dailyRecord.reduce((total, day) => total + dailyTotalReduce(day), 0)
}
console.log("expect 21: ", dailyTotal(dailyRecord));




function findBigDonations(donatonDate: Days[], amount: number) {
    let returnDate = [];
    for (let date of donatonDate) {
        for (let day of date.donations) {
            // Check the donation
            if (day.amount > amount) {
                returnDate.push(date.date);
                returnDate.push(day.amount);
            }
        }
    }
    return returnDate;
}
console.log(`expect [{day: "01/10/2022", amount: 100 },{day: "01/11/2022", amount: 15 } :  `, findBigDonations(dailyRecord, 10));


function averageDonation(dailyRecord: Days[]): number {
    let dailyTotals = dailyTotal(dailyRecord);
    let count = 0;
    for (let record of dailyRecord) {
        for (let day of record.donations) {
            count += 1;
        }
    }
    let average = dailyTotals / count;
    return average;
}
console.log("expect 55: ", averageDonation([day1]));




// Quiz Answer functions that compute and return the score of a single students
const student1 = {
    studentId: 101,
    answers: [1, 1, 2, 4] //3
}
const student2 = {
    studentId: 102,
    answers: [2, 1, 2, 2] //2
}
const student3 = {
    studentId: 101,
    answers: [3, 1, 3, 4] //3
}
const correctAnswers = [3, 1, 2, 4];

// Declare the type of student object
type Student = {
    studentId: number,
    answers: number[]
}
const studentArray: Student[] = [student1, student2, student3]

function gradeStudent(students: Student, correctAnswer: number[]): number {
    let sum = 0;
    let studentAns = students.answers;
    for (let i = 0; i < studentAns.length; i++) {
        if (studentAns[i] === correctAnswer[i]) {
            sum += 1;
        }
    }
    return sum;
}

console.log(gradeStudent(student1, [3, 1, 2, 4]));


//A function that return an array of sum of gradeQuiz for each student

// Get the type of the score
function gradeQuiz(studentsArray: Student[], correctAns: number[]): number[] {
    let result = [];
    for (let students of studentsArray) {
        let studentAnswers = students.answers;
        let sum = 0;
        for (let i = 0; i < studentAnswers.length; i++) {
            if (studentAnswers[i] === correctAns[i]) {
                sum += 1;
            }

        }
        result.push(sum);
    }
    return result;
}
console.log(gradeQuiz(studentArray, correctAnswers));




// 21.	Create bank object, bank, with methods:
// a.	debit(id, amount) , adds negative amount to customer transaction list, but only if the amount is greater than the current balance.
// b.	credit(id, amount), adds positive amount to customer transaction list
// c.	getBalance(id) returns current balance of that customer.  The balance should be computed as the sum of all recorded transaction amounts.
// d.  saveTransaction(id, amount) saves this transaction amount to the customerTransactions list for this customer
// e.	getBankBalance:  returns sum of all customer balances
// The bank object should have a transactionsDB property, which will be an array of objects containing all of the customer objects.
//   Customer objects will have properties customerId and customerTransactions, e.g., 
// {customerId: 1234, customerTransactions: [10, 50, -40] } would be one element of the array.
// Add any necessary types to the above bank object.
// */


type CustomerRecord = {  //interface for the transaction object
    customerId: number;
    customerTransactions: number[];
}

type Bank = {    //interface for the bank object 
    transactionsDB: CustomerRecord[];
    saveTransaction: (customerId: number, amount: number) => void;
    debit: (customerId: number, amount: number) => void;
    credit: (customerId: number, amount: number) => void;
    getBalance: (customerId: number) => number;
    getBankBalance: () => number;
}

const bank = {
    debit: function (id, amount) {
        // Find the customer record from the database
        let customer = null;
        for (let record of this.transactionsDB) {
            let customerId = record.customerId;
            if (customerId === id) {
                customer = record;
            }
        }
        // Check the current balance
        if (customer) {
            // Get the customer current balance
            let customerCurrentBalance = customer.customerTransactions;
            let currentBalance = 0;
            for (let transaction of customerCurrentBalance) {
                // Add the transaction to the current balance
                currentBalance += transaction;
            }
            // Check if the current balance is negative
            if (currentBalance < 0) {
                // add the amount to the transaction list
                customer.customerTransactions.push(amount);
            }
            return this.getBalance(id)
        }
        else {
            return undefined;
        }
    },

    credit: function (id, amount) {
        // Customer Information
        let customer = null;
        for (let record of this.transactionsDB) {
            let customerId = record.customerId;
            if (customerId === id) {
                customer = record;
            }
        }
        if (customer) {
            let customerCurrentBalance = customer.customerTransactions;
            let currentBlance = 0;
            for (let transaction of customerCurrentBalance) {
                currentBlance += currentBlance;
            }
            if (currentBlance > 0) {
                customer.customerTransactions.push(amount);
            }
            return this.getBalance(id);
        }
        else {
            return undefined;
        }
    },

    getBalance: function (id) {
        // Pull the record
        let customer = null;
        for (let record of this.transactionsDB) {
            let customerId = record.customerId;
            if (customerId === id) {
                customer = record;
            }
        }
        if (customer) {
            // Get the customer current balance
            let customerCurrentBalance = customer.customerTransactions;
            let currentBalance = customerCurrentBalance.reduce((acc, trans) => acc + trans, 0);
            return currentBalance;
        }
        else {
            return undefined;
        }
    },

    saveTransaction: function (id, amount) {
        // Check the record
        let customer = null;
        for (let record of this.transactionsDB) {
            // Get the customer id
            let customerId = record.customerId;
            if (customerId === id) {
                customer = record;
            }
        }
        if(customer){
            // Save the transaction amount
            customer.customerTransactions.push(amount);
        }
        else{
            // If not found creat a new list
            let newCustomer = {
                customerId: id,
                customerTransactions: [amount]
            }
            // Push the new customer to the transaction list
            this.transactionsDB.push(newCustomer);
        }

    },
    getBankBalance: function(){
        let totalBalance = 0;
        for(let record of this.transactionsDB){
            let customersCurrentBalances = record.customerTransactions;
            let balance = customersCurrentBalances.reduce((acc, trans)=> acc + trans,0);
            totalBalance += balance;
        }
        
        return totalBalance;
    }
} as Bank

bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }
];
console.log(bank.debit(1, 10));
console.log(bank.getBankBalance());
console.log(bank.getBalance(1));



// Calculator

type Calculator = {
    operand1: number,
    operand2: number
    sum: ()=> number,
    mult: ()=> number
    setValues: (value1: number, value2: number)=> number
}
const calculator = {
    operand1 : 2,
    operand2 : 3,
    setValues: function (value1: number, value2: number){
        value1 = this.operand1
        value2 = this.operand2;
        return value1 + value2;
    },

    sum: function():number {
        return (this.operand1 + this.operand2);
    },
   mult: function():number{
    return (this.operand1 * this.operand2);
   }
}as Calculator

console.log( calculator.setValues(2,3));
