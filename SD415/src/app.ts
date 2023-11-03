

console.log("in app.ts", "sum of [1,2,3] is: ", sum([1,2,3]));
/**
 * 
 * @param {number} aa is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(aa: number, b: number, c: number): number{ 
    if((aa >= b) && (aa >= c)){
        return aa
    }
    else if((b >= aa) && (b >= c)){
        return b;
    }
    else{
        return c
    }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr: number[]): number{
    let sum = 0;
    for(let num of arr)
    {
        sum += num
    }
    return sum;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function multiply(arr: number[]): number{
    let multiply = 1;
    for(let num of arr){
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
export function findLongestWord(arr: string[]): number{
    let longestWordLength = arr[0].length;
    for(let word of arr)
    {
        if(word.length > longestWordLength){
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
export function reverseArrayInPlace(arr: number[]): number[]{
   
}

/* 6. Write a function that takes two integers as inputs and returns a 2-dimensional array containing sequential numbers across each row as follows:
describe("generate array", function () {
    const expected33 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected23 = [ [1, 2, 3], [4, 5, 6]];
    const expected21 = [ [1], [2]];
     assert.deepEqual(generateArray(3,3), expected33); */

/**
 * 
 * @param {*} rows num rows
 * @param {*} cols num cols
 * @returns {Array} 2d array with entries i + j
 */
export function generateArray(rows: number, cols: number): number[][]{
//IMPLEMENT THIS 

return [[0]];
}




// Added my function
export function calcDownpayment(houseCost: number) {
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
    else if (houseCost >= 200000){
        downPayment = (20000) + ((10 / 100) * (houseCost - 200000));
    }
    return downPayment;
}