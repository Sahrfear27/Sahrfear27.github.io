// // 3.Write a function, mash, that uses map and destructuring in parameters of the callback function. Remember that you need () around 
// // destructuring brackets for an object if you do not have let or const. mash input is an array of objects with a, b, c properties.
// // It returns an array that has the a, b, c values multiply together.

import { userInfo } from "os";

// const abcs = [{ a: 1, b: 2, c: 3 }, { a: 2, b: 2, c: 2 }, { a: 5, b: 2, c: 3 }];
// type ABCobject = {
//     a: number,
//     b: number,
//     c: number
// }
// function mash(arr: ABCobject[]): number[] {
//     // Return each element of the array 
//     return arr.map(({ a, b, c }) => a * b * c);
// }

// console.log("expect [6, 8, 301:", mash(abcs));


// // 4 Array that contain nested objects
// // Define a type for the inner object
// type innerObject = {
//     name: string,
//     value: number,
// }

// // Define the outer  object that contain  an array of inner objects
// type OuterObject = {
//     id: number,
//     data: innerObject[],
// }

// const dataArray: OuterObject[] = [
//     {
//         id: 1,
//         data: [
//             { name: "A", value: 10 },
//             { name: "B", value: 20 }
//         ],
//     },

//     {
//         id: 2,
//         data: [
//             { name: "C", value: 30 },
//             { name: "D", value: 40 }
//         ],
//     },
// ]
// // Using the for of loop
// function getTotalSum(dataArr: OuterObject[]): number {
//     let sum = 0;
//     for (let detail of dataArr) { //Outer object as individual elements
//         for (let data of detail.data) { //Return inner object as individual elements
//             sum += data.value;
//         }
//     }
//     return sum;
// }
// console.log(getTotalSum(dataArray));
// // Using reduce
// function getTotalSum2(dataArr: OuterObject[]): number {
//     return dataArr.reduce((outerAccum, outerCurrent) => {
//         return outerAccum + outerCurrent.data.reduce((innerAccum, innerCurrent) => innerAccum + innerCurrent.value, 0)
//     }, 0)
// }
// console.log(getTotalSum2(dataArray));

// // Function to get all the names
// function getNames(dataArr: OuterObject[]): string[] {
//     let result = dataArr.flatMap((outerElement) => {
//         return outerElement.data.map((innerElem) => innerElem.name);
//     })
//     return result;
// }
// console.log(getNames(dataArray));

// // Function to return sum of the values of the inner object with their specified id
// function getSumById(dataArr: OuterObject[], id: number) {
//     // Get the value of the data base on the id
//     let sumValues = 0;
//     for (let record of dataArr) {
//         if (record.id === id) {
//             // If the id are the same, add the data
//             for (let data of record.data) {
//                 sumValues += data.value
//             }
//         }
//     }
//     return sumValues;
// }

// console.log(getSumById(dataArray, 1))

// // 5 Write a timer function, timer415, that takes a number of seconds as its arguments and logs the time remaining to the console. 
// //E.g., timer415(10) will immediately log 10, then after 1 second 9, then another second 8, etc down to 0.
// function timer415(seconds: number): void {
//     // Set the remaining time to seconds
//     let timeRemaining = seconds;

//     // Create a function to be called every seconds
//     function updateTime() {
//         console.log(timeRemaining);

//         if (timeRemaining === 0) {
//             // Clear or stop the interval
//             clearInterval(intervalId)
//         }
//         else {
//             // Decrement the time interval
//             timeRemaining--
//         }
//     }

//     const intervalId = setInterval(updateTime, 1000); //It doesnt take let
// }
// // timer415(15);


// //Write a recursive function, recursivePrimes, that will log all the prime numbers from n to 0. For example,
// // recursivePrimes (20) should log 19, 17, 13, 11, 7, 3. You should write a helper function for determining prime.

// // Helper function for primeNumbers
// function isPrime(num: number) {
//     // Check if the num is less than 1
//     if (num <= 1) {
//         return false;
//     }

//     // Check for even and odd numbers 
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// // Recursive function 
// function recursivePrimes(num: number) {
//     // Base case
//     if (num < 1) {
//         return;
//     }
//     else if (isPrime(num)) {
//         console.log(num);
//     }
//     recursivePrimes(num - 1)
// }
// recursivePrimes(19);



// // 7. Write a recursive function, nodeWalker, that will log the names of all the nodes to the console.

