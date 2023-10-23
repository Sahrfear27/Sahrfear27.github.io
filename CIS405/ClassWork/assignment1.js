const prompt = require("prompt-sync")({sigint:true});
// q1
// Odd
// function odd(numOfArray){
//     let oddNumberArray = [];
//     for(let num of numOfArray)
//     {
//         if(num %2 != 0)
//         {
//             // If the number is odd, add the odd number to the oddNumber array 
//             oddNumberArray.push(num)
//         }
//     }
//     return oddNumberArray;
// }
// console.log(odd([1,2,3,4,5,6,7,8,9,20]))

// Even
// function even(numberOfArray){
//     let evenNumberArray = [ ];
//     for(let num of numberOfArray){
//         if(num %2 == 0)
//         {
//             // If the number is even, add the number to the evenNumber array 
//             evenNumberArray.push(num)
//         }
//     }
//     return evenNumberArray;
// }
// console.log(even([11,12,13,14,15,16,17]));

// // Divisible by 4
// function divisibleByFour(numOfArray)
// {
//     let newArray = [];
//     for(let num of numOfArray)
//     {
//         if(num % 4 === 0)
//         {
//             newArray.push(num);
//         }
//     }
//     return newArray;
// }
// console.log(divisibleByFour([3,1,4,6,14,12,20,9,8]));


// q2
// Sum of odd
// function sumOdd(numOfArray){
//     let sum = 0;
//     for(let num of numOfArray)
//     {
//         if(num %2 != 0)
//         {
//          sum += num;
//         }
//     }
//     return sum;
// }
// console.log(sumOdd([1,2,3,4,5,6,7,8,9,20]));

// Sum of Even
// function sumEven(numOfArray){
//     let sum = 0;
//     for(let num of numOfArray)
//     {
//         if(num %2 == 0)
//         {
//          sum += num;
//         }
//     }
//     return sum;
// }
// console.log(sumEven([11,12,13,14,15,16,17]));

// Sum of numbers Divisible by 4
// function SumdivisibleByFour(numOfArray)
// {
//     let sum = 0;
//     for(let num of numOfArray)
//     {
//         if(num % 4 === 0)
//         {
//             sum += num;
//         }
//     }
//     return sum;
// }
// console.log(SumdivisibleByFour([3,1,4,6,14,12,20,9,8]));


//q3
// Find Unique Numbers in the Array
// Use index of or nested for loop
// function findUniqueNumber(userNumber)
// {
//     let numOfArray = [1,2,3,4,5,6,7,8,9]; //====> 
//     for(let num of numOfArray)
//     {
//         if(num === userNumber)
//         {
//             return userNumber + "  was found in the array"
//         }
//         else{
//             return userNumber + " is not in the array"
//         }
//     }
// }
// let userNumber = parseInt(prompt("Enter a number you want to find"));
// console.log(findUniqueNumber(userNumber));

// q4
// Transform Array to print the type of elements in the Array
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]
// let someArray = [50,"apple",{a:1}];
// function getTypes(arr){
//     let newArray =[ ];
//     for(let i = 0; i < someArray.length; i++)
//     {
       
//         newArray.push(typeof(someArray[i]));
//     }
//     return newArray;
// }
// console.log(getTypes([50,"apple",{a:1}]));

// let arr = [1, "apple", true, [1,2], {a:1, b:2}];
// Return the length of the element
 //Array.isArray()

 function lengthOfArray(arr)
 {
    let newArray = [];
    for(let element of arr)
    {
            if(typeof(element) !== 'object')
            {
                newArray.push(element.toString().length);
            }
            else {
        
            if (Array.isArray(element))
            {
                newArray.push(element.length)
            }
            else{
                newArray.push(0);
            }
        }
    }
    return newArray;
 
 }
console.log(lengthOfArray([1, "apple", true, [1,2], {a:1, b:2}]))

// Pushing an element to the array


// Delete an element from an array
let num = [1,2,3,4,5];
// num = delete num[num.length-1]
console.log(num.pop())
console.log(num);
