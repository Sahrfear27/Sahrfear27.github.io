
// Quiz Questions
// Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number, e.g.,
// evenRecurse(7) will log 6,4,2,0

import { it } from "node:test";


console.log(" ");
// Using the recursion
let num2 = 7;
function evenRec(num: number) {
    //Case1
    if (num < 0) {
        return;
    }
    if (((num % 2 === 0) && (num > 0)) || (num === 0)) {
        console.log(num);
    }
    return evenRec(num - 1);
}
evenRec(num2);


// map method
let wordString = ["Bilbo", "Gandalf", "Nazgul"]
let lengths = wordString.map((item, index) => `${index}: ${item.length}`);
console.log(lengths);


// The sort
let arr = [2, 1, 15];
// console.log(arr.sort());

function helpFun(a: number, b: number) {
    return (a > b) ? 1 : (a == b) ? 0 : -1;
}
console.log(arr.sort(helpFun));

function helpFun1(a: number, b: number) {
    return (a > b) ? -1 : (a == b) ? 0 : 1;
}
console.log(arr.sort(helpFun1));


// Destructure to any assignable: First destructure the type annotation and then assign it to the object
type User = {
    firstName: string,
    lastName: string,
    age: string
    sex: string
}
const person = {
} as User;
[person.firstName, person.lastName, person.sex, person.age] = "Kai vixon M 24".split(' ');
console.log(person.age);
console.log(person)

const [name1, name2, ...rest] = ["Julius", "Caesar", "Consul”, “ of the Roman Republic"];
console.log(rest);
const [num1, num3, num4, ...remain] = [4, 5, 2, 6, 7]
console.log(remain)



// Output: Output the key and value
const object1 = {
    a: "somestring",
    b: 23
}
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}:${value}`);
}

//defalut values
const options = {
    title: "Menu",
    width: 100,
    height: 200
};


const { width: w, height: h } = options;
console.log(w);
console.log(h);

const { width: w2, height: h3, title: t }: { width: number, height: number, title: string } = options;

const team = { point: "Bob", shooting: "Fred", power: "Jim", small: "Al", center: "Big Sleep" }
const { point, shooting, power, small, center } = team;
console.log(shooting);


// Destructuring functions parameters 
let option2 = {
    title: "My menu",
    items: ["Item", "item2"]
}

const { title, items } = option2;
console.log({ title, items });

function showMenu({ title = "Untitle", width = 200, height = 300, items = [] }) {
    console.log(title)
    console.log(width)
    console.log(height)
    console.log(items);
}
// showMenu(option2)
console.log(" ");
// Json:Mechanism to improve communication between two entires: client and servers,

let users = {
    name: "John",
    age: 35,
    toString: function (): string {
        return `{name: "${this.name}", age: ${this.age}}`
    }
}
console.log(users.toString());
console.log(users);

// Json.stringify: convert object into json
const student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};

// Convert the object into json: otherword to string
const json = JSON.stringify(student);
console.log(json);


// Json.parse: Convert back into an object
let jsonObj = JSON.parse(json);
console.log(jsonObj);


// Conver this string into an object
let numbers = "[1,2,3,4]"
numbers = JSON.parse(numbers);
console.log(numbers)//[1,2,3,4] : which is of type object
console.log(numbers[0]);
console.log(typeof (numbers));

let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
console.log(user);
console.log(typeof (user));
// console.log(user.friends[1])


//create and log to the console a JSON string from john. Then create a new instance of john, johnClone, using
// JSON.parse on the JSON string you created. Is john === johnClone? //False: Both reference to different location in the memory
const johns = {
    name: "John",
    surname: "Smith",
    isAdmin: false,
    birthday: { "year": 2000, "month": "February", "day": 3 },
    friends: [0, 1, 2, 3]
}

let newJohn = JSON.stringify(johns);
console.log(newJohn)

// Clonning John using the parse
let johnClone = JSON.parse(newJohn);
console.log(johnClone);
console.log(johns === johnClone);



// Closure: 
function makeCounter(): () => number {
    let count = 0;
    return function (): number {
        count += 1;
        return count;
    };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
 

// RECURSION
// Power
function pow(num:number, exp:number):number{
    // base case
    if(exp === 1){
        return num; //2 to the power 1 is 2
    }
    else{
        return num * pow(num, exp - 1)
    }
}
console.log(pow(2,3));

// Factorial
function factorial(num:number):number{
    if(num === 0){
        return  1;
    }
    else{
        return num * factorial(num -1);
    }
}
console.log(`5! is ${factorial(5)}`);


// Write a recursive function to count the instances of a letter in a string. Use
// recursion rather than split and filter.
// • Base case?
// • Reductive recursive call?
// countInstances("All that is great and good.", "t") → 3

function countInstances(phrase:string, char: string):number{
    
    // Base case: If empty phrase, return 0 count for character
    if(phrase === ""){
        return 0;
    }
    else if(phrase[0] ===char){
        // Character is in phrase, return 1 and remove the character from the pharase
        return 1 + countInstances(phrase.slice(1), char);
    }
    else{
        return countInstances(phrase.slice(1), char);
    }

}
console.log(countInstances("All that is great and good.", "t"));


//Map People:
type People = {
    name: string,
    surname: string,
    age: number
}
let john = { name: "John", surname: "Smith", age: 10 };
let pete = { name: "Pete", surname: "Hunt", age: 20 };
let people = [ john, pete];

// Use the map function to map the people array to the following:
// [{ fullName: "John Smith", age: 10 },
// { fullName: "Pete Hunt", age: 20 },]

function mapPeople(peopleArray: People[]){
    return peopleArray.map((ele)=> {
        return{
            fullName : ele.name + " " + ele.surname,
            age: ele.age
        }
    })
}

// console.log(mapPeople(people));

// Alternative Solution
let userMap = people.map((person)=> ({fullName: `${person.name} ${person.surname}`, age:`${person.age}`}));
console.log(userMap);


// Use the spread operator to clone arr1:
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2)
console.log(arr1 == arr2);

function evenRecuv(num:number){
    // Base Case: When number become -1,  it becomes trival to the function
    if(num < 0){
        return;
    }
    else if(((num % 2 === 0)) || (num === 0)){
        console.log(num);
       
    }
    return evenRecuv(num -1)
}
evenRecuv(7);

//write a function, averagePoints, to get an array containing the average points across for each player . Then modify the function to return objects,
// Try with a regular for..of loop and then using map and reduce.
type Player = {
    name: string,
    points: number[],
}
const player1 = {name: "Bob", points: [1, 2, 1]};
const player2 = {name: "Andre", points: [2, 0, 1]};
const player3 = {name: "Max", points: [1, 1, 1]};
const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));

// Using for loop
function averagePoints(players:Player[]){
    // Get details of each player
    let playerDetails = []
    for(let player1 of Object.values(players)){
        let sum = 0;
        for(let point of player1.points){
            sum += point;
        }
        let average = sum /player1.points.length;
        playerDetails.push(average);
    }
    return playerDetails;
}
console.log(averagePoints(players));


// Using map and reduce
function averagePoints2 (players:Player[]){
    // Use map to return an average of all the element of the callback function 
    //and inside map use reduce to calculate the sum and average of all element
    return players.map((arrElement)=>{
        // Use reduce to add all the elements
        let sum  = arrElement.points.reduce((accumulator, currentValue)=> accumulator + currentValue,0);
        let average  = sum / arrElement.points.length;
        return average;
    })
}
console.log(averagePoints2(players));