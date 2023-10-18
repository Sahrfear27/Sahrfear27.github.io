let numbers = [10,23,4,5,89];
function numArray()
{
    let nums= [];
    for(let num of numbers){
    if(num%2 === 0)
    {
        nums.push(num)
    }
    }
    return nums;
}

console.log(numArray())

function isPalindrome(word)
{
    let newWord="";
    for(let i = word.length-1; i >= 0; i--)
    {
        newWord += word[i];
    }
    if(newWord === word)
    {
        return "The word is palindrome";
    }
    else{
        return "The word is not a palondrome";
    }
}

console.log(isPalindrome("mom"));

// Object
let obj = {a:1, b:"apple"}
obj.a=2;

// Also add a property of 2
// Afrter an update
// let obj = {b:"apple"}
// obj.a=2;
// console.log(obj)

// How to delete a property
// After delete
// delete obj.b;
// console.log(obj)

// How to loop in an object
// for(let key in obj){
//     console.log( key,obj[key])
// }


// Print the key whose value is "apple"
for(let key in obj){
    // console.log( obj.key('apple'));
   if(obj[key]==="apple")
   {
    console.log(key);
   }
   // To get the value of the objects
console.log(key,obj[key]);
    
}

// When you know the property name to access the key value
// let obj2 = {a:1, b:2, c:4}

// // when you dont know the property name 
// let myVar="4"
// obj2[myVar]

// // The Javascript method
// let word = "sahrfear";

// List : Has duplicated numbers
// Set : has a unique items