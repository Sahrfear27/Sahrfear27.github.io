import { it } from "node:test";

// To convert from number to string
const foo = 45;
const bar = "" + foo;
const bar2 = "" + 108;
const bar3 = foo.toString();
console.log(bar3)
const bar4 = 108..toString(); //need both periods after number
console.log(bar4)
const bar5 = foo + "";
console.log(typeof foo === "number"); //true
console.log(typeof bar === "string"); //true
console.log(typeof bar2 === "string"); //true
console.log(typeof bar3 === "string"); //true
console.log(typeof bar4 === "string"); //true
console.log(typeof bar5 === "string"); //true

console.log("\n")

console.log(0.666667.toFixed(4) == (2 / 3).toFixed(4)); // true?
console.log(0.6666666666666667 === 2 / 3); // true?


let str = "Widget with id";
console.log(str.indexOf("id"));


let userString = "Slice is cool!";

for (let i = 0; i < userString.length; i++) {

    console.log(userString.slice(i).trim());

}



// remove 3 elements and replace them with the other two:
let arr = ["I", "study", "JavaScript", "right", "now"];

arr.splice(0, 3, "Let dance");
console.log(arr);


// for each element method
["Bilbo", "Gandalf", "Nazgul"].forEach(function (character) { console.log(character) });

let array1 = [1, 5, 16, 3, 108].forEach(function (num: number): void {
    if (num % 2 === 0) {
        console.log(num);
    }
});


// Alternative Method
function isEven(num: number): void {
    if (num % 2 === 0) {
        num;
    }
}
// function evenEle(array1: number){
//    array1.forEach(currentItem => {

//    });
// }


// const arr3 = [1, 2, 3, 4, 5];
// let result1 = arr3.spl




// use slice and splice to implement the replaceInterior function
const arr4 = [1, 2, 3, 4, 5];
const result = replaceInterior(arr4, 999);
console.log("expect [1, 999, 5]: ", result);
const result2 = replaceInterior(arr4, 1234);
console.log("expect [1, 1234, 5]: ", result2);
console.log("expect [1, 2, 3, 4, 5]: ", arr4);

function replaceInterior(arr4: number[], num: number): number[] {
    let result = arr4.slice();
    result.splice(1, arr4.length - 2, num);
    return result;
}


console.log(arr4.slice(0));



const numbers = [1, 5, 18, 2, 77, 108];
// ➢ use filter, find, and findIndex to find
// ➢ all the even numbers
// ➢ the first even number
// ➢ the index of the first even number


// All even numbers

// const evenNumber = number.filter(num => num%2 === 0)
console.log(numbers.filter(num => num % 2 === 0));
console.log(numbers.find(num => num % 2 === 0));
console.log(numbers.findIndex(num => num % 2 === 0));

// All odd numbers
console.log(numbers.filter(num => (num % 2 !== 0)));
console.log(numbers.find(num => (num % 2 !== 0)));
console.log(numbers.findIndex(num => num % 2 !== 0));




// d23 Method Assignments
let zero = new Number(0);
let firstZero = 0;
if (zero) {
    console.log("Zero is thruthy");
}
if (firstZero) {
    console.log("This will not be thruthy");
}

let billion = 1e9;
console.log(billion);

let msc = 1e-6;
console.log(msc);

let num = 255;

console.log(num.toString(16));


let nums = 3.1;
console.log(Math.trunc(nums));


// Rounding numbers
// let num3 = 1.123556;
// console.log(Math.round(num3 * 100)/100); //1.12
// console.log(num3.toFixed(2));

// let a = +prompt("The first number?", "");
// let b = +prompt("The second number?", "");

// console.log( a + b );