// type NodeWalker = {
//     name: string,
//     value: string | null,
//     children: NodeWalker[] | null,
// }
// let node4 = {
//     name: "label", value: "Name", children: null
// };
// let node5 = {
//     name: "input",
//     value: "this was typed by a user", children: null
// };
// let node3 = {
//     name: "p",
//     value: "This is text in the a paragraph", children: null
// };
// let node2 = {
//     name: "div", value: null, children: [node4, node5]
// };
// let node1 = {
//     name: "body", children: [node2, node3], value: null,
// }

// function nodeWalker(nodes: NodeWalker) {
//     // Base case: log the name of the current node
//     console.log(nodes.name);

//     // Check if the node have children
//     if (nodes.children) {
//         // Loop through that node
//         for (let child of nodes.children) {
//             // Call the nodeWalker function 
//             nodeWalker(child);
//         }
//     }
// }
// nodeWalker(node2);

// //8
// // Get average age, round the result to keep only two decimals. 
// //console.log/"expect 75.33" getAverageAge(array));

// // console.log/"expect (name:"syam", age:40Y", findOldestMan(array))
// // 9. Rewrite the following function as an arrow function
// // function printMe(){
// // console.log("hello");
// type Person = {
//     name: string,
//     age: number,
// }
// const array = [{ name: "ram", age: 29 }, { name: "syam", age: 40 }, { name: " ganga", age: 19 }];
// function getAverageAge(arr: Person[]): number {

//     let sum = arr.reduce((acc, person) => acc + person.age, 0)
//     let average = sum / arr.length;
//     return parseFloat(average.toFixed(2));
// }
// console.log(getAverageAge(array));

// // Find the oldest man (must use an appropriate array method)

// function findOldestMan(arr: Person[]) {
//     // Use reduce to find the oldest person
//     if (arr.length === 0) {
//         return null;
//     }

//     //In the reduce, check for the oldest person
//     return arr.reduce((oldestPerson, currentPerson) => {
//         return currentPerson.age > oldestPerson.age ? currentPerson : oldestPerson;
//     }, arr[0])
// }
// console.log(findOldestMan(array));

// //Rewrite the following function as arrow funation
// // function printMe(){
// //     console.log("Hello")
// // }
// const printMe = () => console.log("Hello")


// // Write a function, myReduce, that works like Array reduce, accept that it takes the artay to operat on as
// // an argument in addition to the reduce callback, and the initial value. Of course, your tuncion should not use Array.reduce.

// function myReduce<T>(arr: T[], reduceFunc: (initialVlue: T, currentValue: T) => T, initialVlue: T): T {
//     let accumulator = initialVlue;

//     // Loop through the array and apply reduce function
//     for (let i = 0; i < arr.length; i++) {
//         accumulator = reduceFunc(accumulator, arr[i])
//     }
//     return accumulator;
// }

// let number = [1, 2, 4, 5, 6];
// let sum = myReduce(number, (acc, curr) => acc + curr, 0);
// console.log(sum);




// //  Q10
// // Implement the following. Modify the taskManager object to be an object factory that will return an
// // object with just the two methods for managing the task list. The tasks aray should be encapsulsted in a
// // closure so that it is only accessible through the given public methods.
// interface Task {
//     taskId: number;
//     taskDescription: string;
//     priority: 'High' | 'Medium' | 'Low';
//     completed: boolean;
// }
// interface TaskManager {
//     tasks: Task[];
//     getIncompleteTasksCount(priority: 'High' | 'Medium' | 'Low'): number;
//     totalIncompleteTasks(): number;
// }


// // console.log(taskManager.totalIncompleteTasks()); // Example usage
// function makeFactory(): TaskManager {
//     // Declare the tasks as local variables
//     const tasks: Task[] = [
//         {
//             taskId: 1, taskDescription: 'Write a report', priority: 'High',
//             completed: false
//         },
//         {
//             taskId: 2, taskDescription: 'Attend a meeting', priority: 'Medium',
//             completed: true
//         },
//         {
//             taskId: 3, taskDescription: 'Code a new feature', priority: 'High',
//             completed: false
//         },
//     ];

//     // Return the object that will hold the methods and the tasks array
//     return {
//         tasks,  // Corrected the name to 'tasks' here
//         getIncompleteTasksCount: function (priority: 'High' | 'Medium' | 'Low'): number {
//             return this.tasks.reduce((count, task) => {
//                 if (task.priority == priority && !task.completed) {
//                     count++;
//                 }
//                 return count;
//             }, 0);
//         },
//         totalIncompleteTasks: function (): number {
//             return this.tasks.reduce((count, task) => {
//                 if (!task.completed) {
//                     count++;
//                 }
//                 return count;
//             }, 0);
//         },
//     };
// }

