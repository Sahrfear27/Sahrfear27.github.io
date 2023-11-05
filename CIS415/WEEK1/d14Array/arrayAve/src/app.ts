
const scores = [];
scores.push(10);
scores.push(20);
scores.push(30);
scores.push(40);
scores.push(50);
console.log(scores)

function findAverage(numberOfArray: number[]) {

    let sum = 0;

    for (let num of numberOfArray) {
        sum += num;
    }
    const findAverage = sum / numberOfArray.length;
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


function balanced(expression: string[]) {
    let expressionStack: string[] = [];

    // Loop through the array and add the cruly bracket to the expressionStack
    for (let bracket of expression) {
        // Add the left bracket to the expression stack
        if (bracket === "{") {
            expressionStack.push("{");
        }
        else if (bracket === "}") {
            if (expressionStack.pop() !== "{") {
                return "Not Balanced"
            }
        }
    }
    // Check if the expression stack is left with nothing
    if (expressionStack.length === 0) {
        return "Balanced";
    }
    else {
        return "Not Balanced"
    }
}
console.log(balanced(["{", "}", "{", "{", "}"]))


const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumMatrix(arr: number[][]) {
    let sum = 0;

    // Using the for of loop
    // for(let subArray of arr){
    //     for(let ele of subArray){
    //         sum += ele;
    //     }
    // }

    // Using the for loop
    for (let row = 0; row < arr.length; row++) {
       for (let col = 0; col < arr[row].length; col++) {
        sum += arr[row][col];
       }
        
    }

    return sum;
}
console.log(sumMatrix(matrix));



function calcDifferential(highTemp: number[], lowTemp: number[]){
    
    let totalHighTmp =0;
    for(let  temp of highTemp){
        totalHighTmp += temp;
    }
    let totalLowTemp = 0;
    for(let  low of lowTemp){
        totalLowTemp += low;
    }
    const temperatureDifferential = Math.abs(totalHighTmp - totalLowTemp);
    return temperatureDifferential;
}
console.log(calcDifferential ([10, 20, 30, 40], [10, 20, 20, 20]));

function matrixMatch(arr1: number[][], arr2: number[][]){
    let returnVale = [];

    // First Loop through the row of the first matrix
    for (let ro = 0; ro < arr1.length; ro++) {
        // Create an empty matric to hold the numer of row
        const row = [];

        // Loop through the arr2 at the same index position of arr1 and compare their corresponding elements
        for (let col = 0; col < arr2[ro].length; col++) {
            // Check if the indices at pos of row and col of the two array matches
            if(arr1[ro][col] == arr2[ro][col]){
                row.push(1);
            }
            else{
                row.push(0);
            }
            
        }
        returnVale.push(row);
    }
    return returnVale;
}
const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ]
const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]] 
console.log(matrixMatch(testArr1,testArr2));


function isPrime(num: number){
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            return false;
        }
        
    }
    return true;
}


function primeFactor(numbers:number){
    // Check if the number is less than 2
    if(numbers < 2){
        return 0;
    }
    let factors = [];

    for (let i = 2; i <= numbers; i++) {
       if(numbers % i === 0 && isPrime(i)){
        factors.push(i);
       }
        
    }
    return factors;
}
console.log(isPrime(11));
console.log(primeFactor(17));



function computeCharges(charges: number[][]){
    let result = [];

    // Loop throgh the array
    for(let charge of charges){
            const minCharge = Math.min(...charge);
            const maxCharge = Math.max(...charge);
            let sum = 0;
            for(let ele of charge){
                sum += ele;
            }
            const average = sum / charge.length;
            result.push([minCharge,maxCharge,average]);
    }
    return result;   
}
console.log(" ");
const charges = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]];
console.log(computeCharges(charges));




 function scoreExams(studentAnswer:number[][], correctAns: number[]){
    let studentScores = [];
    for(let student of studentAnswer)
    {
        // Get the score for each student
        let score = 0;
        for (let i = 0; i < student.length; i++) {
            if(student[i] === correctAns[i]){
                score +=1;
            }  
        }
        studentScores.push(score);
    }
    return studentScores;
}

const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
const correctAnswers = [3, 1, 2, 4];
console.log(scoreExams (studentAnswers,correctAnswers ));


function generateArray(rows: number, cols: number): number[][] {
    // Create a new array
    let newArray = [];
    let counter = 1;
    // Loop through the row
    for (let i = 1; i <= rows; i++) {
        // Create a new array for the row
        let arrayRow = [];
        for (let j = 1; j <= cols; j++) {
            arrayRow.push(counter++);
        }
        newArray.push(arrayRow);
    }
    return newArray;
}


function gene(num1 : number, num2:number){
    const result = [];
    let count = 1;
    for (let i = 0; i <= num1; i++) {
        let row = [];
        for (let j = 0; j < num2; j++) {
            row.push(count++);
        }
        result.push(row);
    }
    return result;
}
console.log(gene(3,3));