function circumferene(r: string): number {
    if (isNaN(parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log("The circumference is " + circumferene('4.567abcdefgh'));


// Searching for String
let strings = "Widget with id";
console.log(str.indexOf("Widget"));
console.log(str.indexOf("id"));

// Use Include: str.includes(subString, pos)
console.log(strings.includes("Widget"));
console.log("I love programming".includes("fear")); //false
console.log("This is another test".includes("test"));



let wordString = "Strings";
console.log(wordString.slice(0, 2));
console.log(wordString);

let y = "   This is a test ";
let x = y.trim() //The trim removes spaces from both end of the string
console.log(`Before trim: ${y}`)
console.log(`After trim : ${x}`);

console.log(wordString.repeat(3));

let gene = "Javascript is cool";
for (let i = 0; i < gene.length; i++) {
    console.log(gene.slice(i).trim());
}


// The splice method
let arrayEle = ["I", "Study", "Javascript"];//replace javacript to python
arrayEle.splice(2, 1, "Python"); //from index2, delete 1, replace with python
console.log("Expected outcome is i love python: " + arrayEle.join(" "));

console.log(arrayEle.slice(0, 2));
let arrr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arrr.splice(0, 2); //I study

function addEvenNum(firstNum: number[], secondNum: number[]): number {
    let totalArray = firstNum.concat(secondNum);
    let newArr: number[][] = [totalArray];
    let sum = 0;
    for (let arr of newArr) {
        for (let num of arr) {
            if (num % 2 === 0) {
                sum += num;
            }
        }
    }
    return sum;
}
console.log(addEvenNum([1, 2], [3, 4]))

// Flat Method: Convert 2D array into 1d
let twoD = [[1, 2], [3, 4]];
console.log(twoD);
let flatMethodArray = twoD.flat();
console.log(flatMethodArray);
console.log(`The result for the ${twoD} is now ${flatMethodArray}`);

// For each loop: Execute and provide function once for each array element
let array2 = ['a', 'b', 'c', 'd'];

array2.forEach((char: string): void => console.log(char));

// use forEach to log all the even elements of an array to the console
let mixNumbers = [1, 5, 16, 3, 108, 102];
mixNumbers.forEach((num: number) => (num % 2 === 0) ? console.log(num) : undefined);



// Filter: Create a shallow copy of an element and filter down just the element that passes
let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
let wordOutput = words.filter((ele: string) => ele.length < 8);
console.log("The ans is " + wordOutput);

let userObject = [
    { id: 1, name: "John" },
    { id: 2, name: "Kelvin" },
    { id: 4, name: "Joseph" },
];
// Check if the property with id 6 exist and print it value
let idValue = userObject.filter((objects) => (objects.id === 1) ? objects.name : undefined);
console.log(idValue);



// The find expression : Find the first expression that satisfies a specific conditions

// Use the find method to get the name with id 2
let personName = userObject.find((objects) => (objects.id === 2));
console.log(personName?.name);


function sayHi(): void {
    console.log("Hello");
}
const myHi = sayHi;
console.log(sayHi);
function higherOrder(): () => void { return sayHi; }
const hiFunction = higherOrder();
hiFunction()
hiFunction()
hiFunction()
//higherOrder(); //Will not print any thing because the function is returning sayHi

// The reduce Method: Pass the return value from the calculation to the proceeding elements
const array3 = [1, 2, 3, 4];

// Set initial value
let initialValue = 0;

const sumWithInitialValue = array3.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitialValue);


const getMax = (a: number, b: number): number => Math.max(a, b);
console.log(getMax(17, 3));



// The map method: Call the function for each element of the array and return the array of result
let results = arr.map(function (item, index, array) {
    // returns the new value instead of item
});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(name, index):string => item.length);
console.log(lengths); // 5,7,6
//modify so that it logs array with index: item.length instead of just item.length
// console.log("expect 0: 5, 1: 7, 2: 6", lengths); 



let len = ["Bilbo", "Gandalf", "Nazgul"].map(item => item);
console.log(len); // 5,7,6

let resul = len.map(function (item, index) {
    return `${index}: ${item.length}`;
});
console.log(`Result: ${resul}`);


let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// let resultS = users.find((items)=> items.name);
// console.log(resultS);

// The Find: Return a specific elements that specifies a specific conditions
let result3 = users.find((elements) => (elements.id === 3) ? elements.name : null);
console.log(result3);


// Filter: Return a shallow copy of all matching array elemnts
// Return all the users with id less than 3

console.log(users.filter((elements) => elements.id < 3));


// Use map to return all the element that has id less than 3
console.log(users.map((elemets) => elemets.id < 2));



let ar = ["Bilbo", "Gandalf", "Nazgul"];
console.log(ar.map((eltments) => eltments.length));


// Sort Method: Sort array in place and then return the result
let sortArray = [1, 2, 15, 3, 4, 11, 11];
console.log(sortArray.sort()); //Output will not be as expected because all elements are converted to string before comparism

// Note: To sort a string, use the localecompare
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a, b) => a > b ? 1 : -1));// Andorra, Vietnam, Österreich
console.log(countries.sort((a,b)=> a.localeCompare(b))); //Andorra, Österreich,Vietnam



// Create a compare function
function compare(num1: number, num2: number) {
    return (num1 > num2) ? 1 : (num1 === num2) ? 0 : -1;
}
console.log(sortArray.sort(compare));


type Person = {
    name: string,
    age: number
}

function findEvenAge(arr: Person[]): Person | undefined {

    return arr.find((person) => person.age % 2 === 0);
}
const peopleArray = [{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
console.log(findEvenAge(peopleArray));


// Write the function camelize(str) that changes dash-separated
//  words like “my-short-string” into camel-cased “myShortString”.


// function camelize(str: string){
//     // Remove all the dashes and put the word into a list
//     let result = str.split("-");

//     // Change the first letter of the word that comes after with upper case
//     result.map((word, index)=> index == 0? word: word[0].toLocaleUpperCase()+ word.slice(1)).join("");
//     return result;
// }
function camelize(str:string) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
  }
console.log(camelize("background-color"));


console.log()