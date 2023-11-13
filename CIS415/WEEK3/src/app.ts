//Distructering: Allows us to unpack arrays and object into a set of variables

let arr = ["Ilya", "Kantor"]
// sets firstName = arr[0] and surname = arr[1]
let [firstName, surname] = arr;
console.log(firstName); //This will print out the first name of the arr




// How to skip array elements  
//Unwanted Element can be skipped through a extra comma
const [firstName1, , title] = ["Julius", "Caesar", "Consul”, “of the Roman Republic"];
console.log(title);


// Destructure to any assignable
type User ={
    name:string,
    surname:string
}
// You can you any assignable on the left hand
const user = {} as User;
[user.name, user.surname] = "Sahr fear".split(' ');
console.log(user.name);
console.log(user.surname);


// The rest ‘…’ operator: It can collect the remainig elements and return it as an array
const [name1, name2, ...balance] = ["Julius", "Caesar", "Consul”, “of the Roman Republic"];
console.log(balance);


const team = ["Bob", "Fred", "Jim"];
const [fName, sName, lName] = team;
 [fName, sName, lName].forEach((elem)=>  console.log(`Expect ${elem}: ${elem.toLowerCase()}`))

let arr2 = [ 1, 2, 15 ];
// the method reorders the content of arr
arr.sort();
console.log( arr2 ); // [1, 2, 15]


let users = {}as User;
[users.name, users.surname] = "Kelvin Doe".split(' ');
console.log(users);
console.log(users.name);


// Useing the Rest operator in function

// function sumElement(...num:number[]):number{
//     return num.reduce((sum, currentNum)=> sum + currentNum,0);
// }
// console.log(sumElement([1,2,3,4,5,6,7,8,9,10]))

function sumElement(...num:number[]): number{
    return num.reduce((sum, currentNum)=> sum + currentNum,0);
}
let a = [1,2,3,4,5,6,7,8,9,10];
console.log(sumElement(...a));

// default values
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];
console.log(name3); // Julius (from array)
console.log(surname3); // Anonymous (default used)const team = [ "Bob", "Fred", "Jim“]

