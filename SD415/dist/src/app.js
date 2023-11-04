console.log("in app.ts", "sum of [1,2,3] is: ", sum([1, 2, 3]));
/**
 *
 * @param {number} aa is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa, b, c) {
    if ((aa >= b) && (aa >= c)) {
        return aa;
    }
    else if ((b >= aa) && (b >= c)) {
        return b;
    }
    else {
        return c;
    }
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr) {
    let multiply = 1;
    for (let num of arr) {
        multiply *= num;
    }
    return multiply;
}
/* findLongestWord */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function findLongestWord(arr) {
    let longestWordLength = arr[0].length;
    for (let word of arr) {
        if (word.length > longestWordLength) {
            let wordLength = word.length;
            return wordLength;
        }
    }
    return longestWordLength;
}
/* reverseArrayInPlace */
/**
 * takes an array of words and returns the length of the longest one
 * @param {*} arr of words
 * @returns {number} length of longest word
 */
export function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length; i > 0; i++) {
        newArray.push(i);
    }
    return newArray;
}
// console.log("The reverse is " + reverseArray(["A", "B", "C", "D"]));
export function reverseArrayInPlace(arr) {
    //     const origArray = arr;
    //    let newArray = origArray;
    //     // loop from the last index
    //    for (let i = arr.length; i > 0; i--) {
    //     // add the last index to the new array
    //     newArray.push(i);
    //    }
    const length = arr.length;
    const middle = Math.floor(length / 2);
    for (let i = 0; i < middle; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
    return arr;
}
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */
/**
 *
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows, cols) {
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
// Added my function
export function calcDownpayment(houseCost) {
    let downPayment = 0;
    // Using the switch statement
    if ((houseCost >= 0) && (houseCost < 50000)) {
        downPayment = (5 / 100) * houseCost;
    }
    else if ((houseCost >= 50000) && (houseCost < 100000)) {
        downPayment = (2500) + ((10 / 100) * (houseCost - 50000));
    }
    else if ((houseCost >= 100000) && (houseCost < 200000)) {
        downPayment = (7500) + ((15 / 100) * (houseCost - 100000));
    }
    else if (houseCost >= 200000) {
        downPayment = (20000) + ((10 / 100) * (houseCost - 200000));
    }
    return downPayment;
}
export function scoreExams(studentAnswer, correctAns) {
    let studentScores = [];
    for (let student of studentAnswer) {
        // Get the score for each student
        let score = 0;
        for (let i = 0; i < student.length; i++) {
            if (student[i] === correctAns[i]) {
                score += 1;
            }
        }
        // Push the score to the student score
        studentScores.push(score);
    }
    return studentScores;
}
const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
const correctAnswers = [3, 1, 2, 4];
console.log(scoreExams(studentAnswers, correctAnswers));
