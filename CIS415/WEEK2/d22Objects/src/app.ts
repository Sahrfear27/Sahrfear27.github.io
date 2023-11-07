// Generic Functions
function creatPair<S, T> (word: S, num:T): [S, T]{
    return [word, num];

}
console.log(creatPair("Hello", 40));


// Arrow Function 
let num = (a:number, b:number)=> a * b;
console.log(num(5,6));

let names = (): string =>{return "I am sahrfear"}

console.log(names())
// Function Signature: Talk about the return type of the function

// Inferred type delcaration for object literals
let employee = {
    name: "Sahrfear",
    id: 200,
} as Person; //tell TypeScript that you want to treat the employee object as having the Person type

// Declare the object type
type Person = {
    name: string,
    id: number,
    isActive? : boolean;
}

// Function declaration
function greet(person: Person) {
    return "Hello " + person.name;
}
console.log(greet(employee));

employee.isActive = false;

console.log(employee);

// Add  properties from the objects
//Error : Property 'isAdmin' does not exist on type '{ name: string; age: number; }'.ts(2339)==> ypeScript is treating the object user as having a specific type, 
//and it doesn't recognize the "isAdmin" property because it's not present in the type definition.
//Use  type assertion in the type defination (?) which means optional
type User = {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
}

let user: User = {
    name: "John",
    age: 30
}as User;

user.isAdmin = true;

console.log(user);
// Remove  Property from the object
delete user.isAdmin
console.log(user);


// The following will log true to the console.

