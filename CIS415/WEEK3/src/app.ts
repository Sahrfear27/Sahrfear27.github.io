//Distubance: Allows us to unpack arrays and object into a set of variables

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
const [fName, sName, lName] =team;
[fName, sName, lName].forEach((ele)=> console.log(`The ${ele} is now: ${ele.toLowerCase()}`))
// console.log(`${fName} is now : ${fName.toLowerCase()}`);

let arr2 = [ 1, 2, 15 ];
// the method reorders the content of arr
arr.sort();
console.log( arr2 ); // [1, 2, 15]