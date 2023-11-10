
// import promptSync from "prompt-sync";
// const prompt = promptSync();

type persons = {
    name: string;
    age: number;
    job: string;
    sayHi(this: persons): void;
}
const manager: persons = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
};
const intern: persons = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
};

function sayHowdy(this: persons) {
    console.log("Hello, my name is " + this.name + ".I am " + this.age + ". My Job is a software Engineer");
}


// modify the code on the previous slide so that
manager.sayHi(); // Hello, my name is John. I am 27. My job is Software Engineer.'
intern.sayHi(); // Hello, my name is Ben. I am 21. My job is Software Engineer Intern.'



let a = 5;
let b = { a };
console.log(b); // {x : 5}
function su(arr: number[]): number { let tot = 0; for (let num of arr) { tot += num } return tot; }
const fo = { su, a };

console.log(fo.su)
console.log(fo.su([1, 2, 3]));
console.log("Foo is " + fo);


//write a for loop to print out the values of the properties according to the property names in the
// propertyOrder array. You must use the properties array to access the values. You cannot directly
// write console.log(numbers.one)

const numbers: { [key: string]: number } = {
    one: 1,
    two: 22,
    three: 333,
    four: 444
}
const propertyOrder = ["one", "four", "three", "two",];

for (let property of propertyOrder) {
    console.log(numbers[property])
}


let user = {
    name: "John",
    age: 30,
    sayHi: function () { },
    admin: false,
    becomeAdmin: function () {
        return this.admin = true
    }
};

user.sayHi = function (): void {
    console.log("Hello World");
}
user.sayHi()
console.log(user.becomeAdmin());


// If you have this in a function, you need to declare its type. 
type Person = {
    name: string,
    age: number,
    job: string,
    sayHi(this: Person): void; //this refers to the type Person
}
const managers: Person = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdys
};

const interns: Person = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdys
}

// The function is of type person
function sayHowdys(this: Person) {
    console.log("Hello my name is ", this.name, ". and i am ", this.age, ". My Job is ", this.job);
}

managers.sayHi();
interns.sayHi();



let x = 5;
let y = { x };
console.log(y);



// Square Bracket Notations 

let userName = {
    name: "John",
    "likes birds": true,
    age: 23
};

console.log(userName["likes birds"]);


// Computed Properties


const nums: { [key: string]: number } = {
    one: 1,
    two: 22,
    three: 333,
    four: 4444,
}
const pOrders = ["one", "four", "three", "two"];

for (let property of pOrders) {
    console.log(nums[property]);
}


let usl = {
    name: "John",
    age: 34,
    isAdmin: true
}

for (let key in usl) {
    console.log(key);
}


// Using the .find method to access element in an array object

const loggedUsername = "Sam";

const users3 = [
    { name: "Obay", age: 12 },
    { name: "Sam", age: 33 }
]

// Check if the log username is sam using find method and arrow function
const found = users3.find((ele) => ele.name === "Sam");
console.log(found);

// The found method return the first method of the provided array that match the testing conditions

const array1 = [3, 4, 5, 6, 7, 9, 23, 15];
const foundNum = array1.find((num) => (num > 7));
console.log(foundNum);

// Define the type of the object
type U = {
    name: string,
    age: number,
    greet(this:U): void
};

let user5:U = {
    name: "John",
    age: 35,
    greet: sayHello
};

 function sayHello(this:U) {
    return "Hello " + this.name
}
console.log(user5.greet());




// Repeat until the input is a number
function readNumber(){
   while(true){
    // Get the userInput
    let userInput = prompt("Enter a number");

    // Check if the input is null
    if(userInput === null){
        console.log("You cancle the input")
        return null;
    }
    // Check if the input is an empty string
    else if(userInput === ""){
        console.log("An empty input");
    }
    else if(!isNaN(Number(userInput))){
        console.log("You have entered " + Number(userInput));
        break;
    }
    else{
        console.log("Enter a number");
    }
   }
}
readNumber()