// const taskManager = makeFactory();
// console.log("The ans is " + taskManager.getIncompleteTasksCount('High')); // Example usage



// /* write functions executor, add, and mult as defined by the test below */
// //   describe("executor", function() 
// //   it ("tests add", function(){ assert.strictEqual(executor(add, 5, 10), 15);
// //  it("tests mult", function(){
// // assert.strictEqual(executor(mult, 5, 10), 50);

// function add(num1: number, num2:number){
//     return num1 + num2
// }

// function mult (num1: number, num2:number){
//     return num1 * num2;
// }

// function executor (func:(num1:number, num2:number)=> number, num1:number, num2:number):number{
//     return func(num1,num2);
// }
// console.log(executor(add, 5,10));
// console.log(executor(mult, 5,10));
// //13
// // Create an object calculator with two methods using an object literal: getValues(operand1, operand2) takes two values and saves them as object properties. 
// //sum() returns the sum of saved values. mul() multiplies saved values and returns the result.

// type Calculator = {
//     operand1: number,
//     operand2: number,
//     getValues(operand1:number, operand2:number): void,

// }
// let calculator = {
//     operand1: 0,
//     operand2:0,

//     getValues: function(operand1:number, operand2:number){
//         this.operand1 = operand1;
//         this.operand2 = operand2
//     },

//     // sum
//     sum: function():number{
//         return this.operand1 + this.operand2;
//     },
//     mult: function():number{
//         return this.operand1 * this.operand2
//     }

// };
// calculator.getValues(5, 10);
// console.log( "expect 15 : ", calculator.sum());
// console.log("expect 50: ", calculator.mult() );



// //use filter, find, and findIndex(as appropriate) to find, 1. all the even numbers, 2 the first even number, 3.the index of the first even number
// const numbers = [1, 5, 18, 2, 77, 108];
// // Filter to find all the even numbers
// let evenNum1 = numbers.filter((ele)=> ele%2 ===0);
// console.log(evenNum1);


// // Using find
// let even2 = numbers.find((ele)=> ele % 2== 0);
// console.log(even2);

// // Using findIndex
// let even3 = numbers.findIndex((ele)=> ele%2===0);
// console.log(even3);


// // use sort to sort an array of numbers in descending order[4, 2, 8, 15].sort/* something neededhere */); →[15, 8, 4, 2]
// function mySort(a:number, b:number){
//    if(a > b){
//     return -1;
//    }
//    else if(a < b){
//     return 1;
//    }
//    else{
//     return 0;
//    }
// }
// let arr = [4, 2, 8, 15];
// console.log(arr.sort(mySort))

// 15
// //use split, join, and sort to take the words in a string and reorder them by shortest to longest

// //16
// // let result = arr.map(function (item, index, array) {
// //     // returns the new value instead of item
// //     
// //     console.log(lengths); // 5,7,6
// //modify so that it logs array with index: item.length instead of just item.length console.log("expect 0: 5, 1: 7, 2: 6", lengths)
// let lengths = ["Bilbo", "Gandalf", "Nazgul"];
// let res = lengths.map((word, index)=> `${index}:${word.length}`);
// console.log(res);



 // 1. write a function, averagePoints, to get an array containing the average points across for each player .

// Try with a regular for..of loop and then using map.

type Player = {
    name: string,
    points: number[],
}
const player1 = {name: "Bob", points: [1, 2, 1]};

const player2 = {name: "Andre", points: [2, 0, 1]};

const player3 = {name: "Max", points: [1, 1, 1]};

const players = [player1, player2, player3];

function averagePoints(playerArray:Player[]){
    let averagePoints = [];

    // Loop through the plaayer for each player
    for(let player of players){
        //return each player
        let sum = 0;
        for(let point of player.points){
            sum += point;
        }
        const average = sum / player.points.length;

        averagePoints.push({[player.name]:average});
    }
    return averagePoints;
}
console.log(averagePoints(players));

let uersPoints = players.map((player)=> {
    let sum = player.points.reduce((acc, curr)=> acc+curr,0);
    let ave = sum / player.points.length;
    return{
        [player.name]:ave
    }
})
console.log(uersPoints);

// use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]
const array123 = [1, 2, 3];
let result = array123.map((ele)=> ele ** 2);
console.log(result);

function timer(seconds: number){
    let remainingTime = seconds;

    function updateTimes(){
        console.log(remainingTime);
        // Check if the remaining time is 0
        if(remainingTime === 0){
            clearInterval(intervalId);
        }
        else{
            remainingTime --;
        }
    }
    const intervalId = setInterval(updateTimes, 1000);
}
timer(10);