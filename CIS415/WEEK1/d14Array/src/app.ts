
// export function sumDigits(num : number){
//     let sum = 0;
//     while(num > 0){
//         // Get the last digit of the number and add it to sum
//         let lastDigit = num % 10;
//         sum += lastDigit;

//         num = Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(sumDigits(8));

const scores = [];
scores.push(10);
scores.push(20);
scores.push(30);
scores.push(40);
scores.push(50);
console.log(scores)

function findAverage(numberOfArray: number[]){
 
    let sum = 0;
    
    for(let num of numberOfArray){
        sum += num;
    }
    const findAverage = sum/numberOfArray.length;
    return findAverage;
}

console.log(`The average of ${scores} is ${findAverage(scores)}`);


const countArray = [];
countArray.push(1);
countArray.push(2);
countArray.push(3);
countArray.push(4);
countArray.push(5);
countArray.push(6);
countArray.push(7);
countArray.push(8);
countArray.push(9);
console.log(countArray);

console.log(`The average of ${countArray} is ${findAverage(countArray)}`);