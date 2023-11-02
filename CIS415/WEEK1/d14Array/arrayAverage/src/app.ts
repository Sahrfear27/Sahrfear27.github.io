

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
    let expressionStack = [];

    // Loop through the array and add the cruly bracket to the expressionStack
    for (let bracket of expression) {
        // Add the right bracket to the expression stack

    }
}

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function sumMatrix(arr: number[][]) {
    //implement this
    let sumArray = 0;
    for (let row of matrix) {
        for (let col of row) {
            sumArray += col;
        }
    }
    return sumArray;
}
console.log(`The sum of ${matrix}  is ${sumMatrix(matrix)}`);