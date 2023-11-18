// • write a function, multiplyEvens
// • can be called with any number of arguments
// • returns the product of the even arguments
// • hint: …rest parameter
// multiplyEvens(1, 6, 3, 4, 17, 2) 


function multiplyEvens(...more: number[]) {
    let evenNum = 1

    for (let num of more) {
        if (num % 2 === 0) {
            evenNum *= num;
        }
    }
    console.log(arguments.length);
    return evenNum;
}
console.log(multiplyEvens(1, 6, 3, 4, 17, 2))



//Arguments: corresponds to the arguments passed to a function

// The rest parameters: Feature that allows funtion to accept infinite number of arguments

// Add all the numbers that will be passed as argument to the array sum
function sum(num1: number, num2: number, ...moreParameters: number[]) {
    let sum = num1 + num2;
    if (moreParameters.length > 0) {
        for (let num of moreParameters) {
            sum += num
        }
    }
    return sum;

}
console.log(sum(3, 5, 6, 7, 8, 3, 2, 3,));


function multiplyEvenNum(...randomNumbers: number[]): number {
    // Using the reduce method
    return randomNumbers.reduce((accumulator, currentValue) => {
        if (currentValue % 2 === 0) {
            return accumulator * currentValue;
        }
        else {
            return accumulator;
        }
    }, 1)
}

// The spread Operator: 
let a, b, c, d, e;
a = [1, 2, 3];
b = 500
c = [42, 142];

// Using the concat method
d = a.concat(c);
console.log(d);

e = [...a, b, ...c];
console.log(e);
const copyOfA = [...a]; //copy of a
console.log(`The copy of ${a} is now ${copyOfA}`);
console.log(copyOfA);

// Using the string
let str = "Hello";
console.log([...str]);

// The spread operator can be use to make a shallow copy of an object
let a1 = { x: 1, y: 2, z: 3 };
let c1 = { x: 1, y: 2, z: 3 }
console.log(a1 == c1); //false beacuae the both reference to different location

a1 = c1;
console.log(a1 == c1); //True: There are now pointing to the same memory location in the stack
b = { ...a1 } // b is now {x:1. y:2, z:3}

console.log(b == a1)// false

b.x = 20;
console.log(a1)// a1 will not be affected by the changes of b
console.log(b);


// Deep clone ==> structuredClone(): new global function to deep clone
const user = {
    name: "Lachlan Morris",
    address: { street: "Original Road", city: "Placeshire" },
};

const deepCloneUser = structuredClone(user);

deepCloneUser.name = "Sahrfear";
console.log(user)
console.log(deepCloneUser);


// Timers
// SetTimeOut: Allows a function to run once after every interval
//SetInterval: Allows a function to run regularly with the interval within the run

// SetTimeOut
function sayHello(): void {
    console.log("Hello");
}
setTimeout(sayHello, 4000);

// With arguement
function sayHello2(greeting: string, who: string): void {
    console.log(greeting + " " + who);
}
setTimeout(sayHello2, 5000, "Hello", "Sahrfear");


// Function to print even numbers
function printEven(...num: number[]): void {
    const result =  num.reduce((initValue, currentValue) => {
        if (currentValue % 2 === 0) {
            return  initValue + currentValue;
        }
        else {
          return initValue;
        }
    }, 0)
    console.log(result);
}

// console.log(setTimeout(printEven, 6000, ([1,2,3,8,19,12])));
setTimeout(()=> printEven(1,2,4,5,1,6,10,11),6000); //Here the anonymous function call the print even


function returnSquare(...num: number[]){
    let square = num.reduce((accum:number[], currentValue: number)=>{
        let result = currentValue * currentValue;
        return [...accum,result]
     },[])
     return square
}
console.log(returnSquare(1,2,3,4,5));


// setInterval
function printSomeThing(nums: number): void{
   for (let i = 0; i < nums; i++) {
        console.log(i)
   }
}
// console.log(printSomeThing(10))
setTimeout(()=>printSomeThing(10),2000);





// Delete this for redundancy
let a2 = [1, 2, 3];
let b2 = 500
let c2 = [42, 142];

console.log([...a2, ...c2])






// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [john, pete];

// function mapPeople(people) {
//     return people.map((person) => {
//         return {
//             fullName: person.name + " " + person.surname,
//             age: person.age,
//         };
//     });
// }

// console.log(mapPeople(people));
