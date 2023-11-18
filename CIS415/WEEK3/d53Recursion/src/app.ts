

// Recursion 

import { setInterval } from "timers/promises";

// Exercise1
//let’s write a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

// Iterative thinking: Use for loop
function pow(x: number, n: number) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x; //In order word, multiple x by itself n times
    }
    return result;
}
console.log(pow(2, 3));

// Recursive thinking: Simplify the task and call it self
function pow2(x: number, n: number): number {
    // The base case: If n is 1 (is: x multiply by 1 will always be 1)
    if (n === 1) {
        return x;
    }
    else {
        return x * pow2(x, n - 1)
    }
}
console.log(pow2(2, 3));

function factorial(num: number): number {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
};
console.log(factorial(5));


// • Write a recursive function to count the instances of a letter in a string. Use
// recursion rather than split and filter.
// • Base case?
// • Reductive recursive call? 


// function countLettersOfString(word: string, letter:string): number{
//     if(word === " "){
//         return 0;
//     }
//     else if(word[0] === letter){
//         return 1 + countLettersOfString(word.substr(1), letter);
//     }
//     else{
//         return countLettersOfString(word.substr(1), letter)
//     }
// }
// console.log(countLettersOfString("a", "apple"));


let person = {
    name: "Sahrfear",
    age: 28,
}
console.log(person);
console.log(Object.values(person));


function b() {
    function a() {
        console.log(x);
    }
    const x = 10;
    a();
}
const x = 20;
b();

let phrase = "Hello";
if (true) {
    let user = "John";
    console.log(`${phrase}, ${user}`);
}

let word = "Someword";
console.log(word.slice(1));

// Use the resursive method to find the length of the strig
function findLengthRecursive(s: string): number {
    // Check the base case
    if (s === "") {
        return 0;
    }
    else {
        return 1 + findLengthRecursive(s.slice(1))
    }
}

console.log(findLengthRecursive("Sahrfear"));


// Write a recursive function to count the instances of a letter in a string. Use
// recursion rather than split and filter.
// • Base case?
// • Reductive recursive call?

function countLettersInString(wordString: string, char: string): number {
    // Check if the base case exist
    if (wordString === "") {
        return 0;
    }
    else if (wordString[0] === char) {
        // If the character if found from the word, return 1 and remove 1 from the word
        return 1 + countLettersInString(wordString.slice(1), char);
    }
    else {
        // If the character is not found remove 1 character from the existing word
        return countLettersInString(wordString.slice(1), char);
    }
}
let words = "Character"
console.log(countLettersInString(words, "a"));



// 
type Company = {
    sales: SiteInrernalSale[],
    development: Development,
}

type Development = {
    sites: SiteInrernalSale[],
    internals: SiteInrernalSale[]
}
type SiteInrernalSale = {
    name: string,
    salary: number
}
let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

// Case1:  Either it’s a “simple” department with an array of people – then we can sum the salaries in a simple loop.

// function sumSalaries(departments:Company):number{
//     // The base case: Check if the department is an simple array of people
//     for(let department of departments.sales){
//         if(Array.isArray(department.)){
//             department.reduce((prev, current)=> pre + current.)
//         }
       
//     }
   
// }
// sumSalaries(company);

function sumTo(num: number): number{
    // Case 1
    let count = 1;
    if(num === 0){
        return 0;
    }
   
    else{

        return num + sumTo(num -1)
       
    }
}
console.log(sumTo(5));

// let num = 10;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//     sum += i;
// }
// console.log(sum);