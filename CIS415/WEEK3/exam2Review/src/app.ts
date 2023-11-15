// const array123 = [1,2,3];
// let result = array123.map((elements)=> elements * elements);
// console.log(result)
// console.log("Hello")

// const arr123 = [1, 2, 3];
// let result = arr123.reduce((sum, currentValue)=> sum + currentValue,0);
// console.log(result);

// const arr1234 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr1234;
// console.log(a);  

// console.log(b);  
// 2

// console.log(c);  
// 3



// Write a function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// flatten(dailyRecord) returns: [
//     { date: '01/10/2022', id: 1, amount: 100 },
//     { date: '01/10/2022', id: 2, amount: 10 },
//     { date: '01/11/2022', id: 3, amount: 1 },
//     { date: '01/11/2022', id: 2, amount: 5 },
//     { date: '01/11/2022', id: 1, amount: 15 }
// ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];



// for (let day of dailyRecord) {
//     let dates = day.date;
//     let ids = day.donations.funderId;
//     let amount = day.donations.amount
//     const obj = {
//         date: dates,
//         id: ids,
//         amt: amounts
//     }
//     result.push(obj)
// }

//    }