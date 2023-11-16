// Write a function, makeCounter() that declares a local variable, count, and
// another local variable, innerFunc, which is an inner function; innerFunc will
// increment the count variable and return the incremented value. makeCounter
// should return innerFunc.
// Call it twice to make different counters, counter1 and counter2.
// Do they keep independent counts?

function makeCounter() {
    let count = 0;
    return function innerFunc(): number {
        count++;
        return count;
    }

}

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log(counter1())
console.log(counter1())
console.log(counter2())



function outerFunction(outerVariables:string){
    return function innerFunction(innerVariables:string){
        console.log(`Outer Variables ${outerVariables}`);
        console.log(`Inner Variables ${innerVariables}`);
    }
}

const newFunction = outerFunction('outside');
newFunction('Inside');


function sayHiBye(firstName: string, lastName: string){

    // A nested helper function
    function getFullName(){
        return firstName + " " + lastName;
    }
    console.log(`Hello ${getFullName()}`);
    console.log(`Bye ${getFullName()}`);
}

sayHiBye("Alves", "Macarthy");


// function f(){
//     let value = 123;

//     return function(){
//         console.log(value);
//     }
// }
// let g = f(); //stores a reference to the lexical environments of the corresponding f() call
// // g();
// let arr = [g(), g(), g()];
let name2 = "John";

function sayHi() {
  console.log("Hi, " + name2);
}

name2= "Pete";

sayHi(); // what will it show: "John" or "Pete"?



function sum(a: number){

    return function(b: number){
        return a + b;
    }
}


// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.


function inBetween(a:number, b: number){
    return function(x: number){
        return x >= a && x<= b
    }
}
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.filter(inBetween(3,6)));