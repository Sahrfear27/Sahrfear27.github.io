// // "use strict";
// // let arr = ["Ilya", "Kantor"];
// // const [firstName, lastName] = arr; //
// // console.log(firstName);
// // console.log(lastName);
// // const team = ["Bob", "Fred", "Jim"];
// // const [bob, fred, jim] = team;
// // console.log(team);
// // console.log("Hello")


let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};
for(let subDepartment of Object.values(company)){
    // sum += sumSalaries(subDepartment); //subdapratment will now be an array
    console.log(subDepartment);
}
// function sumSalaries(departments){

//     // Case1: Since it is a simple department of array of people, we can sum all the salaries
//     if(Array.isArray(departments)){  // Check if it an array
//         return departments.reduce((accum, currentValue)=> accum + currentValue.salary,0)
//     }else{
//         // If it is an object with nth sub department: make nth recursive call
//         let sum = 0;
//         for(let subDepartment of Object.values(departments)){
//             sum += sumSalaries(subDepartment); //subdapratment will now be an array
//         }
//         return sum;
//     }

// }
// console.log(Object.values(company.development));
// console.log(sumSalaries(company));

// let name = "John";

// function sayHi() { console.log("Hi, " + name); }

// name = "Pete";

// sayHi(); // what will it show?
// function makeWorker()

// { let name = "Pete";

//     return function() { console.log(name); };

// }

// let name = "John";

// // create a function

// let work = makeWorker();

// // call it

// work(); // what will it show?


// function evenRecurse(num){
//     if(num < 0){
//         return ;
//     }

//    if(num % 2 === 0){
//     console.log(num);
//    }
//    evenRecurse(num-2)

// }
// evenRecurse(7) 


// function evenRecurse(num) {
//     if (num < 0) {
//         return 0;
//     }
//     if (num % 2 === 0) {
//         return num + evenRecurse(num - 2);
//     }
// }

// console.log(evenRecurse(7));


// // write a function, averagePoints, to get an array containing the average points across for each player . Then modify the function to return objects,

// // Try with a regular for..of loop and then using map and reduce.
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));


// function averagePoint(players){
//     return players.map((player)=> {
//         let totalPoint = player.points.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
//         let average = totalPoint / player.points.length;
//         return {[player.name]:average}
//     })
// }



// function averagePointsLabeled(players) {
//     return players.map(player => {
//         const totalPoints = player.points.reduce((acc, curr) => acc + curr, 0);
//         const average = totalPoints / player.points.length;
//         return { [player.name]: average };
//     });
// }